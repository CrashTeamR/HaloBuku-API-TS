import express, { Request, Response, json } from "express";
import dotenv from "dotenv";
import router from "./routes";
import mongoose from "mongoose";

dotenv.config();

try {
  mongoose.connect(process.env.DB_URI!, () => {
    console.log("connected to database");
  });
} catch (error) {
  console.log(error);
}
const app = express();

app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello, this is root for HaloBuku API");
});

app.use("/api/v1/", router);

app.listen(5500, () => {
  console.log("http://localhost:5500");
});

export default app;
