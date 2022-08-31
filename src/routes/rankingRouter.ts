import { Router } from "express";
import { getRank } from "../controllers/rankingController";

const rankingRoute = Router();

rankingRoute.get('/ranking',getRank);

export default rankingRoute;