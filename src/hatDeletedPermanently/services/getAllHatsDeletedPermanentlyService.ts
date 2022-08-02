import { UserIdType } from "../../user/entity/types/User";
import Logger from "../../logger/appLoger";
import { HatDeletedPermanently } from "../entity/types/HatDeletedPermanently";
import { findAllResources } from "../../shared/factory/findAllResources";
import { HatDeletedPermanentlyModel } from "../entity/model/hatDeletedPermanentlyModel";

export const getAllHatsDeletedPermanentlyService = async (
  userId: string | UserIdType
): Promise<HatDeletedPermanently[]> => {
  try {
    if (!userId) throw new Error("invalid user id");
    const HatsDeletedPermanently = await findAllResources(HatDeletedPermanentlyModel)({});
    return HatsDeletedPermanently;
  } catch (error: any) {
    Logger.error("error getting all the HatsDeletedPermanently", {
      instance: "services",
      fn: "getAllHatsDeletedPermanentlyService",
      trace: error.message,
    });
    throw new Error(`Error getting all the HatsDeletedPermanently: ${error.message}`);
  }
};
