import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: String,
    location: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models?.user || mongoose.model("user", userSchema);
