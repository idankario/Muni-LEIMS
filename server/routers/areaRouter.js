import { Router } from 'express';
import { getAreas } from '../controllers/area';
const areaRouter = new Router();
areaRouter.get("/areas", getAreas);
export default { areaRouter };
