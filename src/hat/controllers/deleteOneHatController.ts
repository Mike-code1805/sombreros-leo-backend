import { ApplicationError } from "../../customErrors/ApplicationError";
import { NextFunction, Request, Response } from "express";
import Logger from "../../logger/appLoger";
import { deleteOneHatService } from "../services";
import { validateAuthToken } from "../../auth/utils/tokenManager";

export const deleteOneHatController = async (
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
    const result = await deleteOneHatService(id, user.id);
    res.status(200).json({ succes: result });
  } catch (error: any) {
    Logger.error("Error on get all hats controller", {
      instance: "controllers",
      fn: "deleteOneHatController",
      trace: error.message,
    });
    next(
      new ApplicationError(
        400,
        `Error deleting the hats ${error.message}`
      )
    );
  }
};
