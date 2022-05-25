import { Router } from "express";
const ImagesRouter = new Router();
import ImagesCtl from "../controllers/images";

ImagesRouter.post("/", ImagesCtl.uplaodImage);

export default ImagesRouter;
