import { Router } from "express";
import { createSessionController } from "../controllers/login/createSession.controllers";
import ensureBodyIsValidMiddleware from "../middlewares/ensureBodyIsValid.middleware";
import { resquestLoginSchema } from "../schemas/login.schemas";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";

const sessionRoutes: Router = Router();

sessionRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureBodyIsValidMiddleware(resquestLoginSchema),
  createSessionController
);

export default sessionRoutes;
