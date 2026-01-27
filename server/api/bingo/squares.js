import { setCors } from "../../lib/cors.js";
import connectDB from "../../db/connect.js";
import { getAllSquares } from "../../lib/squares.js";
export default async function handler(req, res){
	setCors(req, res);
	if (req.method === "OPTIONS") {
		return res.status(200).end();
	}
	switch(req.method) {
		case 'GET': 
			await connectDB();
			const allSquares = await getAllSquares();
			return res.status(200).json(allSquares);
		default: 
			return res.status(401).json({message: 'unauthorized'});
	}
}