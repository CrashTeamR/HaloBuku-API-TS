import { Router } from "express";
import authController from "./controllers/auth-controllers";
import bookContollers from "./controllers/book-controller";
import verifyToken from "./libs/verify-token";

const router = Router();

router.post("/register", authController.register);
router.post("/verify", authController.verify);
router.post("/login", authController.login);

router.post("/books", verifyToken, bookContollers.addBook);
router.get("/books", bookContollers.getAllBooks);
router.get("/books/:id", bookContollers.getBookById);

export default router;
