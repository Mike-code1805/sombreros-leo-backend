import { Types } from "mongoose";
import { UserIdType } from "../../../user/entity/types/User";

export interface HatRecicle {
  id: HatRecicleId;
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

export type HatRecicleId = {
  _id: Types.ObjectId;
};

export type CreateHatRecicle = Omit<HatRecicle, "id" | "created_at" | "updated_at">;
