import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    categories: { type: Array },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
