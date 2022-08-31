import { Router } from "express";
const OfficesRouter = new Router();
import { VerifyToken } from "../middleware/auth";
import OfficesCtl from "../controllers/offices";

OfficesRouter.get("/type/:id", VerifyToken, OfficesCtl.typeOffice);
OfficesRouter.get("/:id", VerifyToken, OfficesCtl.officeById);
export default OfficesRouter;
