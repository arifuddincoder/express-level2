import app from "./app";
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
let server;
const port = 3000;

const client = new MongoClient(process.env.MONGODB_URI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

const bootstrap = async () => {
	await client.connect();
	const db = await client.db("express-level2-todosdb");
	console.log("Pinged your deployment. You successfully connected to MongoDB!");

	const todosCollection = db.collection("todos");

	server = app.listen(port, () => {
		console.log(`Example app listening on port ${port}`);
	});
};

bootstrap();
