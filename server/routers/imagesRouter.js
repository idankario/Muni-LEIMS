import { Router } from "express";
const ImagesRouter = new Router();
import { VerifyToken } from "../middleware/auth";
import ImagesCtl from "../controllers/images";

ImagesRouter.post("/", VerifyToken, ImagesCtl.uplaodImage);
ImagesRouter.post(
  "/energyintensity",
  VerifyToken,
  ImagesCtl.insertEnergyIntensity
);
ImagesRouter.post("/boundingbox", VerifyToken, ImagesCtl.insertBoundingBox);
ImagesRouter.get("/imagesname/:id", VerifyToken, ImagesCtl.getImagesName);
ImagesRouter.patch(
  "/disactive",
  VerifyToken,
  ImagesCtl.disactiveStatisticalReport
);
ImagesRouter.patch("/active", VerifyToken, ImagesCtl.activeStatisticalReport);

ImagesRouter.get("/", ImagesCtl.getImages);
export default ImagesRouter;
