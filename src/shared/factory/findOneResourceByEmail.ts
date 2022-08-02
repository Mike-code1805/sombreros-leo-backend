import { ApplicationError } from '../../customErrors/ApplicationError';
import { Model as ModelType } from 'mongoose';

export const findOneResourceByEmail = 
<K>(Model: ModelType<K>) =>
  async (username: Object ): Promise<K[]> => 
  {
    try {
      return await Model.find(username);
    } catch (error: any) {
      throw new ApplicationError(400, error.message);
    }
    
  };