// src/router/userRouter.ts
import { Router } from "express";
import { UserController } from "../controller/userController";

const router: Router = Router();
const userController = new UserController();

router.get("/user", userController.getUsers);
router.get("/user/:id", userController.getUserById);

export default router;
