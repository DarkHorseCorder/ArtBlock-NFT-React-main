// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ArtblocksTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  id: Scalars['ID'];
  tokens?: Maybe<Array<Token>>;
  /** Projects the account owns tokens from */
  projectsOwned?: Maybe<Array<AccountProject>>;
  /** Projects the account is listed as artist for */
  projectsCreated?: Maybe<Array<Project>>;
  /** Receipts for the account, on minters with settlement */
  receipts?: Maybe<Array<Receipt>>;
  /** Contracts the account is whitelisted on */
  whitelistedOn?: Maybe<Array<Whitelisting>>;
};


export type AccounttokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};


export type AccountprojectsOwnedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountProject_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountProject_filter>;
};


export type AccountprojectsCreatedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Project_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Project_filter>;
};


export type AccountreceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Receipt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Receipt_filter>;
};


export type AccountwhitelistedOnArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Whitelisting_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Whitelisting_filter>;
};

export type AccountProject = {
  id: Scalars['ID'];
  account: Account;
  project: Project;
  count: Scalars['Int'];
};

export type AccountProject_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_filter>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  count?: InputMaybe<Scalars['Int']>;
  count_not?: InputMaybe<Scalars['Int']>;
  count_gt?: InputMaybe<Scalars['Int']>;
  count_lt?: InputMaybe<Scalars['Int']>;
  count_gte?: InputMaybe<Scalars['Int']>;
  count_lte?: InputMaybe<Scalars['Int']>;
  count_in?: InputMaybe<Array<Scalars['Int']>>;
  count_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccountProject_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AccountProject_filter>>>;
};

export type AccountProject_orderBy =
  | 'id'
  | 'account'
  | 'account__id'
  | 'project'
  | 'project__id'
  | 'project__projectId'
  | 'project__active'
  | 'project__additionalPayee'
  | 'project__additionalPayeePercentage'
  | 'project__additionalPayeeSecondarySalesAddress'
  | 'project__additionalPayeeSecondarySalesPercentage'
  | 'project__artistAddress'
  | 'project__artistName'
  | 'project__baseIpfsUri'
  | 'project__baseUri'
  | 'project__complete'
  | 'project__completedAt'
  | 'project__curationStatus'
  | 'project__currencyAddress'
  | 'project__currencySymbol'
  | 'project__description'
  | 'project__dynamic'
  | 'project__invocations'
  | 'project__ipfsHash'
  | 'project__license'
  | 'project__locked'
  | 'project__maxInvocations'
  | 'project__name'
  | 'project__paused'
  | 'project__pricePerTokenInWei'
  | 'project__royaltyPercentage'
  | 'project__script'
  | 'project__scriptCount'
  | 'project__externalAssetDependencyCount'
  | 'project__externalAssetDependenciesLocked'
  | 'project__scriptJSON'
  | 'project__scriptTypeAndVersion'
  | 'project__aspectRatio'
  | 'project__useHashString'
  | 'project__useIpfs'
  | 'project__website'
  | 'project__createdAt'
  | 'project__updatedAt'
  | 'project__activatedAt'
  | 'project__scriptUpdatedAt'
  | 'count';

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokens_?: InputMaybe<Token_filter>;
  projectsOwned_?: InputMaybe<AccountProject_filter>;
  projectsCreated_?: InputMaybe<Project_filter>;
  receipts_?: InputMaybe<Receipt_filter>;
  whitelistedOn_?: InputMaybe<Whitelisting_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Account_filter>>>;
};

export type Account_orderBy =
  | 'id'
  | 'tokens'
  | 'projectsOwned'
  | 'projectsCreated'
  | 'receipts'
  | 'whitelistedOn';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Contract = {
  /** Unique identifier made up of the contract address */
  id: Scalars['ID'];
  admin: Scalars['Bytes'];
  /** Core contract type */
  type: CoreType;
  /** Address that receives primary sales platform fees */
  renderProviderAddress: Scalars['Bytes'];
  /** Percentage of primary sales allocated to the platform */
  renderProviderPercentage: Scalars['BigInt'];
  /** Address that receives secondary sales platform royalties (null for pre-V3 contracts, check Royalty Registry) */
  renderProviderSecondarySalesAddress?: Maybe<Scalars['Bytes']>;
  /** Basis points of secondary sales allocated to the platform (null for pre-V3 contracts, check Royalty Registry) */
  renderProviderSecondarySalesBPS?: Maybe<Scalars['BigInt']>;
  /** Address that receives primary sales platform fees, only for V3_Engine contracts */
  enginePlatformProviderAddress?: Maybe<Scalars['Bytes']>;
  /** Percentage of primary sales allocated to the platform, only for V3_Engine contracts */
  enginePlatformProviderPercentage?: Maybe<Scalars['BigInt']>;
  /** Address that receives secondary sales platform royalties, only for V3_Engine contracts */
  enginePlatformProviderSecondarySalesAddress?: Maybe<Scalars['Bytes']>;
  /** Basis points of secondary sales allocated to the platform, only for V3_Engine contracts */
  enginePlatformProviderSecondarySalesBPS?: Maybe<Scalars['BigInt']>;
  /** List of contracts that are allowed to mint */
  mintWhitelisted: Array<Scalars['Bytes']>;
  /** Randomizer contract used to generate token hashes */
  randomizerContract?: Maybe<Scalars['Bytes']>;
  /** Curation registry contract address */
  curationRegistry?: Maybe<Scalars['Bytes']>;
  /** Dependency registry contract address */
  dependencyRegistry?: Maybe<DependencyRegistry>;
  nextProjectId: Scalars['BigInt'];
  /** List of projects on the contract */
  projects?: Maybe<Array<Project>>;
  /** List of tokens on the contract */
  tokens?: Maybe<Array<Token>>;
  /** Accounts whitelisted on the contract */
  whitelisted?: Maybe<Array<Whitelisting>>;
  createdAt: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
  /** Associated minter filter (if being indexed) - not always indexed for Engine contracts */
  minterFilter?: Maybe<MinterFilter>;
  preferredIPFSGateway?: Maybe<Scalars['String']>;
  preferredArweaveGateway?: Maybe<Scalars['String']>;
  /** New projects forbidden (can only be true on V3+ contracts) */
  newProjectsForbidden: Scalars['Boolean'];
  /** Automatically approve all artist split proposals (used on V3 Engine contracts) */
  autoApproveArtistSplitProposals?: Maybe<Scalars['Boolean']>;
  /** Latest engine registry that this contract is registered with, if any (used for indexing purposes) */
  registeredOn?: Maybe<EngineRegistry>;
};


export type ContractprojectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Project_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Project_filter>;
};


export type ContracttokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};


export type ContractwhitelistedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Whitelisting_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Whitelisting_filter>;
};

export type Contract_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  admin?: InputMaybe<Scalars['Bytes']>;
  admin_not?: InputMaybe<Scalars['Bytes']>;
  admin_gt?: InputMaybe<Scalars['Bytes']>;
  admin_lt?: InputMaybe<Scalars['Bytes']>;
  admin_gte?: InputMaybe<Scalars['Bytes']>;
  admin_lte?: InputMaybe<Scalars['Bytes']>;
  admin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  admin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  admin_contains?: InputMaybe<Scalars['Bytes']>;
  admin_not_contains?: InputMaybe<Scalars['Bytes']>;
  type?: InputMaybe<CoreType>;
  type_not?: InputMaybe<CoreType>;
  type_in?: InputMaybe<Array<CoreType>>;
  type_not_in?: InputMaybe<Array<CoreType>>;
  renderProviderAddress?: InputMaybe<Scalars['Bytes']>;
  renderProviderAddress_not?: InputMaybe<Scalars['Bytes']>;
  renderProviderAddress_gt?: InputMaybe<Scalars['Bytes']>;
  renderProviderAddress_lt?: InputMaybe<Scalars['Bytes']>;
  renderProviderAddress_gte?: InputMaybe<Scalars['Bytes']>;
  renderProviderAddress_lte?: InputMaybe<Scalars['Bytes']>;
  renderProviderAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  renderProviderAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  renderProviderAddress_contains?: InputMaybe<Scalars['Bytes']>;
  renderProviderAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  renderProviderPercentage?: InputMaybe<Scalars['BigInt']>;
  renderProviderPercentage_not?: InputMaybe<Scalars['BigInt']>;
  renderProviderPercentage_gt?: InputMaybe<Scalars['BigInt']>;
  renderProviderPercentage_lt?: InputMaybe<Scalars['BigInt']>;
  renderProviderPercentage_gte?: InputMaybe<Scalars['BigInt']>;
  renderProviderPercentage_lte?: InputMaybe<Scalars['BigInt']>;
  renderProviderPercentage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  renderProviderPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  renderProviderSecondarySalesAddress?: InputMaybe<Scalars['Bytes']>;
  renderProviderSecondarySalesAddress_not?: InputMaybe<Scalars['Bytes']>;
  renderProviderSecondarySalesAddress_gt?: InputMaybe<Scalars['Bytes']>;
  renderProviderSecondarySalesAddress_lt?: InputMaybe<Scalars['Bytes']>;
  renderProviderSecondarySalesAddress_gte?: InputMaybe<Scalars['Bytes']>;
  renderProviderSecondarySalesAddress_lte?: InputMaybe<Scalars['Bytes']>;
  renderProviderSecondarySalesAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  renderProviderSecondarySalesAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  renderProviderSecondarySalesAddress_contains?: InputMaybe<Scalars['Bytes']>;
  renderProviderSecondarySalesAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  renderProviderSecondarySalesBPS?: InputMaybe<Scalars['BigInt']>;
  renderProviderSecondarySalesBPS_not?: InputMaybe<Scalars['BigInt']>;
  renderProviderSecondarySalesBPS_gt?: InputMaybe<Scalars['BigInt']>;
  renderProviderSecondarySalesBPS_lt?: InputMaybe<Scalars['BigInt']>;
  renderProviderSecondarySalesBPS_gte?: InputMaybe<Scalars['BigInt']>;
  renderProviderSecondarySalesBPS_lte?: InputMaybe<Scalars['BigInt']>;
  renderProviderSecondarySalesBPS_in?: InputMaybe<Array<Scalars['BigInt']>>;
  renderProviderSecondarySalesBPS_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  enginePlatformProviderAddress?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderAddress_not?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderAddress_gt?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderAddress_lt?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderAddress_gte?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderAddress_lte?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  enginePlatformProviderAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  enginePlatformProviderAddress_contains?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderPercentage?: InputMaybe<Scalars['BigInt']>;
  enginePlatformProviderPercentage_not?: InputMaybe<Scalars['BigInt']>;
  enginePlatformProviderPercentage_gt?: InputMaybe<Scalars['BigInt']>;
  enginePlatformProviderPercentage_lt?: InputMaybe<Scalars['BigInt']>;
  enginePlatformProviderPercentage_gte?: InputMaybe<Scalars['BigInt']>;
  enginePlatformProviderPercentage_lte?: InputMaybe<Scalars['BigInt']>;
  enginePlatformProviderPercentage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  enginePlatformProviderPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  enginePlatformProviderSecondarySalesAddress?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderSecondarySalesAddress_not?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderSecondarySalesAddress_gt?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderSecondarySalesAddress_lt?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderSecondarySalesAddress_gte?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderSecondarySalesAddress_lte?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderSecondarySalesAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  enginePlatformProviderSecondarySalesAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  enginePlatformProviderSecondarySalesAddress_contains?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderSecondarySalesAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  enginePlatformProviderSecondarySalesBPS?: InputMaybe<Scalars['BigInt']>;
  enginePlatformProviderSecondarySalesBPS_not?: InputMaybe<Scalars['BigInt']>;
  enginePlatformProviderSecondarySalesBPS_gt?: InputMaybe<Scalars['BigInt']>;
  enginePlatformProviderSecondarySalesBPS_lt?: InputMaybe<Scalars['BigInt']>;
  enginePlatformProviderSecondarySalesBPS_gte?: InputMaybe<Scalars['BigInt']>;
  enginePlatformProviderSecondarySalesBPS_lte?: InputMaybe<Scalars['BigInt']>;
  enginePlatformProviderSecondarySalesBPS_in?: InputMaybe<Array<Scalars['BigInt']>>;
  enginePlatformProviderSecondarySalesBPS_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mintWhitelisted?: InputMaybe<Array<Scalars['Bytes']>>;
  mintWhitelisted_not?: InputMaybe<Array<Scalars['Bytes']>>;
  mintWhitelisted_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  mintWhitelisted_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  mintWhitelisted_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  mintWhitelisted_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  randomizerContract?: InputMaybe<Scalars['Bytes']>;
  randomizerContract_not?: InputMaybe<Scalars['Bytes']>;
  randomizerContract_gt?: InputMaybe<Scalars['Bytes']>;
  randomizerContract_lt?: InputMaybe<Scalars['Bytes']>;
  randomizerContract_gte?: InputMaybe<Scalars['Bytes']>;
  randomizerContract_lte?: InputMaybe<Scalars['Bytes']>;
  randomizerContract_in?: InputMaybe<Array<Scalars['Bytes']>>;
  randomizerContract_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  randomizerContract_contains?: InputMaybe<Scalars['Bytes']>;
  randomizerContract_not_contains?: InputMaybe<Scalars['Bytes']>;
  curationRegistry?: InputMaybe<Scalars['Bytes']>;
  curationRegistry_not?: InputMaybe<Scalars['Bytes']>;
  curationRegistry_gt?: InputMaybe<Scalars['Bytes']>;
  curationRegistry_lt?: InputMaybe<Scalars['Bytes']>;
  curationRegistry_gte?: InputMaybe<Scalars['Bytes']>;
  curationRegistry_lte?: InputMaybe<Scalars['Bytes']>;
  curationRegistry_in?: InputMaybe<Array<Scalars['Bytes']>>;
  curationRegistry_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  curationRegistry_contains?: InputMaybe<Scalars['Bytes']>;
  curationRegistry_not_contains?: InputMaybe<Scalars['Bytes']>;
  dependencyRegistry?: InputMaybe<Scalars['String']>;
  dependencyRegistry_not?: InputMaybe<Scalars['String']>;
  dependencyRegistry_gt?: InputMaybe<Scalars['String']>;
  dependencyRegistry_lt?: InputMaybe<Scalars['String']>;
  dependencyRegistry_gte?: InputMaybe<Scalars['String']>;
  dependencyRegistry_lte?: InputMaybe<Scalars['String']>;
  dependencyRegistry_in?: InputMaybe<Array<Scalars['String']>>;
  dependencyRegistry_not_in?: InputMaybe<Array<Scalars['String']>>;
  dependencyRegistry_contains?: InputMaybe<Scalars['String']>;
  dependencyRegistry_contains_nocase?: InputMaybe<Scalars['String']>;
  dependencyRegistry_not_contains?: InputMaybe<Scalars['String']>;
  dependencyRegistry_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dependencyRegistry_starts_with?: InputMaybe<Scalars['String']>;
  dependencyRegistry_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dependencyRegistry_not_starts_with?: InputMaybe<Scalars['String']>;
  dependencyRegistry_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dependencyRegistry_ends_with?: InputMaybe<Scalars['String']>;
  dependencyRegistry_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dependencyRegistry_not_ends_with?: InputMaybe<Scalars['String']>;
  dependencyRegistry_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dependencyRegistry_?: InputMaybe<DependencyRegistry_filter>;
  nextProjectId?: InputMaybe<Scalars['BigInt']>;
  nextProjectId_not?: InputMaybe<Scalars['BigInt']>;
  nextProjectId_gt?: InputMaybe<Scalars['BigInt']>;
  nextProjectId_lt?: InputMaybe<Scalars['BigInt']>;
  nextProjectId_gte?: InputMaybe<Scalars['BigInt']>;
  nextProjectId_lte?: InputMaybe<Scalars['BigInt']>;
  nextProjectId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nextProjectId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  projects_?: InputMaybe<Project_filter>;
  tokens_?: InputMaybe<Token_filter>;
  whitelisted_?: InputMaybe<Whitelisting_filter>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minterFilter?: InputMaybe<Scalars['String']>;
  minterFilter_not?: InputMaybe<Scalars['String']>;
  minterFilter_gt?: InputMaybe<Scalars['String']>;
  minterFilter_lt?: InputMaybe<Scalars['String']>;
  minterFilter_gte?: InputMaybe<Scalars['String']>;
  minterFilter_lte?: InputMaybe<Scalars['String']>;
  minterFilter_in?: InputMaybe<Array<Scalars['String']>>;
  minterFilter_not_in?: InputMaybe<Array<Scalars['String']>>;
  minterFilter_contains?: InputMaybe<Scalars['String']>;
  minterFilter_contains_nocase?: InputMaybe<Scalars['String']>;
  minterFilter_not_contains?: InputMaybe<Scalars['String']>;
  minterFilter_not_contains_nocase?: InputMaybe<Scalars['String']>;
  minterFilter_starts_with?: InputMaybe<Scalars['String']>;
  minterFilter_starts_with_nocase?: InputMaybe<Scalars['String']>;
  minterFilter_not_starts_with?: InputMaybe<Scalars['String']>;
  minterFilter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  minterFilter_ends_with?: InputMaybe<Scalars['String']>;
  minterFilter_ends_with_nocase?: InputMaybe<Scalars['String']>;
  minterFilter_not_ends_with?: InputMaybe<Scalars['String']>;
  minterFilter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  minterFilter_?: InputMaybe<MinterFilter_filter>;
  preferredIPFSGateway?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_not?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_gt?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_lt?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_gte?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_lte?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_in?: InputMaybe<Array<Scalars['String']>>;
  preferredIPFSGateway_not_in?: InputMaybe<Array<Scalars['String']>>;
  preferredIPFSGateway_contains?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_contains_nocase?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_not_contains?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_not_contains_nocase?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_starts_with?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_starts_with_nocase?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_not_starts_with?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_ends_with?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_ends_with_nocase?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_not_ends_with?: InputMaybe<Scalars['String']>;
  preferredIPFSGateway_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_not?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_gt?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_lt?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_gte?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_lte?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_in?: InputMaybe<Array<Scalars['String']>>;
  preferredArweaveGateway_not_in?: InputMaybe<Array<Scalars['String']>>;
  preferredArweaveGateway_contains?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_contains_nocase?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_not_contains?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_not_contains_nocase?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_starts_with?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_starts_with_nocase?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_not_starts_with?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_ends_with?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_ends_with_nocase?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_not_ends_with?: InputMaybe<Scalars['String']>;
  preferredArweaveGateway_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newProjectsForbidden?: InputMaybe<Scalars['Boolean']>;
  newProjectsForbidden_not?: InputMaybe<Scalars['Boolean']>;
  newProjectsForbidden_in?: InputMaybe<Array<Scalars['Boolean']>>;
  newProjectsForbidden_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  autoApproveArtistSplitProposals?: InputMaybe<Scalars['Boolean']>;
  autoApproveArtistSplitProposals_not?: InputMaybe<Scalars['Boolean']>;
  autoApproveArtistSplitProposals_in?: InputMaybe<Array<Scalars['Boolean']>>;
  autoApproveArtistSplitProposals_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  registeredOn?: InputMaybe<Scalars['String']>;
  registeredOn_not?: InputMaybe<Scalars['String']>;
  registeredOn_gt?: InputMaybe<Scalars['String']>;
  registeredOn_lt?: InputMaybe<Scalars['String']>;
  registeredOn_gte?: InputMaybe<Scalars['String']>;
  registeredOn_lte?: InputMaybe<Scalars['String']>;
  registeredOn_in?: InputMaybe<Array<Scalars['String']>>;
  registeredOn_not_in?: InputMaybe<Array<Scalars['String']>>;
  registeredOn_contains?: InputMaybe<Scalars['String']>;
  registeredOn_contains_nocase?: InputMaybe<Scalars['String']>;
  registeredOn_not_contains?: InputMaybe<Scalars['String']>;
  registeredOn_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registeredOn_starts_with?: InputMaybe<Scalars['String']>;
  registeredOn_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registeredOn_not_starts_with?: InputMaybe<Scalars['String']>;
  registeredOn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registeredOn_ends_with?: InputMaybe<Scalars['String']>;
  registeredOn_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registeredOn_not_ends_with?: InputMaybe<Scalars['String']>;
  registeredOn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registeredOn_?: InputMaybe<EngineRegistry_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Contract_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Contract_filter>>>;
};

