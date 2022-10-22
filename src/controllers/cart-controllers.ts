import { Request, Response } from "express";
import Book from "../models/book-schema";
import Cart from "../models/cart-schema";
import User from "../models/user-schema";

const getCart = async (req: Request, res: Response) => {
  const { _id } = req.app.locals.user;
  const userCart = await Cart.findOne({ userId: _id });

  res.json(userCart);
};

const addToCart = async (req: Request, res: Response) => {
  const bookId = req.params.id;
  const { _id } = req.app.locals.user;

  try {
    const book = await Book.findById(bookId);
    const userCart = await Cart.findOne({ _id });

    if (userCart) {
      await Cart.updateOne({ userId: _id }, { $push: { books: book } });
    } else {
      await Cart.create({ _id, books: book });
    }

    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const removeFromCart = async (req: Request, res: Response) => {
  const bookId: number = parseInt(req.params.id);
  const { _id } = req.app.locals.user;

  console.log(bookId);

  try {
    await Cart.updateOne(
      { _id: _id },
      { $pull: { books: { _id: bookId } } },
      { safe: true }
    ).exec();

    // const res = await Cart.findOne({ _id });
    // await res?.books.({ _id: bookId });

    res.status(200).json({ message: "Delete Success" });
  } catch (error) {
    res.status(400);
  }
};

const cartControllers = {
  getCart,
  addToCart,
  removeFromCart,
};

export default cartControllers;
