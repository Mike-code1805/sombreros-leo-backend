import { model } from 'mongoose';
import { userSchemma } from '../schema/userSchema';
import { User } from '../types/User';

export const userModel = model<User>('User', userSchemma);
