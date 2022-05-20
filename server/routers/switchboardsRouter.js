import { Router } from 'express';
import { getswitchboards,highestSwitchboard,lowestSwitchboard,getTopFiveSwitchboards,getLastFiveSwitchboards } from '../controllers/switchboards';
const switchboardsRouter = new Router();
switchboardsRouter.get("/swithchboards/:id", getswitchboards);
switchboardsRouter.get("/swithchboards/high", highestSwitchboard);
switchboardsRouter.get("/swithchboards/lowest", lowestSwitchboard);
switchboardsRouter.get("/swithchboards/top",getTopFiveSwitchboards);
switchboardsRouter.get("/swithchboards/top",getLastFiveSwitchboards);
export default { switchboardsRouter };
