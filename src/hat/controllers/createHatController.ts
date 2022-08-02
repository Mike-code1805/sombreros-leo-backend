import { ApplicationError } from "../../customErrors/ApplicationError";
import { NextFunction, Request, Response } from "express";
import { createHatService } from "../../hat/services";
import Logger from "../../logger/appLoger";
import { CreateHat } from "../entity/types/Hat";
import { validateAuthToken } from "../../auth/utils/tokenManager";

export const createHatController = async (
  req: Request<{}, {}, CreateHat>,
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
    const newHat = await createHatService({
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
    res.status(201).json(newHat);
  } catch (error: any) {
    Logger.error("error on create hatRecicle controller", {
      instance: "controller",
      service: "createHatRecicleController",
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
