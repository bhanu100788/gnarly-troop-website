import { NextResponse } from "next/server";
import { getDb } from "@/src/lib/mysqldb";
// import { razorpay } from "@/src/lib/razorpay";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received body:", body);

    /* ================= VALIDATION ================= */

    if (!body.title)
      return NextResponse.json({ error: "title required" }, { status: 400 });

    if (!body.amount)
      return NextResponse.json({ error: "amount required" }, { status: 400 });

    const numeric = Number(String(body.amount).replace(/[^0-9.-]+/g, ""));
    if (!numeric || numeric <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const amountInPaise = numeric * 100;

    /* ================= DB CONNECTION ================= */

    let db;
    try {
      db = await getDb();
      console.log("MySQL connection OK");
    } catch (e) {
      console.error("DB CONNECTION ERROR:", e);
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 }
      );
    }

    /* ================= INSERT ================= */

    let result;
    try {
      const [res]: any = await db.execute(
        `
        INSERT INTO Donations
        (
          DonationId,
          Title,
          Amount,
          AmountInPaise,
          Name,
          Email,
          Country,
          State,
          District,
          Pin,
          Pan,
          Aadhar,
          PaymentOrderId,
          PaymentStatus
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')
        `,
        [
          body.donationId || "",
          body.title,
          String(body.amount),
          amountInPaise,
          body.name || "",
          body.email || "",
          body.country || "",
          body.state || "",
          body.district || "",
          body.pin || "",
          body.pan || "",
          body.aadhar || "",
          "", // PaymentOrderId (Razorpay later)
        ]
      );

      result = res;
      console.log("Insert result:", result);
    } catch (e: any) {
      console.error("MYSQL INSERT ERROR:", e);
      return NextResponse.json(
        { error: "Database insert failed", details: e.message },
        { status: 500 }
      );
    }

    /* ================= RESPONSE ================= */

    return NextResponse.json(
      {
        message: "Order created",
        donationIdInternal: result.insertId || null,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("FATAL ERROR:", err);
    return NextResponse.json(
      { error: "Server error", details: err.message },
      { status: 500 }
    );
  }
}
