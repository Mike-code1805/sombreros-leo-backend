import { Express } from 'express-serve-static-core';
import { UserIdType } from '../../src/user/entity/types/User';

declare module 'express-serve-static-core' {
  interface Request {
    userId: string;
  }
}
