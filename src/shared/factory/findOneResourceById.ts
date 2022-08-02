import { Model as ModelType, ObjectId, PopulateOptions, Types } from "mongoose";

export const findOneResourceById =
  <K>(Model: ModelType<K>) =>
  async (id: string | ObjectId, populate: PopulateOptions | (string | PopulateOptions)[]): Promise<K[]> => {
    return await Model.find({
      _id: typeof id === "string" ? new Types.ObjectId(id) : id,
    }).populate(populate);
  };
