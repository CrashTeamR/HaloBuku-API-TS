import { Schema, model } from "mongoose";

const CartSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },

  books: {
    type: Array,
  },
});

const Cart = model("Cart", CartSchema);

export default Cart;
