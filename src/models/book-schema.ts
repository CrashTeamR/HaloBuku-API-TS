import { Schema, model } from "mongoose";

const BookSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
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
    type: Number,
    default: 0,
    required: true,
  },
});

const Book = model("Book", BookSchema);

export default Book;
