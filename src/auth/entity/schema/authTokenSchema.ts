import { Schema } from 'mongoose';
import { UserIdType } from '../../../user/entity/types/User';

export interface Token {
  token: string;
  createdAt: Date;
  expireAt: Date;
  owner: UserIdType;
}

export const AuthTokenSchema = new Schema<Token>({
  token: {
    type: String,
    required: [true, 'a token is required'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  expireAt: {
    type: Date,
    default: new Date(),
    index: { expires: 60 * 60 * 24 },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'an user is required to create a project'],
  },
});