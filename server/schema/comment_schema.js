import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
  postAuthor: {
    type: String,
    required: true,
  },
  commentAuthor_email: {
    type: String,
    required: true,
  },
  commentAuthor_name: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

const comment = mongoose.model("comment", CommentSchema);

export default comment;
