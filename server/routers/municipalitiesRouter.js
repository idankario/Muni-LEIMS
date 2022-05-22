import { Router } from "express";
const municipalitiesRouter = new Router();
import municipalitiesCtl from "../controllers/municipalities";

municipalitiesRouter.get("/highest", municipalitiesCtl.highestMunicipality);
municipalitiesRouter.get("/lowest", municipalitiesCtl.lowestMunicipality);
municipalitiesRouter.get("/top5", municipalitiesCtl.getTopFiveMunicipalities);
municipalitiesRouter.get("/last5", municipalitiesCtl.getLastFiveMunicipalities);
municipalitiesRouter.get("/", municipalitiesCtl.getMunicipalities);
export default municipalitiesRouter;
