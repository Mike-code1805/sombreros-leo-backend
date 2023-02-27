import { Types } from 'mongoose';
import { HatId } from '../../../hat/entity/types/Hat';

export interface Collect {
  id: CollectId;
  name: string;
  observations: string;
  date: string;
  price: string;
  owner: HatId;
}

export type CollectId = {
  _id: Types.ObjectId;
};

export type CreateCollect = Omit<Hat, 'id'>;
