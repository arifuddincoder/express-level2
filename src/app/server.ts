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
	await client.db("admin").command({ ping: 1 });
	console.log("Pinged your deployment. You successfully connected to MongoDB!");
	server = app.listen(port, () => {
		console.log(`Example app listening on port ${port}`);
	});
};

bootstrap();
