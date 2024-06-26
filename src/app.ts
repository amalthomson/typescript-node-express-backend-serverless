// src/app.ts
import express from "express";
import userRouter from "./route/userRouter";
import dotenv from "dotenv";
import serverless from 'serverless-http';

dotenv.config(); 

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/", userRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export const handler = serverless(app);