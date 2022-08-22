// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Transactions, Items } = initSchema(schema);

export {
  Transactions,
  Items
};