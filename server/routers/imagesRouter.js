import { Router } from "express";
const ImagesRouter = new Router();
import ImagesCtl from "../controllers/images";

ImagesRouter.post("/", ImagesCtl.uplaodImage);
ImagesRouter.post("/energyintensity", ImagesCtl.insertEnergyIntensity);
ImagesRouter.post("/boundingbox", ImagesCtl.insertBoundingBox);

export default ImagesRouter;
