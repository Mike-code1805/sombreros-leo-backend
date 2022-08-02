import Logger from "../../logger/appLoger";
import { HatModel } from "../entity/models/hatModel";
import { Hat } from "../entity/types/Hat";
import { findOneResourceByIdWithoutPopulate } from "../../shared/factory/findOneResourceByIdWithoutPopulate";

export const getOneHatByIdService = async (id: string): Promise<Hat | null> => {
  try {
    const hat: Hat[] = await findOneResourceByIdWithoutPopulate(HatModel)(id);
    return hat[0];
  } catch (error: any) {
    Logger.error(`error getting hat with id ${id}`, {
      service: "getOneHatByIdService",
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
