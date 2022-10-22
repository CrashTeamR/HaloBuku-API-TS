import { Request, Response } from "express";
import Book from "../models/book-schema";
import dotenv from "dotenv";

const addBook = async (req: Request, res: Response) => {
  const { role } = req.app.locals.user;

  if (role !== "admin")
    return res
      .status(401)
      .json({ message: "Only admin can add book to database" });

  const {
    _id,
    title,
    publishedYear,
    author,
    description,
    image,
    price,
    isAvailable,
    quantity,
  } = req.body;

  try {
    await Book.create({
      _id,
      title,
      publishedYear,
      author,
      description,
      image,
      price,
      isAvailable,
      quantity,
    });

    return res.status(201).json({ message: "Book has been added to database" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ books });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

const getBookById = async (req: Request, res: Response) => {
  const _id = req.params.id;

  try {
    const book = await Book.findById({ _id: _id });

    return res.status(200).json({ book });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const deleteBookById = async (req: Request, res: Response) => {
  const _id = req.params.id;
  if (req.app.locals.user.role !== "admin")
    return res.status(401).json({ message: "Only admin can delete books" });

  try {
    const book = await Book.findByIdAndDelete({ _id: _id });

    if (book) {
      return res.status(200).json({ message: "Delete success" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const bookContollers = {
  addBook,
  getAllBooks,
  getBookById,
  deleteBookById,
};

export default bookContollers;
