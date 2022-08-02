import { UserIdType } from "../../user/entity/types/User";
import Logger from "../../logger/appLoger";
import { HatRecicle } from "../entity/types/HatRecicle";
import { findAllResources } from "../../shared/factory/findAllResources";
import { HatRecicleModel } from "../entity/models/hatRecicleModel";

export const getAllHatsRecicleService = async (
  userId: string | UserIdType
): Promise<HatRecicle[]> => {
  try {
    if (!userId) throw new Error("invalid user id");
    const hatsRecicle = await findAllResources(HatRecicleModel)({owner: userId});
    return hatsRecicle;
  } catch (error: any) {
    Logger.error("error getting all the hatsRecicle", {
      instance: "services",
      fn: "getAllHatsRecicleService",
      trace: error.message,
    });
    throw new Error(`Error getting all the hatsRecicle: ${error.message}`);
  }
};
