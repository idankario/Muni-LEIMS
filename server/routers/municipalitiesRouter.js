import { Router } from 'express';
import { getmunicipalities,highestmunicipality ,lowestmunicipality,getTopFivemunicipality,getLastFivemunicipality} from '../controllers/municipalities';
const municipalitiesRouter = new Router();
municipalitiesRouter.get("municipalities",getmunicipalities);
municipalitiesRouter.get("/municipalities/high", highestmunicipality);
municipalitiesRouter.get("/municipalities/lowest",lowestmunicipality);
municipalitiesRouter.get("/municipalities/top",getTopFivemunicipality);
municipalitiesRouter.get("/municipalities/last",getLastFivemunicipality);
export default { municipalitiesRouter };