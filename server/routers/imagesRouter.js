import { Router } from "express";
const ImagesRouter = new Router();
import { VerifyToken } from "../middleware/auth";
import ImagesCtl from "../controllers/images";

ImagesRouter.post("/", ImagesCtl.uplaodImage);
ImagesRouter.post("/energyintensity", ImagesCtl.insertEnergyIntensity);
ImagesRouter.post("/boundingbox", ImagesCtl.insertBoundingBox);
ImagesRouter.get("/imagesname/:id", ImagesCtl.getImagesName);
ImagesRouter.patch(
  "/disactive",
  VerifyToken,
  ImagesCtl.disactiveStatisticalReport
);
ImagesRouter.patch("/active", VerifyToken, ImagesCtl.activeStatisticalReport);
ImagesRouter.get("/", ImagesCtl.getImages);
export default ImagesRouter;
