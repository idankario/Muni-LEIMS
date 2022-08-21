import { Router } from "express";
const MunicipalitiesRouter = new Router();
import {VerifyToken } from "../middleware/auth";
import MunicipalitiesCtl from "../controllers/municipalities";

MunicipalitiesRouter.get("/highest",VerifyToken, MunicipalitiesCtl.highestMunicipality);
MunicipalitiesRouter.get("/lowest",VerifyToken, MunicipalitiesCtl.lowestMunicipality);
MunicipalitiesRouter.get("/top5",VerifyToken, MunicipalitiesCtl.top5Municipalities);
MunicipalitiesRouter.get("/last5",VerifyToken, MunicipalitiesCtl.last5Municipalities);
MunicipalitiesRouter.get("/",VerifyToken, MunicipalitiesCtl.municipalities);

export default MunicipalitiesRouter;
