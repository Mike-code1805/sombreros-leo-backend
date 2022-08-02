import { authRefreshTokenService } from '../services/authRefreshTokenService';
import { NextFunction, Request, Response } from 'express';

// import { authRefreshTokenService } from '../services/authRefreshTokenService';

export const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    const token = await authRefreshTokenService(req.userId, authorization!);
    res.status(200).json({
      token,
    });
  } catch (error) {
    next(error);
  }
};
