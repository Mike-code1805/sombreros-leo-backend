import { createResource } from '../../shared/factory/createResource';
import Logger from '../../logger/appLoger';
import { CollectModel } from '../entity/models/collectModel';
import { CreateCollect, Collect } from '../entity/types/Collect';

export const createCollectService = async (
  collectRequest: CreateCollect
): Promise<Collect> => {
  try {
    const collect = await createResource(CollectModel)(collectRequest);
    return collect as Collect;
  } catch (error: any) {
    Logger.error('error creating a new collect service', {
      instance: 'services',
      service: 'createCollectService',
      trace: error.message ? error.message : '',
    });
    throw new Error(`Error creating a new collect ${error.message}`);
  }
};
