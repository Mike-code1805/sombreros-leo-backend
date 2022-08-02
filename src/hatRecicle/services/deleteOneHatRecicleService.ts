import { HatRecicleModel } from "../entity/models/hatRecicleModel";
import { deleteOneResourceById } from "../../shared/factory/deleteOneResourceById";
import Logger from "../../logger/appLoger";

export const deleteOneHatRecicleService = async (
  hatRecicleId: string,
  userId: string
): Promise<boolean> => {
  try {
    if (!hatRecicleId) throw new Error("invalid hatRecicle id");

    await deleteOneResourceById(HatRecicleModel)({
      _id: hatRecicleId,
      owner: userId,
    });
    return true;
  } catch (error: any) {
    Logger.error(`Error deleting hatRecicle: ${error.message}`, {
      instance: "services",
      fn: "deleteOneHatRecicleService",
      trace: error.message,
    });
    throw new Error(`Error deleting hatRecicle: ${error.message}`);
  }
};
