import { createRefreshToken } from "../utils/tokenManager";
import { UserIdType } from "../../user/entity/types/User";
import { TokenModel } from "../entity/model/authTokenModel";
import Logger from "../../logger/appLoger";

export const authCreateRefreshToken = async (
  userId: string | UserIdType
): Promise<string> => {
  try {
    const refreshToken = createRefreshToken({ id: userId });
    const token = new TokenModel({
      owner: userId,
      token: refreshToken,
    });
    const newToken = await token.save();
    return newToken.token;
  } catch (error: any) {
    Logger.error("error creating a refresh token service", {
      instance: "services",
      service: "authCreateRefreshToken",
      trace: error.message ? error.message : "",
    });
    throw new Error(`Error creating a new refresh token ${error.message}`);
  }
};
