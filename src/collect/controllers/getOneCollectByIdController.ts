import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { getOneCollectByIdService } from '../services';
import Logger from '../../logger/appLoger';

export const getOneCollectByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const collect = await getOneCollectByIdService(req.params.id);
    if (!collect)
      throw new Error('No existe archivo de quien recogió el sombrero');
    res.status(200).json({ collect });
  } catch (error: any) {
    Logger.error('Error on get one collects controller', {
      instance: 'controllers',
      fn: 'getOneCollectByIdController',
      trace: error.message,
    });
    next(new ApplicationError(400, error.message));
  }
};
