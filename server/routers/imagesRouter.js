import { Router } from "express";
const imagesRouter = new Router();
import imagesCtl from "../controllers/images";

imagesRouter.post("/", imagesCtl.uplaodImage);

export default imagesRouter;
