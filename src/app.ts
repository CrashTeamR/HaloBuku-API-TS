import express, { Request, Response, json } from "express";
import dotenv from "dotenv";
import router from "./routes";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const PORT = 5000;

try {
  mongoose.connect(process.env.DB_URI!, () => {
    console.log("connected to database");
  });
} catch (error) {
  console.log(error);
}
const app = express();

app.use(json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello, this is root for HaloBuku API");
});

app.use("/api/v1/", router);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

export default app;
