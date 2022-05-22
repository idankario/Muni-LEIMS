import { Router } from "express";
import switchboardsCtl from "../controllers/switchboards";
const switchboardsRouter = new Router();

switchboardsRouter.get("/highest/:id", switchboardsCtl.highestSwitchboard);
switchboardsRouter.get("/lowest/:id", switchboardsCtl.lowestSwitchboard);
switchboardsRouter.get("/top5/:id", switchboardsCtl.getTopFiveSwitchboards);
switchboardsRouter.get("/last5/:id", switchboardsCtl.getLastFiveSwitchboards);
switchboardsRouter.get("/locations", switchboardsCtl.getAllSwLocation);

switchboardsRouter.get("/location/:id", switchboardsCtl.getSwLocation);
switchboardsRouter.get("/:id", switchboardsCtl.getSwitchboardById);

export default switchboardsRouter;
