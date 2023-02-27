import { ApplicationError } from '../../customErrors/ApplicationError';
import { NextFunction, Request, Response } from 'express';
import Logger from '../../logger/appLoger';
import { createCollectService } from '../services/createCollectService';

export const createCollectController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name, observations, price, date, owner } = req.body;
  try {
    const newCollect = await createCollectService({
      name,
      observations,
      price,
      date,
      owner,
    });
    res.status(201).json(newCollect);
  } catch (error: any) {
    Logger.error('error on create collectRecicle controller', {
      instance: 'controller',
      service: 'createCollectRecicleController',
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
