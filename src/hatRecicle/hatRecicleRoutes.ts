import { authTokenValidation } from "../auth/middlewares/authTokenValidation";
import { Router } from "express";
import {
  createHatRecicleController,
  deleteOneHatRecicleController,
  getAllHatsRecicleController,
  getOneHatRecicleByIdController,
  updateHatRecicleController,
} from "./controllers";
import { hatSchema } from "../shared/utils/hatValidator";
import { bodyRequestValidator } from "../shared/validators/bodyRequestValidators";

const hatRecicleRouter: Router = Router();

hatRecicleRouter
  .route("/api/hatRecicle")
  .post(bodyRequestValidator(hatSchema),createHatRecicleController)
  .get(getAllHatsRecicleController);

hatRecicleRouter
  .route("/api/hatRecicle/:id")
  .get(authTokenValidation, getOneHatRecicleByIdController)
  .delete(deleteOneHatRecicleController)
  .put(authTokenValidation, updateHatRecicleController);

export default hatRecicleRouter;
