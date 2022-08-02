import { model } from 'mongoose';
import { hatDeletedPermanentlySchema } from '../schemas/hatDeletedPermanentlySchema';
import { HatDeletedPermanently } from '../types/HatDeletedPermanently';

export const HatDeletedPermanentlyModel = model<HatDeletedPermanently>('HatDeletedPermanently', hatDeletedPermanentlySchema);
