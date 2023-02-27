import { model } from 'mongoose';
import { collectSchema } from '../schemas/collectSchema';
import { Collect } from '../types/Collect';

export const CollectModel = model<Collect>('Collect', collectSchema);
