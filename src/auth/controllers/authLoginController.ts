import { authLoginService } from '../services/authLoginService';
import { NextFunction, Request, Response } from 'express';
import { LoginUser } from '../../user/entity/types/User';
import { ApplicationError } from '../../customErrors/ApplicationError';

export const authLogin = async (
  req: Request<{}, {}, LoginUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await authLoginService(req.body);
    res.status(200).json({
      token,
    });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
};
