import Logger from "../../logger/appLoger";
import { createResource } from "../../shared/factory/createResource";
import { CreateUser, User } from "../../user/entity/types/User";
import { userModel } from "../../user/entity/model/userModel";
import { encryptPassword } from "../utils/passwordManager";

export const authCreateUserService = async (
  userRequest: CreateUser
): Promise<User> => {
  try {
    userRequest["password"] = await encryptPassword(userRequest.password);
    const user = await createResource(userModel)(userRequest);
    return user as User;
  } catch (error: any) {
    Logger.error(`error creating user with email ${userRequest.email}`, {
      service: "authCreateUserService",
      trace: error.message,
    });
    throw new Error(`error creating user with email ${userRequest.email}`);
  }
};
