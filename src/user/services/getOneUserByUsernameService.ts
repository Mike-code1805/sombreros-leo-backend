import { userModel } from "../entity/model/userModel";
import { User } from "../entity/types/User";
import { findOneResourceByField } from "../../shared/factory/findOneResourceByField";
import Logger from "../../logger/appLoger";

export const getOneUserByUsernameService = async (
  username: string
): Promise<User | null> => {
  try {
    const user: User | null = await findOneResourceByField(userModel)({
      username,
    });
    return user;
  } catch (error: any) {
    Logger.log(`error getting the user with username: ${username}`, {
      service: "getOneUserByUsernameService",
      trace: error.message,
    });
    throw new Error(`error getting the user with email${username}`);
  }
};
