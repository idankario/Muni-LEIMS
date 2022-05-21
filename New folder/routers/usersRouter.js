import { Router } from "express";
import usersController from "../controllers/usersController";

const userRouter = new Router();

userRouter.post("/", usersController.getswitchboards);
userRouter.put("/:email", usersController.getswitchboards);
userRouter.get("/:email/orders", usersController.getswitchboards);
export default userRouter;
