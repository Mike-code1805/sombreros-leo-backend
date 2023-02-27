import { Router } from 'express';
import { bodyRequestValidator } from '../shared/validators/bodyRequestValidators';
import { collectValidator } from '../shared/utils/collectValidator';
import { authTokenValidation } from '../auth/middlewares/authTokenValidation';
import {
  getOneCollectByIdController,
  createCollectController,
} from './controllers';

const collectRouter: Router = Router();

collectRouter
  .route('/api/collect')
  .post(
    authTokenValidation,
    bodyRequestValidator(collectValidator),
    createCollectController
  );

collectRouter
  .route('/api/collect/:id')
  .get(authTokenValidation, getOneCollectByIdController);

export default collectRouter;
