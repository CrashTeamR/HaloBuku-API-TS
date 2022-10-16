import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token)
      return res
        .status(401)
        .json({ message: "You don't have access, please sign in." });

    const verified = verify(token, process.env.SECRET_KEY!);
    req.app.locals.user = verified;

    next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export default verifyToken;