export type Contract_orderBy =
  | 'id'
  | 'admin'
  | 'type'
  | 'renderProviderAddress'
  | 'renderProviderPercentage'
  | 'renderProviderSecondarySalesAddress'
  | 'renderProviderSecondarySalesBPS'
  | 'enginePlatformProviderAddress'
  | 'enginePlatformProviderPercentage'
  | 'enginePlatformProviderSecondarySalesAddress'
  | 'enginePlatformProviderSecondarySalesBPS'
  | 'mintWhitelisted'
  | 'randomizerContract'
  | 'curationRegistry'
  | 'dependencyRegistry'
  | 'dependencyRegistry__id'
  | 'dependencyRegistry__owner'
  | 'dependencyRegistry__updatedAt'
  | 'nextProjectId'
  | 'projects'
  | 'tokens'
  | 'whitelisted'
  | 'createdAt'
  | 'updatedAt'
  | 'minterFilter'
  | 'minterFilter__id'
  | 'minterFilter__updatedAt'
  | 'preferredIPFSGateway'
  | 'preferredArweaveGateway'
  | 'newProjectsForbidden'
  | 'autoApproveArtistSplitProposals'
  | 'registeredOn'
  | 'registeredOn__id';

export type CoreType =
  /** First Art Blocks flagship core */
  | 'GenArt721CoreV0'
  /** Second Art Blocks flagship core */
  | 'GenArt721CoreV1'
  /** Art Blocks Engine & Partner cores */
  | 'GenArt721CoreV2'
  /** Third Art Blocks flagship core */
  | 'GenArt721CoreV3'
  /** V3 Derivative - Art Blocks Engine core */
  | 'GenArt721CoreV3_Engine';

export type Dependency = {
  /** Unique identifier made up of dependency name and version separated by an @ symbol (e.g. p5js@1.0.0) */
  id: Scalars['ID'];
  /** Preffered CDN for this dependency */
  preferredCDN: Scalars['String'];
  /** Additional CDNs for this dependency */
  additionalCDNs: Array<DependencyAdditionalCDN>;
  /** Number of additional CDNs for this dependency */
  additionalCDNCount: Scalars['BigInt'];
  /** Preffered repository for this dependency */
  preferredRepository: Scalars['String'];
  /** Additional repositories for this dependency */
  additionalRepositoryCount: Scalars['BigInt'];
  /** Number of additional repositories for this dependency */
  additionalRepositories: Array<DependencyAdditionalRepository>;
  /** List of on-chain scripts that for this dependency */
  scripts: Array<DependencyScript>;
  /** Number of on-chain scripts for this dependency */
  scriptCount: Scalars['BigInt'];
  /** Concatenated string of all scripts for this dependency */
  script?: Maybe<Scalars['String']>;
  /** Reference website for this dependency (e.g. https://p5js.org) */
  referenceWebsite: Scalars['String'];
  /** Depenency registry contract that this dependency is registered on */
  dependencyRegistry: DependencyRegistry;
  /** Timestamp of last update */
  updatedAt: Scalars['BigInt'];
};


export type DependencyadditionalCDNsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DependencyAdditionalCDN_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DependencyAdditionalCDN_filter>;
};


export type DependencyadditionalRepositoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DependencyAdditionalRepository_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DependencyAdditionalRepository_filter>;
};


export type DependencyscriptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DependencyScript_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DependencyScript_filter>;
};

export type DependencyAdditionalCDN = {
  /** Unique identifier made up of dependency id and index */
  id: Scalars['ID'];
  /** Dependency this additional CDN belongs to */
  dependency: Dependency;
  /** URL of the CDN */
  cdn: Scalars['String'];
  /** Index of this additional CDN */
  index: Scalars['BigInt'];
};

export type DependencyAdditionalCDN_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  dependency?: InputMaybe<Scalars['String']>;
  dependency_not?: InputMaybe<Scalars['String']>;
  dependency_gt?: InputMaybe<Scalars['String']>;
  dependency_lt?: InputMaybe<Scalars['String']>;
  dependency_gte?: InputMaybe<Scalars['String']>;
  dependency_lte?: InputMaybe<Scalars['String']>;
  dependency_in?: InputMaybe<Array<Scalars['String']>>;
  dependency_not_in?: InputMaybe<Array<Scalars['String']>>;
  dependency_contains?: InputMaybe<Scalars['String']>;
  dependency_contains_nocase?: InputMaybe<Scalars['String']>;
  dependency_not_contains?: InputMaybe<Scalars['String']>;
  dependency_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dependency_starts_with?: InputMaybe<Scalars['String']>;
  dependency_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dependency_not_starts_with?: InputMaybe<Scalars['String']>;
  dependency_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dependency_ends_with?: InputMaybe<Scalars['String']>;
  dependency_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dependency_not_ends_with?: InputMaybe<Scalars['String']>;
  dependency_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dependency_?: InputMaybe<Dependency_filter>;
  cdn?: InputMaybe<Scalars['String']>;
  cdn_not?: InputMaybe<Scalars['String']>;
  cdn_gt?: InputMaybe<Scalars['String']>;
  cdn_lt?: InputMaybe<Scalars['String']>;
  cdn_gte?: InputMaybe<Scalars['String']>;
  cdn_lte?: InputMaybe<Scalars['String']>;
  cdn_in?: InputMaybe<Array<Scalars['String']>>;
  cdn_not_in?: InputMaybe<Array<Scalars['String']>>;
  cdn_contains?: InputMaybe<Scalars['String']>;
  cdn_contains_nocase?: InputMaybe<Scalars['String']>;
  cdn_not_contains?: InputMaybe<Scalars['String']>;
  cdn_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cdn_starts_with?: InputMaybe<Scalars['String']>;
  cdn_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cdn_not_starts_with?: InputMaybe<Scalars['String']>;
  cdn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cdn_ends_with?: InputMaybe<Scalars['String']>;
  cdn_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cdn_not_ends_with?: InputMaybe<Scalars['String']>;
  cdn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DependencyAdditionalCDN_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DependencyAdditionalCDN_filter>>>;
};

export type DependencyAdditionalCDN_orderBy =
  | 'id'
  | 'dependency'
  | 'dependency__id'
  | 'dependency__preferredCDN'
  | 'dependency__additionalCDNCount'
  | 'dependency__preferredRepository'
  | 'dependency__additionalRepositoryCount'
  | 'dependency__scriptCount'
  | 'dependency__script'
  | 'dependency__referenceWebsite'
  | 'dependency__updatedAt'
  | 'cdn'
  | 'index';

export type DependencyAdditionalRepository = {
  /** Unique identifier made up of dependency id and index */
  id: Scalars['ID'];
  /** Dependency this additional repository belongs to */
  dependency: Dependency;
  /** URL of the repository */
  repository: Scalars['String'];
  /** Index of this additional repository */
  index: Scalars['BigInt'];
};

export type DependencyAdditionalRepository_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  dependency?: InputMaybe<Scalars['String']>;
  dependency_not?: InputMaybe<Scalars['String']>;
  dependency_gt?: InputMaybe<Scalars['String']>;
  dependency_lt?: InputMaybe<Scalars['String']>;
  dependency_gte?: InputMaybe<Scalars['String']>;
  dependency_lte?: InputMaybe<Scalars['String']>;
  dependency_in?: InputMaybe<Array<Scalars['String']>>;
  dependency_not_in?: InputMaybe<Array<Scalars['String']>>;
  dependency_contains?: InputMaybe<Scalars['String']>;
  dependency_contains_nocase?: InputMaybe<Scalars['String']>;
  dependency_not_contains?: InputMaybe<Scalars['String']>;
  dependency_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dependency_starts_with?: InputMaybe<Scalars['String']>;
  dependency_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dependency_not_starts_with?: InputMaybe<Scalars['String']>;
  dependency_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dependency_ends_with?: InputMaybe<Scalars['String']>;
  dependency_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dependency_not_ends_with?: InputMaybe<Scalars['String']>;
  dependency_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dependency_?: InputMaybe<Dependency_filter>;
  repository?: InputMaybe<Scalars['String']>;
  repository_not?: InputMaybe<Scalars['String']>;
  repository_gt?: InputMaybe<Scalars['String']>;
  repository_lt?: InputMaybe<Scalars['String']>;
  repository_gte?: InputMaybe<Scalars['String']>;
  repository_lte?: InputMaybe<Scalars['String']>;
  repository_in?: InputMaybe<Array<Scalars['String']>>;
  repository_not_in?: InputMaybe<Array<Scalars['String']>>;
  repository_contains?: InputMaybe<Scalars['String']>;
  repository_contains_nocase?: InputMaybe<Scalars['String']>;
  repository_not_contains?: InputMaybe<Scalars['String']>;
  repository_not_contains_nocase?: InputMaybe<Scalars['String']>;
  repository_starts_with?: InputMaybe<Scalars['String']>;
  repository_starts_with_nocase?: InputMaybe<Scalars['String']>;
  repository_not_starts_with?: InputMaybe<Scalars['String']>;
  repository_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  repository_ends_with?: InputMaybe<Scalars['String']>;
  repository_ends_with_nocase?: InputMaybe<Scalars['String']>;
  repository_not_ends_with?: InputMaybe<Scalars['String']>;
  repository_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DependencyAdditionalRepository_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DependencyAdditionalRepository_filter>>>;
};

export type DependencyAdditionalRepository_orderBy =
  | 'id'
  | 'dependency'
  | 'dependency__id'
  | 'dependency__preferredCDN'
  | 'dependency__additionalCDNCount'
  | 'dependency__preferredRepository'
  | 'dependency__additionalRepositoryCount'
  | 'dependency__scriptCount'
  | 'dependency__script'
  | 'dependency__referenceWebsite'
  | 'dependency__updatedAt'
  | 'repository'
  | 'index';

export type DependencyRegistry = {
  /** Unique identifier made up of dependency registry contract address */
  id: Scalars['Bytes'];
  /** Core contracts that this registry can provide dependeny overrides for */
  supportedCoreContracts: Array<Contract>;
  /** List of dependencies that are registered on this registry contract */
  dependencies?: Maybe<Array<Dependency>>;
  /** Current owner of this contract */
  owner: Scalars['Bytes'];
  /** Timestamp of last update */
  updatedAt: Scalars['BigInt'];
};


export type DependencyRegistrysupportedCoreContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Contract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Contract_filter>;
};


export type DependencyRegistrydependenciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Dependency_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Dependency_filter>;
};

export type DependencyRegistry_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  supportedCoreContracts_?: InputMaybe<Contract_filter>;
  dependencies_?: InputMaybe<Dependency_filter>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DependencyRegistry_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DependencyRegistry_filter>>>;
};

export type DependencyRegistry_orderBy =
  | 'id'
  | 'supportedCoreContracts'
  | 'dependencies'
  | 'owner'
  | 'updatedAt';

export type DependencyScript = {
  /** Unique identifier made up of dependency id and index */
  id: Scalars['ID'];
  /** Dependency this script belongs to */
  dependency: Dependency;
  /** Index of this script */
  index: Scalars['BigInt'];
  /** Contents of script */
  script: Scalars['String'];
  /** Address of the bytecode storage contract for this script */
  address: Scalars['Bytes'];
};

export type DependencyScript_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  dependency?: InputMaybe<Scalars['String']>;
  dependency_not?: InputMaybe<Scalars['String']>;
  dependency_gt?: InputMaybe<Scalars['String']>;
  dependency_lt?: InputMaybe<Scalars['String']>;
  dependency_gte?: InputMaybe<Scalars['String']>;
  dependency_lte?: InputMaybe<Scalars['String']>;
  dependency_in?: InputMaybe<Array<Scalars['String']>>;
  dependency_not_in?: InputMaybe<Array<Scalars['String']>>;
  dependency_contains?: InputMaybe<Scalars['String']>;
  dependency_contains_nocase?: InputMaybe<Scalars['String']>;
  dependency_not_contains?: InputMaybe<Scalars['String']>;
  dependency_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dependency_starts_with?: InputMaybe<Scalars['String']>;
  dependency_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dependency_not_starts_with?: InputMaybe<Scalars['String']>;
  dependency_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dependency_ends_with?: InputMaybe<Scalars['String']>;
  dependency_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dependency_not_ends_with?: InputMaybe<Scalars['String']>;
  dependency_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dependency_?: InputMaybe<Dependency_filter>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  script?: InputMaybe<Scalars['String']>;
  script_not?: InputMaybe<Scalars['String']>;
  script_gt?: InputMaybe<Scalars['String']>;
  script_lt?: InputMaybe<Scalars['String']>;
  script_gte?: InputMaybe<Scalars['String']>;
  script_lte?: InputMaybe<Scalars['String']>;
  script_in?: InputMaybe<Array<Scalars['String']>>;
  script_not_in?: InputMaybe<Array<Scalars['String']>>;
  script_contains?: InputMaybe<Scalars['String']>;
  script_contains_nocase?: InputMaybe<Scalars['String']>;
  script_not_contains?: InputMaybe<Scalars['String']>;
  script_not_contains_nocase?: InputMaybe<Scalars['String']>;
  script_starts_with?: InputMaybe<Scalars['String']>;
  script_starts_with_nocase?: InputMaybe<Scalars['String']>;
  script_not_starts_with?: InputMaybe<Scalars['String']>;
  script_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  script_ends_with?: InputMaybe<Scalars['String']>;
  script_ends_with_nocase?: InputMaybe<Scalars['String']>;
  script_not_ends_with?: InputMaybe<Scalars['String']>;
  script_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_gt?: InputMaybe<Scalars['Bytes']>;
  address_lt?: InputMaybe<Scalars['Bytes']>;
  address_gte?: InputMaybe<Scalars['Bytes']>;
  address_lte?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DependencyScript_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DependencyScript_filter>>>;
};

export type DependencyScript_orderBy =
  | 'id'
  | 'dependency'
  | 'dependency__id'
  | 'dependency__preferredCDN'
  | 'dependency__additionalCDNCount'
  | 'dependency__preferredRepository'
  | 'dependency__additionalRepositoryCount'
  | 'dependency__scriptCount'
  | 'dependency__script'
  | 'dependency__referenceWebsite'
  | 'dependency__updatedAt'
  | 'index'
  | 'script'
  | 'address';

export type Dependency_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  preferredCDN?: InputMaybe<Scalars['String']>;
  preferredCDN_not?: InputMaybe<Scalars['String']>;
  preferredCDN_gt?: InputMaybe<Scalars['String']>;
  preferredCDN_lt?: InputMaybe<Scalars['String']>;
  preferredCDN_gte?: InputMaybe<Scalars['String']>;
  preferredCDN_lte?: InputMaybe<Scalars['String']>;
  preferredCDN_in?: InputMaybe<Array<Scalars['String']>>;
  preferredCDN_not_in?: InputMaybe<Array<Scalars['String']>>;
  preferredCDN_contains?: InputMaybe<Scalars['String']>;
  preferredCDN_contains_nocase?: InputMaybe<Scalars['String']>;
  preferredCDN_not_contains?: InputMaybe<Scalars['String']>;
  preferredCDN_not_contains_nocase?: InputMaybe<Scalars['String']>;
  preferredCDN_starts_with?: InputMaybe<Scalars['String']>;
  preferredCDN_starts_with_nocase?: InputMaybe<Scalars['String']>;
  preferredCDN_not_starts_with?: InputMaybe<Scalars['String']>;
  preferredCDN_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  preferredCDN_ends_with?: InputMaybe<Scalars['String']>;
  preferredCDN_ends_with_nocase?: InputMaybe<Scalars['String']>;
  preferredCDN_not_ends_with?: InputMaybe<Scalars['String']>;
  preferredCDN_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  additionalCDNs_?: InputMaybe<DependencyAdditionalCDN_filter>;
  additionalCDNCount?: InputMaybe<Scalars['BigInt']>;
  additionalCDNCount_not?: InputMaybe<Scalars['BigInt']>;
  additionalCDNCount_gt?: InputMaybe<Scalars['BigInt']>;
  additionalCDNCount_lt?: InputMaybe<Scalars['BigInt']>;
  additionalCDNCount_gte?: InputMaybe<Scalars['BigInt']>;
  additionalCDNCount_lte?: InputMaybe<Scalars['BigInt']>;
  additionalCDNCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  additionalCDNCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  preferredRepository?: InputMaybe<Scalars['String']>;
  preferredRepository_not?: InputMaybe<Scalars['String']>;
  preferredRepository_gt?: InputMaybe<Scalars['String']>;
  preferredRepository_lt?: InputMaybe<Scalars['String']>;
  preferredRepository_gte?: InputMaybe<Scalars['String']>;
  preferredRepository_lte?: InputMaybe<Scalars['String']>;
  preferredRepository_in?: InputMaybe<Array<Scalars['String']>>;
  preferredRepository_not_in?: InputMaybe<Array<Scalars['String']>>;
  preferredRepository_contains?: InputMaybe<Scalars['String']>;
  preferredRepository_contains_nocase?: InputMaybe<Scalars['String']>;
  preferredRepository_not_contains?: InputMaybe<Scalars['String']>;
  preferredRepository_not_contains_nocase?: InputMaybe<Scalars['String']>;
  preferredRepository_starts_with?: InputMaybe<Scalars['String']>;
  preferredRepository_starts_with_nocase?: InputMaybe<Scalars['String']>;
  preferredRepository_not_starts_with?: InputMaybe<Scalars['String']>;
  preferredRepository_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  preferredRepository_ends_with?: InputMaybe<Scalars['String']>;
  preferredRepository_ends_with_nocase?: InputMaybe<Scalars['String']>;
  preferredRepository_not_ends_with?: InputMaybe<Scalars['String']>;
  preferredRepository_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  additionalRepositoryCount?: InputMaybe<Scalars['BigInt']>;
  additionalRepositoryCount_not?: InputMaybe<Scalars['BigInt']>;
  additionalRepositoryCount_gt?: InputMaybe<Scalars['BigInt']>;
  additionalRepositoryCount_lt?: InputMaybe<Scalars['BigInt']>;
  additionalRepositoryCount_gte?: InputMaybe<Scalars['BigInt']>;
  additionalRepositoryCount_lte?: InputMaybe<Scalars['BigInt']>;
  additionalRepositoryCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  additionalRepositoryCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  additionalRepositories_?: InputMaybe<DependencyAdditionalRepository_filter>;
  scripts_?: InputMaybe<DependencyScript_filter>;
  scriptCount?: InputMaybe<Scalars['BigInt']>;
  scriptCount_not?: InputMaybe<Scalars['BigInt']>;
  scriptCount_gt?: InputMaybe<Scalars['BigInt']>;
  scriptCount_lt?: InputMaybe<Scalars['BigInt']>;
  scriptCount_gte?: InputMaybe<Scalars['BigInt']>;
  scriptCount_lte?: InputMaybe<Scalars['BigInt']>;
  scriptCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scriptCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  script?: InputMaybe<Scalars['String']>;
  script_not?: InputMaybe<Scalars['String']>;
  script_gt?: InputMaybe<Scalars['String']>;
  script_lt?: InputMaybe<Scalars['String']>;
  script_gte?: InputMaybe<Scalars['String']>;
  script_lte?: InputMaybe<Scalars['String']>;
  script_in?: InputMaybe<Array<Scalars['String']>>;
  script_not_in?: InputMaybe<Array<Scalars['String']>>;
  script_contains?: InputMaybe<Scalars['String']>;
  script_contains_nocase?: InputMaybe<Scalars['String']>;
  script_not_contains?: InputMaybe<Scalars['String']>;
  script_not_contains_nocase?: InputMaybe<Scalars['String']>;
  script_starts_with?: InputMaybe<Scalars['String']>;
  script_starts_with_nocase?: InputMaybe<Scalars['String']>;
  script_not_starts_with?: InputMaybe<Scalars['String']>;
  script_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  script_ends_with?: InputMaybe<Scalars['String']>;
  script_ends_with_nocase?: InputMaybe<Scalars['String']>;
  script_not_ends_with?: InputMaybe<Scalars['String']>;
  script_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  referenceWebsite?: InputMaybe<Scalars['String']>;
  referenceWebsite_not?: InputMaybe<Scalars['String']>;
  referenceWebsite_gt?: InputMaybe<Scalars['String']>;
  referenceWebsite_lt?: InputMaybe<Scalars['String']>;
  referenceWebsite_gte?: InputMaybe<Scalars['String']>;
  referenceWebsite_lte?: InputMaybe<Scalars['String']>;
  referenceWebsite_in?: InputMaybe<Array<Scalars['String']>>;
  referenceWebsite_not_in?: InputMaybe<Array<Scalars['String']>>;
  referenceWebsite_contains?: InputMaybe<Scalars['String']>;
  referenceWebsite_contains_nocase?: InputMaybe<Scalars['String']>;
  referenceWebsite_not_contains?: InputMaybe<Scalars['String']>;
  referenceWebsite_not_contains_nocase?: InputMaybe<Scalars['String']>;
  referenceWebsite_starts_with?: InputMaybe<Scalars['String']>;
  referenceWebsite_starts_with_nocase?: InputMaybe<Scalars['String']>;
  referenceWebsite_not_starts_with?: InputMaybe<Scalars['String']>;
  referenceWebsite_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  referenceWebsite_ends_with?: InputMaybe<Scalars['String']>;
  referenceWebsite_ends_with_nocase?: InputMaybe<Scalars['String']>;
  referenceWebsite_not_ends_with?: InputMaybe<Scalars['String']>;
  referenceWebsite_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dependencyRegistry?: InputMaybe<Scalars['String']>;
  dependencyRegistry_not?: InputMaybe<Scalars['String']>;
  dependencyRegistry_gt?: InputMaybe<Scalars['String']>;
  dependencyRegistry_lt?: InputMaybe<Scalars['String']>;
  dependencyRegistry_gte?: InputMaybe<Scalars['String']>;
  dependencyRegistry_lte?: InputMaybe<Scalars['String']>;
  dependencyRegistry_in?: InputMaybe<Array<Scalars['String']>>;
  dependencyRegistry_not_in?: InputMaybe<Array<Scalars['String']>>;
  dependencyRegistry_contains?: InputMaybe<Scalars['String']>;
  dependencyRegistry_contains_nocase?: InputMaybe<Scalars['String']>;
  dependencyRegistry_not_contains?: InputMaybe<Scalars['String']>;
  dependencyRegistry_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dependencyRegistry_starts_with?: InputMaybe<Scalars['String']>;
  dependencyRegistry_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dependencyRegistry_not_starts_with?: InputMaybe<Scalars['String']>;
  dependencyRegistry_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dependencyRegistry_ends_with?: InputMaybe<Scalars['String']>;
  dependencyRegistry_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dependencyRegistry_not_ends_with?: InputMaybe<Scalars['String']>;
  dependencyRegistry_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dependencyRegistry_?: InputMaybe<DependencyRegistry_filter>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Dependency_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Dependency_filter>>>;
};

