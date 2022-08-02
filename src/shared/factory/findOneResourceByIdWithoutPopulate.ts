import { Model as ModelType, ObjectId, PopulateOptions, Types } from "mongoose";

export const findOneResourceByIdWithoutPopulate =
  <K>(Model: ModelType<K>) =>
  async (id: string | ObjectId): Promise<K[]> => {
    return await Model.find({
      _id: typeof id === "string" ? new Types.ObjectId(id) : id,
    });
  };
