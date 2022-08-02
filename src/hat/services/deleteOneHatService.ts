import { HatModel } from "../entity/models/hatModel";
import { deleteOneResourceById } from "../../shared/factory/deleteOneResourceById";
import Logger from "../../logger/appLoger";

export const deleteOneHatService = async (
  hatId: string,
  userId: string
): Promise<boolean> => {
  try {
    if (!hatId) throw new Error("invalid hat id");

    await deleteOneResourceById(HatModel)({
      _id: hatId,
      owner: userId,
    });
    return true;
  } catch (error: any) {
    Logger.error(`Error deleting hat: ${error.message}`, {
      instance: "services",
      fn: "deleteOneHatService",
      trace: error.message,
    });
    throw new Error(`Error deleting hat: ${error.message}`);
  }
};
