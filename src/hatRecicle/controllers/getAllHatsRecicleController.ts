import { ApplicationError } from "../../customErrors/ApplicationError";
import { NextFunction, Request, Response } from "express";
import Logger from "../../logger/appLoger";
import { getAllHatsRecicleService } from "../services";
import { validateAuthToken } from "../../auth/utils/tokenManager";

export const getAllHatsRecicleController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return next(new ApplicationError(401, "No token provided"));
    }
    const user: any = validateAuthToken(authorization);
    if (!user.id) throw new ApplicationError(401, `invalid user id`);
    const hatsRecicle = await getAllHatsRecicleService(user.id);
    res.status(200).json(hatsRecicle);
  } catch (error: any) {
    Logger.error("Error on get all hatsRecicle controller", {
      instance: "controllers",
      fn: "getAllHatsRecicleController",
      trace: error.message,
    });
    next(
      new ApplicationError(
        400,
        `Error getting the hatsRecicle ${error.message}`
      )
    );
  }
};
