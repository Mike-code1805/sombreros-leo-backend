import { ApplicationError } from "../../customErrors/ApplicationError";
import { NextFunction, Request, Response } from "express";
import Logger from "../../logger/appLoger";
import { deleteOneHatRecicleService } from "../services";
import { validateAuthToken } from "../../auth/utils/tokenManager";

export const deleteOneHatRecicleController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    if (!authorization) {
      return next(new ApplicationError(401, "No token provided"));
    }
    const user: any = validateAuthToken(authorization);
    const result = await deleteOneHatRecicleService(id, user.id);
    res.status(200).json({ succes: result });
  } catch (error: any) {
    Logger.error("Error on get all hatsRecicle controller", {
      instance: "controllers",
      fn: "deleteOneHatRecicleController",
      trace: error.message,
    });
    next(
      new ApplicationError(
        400,
        `Error deleting the hatsRecicle ${error.message}`
      )
    );
  }
};
