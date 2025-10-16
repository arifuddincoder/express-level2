require("dotenv").config();
import { client } from "../config/mongodb";
import app from "./app";

let server;
const port = 3000;

const bootstrap = async () => {
	await client.connect();
	const db = await client.db("express-level2-todosdb");

	const todosCollection = db.collection("todos");

	server = app.listen(port, () => {
		console.log(`Example app listening on port ${port}`);
	});
};

bootstrap();
