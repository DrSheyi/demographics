// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Demographics } = initSchema(schema);

export {
  Demographics
};