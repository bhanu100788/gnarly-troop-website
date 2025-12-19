// /app/api/donations/list/route.ts
import { NextResponse } from "next/server";
import { getConnection } from "@/src/lib/Sqldb";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = Number(url.searchParams.get("page") || "1");
  const pageSize = Math.min(Number(url.searchParams.get("pageSize") || "20"), 100);
  const q = url.searchParams.get("q") || "";
  const offset = (page - 1) * pageSize;

  try {
    const pool = await getConnection();
    // Basic filtering by q (name/email/title)
    const result = await pool
      .request()
      .input("q", `%${q}%`)
      .input("offset", offset)
      .input("pageSize", pageSize)
      .query(`
        SELECT *
        FROM Donations
        WHERE (@q = '%%' OR (Name LIKE @q OR Email LIKE @q OR Title LIKE @q))
        ORDER BY CreatedAt DESC
        OFFSET @offset ROWS FETCH NEXT @pageSize ROWS ONLY;

        SELECT COUNT(*) as total FROM Donations WHERE (@q = '%%' OR (Name LIKE @q OR Email LIKE @q OR Title LIKE @q));
      `);

    const rows = result.recordset[0]??0;
    const total = result.recordset?.[1]?.[0]?.total ?? 0;

    return NextResponse.json({ rows, total, page, pageSize });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "server" }, { status: 500 });
  }
}
