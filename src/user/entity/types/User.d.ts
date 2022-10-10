import { Types } from "mongoose";

export interface User {
  id: UserIdType;
  username: string;
  email?: string;
  isAdmin?: boolean;
  password: string;
  img?: string;
  created_at: Date;
  updated_at: Date | null;
  valid: boolean;
}

export type EditUser = {
  id: string;
  username?: string;
  email?: string;
  isAdmin: boolean;
  password?: string;
  img?: string;
  updated_at?: Date | null;
  valid?: boolean;
};

export type UserIdType = {
  _id: Types.ObjectId;
};

export type CreateUser = Omit<User, "id" | "created_at" | "updated_at">;

export type LoginUser = {
  username: string;
  password: string;
};
