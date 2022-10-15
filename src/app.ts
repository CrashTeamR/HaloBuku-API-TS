import express, { Request, Response, json } from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("HEllo");
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});

export default app;
