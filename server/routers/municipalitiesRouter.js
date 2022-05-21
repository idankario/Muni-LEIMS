import { Router } from "express";
const municipalitiesRouter = new Router();
import municipalitiesCtl from "../controllers/municipalities";

municipalitiesRouter.get("/highest", municipalitiesCtl.highestmunicipality);
municipalitiesRouter.get("/lowest", municipalitiesCtl.lowestmunicipality);
municipalitiesRouter.get("/top5", municipalitiesCtl.getTopFivemunicipality);
municipalitiesRouter.get("/last5", municipalitiesCtl.getLastFivemunicipality);
municipalitiesRouter.get("/", municipalitiesCtl.getmunicipalities);
export default municipalitiesRouter;