export type Dependency_orderBy =
  | 'id'
  | 'preferredCDN'
  | 'additionalCDNs'
  | 'additionalCDNCount'
  | 'preferredRepository'
  | 'additionalRepositoryCount'
  | 'additionalRepositories'
  | 'scripts'
  | 'scriptCount'
  | 'script'
  | 'referenceWebsite'
  | 'dependencyRegistry'
  | 'dependencyRegistry__id'
  | 'dependencyRegistry__owner'
  | 'dependencyRegistry__updatedAt'
  | 'updatedAt';

export type EngineRegistry = {
  /** Unique identifier made up of the Engine Registry's contract address */
  id: Scalars['ID'];
  /** Core contracts that are registered on this Engine Registry, when this is most recent Engine Registry to add the contract */
  registeredContracts?: Maybe<Array<Contract>>;
};


export type EngineRegistryregisteredContractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Contract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Contract_filter>;
};

export type EngineRegistry_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registeredContracts_?: InputMaybe<Contract_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EngineRegistry_filter>>>;
  or?: InputMaybe<Array<InputMaybe<EngineRegistry_filter>>>;
};

export type EngineRegistry_orderBy =
  | 'id'
  | 'registeredContracts';

export type Exchange =
  /** Opensea V1 */
  | 'OS_V1'
  /** Opensea V2 */
  | 'OS_V2'
  /** LooksRare */
  | 'LR_V1'
  /** Opensea Seaport */
  | 'OS_SP';

export type Minter = {
  /** Unique identifier made up of minter contract address */
  id: Scalars['ID'];
  /** Minter type - String if minter returns it's type, empty string otherwise */
  type: Scalars['String'];
  /** Associated Minter Filter */
  minterFilter: MinterFilter;
  /** Minimum allowed auction length in seconds (linear Dutch auction minters) */
  minimumAuctionLengthInSeconds?: Maybe<Scalars['BigInt']>;
  /** Minimum allowed half life in seconds (exponential Dutch auction minters) */
  minimumHalfLifeInSeconds?: Maybe<Scalars['BigInt']>;
  /** Maximum allowed half life in seconds (exponential Dutch auction minters) */
  maximumHalfLifeInSeconds?: Maybe<Scalars['BigInt']>;
  /** Configuration details used by specific minters (json string) */
  extraMinterDetails: Scalars['String'];
  coreContract: Contract;
  /** Receipts for this minter, only for minters with settlement */
  receipts?: Maybe<Array<Receipt>>;
  updatedAt: Scalars['BigInt'];
};


export type MinterreceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Receipt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Receipt_filter>;
};

export type MinterFilter = {
  /** Unique identifier made up of minter filter contract address */
  id: Scalars['ID'];
  /** Associated core contract */
  coreContract: Contract;
  /** Minters allowlisted on MinterFilter */
  minterAllowlist: Array<Minter>;
  /** Minters associated with MinterFilter */
  associatedMinters: Array<Minter>;
  updatedAt: Scalars['BigInt'];
};


export type MinterFilterminterAllowlistArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Minter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Minter_filter>;
};


export type MinterFilterassociatedMintersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Minter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Minter_filter>;
};

export type MinterFilter_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  coreContract?: InputMaybe<Scalars['String']>;
  coreContract_not?: InputMaybe<Scalars['String']>;
  coreContract_gt?: InputMaybe<Scalars['String']>;
  coreContract_lt?: InputMaybe<Scalars['String']>;
  coreContract_gte?: InputMaybe<Scalars['String']>;
  coreContract_lte?: InputMaybe<Scalars['String']>;
  coreContract_in?: InputMaybe<Array<Scalars['String']>>;
  coreContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  coreContract_contains?: InputMaybe<Scalars['String']>;
  coreContract_contains_nocase?: InputMaybe<Scalars['String']>;
  coreContract_not_contains?: InputMaybe<Scalars['String']>;
  coreContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  coreContract_starts_with?: InputMaybe<Scalars['String']>;
  coreContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  coreContract_not_starts_with?: InputMaybe<Scalars['String']>;
  coreContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  coreContract_ends_with?: InputMaybe<Scalars['String']>;
  coreContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  coreContract_not_ends_with?: InputMaybe<Scalars['String']>;
  coreContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  coreContract_?: InputMaybe<Contract_filter>;
  minterAllowlist?: InputMaybe<Array<Scalars['String']>>;
  minterAllowlist_not?: InputMaybe<Array<Scalars['String']>>;
  minterAllowlist_contains?: InputMaybe<Array<Scalars['String']>>;
  minterAllowlist_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  minterAllowlist_not_contains?: InputMaybe<Array<Scalars['String']>>;
  minterAllowlist_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  minterAllowlist_?: InputMaybe<Minter_filter>;
  associatedMinters_?: InputMaybe<Minter_filter>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MinterFilter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MinterFilter_filter>>>;
};

export type MinterFilter_orderBy =
  | 'id'
  | 'coreContract'
  | 'coreContract__id'
  | 'coreContract__admin'
  | 'coreContract__type'
  | 'coreContract__renderProviderAddress'
  | 'coreContract__renderProviderPercentage'
  | 'coreContract__renderProviderSecondarySalesAddress'
  | 'coreContract__renderProviderSecondarySalesBPS'
  | 'coreContract__enginePlatformProviderAddress'
  | 'coreContract__enginePlatformProviderPercentage'
  | 'coreContract__enginePlatformProviderSecondarySalesAddress'
  | 'coreContract__enginePlatformProviderSecondarySalesBPS'
  | 'coreContract__randomizerContract'
  | 'coreContract__curationRegistry'
  | 'coreContract__nextProjectId'
  | 'coreContract__createdAt'
  | 'coreContract__updatedAt'
  | 'coreContract__preferredIPFSGateway'
  | 'coreContract__preferredArweaveGateway'
  | 'coreContract__newProjectsForbidden'
  | 'coreContract__autoApproveArtistSplitProposals'
  | 'minterAllowlist'
  | 'associatedMinters'
  | 'updatedAt';

export type Minter_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  minterFilter?: InputMaybe<Scalars['String']>;
  minterFilter_not?: InputMaybe<Scalars['String']>;
  minterFilter_gt?: InputMaybe<Scalars['String']>;
  minterFilter_lt?: InputMaybe<Scalars['String']>;
  minterFilter_gte?: InputMaybe<Scalars['String']>;
  minterFilter_lte?: InputMaybe<Scalars['String']>;
  minterFilter_in?: InputMaybe<Array<Scalars['String']>>;
  minterFilter_not_in?: InputMaybe<Array<Scalars['String']>>;
  minterFilter_contains?: InputMaybe<Scalars['String']>;
  minterFilter_contains_nocase?: InputMaybe<Scalars['String']>;
  minterFilter_not_contains?: InputMaybe<Scalars['String']>;
  minterFilter_not_contains_nocase?: InputMaybe<Scalars['String']>;
  minterFilter_starts_with?: InputMaybe<Scalars['String']>;
  minterFilter_starts_with_nocase?: InputMaybe<Scalars['String']>;
  minterFilter_not_starts_with?: InputMaybe<Scalars['String']>;
  minterFilter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  minterFilter_ends_with?: InputMaybe<Scalars['String']>;
  minterFilter_ends_with_nocase?: InputMaybe<Scalars['String']>;
  minterFilter_not_ends_with?: InputMaybe<Scalars['String']>;
  minterFilter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  minterFilter_?: InputMaybe<MinterFilter_filter>;
  minimumAuctionLengthInSeconds?: InputMaybe<Scalars['BigInt']>;
  minimumAuctionLengthInSeconds_not?: InputMaybe<Scalars['BigInt']>;
  minimumAuctionLengthInSeconds_gt?: InputMaybe<Scalars['BigInt']>;
  minimumAuctionLengthInSeconds_lt?: InputMaybe<Scalars['BigInt']>;
  minimumAuctionLengthInSeconds_gte?: InputMaybe<Scalars['BigInt']>;
  minimumAuctionLengthInSeconds_lte?: InputMaybe<Scalars['BigInt']>;
  minimumAuctionLengthInSeconds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumAuctionLengthInSeconds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumHalfLifeInSeconds?: InputMaybe<Scalars['BigInt']>;
  minimumHalfLifeInSeconds_not?: InputMaybe<Scalars['BigInt']>;
  minimumHalfLifeInSeconds_gt?: InputMaybe<Scalars['BigInt']>;
  minimumHalfLifeInSeconds_lt?: InputMaybe<Scalars['BigInt']>;
  minimumHalfLifeInSeconds_gte?: InputMaybe<Scalars['BigInt']>;
  minimumHalfLifeInSeconds_lte?: InputMaybe<Scalars['BigInt']>;
  minimumHalfLifeInSeconds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minimumHalfLifeInSeconds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maximumHalfLifeInSeconds?: InputMaybe<Scalars['BigInt']>;
  maximumHalfLifeInSeconds_not?: InputMaybe<Scalars['BigInt']>;
  maximumHalfLifeInSeconds_gt?: InputMaybe<Scalars['BigInt']>;
  maximumHalfLifeInSeconds_lt?: InputMaybe<Scalars['BigInt']>;
  maximumHalfLifeInSeconds_gte?: InputMaybe<Scalars['BigInt']>;
  maximumHalfLifeInSeconds_lte?: InputMaybe<Scalars['BigInt']>;
  maximumHalfLifeInSeconds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maximumHalfLifeInSeconds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  extraMinterDetails?: InputMaybe<Scalars['String']>;
  extraMinterDetails_not?: InputMaybe<Scalars['String']>;
  extraMinterDetails_gt?: InputMaybe<Scalars['String']>;
  extraMinterDetails_lt?: InputMaybe<Scalars['String']>;
  extraMinterDetails_gte?: InputMaybe<Scalars['String']>;
  extraMinterDetails_lte?: InputMaybe<Scalars['String']>;
  extraMinterDetails_in?: InputMaybe<Array<Scalars['String']>>;
  extraMinterDetails_not_in?: InputMaybe<Array<Scalars['String']>>;
  extraMinterDetails_contains?: InputMaybe<Scalars['String']>;
  extraMinterDetails_contains_nocase?: InputMaybe<Scalars['String']>;
  extraMinterDetails_not_contains?: InputMaybe<Scalars['String']>;
  extraMinterDetails_not_contains_nocase?: InputMaybe<Scalars['String']>;
  extraMinterDetails_starts_with?: InputMaybe<Scalars['String']>;
  extraMinterDetails_starts_with_nocase?: InputMaybe<Scalars['String']>;
  extraMinterDetails_not_starts_with?: InputMaybe<Scalars['String']>;
  extraMinterDetails_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  extraMinterDetails_ends_with?: InputMaybe<Scalars['String']>;
  extraMinterDetails_ends_with_nocase?: InputMaybe<Scalars['String']>;
  extraMinterDetails_not_ends_with?: InputMaybe<Scalars['String']>;
  extraMinterDetails_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  coreContract?: InputMaybe<Scalars['String']>;
  coreContract_not?: InputMaybe<Scalars['String']>;
  coreContract_gt?: InputMaybe<Scalars['String']>;
  coreContract_lt?: InputMaybe<Scalars['String']>;
  coreContract_gte?: InputMaybe<Scalars['String']>;
  coreContract_lte?: InputMaybe<Scalars['String']>;
  coreContract_in?: InputMaybe<Array<Scalars['String']>>;
  coreContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  coreContract_contains?: InputMaybe<Scalars['String']>;
  coreContract_contains_nocase?: InputMaybe<Scalars['String']>;
  coreContract_not_contains?: InputMaybe<Scalars['String']>;
  coreContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  coreContract_starts_with?: InputMaybe<Scalars['String']>;
  coreContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  coreContract_not_starts_with?: InputMaybe<Scalars['String']>;
  coreContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  coreContract_ends_with?: InputMaybe<Scalars['String']>;
  coreContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  coreContract_not_ends_with?: InputMaybe<Scalars['String']>;
  coreContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  coreContract_?: InputMaybe<Contract_filter>;
  receipts_?: InputMaybe<Receipt_filter>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Minter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Minter_filter>>>;
};

export type Minter_orderBy =
  | 'id'
  | 'type'
  | 'minterFilter'
  | 'minterFilter__id'
  | 'minterFilter__updatedAt'
  | 'minimumAuctionLengthInSeconds'
  | 'minimumHalfLifeInSeconds'
  | 'maximumHalfLifeInSeconds'
  | 'extraMinterDetails'
  | 'coreContract'
  | 'coreContract__id'
  | 'coreContract__admin'
  | 'coreContract__type'
  | 'coreContract__renderProviderAddress'
  | 'coreContract__renderProviderPercentage'
  | 'coreContract__renderProviderSecondarySalesAddress'
  | 'coreContract__renderProviderSecondarySalesBPS'
  | 'coreContract__enginePlatformProviderAddress'
  | 'coreContract__enginePlatformProviderPercentage'
  | 'coreContract__enginePlatformProviderSecondarySalesAddress'
  | 'coreContract__enginePlatformProviderSecondarySalesBPS'
  | 'coreContract__randomizerContract'
  | 'coreContract__curationRegistry'
  | 'coreContract__nextProjectId'
  | 'coreContract__createdAt'
  | 'coreContract__updatedAt'
  | 'coreContract__preferredIPFSGateway'
  | 'coreContract__preferredArweaveGateway'
  | 'coreContract__newProjectsForbidden'
  | 'coreContract__autoApproveArtistSplitProposals'
  | 'receipts'
  | 'updatedAt';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Payment = {
  /** Payment id formatted: '{SaleId}-{paymentNumber}' (paymentNumber will be 0 for non-Seaport trades) */
  id: Scalars['ID'];
  /** Type of token transferred in this payment */
  paymentType: PaymentType;
  /** The address of the token used for the payment */
  paymentToken: Scalars['Bytes'];
  /** The price of the sale */
  price: Scalars['BigInt'];
  /** The associated sale */
  sale: Sale;
  /** The recipient address */
  recipient: Scalars['Bytes'];
};

export type PaymentType =
  | 'Native'
  | 'ERC20'
  | 'ERC721'
  | 'ERC1155';

export type Payment_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  paymentType?: InputMaybe<PaymentType>;
  paymentType_not?: InputMaybe<PaymentType>;
  paymentType_in?: InputMaybe<Array<PaymentType>>;
  paymentType_not_in?: InputMaybe<Array<PaymentType>>;
  paymentToken?: InputMaybe<Scalars['Bytes']>;
  paymentToken_not?: InputMaybe<Scalars['Bytes']>;
  paymentToken_gt?: InputMaybe<Scalars['Bytes']>;
  paymentToken_lt?: InputMaybe<Scalars['Bytes']>;
  paymentToken_gte?: InputMaybe<Scalars['Bytes']>;
  paymentToken_lte?: InputMaybe<Scalars['Bytes']>;
  paymentToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paymentToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  paymentToken_contains?: InputMaybe<Scalars['Bytes']>;
  paymentToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  price?: InputMaybe<Scalars['BigInt']>;
  price_not?: InputMaybe<Scalars['BigInt']>;
  price_gt?: InputMaybe<Scalars['BigInt']>;
  price_lt?: InputMaybe<Scalars['BigInt']>;
  price_gte?: InputMaybe<Scalars['BigInt']>;
  price_lte?: InputMaybe<Scalars['BigInt']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sale?: InputMaybe<Scalars['String']>;
  sale_not?: InputMaybe<Scalars['String']>;
  sale_gt?: InputMaybe<Scalars['String']>;
  sale_lt?: InputMaybe<Scalars['String']>;
  sale_gte?: InputMaybe<Scalars['String']>;
  sale_lte?: InputMaybe<Scalars['String']>;
  sale_in?: InputMaybe<Array<Scalars['String']>>;
  sale_not_in?: InputMaybe<Array<Scalars['String']>>;
  sale_contains?: InputMaybe<Scalars['String']>;
  sale_contains_nocase?: InputMaybe<Scalars['String']>;
  sale_not_contains?: InputMaybe<Scalars['String']>;
  sale_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sale_starts_with?: InputMaybe<Scalars['String']>;
  sale_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sale_not_starts_with?: InputMaybe<Scalars['String']>;
  sale_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sale_ends_with?: InputMaybe<Scalars['String']>;
  sale_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sale_not_ends_with?: InputMaybe<Scalars['String']>;
  sale_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sale_?: InputMaybe<Sale_filter>;
  recipient?: InputMaybe<Scalars['Bytes']>;
  recipient_not?: InputMaybe<Scalars['Bytes']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']>;
  recipient_lt?: InputMaybe<Scalars['Bytes']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Payment_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Payment_filter>>>;
};

export type Payment_orderBy =
  | 'id'
  | 'paymentType'
  | 'paymentToken'
  | 'price'
  | 'sale'
  | 'sale__id'
  | 'sale__txHash'
  | 'sale__exchange'
  | 'sale__saleType'
  | 'sale__blockNumber'
  | 'sale__blockTimestamp'
  | 'sale__summaryTokensSold'
  | 'sale__seller'
  | 'sale__buyer'
  | 'sale__isPrivate'
  | 'recipient';

