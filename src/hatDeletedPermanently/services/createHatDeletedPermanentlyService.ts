import { createResource } from "../../shared/factory/createResource";
import Logger from "../../logger/appLoger";
import { HatDeletedPermanentlyModel } from "../entity/model/hatDeletedPermanentlyModel";
import { CreateHatDeletedPermanently, HatDeletedPermanently } from "../entity/types/HatDeletedPermanently";

export const createHatDeletedPermanentlyService = async (HatDeletedPermanentlyRequest: CreateHatDeletedPermanently): Promise<HatDeletedPermanently> => {
  try {
    const HatDeletedPermanently = await createResource(HatDeletedPermanentlyModel)(HatDeletedPermanentlyRequest);
    return HatDeletedPermanently as HatDeletedPermanently;
  } catch (error: any) {
    Logger.error("error creating a new HatDeletedPermanently service", {
      instance: "services",
      service: "createHatDeletedPermanentlyService",
      trace: error.message ? error.message : "",
    });
    throw new Error(`Error creating a new HatDeletedPermanently ${error.message}`);
  }
};
