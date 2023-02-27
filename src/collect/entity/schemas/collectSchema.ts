import { Schema } from 'mongoose';
import { Collect } from '../types/Collect';

export const collectSchema = new Schema<Collect>(
  {
    name: {
      type: String,
    },
    observations: {
      type: String,
    },
    price: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'Collect',
      required: [true, 'an user is required to create a project'],
    },
  },
  {
    timestamps: true,
  }
);
