import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
    quantity: {
      type: Number,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
