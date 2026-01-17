// server.js in root
import express from "express";
import boardHandler from "./api/bingo/board.js";
import cors from 'cors';

const app = express();
app.use(cors({
	origin: true, // IMPORTANT: reflect request origin
	methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key']
}));
// Wrap your Vercel handler for Express
app.get("/api/bingo/board", (req, res) => boardHandler(req, res));

app.listen(3000, () => console.log("API running on http://localhost:3000"));
