import { Router } from "express";
const OfficesRouter = new Router();
import OfficesCtl from "../controllers/offices";
//Type of office
OfficesRouter.get("/type/:id", OfficesCtl.typeOffice);
//Get office by id
OfficesRouter.get("/:id", OfficesCtl.officeById);
export default OfficesRouter;
