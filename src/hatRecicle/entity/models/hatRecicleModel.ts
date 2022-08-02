import { model } from 'mongoose';
import { hatRecicleSchema } from '../schemas/hatRecicleSchema';
import { HatRecicle } from '../types/HatRecicle';

export const HatRecicleModel = model<HatRecicle>('HatRecicle', hatRecicleSchema);
