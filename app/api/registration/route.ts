import { NextResponse } from "next/server";
import { getDb } from "@/src/lib/mysqldb";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      organization,
      designation,
      gender,
      state,
      district,
      termsAccepted,
      aadharNumber,
      panNumber,
    } = body;

    // Basic server-side validation
    if (
      !name ||
      !email ||
      !phone ||
      !gender ||
      !state ||
      !district ||
      !termsAccepted ||
      !aadharNumber ||
      !panNumber
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const db = getDb();

    const query = `
      INSERT INTO registrations
      (name, email, phone, organization, designation, gender, state, district, termsaccepted,aadharNumber,
      panNumber)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await (
      await db
    ).execute(query, [
      name,
      email,
      phone,
      organization || null,
      designation || null,
      gender,
      state,
      district,
      termsAccepted,
      aadharNumber,
      panNumber,
    ]);

    return NextResponse.json(
      { message: "Registration successful" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
