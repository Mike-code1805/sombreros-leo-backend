import { User } from "../entity/types/User";
import { findOneResourceById } from "../../shared/factory/findOneResourceById";
import { userModel } from "../entity/model/userModel";
import Logger from "../../logger/appLoger";
import { HatModel } from "../../hat/entity/models/hatModel";

export const getOneUserByIdService = async (
  id: string
): Promise<User | null> => {
  try {
    const options = [
      {
        path: "hats",
        model: HatModel,
      },
    ];
    const user: User[] = await findOneResourceById(userModel)(id, options);
    return user[0];
  } catch (error: any) {
    Logger.error(`error getting user with id ${id}`, {
      service: "getOneUserByIdService",
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
