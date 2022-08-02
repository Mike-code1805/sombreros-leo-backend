import { NextFunction, Request, Response }  from 'express';

import { ApplicationError } from '../../customErrors/ApplicationError';
import Logger from '../../logger/appLoger';
import { getOneUserByIdService } from '../services/getOneUserByIdService';

export const getUsersById = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const user = await getOneUserByIdService(req.params.id);
        res.status(200).json({ user });
    } catch (error: any) {
        Logger.error('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error getting the user'));
    }
  };