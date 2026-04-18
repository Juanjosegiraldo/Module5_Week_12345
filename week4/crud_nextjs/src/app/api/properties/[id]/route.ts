import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Property from "@/database/models/Property";

// PUT /api/properties/[id] -> update a property by id
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const body = await request.json();
    const updated = await Property.findByIdAndUpdate(params.id, body, { new: true });
    if (!updated) return NextResponse.json({ message: "Property not found" }, { status: 404 });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ message: "Error updating property", error }, { status: 500 });
  }
}

// DELETE /api/properties/[id] -> delete a property by id
export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const deleted = await Property.findByIdAndDelete(params.id);
    if (!deleted) return NextResponse.json({ message: "Property not found" }, { status: 404 });
    return NextResponse.json({ message: "Property deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting property", error }, { status: 500 });
  }
}
