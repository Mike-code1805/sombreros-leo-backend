import { model } from 'mongoose';
import { hatSchema } from '../schemas/hatSchema';
import { Hat } from '../types/Hat';

export const HatModel = model<Hat>('Hat', hatSchema);
