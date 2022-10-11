import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { authValidateUserAccount } from '../services/authValidateUserAccount';

export const validateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    const token = await authValidateUserAccount(authorization!);
    res.status(200).json({ token });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
