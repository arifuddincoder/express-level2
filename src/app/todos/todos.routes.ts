import express, { Request, Response } from "express";
import { client } from "../../config/mongodb";

export const todosRouter = express.Router();

todosRouter.post("/create", async (req: Request, res: Response) => {
	const db = await client.db("express-level2-todosdb");
	const todosCollection = db.collection("todos");
	const result = await todosCollection.insertOne({
		title: "task 1",
		description: "task 1 description",
		priority: "high",
		isComplete: false,
	});

	// const todos = todosCollection.find({});

	res.json(result);
});
