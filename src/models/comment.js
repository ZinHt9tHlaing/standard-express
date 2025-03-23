import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: Boolean,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model("Comment", commentSchema);
