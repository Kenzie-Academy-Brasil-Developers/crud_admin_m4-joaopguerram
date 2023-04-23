import { z } from "zod";
import {
  requestUserSchema,
  responseUserSchema,
  updateUserSchema,
  userSchema,
} from "../schemas/users.schema";

type TUser = z.infer<typeof userSchema>;

type TUserResponse = z.infer<typeof responseUserSchema>;

type TUserRequest = z.infer<typeof requestUserSchema>;

type TUserUpdate = z.infer<typeof updateUserSchema>;

export { TUser, TUserResponse, TUserRequest, TUserUpdate };
