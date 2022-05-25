import { Router } from "express";
const MunicipalitiesRouter = new Router();
import MunicipalitiesCtl from "../controllers/municipalities";

MunicipalitiesRouter.get("/highest", MunicipalitiesCtl.highestMunicipality);
MunicipalitiesRouter.get("/lowest", MunicipalitiesCtl.lowestMunicipality);
MunicipalitiesRouter.get("/top5", MunicipalitiesCtl.top5Municipalities);
MunicipalitiesRouter.get("/last5", MunicipalitiesCtl.last5Municipalities);
MunicipalitiesRouter.get("/", MunicipalitiesCtl.municipalities);

export default MunicipalitiesRouter;
