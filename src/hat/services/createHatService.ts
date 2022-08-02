import { createResource } from "../../shared/factory/createResource";
import Logger from "../../logger/appLoger";
import { HatModel } from "../entity/models/hatModel";
import { CreateHat, Hat } from "../entity/types/Hat";

export const createHatService = async (hatRequest: CreateHat): Promise<Hat> => {
  try {
    const hat = await createResource(HatModel)(hatRequest);
    return hat as Hat;
  } catch (error: any) {
    Logger.error("error creating a new hat service", {
      instance: "services",
      service: "createHatService",
      trace: error.message ? error.message : "",
    });
    throw new Error(`Error creating a new hat ${error.message}`);
  }
};
