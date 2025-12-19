// /app/api/payments/webhook/route.ts
import { NextResponse } from "next/server";
import { getConnection } from "@/src/lib/Sqldb";
import { verifyRazorpaySignature } from "@/src/lib/razorpay";
import { generateReceiptPdf } from "@/src/lib/pdf";
import { sendDonationEmail } from "@/src/lib/mail";

export async function POST(req: Request) {
  const bodyText = await req.text();
  const signature = req.headers.get("x-razorpay-signature") || "";
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET!;

  if (!verifyRazorpaySignature(bodyText, signature, webhookSecret)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(bodyText);
  try {
    if (event.event === "payment.captured" || event.event === "payment.authorized") {
      const payment = event.payload?.payment?.entity;
      const orderId = payment.order_id;
      const paymentId = payment.id;
      const status = payment.status; // 'captured'

      // Update DB record matching PaymentOrderId
      const pool = await getConnection();
      await pool
        .request()
        .input("PaymentId", paymentId)
        .input("PaymentSignature", signature)
        .input("PaymentStatus", status)
        .input("PaymentOrderId", orderId)
        .query(
          `UPDATE Donations
           SET PaymentId = @PaymentId,
               PaymentSignature = @PaymentSignature,
               PaymentStatus = @PaymentStatus
           WHERE PaymentOrderId = @PaymentOrderId`
        );

      // Fetch donation to email receipt
      const sel = await pool
        .request()
        .input("PaymentOrderId", orderId)
        .query(`SELECT TOP 1 * FROM Donations WHERE PaymentOrderId = @PaymentOrderId`);

      const donation = sel.recordset?.[0];
      if (donation) {
        // generate PDF and send email
        try {
          const pdfBuffer = await generateReceiptPdf(donation);
          await sendDonationEmail(donation.Email, "Thank you for your donation", `Hi ${donation.Name},\n\nThanks for donating ${donation.Amount}. Please find attached receipt.`, pdfBuffer);

          // mark EmailSent
          await pool
            .request()
            .input("Id", donation.Id)
            .query(`UPDATE Donations SET EmailSent = 1 WHERE Id = @Id`);
        } catch (e) {
          console.error("Receipt/send email error:", e);
        }
      }
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }
}
