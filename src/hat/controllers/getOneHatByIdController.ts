import { NextFunction, Request, Response } from "express";
import { getOneHatByIdService } from "../services";
import { ApplicationError } from "../../customErrors/ApplicationError";
import Logger from "../../logger/appLoger";

export const getOneHatByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hat = await getOneHatByIdService(req.params.id);
    res.status(200).json({ hat });
  } catch (error: any) {
    Logger.error("Error on get one hats controller", {
      instance: "controllers",
      fn: "getOneHatByIdController",
      trace: error.message,
    });
    next(new ApplicationError(400, "error getting the hat"));
  }
};
