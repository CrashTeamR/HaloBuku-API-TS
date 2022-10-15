import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import dotenv from "dotenv";

dotenv.config();

declare const process: {
  env: {
    MAIL_HOST: string;
    MAIL_EMAIL: string;
    MAIL_PASS: string;
    MAIL_PORT: number;
  };
};

type Params = {
  to: Mail.Address;
  otp: Number;
};

// console.log(process.env.MAIL_HOST);

const MAIL_CONFIG = {
  host: process.env.MAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASS,
  },
};

const transporter = nodemailer.createTransport(MAIL_CONFIG);

const sendMail = async ({ to, otp }: Params) => {
  try {
    const email = transporter.sendMail({
      from: MAIL_CONFIG.auth.user,
      to: to,
      subject: "Welcome to the HalloBuku",
      html: `
        <h2>Welcome to the HaloBuku</h2>
        <p>Please verify your email, your otp is ${otp}</p>
      `,
    });

    return email;
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
