import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import verifyEmailExistsMiddleware from "../middlewares/verifyEmailExists.middleware";
import { requestUserSchema } from "../schemas/users.schema";
import ensureBodyIsValidMiddleware from "../middlewares/ensureBodyIsValid.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureBodyIsValidMiddleware(requestUserSchema),
  verifyEmailExistsMiddleware,
  createUserController
);

export default usersRoutes;
