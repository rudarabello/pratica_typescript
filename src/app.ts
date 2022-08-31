import express,{ json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(routes)

const PORT = process.env.PORT;

app.listen(PORT || 5000, () => console.log("Conectado"));