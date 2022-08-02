import Logger from "../../logger/appLoger";
import { validatePassword } from "../utils/passwordManager";
import { LoginUser, User } from "../../user/entity/types/User";
import { getOneUserByUsernameService } from "../../user/services/getOneUserByUsernameService";

export const authValidateUserService = async (
  userRequest: LoginUser
): Promise<User> => {
  try {
    const user = await getOneUserByUsernameService(userRequest.username);

    if (!user) throw new Error("user username or password is incorrect");

    const auth = await validatePassword(userRequest.password, user.password);

    if (!auth) throw new Error("user username or password is incorrect");

    return user;
  } catch (error: any) {
    Logger.error("Error validating user credentials", {
      instance: "services",
      fn: "authValidateUserService",
      trace: error.message,
    });
    throw new Error("Error validating user credentials");
  }
};
