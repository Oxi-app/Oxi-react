import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TransactionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ItemsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Transactions {
  readonly id: string;
  readonly Merchant?: string;
  readonly Name?: string;
  readonly Price?: number;
  readonly Carbon?: number;
  readonly Barcode?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Transactions, TransactionsMetaData>);
  static copyOf(source: Transactions, mutator: (draft: MutableModel<Transactions, TransactionsMetaData>) => MutableModel<Transactions, TransactionsMetaData> | void): Transactions;
}

export declare class Items {
  readonly id: string;
  readonly Merchant?: string;
  readonly Name?: string;
  readonly Price?: number;
  readonly Carbon?: number;
  readonly Barcode?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Items, ItemsMetaData>);
  static copyOf(source: Items, mutator: (draft: MutableModel<Items, ItemsMetaData>) => MutableModel<Items, ItemsMetaData> | void): Items;
}