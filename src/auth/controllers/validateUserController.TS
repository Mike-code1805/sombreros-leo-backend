import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { authValidateUserAccount } from '../services/authValidateUserAccount';

export const validateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await authValidateUserAccount(req.params.id);
    res.status(200).json({ result });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
