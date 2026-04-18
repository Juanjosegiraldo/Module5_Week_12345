import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Property from "@/database/models/Property";

// GET /api/properties -> list all properties
export async function GET() {
  try {
    await connectDB();
    const properties = await Property.find();
    return NextResponse.json(properties);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching properties", error }, { status: 500 });
  }
}

// POST /api/properties -> create a new property
export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const newProperty = await Property.create(body);
    return NextResponse.json(newProperty, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating property", error }, { status: 500 });
  }
}
