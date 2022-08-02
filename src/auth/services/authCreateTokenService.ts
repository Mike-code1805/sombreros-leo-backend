import { createAuthToken } from "../utils/tokenManager";
import { UserIdType } from "../../user/entity/types/User";
import { authCreateRefreshToken } from "./authCreateRefreshToken";
import Logger from "../../logger/appLoger";

export const authCreateTokenService = async (
  userId: string | UserIdType,
  isAdmin: boolean | undefined,
  username: string,
): Promise<{ authToken: string; refreshToken: string; username: string }> => {
  try {
    return {
      authToken: createAuthToken({ id: userId, isAdmin: isAdmin }),
      refreshToken: await authCreateRefreshToken(userId),
      username,
    };
  } catch (error: any) {
    Logger.error("Error creating tokens auth token", {
      instance: "services",
      fn: "authCreateTokenService",
      trace: error.message,
    });
    throw new Error(`'Error creating tokens auth token' ${error.message}`);
  }
};
