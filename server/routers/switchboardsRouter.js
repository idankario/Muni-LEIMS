import { Router } from "express";
import SwitchboardsCtl from "../controllers/switchboards";
const SwitchboardsRouter = new Router();
SwitchboardsRouter.get("/highest/:id", SwitchboardsCtl.highestSwitchboard);
SwitchboardsRouter.get("/lowest/:id", SwitchboardsCtl.lowestSwitchboard);
SwitchboardsRouter.get("/top5/:id", SwitchboardsCtl.top5Switchboards);
SwitchboardsRouter.get("/last5/:id", SwitchboardsCtl.last5Switchboards);
SwitchboardsRouter.get("/locations", SwitchboardsCtl.allSwitchboardsLocation);
SwitchboardsRouter.get("/location/:id", SwitchboardsCtl.switchboardsLocation);
SwitchboardsRouter.get("/:id", SwitchboardsCtl.switchboardsById);

export default SwitchboardsRouter;