export type Project = {
  /** Unique identifier made up of contract address and project id */
  id: Scalars['ID'];
  /** ID of the project on the contract */
  projectId: Scalars['BigInt'];
  /** Determines if the project should be visible to the public */
  active: Scalars['Boolean'];
  /** Address to split primary sales with the artist */
  additionalPayee?: Maybe<Scalars['Bytes']>;
  /** Percentage of artist's share of primary sales that goes to additional payee */
  additionalPayeePercentage?: Maybe<Scalars['BigInt']>;
  /** Address to split Secondary sales with the artist */
  additionalPayeeSecondarySalesAddress?: Maybe<Scalars['Bytes']>;
  /** Percentage of artist's share of secondary sales that goes to additional payee */
  additionalPayeeSecondarySalesPercentage?: Maybe<Scalars['BigInt']>;
  /** Artist that created the project */
  artist: Account;
  /** Wallet address of the artist */
  artistAddress: Scalars['Bytes'];
  /** Artist name */
  artistName?: Maybe<Scalars['String']>;
  baseIpfsUri?: Maybe<Scalars['String']>;
  baseUri?: Maybe<Scalars['String']>;
  /** A project is complete when it has reached its maximum invocations */
  complete: Scalars['Boolean'];
  /** Timestamp at which a project was completed */
  completedAt?: Maybe<Scalars['BigInt']>;
  /** Curated, playground, factory. A project with no curation status is considered factory */
  curationStatus?: Maybe<Scalars['String']>;
  /** ERC-20 contract address if the project is purchasable via ERC-20 */
  currencyAddress?: Maybe<Scalars['Bytes']>;
  /** Currency symbol for ERC-20 */
  currencySymbol?: Maybe<Scalars['String']>;
  /** Artist description of the project */
  description?: Maybe<Scalars['String']>;
  /** Is the project dynamic or a static image */
  dynamic: Scalars['Boolean'];
  /** Number of times the project has been invoked - number of tokens of the project */
  invocations: Scalars['BigInt'];
  ipfsHash?: Maybe<Scalars['String']>;
  /** License for the project */
  license?: Maybe<Scalars['String']>;
  /** For V3 and-on, this field is null, and projects lock 4 weeks after `completedAt`. Once the project is locked its script may never be updated again. */
  locked?: Maybe<Scalars['Boolean']>;
  /** Maximum number of invocations allowed for the project. Note that minter contracts may additionally limit a project's maxInvocations on a specific minter. */
  maxInvocations: Scalars['BigInt'];
  /** Project name */
  name?: Maybe<Scalars['String']>;
  /** Purchases paused */
  paused: Scalars['Boolean'];
  pricePerTokenInWei: Scalars['BigInt'];
  /** Artist/additional payee royalty percentage */
  royaltyPercentage?: Maybe<Scalars['BigInt']>;
  /** The full script composed of scripts */
  script?: Maybe<Scalars['String']>;
  /** Parts of the project script */
  scripts?: Maybe<Array<ProjectScript>>;
  /** The number of scripts stored on-chain */
  scriptCount: Scalars['BigInt'];
  /** The number of external asset dependencies stored on-chain */
  externalAssetDependencyCount: Scalars['BigInt'];
  /** Once the project's external asset dependencies are locked they may never be modified again */
  externalAssetDependenciesLocked: Scalars['Boolean'];
  /** Extra information about the script and rendering options */
  scriptJSON?: Maybe<Scalars['String']>;
  /** Script type and version (see `scriptJSON` if null) */
  scriptTypeAndVersion?: Maybe<Scalars['String']>;
  /** Aspect ratio of the project (see `scriptJSON` if null) */
  aspectRatio?: Maybe<Scalars['String']>;
  /** Tokens of the project */
  tokens?: Maybe<Array<Token>>;
  /** Does the project actually use the hash string */
  useHashString: Scalars['Boolean'];
  /** Does the project use media from ipfs */
  useIpfs?: Maybe<Scalars['Boolean']>;
  /** Artist or project website */
  website?: Maybe<Scalars['String']>;
  /** Proposed Artist addresses and payment split percentages */
  proposedArtistAddressesAndSplits?: Maybe<ProposedArtistAddressesAndSplit>;
  /** Accounts that own tokens of the project */
  owners?: Maybe<Array<AccountProject>>;
  /** Receipts for this project, only on minters with settlement */
  receipts?: Maybe<Array<Receipt>>;
  createdAt: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
  activatedAt?: Maybe<Scalars['BigInt']>;
  scriptUpdatedAt?: Maybe<Scalars['BigInt']>;
  contract: Contract;
  /** Minter configuration for this project (not implemented prior to minter filters) */
  minterConfiguration?: Maybe<ProjectMinterConfiguration>;
  /** Lookup table to get the Sale history of the project */
  saleLookupTables: Array<SaleLookupTable>;
  externalAssetDependencies: Array<ProjectExternalAssetDependency>;
};


export type ProjectscriptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectScript_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectScript_filter>;
};


export type ProjecttokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};


export type ProjectownersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountProject_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountProject_filter>;
};


export type ProjectreceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Receipt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Receipt_filter>;
};


export type ProjectsaleLookupTablesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SaleLookupTable_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SaleLookupTable_filter>;
};


export type ProjectexternalAssetDependenciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectExternalAssetDependency_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectExternalAssetDependency_filter>;
};

export type ProjectExternalAssetDependency = {
  /** Unique identifier made up of projectId-index */
  id: Scalars['ID'];
  /** The associated project */
  project: Project;
  /** The dependency type */
  dependencyType: ProjectExternalAssetDependencyType;
  /** The dependency cid */
  cid: Scalars['String'];
  /** The dependency index */
  index: Scalars['BigInt'];
};

export type ProjectExternalAssetDependencyType =
  /** Asset hosted on IPFS */
  | 'IPFS'
  /** Asset hosted on Arweave */
  | 'ARWEAVE';

export type ProjectExternalAssetDependency_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  dependencyType?: InputMaybe<ProjectExternalAssetDependencyType>;
  dependencyType_not?: InputMaybe<ProjectExternalAssetDependencyType>;
  dependencyType_in?: InputMaybe<Array<ProjectExternalAssetDependencyType>>;
  dependencyType_not_in?: InputMaybe<Array<ProjectExternalAssetDependencyType>>;
  cid?: InputMaybe<Scalars['String']>;
  cid_not?: InputMaybe<Scalars['String']>;
  cid_gt?: InputMaybe<Scalars['String']>;
  cid_lt?: InputMaybe<Scalars['String']>;
  cid_gte?: InputMaybe<Scalars['String']>;
  cid_lte?: InputMaybe<Scalars['String']>;
  cid_in?: InputMaybe<Array<Scalars['String']>>;
  cid_not_in?: InputMaybe<Array<Scalars['String']>>;
  cid_contains?: InputMaybe<Scalars['String']>;
  cid_contains_nocase?: InputMaybe<Scalars['String']>;
  cid_not_contains?: InputMaybe<Scalars['String']>;
  cid_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cid_starts_with?: InputMaybe<Scalars['String']>;
  cid_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cid_not_starts_with?: InputMaybe<Scalars['String']>;
  cid_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cid_ends_with?: InputMaybe<Scalars['String']>;
  cid_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cid_not_ends_with?: InputMaybe<Scalars['String']>;
  cid_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProjectExternalAssetDependency_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProjectExternalAssetDependency_filter>>>;
};

export type ProjectExternalAssetDependency_orderBy =
  | 'id'
  | 'project'
  | 'project__id'
  | 'project__projectId'
  | 'project__active'
  | 'project__additionalPayee'
  | 'project__additionalPayeePercentage'
  | 'project__additionalPayeeSecondarySalesAddress'
  | 'project__additionalPayeeSecondarySalesPercentage'
  | 'project__artistAddress'
  | 'project__artistName'
  | 'project__baseIpfsUri'
  | 'project__baseUri'
  | 'project__complete'
  | 'project__completedAt'
  | 'project__curationStatus'
  | 'project__currencyAddress'
  | 'project__currencySymbol'
  | 'project__description'
  | 'project__dynamic'
  | 'project__invocations'
  | 'project__ipfsHash'
  | 'project__license'
  | 'project__locked'
  | 'project__maxInvocations'
  | 'project__name'
  | 'project__paused'
  | 'project__pricePerTokenInWei'
  | 'project__royaltyPercentage'
  | 'project__script'
  | 'project__scriptCount'
  | 'project__externalAssetDependencyCount'
  | 'project__externalAssetDependenciesLocked'
  | 'project__scriptJSON'
  | 'project__scriptTypeAndVersion'
  | 'project__aspectRatio'
  | 'project__useHashString'
  | 'project__useIpfs'
  | 'project__website'
  | 'project__createdAt'
  | 'project__updatedAt'
  | 'project__activatedAt'
  | 'project__scriptUpdatedAt'
  | 'dependencyType'
  | 'cid'
  | 'index';

export type ProjectMinterConfiguration = {
  /** Unique identifier made up of minter contract address-projectId */
  id: Scalars['ID'];
  /** The associated project */
  project: Project;
  /** The associated minter */
  minter: Minter;
  /** true if project's token price has been configured on minter */
  priceIsConfigured: Scalars['Boolean'];
  /** currency symbol as defined on minter - ETH reserved for ether */
  currencySymbol: Scalars['String'];
  /** currency address as defined on minter - address(0) reserved for ether */
  currencyAddress: Scalars['Bytes'];
  /** Defines if purchasing token to another is allowed */
  purchaseToDisabled: Scalars['Boolean'];
  /** price of token or resting price of Duch auction, in wei */
  basePrice?: Maybe<Scalars['BigInt']>;
  /** Dutch auction start price, in wei */
  startPrice?: Maybe<Scalars['BigInt']>;
  /** Half life for exponential decay Dutch auction, in seconds */
  halfLifeSeconds?: Maybe<Scalars['BigInt']>;
  /** Dutch auction start time (unix timestamp) */
  startTime?: Maybe<Scalars['BigInt']>;
  /** Linear Dutch auction end time (unix timestamp) */
  endTime?: Maybe<Scalars['BigInt']>;
  /** Configuration details used by specific minter project configurations (json string) */
  extraMinterDetails: Scalars['String'];
  /** Maximum number of invocations allowed for the project (on the minter). If less than than a project's maximum invocations defined on a core contract, the minter contract will limit this project's maximum invocations */
  maxInvocations?: Maybe<Scalars['BigInt']>;
};

export type ProjectMinterConfiguration_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  minter?: InputMaybe<Scalars['String']>;
  minter_not?: InputMaybe<Scalars['String']>;
  minter_gt?: InputMaybe<Scalars['String']>;
  minter_lt?: InputMaybe<Scalars['String']>;
  minter_gte?: InputMaybe<Scalars['String']>;
  minter_lte?: InputMaybe<Scalars['String']>;
  minter_in?: InputMaybe<Array<Scalars['String']>>;
  minter_not_in?: InputMaybe<Array<Scalars['String']>>;
  minter_contains?: InputMaybe<Scalars['String']>;
  minter_contains_nocase?: InputMaybe<Scalars['String']>;
  minter_not_contains?: InputMaybe<Scalars['String']>;
  minter_not_contains_nocase?: InputMaybe<Scalars['String']>;
  minter_starts_with?: InputMaybe<Scalars['String']>;
  minter_starts_with_nocase?: InputMaybe<Scalars['String']>;
  minter_not_starts_with?: InputMaybe<Scalars['String']>;
  minter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  minter_ends_with?: InputMaybe<Scalars['String']>;
  minter_ends_with_nocase?: InputMaybe<Scalars['String']>;
  minter_not_ends_with?: InputMaybe<Scalars['String']>;
  minter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  minter_?: InputMaybe<Minter_filter>;
  priceIsConfigured?: InputMaybe<Scalars['Boolean']>;
  priceIsConfigured_not?: InputMaybe<Scalars['Boolean']>;
  priceIsConfigured_in?: InputMaybe<Array<Scalars['Boolean']>>;
  priceIsConfigured_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  currencySymbol?: InputMaybe<Scalars['String']>;
  currencySymbol_not?: InputMaybe<Scalars['String']>;
  currencySymbol_gt?: InputMaybe<Scalars['String']>;
  currencySymbol_lt?: InputMaybe<Scalars['String']>;
  currencySymbol_gte?: InputMaybe<Scalars['String']>;
  currencySymbol_lte?: InputMaybe<Scalars['String']>;
  currencySymbol_in?: InputMaybe<Array<Scalars['String']>>;
  currencySymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  currencySymbol_contains?: InputMaybe<Scalars['String']>;
  currencySymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  currencySymbol_not_contains?: InputMaybe<Scalars['String']>;
  currencySymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currencySymbol_starts_with?: InputMaybe<Scalars['String']>;
  currencySymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currencySymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  currencySymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currencySymbol_ends_with?: InputMaybe<Scalars['String']>;
  currencySymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currencySymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  currencySymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currencyAddress?: InputMaybe<Scalars['Bytes']>;
  currencyAddress_not?: InputMaybe<Scalars['Bytes']>;
  currencyAddress_gt?: InputMaybe<Scalars['Bytes']>;
  currencyAddress_lt?: InputMaybe<Scalars['Bytes']>;
  currencyAddress_gte?: InputMaybe<Scalars['Bytes']>;
  currencyAddress_lte?: InputMaybe<Scalars['Bytes']>;
  currencyAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  currencyAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  currencyAddress_contains?: InputMaybe<Scalars['Bytes']>;
  currencyAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  purchaseToDisabled?: InputMaybe<Scalars['Boolean']>;
  purchaseToDisabled_not?: InputMaybe<Scalars['Boolean']>;
  purchaseToDisabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  purchaseToDisabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  basePrice?: InputMaybe<Scalars['BigInt']>;
  basePrice_not?: InputMaybe<Scalars['BigInt']>;
  basePrice_gt?: InputMaybe<Scalars['BigInt']>;
  basePrice_lt?: InputMaybe<Scalars['BigInt']>;
  basePrice_gte?: InputMaybe<Scalars['BigInt']>;
  basePrice_lte?: InputMaybe<Scalars['BigInt']>;
  basePrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  basePrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startPrice?: InputMaybe<Scalars['BigInt']>;
  startPrice_not?: InputMaybe<Scalars['BigInt']>;
  startPrice_gt?: InputMaybe<Scalars['BigInt']>;
  startPrice_lt?: InputMaybe<Scalars['BigInt']>;
  startPrice_gte?: InputMaybe<Scalars['BigInt']>;
  startPrice_lte?: InputMaybe<Scalars['BigInt']>;
  startPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  halfLifeSeconds?: InputMaybe<Scalars['BigInt']>;
  halfLifeSeconds_not?: InputMaybe<Scalars['BigInt']>;
  halfLifeSeconds_gt?: InputMaybe<Scalars['BigInt']>;
  halfLifeSeconds_lt?: InputMaybe<Scalars['BigInt']>;
  halfLifeSeconds_gte?: InputMaybe<Scalars['BigInt']>;
  halfLifeSeconds_lte?: InputMaybe<Scalars['BigInt']>;
  halfLifeSeconds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  halfLifeSeconds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime?: InputMaybe<Scalars['BigInt']>;
  startTime_not?: InputMaybe<Scalars['BigInt']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']>;
  startTime_lt?: InputMaybe<Scalars['BigInt']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime?: InputMaybe<Scalars['BigInt']>;
  endTime_not?: InputMaybe<Scalars['BigInt']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']>;
  endTime_lt?: InputMaybe<Scalars['BigInt']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  extraMinterDetails?: InputMaybe<Scalars['String']>;
  extraMinterDetails_not?: InputMaybe<Scalars['String']>;
  extraMinterDetails_gt?: InputMaybe<Scalars['String']>;
  extraMinterDetails_lt?: InputMaybe<Scalars['String']>;
  extraMinterDetails_gte?: InputMaybe<Scalars['String']>;
  extraMinterDetails_lte?: InputMaybe<Scalars['String']>;
  extraMinterDetails_in?: InputMaybe<Array<Scalars['String']>>;
  extraMinterDetails_not_in?: InputMaybe<Array<Scalars['String']>>;
  extraMinterDetails_contains?: InputMaybe<Scalars['String']>;
  extraMinterDetails_contains_nocase?: InputMaybe<Scalars['String']>;
  extraMinterDetails_not_contains?: InputMaybe<Scalars['String']>;
  extraMinterDetails_not_contains_nocase?: InputMaybe<Scalars['String']>;
  extraMinterDetails_starts_with?: InputMaybe<Scalars['String']>;
  extraMinterDetails_starts_with_nocase?: InputMaybe<Scalars['String']>;
  extraMinterDetails_not_starts_with?: InputMaybe<Scalars['String']>;
  extraMinterDetails_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  extraMinterDetails_ends_with?: InputMaybe<Scalars['String']>;
  extraMinterDetails_ends_with_nocase?: InputMaybe<Scalars['String']>;
  extraMinterDetails_not_ends_with?: InputMaybe<Scalars['String']>;
  extraMinterDetails_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  maxInvocations?: InputMaybe<Scalars['BigInt']>;
  maxInvocations_not?: InputMaybe<Scalars['BigInt']>;
  maxInvocations_gt?: InputMaybe<Scalars['BigInt']>;
  maxInvocations_lt?: InputMaybe<Scalars['BigInt']>;
  maxInvocations_gte?: InputMaybe<Scalars['BigInt']>;
  maxInvocations_lte?: InputMaybe<Scalars['BigInt']>;
  maxInvocations_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxInvocations_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProjectMinterConfiguration_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProjectMinterConfiguration_filter>>>;
};

export type ProjectMinterConfiguration_orderBy =
  | 'id'
  | 'project'
  | 'project__id'
  | 'project__projectId'
  | 'project__active'
  | 'project__additionalPayee'
  | 'project__additionalPayeePercentage'
  | 'project__additionalPayeeSecondarySalesAddress'
  | 'project__additionalPayeeSecondarySalesPercentage'
  | 'project__artistAddress'
  | 'project__artistName'
  | 'project__baseIpfsUri'
  | 'project__baseUri'
  | 'project__complete'
  | 'project__completedAt'
  | 'project__curationStatus'
  | 'project__currencyAddress'
  | 'project__currencySymbol'
  | 'project__description'
  | 'project__dynamic'
  | 'project__invocations'
  | 'project__ipfsHash'
  | 'project__license'
  | 'project__locked'
  | 'project__maxInvocations'
  | 'project__name'
  | 'project__paused'
  | 'project__pricePerTokenInWei'
  | 'project__royaltyPercentage'
  | 'project__script'
  | 'project__scriptCount'
  | 'project__externalAssetDependencyCount'
  | 'project__externalAssetDependenciesLocked'
  | 'project__scriptJSON'
  | 'project__scriptTypeAndVersion'
  | 'project__aspectRatio'
  | 'project__useHashString'
  | 'project__useIpfs'
  | 'project__website'
  | 'project__createdAt'
  | 'project__updatedAt'
  | 'project__activatedAt'
  | 'project__scriptUpdatedAt'
  | 'minter'
  | 'minter__id'
  | 'minter__type'
  | 'minter__minimumAuctionLengthInSeconds'
  | 'minter__minimumHalfLifeInSeconds'
  | 'minter__maximumHalfLifeInSeconds'
  | 'minter__extraMinterDetails'
  | 'minter__updatedAt'
  | 'priceIsConfigured'
  | 'currencySymbol'
  | 'currencyAddress'
  | 'purchaseToDisabled'
  | 'basePrice'
  | 'startPrice'
  | 'halfLifeSeconds'
  | 'startTime'
  | 'endTime'
  | 'extraMinterDetails'
  | 'maxInvocations';

export type ProjectScript = {
  id: Scalars['ID'];
  index: Scalars['BigInt'];
  project: Project;
  script: Scalars['String'];
};

