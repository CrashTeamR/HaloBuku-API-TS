import { Router } from "express";
import authController from "./controllers/auth-controllers";
import bookContollers from "./controllers/book-controller";
import cartControllers from "./controllers/cart-controllers";
import verifyToken from "./libs/verify-token";

const router = Router();

router.post("/register", authController.register);
router.post("/verify", authController.verify);
router.post("/login", authController.login);

router.post("/books", verifyToken, bookContollers.addBook);
router.get("/books", bookContollers.getAllBooks);
router.get("/books/:id", bookContollers.getBookById);
router.delete("/books/:id", verifyToken, bookContollers.deleteBookById);

router.get("/cart", verifyToken, cartControllers.getCart);
router.post("/cart/:id", verifyToken, cartControllers.addToCart);
router.delete("/cart/:id", verifyToken, cartControllers.removeFromCart);

export default router;
