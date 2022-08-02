import { Types } from "mongoose";
import { UserIdType } from "../../../user/entity/types/User";

// import { UserIdType } from "../Server/src/users/entity/types/User";

export interface Hat {
  id: HatId;
  address: string;
  advancement: string;
  cintillo: string;
  color_hat: string;
  color_tape: string;
  date: string;
  measure: string;
  name: string;
  observations: string;
  price: string;
  size: string;
  state: string;
  state_payment: string;
  tafalete: string;
  pendiente: boolean;
  created_at: Date;
  updated_at: Date | null;
  owner: UserIdType;
}

export type HatId = {
  _id: Types.ObjectId;
};

export type CreateHat = Omit<Hat, "id" | "created_at" | "updated_at">;
