import express from "express";
import "dotenv/config";
import { errorHandler } from "middlewares/ErrorHandler";
import router from "routes";
import cookieParser from "cookie-parser";
import cors from "cors";

const PORT = process.env.PORT;
const app = express();
app.use(
    cors({
        origin: "http://localhost:3000",
    }),
);

app.use(express.json());
app.use(cookieParser());

app.use(router);

app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});
