import mongoose from "mongoose";

const todoItemSchema = mongoose.Schema(
  {
    task: { type: String, required: true },
    date: Date,
    completed: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("TodoItem", todoItemSchema);