export type ProjectScript_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  script?: InputMaybe<Scalars['String']>;
  script_not?: InputMaybe<Scalars['String']>;
  script_gt?: InputMaybe<Scalars['String']>;
  script_lt?: InputMaybe<Scalars['String']>;
  script_gte?: InputMaybe<Scalars['String']>;
  script_lte?: InputMaybe<Scalars['String']>;
  script_in?: InputMaybe<Array<Scalars['String']>>;
  script_not_in?: InputMaybe<Array<Scalars['String']>>;
  script_contains?: InputMaybe<Scalars['String']>;
  script_contains_nocase?: InputMaybe<Scalars['String']>;
  script_not_contains?: InputMaybe<Scalars['String']>;
  script_not_contains_nocase?: InputMaybe<Scalars['String']>;
  script_starts_with?: InputMaybe<Scalars['String']>;
  script_starts_with_nocase?: InputMaybe<Scalars['String']>;
  script_not_starts_with?: InputMaybe<Scalars['String']>;
  script_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  script_ends_with?: InputMaybe<Scalars['String']>;
  script_ends_with_nocase?: InputMaybe<Scalars['String']>;
  script_not_ends_with?: InputMaybe<Scalars['String']>;
  script_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProjectScript_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProjectScript_filter>>>;
};

export type ProjectScript_orderBy =
  | 'id'
  | 'index'
  | 'project'
  | 'project__id'
  | 'project__projectId'
  | 'project__active'
  | 'project__additionalPayee'
  | 'project__additionalPayeePercentage'
  | 'project__additionalPayeeSecondarySalesAddress'
  | 'project__additionalPayeeSecondarySalesPercentage'
  | 'project__artistAddress'
  | 'project__artistName'
  | 'project__baseIpfsUri'
  | 'project__baseUri'
  | 'project__complete'
  | 'project__completedAt'
  | 'project__curationStatus'
  | 'project__currencyAddress'
  | 'project__currencySymbol'
  | 'project__description'
  | 'project__dynamic'
  | 'project__invocations'
  | 'project__ipfsHash'
  | 'project__license'
  | 'project__locked'
  | 'project__maxInvocations'
  | 'project__name'
  | 'project__paused'
  | 'project__pricePerTokenInWei'
  | 'project__royaltyPercentage'
  | 'project__script'
  | 'project__scriptCount'
  | 'project__externalAssetDependencyCount'
  | 'project__externalAssetDependenciesLocked'
  | 'project__scriptJSON'
  | 'project__scriptTypeAndVersion'
  | 'project__aspectRatio'
  | 'project__useHashString'
  | 'project__useIpfs'
  | 'project__website'
  | 'project__createdAt'
  | 'project__updatedAt'
  | 'project__activatedAt'
  | 'project__scriptUpdatedAt'
  | 'script';

export type Project_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  projectId?: InputMaybe<Scalars['BigInt']>;
  projectId_not?: InputMaybe<Scalars['BigInt']>;
  projectId_gt?: InputMaybe<Scalars['BigInt']>;
  projectId_lt?: InputMaybe<Scalars['BigInt']>;
  projectId_gte?: InputMaybe<Scalars['BigInt']>;
  projectId_lte?: InputMaybe<Scalars['BigInt']>;
  projectId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  projectId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  active?: InputMaybe<Scalars['Boolean']>;
  active_not?: InputMaybe<Scalars['Boolean']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']>>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  additionalPayee?: InputMaybe<Scalars['Bytes']>;
  additionalPayee_not?: InputMaybe<Scalars['Bytes']>;
  additionalPayee_gt?: InputMaybe<Scalars['Bytes']>;
  additionalPayee_lt?: InputMaybe<Scalars['Bytes']>;
  additionalPayee_gte?: InputMaybe<Scalars['Bytes']>;
  additionalPayee_lte?: InputMaybe<Scalars['Bytes']>;
  additionalPayee_in?: InputMaybe<Array<Scalars['Bytes']>>;
  additionalPayee_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  additionalPayee_contains?: InputMaybe<Scalars['Bytes']>;
  additionalPayee_not_contains?: InputMaybe<Scalars['Bytes']>;
  additionalPayeePercentage?: InputMaybe<Scalars['BigInt']>;
  additionalPayeePercentage_not?: InputMaybe<Scalars['BigInt']>;
  additionalPayeePercentage_gt?: InputMaybe<Scalars['BigInt']>;
  additionalPayeePercentage_lt?: InputMaybe<Scalars['BigInt']>;
  additionalPayeePercentage_gte?: InputMaybe<Scalars['BigInt']>;
  additionalPayeePercentage_lte?: InputMaybe<Scalars['BigInt']>;
  additionalPayeePercentage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  additionalPayeePercentage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  additionalPayeeSecondarySalesAddress?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesAddress_not?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesAddress_gt?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesAddress_lt?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesAddress_gte?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesAddress_lte?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  additionalPayeeSecondarySalesAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  additionalPayeeSecondarySalesAddress_contains?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesPercentage?: InputMaybe<Scalars['BigInt']>;
  additionalPayeeSecondarySalesPercentage_not?: InputMaybe<Scalars['BigInt']>;
  additionalPayeeSecondarySalesPercentage_gt?: InputMaybe<Scalars['BigInt']>;
  additionalPayeeSecondarySalesPercentage_lt?: InputMaybe<Scalars['BigInt']>;
  additionalPayeeSecondarySalesPercentage_gte?: InputMaybe<Scalars['BigInt']>;
  additionalPayeeSecondarySalesPercentage_lte?: InputMaybe<Scalars['BigInt']>;
  additionalPayeeSecondarySalesPercentage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  additionalPayeeSecondarySalesPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  artist?: InputMaybe<Scalars['String']>;
  artist_not?: InputMaybe<Scalars['String']>;
  artist_gt?: InputMaybe<Scalars['String']>;
  artist_lt?: InputMaybe<Scalars['String']>;
  artist_gte?: InputMaybe<Scalars['String']>;
  artist_lte?: InputMaybe<Scalars['String']>;
  artist_in?: InputMaybe<Array<Scalars['String']>>;
  artist_not_in?: InputMaybe<Array<Scalars['String']>>;
  artist_contains?: InputMaybe<Scalars['String']>;
  artist_contains_nocase?: InputMaybe<Scalars['String']>;
  artist_not_contains?: InputMaybe<Scalars['String']>;
  artist_not_contains_nocase?: InputMaybe<Scalars['String']>;
  artist_starts_with?: InputMaybe<Scalars['String']>;
  artist_starts_with_nocase?: InputMaybe<Scalars['String']>;
  artist_not_starts_with?: InputMaybe<Scalars['String']>;
  artist_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  artist_ends_with?: InputMaybe<Scalars['String']>;
  artist_ends_with_nocase?: InputMaybe<Scalars['String']>;
  artist_not_ends_with?: InputMaybe<Scalars['String']>;
  artist_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  artist_?: InputMaybe<Account_filter>;
  artistAddress?: InputMaybe<Scalars['Bytes']>;
  artistAddress_not?: InputMaybe<Scalars['Bytes']>;
  artistAddress_gt?: InputMaybe<Scalars['Bytes']>;
  artistAddress_lt?: InputMaybe<Scalars['Bytes']>;
  artistAddress_gte?: InputMaybe<Scalars['Bytes']>;
  artistAddress_lte?: InputMaybe<Scalars['Bytes']>;
  artistAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  artistAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  artistAddress_contains?: InputMaybe<Scalars['Bytes']>;
  artistAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  artistName?: InputMaybe<Scalars['String']>;
  artistName_not?: InputMaybe<Scalars['String']>;
  artistName_gt?: InputMaybe<Scalars['String']>;
  artistName_lt?: InputMaybe<Scalars['String']>;
  artistName_gte?: InputMaybe<Scalars['String']>;
  artistName_lte?: InputMaybe<Scalars['String']>;
  artistName_in?: InputMaybe<Array<Scalars['String']>>;
  artistName_not_in?: InputMaybe<Array<Scalars['String']>>;
  artistName_contains?: InputMaybe<Scalars['String']>;
  artistName_contains_nocase?: InputMaybe<Scalars['String']>;
  artistName_not_contains?: InputMaybe<Scalars['String']>;
  artistName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  artistName_starts_with?: InputMaybe<Scalars['String']>;
  artistName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  artistName_not_starts_with?: InputMaybe<Scalars['String']>;
  artistName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  artistName_ends_with?: InputMaybe<Scalars['String']>;
  artistName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  artistName_not_ends_with?: InputMaybe<Scalars['String']>;
  artistName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  baseIpfsUri?: InputMaybe<Scalars['String']>;
  baseIpfsUri_not?: InputMaybe<Scalars['String']>;
  baseIpfsUri_gt?: InputMaybe<Scalars['String']>;
  baseIpfsUri_lt?: InputMaybe<Scalars['String']>;
  baseIpfsUri_gte?: InputMaybe<Scalars['String']>;
  baseIpfsUri_lte?: InputMaybe<Scalars['String']>;
  baseIpfsUri_in?: InputMaybe<Array<Scalars['String']>>;
  baseIpfsUri_not_in?: InputMaybe<Array<Scalars['String']>>;
  baseIpfsUri_contains?: InputMaybe<Scalars['String']>;
  baseIpfsUri_contains_nocase?: InputMaybe<Scalars['String']>;
  baseIpfsUri_not_contains?: InputMaybe<Scalars['String']>;
  baseIpfsUri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  baseIpfsUri_starts_with?: InputMaybe<Scalars['String']>;
  baseIpfsUri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  baseIpfsUri_not_starts_with?: InputMaybe<Scalars['String']>;
  baseIpfsUri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  baseIpfsUri_ends_with?: InputMaybe<Scalars['String']>;
  baseIpfsUri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  baseIpfsUri_not_ends_with?: InputMaybe<Scalars['String']>;
  baseIpfsUri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  baseUri?: InputMaybe<Scalars['String']>;
  baseUri_not?: InputMaybe<Scalars['String']>;
  baseUri_gt?: InputMaybe<Scalars['String']>;
  baseUri_lt?: InputMaybe<Scalars['String']>;
  baseUri_gte?: InputMaybe<Scalars['String']>;
  baseUri_lte?: InputMaybe<Scalars['String']>;
  baseUri_in?: InputMaybe<Array<Scalars['String']>>;
  baseUri_not_in?: InputMaybe<Array<Scalars['String']>>;
  baseUri_contains?: InputMaybe<Scalars['String']>;
  baseUri_contains_nocase?: InputMaybe<Scalars['String']>;
  baseUri_not_contains?: InputMaybe<Scalars['String']>;
  baseUri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  baseUri_starts_with?: InputMaybe<Scalars['String']>;
  baseUri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  baseUri_not_starts_with?: InputMaybe<Scalars['String']>;
  baseUri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  baseUri_ends_with?: InputMaybe<Scalars['String']>;
  baseUri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  baseUri_not_ends_with?: InputMaybe<Scalars['String']>;
  baseUri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  complete?: InputMaybe<Scalars['Boolean']>;
  complete_not?: InputMaybe<Scalars['Boolean']>;
  complete_in?: InputMaybe<Array<Scalars['Boolean']>>;
  complete_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  completedAt?: InputMaybe<Scalars['BigInt']>;
  completedAt_not?: InputMaybe<Scalars['BigInt']>;
  completedAt_gt?: InputMaybe<Scalars['BigInt']>;
  completedAt_lt?: InputMaybe<Scalars['BigInt']>;
  completedAt_gte?: InputMaybe<Scalars['BigInt']>;
  completedAt_lte?: InputMaybe<Scalars['BigInt']>;
  completedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  completedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  curationStatus?: InputMaybe<Scalars['String']>;
  curationStatus_not?: InputMaybe<Scalars['String']>;
  curationStatus_gt?: InputMaybe<Scalars['String']>;
  curationStatus_lt?: InputMaybe<Scalars['String']>;
  curationStatus_gte?: InputMaybe<Scalars['String']>;
  curationStatus_lte?: InputMaybe<Scalars['String']>;
  curationStatus_in?: InputMaybe<Array<Scalars['String']>>;
  curationStatus_not_in?: InputMaybe<Array<Scalars['String']>>;
  curationStatus_contains?: InputMaybe<Scalars['String']>;
  curationStatus_contains_nocase?: InputMaybe<Scalars['String']>;
  curationStatus_not_contains?: InputMaybe<Scalars['String']>;
  curationStatus_not_contains_nocase?: InputMaybe<Scalars['String']>;
  curationStatus_starts_with?: InputMaybe<Scalars['String']>;
  curationStatus_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curationStatus_not_starts_with?: InputMaybe<Scalars['String']>;
  curationStatus_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  curationStatus_ends_with?: InputMaybe<Scalars['String']>;
  curationStatus_ends_with_nocase?: InputMaybe<Scalars['String']>;
  curationStatus_not_ends_with?: InputMaybe<Scalars['String']>;
  curationStatus_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currencyAddress?: InputMaybe<Scalars['Bytes']>;
  currencyAddress_not?: InputMaybe<Scalars['Bytes']>;
  currencyAddress_gt?: InputMaybe<Scalars['Bytes']>;
  currencyAddress_lt?: InputMaybe<Scalars['Bytes']>;
  currencyAddress_gte?: InputMaybe<Scalars['Bytes']>;
  currencyAddress_lte?: InputMaybe<Scalars['Bytes']>;
  currencyAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  currencyAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  currencyAddress_contains?: InputMaybe<Scalars['Bytes']>;
  currencyAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  currencySymbol?: InputMaybe<Scalars['String']>;
  currencySymbol_not?: InputMaybe<Scalars['String']>;
  currencySymbol_gt?: InputMaybe<Scalars['String']>;
  currencySymbol_lt?: InputMaybe<Scalars['String']>;
  currencySymbol_gte?: InputMaybe<Scalars['String']>;
  currencySymbol_lte?: InputMaybe<Scalars['String']>;
  currencySymbol_in?: InputMaybe<Array<Scalars['String']>>;
  currencySymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  currencySymbol_contains?: InputMaybe<Scalars['String']>;
  currencySymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  currencySymbol_not_contains?: InputMaybe<Scalars['String']>;
  currencySymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  currencySymbol_starts_with?: InputMaybe<Scalars['String']>;
  currencySymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currencySymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  currencySymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  currencySymbol_ends_with?: InputMaybe<Scalars['String']>;
  currencySymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  currencySymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  currencySymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dynamic?: InputMaybe<Scalars['Boolean']>;
  dynamic_not?: InputMaybe<Scalars['Boolean']>;
  dynamic_in?: InputMaybe<Array<Scalars['Boolean']>>;
  dynamic_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  invocations?: InputMaybe<Scalars['BigInt']>;
  invocations_not?: InputMaybe<Scalars['BigInt']>;
  invocations_gt?: InputMaybe<Scalars['BigInt']>;
  invocations_lt?: InputMaybe<Scalars['BigInt']>;
  invocations_gte?: InputMaybe<Scalars['BigInt']>;
  invocations_lte?: InputMaybe<Scalars['BigInt']>;
  invocations_in?: InputMaybe<Array<Scalars['BigInt']>>;
  invocations_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ipfsHash?: InputMaybe<Scalars['String']>;
  ipfsHash_not?: InputMaybe<Scalars['String']>;
  ipfsHash_gt?: InputMaybe<Scalars['String']>;
  ipfsHash_lt?: InputMaybe<Scalars['String']>;
  ipfsHash_gte?: InputMaybe<Scalars['String']>;
  ipfsHash_lte?: InputMaybe<Scalars['String']>;
  ipfsHash_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfsHash_contains?: InputMaybe<Scalars['String']>;
  ipfsHash_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_contains?: InputMaybe<Scalars['String']>;
  ipfsHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_starts_with?: InputMaybe<Scalars['String']>;
  ipfsHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfsHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_ends_with?: InputMaybe<Scalars['String']>;
  ipfsHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfsHash_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfsHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  license?: InputMaybe<Scalars['String']>;
  license_not?: InputMaybe<Scalars['String']>;
  license_gt?: InputMaybe<Scalars['String']>;
  license_lt?: InputMaybe<Scalars['String']>;
  license_gte?: InputMaybe<Scalars['String']>;
  license_lte?: InputMaybe<Scalars['String']>;
  license_in?: InputMaybe<Array<Scalars['String']>>;
  license_not_in?: InputMaybe<Array<Scalars['String']>>;
  license_contains?: InputMaybe<Scalars['String']>;
  license_contains_nocase?: InputMaybe<Scalars['String']>;
  license_not_contains?: InputMaybe<Scalars['String']>;
  license_not_contains_nocase?: InputMaybe<Scalars['String']>;
  license_starts_with?: InputMaybe<Scalars['String']>;
  license_starts_with_nocase?: InputMaybe<Scalars['String']>;
  license_not_starts_with?: InputMaybe<Scalars['String']>;
  license_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  license_ends_with?: InputMaybe<Scalars['String']>;
  license_ends_with_nocase?: InputMaybe<Scalars['String']>;
  license_not_ends_with?: InputMaybe<Scalars['String']>;
  license_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  locked_not?: InputMaybe<Scalars['Boolean']>;
  locked_in?: InputMaybe<Array<Scalars['Boolean']>>;
  locked_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  maxInvocations?: InputMaybe<Scalars['BigInt']>;
  maxInvocations_not?: InputMaybe<Scalars['BigInt']>;
  maxInvocations_gt?: InputMaybe<Scalars['BigInt']>;
  maxInvocations_lt?: InputMaybe<Scalars['BigInt']>;
  maxInvocations_gte?: InputMaybe<Scalars['BigInt']>;
  maxInvocations_lte?: InputMaybe<Scalars['BigInt']>;
  maxInvocations_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxInvocations_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  paused?: InputMaybe<Scalars['Boolean']>;
  paused_not?: InputMaybe<Scalars['Boolean']>;
  paused_in?: InputMaybe<Array<Scalars['Boolean']>>;
  paused_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  pricePerTokenInWei?: InputMaybe<Scalars['BigInt']>;
  pricePerTokenInWei_not?: InputMaybe<Scalars['BigInt']>;
  pricePerTokenInWei_gt?: InputMaybe<Scalars['BigInt']>;
  pricePerTokenInWei_lt?: InputMaybe<Scalars['BigInt']>;
  pricePerTokenInWei_gte?: InputMaybe<Scalars['BigInt']>;
  pricePerTokenInWei_lte?: InputMaybe<Scalars['BigInt']>;
  pricePerTokenInWei_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pricePerTokenInWei_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  royaltyPercentage?: InputMaybe<Scalars['BigInt']>;
  royaltyPercentage_not?: InputMaybe<Scalars['BigInt']>;
  royaltyPercentage_gt?: InputMaybe<Scalars['BigInt']>;
  royaltyPercentage_lt?: InputMaybe<Scalars['BigInt']>;
  royaltyPercentage_gte?: InputMaybe<Scalars['BigInt']>;
  royaltyPercentage_lte?: InputMaybe<Scalars['BigInt']>;
  royaltyPercentage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  royaltyPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  script?: InputMaybe<Scalars['String']>;
  script_not?: InputMaybe<Scalars['String']>;
  script_gt?: InputMaybe<Scalars['String']>;
  script_lt?: InputMaybe<Scalars['String']>;
  script_gte?: InputMaybe<Scalars['String']>;
  script_lte?: InputMaybe<Scalars['String']>;
  script_in?: InputMaybe<Array<Scalars['String']>>;
  script_not_in?: InputMaybe<Array<Scalars['String']>>;
  script_contains?: InputMaybe<Scalars['String']>;
  script_contains_nocase?: InputMaybe<Scalars['String']>;
  script_not_contains?: InputMaybe<Scalars['String']>;
  script_not_contains_nocase?: InputMaybe<Scalars['String']>;
  script_starts_with?: InputMaybe<Scalars['String']>;
  script_starts_with_nocase?: InputMaybe<Scalars['String']>;
  script_not_starts_with?: InputMaybe<Scalars['String']>;
  script_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  script_ends_with?: InputMaybe<Scalars['String']>;
  script_ends_with_nocase?: InputMaybe<Scalars['String']>;
  script_not_ends_with?: InputMaybe<Scalars['String']>;
  script_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  scripts_?: InputMaybe<ProjectScript_filter>;
  scriptCount?: InputMaybe<Scalars['BigInt']>;
  scriptCount_not?: InputMaybe<Scalars['BigInt']>;
  scriptCount_gt?: InputMaybe<Scalars['BigInt']>;
  scriptCount_lt?: InputMaybe<Scalars['BigInt']>;
  scriptCount_gte?: InputMaybe<Scalars['BigInt']>;
  scriptCount_lte?: InputMaybe<Scalars['BigInt']>;
  scriptCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scriptCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  externalAssetDependencyCount?: InputMaybe<Scalars['BigInt']>;
  externalAssetDependencyCount_not?: InputMaybe<Scalars['BigInt']>;
  externalAssetDependencyCount_gt?: InputMaybe<Scalars['BigInt']>;
  externalAssetDependencyCount_lt?: InputMaybe<Scalars['BigInt']>;
  externalAssetDependencyCount_gte?: InputMaybe<Scalars['BigInt']>;
  externalAssetDependencyCount_lte?: InputMaybe<Scalars['BigInt']>;
  externalAssetDependencyCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  externalAssetDependencyCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  externalAssetDependenciesLocked?: InputMaybe<Scalars['Boolean']>;
  externalAssetDependenciesLocked_not?: InputMaybe<Scalars['Boolean']>;
  externalAssetDependenciesLocked_in?: InputMaybe<Array<Scalars['Boolean']>>;
  externalAssetDependenciesLocked_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  scriptJSON?: InputMaybe<Scalars['String']>;
  scriptJSON_not?: InputMaybe<Scalars['String']>;
  scriptJSON_gt?: InputMaybe<Scalars['String']>;
  scriptJSON_lt?: InputMaybe<Scalars['String']>;
  scriptJSON_gte?: InputMaybe<Scalars['String']>;
  scriptJSON_lte?: InputMaybe<Scalars['String']>;
  scriptJSON_in?: InputMaybe<Array<Scalars['String']>>;
  scriptJSON_not_in?: InputMaybe<Array<Scalars['String']>>;
  scriptJSON_contains?: InputMaybe<Scalars['String']>;
  scriptJSON_contains_nocase?: InputMaybe<Scalars['String']>;
  scriptJSON_not_contains?: InputMaybe<Scalars['String']>;
  scriptJSON_not_contains_nocase?: InputMaybe<Scalars['String']>;
  scriptJSON_starts_with?: InputMaybe<Scalars['String']>;
  scriptJSON_starts_with_nocase?: InputMaybe<Scalars['String']>;
  scriptJSON_not_starts_with?: InputMaybe<Scalars['String']>;
  scriptJSON_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  scriptJSON_ends_with?: InputMaybe<Scalars['String']>;
  scriptJSON_ends_with_nocase?: InputMaybe<Scalars['String']>;
  scriptJSON_not_ends_with?: InputMaybe<Scalars['String']>;
  scriptJSON_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_not?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_gt?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_lt?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_gte?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_lte?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_in?: InputMaybe<Array<Scalars['String']>>;
  scriptTypeAndVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  scriptTypeAndVersion_contains?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_not_contains?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_starts_with?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_ends_with?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  scriptTypeAndVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  aspectRatio?: InputMaybe<Scalars['String']>;
  aspectRatio_not?: InputMaybe<Scalars['String']>;
  aspectRatio_gt?: InputMaybe<Scalars['String']>;
  aspectRatio_lt?: InputMaybe<Scalars['String']>;
  aspectRatio_gte?: InputMaybe<Scalars['String']>;
  aspectRatio_lte?: InputMaybe<Scalars['String']>;
  aspectRatio_in?: InputMaybe<Array<Scalars['String']>>;
  aspectRatio_not_in?: InputMaybe<Array<Scalars['String']>>;
  aspectRatio_contains?: InputMaybe<Scalars['String']>;
  aspectRatio_contains_nocase?: InputMaybe<Scalars['String']>;
  aspectRatio_not_contains?: InputMaybe<Scalars['String']>;
  aspectRatio_not_contains_nocase?: InputMaybe<Scalars['String']>;
  aspectRatio_starts_with?: InputMaybe<Scalars['String']>;
  aspectRatio_starts_with_nocase?: InputMaybe<Scalars['String']>;
  aspectRatio_not_starts_with?: InputMaybe<Scalars['String']>;
  aspectRatio_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  aspectRatio_ends_with?: InputMaybe<Scalars['String']>;
  aspectRatio_ends_with_nocase?: InputMaybe<Scalars['String']>;
  aspectRatio_not_ends_with?: InputMaybe<Scalars['String']>;
  aspectRatio_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokens_?: InputMaybe<Token_filter>;
  useHashString?: InputMaybe<Scalars['Boolean']>;
  useHashString_not?: InputMaybe<Scalars['Boolean']>;
  useHashString_in?: InputMaybe<Array<Scalars['Boolean']>>;
  useHashString_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  useIpfs?: InputMaybe<Scalars['Boolean']>;
  useIpfs_not?: InputMaybe<Scalars['Boolean']>;
  useIpfs_in?: InputMaybe<Array<Scalars['Boolean']>>;
  useIpfs_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  website?: InputMaybe<Scalars['String']>;
  website_not?: InputMaybe<Scalars['String']>;
  website_gt?: InputMaybe<Scalars['String']>;
  website_lt?: InputMaybe<Scalars['String']>;
  website_gte?: InputMaybe<Scalars['String']>;
  website_lte?: InputMaybe<Scalars['String']>;
  website_in?: InputMaybe<Array<Scalars['String']>>;
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_contains_nocase?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_contains_nocase?: InputMaybe<Scalars['String']>;
  website_starts_with?: InputMaybe<Scalars['String']>;
  website_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  website_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  website_ends_with?: InputMaybe<Scalars['String']>;
  website_ends_with_nocase?: InputMaybe<Scalars['String']>;
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  website_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_not?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_gt?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_lt?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_gte?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_lte?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_in?: InputMaybe<Array<Scalars['String']>>;
  proposedArtistAddressesAndSplits_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposedArtistAddressesAndSplits_contains?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_contains_nocase?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_not_contains?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_starts_with?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_not_starts_with?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_ends_with?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_not_ends_with?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposedArtistAddressesAndSplits_?: InputMaybe<ProposedArtistAddressesAndSplit_filter>;
  owners_?: InputMaybe<AccountProject_filter>;
  receipts_?: InputMaybe<Receipt_filter>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activatedAt?: InputMaybe<Scalars['BigInt']>;
  activatedAt_not?: InputMaybe<Scalars['BigInt']>;
  activatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  activatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  activatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  activatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  activatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scriptUpdatedAt?: InputMaybe<Scalars['BigInt']>;
  scriptUpdatedAt_not?: InputMaybe<Scalars['BigInt']>;
  scriptUpdatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  scriptUpdatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  scriptUpdatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  scriptUpdatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  scriptUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  scriptUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_filter>;
  minterConfiguration?: InputMaybe<Scalars['String']>;
  minterConfiguration_not?: InputMaybe<Scalars['String']>;
  minterConfiguration_gt?: InputMaybe<Scalars['String']>;
  minterConfiguration_lt?: InputMaybe<Scalars['String']>;
  minterConfiguration_gte?: InputMaybe<Scalars['String']>;
  minterConfiguration_lte?: InputMaybe<Scalars['String']>;
  minterConfiguration_in?: InputMaybe<Array<Scalars['String']>>;
  minterConfiguration_not_in?: InputMaybe<Array<Scalars['String']>>;
  minterConfiguration_contains?: InputMaybe<Scalars['String']>;
  minterConfiguration_contains_nocase?: InputMaybe<Scalars['String']>;
  minterConfiguration_not_contains?: InputMaybe<Scalars['String']>;
  minterConfiguration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  minterConfiguration_starts_with?: InputMaybe<Scalars['String']>;
  minterConfiguration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  minterConfiguration_not_starts_with?: InputMaybe<Scalars['String']>;
  minterConfiguration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  minterConfiguration_ends_with?: InputMaybe<Scalars['String']>;
  minterConfiguration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  minterConfiguration_not_ends_with?: InputMaybe<Scalars['String']>;
  minterConfiguration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  minterConfiguration_?: InputMaybe<ProjectMinterConfiguration_filter>;
  saleLookupTables_?: InputMaybe<SaleLookupTable_filter>;
  externalAssetDependencies_?: InputMaybe<ProjectExternalAssetDependency_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Project_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Project_filter>>>;
};

