import express, { Application, Request, Response } from "express";
import { todosRouter } from "./todos/todos.routes";
const app: Application = express();

app.use("/todos", todosRouter);

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!!");
});

export default app;
