import { User } from '../../user/entity/types/User';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { Token } from '../../auth/entity/schema/authTokenSchema';
import { Model as ModelType } from 'mongoose';
import { Hat } from '../../hat/entity/types/Hat';

export const createResource =
  <K extends ModelType<User> | ModelType<Token> | ModelType<Hat>>(Model: K) =>
  async <T>(resource: T): Promise<User | Token | Hat> => {
    try {
      const newResource = new Model(resource);
      return await newResource.save();
    } catch (error: any) {
      throw new ApplicationError(400, error.message);
    }
  };
