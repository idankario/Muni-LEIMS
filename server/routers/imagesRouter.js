import { Router } from "express";
const ImagesRouter = new Router();
import ImagesCtl from "../controllers/images";

ImagesRouter.post("/", ImagesCtl.uplaodImage);
ImagesRouter.post("/energyintensity", ImagesCtl.insertEnergyIntensity);
ImagesRouter.post("/boundingbox", ImagesCtl.insertBoundingBox);
ImagesRouter.get("/imagesname/:id", ImagesCtl.getImagesName);
ImagesRouter.patch("/disactive", ImagesCtl.disactiveStatisticalReport);
ImagesRouter.patch("/active", ImagesCtl.activeStatisticalReport);
ImagesRouter.get("/", ImagesCtl.getImages);
export default ImagesRouter;
