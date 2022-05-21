import { Router } from "express";
const officesRouter = new Router();
import officesCtl from "../controllers/offices";
//Type of office
officesRouter.get("/type/:id", officesCtl.typeOffice);
//Get office by id
officesRouter.get("/:id", officesCtl.officeById);
export default officesRouter;