export type Project_orderBy =
  | 'id'
  | 'projectId'
  | 'active'
  | 'additionalPayee'
  | 'additionalPayeePercentage'
  | 'additionalPayeeSecondarySalesAddress'
  | 'additionalPayeeSecondarySalesPercentage'
  | 'artist'
  | 'artist__id'
  | 'artistAddress'
  | 'artistName'
  | 'baseIpfsUri'
  | 'baseUri'
  | 'complete'
  | 'completedAt'
  | 'curationStatus'
  | 'currencyAddress'
  | 'currencySymbol'
  | 'description'
  | 'dynamic'
  | 'invocations'
  | 'ipfsHash'
  | 'license'
  | 'locked'
  | 'maxInvocations'
  | 'name'
  | 'paused'
  | 'pricePerTokenInWei'
  | 'royaltyPercentage'
  | 'script'
  | 'scripts'
  | 'scriptCount'
  | 'externalAssetDependencyCount'
  | 'externalAssetDependenciesLocked'
  | 'scriptJSON'
  | 'scriptTypeAndVersion'
  | 'aspectRatio'
  | 'tokens'
  | 'useHashString'
  | 'useIpfs'
  | 'website'
  | 'proposedArtistAddressesAndSplits'
  | 'proposedArtistAddressesAndSplits__id'
  | 'proposedArtistAddressesAndSplits__artistAddress'
  | 'proposedArtistAddressesAndSplits__additionalPayeePrimarySalesAddress'
  | 'proposedArtistAddressesAndSplits__additionalPayeePrimarySalesPercentage'
  | 'proposedArtistAddressesAndSplits__additionalPayeeSecondarySalesAddress'
  | 'proposedArtistAddressesAndSplits__additionalPayeeSecondarySalesPercentage'
  | 'proposedArtistAddressesAndSplits__createdAt'
  | 'owners'
  | 'receipts'
  | 'createdAt'
  | 'updatedAt'
  | 'activatedAt'
  | 'scriptUpdatedAt'
  | 'contract'
  | 'contract__id'
  | 'contract__admin'
  | 'contract__type'
  | 'contract__renderProviderAddress'
  | 'contract__renderProviderPercentage'
  | 'contract__renderProviderSecondarySalesAddress'
  | 'contract__renderProviderSecondarySalesBPS'
  | 'contract__enginePlatformProviderAddress'
  | 'contract__enginePlatformProviderPercentage'
  | 'contract__enginePlatformProviderSecondarySalesAddress'
  | 'contract__enginePlatformProviderSecondarySalesBPS'
  | 'contract__randomizerContract'
  | 'contract__curationRegistry'
  | 'contract__nextProjectId'
  | 'contract__createdAt'
  | 'contract__updatedAt'
  | 'contract__preferredIPFSGateway'
  | 'contract__preferredArweaveGateway'
  | 'contract__newProjectsForbidden'
  | 'contract__autoApproveArtistSplitProposals'
  | 'minterConfiguration'
  | 'minterConfiguration__id'
  | 'minterConfiguration__priceIsConfigured'
  | 'minterConfiguration__currencySymbol'
  | 'minterConfiguration__currencyAddress'
  | 'minterConfiguration__purchaseToDisabled'
  | 'minterConfiguration__basePrice'
  | 'minterConfiguration__startPrice'
  | 'minterConfiguration__halfLifeSeconds'
  | 'minterConfiguration__startTime'
  | 'minterConfiguration__endTime'
  | 'minterConfiguration__extraMinterDetails'
  | 'minterConfiguration__maxInvocations'
  | 'saleLookupTables'
  | 'externalAssetDependencies';

export type ProposedArtistAddressesAndSplit = {
  /** Unique identifier made up of contract address and project id */
  id: Scalars['ID'];
  /** Proposed artist address */
  artistAddress: Scalars['Bytes'];
  /** Proposed artist additional payee address for primary sales */
  additionalPayeePrimarySalesAddress: Scalars['Bytes'];
  /** Proposed artist additional payee percentage for primary sales */
  additionalPayeePrimarySalesPercentage: Scalars['BigInt'];
  /** Proposed artist additional payee address for secondary sales */
  additionalPayeeSecondarySalesAddress: Scalars['Bytes'];
  /** Proposed artist additional payee percentage for secondary sales */
  additionalPayeeSecondarySalesPercentage: Scalars['BigInt'];
  /** Project associated with this proposed artist addresses and splits */
  project: Project;
  createdAt: Scalars['BigInt'];
};

export type ProposedArtistAddressesAndSplit_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  artistAddress?: InputMaybe<Scalars['Bytes']>;
  artistAddress_not?: InputMaybe<Scalars['Bytes']>;
  artistAddress_gt?: InputMaybe<Scalars['Bytes']>;
  artistAddress_lt?: InputMaybe<Scalars['Bytes']>;
  artistAddress_gte?: InputMaybe<Scalars['Bytes']>;
  artistAddress_lte?: InputMaybe<Scalars['Bytes']>;
  artistAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  artistAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  artistAddress_contains?: InputMaybe<Scalars['Bytes']>;
  artistAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  additionalPayeePrimarySalesAddress?: InputMaybe<Scalars['Bytes']>;
  additionalPayeePrimarySalesAddress_not?: InputMaybe<Scalars['Bytes']>;
  additionalPayeePrimarySalesAddress_gt?: InputMaybe<Scalars['Bytes']>;
  additionalPayeePrimarySalesAddress_lt?: InputMaybe<Scalars['Bytes']>;
  additionalPayeePrimarySalesAddress_gte?: InputMaybe<Scalars['Bytes']>;
  additionalPayeePrimarySalesAddress_lte?: InputMaybe<Scalars['Bytes']>;
  additionalPayeePrimarySalesAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  additionalPayeePrimarySalesAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  additionalPayeePrimarySalesAddress_contains?: InputMaybe<Scalars['Bytes']>;
  additionalPayeePrimarySalesAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  additionalPayeePrimarySalesPercentage?: InputMaybe<Scalars['BigInt']>;
  additionalPayeePrimarySalesPercentage_not?: InputMaybe<Scalars['BigInt']>;
  additionalPayeePrimarySalesPercentage_gt?: InputMaybe<Scalars['BigInt']>;
  additionalPayeePrimarySalesPercentage_lt?: InputMaybe<Scalars['BigInt']>;
  additionalPayeePrimarySalesPercentage_gte?: InputMaybe<Scalars['BigInt']>;
  additionalPayeePrimarySalesPercentage_lte?: InputMaybe<Scalars['BigInt']>;
  additionalPayeePrimarySalesPercentage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  additionalPayeePrimarySalesPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  additionalPayeeSecondarySalesAddress?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesAddress_not?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesAddress_gt?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesAddress_lt?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesAddress_gte?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesAddress_lte?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  additionalPayeeSecondarySalesAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  additionalPayeeSecondarySalesAddress_contains?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  additionalPayeeSecondarySalesPercentage?: InputMaybe<Scalars['BigInt']>;
  additionalPayeeSecondarySalesPercentage_not?: InputMaybe<Scalars['BigInt']>;
  additionalPayeeSecondarySalesPercentage_gt?: InputMaybe<Scalars['BigInt']>;
  additionalPayeeSecondarySalesPercentage_lt?: InputMaybe<Scalars['BigInt']>;
  additionalPayeeSecondarySalesPercentage_gte?: InputMaybe<Scalars['BigInt']>;
  additionalPayeeSecondarySalesPercentage_lte?: InputMaybe<Scalars['BigInt']>;
  additionalPayeeSecondarySalesPercentage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  additionalPayeeSecondarySalesPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposedArtistAddressesAndSplit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProposedArtistAddressesAndSplit_filter>>>;
};

export type ProposedArtistAddressesAndSplit_orderBy =
  | 'id'
  | 'artistAddress'
  | 'additionalPayeePrimarySalesAddress'
  | 'additionalPayeePrimarySalesPercentage'
  | 'additionalPayeeSecondarySalesAddress'
  | 'additionalPayeeSecondarySalesPercentage'
  | 'project'
  | 'project__id'
  | 'project__projectId'
  | 'project__active'
  | 'project__additionalPayee'
  | 'project__additionalPayeePercentage'
  | 'project__additionalPayeeSecondarySalesAddress'
  | 'project__additionalPayeeSecondarySalesPercentage'
  | 'project__artistAddress'
  | 'project__artistName'
  | 'project__baseIpfsUri'
  | 'project__baseUri'
  | 'project__complete'
  | 'project__completedAt'
  | 'project__curationStatus'
  | 'project__currencyAddress'
  | 'project__currencySymbol'
  | 'project__description'
  | 'project__dynamic'
  | 'project__invocations'
  | 'project__ipfsHash'
  | 'project__license'
  | 'project__locked'
  | 'project__maxInvocations'
  | 'project__name'
  | 'project__paused'
  | 'project__pricePerTokenInWei'
  | 'project__royaltyPercentage'
  | 'project__script'
  | 'project__scriptCount'
  | 'project__externalAssetDependencyCount'
  | 'project__externalAssetDependenciesLocked'
  | 'project__scriptJSON'
  | 'project__scriptTypeAndVersion'
  | 'project__aspectRatio'
  | 'project__useHashString'
  | 'project__useIpfs'
  | 'project__website'
  | 'project__createdAt'
  | 'project__updatedAt'
  | 'project__activatedAt'
  | 'project__scriptUpdatedAt'
  | 'createdAt';

