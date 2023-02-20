import { userModel } from '../../user/entity/model/userModel';
import { findOneResourceByField } from '../../shared/factory/findOneResourceByField';
import { TokenModel } from '../entity/model/authTokenModel';
import { createAuthToken, validateAuthToken } from '../utils/tokenManager';
import Logger from '../../logger/appLoger';
import { findOneResourceByIdWithoutPopulate } from '../../shared/factory/findOneResourceByIdWithoutPopulate';

export const authValidateUserAccount = async (
  authorization: string
): Promise<{ authToken: string; refreshToken?: string; username: string }> => {
  const userValidate: any = validateAuthToken(authorization);
  if (!userValidate) throw new Error('invalid user');
  try {
    const user = await findOneResourceByIdWithoutPopulate(userModel)(
      userValidate.id
    );
    if (!user) throw new Error('invalid user id');

    return {
      authToken: authorization,
      username: user[0].username,
    };
  } catch (error: any) {
    Logger.error('Error validating user email', {
      instance: 'authValidateUserAccount',
      fn: 'authValidateUserAccount',
      trace: error.message,
    });
    throw new Error('Error validating user email');
  }
};
