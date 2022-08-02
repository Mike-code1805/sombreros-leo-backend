import { NextFunction, Request, Response } from "express";
import { getOneHatRecicleByIdService } from "../services";
import { ApplicationError } from "../../customErrors/ApplicationError";
import Logger from "../../logger/appLoger";

export const getOneHatRecicleByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const HatRecicle = await getOneHatRecicleByIdService(req.params.id);
    res.status(200).json({ HatRecicle });
  } catch (error: any) {
    Logger.error("Error on get one HatRecicles controller", {
      instance: "controllers",
      fn: "getOneHatRecicleByIdController",
      trace: error.message,
    });
    next(new ApplicationError(400, "error getting the HatRecicle"));
  }
};
