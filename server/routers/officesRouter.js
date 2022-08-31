import { Router } from "express";
const OfficesRouter = new Router();
import OfficesCtl from "../controllers/offices";
import { VerifyToken } from "../middleware/auth";
//Type of office
OfficesRouter.get("/type/:id", VerifyToken, OfficesCtl.typeOffice);
//Get office by id
OfficesRouter.get("/:id", OfficesCtl.officeById);
export default OfficesRouter;
