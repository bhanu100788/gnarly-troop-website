// /app/api/donations/[id]/receipt/route.ts
export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/src/lib/Sqldb";
import { generateReceiptPdf } from "@/src/lib/pdf";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // 🔥 REQUIRED IN NEXT 15

  try {
    const pool = await getConnection();

    const sel = await pool
      .request()
      .input("Id", id)
      .query(`SELECT * FROM Donations WHERE Id = @Id`);

    const donation = sel.recordset?.[0];

    if (!donation) {
      return NextResponse.json(
        { error: "Not found" },
        { status: 404 }
      );
    }

    const pdfBuffer = await generateReceiptPdf(donation);

    return new Response(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=receipt-${id}.pdf`,
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "internal" },
      { status: 500 }
    );
  }
}