export type Query = {
  project?: Maybe<Project>;
  projects: Array<Project>;
  projectScript?: Maybe<ProjectScript>;
  projectScripts: Array<ProjectScript>;
  proposedArtistAddressesAndSplit?: Maybe<ProposedArtistAddressesAndSplit>;
  proposedArtistAddressesAndSplits: Array<ProposedArtistAddressesAndSplit>;
  engineRegistry?: Maybe<EngineRegistry>;
  engineRegistries: Array<EngineRegistry>;
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  whitelisting?: Maybe<Whitelisting>;
  whitelistings: Array<Whitelisting>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  accountProject?: Maybe<AccountProject>;
  accountProjects: Array<AccountProject>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  minterFilter?: Maybe<MinterFilter>;
  minterFilters: Array<MinterFilter>;
  minter?: Maybe<Minter>;
  minters: Array<Minter>;
  projectMinterConfiguration?: Maybe<ProjectMinterConfiguration>;
  projectMinterConfigurations: Array<ProjectMinterConfiguration>;
  receipt?: Maybe<Receipt>;
  receipts: Array<Receipt>;
  payment?: Maybe<Payment>;
  payments: Array<Payment>;
  sale?: Maybe<Sale>;
  sales: Array<Sale>;
  saleLookupTable?: Maybe<SaleLookupTable>;
  saleLookupTables: Array<SaleLookupTable>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  dependency?: Maybe<Dependency>;
  dependencies: Array<Dependency>;
  dependencyRegistry?: Maybe<DependencyRegistry>;
  dependencyRegistries: Array<DependencyRegistry>;
  dependencyAdditionalCDN?: Maybe<DependencyAdditionalCDN>;
  dependencyAdditionalCDNs: Array<DependencyAdditionalCDN>;
  dependencyAdditionalRepository?: Maybe<DependencyAdditionalRepository>;
  dependencyAdditionalRepositories: Array<DependencyAdditionalRepository>;
  dependencyScript?: Maybe<DependencyScript>;
  dependencyScripts: Array<DependencyScript>;
  projectExternalAssetDependency?: Maybe<ProjectExternalAssetDependency>;
  projectExternalAssetDependencies: Array<ProjectExternalAssetDependency>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryprojectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Project_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Project_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectScriptArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectScriptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectScript_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectScript_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposedArtistAddressesAndSplitArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposedArtistAddressesAndSplitsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposedArtistAddressesAndSplit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposedArtistAddressesAndSplit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryengineRegistryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryengineRegistriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EngineRegistry_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EngineRegistry_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Contract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Contract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywhitelistingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywhitelistingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Whitelisting_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Whitelisting_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountProjectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountProjectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountProject_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountProject_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryminterFilterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryminterFiltersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MinterFilter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MinterFilter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryminterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Minter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Minter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectMinterConfigurationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectMinterConfigurationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectMinterConfiguration_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectMinterConfiguration_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreceiptArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Receipt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Receipt_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypaymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Payment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Payment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysaleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysalesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sale_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Sale_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysaleLookupTableArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysaleLookupTablesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SaleLookupTable_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SaleLookupTable_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydependencyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydependenciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Dependency_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Dependency_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydependencyRegistryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydependencyRegistriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DependencyRegistry_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DependencyRegistry_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydependencyAdditionalCDNArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydependencyAdditionalCDNsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DependencyAdditionalCDN_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DependencyAdditionalCDN_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydependencyAdditionalRepositoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydependencyAdditionalRepositoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DependencyAdditionalRepository_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DependencyAdditionalRepository_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydependencyScriptArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydependencyScriptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DependencyScript_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DependencyScript_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectExternalAssetDependencyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprojectExternalAssetDependenciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectExternalAssetDependency_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectExternalAssetDependency_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Receipt = {
  /** Unique identifier made up of minter contract address-projectId-accountAddress */
  id: Scalars['ID'];
  /** The associated project */
  project: Project;
  /** The associated minter */
  minter: Minter;
  /** The associated account */
  account: Account;
  /** The total net amount posted (sent to settlement contract) for tokens */
  netPosted: Scalars['BigInt'];
  /** The total quantity of tokens purchased on the project */
  numPurchased: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
};

export type Receipt_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  minter?: InputMaybe<Scalars['String']>;
  minter_not?: InputMaybe<Scalars['String']>;
  minter_gt?: InputMaybe<Scalars['String']>;
  minter_lt?: InputMaybe<Scalars['String']>;
  minter_gte?: InputMaybe<Scalars['String']>;
  minter_lte?: InputMaybe<Scalars['String']>;
  minter_in?: InputMaybe<Array<Scalars['String']>>;
  minter_not_in?: InputMaybe<Array<Scalars['String']>>;
  minter_contains?: InputMaybe<Scalars['String']>;
  minter_contains_nocase?: InputMaybe<Scalars['String']>;
  minter_not_contains?: InputMaybe<Scalars['String']>;
  minter_not_contains_nocase?: InputMaybe<Scalars['String']>;
  minter_starts_with?: InputMaybe<Scalars['String']>;
  minter_starts_with_nocase?: InputMaybe<Scalars['String']>;
  minter_not_starts_with?: InputMaybe<Scalars['String']>;
  minter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  minter_ends_with?: InputMaybe<Scalars['String']>;
  minter_ends_with_nocase?: InputMaybe<Scalars['String']>;
  minter_not_ends_with?: InputMaybe<Scalars['String']>;
  minter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  minter_?: InputMaybe<Minter_filter>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_filter>;
  netPosted?: InputMaybe<Scalars['BigInt']>;
  netPosted_not?: InputMaybe<Scalars['BigInt']>;
  netPosted_gt?: InputMaybe<Scalars['BigInt']>;
  netPosted_lt?: InputMaybe<Scalars['BigInt']>;
  netPosted_gte?: InputMaybe<Scalars['BigInt']>;
  netPosted_lte?: InputMaybe<Scalars['BigInt']>;
  netPosted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netPosted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numPurchased?: InputMaybe<Scalars['BigInt']>;
  numPurchased_not?: InputMaybe<Scalars['BigInt']>;
  numPurchased_gt?: InputMaybe<Scalars['BigInt']>;
  numPurchased_lt?: InputMaybe<Scalars['BigInt']>;
  numPurchased_gte?: InputMaybe<Scalars['BigInt']>;
  numPurchased_lte?: InputMaybe<Scalars['BigInt']>;
  numPurchased_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numPurchased_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Receipt_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Receipt_filter>>>;
};

export type Receipt_orderBy =
  | 'id'
  | 'project'
  | 'project__id'
  | 'project__projectId'
  | 'project__active'
  | 'project__additionalPayee'
  | 'project__additionalPayeePercentage'
  | 'project__additionalPayeeSecondarySalesAddress'
  | 'project__additionalPayeeSecondarySalesPercentage'
  | 'project__artistAddress'
  | 'project__artistName'
  | 'project__baseIpfsUri'
  | 'project__baseUri'
  | 'project__complete'
  | 'project__completedAt'
  | 'project__curationStatus'
  | 'project__currencyAddress'
  | 'project__currencySymbol'
  | 'project__description'
  | 'project__dynamic'
  | 'project__invocations'
  | 'project__ipfsHash'
  | 'project__license'
  | 'project__locked'
  | 'project__maxInvocations'
  | 'project__name'
  | 'project__paused'
  | 'project__pricePerTokenInWei'
  | 'project__royaltyPercentage'
  | 'project__script'
  | 'project__scriptCount'
  | 'project__externalAssetDependencyCount'
  | 'project__externalAssetDependenciesLocked'
  | 'project__scriptJSON'
  | 'project__scriptTypeAndVersion'
  | 'project__aspectRatio'
  | 'project__useHashString'
  | 'project__useIpfs'
  | 'project__website'
  | 'project__createdAt'
  | 'project__updatedAt'
  | 'project__activatedAt'
  | 'project__scriptUpdatedAt'
  | 'minter'
  | 'minter__id'
  | 'minter__type'
  | 'minter__minimumAuctionLengthInSeconds'
  | 'minter__minimumHalfLifeInSeconds'
  | 'minter__maximumHalfLifeInSeconds'
  | 'minter__extraMinterDetails'
  | 'minter__updatedAt'
  | 'account'
  | 'account__id'
  | 'netPosted'
  | 'numPurchased'
  | 'updatedAt';

export type Sale = {
  /** The sale id formated: tokenId - token.nextSaleId (using first token sold for bundles) for Opensea V1/V2, orderHash from sale event for Looksrare and Seaport */
  id: Scalars['ID'];
  /** The hash of the transaction */
  txHash: Scalars['Bytes'];
  /** The exchange used for this sale */
  exchange: Exchange;
  /** The sale type (Single | Bundle) */
  saleType: SaleType;
  /** The block number of the sale */
  blockNumber: Scalars['BigInt'];
  /** The timestamp of the sale */
  blockTimestamp: Scalars['BigInt'];
  /** A raw formated string of the token(s) sold (i.e TokenID1::TokenID2::TokenID3) */
  summaryTokensSold: Scalars['String'];
  /** Lookup table to get the list of Tokens sold in this sale */
  saleLookupTables: Array<SaleLookupTable>;
  /** The seller address */
  seller: Scalars['Bytes'];
  /** The buyer address */
  buyer: Scalars['Bytes'];
  /** List of Payment tokens involved in this sale */
  payments: Array<Payment>;
  /** Private sales are flagged by this boolean */
  isPrivate: Scalars['Boolean'];
};


export type SalesaleLookupTablesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SaleLookupTable_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SaleLookupTable_filter>;
};


export type SalepaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Payment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Payment_filter>;
};

export type SaleLookupTable = {
  /** Set to `Project Id::Token Id::Sale Id */
  id: Scalars['ID'];
  /** The block number of the sale */
  blockNumber: Scalars['BigInt'];
  /** Timestamp of the sale */
  timestamp: Scalars['BigInt'];
  /** The associated project */
  project: Project;
  /** The token sold */
  token: Token;
  /** The associated sale */
  sale: Sale;
};

export type SaleLookupTable_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  sale?: InputMaybe<Scalars['String']>;
  sale_not?: InputMaybe<Scalars['String']>;
  sale_gt?: InputMaybe<Scalars['String']>;
  sale_lt?: InputMaybe<Scalars['String']>;
  sale_gte?: InputMaybe<Scalars['String']>;
  sale_lte?: InputMaybe<Scalars['String']>;
  sale_in?: InputMaybe<Array<Scalars['String']>>;
  sale_not_in?: InputMaybe<Array<Scalars['String']>>;
  sale_contains?: InputMaybe<Scalars['String']>;
  sale_contains_nocase?: InputMaybe<Scalars['String']>;
  sale_not_contains?: InputMaybe<Scalars['String']>;
  sale_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sale_starts_with?: InputMaybe<Scalars['String']>;
  sale_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sale_not_starts_with?: InputMaybe<Scalars['String']>;
  sale_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sale_ends_with?: InputMaybe<Scalars['String']>;
  sale_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sale_not_ends_with?: InputMaybe<Scalars['String']>;
  sale_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sale_?: InputMaybe<Sale_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SaleLookupTable_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SaleLookupTable_filter>>>;
};

export type SaleLookupTable_orderBy =
  | 'id'
  | 'blockNumber'
  | 'timestamp'
  | 'project'
  | 'project__id'
  | 'project__projectId'
  | 'project__active'
  | 'project__additionalPayee'
  | 'project__additionalPayeePercentage'
  | 'project__additionalPayeeSecondarySalesAddress'
  | 'project__additionalPayeeSecondarySalesPercentage'
  | 'project__artistAddress'
  | 'project__artistName'
  | 'project__baseIpfsUri'
  | 'project__baseUri'
  | 'project__complete'
  | 'project__completedAt'
  | 'project__curationStatus'
  | 'project__currencyAddress'
  | 'project__currencySymbol'
  | 'project__description'
  | 'project__dynamic'
  | 'project__invocations'
  | 'project__ipfsHash'
  | 'project__license'
  | 'project__locked'
  | 'project__maxInvocations'
  | 'project__name'
  | 'project__paused'
  | 'project__pricePerTokenInWei'
  | 'project__royaltyPercentage'
  | 'project__script'
  | 'project__scriptCount'
  | 'project__externalAssetDependencyCount'
  | 'project__externalAssetDependenciesLocked'
  | 'project__scriptJSON'
  | 'project__scriptTypeAndVersion'
  | 'project__aspectRatio'
  | 'project__useHashString'
  | 'project__useIpfs'
  | 'project__website'
  | 'project__createdAt'
  | 'project__updatedAt'
  | 'project__activatedAt'
  | 'project__scriptUpdatedAt'
  | 'token'
  | 'token__id'
  | 'token__tokenId'
  | 'token__invocation'
  | 'token__hash'
  | 'token__uri'
  | 'token__createdAt'
  | 'token__updatedAt'
  | 'token__transactionHash'
  | 'token__nextSaleId'
  | 'sale'
  | 'sale__id'
  | 'sale__txHash'
  | 'sale__exchange'
  | 'sale__saleType'
  | 'sale__blockNumber'
  | 'sale__blockTimestamp'
  | 'sale__summaryTokensSold'
  | 'sale__seller'
  | 'sale__buyer'
  | 'sale__isPrivate';

export type SaleType =
  | 'Single'
  | 'Bundle';

export type Sale_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']>;
  txHash_lt?: InputMaybe<Scalars['Bytes']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  exchange?: InputMaybe<Exchange>;
  exchange_not?: InputMaybe<Exchange>;
  exchange_in?: InputMaybe<Array<Exchange>>;
  exchange_not_in?: InputMaybe<Array<Exchange>>;
  saleType?: InputMaybe<SaleType>;
  saleType_not?: InputMaybe<SaleType>;
  saleType_in?: InputMaybe<Array<SaleType>>;
  saleType_not_in?: InputMaybe<Array<SaleType>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  summaryTokensSold?: InputMaybe<Scalars['String']>;
  summaryTokensSold_not?: InputMaybe<Scalars['String']>;
  summaryTokensSold_gt?: InputMaybe<Scalars['String']>;
  summaryTokensSold_lt?: InputMaybe<Scalars['String']>;
  summaryTokensSold_gte?: InputMaybe<Scalars['String']>;
  summaryTokensSold_lte?: InputMaybe<Scalars['String']>;
  summaryTokensSold_in?: InputMaybe<Array<Scalars['String']>>;
  summaryTokensSold_not_in?: InputMaybe<Array<Scalars['String']>>;
  summaryTokensSold_contains?: InputMaybe<Scalars['String']>;
  summaryTokensSold_contains_nocase?: InputMaybe<Scalars['String']>;
  summaryTokensSold_not_contains?: InputMaybe<Scalars['String']>;
  summaryTokensSold_not_contains_nocase?: InputMaybe<Scalars['String']>;
  summaryTokensSold_starts_with?: InputMaybe<Scalars['String']>;
  summaryTokensSold_starts_with_nocase?: InputMaybe<Scalars['String']>;
  summaryTokensSold_not_starts_with?: InputMaybe<Scalars['String']>;
  summaryTokensSold_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  summaryTokensSold_ends_with?: InputMaybe<Scalars['String']>;
  summaryTokensSold_ends_with_nocase?: InputMaybe<Scalars['String']>;
  summaryTokensSold_not_ends_with?: InputMaybe<Scalars['String']>;
  summaryTokensSold_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  saleLookupTables_?: InputMaybe<SaleLookupTable_filter>;
  seller?: InputMaybe<Scalars['Bytes']>;
  seller_not?: InputMaybe<Scalars['Bytes']>;
  seller_gt?: InputMaybe<Scalars['Bytes']>;
  seller_lt?: InputMaybe<Scalars['Bytes']>;
  seller_gte?: InputMaybe<Scalars['Bytes']>;
  seller_lte?: InputMaybe<Scalars['Bytes']>;
  seller_in?: InputMaybe<Array<Scalars['Bytes']>>;
  seller_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  seller_contains?: InputMaybe<Scalars['Bytes']>;
  seller_not_contains?: InputMaybe<Scalars['Bytes']>;
  buyer?: InputMaybe<Scalars['Bytes']>;
  buyer_not?: InputMaybe<Scalars['Bytes']>;
  buyer_gt?: InputMaybe<Scalars['Bytes']>;
  buyer_lt?: InputMaybe<Scalars['Bytes']>;
  buyer_gte?: InputMaybe<Scalars['Bytes']>;
  buyer_lte?: InputMaybe<Scalars['Bytes']>;
  buyer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  buyer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  buyer_contains?: InputMaybe<Scalars['Bytes']>;
  buyer_not_contains?: InputMaybe<Scalars['Bytes']>;
  payments_?: InputMaybe<Payment_filter>;
  isPrivate?: InputMaybe<Scalars['Boolean']>;
  isPrivate_not?: InputMaybe<Scalars['Boolean']>;
  isPrivate_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isPrivate_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Sale_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Sale_filter>>>;
};

export type Sale_orderBy =
  | 'id'
  | 'txHash'
  | 'exchange'
  | 'saleType'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'summaryTokensSold'
  | 'saleLookupTables'
  | 'seller'
  | 'buyer'
  | 'payments'
  | 'isPrivate';

export type Subscription = {
  project?: Maybe<Project>;
  projects: Array<Project>;
  projectScript?: Maybe<ProjectScript>;
  projectScripts: Array<ProjectScript>;
  proposedArtistAddressesAndSplit?: Maybe<ProposedArtistAddressesAndSplit>;
  proposedArtistAddressesAndSplits: Array<ProposedArtistAddressesAndSplit>;
  engineRegistry?: Maybe<EngineRegistry>;
  engineRegistries: Array<EngineRegistry>;
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  whitelisting?: Maybe<Whitelisting>;
  whitelistings: Array<Whitelisting>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  accountProject?: Maybe<AccountProject>;
  accountProjects: Array<AccountProject>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  minterFilter?: Maybe<MinterFilter>;
  minterFilters: Array<MinterFilter>;
  minter?: Maybe<Minter>;
  minters: Array<Minter>;
  projectMinterConfiguration?: Maybe<ProjectMinterConfiguration>;
  projectMinterConfigurations: Array<ProjectMinterConfiguration>;
  receipt?: Maybe<Receipt>;
  receipts: Array<Receipt>;
  payment?: Maybe<Payment>;
  payments: Array<Payment>;
  sale?: Maybe<Sale>;
  sales: Array<Sale>;
  saleLookupTable?: Maybe<SaleLookupTable>;
  saleLookupTables: Array<SaleLookupTable>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  dependency?: Maybe<Dependency>;
  dependencies: Array<Dependency>;
  dependencyRegistry?: Maybe<DependencyRegistry>;
  dependencyRegistries: Array<DependencyRegistry>;
  dependencyAdditionalCDN?: Maybe<DependencyAdditionalCDN>;
  dependencyAdditionalCDNs: Array<DependencyAdditionalCDN>;
  dependencyAdditionalRepository?: Maybe<DependencyAdditionalRepository>;
  dependencyAdditionalRepositories: Array<DependencyAdditionalRepository>;
  dependencyScript?: Maybe<DependencyScript>;
  dependencyScripts: Array<DependencyScript>;
  projectExternalAssetDependency?: Maybe<ProjectExternalAssetDependency>;
  projectExternalAssetDependencies: Array<ProjectExternalAssetDependency>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionprojectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Project_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Project_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectScriptArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectScriptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectScript_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectScript_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposedArtistAddressesAndSplitArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposedArtistAddressesAndSplitsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposedArtistAddressesAndSplit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposedArtistAddressesAndSplit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionengineRegistryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionengineRegistriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<EngineRegistry_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<EngineRegistry_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontractArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontractsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Contract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Contract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwhitelistingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwhitelistingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Whitelisting_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Whitelisting_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountProjectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountProjectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AccountProject_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AccountProject_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionminterFilterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionminterFiltersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MinterFilter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MinterFilter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionminterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Minter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Minter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectMinterConfigurationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectMinterConfigurationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectMinterConfiguration_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectMinterConfiguration_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreceiptArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Receipt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Receipt_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpaymentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Payment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Payment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsaleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsalesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sale_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Sale_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsaleLookupTableArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsaleLookupTablesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SaleLookupTable_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SaleLookupTable_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondependencyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondependenciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Dependency_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Dependency_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondependencyRegistryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondependencyRegistriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DependencyRegistry_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DependencyRegistry_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondependencyAdditionalCDNArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondependencyAdditionalCDNsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DependencyAdditionalCDN_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DependencyAdditionalCDN_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondependencyAdditionalRepositoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondependencyAdditionalRepositoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DependencyAdditionalRepository_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DependencyAdditionalRepository_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondependencyScriptArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondependencyScriptsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DependencyScript_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DependencyScript_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectExternalAssetDependencyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprojectExternalAssetDependenciesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProjectExternalAssetDependency_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProjectExternalAssetDependency_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Token = {
  /** Unique identifier made up of contract address and token id */
  id: Scalars['ID'];
  /** ID of the token on the contract */
  tokenId: Scalars['BigInt'];
  /** Contract the token is on */
  contract: Contract;
  /** Invocation number of the project */
  invocation: Scalars['BigInt'];
  /** Unique string used as input to the tokens project script */
  hash: Scalars['Bytes'];
  /** Current owner of the token */
  owner: Account;
  /** Project of the token */
  project: Project;
  uri?: Maybe<Scalars['String']>;
  createdAt: Scalars['BigInt'];
  updatedAt: Scalars['BigInt'];
  /** Transaction hash of token mint */
  transactionHash: Scalars['Bytes'];
  transfers?: Maybe<Array<Transfer>>;
  /** Lookup table to get the Sale history */
  saleLookupTables: Array<SaleLookupTable>;
  /** Next available sale id */
  nextSaleId: Scalars['BigInt'];
};


export type TokentransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
};


