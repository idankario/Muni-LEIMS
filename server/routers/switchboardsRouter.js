import { Router } from "express";
import SwitchboardsCtl from "../controllers/switchboards";
import { VerifyToken } from "../middleware/auth";
const SwitchboardsRouter = new Router();

SwitchboardsRouter.get(
  "/highest/:id",
  VerifyToken,
  SwitchboardsCtl.highestSwitchboard
);
SwitchboardsRouter.get(
  "/lowest/:id",
  VerifyToken,
  SwitchboardsCtl.lowestSwitchboard
);
SwitchboardsRouter.get(
  "/top5/:id",
  VerifyToken,
  SwitchboardsCtl.top5Switchboards
);
SwitchboardsRouter.get(
  "/last5/:id",
  VerifyToken,
  SwitchboardsCtl.last5Switchboards
);
SwitchboardsRouter.get(
  "/location/energyintensity",
  VerifyToken,
  SwitchboardsCtl.getAllSwEnergyIntensity
);
SwitchboardsRouter.get(
  "/location/energyintensity/:id",
  VerifyToken,
  SwitchboardsCtl.getSwEnergyIntensity
);
SwitchboardsRouter.get(
  "/locations/:id",
  VerifyToken,
  SwitchboardsCtl.switchboardsLocation
);
SwitchboardsRouter.get("/:id", VerifyToken, SwitchboardsCtl.switchboardsById);
SwitchboardsRouter.put("/", VerifyToken, SwitchboardsCtl.updateSwitchboards);
SwitchboardsRouter.post("/", VerifyToken, SwitchboardsCtl.insertSwitchboards);
export default SwitchboardsRouter;
