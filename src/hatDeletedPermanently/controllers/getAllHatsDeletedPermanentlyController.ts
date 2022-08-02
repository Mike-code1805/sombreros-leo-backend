import { ApplicationError } from "../../customErrors/ApplicationError";
import { NextFunction, Request, Response } from "express";
import Logger from "../../logger/appLoger";
import { validateAuthToken } from "../../auth/utils/tokenManager";
import { getAllHatsDeletedPermanentlyService } from "../services";

export const getAllHatsDeletedPermanentlyController = async (
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
    const hatsDeletedPermanently = await getAllHatsDeletedPermanentlyService(user.id);
    res.status(200).json(hatsDeletedPermanently);
  } catch (error: any) {
    Logger.error("Error on get all hatsDeletedPermanently controller", {
      instance: "controllers",
      fn: "getAllHatsDeletedPermanentlyController",
      trace: error.message,
    });
    next(
      new ApplicationError(
        400,
        `Error getting the hatsDeletedPermanently ${error.message}`
      )
    );
  }
};
