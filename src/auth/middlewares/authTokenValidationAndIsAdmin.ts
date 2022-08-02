import { NextFunction, Request, Response } from "express";
import { validateAuthToken } from "../utils/tokenManager";
import { ApplicationError } from "../../customErrors/ApplicationError";

export const authTokenValidationAndIsAdmin = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return next(new ApplicationError(401, "No token provided"));
    }
    const isValid: any = validateAuthToken(authorization);
    if (!isValid) {
      return next(new ApplicationError(401, "Token Invalid"));
    }
    if (!isValid.isAdmin) {
      return next(new ApplicationError(401, "You are not admin"));
    }
    next();
  } catch (error: any) {
    if (error.message === "jwt expired")
      return next(new ApplicationError(401, "Please log in again"));
    next(new ApplicationError(403, "access denied"));
  }
};
