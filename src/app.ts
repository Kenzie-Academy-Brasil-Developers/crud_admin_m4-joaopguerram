import express, { Application, json } from "express";
import "express-async-errors";
import { errorHandler } from "./error";
import usersRoutes from "./routers/users.router";

const app: Application = express();
app.use(json());

app.use("/users", usersRoutes);

app.use(errorHandler);

export default app;
