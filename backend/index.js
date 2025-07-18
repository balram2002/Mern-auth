import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// const __dirname = path.resolve();

connectDB();

app.use(cors({
    origin: ["https://authix-bd.vercel.app", "https://authix-api.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('authix api running new deploy');
});

app.use("/api/auth", authRoutes);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// });

app.listen(PORT, () => {
	console.log("Server is running on port: ", PORT);
});
