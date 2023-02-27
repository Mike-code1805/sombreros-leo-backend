import Logger from '../../logger/appLoger';
import { CollectModel } from '../entity/models/collectModel';
import { Collect } from '../entity/types/Collect';
import { findAllResources } from '../../shared/factory/findAllResources';

export const getOneCollectByIdService = async (
  id: string
): Promise<Collect | null> => {
  try {
    const collect: Collect[] = await findAllResources(CollectModel)({
      owner: id,
    });
    return collect[collect.length - 1];
  } catch (error: any) {
    Logger.error(`error getting collect with id ${id}`, {
      service: 'getOneCollectByIdService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
