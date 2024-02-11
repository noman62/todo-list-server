import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = Schema;

const productSchema = new Schema(
  {
    productName: {
      type: String,
    },
    unitPrice: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("product", productSchema);
