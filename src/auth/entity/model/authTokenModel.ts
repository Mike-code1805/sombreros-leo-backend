import { model } from 'mongoose';
import { AuthTokenSchema, Token } from '../schema/authTokenSchema';

// import { AuthTokenSchema, Token } from '../schema/authTokenSchema';

export const TokenModel = model<Token>('Token', AuthTokenSchema);
