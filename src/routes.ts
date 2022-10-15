import { Router } from "express";
import authController from "./controllers/auth-controllers";

const router = Router();

router.post("/register", authController.register);
router.post("/verify", authController.verify);
router.post("/login", authController.login);

export default router;
