import { ApplicationError } from "../../customErrors/ApplicationError";
import { NextFunction, Request, Response } from "express";
import Logger from "../../logger/appLoger";
import { updateHatRecicleService } from "../services";


export const updateHatRecicleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await updateHatRecicleService(req.params.id, req.body);
    res.status(200).json({ message: "updated" });
  } catch (error: any) {
    Logger.error("error", "hello", { message: error.message });
    next(new ApplicationError(400, "error updating the cart"));
  }
};
