import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    minLength: 6,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minLength: 8,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  verified: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: Number,
    required: true,
  },
  cart: {
    type: Array,
    default: [],
  },
});

const User = model("User", UserSchema);

export default User;
