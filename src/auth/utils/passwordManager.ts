import bcrypt from "bcrypt";

export const encryptPassword = async (input: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(input, salt);
};

export const validatePassword = async (
  password: string,
  encryptedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, encryptedPassword);
};
