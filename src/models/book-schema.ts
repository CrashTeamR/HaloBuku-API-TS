import { Schema, model } from "mongoose";

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    default: undefined,
  },
  author: {
    type: String,
    default: "unknown",
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: false,
  },
  quantity: {
    type: String,
    default: 0,
    required: true,
  },
});

const Book = model("Book", BookSchema);

export default Book;
