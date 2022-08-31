import { Router } from "express";
import { battle } from "../controllers/battleController";

const battleRoute = Router();

battleRoute.post('/battle',battle);

export default battleRoute;