export type TokensaleLookupTablesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SaleLookupTable_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SaleLookupTable_filter>;
};

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contract?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_filter>;
  invocation?: InputMaybe<Scalars['BigInt']>;
  invocation_not?: InputMaybe<Scalars['BigInt']>;
  invocation_gt?: InputMaybe<Scalars['BigInt']>;
  invocation_lt?: InputMaybe<Scalars['BigInt']>;
  invocation_gte?: InputMaybe<Scalars['BigInt']>;
  invocation_lte?: InputMaybe<Scalars['BigInt']>;
  invocation_in?: InputMaybe<Array<Scalars['BigInt']>>;
  invocation_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hash?: InputMaybe<Scalars['Bytes']>;
  hash_not?: InputMaybe<Scalars['Bytes']>;
  hash_gt?: InputMaybe<Scalars['Bytes']>;
  hash_lt?: InputMaybe<Scalars['Bytes']>;
  hash_gte?: InputMaybe<Scalars['Bytes']>;
  hash_lte?: InputMaybe<Scalars['Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hash_contains?: InputMaybe<Scalars['Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  project?: InputMaybe<Scalars['String']>;
  project_not?: InputMaybe<Scalars['String']>;
  project_gt?: InputMaybe<Scalars['String']>;
  project_lt?: InputMaybe<Scalars['String']>;
  project_gte?: InputMaybe<Scalars['String']>;
  project_lte?: InputMaybe<Scalars['String']>;
  project_in?: InputMaybe<Array<Scalars['String']>>;
  project_not_in?: InputMaybe<Array<Scalars['String']>>;
  project_contains?: InputMaybe<Scalars['String']>;
  project_contains_nocase?: InputMaybe<Scalars['String']>;
  project_not_contains?: InputMaybe<Scalars['String']>;
  project_not_contains_nocase?: InputMaybe<Scalars['String']>;
  project_starts_with?: InputMaybe<Scalars['String']>;
  project_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_starts_with?: InputMaybe<Scalars['String']>;
  project_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  project_ends_with?: InputMaybe<Scalars['String']>;
  project_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_not_ends_with?: InputMaybe<Scalars['String']>;
  project_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  project_?: InputMaybe<Project_filter>;
  uri?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  transfers_?: InputMaybe<Transfer_filter>;
  saleLookupTables_?: InputMaybe<SaleLookupTable_filter>;
  nextSaleId?: InputMaybe<Scalars['BigInt']>;
  nextSaleId_not?: InputMaybe<Scalars['BigInt']>;
  nextSaleId_gt?: InputMaybe<Scalars['BigInt']>;
  nextSaleId_lt?: InputMaybe<Scalars['BigInt']>;
  nextSaleId_gte?: InputMaybe<Scalars['BigInt']>;
  nextSaleId_lte?: InputMaybe<Scalars['BigInt']>;
  nextSaleId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nextSaleId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'tokenId'
  | 'contract'
  | 'contract__id'
  | 'contract__admin'
  | 'contract__type'
  | 'contract__renderProviderAddress'
  | 'contract__renderProviderPercentage'
  | 'contract__renderProviderSecondarySalesAddress'
  | 'contract__renderProviderSecondarySalesBPS'
  | 'contract__enginePlatformProviderAddress'
  | 'contract__enginePlatformProviderPercentage'
  | 'contract__enginePlatformProviderSecondarySalesAddress'
  | 'contract__enginePlatformProviderSecondarySalesBPS'
  | 'contract__randomizerContract'
  | 'contract__curationRegistry'
  | 'contract__nextProjectId'
  | 'contract__createdAt'
  | 'contract__updatedAt'
  | 'contract__preferredIPFSGateway'
  | 'contract__preferredArweaveGateway'
  | 'contract__newProjectsForbidden'
  | 'contract__autoApproveArtistSplitProposals'
  | 'invocation'
  | 'hash'
  | 'owner'
  | 'owner__id'
  | 'project'
  | 'project__id'
  | 'project__projectId'
  | 'project__active'
  | 'project__additionalPayee'
  | 'project__additionalPayeePercentage'
  | 'project__additionalPayeeSecondarySalesAddress'
  | 'project__additionalPayeeSecondarySalesPercentage'
  | 'project__artistAddress'
  | 'project__artistName'
  | 'project__baseIpfsUri'
  | 'project__baseUri'
  | 'project__complete'
  | 'project__completedAt'
  | 'project__curationStatus'
  | 'project__currencyAddress'
  | 'project__currencySymbol'
  | 'project__description'
  | 'project__dynamic'
  | 'project__invocations'
  | 'project__ipfsHash'
  | 'project__license'
  | 'project__locked'
  | 'project__maxInvocations'
  | 'project__name'
  | 'project__paused'
  | 'project__pricePerTokenInWei'
  | 'project__royaltyPercentage'
  | 'project__script'
  | 'project__scriptCount'
  | 'project__externalAssetDependencyCount'
  | 'project__externalAssetDependenciesLocked'
  | 'project__scriptJSON'
  | 'project__scriptTypeAndVersion'
  | 'project__aspectRatio'
  | 'project__useHashString'
  | 'project__useIpfs'
  | 'project__website'
  | 'project__createdAt'
  | 'project__updatedAt'
  | 'project__activatedAt'
  | 'project__scriptUpdatedAt'
  | 'uri'
  | 'createdAt'
  | 'updatedAt'
  | 'transactionHash'
  | 'transfers'
  | 'saleLookupTables'
  | 'nextSaleId';

export type Transfer = {
  id: Scalars['ID'];
  token: Token;
  to: Scalars['Bytes'];
  from: Scalars['Bytes'];
  transactionHash: Scalars['Bytes'];
  blockHash: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
};

export type Transfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_gt?: InputMaybe<Scalars['Bytes']>;
  to_lt?: InputMaybe<Scalars['Bytes']>;
  to_gte?: InputMaybe<Scalars['Bytes']>;
  to_lte?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_gt?: InputMaybe<Scalars['Bytes']>;
  from_lt?: InputMaybe<Scalars['Bytes']>;
  from_gte?: InputMaybe<Scalars['Bytes']>;
  from_lte?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash?: InputMaybe<Scalars['Bytes']>;
  blockHash_not?: InputMaybe<Scalars['Bytes']>;
  blockHash_gt?: InputMaybe<Scalars['Bytes']>;
  blockHash_lt?: InputMaybe<Scalars['Bytes']>;
  blockHash_gte?: InputMaybe<Scalars['Bytes']>;
  blockHash_lte?: InputMaybe<Scalars['Bytes']>;
  blockHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockHash_contains?: InputMaybe<Scalars['Bytes']>;
  blockHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
};

export type Transfer_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__tokenId'
  | 'token__invocation'
  | 'token__hash'
  | 'token__uri'
  | 'token__createdAt'
  | 'token__updatedAt'
  | 'token__transactionHash'
  | 'token__nextSaleId'
  | 'to'
  | 'from'
  | 'transactionHash'
  | 'blockHash'
  | 'blockNumber'
  | 'blockTimestamp';

export type Whitelisting = {
  id: Scalars['ID'];
  account: Account;
  contract: Contract;
};

export type Whitelisting_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_filter>;
  contract?: InputMaybe<Scalars['String']>;
  contract_not?: InputMaybe<Scalars['String']>;
  contract_gt?: InputMaybe<Scalars['String']>;
  contract_lt?: InputMaybe<Scalars['String']>;
  contract_gte?: InputMaybe<Scalars['String']>;
  contract_lte?: InputMaybe<Scalars['String']>;
  contract_in?: InputMaybe<Array<Scalars['String']>>;
  contract_not_in?: InputMaybe<Array<Scalars['String']>>;
  contract_contains?: InputMaybe<Scalars['String']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_not_contains?: InputMaybe<Scalars['String']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contract_starts_with?: InputMaybe<Scalars['String']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_starts_with?: InputMaybe<Scalars['String']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contract_ends_with?: InputMaybe<Scalars['String']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contract_?: InputMaybe<Contract_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Whitelisting_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Whitelisting_filter>>>;
};

export type Whitelisting_orderBy =
  | 'id'
  | 'account'
  | 'account__id'
  | 'contract'
  | 'contract__id'
  | 'contract__admin'
  | 'contract__type'
  | 'contract__renderProviderAddress'
  | 'contract__renderProviderPercentage'
  | 'contract__renderProviderSecondarySalesAddress'
  | 'contract__renderProviderSecondarySalesBPS'
  | 'contract__enginePlatformProviderAddress'
  | 'contract__enginePlatformProviderPercentage'
  | 'contract__enginePlatformProviderSecondarySalesAddress'
  | 'contract__enginePlatformProviderSecondarySalesBPS'
  | 'contract__randomizerContract'
  | 'contract__curationRegistry'
  | 'contract__nextProjectId'
  | 'contract__createdAt'
  | 'contract__updatedAt'
  | 'contract__preferredIPFSGateway'
  | 'contract__preferredArweaveGateway'
  | 'contract__newProjectsForbidden'
  | 'contract__autoApproveArtistSplitProposals';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  project: InContextSdkMethod<Query['project'], QueryprojectArgs, MeshContext>,
  /** null **/
  projects: InContextSdkMethod<Query['projects'], QueryprojectsArgs, MeshContext>,
  /** null **/
  projectScript: InContextSdkMethod<Query['projectScript'], QueryprojectScriptArgs, MeshContext>,
  /** null **/
  projectScripts: InContextSdkMethod<Query['projectScripts'], QueryprojectScriptsArgs, MeshContext>,
  /** null **/
  proposedArtistAddressesAndSplit: InContextSdkMethod<Query['proposedArtistAddressesAndSplit'], QueryproposedArtistAddressesAndSplitArgs, MeshContext>,
  /** null **/
  proposedArtistAddressesAndSplits: InContextSdkMethod<Query['proposedArtistAddressesAndSplits'], QueryproposedArtistAddressesAndSplitsArgs, MeshContext>,
  /** null **/
  engineRegistry: InContextSdkMethod<Query['engineRegistry'], QueryengineRegistryArgs, MeshContext>,
  /** null **/
  engineRegistries: InContextSdkMethod<Query['engineRegistries'], QueryengineRegistriesArgs, MeshContext>,
  /** null **/
  contract: InContextSdkMethod<Query['contract'], QuerycontractArgs, MeshContext>,
  /** null **/
  contracts: InContextSdkMethod<Query['contracts'], QuerycontractsArgs, MeshContext>,
  /** null **/
  whitelisting: InContextSdkMethod<Query['whitelisting'], QuerywhitelistingArgs, MeshContext>,
  /** null **/
  whitelistings: InContextSdkMethod<Query['whitelistings'], QuerywhitelistingsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Query['account'], QueryaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Query['accounts'], QueryaccountsArgs, MeshContext>,
  /** null **/
  accountProject: InContextSdkMethod<Query['accountProject'], QueryaccountProjectArgs, MeshContext>,
  /** null **/
  accountProjects: InContextSdkMethod<Query['accountProjects'], QueryaccountProjectsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  minterFilter: InContextSdkMethod<Query['minterFilter'], QueryminterFilterArgs, MeshContext>,
  /** null **/
  minterFilters: InContextSdkMethod<Query['minterFilters'], QueryminterFiltersArgs, MeshContext>,
  /** null **/
  minter: InContextSdkMethod<Query['minter'], QueryminterArgs, MeshContext>,
  /** null **/
  minters: InContextSdkMethod<Query['minters'], QuerymintersArgs, MeshContext>,
  /** null **/
  projectMinterConfiguration: InContextSdkMethod<Query['projectMinterConfiguration'], QueryprojectMinterConfigurationArgs, MeshContext>,
  /** null **/
  projectMinterConfigurations: InContextSdkMethod<Query['projectMinterConfigurations'], QueryprojectMinterConfigurationsArgs, MeshContext>,
  /** null **/
  receipt: InContextSdkMethod<Query['receipt'], QueryreceiptArgs, MeshContext>,
  /** null **/
  receipts: InContextSdkMethod<Query['receipts'], QueryreceiptsArgs, MeshContext>,
  /** null **/
  payment: InContextSdkMethod<Query['payment'], QuerypaymentArgs, MeshContext>,
  /** null **/
  payments: InContextSdkMethod<Query['payments'], QuerypaymentsArgs, MeshContext>,
  /** null **/
  sale: InContextSdkMethod<Query['sale'], QuerysaleArgs, MeshContext>,
  /** null **/
  sales: InContextSdkMethod<Query['sales'], QuerysalesArgs, MeshContext>,
  /** null **/
  saleLookupTable: InContextSdkMethod<Query['saleLookupTable'], QuerysaleLookupTableArgs, MeshContext>,
  /** null **/
  saleLookupTables: InContextSdkMethod<Query['saleLookupTables'], QuerysaleLookupTablesArgs, MeshContext>,
  /** null **/
  transfer: InContextSdkMethod<Query['transfer'], QuerytransferArgs, MeshContext>,
  /** null **/
  transfers: InContextSdkMethod<Query['transfers'], QuerytransfersArgs, MeshContext>,
  /** null **/
  dependency: InContextSdkMethod<Query['dependency'], QuerydependencyArgs, MeshContext>,
  /** null **/
  dependencies: InContextSdkMethod<Query['dependencies'], QuerydependenciesArgs, MeshContext>,
  /** null **/
  dependencyRegistry: InContextSdkMethod<Query['dependencyRegistry'], QuerydependencyRegistryArgs, MeshContext>,
  /** null **/
  dependencyRegistries: InContextSdkMethod<Query['dependencyRegistries'], QuerydependencyRegistriesArgs, MeshContext>,
  /** null **/
  dependencyAdditionalCDN: InContextSdkMethod<Query['dependencyAdditionalCDN'], QuerydependencyAdditionalCDNArgs, MeshContext>,
  /** null **/
  dependencyAdditionalCDNs: InContextSdkMethod<Query['dependencyAdditionalCDNs'], QuerydependencyAdditionalCDNsArgs, MeshContext>,
  /** null **/
  dependencyAdditionalRepository: InContextSdkMethod<Query['dependencyAdditionalRepository'], QuerydependencyAdditionalRepositoryArgs, MeshContext>,
  /** null **/
  dependencyAdditionalRepositories: InContextSdkMethod<Query['dependencyAdditionalRepositories'], QuerydependencyAdditionalRepositoriesArgs, MeshContext>,
  /** null **/
  dependencyScript: InContextSdkMethod<Query['dependencyScript'], QuerydependencyScriptArgs, MeshContext>,
  /** null **/
  dependencyScripts: InContextSdkMethod<Query['dependencyScripts'], QuerydependencyScriptsArgs, MeshContext>,
  /** null **/
  projectExternalAssetDependency: InContextSdkMethod<Query['projectExternalAssetDependency'], QueryprojectExternalAssetDependencyArgs, MeshContext>,
  /** null **/
  projectExternalAssetDependencies: InContextSdkMethod<Query['projectExternalAssetDependencies'], QueryprojectExternalAssetDependenciesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  project: InContextSdkMethod<Subscription['project'], SubscriptionprojectArgs, MeshContext>,
  /** null **/
  projects: InContextSdkMethod<Subscription['projects'], SubscriptionprojectsArgs, MeshContext>,
  /** null **/
  projectScript: InContextSdkMethod<Subscription['projectScript'], SubscriptionprojectScriptArgs, MeshContext>,
  /** null **/
  projectScripts: InContextSdkMethod<Subscription['projectScripts'], SubscriptionprojectScriptsArgs, MeshContext>,
  /** null **/
  proposedArtistAddressesAndSplit: InContextSdkMethod<Subscription['proposedArtistAddressesAndSplit'], SubscriptionproposedArtistAddressesAndSplitArgs, MeshContext>,
  /** null **/
  proposedArtistAddressesAndSplits: InContextSdkMethod<Subscription['proposedArtistAddressesAndSplits'], SubscriptionproposedArtistAddressesAndSplitsArgs, MeshContext>,
  /** null **/
  engineRegistry: InContextSdkMethod<Subscription['engineRegistry'], SubscriptionengineRegistryArgs, MeshContext>,
  /** null **/
  engineRegistries: InContextSdkMethod<Subscription['engineRegistries'], SubscriptionengineRegistriesArgs, MeshContext>,
  /** null **/
  contract: InContextSdkMethod<Subscription['contract'], SubscriptioncontractArgs, MeshContext>,
  /** null **/
  contracts: InContextSdkMethod<Subscription['contracts'], SubscriptioncontractsArgs, MeshContext>,
  /** null **/
  whitelisting: InContextSdkMethod<Subscription['whitelisting'], SubscriptionwhitelistingArgs, MeshContext>,
  /** null **/
  whitelistings: InContextSdkMethod<Subscription['whitelistings'], SubscriptionwhitelistingsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Subscription['account'], SubscriptionaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Subscription['accounts'], SubscriptionaccountsArgs, MeshContext>,
  /** null **/
  accountProject: InContextSdkMethod<Subscription['accountProject'], SubscriptionaccountProjectArgs, MeshContext>,
  /** null **/
  accountProjects: InContextSdkMethod<Subscription['accountProjects'], SubscriptionaccountProjectsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  minterFilter: InContextSdkMethod<Subscription['minterFilter'], SubscriptionminterFilterArgs, MeshContext>,
  /** null **/
  minterFilters: InContextSdkMethod<Subscription['minterFilters'], SubscriptionminterFiltersArgs, MeshContext>,
  /** null **/
  minter: InContextSdkMethod<Subscription['minter'], SubscriptionminterArgs, MeshContext>,
  /** null **/
  minters: InContextSdkMethod<Subscription['minters'], SubscriptionmintersArgs, MeshContext>,
  /** null **/
  projectMinterConfiguration: InContextSdkMethod<Subscription['projectMinterConfiguration'], SubscriptionprojectMinterConfigurationArgs, MeshContext>,
  /** null **/
  projectMinterConfigurations: InContextSdkMethod<Subscription['projectMinterConfigurations'], SubscriptionprojectMinterConfigurationsArgs, MeshContext>,
  /** null **/
  receipt: InContextSdkMethod<Subscription['receipt'], SubscriptionreceiptArgs, MeshContext>,
  /** null **/
  receipts: InContextSdkMethod<Subscription['receipts'], SubscriptionreceiptsArgs, MeshContext>,
  /** null **/
  payment: InContextSdkMethod<Subscription['payment'], SubscriptionpaymentArgs, MeshContext>,
  /** null **/
  payments: InContextSdkMethod<Subscription['payments'], SubscriptionpaymentsArgs, MeshContext>,
  /** null **/
  sale: InContextSdkMethod<Subscription['sale'], SubscriptionsaleArgs, MeshContext>,
  /** null **/
  sales: InContextSdkMethod<Subscription['sales'], SubscriptionsalesArgs, MeshContext>,
  /** null **/
  saleLookupTable: InContextSdkMethod<Subscription['saleLookupTable'], SubscriptionsaleLookupTableArgs, MeshContext>,
  /** null **/
  saleLookupTables: InContextSdkMethod<Subscription['saleLookupTables'], SubscriptionsaleLookupTablesArgs, MeshContext>,
  /** null **/
  transfer: InContextSdkMethod<Subscription['transfer'], SubscriptiontransferArgs, MeshContext>,
  /** null **/
  transfers: InContextSdkMethod<Subscription['transfers'], SubscriptiontransfersArgs, MeshContext>,
  /** null **/
  dependency: InContextSdkMethod<Subscription['dependency'], SubscriptiondependencyArgs, MeshContext>,
  /** null **/
  dependencies: InContextSdkMethod<Subscription['dependencies'], SubscriptiondependenciesArgs, MeshContext>,
  /** null **/
  dependencyRegistry: InContextSdkMethod<Subscription['dependencyRegistry'], SubscriptiondependencyRegistryArgs, MeshContext>,
  /** null **/
  dependencyRegistries: InContextSdkMethod<Subscription['dependencyRegistries'], SubscriptiondependencyRegistriesArgs, MeshContext>,
  /** null **/
  dependencyAdditionalCDN: InContextSdkMethod<Subscription['dependencyAdditionalCDN'], SubscriptiondependencyAdditionalCDNArgs, MeshContext>,
  /** null **/
  dependencyAdditionalCDNs: InContextSdkMethod<Subscription['dependencyAdditionalCDNs'], SubscriptiondependencyAdditionalCDNsArgs, MeshContext>,
  /** null **/
  dependencyAdditionalRepository: InContextSdkMethod<Subscription['dependencyAdditionalRepository'], SubscriptiondependencyAdditionalRepositoryArgs, MeshContext>,
  /** null **/
  dependencyAdditionalRepositories: InContextSdkMethod<Subscription['dependencyAdditionalRepositories'], SubscriptiondependencyAdditionalRepositoriesArgs, MeshContext>,
  /** null **/
  dependencyScript: InContextSdkMethod<Subscription['dependencyScript'], SubscriptiondependencyScriptArgs, MeshContext>,
  /** null **/
  dependencyScripts: InContextSdkMethod<Subscription['dependencyScripts'], SubscriptiondependencyScriptsArgs, MeshContext>,
  /** null **/
  projectExternalAssetDependency: InContextSdkMethod<Subscription['projectExternalAssetDependency'], SubscriptionprojectExternalAssetDependencyArgs, MeshContext>,
  /** null **/
  projectExternalAssetDependencies: InContextSdkMethod<Subscription['projectExternalAssetDependencies'], SubscriptionprojectExternalAssetDependenciesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["artblocks"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
