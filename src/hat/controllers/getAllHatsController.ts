import { ApplicationError } from "../../customErrors/ApplicationError";
import { NextFunction, Request, Response } from "express";
import Logger from "../../logger/appLoger";
import { getAllHatsService } from "../services";
import { validateAuthToken } from "../../auth/utils/tokenManager";

export const getAllHatsController = async (
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
    const hats = await getAllHatsService(user.id);
    res.status(200).json(hats);
  } catch (error: any) {
    Logger.error("Error on get all hats controller", {
      instance: "controllers",
      fn: "getAllHatsController",
      trace: error.message,
    });
    next(
      new ApplicationError(
        400,
        `Error getting the hats ${error.message}`
      )
    );
  }
};
