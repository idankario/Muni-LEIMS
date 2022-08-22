import { Router } from "express";
import SwitchboardsCtl from "../controllers/switchboards";
const SwitchboardsRouter = new Router();

SwitchboardsRouter.get("/highest/:id", SwitchboardsCtl.highestSwitchboard);
SwitchboardsRouter.get("/lowest/:id", SwitchboardsCtl.lowestSwitchboard);
SwitchboardsRouter.get("/top5/:id", SwitchboardsCtl.top5Switchboards);
SwitchboardsRouter.get("/last5/:id", SwitchboardsCtl.last5Switchboards);
SwitchboardsRouter.get(
  "/location/energyintensity",
  SwitchboardsCtl.getAllSwEnergyIntensity
);
SwitchboardsRouter.get(
  "/location/energyintensity/:id",
  SwitchboardsCtl.getSwEnergyIntensity
);
SwitchboardsRouter.get("/locations/:id", SwitchboardsCtl.switchboardsLocation);
SwitchboardsRouter.get("/:id", SwitchboardsCtl.switchboardsById);
SwitchboardsRouter.put("/", SwitchboardsCtl.updateSwitchboards);
SwitchboardsRouter.post("/", SwitchboardsCtl.insertSwitchboards);
export default SwitchboardsRouter;
