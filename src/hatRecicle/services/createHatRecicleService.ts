import { createResource } from "../../shared/factory/createResource";
import Logger from "../../logger/appLoger";
import { HatRecicleModel } from "../entity/models/hatRecicleModel";
import { CreateHatRecicle, HatRecicle } from "../entity/types/HatRecicle";

export const createHatRecicleService = async (hatRecicleRequest: CreateHatRecicle): Promise<HatRecicle> => {
  try {
    const hatRecicle = await createResource(HatRecicleModel)(hatRecicleRequest);
    return hatRecicle as HatRecicle;
  } catch (error: any) {
    Logger.error("error creating a new hatRecicle service", {
      instance: "services",
      service: "createHatRecicleService",
      trace: error.message ? error.message : "",
    });
    throw new Error(`Error creating a new hatRecicle ${error.message}`);
  }
};
