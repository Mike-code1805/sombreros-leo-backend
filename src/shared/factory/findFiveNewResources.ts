import { Model as ModelType, ObjectId, Types } from 'mongoose';

export const findFiveNewResources =
<K>(Model: ModelType<K>) =>
async (id: string, query?: K): Promise<K[]> =>{
  return await Model.find({ ...query })
  .sort(id).limit(5);
}
  