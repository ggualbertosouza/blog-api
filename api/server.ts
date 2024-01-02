import express from "express";
import "dotenv/config";
import { errorHandler } from "middlewares/ErrorHandler";
import { HttpException } from "exceptions/HttpException";
import { BadRequest } from "exceptions/BadRequest";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.get("/", () => {
    throw new BadRequest();
});

app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});
