import Logger from "../../logger/appLoger";
import { HatRecicle } from "../entity/types/HatRecicle";
import { findOneResourceByIdWithoutPopulate } from "../../shared/factory/findOneResourceByIdWithoutPopulate";
import { HatRecicleModel } from "../entity/models/hatRecicleModel";

export const getOneHatRecicleByIdService = async (id: string): Promise<HatRecicle | null> => {
  try {
    const HatRecicle: HatRecicle[] = await findOneResourceByIdWithoutPopulate(HatRecicleModel)(id);
    return HatRecicle[0];
  } catch (error: any) {
    Logger.error(`error getting HatRecicle with id ${id}`, {
      service: "getOneHatRecicleByIdService",
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
