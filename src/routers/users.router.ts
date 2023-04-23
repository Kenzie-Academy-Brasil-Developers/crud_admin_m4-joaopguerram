import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import verifyEmailExistsMiddleware from "../middlewares/verifyEmailExists.middleware";
import { requestUserSchema } from "../schemas/users.schema";
import ensureBodyIsValidMiddleware from "../middlewares/ensureBodyIsValid.middleware";
import ensureAdminTrueMiddleware from "../middlewares/ensureAdminTrue.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import listUsersControllers from "../controllers/listUsers.controllers";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureBodyIsValidMiddleware(requestUserSchema),
  verifyEmailExistsMiddleware,
  createUserController
);
usersRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureAdminTrueMiddleware,
  listUsersControllers
);

export default usersRoutes;
