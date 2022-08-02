import { HatModel } from "../entity/models/hatModel";
import { updateOneResourceById } from "../../shared/factory/updateOneResourceById";

import { Hat } from "../entity/types/Hat";
import Logger from "../../logger/appLoger";

export const updateHatService = async (
  hatId: string,
  hat: { body?: string }
): Promise<Hat | null | undefined> => {
  try {
    if (!hatId) throw new Error(`No hat id provided`);
    const editedHat = await updateOneResourceById(HatModel)(hatId, hat);
    return editedHat;
  } catch (error: any) {
    Logger.error(`error uddating hat with id ${hatId}`, {
      service: "updateHatService",
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
