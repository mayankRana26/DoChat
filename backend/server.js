import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
//geting error here
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";


dotenv.config();
const corsOptions = {
  origin: "https://frabjous-pithivier-cf6e21.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,  // only if you need cookies or auth headers
};

app.use(cors(corsOptions));

const __dirname = path.resolve();

// PORT should be assigned after calling dotenv.config() because we need to access the env variables.
const PORT = process.env.PORT || 5000;
const BACKEND_URL = "https://dochat-3.onrender.com";

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.get("/", (req, res) => {
	res.send({
		activeStatus: "true",
		error: "false",
	})
})
app.use(`${BACKEND_URL}/api/auth`, authRoutes);
app.use(`${BACKEND_URL}/api/messages`, messageRoutes);
app.use(`${BACKEND_URL}/api/users`, userRoutes);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/*splat", (req, res) => {
 res.sendFile(path.join(__dirname, "frontend","dist","index.html"));
});


server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});