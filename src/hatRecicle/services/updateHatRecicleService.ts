import { updateOneResourceById } from "../../shared/factory/updateOneResourceById";
import { HatRecicle } from "../entity/types/HatRecicle";
import Logger from "../../logger/appLoger";
import { HatRecicleModel } from "../entity/models/hatRecicleModel";

export const updateHatRecicleService = async (
  HatRecicleId: string,
  HatRecicle: { body?: string }
): Promise<HatRecicle | null | undefined> => {
  try {
    if (!HatRecicleId) throw new Error(`No HatRecicle id provided`);
    const editedHatRecicle = await updateOneResourceById(HatRecicleModel)(HatRecicleId, HatRecicle);
    return editedHatRecicle;
  } catch (error: any) {
    Logger.error(`error uddating HatRecicle with id ${HatRecicleId}`, {
      service: "updateHatRecicleService",
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
