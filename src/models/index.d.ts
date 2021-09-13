import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TransactionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Transactions {
  readonly id: string;
  readonly Merchant?: string;
  readonly Name?: string;
  readonly Price?: number;
  readonly Carbon?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Transactions, TransactionsMetaData>);
  static copyOf(source: Transactions, mutator: (draft: MutableModel<Transactions, TransactionsMetaData>) => MutableModel<Transactions, TransactionsMetaData> | void): Transactions;
}