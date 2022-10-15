import { sign } from "jsonwebtoken";
import { compare, hash } from "bcrypt";
import sendMail from "../libs/mail-sender";
import User from "../models/user-schema";
import { Response, Request } from "express";

declare const process: {
  env: {
    SECRET_KEY: string;
  };
};

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const isExist = await User.findOne({ email });
  const hashedPass = await hash(password, 10);

  if (isExist)
    return res.status(400).json({
      message: "Email has been used, try another email",
    });

  const otpGenerator = (): Number => {
    return Math.floor(Math.random() * 1000000);
  };

  const otp = otpGenerator();

  try {
    await User.create({
      name,
      email,
      password: hashedPass,
      otp,
    });

    await sendMail({
      to: email,
      otp,
    });

    return res.status(201).json({
      message: "Register success, please check your email and verify.",
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const verify = async (req: Request, res: Response) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "Email is invalid" });
    if (user && user.otp !== otp)
      return res.status(400).json({ message: "OTP is invalid" });

    await User.findByIdAndUpdate(user._id, {
      $set: { verified: true },
    });

    return res.status(200).json({ message: "Verified!" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "Email not found" });

    const validPassword = await compare(password, user?.password!);

    if (!validPassword) res.status(400).json({ message: "Wrong Password!" });

    if (!user.verified)
      res.status(401).json({ message: "Email is not verified!" });

    const userToken = sign(
      {
        _id: user._id,
        name: user.name,
        role: user.role,
      },
      process.env.SECRET_KEY,
      { expiresIn: "2h" }
    );

    return res.status(200).json({ userToken });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const authController = {
  register,
  verify,
  login,
};

export default authController;
