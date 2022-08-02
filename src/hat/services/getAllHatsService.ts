import { UserIdType } from "../../user/entity/types/User";
import Logger from "../../logger/appLoger";
import { Hat } from "../entity/types/Hat";
import { findAllResources } from "../../shared/factory/findAllResources";
import { HatModel } from "../entity/models/hatModel";

export const getAllHatsService = async (
  userId: string | UserIdType
): Promise<Hat[]> => {
  try {
    if (!userId) throw new Error("invalid user id");
    const hats = await findAllResources(HatModel)({owner: userId});
    return hats;
  } catch (error: any) {
    Logger.error("error getting all the hats", {
      instance: "services",
      fn: "getAllHatsService",
      trace: error.message,
    });
    throw new Error(`Error getting all the hats: ${error.message}`);
  }
};
