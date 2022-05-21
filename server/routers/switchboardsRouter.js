import { Router } from "express";
import switchboardsCtl from "../controllers/switchboards";
const switchboardsRouter = new Router();

switchboardsRouter.get("/highest/:id", switchboardsCtl.highestSwitchboards);
switchboardsRouter.get("/lowest/:id", switchboardsCtl.lowestSwitchboards);
switchboardsRouter.get("/top5/:id", switchboardsCtl.getTopFiveSwitchboards);
switchboardsRouter.get("/last5/:id", switchboardsCtl.getLastFiveSwitchboards);
switchboardsRouter.get("/:id", switchboardsCtl.getSwitchboardsById);
export default switchboardsRouter;
