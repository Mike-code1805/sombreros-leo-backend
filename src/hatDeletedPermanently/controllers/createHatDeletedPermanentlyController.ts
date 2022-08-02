import { ApplicationError } from "../../customErrors/ApplicationError";
import { NextFunction, Request, Response } from "express";
import Logger from "../../logger/appLoger";
import { CreateHatDeletedPermanently } from "../entity/types/HatDeletedPermanently";
import { validateAuthToken } from "../../auth/utils/tokenManager";
import { createHatDeletedPermanentlyService } from "../../hatDeletedPermanently/services";

export const createHatDeletedPermanentlyController = async (
  req: Request<{}, {}, CreateHatDeletedPermanently>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { authorization } = req.headers;
  if (!authorization) {
    return next(new ApplicationError(401, "No token provided"));
  }
  const user: any = validateAuthToken(authorization);
  const {
    address,
    advancement,
    cintillo,
    color_hat,
    color_tape,
    date,
    measure,
    name,
    observations,
    price,
    size,
    state,
    state_payment,
    tafalete,
    pendiente,
  } = req.body;
  try {
    const newHatDeletedPermanently = await createHatDeletedPermanentlyService({
      address,
      advancement,
      cintillo,
      color_hat,
      color_tape,
      date,
      measure,
      name,
      observations,
      price,
      size,
      state,
      state_payment,
      tafalete,
      pendiente,
      owner: user.id,
    });
    res.status(201).json(newHatDeletedPermanently);
  } catch (error: any) {
    Logger.error("error on create HatDeletedPermanentlyRecicle controller", {
      instance: "controller",
      service: "createHatDeletedPermanentlyRecicleController",
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
