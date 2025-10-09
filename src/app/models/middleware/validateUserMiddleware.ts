import type { NextFunction, Request, Response } from "express";
import { userValidationSchema } from "../user/user.validation.js";

export const validatedUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = userValidationSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      errors: result.error.format(),
    });
  }
  // validated and sanitized data
  req.body = result.data;
  next();
};
