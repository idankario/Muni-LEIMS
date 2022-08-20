import { Router } from "express";
const OfficesRouter = new Router();
import {VerifyToken } from "../middleware/auth";
import OfficesCtl from "../controllers/offices";
//Type of office
OfficesRouter.get("/type/:id",VerifyToken, OfficesCtl.typeOffice);
//Get office by id
OfficesRouter.get("/:id",VerifyToken, OfficesCtl.officeById);
export default OfficesRouter;
