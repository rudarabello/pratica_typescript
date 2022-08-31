import { Router } from "express";
import battleRoute from "./battleRouter";
import rankingRoute from "./rankingRouter";

const routes = Router();

routes.use(battleRoute);
routes.use(rankingRoute);

export default routes;