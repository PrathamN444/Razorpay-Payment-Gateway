import express from "express";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors";
import { connectToDB } from "./data/database.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    credentials: true,
    "origin": "http://localhost:5173",
    "methods": ['POST', 'GET', 'DELETE', 'PUT'],
}));

connectToDB();

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});


app.use("/api", paymentRoute);

app.get("/api/getkey", (req,res) => {
    res.status(200).json({key: process.env.RAZORPAY_API_KEY});
})

app.listen(process.env.port, () => {
    console.log(`server working on port ${process.env.port}`)
});