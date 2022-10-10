import Logger from '../../logger/appLoger';
import { createResource } from '../../shared/factory/createResource';
import { CreateUser, User } from '../../user/entity/types/User';
import { userModel } from '../../user/entity/model/userModel';
import { encryptPassword } from '../utils/passwordManager';
import { authCreateTokenService } from './authCreateTokenService';
import { TokenResponse } from './authLoginService';
import { Token } from 'auth/entity/schema/authTokenSchema';
import { authValidateUserService } from './authValidateUserService';

export const authCreateUserService = async (
  userRequest: CreateUser
): Promise<TokenResponse> => {
  try {
    const passwordUser = userRequest.password;
    const nameUser = userRequest.username;
    userRequest['password'] = await encryptPassword(userRequest.password);
    await createResource(userModel)(userRequest);
    const user = await authValidateUserService({
      username: nameUser,
      password: passwordUser,
    });
    console.log(user);
    if (!user.valid) throw new Error('user is not valid ');
    const tokens = await authCreateTokenService(
      user.id,
      user.isAdmin,
      user.username
    );
    return tokens;
  } catch (error: any) {
    Logger.error(`error creating user with username ${userRequest.username}`, {
      service: 'authCreateUserService',
      trace: error.message,
    });
    throw new Error(
      `error creating user with username ${userRequest.username}`
    );
  }
};
