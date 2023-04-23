import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  admin: z.boolean().default(false),
  active: z.boolean().default(true),
});

const requestUserSchema = userSchema
  .omit({ id: true, active: true })
  .partial({ admin: true });

const responseUserSchema = userSchema.omit({ password: true });

const updateUserSchema = userSchema.partial();

export { userSchema, requestUserSchema, responseUserSchema, updateUserSchema };
