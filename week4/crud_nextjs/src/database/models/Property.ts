import mongoose, { Schema, model, models } from "mongoose";

// Property schema definition with required fields and defaults
const PropertySchema = new Schema(
  {
    name: { type: String, required: true },
    value: { type: Number, required: true },
    img: { type: String, default: "" },
  },
  { timestamps: true }
);

// Prevent model overwrite on hot reload by reusing existing model if present
const Property = models.Property || model("Property", PropertySchema);

export default Property;
