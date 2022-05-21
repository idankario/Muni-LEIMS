import { Router } from "express";
const personsRouter = new Router();
import personsController from "../controllers/personsController";

personsRouter.get("/", personsController.getswitchboards);

export default personsRouter;
