/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Amount: { input: any; output: any; }
  /** DateTime */
  DateTimeUtc: { input: any; output: any; }
  /** A `0x` prefixed hexadecimal string representing 20 bytes of data */
  EthereumAddress: { input: any; output: any; }
  /** A ENS backed domain name */
  EthereumName: { input: any; output: any; }
  /** A GitHub issue id, represented as an integer */
  GithubIssueId: { input: any; output: any; }
  /** A GitHub issue number, represented as an integer */
  GithubIssueNumber: { input: any; output: any; }
  /** A GitHub repository ID, represented as an integer */
  GithubRepoId: { input: any; output: any; }
  /** A GitHub user ID, represented as an integer */
  GithubUserId: { input: any; output: any; }
  Iban: { input: any; output: any; }
  /** Url */
  Url: { input: any; output: any; }
  /** Uuid */
  Uuid: { input: any; output: any; }
  allocated_time: { input: any; output: any; }
  bigint: { input: any; output: any; }
  bytea: { input: any; output: any; }
  citext: { input: any; output: any; }
  contact_channel: { input: any; output: any; }
  float8: { input: any; output: any; }
  github_issue_status: { input: any; output: any; }
  github_issue_type: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  profile_cover: { input: any; output: any; }
  project_visibility: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

export enum AllocatedTime {
  LessThanOneDay = 'LESS_THAN_ONE_DAY',
  MoreThanThreeDays = 'MORE_THAN_THREE_DAYS',
  None = 'NONE',
  OneToThreeDays = 'ONE_TO_THREE_DAYS'
}

/** Boolean expression to compare columns of type "allocated_time". All fields are combined with logical 'AND'. */
export type AllocatedTimeComparisonExp = {
  _eq?: InputMaybe<Scalars['allocated_time']['input']>;
  _gt?: InputMaybe<Scalars['allocated_time']['input']>;
  _gte?: InputMaybe<Scalars['allocated_time']['input']>;
  _in?: InputMaybe<Array<Scalars['allocated_time']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['allocated_time']['input']>;
  _lte?: InputMaybe<Scalars['allocated_time']['input']>;
  _neq?: InputMaybe<Scalars['allocated_time']['input']>;
  _nin?: InputMaybe<Array<Scalars['allocated_time']['input']>>;
};

/** columns and relationships of "applications" */
export type Applications = {
  __typename?: 'Applications';
  applicantId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  projectId: Scalars['uuid']['output'];
  receivedAt: Scalars['timestamp']['output'];
};

/** aggregated selection of "applications" */
export type ApplicationsAggregate = {
  __typename?: 'ApplicationsAggregate';
  aggregate?: Maybe<ApplicationsAggregateFields>;
  nodes: Array<Applications>;
};

/** aggregate fields of "applications" */
export type ApplicationsAggregateFields = {
  __typename?: 'ApplicationsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ApplicationsMaxFields>;
  min?: Maybe<ApplicationsMinFields>;
};


/** aggregate fields of "applications" */
export type ApplicationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ApplicationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "applications" */
export type ApplicationsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Applications_Max_Order_By>;
  min?: InputMaybe<Applications_Min_Order_By>;
};

/** input type for inserting array relation for remote table "applications" */
export type ApplicationsArrRelInsertInput = {
  data: Array<ApplicationsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ApplicationsOnConflict>;
};

/** Boolean expression to filter rows from the table "applications". All fields are combined with a logical 'AND'. */
export type ApplicationsBoolExp = {
  _and?: InputMaybe<Array<ApplicationsBoolExp>>;
  _not?: InputMaybe<ApplicationsBoolExp>;
  _or?: InputMaybe<Array<ApplicationsBoolExp>>;
  applicantId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  receivedAt?: InputMaybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "applications" */
export enum ApplicationsConstraint {
  /** unique or primary key constraint on columns "id" */
  ApplicationsPkey = 'applications_pkey'
}

/** input type for inserting data into table "applications" */
export type ApplicationsInsertInput = {
  applicantId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  receivedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type ApplicationsMaxFields = {
  __typename?: 'ApplicationsMaxFields';
  applicantId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  receivedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type ApplicationsMinFields = {
  __typename?: 'ApplicationsMinFields';
  applicantId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  receivedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "applications" */
export type ApplicationsMutationResponse = {
  __typename?: 'ApplicationsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Applications>;
};

/** on_conflict condition type for table "applications" */
export type ApplicationsOnConflict = {
  constraint: ApplicationsConstraint;
  update_columns?: Array<ApplicationsUpdateColumn>;
  where?: InputMaybe<ApplicationsBoolExp>;
};

/** Ordering options when selecting data from "applications". */
export type ApplicationsOrderBy = {
  applicantId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  receivedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: applications */
export type ApplicationsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "applications" */
export enum ApplicationsSelectColumn {
  /** column name */
  ApplicantId = 'applicantId',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  ReceivedAt = 'receivedAt'
}

/** input type for updating data in table "applications" */
export type ApplicationsSetInput = {
  applicantId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  receivedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "applications" */
export enum ApplicationsUpdateColumn {
  /** column name */
  ApplicantId = 'applicantId',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  ReceivedAt = 'receivedAt'
}

export type ApplicationsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApplicationsSetInput>;
  where: ApplicationsBoolExp;
};

/** columns and relationships of "auth.user_github_provider" */
export type AuthUserGithubProvider = {
  __typename?: 'AuthUserGithubProvider';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "auth.user_github_provider" */
export type AuthUserGithubProviderAggregate = {
  __typename?: 'AuthUserGithubProviderAggregate';
  aggregate?: Maybe<AuthUserGithubProviderAggregateFields>;
  nodes: Array<AuthUserGithubProvider>;
};

/** aggregate fields of "auth.user_github_provider" */
export type AuthUserGithubProviderAggregateFields = {
  __typename?: 'AuthUserGithubProviderAggregateFields';
  avg?: Maybe<AuthUserGithubProviderAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserGithubProviderMaxFields>;
  min?: Maybe<AuthUserGithubProviderMinFields>;
  stddev?: Maybe<AuthUserGithubProviderStddevFields>;
  stddevPop?: Maybe<AuthUserGithubProviderStddev_PopFields>;
  stddevSamp?: Maybe<AuthUserGithubProviderStddev_SampFields>;
  sum?: Maybe<AuthUserGithubProviderSumFields>;
  varPop?: Maybe<AuthUserGithubProviderVar_PopFields>;
  varSamp?: Maybe<AuthUserGithubProviderVar_SampFields>;
  variance?: Maybe<AuthUserGithubProviderVarianceFields>;
};


/** aggregate fields of "auth.user_github_provider" */
export type AuthUserGithubProviderAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserGithubProviderSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type AuthUserGithubProviderAvgFields = {
  __typename?: 'AuthUserGithubProviderAvgFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "auth.user_github_provider". All fields are combined with a logical 'AND'. */
export type AuthUserGithubProviderBoolExp = {
  _and?: InputMaybe<Array<AuthUserGithubProviderBoolExp>>;
  _not?: InputMaybe<AuthUserGithubProviderBoolExp>;
  _or?: InputMaybe<Array<AuthUserGithubProviderBoolExp>>;
  accessToken?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  githubUserId?: InputMaybe<BigintComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  providerId?: InputMaybe<StringComparisonExp>;
  providerUserId?: InputMaybe<StringComparisonExp>;
  refreshToken?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** input type for incrementing numeric columns in table "auth.user_github_provider" */
export type AuthUserGithubProviderIncInput = {
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "auth.user_github_provider" */
export type AuthUserGithubProviderInsertInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserGithubProviderMaxFields = {
  __typename?: 'AuthUserGithubProviderMaxFields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type AuthUserGithubProviderMinFields = {
  __typename?: 'AuthUserGithubProviderMinFields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.user_github_provider" */
export type AuthUserGithubProviderMutationResponse = {
  __typename?: 'AuthUserGithubProviderMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserGithubProvider>;
};

/** input type for inserting object relation for remote table "auth.user_github_provider" */
export type AuthUserGithubProviderObjRelInsertInput = {
  data: AuthUserGithubProviderInsertInput;
};

/** Ordering options when selecting data from "auth.user_github_provider". */
export type AuthUserGithubProviderOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** select columns of table "auth.user_github_provider" */
export enum AuthUserGithubProviderSelectColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GithubUserId = 'githubUserId',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_github_provider" */
export type AuthUserGithubProviderSetInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type AuthUserGithubProviderStddevFields = {
  __typename?: 'AuthUserGithubProviderStddevFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type AuthUserGithubProviderStddev_PopFields = {
  __typename?: 'AuthUserGithubProviderStddev_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type AuthUserGithubProviderStddev_SampFields = {
  __typename?: 'AuthUserGithubProviderStddev_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type AuthUserGithubProviderSumFields = {
  __typename?: 'AuthUserGithubProviderSumFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
};

export type AuthUserGithubProviderUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserGithubProviderIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserGithubProviderSetInput>;
  where: AuthUserGithubProviderBoolExp;
};

/** aggregate var_pop on columns */
export type AuthUserGithubProviderVar_PopFields = {
  __typename?: 'AuthUserGithubProviderVar_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type AuthUserGithubProviderVar_SampFields = {
  __typename?: 'AuthUserGithubProviderVar_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type AuthUserGithubProviderVarianceFields = {
  __typename?: 'AuthUserGithubProviderVarianceFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

export type BankAddress = {
  BIC: Scalars['String']['input'];
  IBAN: Scalars['Iban']['input'];
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** columns and relationships of "budgets" */
export type Budgets = {
  __typename?: 'Budgets';
  id: Scalars['uuid']['output'];
  initialAmount: Scalars['numeric']['output'];
  /** An array relationship */
  paymentRequests: Array<PaymentRequests>;
  /** An aggregate relationship */
  paymentRequestsAggregate: PaymentRequestsAggregate;
  /** An object relationship */
  project?: Maybe<Projects>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  remainingAmount: Scalars['numeric']['output'];
  spentAmount: Scalars['numeric']['output'];
};


/** columns and relationships of "budgets" */
export type BudgetsPaymentRequestsArgs = {
  distinctOn?: InputMaybe<Array<PaymentRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRequestsOrderBy>>;
  where?: InputMaybe<PaymentRequestsBoolExp>;
};


/** columns and relationships of "budgets" */
export type BudgetsPaymentRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PaymentRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRequestsOrderBy>>;
  where?: InputMaybe<PaymentRequestsBoolExp>;
};

/** aggregated selection of "budgets" */
export type BudgetsAggregate = {
  __typename?: 'BudgetsAggregate';
  aggregate?: Maybe<BudgetsAggregateFields>;
  nodes: Array<Budgets>;
};

/** aggregate fields of "budgets" */
export type BudgetsAggregateFields = {
  __typename?: 'BudgetsAggregateFields';
  avg?: Maybe<BudgetsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<BudgetsMaxFields>;
  min?: Maybe<BudgetsMinFields>;
  stddev?: Maybe<BudgetsStddevFields>;
  stddevPop?: Maybe<BudgetsStddev_PopFields>;
  stddevSamp?: Maybe<BudgetsStddev_SampFields>;
  sum?: Maybe<BudgetsSumFields>;
  varPop?: Maybe<BudgetsVar_PopFields>;
  varSamp?: Maybe<BudgetsVar_SampFields>;
  variance?: Maybe<BudgetsVarianceFields>;
};


/** aggregate fields of "budgets" */
export type BudgetsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<BudgetsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "budgets" */
export type BudgetsAggregateOrderBy = {
  avg?: InputMaybe<Budgets_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Budgets_Max_Order_By>;
  min?: InputMaybe<Budgets_Min_Order_By>;
  stddev?: InputMaybe<Budgets_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Budgets_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Budgets_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Budgets_Sum_Order_By>;
  var_pop?: InputMaybe<Budgets_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Budgets_Var_Samp_Order_By>;
  variance?: InputMaybe<Budgets_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "budgets" */
export type BudgetsArrRelInsertInput = {
  data: Array<BudgetsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<BudgetsOnConflict>;
};

/** aggregate avg on columns */
export type BudgetsAvgFields = {
  __typename?: 'BudgetsAvgFields';
  initialAmount?: Maybe<Scalars['Float']['output']>;
  remainingAmount?: Maybe<Scalars['Float']['output']>;
  spentAmount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "budgets". All fields are combined with a logical 'AND'. */
export type BudgetsBoolExp = {
  _and?: InputMaybe<Array<BudgetsBoolExp>>;
  _not?: InputMaybe<BudgetsBoolExp>;
  _or?: InputMaybe<Array<BudgetsBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  initialAmount?: InputMaybe<NumericComparisonExp>;
  paymentRequests?: InputMaybe<PaymentRequestsBoolExp>;
  paymentRequests_aggregate?: InputMaybe<Payment_Requests_Aggregate_Bool_Exp>;
  project?: InputMaybe<ProjectsBoolExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  remainingAmount?: InputMaybe<NumericComparisonExp>;
  spentAmount?: InputMaybe<NumericComparisonExp>;
};

/** unique or primary key constraints on table "budgets" */
export enum BudgetsConstraint {
  /** unique or primary key constraint on columns "id" */
  BudgetsPkey = 'budgets_pkey'
}

/** input type for incrementing numeric columns in table "budgets" */
export type BudgetsIncInput = {
  initialAmount?: InputMaybe<Scalars['numeric']['input']>;
  remainingAmount?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "budgets" */
export type BudgetsInsertInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  initialAmount?: InputMaybe<Scalars['numeric']['input']>;
  paymentRequests?: InputMaybe<PaymentRequestsArrRelInsertInput>;
  project?: InputMaybe<ProjectsObjRelInsertInput>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  remainingAmount?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type BudgetsMaxFields = {
  __typename?: 'BudgetsMaxFields';
  id?: Maybe<Scalars['uuid']['output']>;
  initialAmount?: Maybe<Scalars['numeric']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  remainingAmount?: Maybe<Scalars['numeric']['output']>;
  spentAmount?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type BudgetsMinFields = {
  __typename?: 'BudgetsMinFields';
  id?: Maybe<Scalars['uuid']['output']>;
  initialAmount?: Maybe<Scalars['numeric']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  remainingAmount?: Maybe<Scalars['numeric']['output']>;
  spentAmount?: Maybe<Scalars['numeric']['output']>;
};

/** response of any mutation on the table "budgets" */
export type BudgetsMutationResponse = {
  __typename?: 'BudgetsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Budgets>;
};

/** input type for inserting object relation for remote table "budgets" */
export type BudgetsObjRelInsertInput = {
  data: BudgetsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<BudgetsOnConflict>;
};

/** on_conflict condition type for table "budgets" */
export type BudgetsOnConflict = {
  constraint: BudgetsConstraint;
  update_columns?: Array<BudgetsUpdateColumn>;
  where?: InputMaybe<BudgetsBoolExp>;
};

/** Ordering options when selecting data from "budgets". */
export type BudgetsOrderBy = {
  id?: InputMaybe<OrderBy>;
  initialAmount?: InputMaybe<OrderBy>;
  paymentRequestsAggregate?: InputMaybe<PaymentRequestsAggregateOrderBy>;
  project?: InputMaybe<ProjectsOrderBy>;
  projectId?: InputMaybe<OrderBy>;
  remainingAmount?: InputMaybe<OrderBy>;
  spentAmount?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: budgets */
export type BudgetsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "budgets" */
export enum BudgetsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  InitialAmount = 'initialAmount',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  RemainingAmount = 'remainingAmount',
  /** column name */
  SpentAmount = 'spentAmount'
}

/** input type for updating data in table "budgets" */
export type BudgetsSetInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  initialAmount?: InputMaybe<Scalars['numeric']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  remainingAmount?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type BudgetsStddevFields = {
  __typename?: 'BudgetsStddevFields';
  initialAmount?: Maybe<Scalars['Float']['output']>;
  remainingAmount?: Maybe<Scalars['Float']['output']>;
  spentAmount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type BudgetsStddev_PopFields = {
  __typename?: 'BudgetsStddev_popFields';
  initialAmount?: Maybe<Scalars['Float']['output']>;
  remainingAmount?: Maybe<Scalars['Float']['output']>;
  spentAmount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type BudgetsStddev_SampFields = {
  __typename?: 'BudgetsStddev_sampFields';
  initialAmount?: Maybe<Scalars['Float']['output']>;
  remainingAmount?: Maybe<Scalars['Float']['output']>;
  spentAmount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type BudgetsSumFields = {
  __typename?: 'BudgetsSumFields';
  initialAmount?: Maybe<Scalars['numeric']['output']>;
  remainingAmount?: Maybe<Scalars['numeric']['output']>;
  spentAmount?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "budgets" */
export enum BudgetsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  InitialAmount = 'initialAmount',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  RemainingAmount = 'remainingAmount'
}

export type BudgetsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<BudgetsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<BudgetsSetInput>;
  where: BudgetsBoolExp;
};

/** aggregate var_pop on columns */
export type BudgetsVar_PopFields = {
  __typename?: 'BudgetsVar_popFields';
  initialAmount?: Maybe<Scalars['Float']['output']>;
  remainingAmount?: Maybe<Scalars['Float']['output']>;
  spentAmount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type BudgetsVar_SampFields = {
  __typename?: 'BudgetsVar_sampFields';
  initialAmount?: Maybe<Scalars['Float']['output']>;
  remainingAmount?: Maybe<Scalars['Float']['output']>;
  spentAmount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type BudgetsVarianceFields = {
  __typename?: 'BudgetsVarianceFields';
  initialAmount?: Maybe<Scalars['Float']['output']>;
  remainingAmount?: Maybe<Scalars['Float']['output']>;
  spentAmount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type ByteaComparisonExp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>;
  _gt?: InputMaybe<Scalars['bytea']['input']>;
  _gte?: InputMaybe<Scalars['bytea']['input']>;
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bytea']['input']>;
  _lte?: InputMaybe<Scalars['bytea']['input']>;
  _neq?: InputMaybe<Scalars['bytea']['input']>;
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>;
};

export enum Channel {
  Discord = 'DISCORD',
  Email = 'EMAIL',
  LinkedIn = 'LINKED_IN',
  Telegram = 'TELEGRAM',
  Twitter = 'TWITTER'
}

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type CitextComparisonExp = {
  _eq?: InputMaybe<Scalars['citext']['input']>;
  _gt?: InputMaybe<Scalars['citext']['input']>;
  _gte?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']['input']>;
  _in?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']['input']>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']['input']>;
  _lt?: InputMaybe<Scalars['citext']['input']>;
  _lte?: InputMaybe<Scalars['citext']['input']>;
  _neq?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']['input']>;
  _nin?: InputMaybe<Array<Scalars['citext']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']['input']>;
};

/** columns and relationships of "api.commands" */
export type Commands = {
  __typename?: 'Commands';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  processingCount?: Maybe<Scalars['Int']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregated selection of "api.commands" */
export type CommandsAggregate = {
  __typename?: 'CommandsAggregate';
  aggregate?: Maybe<CommandsAggregateFields>;
  nodes: Array<Commands>;
};

/** aggregate fields of "api.commands" */
export type CommandsAggregateFields = {
  __typename?: 'CommandsAggregateFields';
  avg?: Maybe<CommandsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<CommandsMaxFields>;
  min?: Maybe<CommandsMinFields>;
  stddev?: Maybe<CommandsStddevFields>;
  stddevPop?: Maybe<CommandsStddev_PopFields>;
  stddevSamp?: Maybe<CommandsStddev_SampFields>;
  sum?: Maybe<CommandsSumFields>;
  varPop?: Maybe<CommandsVar_PopFields>;
  varSamp?: Maybe<CommandsVar_SampFields>;
  variance?: Maybe<CommandsVarianceFields>;
};


/** aggregate fields of "api.commands" */
export type CommandsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CommandsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type CommandsAvgFields = {
  __typename?: 'CommandsAvgFields';
  processingCount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "api.commands". All fields are combined with a logical 'AND'. */
export type CommandsBoolExp = {
  _and?: InputMaybe<Array<CommandsBoolExp>>;
  _not?: InputMaybe<CommandsBoolExp>;
  _or?: InputMaybe<Array<CommandsBoolExp>>;
  createdAt?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  processingCount?: InputMaybe<IntComparisonExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestampComparisonExp>;
};

/** aggregate max on columns */
export type CommandsMaxFields = {
  __typename?: 'CommandsMaxFields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  processingCount?: Maybe<Scalars['Int']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type CommandsMinFields = {
  __typename?: 'CommandsMinFields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  processingCount?: Maybe<Scalars['Int']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** Ordering options when selecting data from "api.commands". */
export type CommandsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  processingCount?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "api.commands" */
export enum CommandsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProcessingCount = 'processingCount',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type CommandsStddevFields = {
  __typename?: 'CommandsStddevFields';
  processingCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type CommandsStddev_PopFields = {
  __typename?: 'CommandsStddev_popFields';
  processingCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type CommandsStddev_SampFields = {
  __typename?: 'CommandsStddev_sampFields';
  processingCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type CommandsSumFields = {
  __typename?: 'CommandsSumFields';
  processingCount?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type CommandsVar_PopFields = {
  __typename?: 'CommandsVar_popFields';
  processingCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type CommandsVar_SampFields = {
  __typename?: 'CommandsVar_sampFields';
  processingCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type CommandsVarianceFields = {
  __typename?: 'CommandsVarianceFields';
  processingCount?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Commands" */
export type Commands_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Commands_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Commands_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  processingCount?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

export type CompanyIdentity = {
  identificationNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<PersonIdentity>;
};

/** Boolean expression to compare columns of type "contact_channel". All fields are combined with logical 'AND'. */
export type ContactChannelComparisonExp = {
  _eq?: InputMaybe<Scalars['contact_channel']['input']>;
  _gt?: InputMaybe<Scalars['contact_channel']['input']>;
  _gte?: InputMaybe<Scalars['contact_channel']['input']>;
  _in?: InputMaybe<Array<Scalars['contact_channel']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['contact_channel']['input']>;
  _lte?: InputMaybe<Scalars['contact_channel']['input']>;
  _neq?: InputMaybe<Scalars['contact_channel']['input']>;
  _nin?: InputMaybe<Array<Scalars['contact_channel']['input']>>;
};

/** columns and relationships of "api.contact_informations" */
export type ContactInformations = {
  __typename?: 'ContactInformations';
  channel?: Maybe<Scalars['contact_channel']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  public?: Maybe<Scalars['Boolean']['output']>;
};

/** aggregated selection of "api.contact_informations" */
export type ContactInformationsAggregate = {
  __typename?: 'ContactInformationsAggregate';
  aggregate?: Maybe<ContactInformationsAggregateFields>;
  nodes: Array<ContactInformations>;
};

/** aggregate fields of "api.contact_informations" */
export type ContactInformationsAggregateFields = {
  __typename?: 'ContactInformationsAggregateFields';
  avg?: Maybe<ContactInformationsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ContactInformationsMaxFields>;
  min?: Maybe<ContactInformationsMinFields>;
  stddev?: Maybe<ContactInformationsStddevFields>;
  stddevPop?: Maybe<ContactInformationsStddev_PopFields>;
  stddevSamp?: Maybe<ContactInformationsStddev_SampFields>;
  sum?: Maybe<ContactInformationsSumFields>;
  varPop?: Maybe<ContactInformationsVar_PopFields>;
  varSamp?: Maybe<ContactInformationsVar_SampFields>;
  variance?: Maybe<ContactInformationsVarianceFields>;
};


/** aggregate fields of "api.contact_informations" */
export type ContactInformationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ContactInformationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "api.contact_informations" */
export type ContactInformationsAggregateOrderBy = {
  avg?: InputMaybe<ContactInformations_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ContactInformations_Max_Order_By>;
  min?: InputMaybe<ContactInformations_Min_Order_By>;
  stddev?: InputMaybe<ContactInformations_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ContactInformations_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ContactInformations_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ContactInformations_Sum_Order_By>;
  var_pop?: InputMaybe<ContactInformations_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ContactInformations_Var_Samp_Order_By>;
  variance?: InputMaybe<ContactInformations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "api.contact_informations" */
export type ContactInformationsArrRelInsertInput = {
  data: Array<ContactInformationsInsertInput>;
};

/** aggregate avg on columns */
export type ContactInformationsAvgFields = {
  __typename?: 'ContactInformationsAvgFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "api.contact_informations". All fields are combined with a logical 'AND'. */
export type ContactInformationsBoolExp = {
  _and?: InputMaybe<Array<ContactInformationsBoolExp>>;
  _not?: InputMaybe<ContactInformationsBoolExp>;
  _or?: InputMaybe<Array<ContactInformationsBoolExp>>;
  channel?: InputMaybe<ContactChannelComparisonExp>;
  contact?: InputMaybe<StringComparisonExp>;
  githubUserId?: InputMaybe<BigintComparisonExp>;
  public?: InputMaybe<BooleanComparisonExp>;
};

/** input type for inserting data into table "api.contact_informations" */
export type ContactInformationsInsertInput = {
  channel?: InputMaybe<Scalars['contact_channel']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type ContactInformationsMaxFields = {
  __typename?: 'ContactInformationsMaxFields';
  channel?: Maybe<Scalars['contact_channel']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type ContactInformationsMinFields = {
  __typename?: 'ContactInformationsMinFields';
  channel?: Maybe<Scalars['contact_channel']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "api.contact_informations". */
export type ContactInformationsOrderBy = {
  channel?: InputMaybe<OrderBy>;
  contact?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  public?: InputMaybe<OrderBy>;
};

/** select columns of table "api.contact_informations" */
export enum ContactInformationsSelectColumn {
  /** column name */
  Channel = 'channel',
  /** column name */
  Contact = 'contact',
  /** column name */
  GithubUserId = 'githubUserId',
  /** column name */
  Public = 'public'
}

/** aggregate stddev on columns */
export type ContactInformationsStddevFields = {
  __typename?: 'ContactInformationsStddevFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type ContactInformationsStddev_PopFields = {
  __typename?: 'ContactInformationsStddev_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type ContactInformationsStddev_SampFields = {
  __typename?: 'ContactInformationsStddev_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type ContactInformationsSumFields = {
  __typename?: 'ContactInformationsSumFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type ContactInformationsVar_PopFields = {
  __typename?: 'ContactInformationsVar_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type ContactInformationsVar_SampFields = {
  __typename?: 'ContactInformationsVar_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type ContactInformationsVarianceFields = {
  __typename?: 'ContactInformationsVarianceFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

export type ContactInformations_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<ContactInformations_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<ContactInformations_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<ContactInformations_Aggregate_Bool_Exp_Count>;
};

export type ContactInformations_Aggregate_Bool_Exp_Bool_And = {
  arguments: ContactInformations_Select_Column_ContactInformations_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContactInformationsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type ContactInformations_Aggregate_Bool_Exp_Bool_Or = {
  arguments: ContactInformations_Select_Column_ContactInformations_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContactInformationsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type ContactInformations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ContactInformationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContactInformationsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "api.contact_informations" */
export type ContactInformations_Avg_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "api.contact_informations" */
export type ContactInformations_Max_Order_By = {
  channel?: InputMaybe<OrderBy>;
  contact?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "api.contact_informations" */
export type ContactInformations_Min_Order_By = {
  channel?: InputMaybe<OrderBy>;
  contact?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
};

/** select "ContactInformations_aggregate_bool_exp_bool_and_arguments_columns" columns of table "api.contact_informations" */
export enum ContactInformations_Select_Column_ContactInformations_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Public = 'public'
}

/** select "ContactInformations_aggregate_bool_exp_bool_or_arguments_columns" columns of table "api.contact_informations" */
export enum ContactInformations_Select_Column_ContactInformations_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Public = 'public'
}

/** order by stddev() on columns of table "api.contact_informations" */
export type ContactInformations_Stddev_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "api.contact_informations" */
export type ContactInformations_Stddev_Pop_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "api.contact_informations" */
export type ContactInformations_Stddev_Samp_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "ContactInformations" */
export type ContactInformations_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ContactInformations_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ContactInformations_StreamCursorValueInput = {
  channel?: InputMaybe<Scalars['contact_channel']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  public?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by sum() on columns of table "api.contact_informations" */
export type ContactInformations_Sum_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "api.contact_informations" */
export type ContactInformations_Var_Pop_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "api.contact_informations" */
export type ContactInformations_Var_Samp_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "api.contact_informations" */
export type ContactInformations_Variance_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** columns and relationships of "api.contribution_counts" */
export type ContributionCounts = {
  __typename?: 'ContributionCounts';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  paidCount?: Maybe<Scalars['bigint']['output']>;
  unpaidCount?: Maybe<Scalars['bigint']['output']>;
  week?: Maybe<Scalars['float8']['output']>;
  year?: Maybe<Scalars['float8']['output']>;
};

/** aggregated selection of "api.contribution_counts" */
export type ContributionCountsAggregate = {
  __typename?: 'ContributionCountsAggregate';
  aggregate?: Maybe<ContributionCountsAggregateFields>;
  nodes: Array<ContributionCounts>;
};

/** aggregate fields of "api.contribution_counts" */
export type ContributionCountsAggregateFields = {
  __typename?: 'ContributionCountsAggregateFields';
  avg?: Maybe<ContributionCountsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ContributionCountsMaxFields>;
  min?: Maybe<ContributionCountsMinFields>;
  stddev?: Maybe<ContributionCountsStddevFields>;
  stddevPop?: Maybe<ContributionCountsStddev_PopFields>;
  stddevSamp?: Maybe<ContributionCountsStddev_SampFields>;
  sum?: Maybe<ContributionCountsSumFields>;
  varPop?: Maybe<ContributionCountsVar_PopFields>;
  varSamp?: Maybe<ContributionCountsVar_SampFields>;
  variance?: Maybe<ContributionCountsVarianceFields>;
};


/** aggregate fields of "api.contribution_counts" */
export type ContributionCountsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ContributionCountsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "api.contribution_counts" */
export type ContributionCountsAggregateOrderBy = {
  avg?: InputMaybe<ContributionCounts_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ContributionCounts_Max_Order_By>;
  min?: InputMaybe<ContributionCounts_Min_Order_By>;
  stddev?: InputMaybe<ContributionCounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ContributionCounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ContributionCounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ContributionCounts_Sum_Order_By>;
  var_pop?: InputMaybe<ContributionCounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ContributionCounts_Var_Samp_Order_By>;
  variance?: InputMaybe<ContributionCounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "api.contribution_counts" */
export type ContributionCountsArrRelInsertInput = {
  data: Array<ContributionCountsInsertInput>;
};

/** aggregate avg on columns */
export type ContributionCountsAvgFields = {
  __typename?: 'ContributionCountsAvgFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  paidCount?: Maybe<Scalars['Float']['output']>;
  unpaidCount?: Maybe<Scalars['Float']['output']>;
  week?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "api.contribution_counts". All fields are combined with a logical 'AND'. */
export type ContributionCountsBoolExp = {
  _and?: InputMaybe<Array<ContributionCountsBoolExp>>;
  _not?: InputMaybe<ContributionCountsBoolExp>;
  _or?: InputMaybe<Array<ContributionCountsBoolExp>>;
  githubUserId?: InputMaybe<BigintComparisonExp>;
  paidCount?: InputMaybe<BigintComparisonExp>;
  unpaidCount?: InputMaybe<BigintComparisonExp>;
  week?: InputMaybe<Float8ComparisonExp>;
  year?: InputMaybe<Float8ComparisonExp>;
};

/** input type for inserting data into table "api.contribution_counts" */
export type ContributionCountsInsertInput = {
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  paidCount?: InputMaybe<Scalars['bigint']['input']>;
  unpaidCount?: InputMaybe<Scalars['bigint']['input']>;
  week?: InputMaybe<Scalars['float8']['input']>;
  year?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate max on columns */
export type ContributionCountsMaxFields = {
  __typename?: 'ContributionCountsMaxFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  paidCount?: Maybe<Scalars['bigint']['output']>;
  unpaidCount?: Maybe<Scalars['bigint']['output']>;
  week?: Maybe<Scalars['float8']['output']>;
  year?: Maybe<Scalars['float8']['output']>;
};

/** aggregate min on columns */
export type ContributionCountsMinFields = {
  __typename?: 'ContributionCountsMinFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  paidCount?: Maybe<Scalars['bigint']['output']>;
  unpaidCount?: Maybe<Scalars['bigint']['output']>;
  week?: Maybe<Scalars['float8']['output']>;
  year?: Maybe<Scalars['float8']['output']>;
};

/** Ordering options when selecting data from "api.contribution_counts". */
export type ContributionCountsOrderBy = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  week?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** select columns of table "api.contribution_counts" */
export enum ContributionCountsSelectColumn {
  /** column name */
  GithubUserId = 'githubUserId',
  /** column name */
  PaidCount = 'paidCount',
  /** column name */
  UnpaidCount = 'unpaidCount',
  /** column name */
  Week = 'week',
  /** column name */
  Year = 'year'
}

/** aggregate stddev on columns */
export type ContributionCountsStddevFields = {
  __typename?: 'ContributionCountsStddevFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  paidCount?: Maybe<Scalars['Float']['output']>;
  unpaidCount?: Maybe<Scalars['Float']['output']>;
  week?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type ContributionCountsStddev_PopFields = {
  __typename?: 'ContributionCountsStddev_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  paidCount?: Maybe<Scalars['Float']['output']>;
  unpaidCount?: Maybe<Scalars['Float']['output']>;
  week?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type ContributionCountsStddev_SampFields = {
  __typename?: 'ContributionCountsStddev_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  paidCount?: Maybe<Scalars['Float']['output']>;
  unpaidCount?: Maybe<Scalars['Float']['output']>;
  week?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type ContributionCountsSumFields = {
  __typename?: 'ContributionCountsSumFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  paidCount?: Maybe<Scalars['bigint']['output']>;
  unpaidCount?: Maybe<Scalars['bigint']['output']>;
  week?: Maybe<Scalars['float8']['output']>;
  year?: Maybe<Scalars['float8']['output']>;
};

/** aggregate var_pop on columns */
export type ContributionCountsVar_PopFields = {
  __typename?: 'ContributionCountsVar_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  paidCount?: Maybe<Scalars['Float']['output']>;
  unpaidCount?: Maybe<Scalars['Float']['output']>;
  week?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type ContributionCountsVar_SampFields = {
  __typename?: 'ContributionCountsVar_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  paidCount?: Maybe<Scalars['Float']['output']>;
  unpaidCount?: Maybe<Scalars['Float']['output']>;
  week?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type ContributionCountsVarianceFields = {
  __typename?: 'ContributionCountsVarianceFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  paidCount?: Maybe<Scalars['Float']['output']>;
  unpaidCount?: Maybe<Scalars['Float']['output']>;
  week?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

export type ContributionCounts_Aggregate_Bool_Exp = {
  avg?: InputMaybe<ContributionCounts_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<ContributionCounts_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<ContributionCounts_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<ContributionCounts_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<ContributionCounts_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<ContributionCounts_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<ContributionCounts_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<ContributionCounts_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<ContributionCounts_Aggregate_Bool_Exp_Var_Samp>;
};

export type ContributionCounts_Aggregate_Bool_Exp_Avg = {
  arguments: ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContributionCountsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type ContributionCounts_Aggregate_Bool_Exp_Corr = {
  arguments: ContributionCounts_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContributionCountsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type ContributionCounts_Aggregate_Bool_Exp_Corr_Arguments = {
  X: ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type ContributionCounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ContributionCountsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContributionCountsBoolExp>;
  predicate: IntComparisonExp;
};

export type ContributionCounts_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: ContributionCounts_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContributionCountsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type ContributionCounts_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type ContributionCounts_Aggregate_Bool_Exp_Max = {
  arguments: ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContributionCountsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type ContributionCounts_Aggregate_Bool_Exp_Min = {
  arguments: ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContributionCountsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type ContributionCounts_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContributionCountsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type ContributionCounts_Aggregate_Bool_Exp_Sum = {
  arguments: ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContributionCountsBoolExp>;
  predicate: Float8ComparisonExp;
};

export type ContributionCounts_Aggregate_Bool_Exp_Var_Samp = {
  arguments: ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContributionCountsBoolExp>;
  predicate: Float8ComparisonExp;
};

/** order by avg() on columns of table "api.contribution_counts" */
export type ContributionCounts_Avg_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  week?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "api.contribution_counts" */
export type ContributionCounts_Max_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  week?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "api.contribution_counts" */
export type ContributionCounts_Min_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  week?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** select "ContributionCounts_aggregate_bool_exp_avg_arguments_columns" columns of table "api.contribution_counts" */
export enum ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Week = 'week',
  /** column name */
  Year = 'year'
}

/** select "ContributionCounts_aggregate_bool_exp_corr_arguments_columns" columns of table "api.contribution_counts" */
export enum ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Week = 'week',
  /** column name */
  Year = 'year'
}

/** select "ContributionCounts_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "api.contribution_counts" */
export enum ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Week = 'week',
  /** column name */
  Year = 'year'
}

/** select "ContributionCounts_aggregate_bool_exp_max_arguments_columns" columns of table "api.contribution_counts" */
export enum ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Week = 'week',
  /** column name */
  Year = 'year'
}

/** select "ContributionCounts_aggregate_bool_exp_min_arguments_columns" columns of table "api.contribution_counts" */
export enum ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Week = 'week',
  /** column name */
  Year = 'year'
}

/** select "ContributionCounts_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "api.contribution_counts" */
export enum ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Week = 'week',
  /** column name */
  Year = 'year'
}

/** select "ContributionCounts_aggregate_bool_exp_sum_arguments_columns" columns of table "api.contribution_counts" */
export enum ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Week = 'week',
  /** column name */
  Year = 'year'
}

/** select "ContributionCounts_aggregate_bool_exp_var_samp_arguments_columns" columns of table "api.contribution_counts" */
export enum ContributionCounts_Select_Column_ContributionCounts_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Week = 'week',
  /** column name */
  Year = 'year'
}

/** order by stddev() on columns of table "api.contribution_counts" */
export type ContributionCounts_Stddev_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  week?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "api.contribution_counts" */
export type ContributionCounts_Stddev_Pop_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  week?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "api.contribution_counts" */
export type ContributionCounts_Stddev_Samp_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  week?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "ContributionCounts" */
export type ContributionCounts_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ContributionCounts_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ContributionCounts_StreamCursorValueInput = {
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  paidCount?: InputMaybe<Scalars['bigint']['input']>;
  unpaidCount?: InputMaybe<Scalars['bigint']['input']>;
  week?: InputMaybe<Scalars['float8']['input']>;
  year?: InputMaybe<Scalars['float8']['input']>;
};

/** order by sum() on columns of table "api.contribution_counts" */
export type ContributionCounts_Sum_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  week?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "api.contribution_counts" */
export type ContributionCounts_Var_Pop_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  week?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "api.contribution_counts" */
export type ContributionCounts_Var_Samp_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  week?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "api.contribution_counts" */
export type ContributionCounts_Variance_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  week?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** columns and relationships of "api.contribution_stats" */
export type ContributionStats = {
  __typename?: 'ContributionStats';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  maxDate?: Maybe<Scalars['timestamp']['output']>;
  minDate?: Maybe<Scalars['timestamp']['output']>;
  paidCount?: Maybe<Scalars['bigint']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  totalCount?: Maybe<Scalars['bigint']['output']>;
  unpaidCount?: Maybe<Scalars['bigint']['output']>;
  unpaidUnignoredCount?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "api.contribution_stats" */
export type ContributionStatsAggregate = {
  __typename?: 'ContributionStatsAggregate';
  aggregate?: Maybe<ContributionStatsAggregateFields>;
  nodes: Array<ContributionStats>;
};

/** aggregate fields of "api.contribution_stats" */
export type ContributionStatsAggregateFields = {
  __typename?: 'ContributionStatsAggregateFields';
  avg?: Maybe<ContributionStatsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ContributionStatsMaxFields>;
  min?: Maybe<ContributionStatsMinFields>;
  stddev?: Maybe<ContributionStatsStddevFields>;
  stddevPop?: Maybe<ContributionStatsStddev_PopFields>;
  stddevSamp?: Maybe<ContributionStatsStddev_SampFields>;
  sum?: Maybe<ContributionStatsSumFields>;
  varPop?: Maybe<ContributionStatsVar_PopFields>;
  varSamp?: Maybe<ContributionStatsVar_SampFields>;
  variance?: Maybe<ContributionStatsVarianceFields>;
};


/** aggregate fields of "api.contribution_stats" */
export type ContributionStatsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ContributionStatsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "api.contribution_stats" */
export type ContributionStatsAggregateOrderBy = {
  avg?: InputMaybe<ContributionStats_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ContributionStats_Max_Order_By>;
  min?: InputMaybe<ContributionStats_Min_Order_By>;
  stddev?: InputMaybe<ContributionStats_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ContributionStats_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ContributionStats_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ContributionStats_Sum_Order_By>;
  var_pop?: InputMaybe<ContributionStats_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ContributionStats_Var_Samp_Order_By>;
  variance?: InputMaybe<ContributionStats_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "api.contribution_stats" */
export type ContributionStatsArrRelInsertInput = {
  data: Array<ContributionStatsInsertInput>;
};

/** aggregate avg on columns */
export type ContributionStatsAvgFields = {
  __typename?: 'ContributionStatsAvgFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  paidCount?: Maybe<Scalars['Float']['output']>;
  totalCount?: Maybe<Scalars['Float']['output']>;
  unpaidCount?: Maybe<Scalars['Float']['output']>;
  unpaidUnignoredCount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "api.contribution_stats". All fields are combined with a logical 'AND'. */
export type ContributionStatsBoolExp = {
  _and?: InputMaybe<Array<ContributionStatsBoolExp>>;
  _not?: InputMaybe<ContributionStatsBoolExp>;
  _or?: InputMaybe<Array<ContributionStatsBoolExp>>;
  githubUserId?: InputMaybe<BigintComparisonExp>;
  maxDate?: InputMaybe<TimestampComparisonExp>;
  minDate?: InputMaybe<TimestampComparisonExp>;
  paidCount?: InputMaybe<BigintComparisonExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  totalCount?: InputMaybe<BigintComparisonExp>;
  unpaidCount?: InputMaybe<BigintComparisonExp>;
  unpaidUnignoredCount?: InputMaybe<BigintComparisonExp>;
};

/** input type for inserting data into table "api.contribution_stats" */
export type ContributionStatsInsertInput = {
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  maxDate?: InputMaybe<Scalars['timestamp']['input']>;
  minDate?: InputMaybe<Scalars['timestamp']['input']>;
  paidCount?: InputMaybe<Scalars['bigint']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  totalCount?: InputMaybe<Scalars['bigint']['input']>;
  unpaidCount?: InputMaybe<Scalars['bigint']['input']>;
  unpaidUnignoredCount?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type ContributionStatsMaxFields = {
  __typename?: 'ContributionStatsMaxFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  maxDate?: Maybe<Scalars['timestamp']['output']>;
  minDate?: Maybe<Scalars['timestamp']['output']>;
  paidCount?: Maybe<Scalars['bigint']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  totalCount?: Maybe<Scalars['bigint']['output']>;
  unpaidCount?: Maybe<Scalars['bigint']['output']>;
  unpaidUnignoredCount?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type ContributionStatsMinFields = {
  __typename?: 'ContributionStatsMinFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  maxDate?: Maybe<Scalars['timestamp']['output']>;
  minDate?: Maybe<Scalars['timestamp']['output']>;
  paidCount?: Maybe<Scalars['bigint']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  totalCount?: Maybe<Scalars['bigint']['output']>;
  unpaidCount?: Maybe<Scalars['bigint']['output']>;
  unpaidUnignoredCount?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "api.contribution_stats". */
export type ContributionStatsOrderBy = {
  githubUserId?: InputMaybe<OrderBy>;
  maxDate?: InputMaybe<OrderBy>;
  minDate?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  totalCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  unpaidUnignoredCount?: InputMaybe<OrderBy>;
};

/** select columns of table "api.contribution_stats" */
export enum ContributionStatsSelectColumn {
  /** column name */
  GithubUserId = 'githubUserId',
  /** column name */
  MaxDate = 'maxDate',
  /** column name */
  MinDate = 'minDate',
  /** column name */
  PaidCount = 'paidCount',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  TotalCount = 'totalCount',
  /** column name */
  UnpaidCount = 'unpaidCount',
  /** column name */
  UnpaidUnignoredCount = 'unpaidUnignoredCount'
}

/** aggregate stddev on columns */
export type ContributionStatsStddevFields = {
  __typename?: 'ContributionStatsStddevFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  paidCount?: Maybe<Scalars['Float']['output']>;
  totalCount?: Maybe<Scalars['Float']['output']>;
  unpaidCount?: Maybe<Scalars['Float']['output']>;
  unpaidUnignoredCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type ContributionStatsStddev_PopFields = {
  __typename?: 'ContributionStatsStddev_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  paidCount?: Maybe<Scalars['Float']['output']>;
  totalCount?: Maybe<Scalars['Float']['output']>;
  unpaidCount?: Maybe<Scalars['Float']['output']>;
  unpaidUnignoredCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type ContributionStatsStddev_SampFields = {
  __typename?: 'ContributionStatsStddev_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  paidCount?: Maybe<Scalars['Float']['output']>;
  totalCount?: Maybe<Scalars['Float']['output']>;
  unpaidCount?: Maybe<Scalars['Float']['output']>;
  unpaidUnignoredCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type ContributionStatsSumFields = {
  __typename?: 'ContributionStatsSumFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  paidCount?: Maybe<Scalars['bigint']['output']>;
  totalCount?: Maybe<Scalars['bigint']['output']>;
  unpaidCount?: Maybe<Scalars['bigint']['output']>;
  unpaidUnignoredCount?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type ContributionStatsVar_PopFields = {
  __typename?: 'ContributionStatsVar_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  paidCount?: Maybe<Scalars['Float']['output']>;
  totalCount?: Maybe<Scalars['Float']['output']>;
  unpaidCount?: Maybe<Scalars['Float']['output']>;
  unpaidUnignoredCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type ContributionStatsVar_SampFields = {
  __typename?: 'ContributionStatsVar_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  paidCount?: Maybe<Scalars['Float']['output']>;
  totalCount?: Maybe<Scalars['Float']['output']>;
  unpaidCount?: Maybe<Scalars['Float']['output']>;
  unpaidUnignoredCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type ContributionStatsVarianceFields = {
  __typename?: 'ContributionStatsVarianceFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  paidCount?: Maybe<Scalars['Float']['output']>;
  totalCount?: Maybe<Scalars['Float']['output']>;
  unpaidCount?: Maybe<Scalars['Float']['output']>;
  unpaidUnignoredCount?: Maybe<Scalars['Float']['output']>;
};

export type ContributionStats_Aggregate_Bool_Exp = {
  count?: InputMaybe<ContributionStats_Aggregate_Bool_Exp_Count>;
};

export type ContributionStats_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ContributionStatsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContributionStatsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "api.contribution_stats" */
export type ContributionStats_Avg_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  totalCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  unpaidUnignoredCount?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "api.contribution_stats" */
export type ContributionStats_Max_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  maxDate?: InputMaybe<OrderBy>;
  minDate?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  totalCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  unpaidUnignoredCount?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "api.contribution_stats" */
export type ContributionStats_Min_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  maxDate?: InputMaybe<OrderBy>;
  minDate?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  totalCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  unpaidUnignoredCount?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "api.contribution_stats" */
export type ContributionStats_Stddev_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  totalCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  unpaidUnignoredCount?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "api.contribution_stats" */
export type ContributionStats_Stddev_Pop_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  totalCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  unpaidUnignoredCount?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "api.contribution_stats" */
export type ContributionStats_Stddev_Samp_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  totalCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  unpaidUnignoredCount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "ContributionStats" */
export type ContributionStats_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ContributionStats_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ContributionStats_StreamCursorValueInput = {
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  maxDate?: InputMaybe<Scalars['timestamp']['input']>;
  minDate?: InputMaybe<Scalars['timestamp']['input']>;
  paidCount?: InputMaybe<Scalars['bigint']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  totalCount?: InputMaybe<Scalars['bigint']['input']>;
  unpaidCount?: InputMaybe<Scalars['bigint']['input']>;
  unpaidUnignoredCount?: InputMaybe<Scalars['bigint']['input']>;
};

/** order by sum() on columns of table "api.contribution_stats" */
export type ContributionStats_Sum_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  totalCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  unpaidUnignoredCount?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "api.contribution_stats" */
export type ContributionStats_Var_Pop_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  totalCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  unpaidUnignoredCount?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "api.contribution_stats" */
export type ContributionStats_Var_Samp_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  totalCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  unpaidUnignoredCount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "api.contribution_stats" */
export type ContributionStats_Variance_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  paidCount?: InputMaybe<OrderBy>;
  totalCount?: InputMaybe<OrderBy>;
  unpaidCount?: InputMaybe<OrderBy>;
  unpaidUnignoredCount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "api.contributions" */
export type Contributions = {
  __typename?: 'Contributions';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  githubIssueId?: Maybe<Scalars['bigint']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  ignored?: Maybe<Scalars['Boolean']['output']>;
  issueNumber?: Maybe<Scalars['bigint']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  repoId?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "api.contributions" */
export type ContributionsAggregate = {
  __typename?: 'ContributionsAggregate';
  aggregate?: Maybe<ContributionsAggregateFields>;
  nodes: Array<Contributions>;
};

/** aggregate fields of "api.contributions" */
export type ContributionsAggregateFields = {
  __typename?: 'ContributionsAggregateFields';
  avg?: Maybe<ContributionsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ContributionsMaxFields>;
  min?: Maybe<ContributionsMinFields>;
  stddev?: Maybe<ContributionsStddevFields>;
  stddevPop?: Maybe<ContributionsStddev_PopFields>;
  stddevSamp?: Maybe<ContributionsStddev_SampFields>;
  sum?: Maybe<ContributionsSumFields>;
  varPop?: Maybe<ContributionsVar_PopFields>;
  varSamp?: Maybe<ContributionsVar_SampFields>;
  variance?: Maybe<ContributionsVarianceFields>;
};


/** aggregate fields of "api.contributions" */
export type ContributionsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ContributionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "api.contributions" */
export type ContributionsAggregateOrderBy = {
  avg?: InputMaybe<Contributions_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Contributions_Max_Order_By>;
  min?: InputMaybe<Contributions_Min_Order_By>;
  stddev?: InputMaybe<Contributions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Contributions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Contributions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Contributions_Sum_Order_By>;
  var_pop?: InputMaybe<Contributions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Contributions_Var_Samp_Order_By>;
  variance?: InputMaybe<Contributions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "api.contributions" */
export type ContributionsArrRelInsertInput = {
  data: Array<ContributionsInsertInput>;
};

/** aggregate avg on columns */
export type ContributionsAvgFields = {
  __typename?: 'ContributionsAvgFields';
  githubIssueId?: Maybe<Scalars['Float']['output']>;
  githubUserId?: Maybe<Scalars['Float']['output']>;
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "api.contributions". All fields are combined with a logical 'AND'. */
export type ContributionsBoolExp = {
  _and?: InputMaybe<Array<ContributionsBoolExp>>;
  _not?: InputMaybe<ContributionsBoolExp>;
  _or?: InputMaybe<Array<ContributionsBoolExp>>;
  createdAt?: InputMaybe<TimestampComparisonExp>;
  githubIssueId?: InputMaybe<BigintComparisonExp>;
  githubUserId?: InputMaybe<BigintComparisonExp>;
  ignored?: InputMaybe<BooleanComparisonExp>;
  issueNumber?: InputMaybe<BigintComparisonExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  repoId?: InputMaybe<BigintComparisonExp>;
};

/** input type for inserting data into table "api.contributions" */
export type ContributionsInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  githubIssueId?: InputMaybe<Scalars['bigint']['input']>;
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  ignored?: InputMaybe<Scalars['Boolean']['input']>;
  issueNumber?: InputMaybe<Scalars['bigint']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  repoId?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type ContributionsMaxFields = {
  __typename?: 'ContributionsMaxFields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  githubIssueId?: Maybe<Scalars['bigint']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  issueNumber?: Maybe<Scalars['bigint']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  repoId?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type ContributionsMinFields = {
  __typename?: 'ContributionsMinFields';
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  githubIssueId?: Maybe<Scalars['bigint']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  issueNumber?: Maybe<Scalars['bigint']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  repoId?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "api.contributions". */
export type ContributionsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  githubIssueId?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  ignored?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** select columns of table "api.contributions" */
export enum ContributionsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GithubIssueId = 'githubIssueId',
  /** column name */
  GithubUserId = 'githubUserId',
  /** column name */
  Ignored = 'ignored',
  /** column name */
  IssueNumber = 'issueNumber',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  RepoId = 'repoId'
}

/** aggregate stddev on columns */
export type ContributionsStddevFields = {
  __typename?: 'ContributionsStddevFields';
  githubIssueId?: Maybe<Scalars['Float']['output']>;
  githubUserId?: Maybe<Scalars['Float']['output']>;
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type ContributionsStddev_PopFields = {
  __typename?: 'ContributionsStddev_popFields';
  githubIssueId?: Maybe<Scalars['Float']['output']>;
  githubUserId?: Maybe<Scalars['Float']['output']>;
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type ContributionsStddev_SampFields = {
  __typename?: 'ContributionsStddev_sampFields';
  githubIssueId?: Maybe<Scalars['Float']['output']>;
  githubUserId?: Maybe<Scalars['Float']['output']>;
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type ContributionsSumFields = {
  __typename?: 'ContributionsSumFields';
  githubIssueId?: Maybe<Scalars['bigint']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  issueNumber?: Maybe<Scalars['bigint']['output']>;
  repoId?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type ContributionsVar_PopFields = {
  __typename?: 'ContributionsVar_popFields';
  githubIssueId?: Maybe<Scalars['Float']['output']>;
  githubUserId?: Maybe<Scalars['Float']['output']>;
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type ContributionsVar_SampFields = {
  __typename?: 'ContributionsVar_sampFields';
  githubIssueId?: Maybe<Scalars['Float']['output']>;
  githubUserId?: Maybe<Scalars['Float']['output']>;
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type ContributionsVarianceFields = {
  __typename?: 'ContributionsVarianceFields';
  githubIssueId?: Maybe<Scalars['Float']['output']>;
  githubUserId?: Maybe<Scalars['Float']['output']>;
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

export type Contributions_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Contributions_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Contributions_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Contributions_Aggregate_Bool_Exp_Count>;
};

export type Contributions_Aggregate_Bool_Exp_Bool_And = {
  arguments: Contributions_Select_Column_Contributions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContributionsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type Contributions_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Contributions_Select_Column_Contributions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContributionsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type Contributions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ContributionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ContributionsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "api.contributions" */
export type Contributions_Avg_Order_By = {
  githubIssueId?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "api.contributions" */
export type Contributions_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  githubIssueId?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "api.contributions" */
export type Contributions_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  githubIssueId?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** select "Contributions_aggregate_bool_exp_bool_and_arguments_columns" columns of table "api.contributions" */
export enum Contributions_Select_Column_Contributions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Ignored = 'ignored'
}

/** select "Contributions_aggregate_bool_exp_bool_or_arguments_columns" columns of table "api.contributions" */
export enum Contributions_Select_Column_Contributions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Ignored = 'ignored'
}

/** order by stddev() on columns of table "api.contributions" */
export type Contributions_Stddev_Order_By = {
  githubIssueId?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "api.contributions" */
export type Contributions_Stddev_Pop_Order_By = {
  githubIssueId?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "api.contributions" */
export type Contributions_Stddev_Samp_Order_By = {
  githubIssueId?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "Contributions" */
export type Contributions_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Contributions_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Contributions_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  githubIssueId?: InputMaybe<Scalars['bigint']['input']>;
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  ignored?: InputMaybe<Scalars['Boolean']['input']>;
  issueNumber?: InputMaybe<Scalars['bigint']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  repoId?: InputMaybe<Scalars['bigint']['input']>;
};

/** order by sum() on columns of table "api.contributions" */
export type Contributions_Sum_Order_By = {
  githubIssueId?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "api.contributions" */
export type Contributions_Var_Pop_Order_By = {
  githubIssueId?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "api.contributions" */
export type Contributions_Var_Samp_Order_By = {
  githubIssueId?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "api.contributions" */
export type Contributions_Variance_Order_By = {
  githubIssueId?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type EthereumIdentityInput = {
  optEthAddress?: InputMaybe<Scalars['EthereumAddress']['input']>;
  optEthName?: InputMaybe<Scalars['EthereumName']['input']>;
  type: EthereumIdentityType;
};

export enum EthereumIdentityType {
  EthereumAddress = 'ETHEREUM_ADDRESS',
  EthereumName = 'ETHEREUM_NAME'
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8ComparisonExp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** Boolean expression to compare columns of type "github_issue_status". All fields are combined with logical 'AND'. */
export type GithubIssueStatusComparisonExp = {
  _eq?: InputMaybe<Scalars['github_issue_status']['input']>;
  _gt?: InputMaybe<Scalars['github_issue_status']['input']>;
  _gte?: InputMaybe<Scalars['github_issue_status']['input']>;
  _in?: InputMaybe<Array<Scalars['github_issue_status']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['github_issue_status']['input']>;
  _lte?: InputMaybe<Scalars['github_issue_status']['input']>;
  _neq?: InputMaybe<Scalars['github_issue_status']['input']>;
  _nin?: InputMaybe<Array<Scalars['github_issue_status']['input']>>;
};

/** Boolean expression to compare columns of type "github_issue_type". All fields are combined with logical 'AND'. */
export type GithubIssueTypeComparisonExp = {
  _eq?: InputMaybe<Scalars['github_issue_type']['input']>;
  _gt?: InputMaybe<Scalars['github_issue_type']['input']>;
  _gte?: InputMaybe<Scalars['github_issue_type']['input']>;
  _in?: InputMaybe<Array<Scalars['github_issue_type']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['github_issue_type']['input']>;
  _lte?: InputMaybe<Scalars['github_issue_type']['input']>;
  _neq?: InputMaybe<Scalars['github_issue_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['github_issue_type']['input']>>;
};

/** columns and relationships of "github_issues" */
export type GithubIssues = {
  __typename?: 'GithubIssues';
  authorId: Scalars['bigint']['output'];
  closedAt?: Maybe<Scalars['timestamp']['output']>;
  createdAt: Scalars['timestamp']['output'];
  htmlUrl: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  ignoredForProjects: Array<IgnoredGithubIssues>;
  ignoredForProjectsAggregate: IgnoredGithubIssuesAggregate;
  issueNumber: Scalars['bigint']['output'];
  mergedAt?: Maybe<Scalars['timestamp']['output']>;
  repoId: Scalars['bigint']['output'];
  status: Scalars['github_issue_status']['output'];
  title: Scalars['String']['output'];
  type: Scalars['github_issue_type']['output'];
};


/** columns and relationships of "github_issues" */
export type GithubIssuesIgnoredForProjectsArgs = {
  distinctOn?: InputMaybe<Array<IgnoredGithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IgnoredGithubIssuesOrderBy>>;
  where?: InputMaybe<IgnoredGithubIssuesBoolExp>;
};


/** columns and relationships of "github_issues" */
export type GithubIssuesIgnoredForProjectsAggregateArgs = {
  distinctOn?: InputMaybe<Array<IgnoredGithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IgnoredGithubIssuesOrderBy>>;
  where?: InputMaybe<IgnoredGithubIssuesBoolExp>;
};

/** aggregated selection of "github_issues" */
export type GithubIssuesAggregate = {
  __typename?: 'GithubIssuesAggregate';
  aggregate?: Maybe<GithubIssuesAggregateFields>;
  nodes: Array<GithubIssues>;
};

/** aggregate fields of "github_issues" */
export type GithubIssuesAggregateFields = {
  __typename?: 'GithubIssuesAggregateFields';
  avg?: Maybe<GithubIssuesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<GithubIssuesMaxFields>;
  min?: Maybe<GithubIssuesMinFields>;
  stddev?: Maybe<GithubIssuesStddevFields>;
  stddevPop?: Maybe<GithubIssuesStddev_PopFields>;
  stddevSamp?: Maybe<GithubIssuesStddev_SampFields>;
  sum?: Maybe<GithubIssuesSumFields>;
  varPop?: Maybe<GithubIssuesVar_PopFields>;
  varSamp?: Maybe<GithubIssuesVar_SampFields>;
  variance?: Maybe<GithubIssuesVarianceFields>;
};


/** aggregate fields of "github_issues" */
export type GithubIssuesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<GithubIssuesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "github_issues" */
export type GithubIssuesAggregateOrderBy = {
  avg?: InputMaybe<Github_Issues_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Github_Issues_Max_Order_By>;
  min?: InputMaybe<Github_Issues_Min_Order_By>;
  stddev?: InputMaybe<Github_Issues_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Github_Issues_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Github_Issues_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Github_Issues_Sum_Order_By>;
  var_pop?: InputMaybe<Github_Issues_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Github_Issues_Var_Samp_Order_By>;
  variance?: InputMaybe<Github_Issues_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "github_issues" */
export type GithubIssuesArrRelInsertInput = {
  data: Array<GithubIssuesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<GithubIssuesOnConflict>;
};

/** aggregate avg on columns */
export type GithubIssuesAvgFields = {
  __typename?: 'GithubIssuesAvgFields';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "github_issues". All fields are combined with a logical 'AND'. */
export type GithubIssuesBoolExp = {
  _and?: InputMaybe<Array<GithubIssuesBoolExp>>;
  _not?: InputMaybe<GithubIssuesBoolExp>;
  _or?: InputMaybe<Array<GithubIssuesBoolExp>>;
  authorId?: InputMaybe<BigintComparisonExp>;
  closedAt?: InputMaybe<TimestampComparisonExp>;
  createdAt?: InputMaybe<TimestampComparisonExp>;
  htmlUrl?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  ignoredForProjects?: InputMaybe<IgnoredGithubIssuesBoolExp>;
  ignoredForProjects_aggregate?: InputMaybe<Ignored_Github_Issues_Aggregate_Bool_Exp>;
  issueNumber?: InputMaybe<BigintComparisonExp>;
  mergedAt?: InputMaybe<TimestampComparisonExp>;
  repoId?: InputMaybe<BigintComparisonExp>;
  status?: InputMaybe<GithubIssueStatusComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<GithubIssueTypeComparisonExp>;
};

/** unique or primary key constraints on table "github_issues" */
export enum GithubIssuesConstraint {
  /** unique or primary key constraint on columns "id" */
  GithubPullsPkey = 'github_pulls_pkey'
}

/** input type for incrementing numeric columns in table "github_issues" */
export type GithubIssuesIncInput = {
  authorId?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  issueNumber?: InputMaybe<Scalars['bigint']['input']>;
  repoId?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "github_issues" */
export type GithubIssuesInsertInput = {
  authorId?: InputMaybe<Scalars['bigint']['input']>;
  closedAt?: InputMaybe<Scalars['timestamp']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  htmlUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ignoredForProjects?: InputMaybe<IgnoredGithubIssuesArrRelInsertInput>;
  issueNumber?: InputMaybe<Scalars['bigint']['input']>;
  mergedAt?: InputMaybe<Scalars['timestamp']['input']>;
  repoId?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Scalars['github_issue_status']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['github_issue_type']['input']>;
};

/** aggregate max on columns */
export type GithubIssuesMaxFields = {
  __typename?: 'GithubIssuesMaxFields';
  authorId?: Maybe<Scalars['bigint']['output']>;
  closedAt?: Maybe<Scalars['timestamp']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  htmlUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  issueNumber?: Maybe<Scalars['bigint']['output']>;
  mergedAt?: Maybe<Scalars['timestamp']['output']>;
  repoId?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['github_issue_status']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['github_issue_type']['output']>;
};

/** aggregate min on columns */
export type GithubIssuesMinFields = {
  __typename?: 'GithubIssuesMinFields';
  authorId?: Maybe<Scalars['bigint']['output']>;
  closedAt?: Maybe<Scalars['timestamp']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  htmlUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  issueNumber?: Maybe<Scalars['bigint']['output']>;
  mergedAt?: Maybe<Scalars['timestamp']['output']>;
  repoId?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['github_issue_status']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['github_issue_type']['output']>;
};

/** response of any mutation on the table "github_issues" */
export type GithubIssuesMutationResponse = {
  __typename?: 'GithubIssuesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GithubIssues>;
};

/** on_conflict condition type for table "github_issues" */
export type GithubIssuesOnConflict = {
  constraint: GithubIssuesConstraint;
  update_columns?: Array<GithubIssuesUpdateColumn>;
  where?: InputMaybe<GithubIssuesBoolExp>;
};

/** Ordering options when selecting data from "github_issues". */
export type GithubIssuesOrderBy = {
  authorId?: InputMaybe<OrderBy>;
  closedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  htmlUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ignoredForProjectsAggregate?: InputMaybe<IgnoredGithubIssuesAggregateOrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  mergedAt?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: github_issues */
export type GithubIssuesPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "github_issues" */
export enum GithubIssuesSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  ClosedAt = 'closedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HtmlUrl = 'htmlUrl',
  /** column name */
  Id = 'id',
  /** column name */
  IssueNumber = 'issueNumber',
  /** column name */
  MergedAt = 'mergedAt',
  /** column name */
  RepoId = 'repoId',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "github_issues" */
export type GithubIssuesSetInput = {
  authorId?: InputMaybe<Scalars['bigint']['input']>;
  closedAt?: InputMaybe<Scalars['timestamp']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  htmlUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  issueNumber?: InputMaybe<Scalars['bigint']['input']>;
  mergedAt?: InputMaybe<Scalars['timestamp']['input']>;
  repoId?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Scalars['github_issue_status']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['github_issue_type']['input']>;
};

/** aggregate stddev on columns */
export type GithubIssuesStddevFields = {
  __typename?: 'GithubIssuesStddevFields';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type GithubIssuesStddev_PopFields = {
  __typename?: 'GithubIssuesStddev_popFields';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type GithubIssuesStddev_SampFields = {
  __typename?: 'GithubIssuesStddev_sampFields';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type GithubIssuesSumFields = {
  __typename?: 'GithubIssuesSumFields';
  authorId?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  issueNumber?: Maybe<Scalars['bigint']['output']>;
  repoId?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "github_issues" */
export enum GithubIssuesUpdateColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  ClosedAt = 'closedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HtmlUrl = 'htmlUrl',
  /** column name */
  Id = 'id',
  /** column name */
  IssueNumber = 'issueNumber',
  /** column name */
  MergedAt = 'mergedAt',
  /** column name */
  RepoId = 'repoId',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type'
}

export type GithubIssuesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GithubIssuesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GithubIssuesSetInput>;
  where: GithubIssuesBoolExp;
};

/** aggregate var_pop on columns */
export type GithubIssuesVar_PopFields = {
  __typename?: 'GithubIssuesVar_popFields';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type GithubIssuesVar_SampFields = {
  __typename?: 'GithubIssuesVar_sampFields';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type GithubIssuesVarianceFields = {
  __typename?: 'GithubIssuesVarianceFields';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "github_repos" */
export type GithubRepos = {
  __typename?: 'GithubRepos';
  description: Scalars['String']['output'];
  forkCount: Scalars['Int']['output'];
  htmlUrl: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  languages: Scalars['jsonb']['output'];
  name: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  stars: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "github_repos" */
export type GithubReposLanguagesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "github_repos" */
export type GithubReposAggregate = {
  __typename?: 'GithubReposAggregate';
  aggregate?: Maybe<GithubReposAggregateFields>;
  nodes: Array<GithubRepos>;
};

/** aggregate fields of "github_repos" */
export type GithubReposAggregateFields = {
  __typename?: 'GithubReposAggregateFields';
  avg?: Maybe<GithubReposAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<GithubReposMaxFields>;
  min?: Maybe<GithubReposMinFields>;
  stddev?: Maybe<GithubReposStddevFields>;
  stddevPop?: Maybe<GithubReposStddev_PopFields>;
  stddevSamp?: Maybe<GithubReposStddev_SampFields>;
  sum?: Maybe<GithubReposSumFields>;
  varPop?: Maybe<GithubReposVar_PopFields>;
  varSamp?: Maybe<GithubReposVar_SampFields>;
  variance?: Maybe<GithubReposVarianceFields>;
};


/** aggregate fields of "github_repos" */
export type GithubReposAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<GithubReposSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type GithubReposAppendInput = {
  languages?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type GithubReposAvgFields = {
  __typename?: 'GithubReposAvgFields';
  forkCount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  stars?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "github_repos". All fields are combined with a logical 'AND'. */
export type GithubReposBoolExp = {
  _and?: InputMaybe<Array<GithubReposBoolExp>>;
  _not?: InputMaybe<GithubReposBoolExp>;
  _or?: InputMaybe<Array<GithubReposBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  forkCount?: InputMaybe<IntComparisonExp>;
  htmlUrl?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  languages?: InputMaybe<JsonbComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  owner?: InputMaybe<StringComparisonExp>;
  stars?: InputMaybe<IntComparisonExp>;
  updatedAt?: InputMaybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "github_repos" */
export enum GithubReposConstraint {
  /** unique or primary key constraint on columns "id" */
  CrmGithubReposPkey = 'crm_github_repos_pkey'
}

/** columns and relationships of "github_repos_contributors" */
export type GithubReposContributors = {
  __typename?: 'GithubReposContributors';
  repoId: Scalars['bigint']['output'];
  /** An object relationship */
  user?: Maybe<GithubUsers>;
  userId: Scalars['bigint']['output'];
};

/** aggregated selection of "github_repos_contributors" */
export type GithubReposContributorsAggregate = {
  __typename?: 'GithubReposContributorsAggregate';
  aggregate?: Maybe<GithubReposContributorsAggregateFields>;
  nodes: Array<GithubReposContributors>;
};

/** aggregate fields of "github_repos_contributors" */
export type GithubReposContributorsAggregateFields = {
  __typename?: 'GithubReposContributorsAggregateFields';
  avg?: Maybe<GithubReposContributorsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<GithubReposContributorsMaxFields>;
  min?: Maybe<GithubReposContributorsMinFields>;
  stddev?: Maybe<GithubReposContributorsStddevFields>;
  stddevPop?: Maybe<GithubReposContributorsStddev_PopFields>;
  stddevSamp?: Maybe<GithubReposContributorsStddev_SampFields>;
  sum?: Maybe<GithubReposContributorsSumFields>;
  varPop?: Maybe<GithubReposContributorsVar_PopFields>;
  varSamp?: Maybe<GithubReposContributorsVar_SampFields>;
  variance?: Maybe<GithubReposContributorsVarianceFields>;
};


/** aggregate fields of "github_repos_contributors" */
export type GithubReposContributorsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<GithubReposContributorsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "github_repos_contributors" */
export type GithubReposContributorsAggregateOrderBy = {
  avg?: InputMaybe<Github_Repos_Contributors_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Github_Repos_Contributors_Max_Order_By>;
  min?: InputMaybe<Github_Repos_Contributors_Min_Order_By>;
  stddev?: InputMaybe<Github_Repos_Contributors_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Github_Repos_Contributors_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Github_Repos_Contributors_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Github_Repos_Contributors_Sum_Order_By>;
  var_pop?: InputMaybe<Github_Repos_Contributors_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Github_Repos_Contributors_Var_Samp_Order_By>;
  variance?: InputMaybe<Github_Repos_Contributors_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "github_repos_contributors" */
export type GithubReposContributorsArrRelInsertInput = {
  data: Array<GithubReposContributorsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<GithubReposContributorsOnConflict>;
};

/** aggregate avg on columns */
export type GithubReposContributorsAvgFields = {
  __typename?: 'GithubReposContributorsAvgFields';
  repoId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "github_repos_contributors". All fields are combined with a logical 'AND'. */
export type GithubReposContributorsBoolExp = {
  _and?: InputMaybe<Array<GithubReposContributorsBoolExp>>;
  _not?: InputMaybe<GithubReposContributorsBoolExp>;
  _or?: InputMaybe<Array<GithubReposContributorsBoolExp>>;
  repoId?: InputMaybe<BigintComparisonExp>;
  user?: InputMaybe<GithubUsersBoolExp>;
  userId?: InputMaybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "github_repos_contributors" */
export enum GithubReposContributorsConstraint {
  /** unique or primary key constraint on columns "user_id", "repo_id" */
  GithubReposContributorsPkey = 'github_repos_contributors_pkey',
  /** unique or primary key constraint on columns "user_id", "repo_id" */
  GithubReposContributorsUserIdRepoIdIdx = 'github_repos_contributors_user_id_repo_id_idx'
}

/** input type for incrementing numeric columns in table "github_repos_contributors" */
export type GithubReposContributorsIncInput = {
  repoId?: InputMaybe<Scalars['bigint']['input']>;
  userId?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "github_repos_contributors" */
export type GithubReposContributorsInsertInput = {
  repoId?: InputMaybe<Scalars['bigint']['input']>;
  user?: InputMaybe<GithubUsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type GithubReposContributorsMaxFields = {
  __typename?: 'GithubReposContributorsMaxFields';
  repoId?: Maybe<Scalars['bigint']['output']>;
  userId?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type GithubReposContributorsMinFields = {
  __typename?: 'GithubReposContributorsMinFields';
  repoId?: Maybe<Scalars['bigint']['output']>;
  userId?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "github_repos_contributors" */
export type GithubReposContributorsMutationResponse = {
  __typename?: 'GithubReposContributorsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GithubReposContributors>;
};

/** on_conflict condition type for table "github_repos_contributors" */
export type GithubReposContributorsOnConflict = {
  constraint: GithubReposContributorsConstraint;
  update_columns?: Array<GithubReposContributorsUpdateColumn>;
  where?: InputMaybe<GithubReposContributorsBoolExp>;
};

/** Ordering options when selecting data from "github_repos_contributors". */
export type GithubReposContributorsOrderBy = {
  repoId?: InputMaybe<OrderBy>;
  user?: InputMaybe<GithubUsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: github_repos_contributors */
export type GithubReposContributorsPkColumnsInput = {
  repoId: Scalars['bigint']['input'];
  userId: Scalars['bigint']['input'];
};

/** select columns of table "github_repos_contributors" */
export enum GithubReposContributorsSelectColumn {
  /** column name */
  RepoId = 'repoId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "github_repos_contributors" */
export type GithubReposContributorsSetInput = {
  repoId?: InputMaybe<Scalars['bigint']['input']>;
  userId?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type GithubReposContributorsStddevFields = {
  __typename?: 'GithubReposContributorsStddevFields';
  repoId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type GithubReposContributorsStddev_PopFields = {
  __typename?: 'GithubReposContributorsStddev_popFields';
  repoId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type GithubReposContributorsStddev_SampFields = {
  __typename?: 'GithubReposContributorsStddev_sampFields';
  repoId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type GithubReposContributorsSumFields = {
  __typename?: 'GithubReposContributorsSumFields';
  repoId?: Maybe<Scalars['bigint']['output']>;
  userId?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "github_repos_contributors" */
export enum GithubReposContributorsUpdateColumn {
  /** column name */
  RepoId = 'repoId',
  /** column name */
  UserId = 'userId'
}

export type GithubReposContributorsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GithubReposContributorsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GithubReposContributorsSetInput>;
  where: GithubReposContributorsBoolExp;
};

/** aggregate var_pop on columns */
export type GithubReposContributorsVar_PopFields = {
  __typename?: 'GithubReposContributorsVar_popFields';
  repoId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type GithubReposContributorsVar_SampFields = {
  __typename?: 'GithubReposContributorsVar_sampFields';
  repoId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type GithubReposContributorsVarianceFields = {
  __typename?: 'GithubReposContributorsVarianceFields';
  repoId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type GithubReposDeleteAtPathInput = {
  languages?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type GithubReposDeleteElemInput = {
  languages?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type GithubReposDeleteKeyInput = {
  languages?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "github_repos" */
export type GithubReposIncInput = {
  forkCount?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  stars?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "github_repos" */
export type GithubReposInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  forkCount?: InputMaybe<Scalars['Int']['input']>;
  htmlUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  languages?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  stars?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type GithubReposMaxFields = {
  __typename?: 'GithubReposMaxFields';
  description?: Maybe<Scalars['String']['output']>;
  forkCount?: Maybe<Scalars['Int']['output']>;
  htmlUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  stars?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type GithubReposMinFields = {
  __typename?: 'GithubReposMinFields';
  description?: Maybe<Scalars['String']['output']>;
  forkCount?: Maybe<Scalars['Int']['output']>;
  htmlUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  stars?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "github_repos" */
export type GithubReposMutationResponse = {
  __typename?: 'GithubReposMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GithubRepos>;
};

/** input type for inserting object relation for remote table "github_repos" */
export type GithubReposObjRelInsertInput = {
  data: GithubReposInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<GithubReposOnConflict>;
};

/** on_conflict condition type for table "github_repos" */
export type GithubReposOnConflict = {
  constraint: GithubReposConstraint;
  update_columns?: Array<GithubReposUpdateColumn>;
  where?: InputMaybe<GithubReposBoolExp>;
};

/** Ordering options when selecting data from "github_repos". */
export type GithubReposOrderBy = {
  description?: InputMaybe<OrderBy>;
  forkCount?: InputMaybe<OrderBy>;
  htmlUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  languages?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  owner?: InputMaybe<OrderBy>;
  stars?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: github_repos */
export type GithubReposPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type GithubReposPrependInput = {
  languages?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "github_repos" */
export enum GithubReposSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  ForkCount = 'forkCount',
  /** column name */
  HtmlUrl = 'htmlUrl',
  /** column name */
  Id = 'id',
  /** column name */
  Languages = 'languages',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  Stars = 'stars',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "github_repos" */
export type GithubReposSetInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  forkCount?: InputMaybe<Scalars['Int']['input']>;
  htmlUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  languages?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  stars?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type GithubReposStddevFields = {
  __typename?: 'GithubReposStddevFields';
  forkCount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  stars?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type GithubReposStddev_PopFields = {
  __typename?: 'GithubReposStddev_popFields';
  forkCount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  stars?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type GithubReposStddev_SampFields = {
  __typename?: 'GithubReposStddev_sampFields';
  forkCount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  stars?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type GithubReposSumFields = {
  __typename?: 'GithubReposSumFields';
  forkCount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  stars?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "github_repos" */
export enum GithubReposUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  ForkCount = 'forkCount',
  /** column name */
  HtmlUrl = 'htmlUrl',
  /** column name */
  Id = 'id',
  /** column name */
  Languages = 'languages',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  Stars = 'stars',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type GithubReposUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<GithubReposAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<GithubReposDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<GithubReposDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<GithubReposDeleteKeyInput>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GithubReposIncInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<GithubReposPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GithubReposSetInput>;
  where: GithubReposBoolExp;
};

/** aggregate var_pop on columns */
export type GithubReposVar_PopFields = {
  __typename?: 'GithubReposVar_popFields';
  forkCount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  stars?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type GithubReposVar_SampFields = {
  __typename?: 'GithubReposVar_sampFields';
  forkCount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  stars?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type GithubReposVarianceFields = {
  __typename?: 'GithubReposVarianceFields';
  forkCount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  stars?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "github_users" */
export type GithubUsers = {
  __typename?: 'GithubUsers';
  avatarUrl: Scalars['String']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  htmlUrl: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  linkedin?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  login: Scalars['String']['output'];
  /** An array relationship */
  paymentRequests: Array<PaymentRequests>;
  /** An aggregate relationship */
  paymentRequestsAggregate: PaymentRequestsAggregate;
  telegram?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user?: Maybe<RegisteredUsers>;
  website?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "github_users" */
export type GithubUsersPaymentRequestsArgs = {
  distinctOn?: InputMaybe<Array<PaymentRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRequestsOrderBy>>;
  where?: InputMaybe<PaymentRequestsBoolExp>;
};


/** columns and relationships of "github_users" */
export type GithubUsersPaymentRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PaymentRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRequestsOrderBy>>;
  where?: InputMaybe<PaymentRequestsBoolExp>;
};

/** aggregated selection of "github_users" */
export type GithubUsersAggregate = {
  __typename?: 'GithubUsersAggregate';
  aggregate?: Maybe<GithubUsersAggregateFields>;
  nodes: Array<GithubUsers>;
};

/** aggregate fields of "github_users" */
export type GithubUsersAggregateFields = {
  __typename?: 'GithubUsersAggregateFields';
  avg?: Maybe<GithubUsersAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<GithubUsersMaxFields>;
  min?: Maybe<GithubUsersMinFields>;
  stddev?: Maybe<GithubUsersStddevFields>;
  stddevPop?: Maybe<GithubUsersStddev_PopFields>;
  stddevSamp?: Maybe<GithubUsersStddev_SampFields>;
  sum?: Maybe<GithubUsersSumFields>;
  varPop?: Maybe<GithubUsersVar_PopFields>;
  varSamp?: Maybe<GithubUsersVar_SampFields>;
  variance?: Maybe<GithubUsersVarianceFields>;
};


/** aggregate fields of "github_users" */
export type GithubUsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<GithubUsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type GithubUsersAvgFields = {
  __typename?: 'GithubUsersAvgFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "github_users". All fields are combined with a logical 'AND'. */
export type GithubUsersBoolExp = {
  _and?: InputMaybe<Array<GithubUsersBoolExp>>;
  _not?: InputMaybe<GithubUsersBoolExp>;
  _or?: InputMaybe<Array<GithubUsersBoolExp>>;
  avatarUrl?: InputMaybe<StringComparisonExp>;
  bio?: InputMaybe<StringComparisonExp>;
  htmlUrl?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  linkedin?: InputMaybe<StringComparisonExp>;
  location?: InputMaybe<StringComparisonExp>;
  login?: InputMaybe<StringComparisonExp>;
  paymentRequests?: InputMaybe<PaymentRequestsBoolExp>;
  paymentRequests_aggregate?: InputMaybe<Payment_Requests_Aggregate_Bool_Exp>;
  telegram?: InputMaybe<StringComparisonExp>;
  twitter?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<RegisteredUsersBoolExp>;
  website?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "github_users" */
export enum GithubUsersConstraint {
  /** unique or primary key constraint on columns "id" */
  GithubUsersPkey = 'github_users_pkey'
}

/** input type for incrementing numeric columns in table "github_users" */
export type GithubUsersIncInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "github_users" */
export type GithubUsersInsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  htmlUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  paymentRequests?: InputMaybe<PaymentRequestsArrRelInsertInput>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<RegisteredUsersObjRelInsertInput>;
  website?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type GithubUsersMaxFields = {
  __typename?: 'GithubUsersMaxFields';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  htmlUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  telegram?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type GithubUsersMinFields = {
  __typename?: 'GithubUsersMinFields';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  htmlUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  telegram?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "github_users" */
export type GithubUsersMutationResponse = {
  __typename?: 'GithubUsersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<GithubUsers>;
};

/** input type for inserting object relation for remote table "github_users" */
export type GithubUsersObjRelInsertInput = {
  data: GithubUsersInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<GithubUsersOnConflict>;
};

/** on_conflict condition type for table "github_users" */
export type GithubUsersOnConflict = {
  constraint: GithubUsersConstraint;
  update_columns?: Array<GithubUsersUpdateColumn>;
  where?: InputMaybe<GithubUsersBoolExp>;
};

/** Ordering options when selecting data from "github_users". */
export type GithubUsersOrderBy = {
  avatarUrl?: InputMaybe<OrderBy>;
  bio?: InputMaybe<OrderBy>;
  htmlUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  linkedin?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  login?: InputMaybe<OrderBy>;
  paymentRequestsAggregate?: InputMaybe<PaymentRequestsAggregateOrderBy>;
  telegram?: InputMaybe<OrderBy>;
  twitter?: InputMaybe<OrderBy>;
  user?: InputMaybe<RegisteredUsersOrderBy>;
  website?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: github_users */
export type GithubUsersPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "github_users" */
export enum GithubUsersSelectColumn {
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  Bio = 'bio',
  /** column name */
  HtmlUrl = 'htmlUrl',
  /** column name */
  Id = 'id',
  /** column name */
  Linkedin = 'linkedin',
  /** column name */
  Location = 'location',
  /** column name */
  Login = 'login',
  /** column name */
  Telegram = 'telegram',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "github_users" */
export type GithubUsersSetInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  htmlUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type GithubUsersStddevFields = {
  __typename?: 'GithubUsersStddevFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type GithubUsersStddev_PopFields = {
  __typename?: 'GithubUsersStddev_popFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type GithubUsersStddev_SampFields = {
  __typename?: 'GithubUsersStddev_sampFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type GithubUsersSumFields = {
  __typename?: 'GithubUsersSumFields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "github_users" */
export enum GithubUsersUpdateColumn {
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  Bio = 'bio',
  /** column name */
  HtmlUrl = 'htmlUrl',
  /** column name */
  Id = 'id',
  /** column name */
  Linkedin = 'linkedin',
  /** column name */
  Location = 'location',
  /** column name */
  Login = 'login',
  /** column name */
  Telegram = 'telegram',
  /** column name */
  Twitter = 'twitter',
  /** column name */
  Website = 'website'
}

export type GithubUsersUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GithubUsersIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GithubUsersSetInput>;
  where: GithubUsersBoolExp;
};

/** aggregate var_pop on columns */
export type GithubUsersVar_PopFields = {
  __typename?: 'GithubUsersVar_popFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type GithubUsersVar_SampFields = {
  __typename?: 'GithubUsersVar_sampFields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type GithubUsersVarianceFields = {
  __typename?: 'GithubUsersVarianceFields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type IdentityInput = {
  optCompany?: InputMaybe<CompanyIdentity>;
  optPerson?: InputMaybe<PersonIdentity>;
  type: IdentityType;
};

export enum IdentityType {
  Company = 'COMPANY',
  Person = 'PERSON'
}

/** columns and relationships of "ignored_github_issues" */
export type IgnoredGithubIssues = {
  __typename?: 'IgnoredGithubIssues';
  issueNumber: Scalars['bigint']['output'];
  projectId: Scalars['uuid']['output'];
  repoId: Scalars['bigint']['output'];
};

/** aggregated selection of "ignored_github_issues" */
export type IgnoredGithubIssuesAggregate = {
  __typename?: 'IgnoredGithubIssuesAggregate';
  aggregate?: Maybe<IgnoredGithubIssuesAggregateFields>;
  nodes: Array<IgnoredGithubIssues>;
};

/** aggregate fields of "ignored_github_issues" */
export type IgnoredGithubIssuesAggregateFields = {
  __typename?: 'IgnoredGithubIssuesAggregateFields';
  avg?: Maybe<IgnoredGithubIssuesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<IgnoredGithubIssuesMaxFields>;
  min?: Maybe<IgnoredGithubIssuesMinFields>;
  stddev?: Maybe<IgnoredGithubIssuesStddevFields>;
  stddevPop?: Maybe<IgnoredGithubIssuesStddev_PopFields>;
  stddevSamp?: Maybe<IgnoredGithubIssuesStddev_SampFields>;
  sum?: Maybe<IgnoredGithubIssuesSumFields>;
  varPop?: Maybe<IgnoredGithubIssuesVar_PopFields>;
  varSamp?: Maybe<IgnoredGithubIssuesVar_SampFields>;
  variance?: Maybe<IgnoredGithubIssuesVarianceFields>;
};


/** aggregate fields of "ignored_github_issues" */
export type IgnoredGithubIssuesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<IgnoredGithubIssuesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "ignored_github_issues" */
export type IgnoredGithubIssuesAggregateOrderBy = {
  avg?: InputMaybe<Ignored_Github_Issues_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Ignored_Github_Issues_Max_Order_By>;
  min?: InputMaybe<Ignored_Github_Issues_Min_Order_By>;
  stddev?: InputMaybe<Ignored_Github_Issues_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Ignored_Github_Issues_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Ignored_Github_Issues_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Ignored_Github_Issues_Sum_Order_By>;
  var_pop?: InputMaybe<Ignored_Github_Issues_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Ignored_Github_Issues_Var_Samp_Order_By>;
  variance?: InputMaybe<Ignored_Github_Issues_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ignored_github_issues" */
export type IgnoredGithubIssuesArrRelInsertInput = {
  data: Array<IgnoredGithubIssuesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<IgnoredGithubIssuesOnConflict>;
};

/** aggregate avg on columns */
export type IgnoredGithubIssuesAvgFields = {
  __typename?: 'IgnoredGithubIssuesAvgFields';
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "ignored_github_issues". All fields are combined with a logical 'AND'. */
export type IgnoredGithubIssuesBoolExp = {
  _and?: InputMaybe<Array<IgnoredGithubIssuesBoolExp>>;
  _not?: InputMaybe<IgnoredGithubIssuesBoolExp>;
  _or?: InputMaybe<Array<IgnoredGithubIssuesBoolExp>>;
  issueNumber?: InputMaybe<BigintComparisonExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  repoId?: InputMaybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "ignored_github_issues" */
export enum IgnoredGithubIssuesConstraint {
  /** unique or primary key constraint on columns "issue_number", "project_id", "repo_id" */
  IgnoredGithubIssuesPkey = 'ignored_github_issues_pkey'
}

/** input type for incrementing numeric columns in table "ignored_github_issues" */
export type IgnoredGithubIssuesIncInput = {
  issueNumber?: InputMaybe<Scalars['bigint']['input']>;
  repoId?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "ignored_github_issues" */
export type IgnoredGithubIssuesInsertInput = {
  issueNumber?: InputMaybe<Scalars['bigint']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  repoId?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type IgnoredGithubIssuesMaxFields = {
  __typename?: 'IgnoredGithubIssuesMaxFields';
  issueNumber?: Maybe<Scalars['bigint']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  repoId?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type IgnoredGithubIssuesMinFields = {
  __typename?: 'IgnoredGithubIssuesMinFields';
  issueNumber?: Maybe<Scalars['bigint']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  repoId?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "ignored_github_issues" */
export type IgnoredGithubIssuesMutationResponse = {
  __typename?: 'IgnoredGithubIssuesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<IgnoredGithubIssues>;
};

/** on_conflict condition type for table "ignored_github_issues" */
export type IgnoredGithubIssuesOnConflict = {
  constraint: IgnoredGithubIssuesConstraint;
  update_columns?: Array<IgnoredGithubIssuesUpdateColumn>;
  where?: InputMaybe<IgnoredGithubIssuesBoolExp>;
};

/** Ordering options when selecting data from "ignored_github_issues". */
export type IgnoredGithubIssuesOrderBy = {
  issueNumber?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: ignored_github_issues */
export type IgnoredGithubIssuesPkColumnsInput = {
  issueNumber: Scalars['bigint']['input'];
  projectId: Scalars['uuid']['input'];
  repoId: Scalars['bigint']['input'];
};

/** select columns of table "ignored_github_issues" */
export enum IgnoredGithubIssuesSelectColumn {
  /** column name */
  IssueNumber = 'issueNumber',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  RepoId = 'repoId'
}

/** input type for updating data in table "ignored_github_issues" */
export type IgnoredGithubIssuesSetInput = {
  issueNumber?: InputMaybe<Scalars['bigint']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  repoId?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type IgnoredGithubIssuesStddevFields = {
  __typename?: 'IgnoredGithubIssuesStddevFields';
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type IgnoredGithubIssuesStddev_PopFields = {
  __typename?: 'IgnoredGithubIssuesStddev_popFields';
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type IgnoredGithubIssuesStddev_SampFields = {
  __typename?: 'IgnoredGithubIssuesStddev_sampFields';
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type IgnoredGithubIssuesSumFields = {
  __typename?: 'IgnoredGithubIssuesSumFields';
  issueNumber?: Maybe<Scalars['bigint']['output']>;
  repoId?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "ignored_github_issues" */
export enum IgnoredGithubIssuesUpdateColumn {
  /** column name */
  IssueNumber = 'issueNumber',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  RepoId = 'repoId'
}

export type IgnoredGithubIssuesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<IgnoredGithubIssuesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<IgnoredGithubIssuesSetInput>;
  where: IgnoredGithubIssuesBoolExp;
};

/** aggregate var_pop on columns */
export type IgnoredGithubIssuesVar_PopFields = {
  __typename?: 'IgnoredGithubIssuesVar_popFields';
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type IgnoredGithubIssuesVar_SampFields = {
  __typename?: 'IgnoredGithubIssuesVar_sampFields';
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type IgnoredGithubIssuesVarianceFields = {
  __typename?: 'IgnoredGithubIssuesVarianceFields';
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

export type Information = {
  channel: Channel;
  contact: Scalars['String']['input'];
  public: Scalars['Boolean']['input'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Issue = {
  __typename?: 'Issue';
  author: User;
  closedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  createdAt: Scalars['DateTimeUtc']['output'];
  htmlUrl: Scalars['Url']['output'];
  id: Scalars['GithubIssueId']['output'];
  ignoredForProjects: Array<IgnoredGithubIssues>;
  ignoredForProjectsAggregate: IgnoredGithubIssuesAggregate;
  mergedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  number: Scalars['GithubIssueNumber']['output'];
  repoId: Scalars['GithubRepoId']['output'];
  status: Status;
  title: Scalars['String']['output'];
  type: Type;
  updatedAt: Scalars['DateTimeUtc']['output'];
};


export type IssueIgnoredForProjectsArgs = {
  distinctOn?: InputMaybe<Array<IgnoredGithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IgnoredGithubIssuesOrderBy>>;
  where?: InputMaybe<IgnoredGithubIssuesBoolExp>;
};


export type IssueIgnoredForProjectsAggregateArgs = {
  distinctOn?: InputMaybe<Array<IgnoredGithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IgnoredGithubIssuesOrderBy>>;
  where?: InputMaybe<IgnoredGithubIssuesBoolExp>;
};

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _containedIn?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _hasKey?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _hasKeysAll?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _hasKeysAny?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

export type Language = {
  name: Scalars['String']['input'];
  weight: Scalars['Int']['input'];
};

export type Location = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  postCode?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** columns and relationships of "onboardings" */
export type Onboardings = {
  __typename?: 'Onboardings';
  profileWizardDisplayDate?: Maybe<Scalars['timestamp']['output']>;
  termsAndConditionsAcceptanceDate?: Maybe<Scalars['timestamp']['output']>;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "onboardings" */
export type OnboardingsAggregate = {
  __typename?: 'OnboardingsAggregate';
  aggregate?: Maybe<OnboardingsAggregateFields>;
  nodes: Array<Onboardings>;
};

/** aggregate fields of "onboardings" */
export type OnboardingsAggregateFields = {
  __typename?: 'OnboardingsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<OnboardingsMaxFields>;
  min?: Maybe<OnboardingsMinFields>;
};


/** aggregate fields of "onboardings" */
export type OnboardingsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<OnboardingsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "onboardings". All fields are combined with a logical 'AND'. */
export type OnboardingsBoolExp = {
  _and?: InputMaybe<Array<OnboardingsBoolExp>>;
  _not?: InputMaybe<OnboardingsBoolExp>;
  _or?: InputMaybe<Array<OnboardingsBoolExp>>;
  profileWizardDisplayDate?: InputMaybe<TimestampComparisonExp>;
  termsAndConditionsAcceptanceDate?: InputMaybe<TimestampComparisonExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "onboardings" */
export enum OnboardingsConstraint {
  /** unique or primary key constraint on columns "user_id" */
  TermsAndConditionsAcceptancesPkey = 'terms_and_conditions_acceptances_pkey'
}

/** input type for inserting data into table "onboardings" */
export type OnboardingsInsertInput = {
  profileWizardDisplayDate?: InputMaybe<Scalars['timestamp']['input']>;
  termsAndConditionsAcceptanceDate?: InputMaybe<Scalars['timestamp']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type OnboardingsMaxFields = {
  __typename?: 'OnboardingsMaxFields';
  profileWizardDisplayDate?: Maybe<Scalars['timestamp']['output']>;
  termsAndConditionsAcceptanceDate?: Maybe<Scalars['timestamp']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type OnboardingsMinFields = {
  __typename?: 'OnboardingsMinFields';
  profileWizardDisplayDate?: Maybe<Scalars['timestamp']['output']>;
  termsAndConditionsAcceptanceDate?: Maybe<Scalars['timestamp']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "onboardings" */
export type OnboardingsMutationResponse = {
  __typename?: 'OnboardingsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Onboardings>;
};

/** on_conflict condition type for table "onboardings" */
export type OnboardingsOnConflict = {
  constraint: OnboardingsConstraint;
  update_columns?: Array<OnboardingsUpdateColumn>;
  where?: InputMaybe<OnboardingsBoolExp>;
};

/** Ordering options when selecting data from "onboardings". */
export type OnboardingsOrderBy = {
  profileWizardDisplayDate?: InputMaybe<OrderBy>;
  termsAndConditionsAcceptanceDate?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: onboardings */
export type OnboardingsPkColumnsInput = {
  userId: Scalars['uuid']['input'];
};

/** select columns of table "onboardings" */
export enum OnboardingsSelectColumn {
  /** column name */
  ProfileWizardDisplayDate = 'profileWizardDisplayDate',
  /** column name */
  TermsAndConditionsAcceptanceDate = 'termsAndConditionsAcceptanceDate',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "onboardings" */
export type OnboardingsSetInput = {
  profileWizardDisplayDate?: InputMaybe<Scalars['timestamp']['input']>;
  termsAndConditionsAcceptanceDate?: InputMaybe<Scalars['timestamp']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "onboardings" */
export enum OnboardingsUpdateColumn {
  /** column name */
  ProfileWizardDisplayDate = 'profileWizardDisplayDate',
  /** column name */
  TermsAndConditionsAcceptanceDate = 'termsAndConditionsAcceptanceDate',
  /** column name */
  UserId = 'userId'
}

export type OnboardingsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OnboardingsSetInput>;
  where: OnboardingsBoolExp;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Amount']['output'];
  budgetId: Scalars['Uuid']['output'];
  commandId: Scalars['Uuid']['output'];
  paymentId: Scalars['Uuid']['output'];
  projectId: Scalars['Uuid']['output'];
};

export type PaymentReference = {
  paymentId: Scalars['Uuid']['input'];
  projectId: Scalars['Uuid']['input'];
};

/** columns and relationships of "payment_requests" */
export type PaymentRequests = {
  __typename?: 'PaymentRequests';
  amountInUsd: Scalars['bigint']['output'];
  /** An object relationship */
  budget?: Maybe<Budgets>;
  budgetId: Scalars['uuid']['output'];
  /** An object relationship */
  githubRecipient?: Maybe<GithubUsers>;
  hoursWorked: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  invoiceReceivedAt?: Maybe<Scalars['timestamp']['output']>;
  liveGithubRecipient?: Maybe<User>;
  /** An array relationship */
  payments: Array<Payments>;
  /** An aggregate relationship */
  paymentsAggregate: PaymentsAggregate;
  /** An object relationship */
  recipient?: Maybe<RegisteredUsers>;
  recipientId: Scalars['bigint']['output'];
  requestedAt: Scalars['timestamp']['output'];
  /** An object relationship */
  requestor?: Maybe<RegisteredUsers>;
  requestorId: Scalars['uuid']['output'];
  /** An array relationship */
  workItems: Array<WorkItems>;
  /** An aggregate relationship */
  workItemsAggregate: WorkItemsAggregate;
};


/** columns and relationships of "payment_requests" */
export type PaymentRequestsPaymentsArgs = {
  distinctOn?: InputMaybe<Array<PaymentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
  where?: InputMaybe<PaymentsBoolExp>;
};


/** columns and relationships of "payment_requests" */
export type PaymentRequestsPaymentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PaymentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
  where?: InputMaybe<PaymentsBoolExp>;
};


/** columns and relationships of "payment_requests" */
export type PaymentRequestsWorkItemsArgs = {
  distinctOn?: InputMaybe<Array<WorkItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkItemsOrderBy>>;
  where?: InputMaybe<WorkItemsBoolExp>;
};


/** columns and relationships of "payment_requests" */
export type PaymentRequestsWorkItemsAggregateArgs = {
  distinctOn?: InputMaybe<Array<WorkItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkItemsOrderBy>>;
  where?: InputMaybe<WorkItemsBoolExp>;
};

/** aggregated selection of "payment_requests" */
export type PaymentRequestsAggregate = {
  __typename?: 'PaymentRequestsAggregate';
  aggregate?: Maybe<PaymentRequestsAggregateFields>;
  nodes: Array<PaymentRequests>;
};

/** aggregate fields of "payment_requests" */
export type PaymentRequestsAggregateFields = {
  __typename?: 'PaymentRequestsAggregateFields';
  avg?: Maybe<PaymentRequestsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<PaymentRequestsMaxFields>;
  min?: Maybe<PaymentRequestsMinFields>;
  stddev?: Maybe<PaymentRequestsStddevFields>;
  stddevPop?: Maybe<PaymentRequestsStddev_PopFields>;
  stddevSamp?: Maybe<PaymentRequestsStddev_SampFields>;
  sum?: Maybe<PaymentRequestsSumFields>;
  varPop?: Maybe<PaymentRequestsVar_PopFields>;
  varSamp?: Maybe<PaymentRequestsVar_SampFields>;
  variance?: Maybe<PaymentRequestsVarianceFields>;
};


/** aggregate fields of "payment_requests" */
export type PaymentRequestsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PaymentRequestsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "payment_requests" */
export type PaymentRequestsAggregateOrderBy = {
  avg?: InputMaybe<Payment_Requests_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Payment_Requests_Max_Order_By>;
  min?: InputMaybe<Payment_Requests_Min_Order_By>;
  stddev?: InputMaybe<Payment_Requests_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Payment_Requests_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Payment_Requests_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Payment_Requests_Sum_Order_By>;
  var_pop?: InputMaybe<Payment_Requests_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Payment_Requests_Var_Samp_Order_By>;
  variance?: InputMaybe<Payment_Requests_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "payment_requests" */
export type PaymentRequestsArrRelInsertInput = {
  data: Array<PaymentRequestsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PaymentRequestsOnConflict>;
};

/** aggregate avg on columns */
export type PaymentRequestsAvgFields = {
  __typename?: 'PaymentRequestsAvgFields';
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  hoursWorked?: Maybe<Scalars['Float']['output']>;
  recipientId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "payment_requests". All fields are combined with a logical 'AND'. */
export type PaymentRequestsBoolExp = {
  _and?: InputMaybe<Array<PaymentRequestsBoolExp>>;
  _not?: InputMaybe<PaymentRequestsBoolExp>;
  _or?: InputMaybe<Array<PaymentRequestsBoolExp>>;
  amountInUsd?: InputMaybe<BigintComparisonExp>;
  budget?: InputMaybe<BudgetsBoolExp>;
  budgetId?: InputMaybe<UuidComparisonExp>;
  githubRecipient?: InputMaybe<GithubUsersBoolExp>;
  hoursWorked?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  invoiceReceivedAt?: InputMaybe<TimestampComparisonExp>;
  payments?: InputMaybe<PaymentsBoolExp>;
  payments_aggregate?: InputMaybe<Payments_Aggregate_Bool_Exp>;
  recipient?: InputMaybe<RegisteredUsersBoolExp>;
  recipientId?: InputMaybe<BigintComparisonExp>;
  requestedAt?: InputMaybe<TimestampComparisonExp>;
  requestor?: InputMaybe<RegisteredUsersBoolExp>;
  requestorId?: InputMaybe<UuidComparisonExp>;
  workItems?: InputMaybe<WorkItemsBoolExp>;
  workItems_aggregate?: InputMaybe<Work_Items_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "payment_requests" */
export enum PaymentRequestsConstraint {
  /** unique or primary key constraint on columns "id" */
  PaymentRequestsPkey1 = 'payment_requests_pkey1'
}

/** input type for incrementing numeric columns in table "payment_requests" */
export type PaymentRequestsIncInput = {
  amountInUsd?: InputMaybe<Scalars['bigint']['input']>;
  hoursWorked?: InputMaybe<Scalars['Int']['input']>;
  recipientId?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "payment_requests" */
export type PaymentRequestsInsertInput = {
  amountInUsd?: InputMaybe<Scalars['bigint']['input']>;
  budget?: InputMaybe<BudgetsObjRelInsertInput>;
  budgetId?: InputMaybe<Scalars['uuid']['input']>;
  githubRecipient?: InputMaybe<GithubUsersObjRelInsertInput>;
  hoursWorked?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invoiceReceivedAt?: InputMaybe<Scalars['timestamp']['input']>;
  payments?: InputMaybe<PaymentsArrRelInsertInput>;
  recipient?: InputMaybe<RegisteredUsersObjRelInsertInput>;
  recipientId?: InputMaybe<Scalars['bigint']['input']>;
  requestedAt?: InputMaybe<Scalars['timestamp']['input']>;
  requestor?: InputMaybe<RegisteredUsersObjRelInsertInput>;
  requestorId?: InputMaybe<Scalars['uuid']['input']>;
  workItems?: InputMaybe<WorkItemsArrRelInsertInput>;
};

/** aggregate max on columns */
export type PaymentRequestsMaxFields = {
  __typename?: 'PaymentRequestsMaxFields';
  amountInUsd?: Maybe<Scalars['bigint']['output']>;
  budgetId?: Maybe<Scalars['uuid']['output']>;
  hoursWorked?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  invoiceReceivedAt?: Maybe<Scalars['timestamp']['output']>;
  recipientId?: Maybe<Scalars['bigint']['output']>;
  requestedAt?: Maybe<Scalars['timestamp']['output']>;
  requestorId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type PaymentRequestsMinFields = {
  __typename?: 'PaymentRequestsMinFields';
  amountInUsd?: Maybe<Scalars['bigint']['output']>;
  budgetId?: Maybe<Scalars['uuid']['output']>;
  hoursWorked?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  invoiceReceivedAt?: Maybe<Scalars['timestamp']['output']>;
  recipientId?: Maybe<Scalars['bigint']['output']>;
  requestedAt?: Maybe<Scalars['timestamp']['output']>;
  requestorId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "payment_requests" */
export type PaymentRequestsMutationResponse = {
  __typename?: 'PaymentRequestsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<PaymentRequests>;
};

/** input type for inserting object relation for remote table "payment_requests" */
export type PaymentRequestsObjRelInsertInput = {
  data: PaymentRequestsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PaymentRequestsOnConflict>;
};

/** on_conflict condition type for table "payment_requests" */
export type PaymentRequestsOnConflict = {
  constraint: PaymentRequestsConstraint;
  update_columns?: Array<PaymentRequestsUpdateColumn>;
  where?: InputMaybe<PaymentRequestsBoolExp>;
};

/** Ordering options when selecting data from "payment_requests". */
export type PaymentRequestsOrderBy = {
  amountInUsd?: InputMaybe<OrderBy>;
  budget?: InputMaybe<BudgetsOrderBy>;
  budgetId?: InputMaybe<OrderBy>;
  githubRecipient?: InputMaybe<GithubUsersOrderBy>;
  hoursWorked?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  invoiceReceivedAt?: InputMaybe<OrderBy>;
  paymentsAggregate?: InputMaybe<PaymentsAggregateOrderBy>;
  recipient?: InputMaybe<RegisteredUsersOrderBy>;
  recipientId?: InputMaybe<OrderBy>;
  requestedAt?: InputMaybe<OrderBy>;
  requestor?: InputMaybe<RegisteredUsersOrderBy>;
  requestorId?: InputMaybe<OrderBy>;
  workItemsAggregate?: InputMaybe<WorkItemsAggregateOrderBy>;
};

/** primary key columns input for table: payment_requests */
export type PaymentRequestsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "payment_requests" */
export enum PaymentRequestsSelectColumn {
  /** column name */
  AmountInUsd = 'amountInUsd',
  /** column name */
  BudgetId = 'budgetId',
  /** column name */
  HoursWorked = 'hoursWorked',
  /** column name */
  Id = 'id',
  /** column name */
  InvoiceReceivedAt = 'invoiceReceivedAt',
  /** column name */
  RecipientId = 'recipientId',
  /** column name */
  RequestedAt = 'requestedAt',
  /** column name */
  RequestorId = 'requestorId'
}

/** input type for updating data in table "payment_requests" */
export type PaymentRequestsSetInput = {
  amountInUsd?: InputMaybe<Scalars['bigint']['input']>;
  budgetId?: InputMaybe<Scalars['uuid']['input']>;
  hoursWorked?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invoiceReceivedAt?: InputMaybe<Scalars['timestamp']['input']>;
  recipientId?: InputMaybe<Scalars['bigint']['input']>;
  requestedAt?: InputMaybe<Scalars['timestamp']['input']>;
  requestorId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type PaymentRequestsStddevFields = {
  __typename?: 'PaymentRequestsStddevFields';
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  hoursWorked?: Maybe<Scalars['Float']['output']>;
  recipientId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type PaymentRequestsStddev_PopFields = {
  __typename?: 'PaymentRequestsStddev_popFields';
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  hoursWorked?: Maybe<Scalars['Float']['output']>;
  recipientId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type PaymentRequestsStddev_SampFields = {
  __typename?: 'PaymentRequestsStddev_sampFields';
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  hoursWorked?: Maybe<Scalars['Float']['output']>;
  recipientId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type PaymentRequestsSumFields = {
  __typename?: 'PaymentRequestsSumFields';
  amountInUsd?: Maybe<Scalars['bigint']['output']>;
  hoursWorked?: Maybe<Scalars['Int']['output']>;
  recipientId?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "payment_requests" */
export enum PaymentRequestsUpdateColumn {
  /** column name */
  AmountInUsd = 'amountInUsd',
  /** column name */
  BudgetId = 'budgetId',
  /** column name */
  HoursWorked = 'hoursWorked',
  /** column name */
  Id = 'id',
  /** column name */
  InvoiceReceivedAt = 'invoiceReceivedAt',
  /** column name */
  RecipientId = 'recipientId',
  /** column name */
  RequestedAt = 'requestedAt',
  /** column name */
  RequestorId = 'requestorId'
}

export type PaymentRequestsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PaymentRequestsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PaymentRequestsSetInput>;
  where: PaymentRequestsBoolExp;
};

/** aggregate var_pop on columns */
export type PaymentRequestsVar_PopFields = {
  __typename?: 'PaymentRequestsVar_popFields';
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  hoursWorked?: Maybe<Scalars['Float']['output']>;
  recipientId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type PaymentRequestsVar_SampFields = {
  __typename?: 'PaymentRequestsVar_sampFields';
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  hoursWorked?: Maybe<Scalars['Float']['output']>;
  recipientId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type PaymentRequestsVarianceFields = {
  __typename?: 'PaymentRequestsVarianceFields';
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  hoursWorked?: Maybe<Scalars['Float']['output']>;
  recipientId?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "payment_stats" */
export type PaymentStats = {
  __typename?: 'PaymentStats';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  moneyGranted?: Maybe<Scalars['numeric']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "payment_stats" */
export type PaymentStatsAggregate = {
  __typename?: 'PaymentStatsAggregate';
  aggregate?: Maybe<PaymentStatsAggregateFields>;
  nodes: Array<PaymentStats>;
};

/** aggregate fields of "payment_stats" */
export type PaymentStatsAggregateFields = {
  __typename?: 'PaymentStatsAggregateFields';
  avg?: Maybe<PaymentStatsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<PaymentStatsMaxFields>;
  min?: Maybe<PaymentStatsMinFields>;
  stddev?: Maybe<PaymentStatsStddevFields>;
  stddevPop?: Maybe<PaymentStatsStddev_PopFields>;
  stddevSamp?: Maybe<PaymentStatsStddev_SampFields>;
  sum?: Maybe<PaymentStatsSumFields>;
  varPop?: Maybe<PaymentStatsVar_PopFields>;
  varSamp?: Maybe<PaymentStatsVar_SampFields>;
  variance?: Maybe<PaymentStatsVarianceFields>;
};


/** aggregate fields of "payment_stats" */
export type PaymentStatsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PaymentStatsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "payment_stats" */
export type PaymentStatsAggregateOrderBy = {
  avg?: InputMaybe<Payment_Stats_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Payment_Stats_Max_Order_By>;
  min?: InputMaybe<Payment_Stats_Min_Order_By>;
  stddev?: InputMaybe<Payment_Stats_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Payment_Stats_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Payment_Stats_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Payment_Stats_Sum_Order_By>;
  var_pop?: InputMaybe<Payment_Stats_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Payment_Stats_Var_Samp_Order_By>;
  variance?: InputMaybe<Payment_Stats_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "payment_stats" */
export type PaymentStatsArrRelInsertInput = {
  data: Array<PaymentStatsInsertInput>;
};

/** aggregate avg on columns */
export type PaymentStatsAvgFields = {
  __typename?: 'PaymentStatsAvgFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  moneyGranted?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "payment_stats". All fields are combined with a logical 'AND'. */
export type PaymentStatsBoolExp = {
  _and?: InputMaybe<Array<PaymentStatsBoolExp>>;
  _not?: InputMaybe<PaymentStatsBoolExp>;
  _or?: InputMaybe<Array<PaymentStatsBoolExp>>;
  githubUserId?: InputMaybe<BigintComparisonExp>;
  moneyGranted?: InputMaybe<NumericComparisonExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
};

/** input type for inserting data into table "payment_stats" */
export type PaymentStatsInsertInput = {
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  moneyGranted?: InputMaybe<Scalars['numeric']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type PaymentStatsMaxFields = {
  __typename?: 'PaymentStatsMaxFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  moneyGranted?: Maybe<Scalars['numeric']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type PaymentStatsMinFields = {
  __typename?: 'PaymentStatsMinFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  moneyGranted?: Maybe<Scalars['numeric']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** Ordering options when selecting data from "payment_stats". */
export type PaymentStatsOrderBy = {
  githubUserId?: InputMaybe<OrderBy>;
  moneyGranted?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
};

/** select columns of table "payment_stats" */
export enum PaymentStatsSelectColumn {
  /** column name */
  GithubUserId = 'githubUserId',
  /** column name */
  MoneyGranted = 'moneyGranted',
  /** column name */
  ProjectId = 'projectId'
}

/** aggregate stddev on columns */
export type PaymentStatsStddevFields = {
  __typename?: 'PaymentStatsStddevFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  moneyGranted?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type PaymentStatsStddev_PopFields = {
  __typename?: 'PaymentStatsStddev_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  moneyGranted?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type PaymentStatsStddev_SampFields = {
  __typename?: 'PaymentStatsStddev_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  moneyGranted?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type PaymentStatsSumFields = {
  __typename?: 'PaymentStatsSumFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  moneyGranted?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type PaymentStatsVar_PopFields = {
  __typename?: 'PaymentStatsVar_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  moneyGranted?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type PaymentStatsVar_SampFields = {
  __typename?: 'PaymentStatsVar_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  moneyGranted?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type PaymentStatsVarianceFields = {
  __typename?: 'PaymentStatsVarianceFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  moneyGranted?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "payments" */
export type Payments = {
  __typename?: 'Payments';
  amount: Scalars['numeric']['output'];
  currencyCode: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  paymentRequest?: Maybe<PaymentRequests>;
  processedAt: Scalars['timestamp']['output'];
  receipt: Scalars['jsonb']['output'];
  requestId: Scalars['uuid']['output'];
};


/** columns and relationships of "payments" */
export type PaymentsReceiptArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "payments" */
export type PaymentsAggregate = {
  __typename?: 'PaymentsAggregate';
  aggregate?: Maybe<PaymentsAggregateFields>;
  nodes: Array<Payments>;
};

/** aggregate fields of "payments" */
export type PaymentsAggregateFields = {
  __typename?: 'PaymentsAggregateFields';
  avg?: Maybe<PaymentsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<PaymentsMaxFields>;
  min?: Maybe<PaymentsMinFields>;
  stddev?: Maybe<PaymentsStddevFields>;
  stddevPop?: Maybe<PaymentsStddev_PopFields>;
  stddevSamp?: Maybe<PaymentsStddev_SampFields>;
  sum?: Maybe<PaymentsSumFields>;
  varPop?: Maybe<PaymentsVar_PopFields>;
  varSamp?: Maybe<PaymentsVar_SampFields>;
  variance?: Maybe<PaymentsVarianceFields>;
};


/** aggregate fields of "payments" */
export type PaymentsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PaymentsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "payments" */
export type PaymentsAggregateOrderBy = {
  avg?: InputMaybe<Payments_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Payments_Max_Order_By>;
  min?: InputMaybe<Payments_Min_Order_By>;
  stddev?: InputMaybe<Payments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Payments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Payments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Payments_Sum_Order_By>;
  var_pop?: InputMaybe<Payments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Payments_Var_Samp_Order_By>;
  variance?: InputMaybe<Payments_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type PaymentsAppendInput = {
  receipt?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "payments" */
export type PaymentsArrRelInsertInput = {
  data: Array<PaymentsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PaymentsOnConflict>;
};

/** aggregate avg on columns */
export type PaymentsAvgFields = {
  __typename?: 'PaymentsAvgFields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "payments". All fields are combined with a logical 'AND'. */
export type PaymentsBoolExp = {
  _and?: InputMaybe<Array<PaymentsBoolExp>>;
  _not?: InputMaybe<PaymentsBoolExp>;
  _or?: InputMaybe<Array<PaymentsBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  currencyCode?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  paymentRequest?: InputMaybe<PaymentRequestsBoolExp>;
  processedAt?: InputMaybe<TimestampComparisonExp>;
  receipt?: InputMaybe<JsonbComparisonExp>;
  requestId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "payments" */
export enum PaymentsConstraint {
  /** unique or primary key constraint on columns "id" */
  PaymentsPkey = 'payments_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type PaymentsDeleteAtPathInput = {
  receipt?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type PaymentsDeleteElemInput = {
  receipt?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type PaymentsDeleteKeyInput = {
  receipt?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "payments" */
export type PaymentsIncInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "payments" */
export type PaymentsInsertInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  paymentRequest?: InputMaybe<PaymentRequestsObjRelInsertInput>;
  processedAt?: InputMaybe<Scalars['timestamp']['input']>;
  receipt?: InputMaybe<Scalars['jsonb']['input']>;
  requestId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type PaymentsMaxFields = {
  __typename?: 'PaymentsMaxFields';
  amount?: Maybe<Scalars['numeric']['output']>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  processedAt?: Maybe<Scalars['timestamp']['output']>;
  requestId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type PaymentsMinFields = {
  __typename?: 'PaymentsMinFields';
  amount?: Maybe<Scalars['numeric']['output']>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  processedAt?: Maybe<Scalars['timestamp']['output']>;
  requestId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "payments" */
export type PaymentsMutationResponse = {
  __typename?: 'PaymentsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Payments>;
};

/** on_conflict condition type for table "payments" */
export type PaymentsOnConflict = {
  constraint: PaymentsConstraint;
  update_columns?: Array<PaymentsUpdateColumn>;
  where?: InputMaybe<PaymentsBoolExp>;
};

/** Ordering options when selecting data from "payments". */
export type PaymentsOrderBy = {
  amount?: InputMaybe<OrderBy>;
  currencyCode?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  paymentRequest?: InputMaybe<PaymentRequestsOrderBy>;
  processedAt?: InputMaybe<OrderBy>;
  receipt?: InputMaybe<OrderBy>;
  requestId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: payments */
export type PaymentsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type PaymentsPrependInput = {
  receipt?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "payments" */
export enum PaymentsSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  CurrencyCode = 'currencyCode',
  /** column name */
  Id = 'id',
  /** column name */
  ProcessedAt = 'processedAt',
  /** column name */
  Receipt = 'receipt',
  /** column name */
  RequestId = 'requestId'
}

/** input type for updating data in table "payments" */
export type PaymentsSetInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  processedAt?: InputMaybe<Scalars['timestamp']['input']>;
  receipt?: InputMaybe<Scalars['jsonb']['input']>;
  requestId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type PaymentsStddevFields = {
  __typename?: 'PaymentsStddevFields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type PaymentsStddev_PopFields = {
  __typename?: 'PaymentsStddev_popFields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type PaymentsStddev_SampFields = {
  __typename?: 'PaymentsStddev_sampFields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type PaymentsSumFields = {
  __typename?: 'PaymentsSumFields';
  amount?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "payments" */
export enum PaymentsUpdateColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  CurrencyCode = 'currencyCode',
  /** column name */
  Id = 'id',
  /** column name */
  ProcessedAt = 'processedAt',
  /** column name */
  Receipt = 'receipt',
  /** column name */
  RequestId = 'requestId'
}

export type PaymentsUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<PaymentsAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<PaymentsDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<PaymentsDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<PaymentsDeleteKeyInput>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PaymentsIncInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<PaymentsPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PaymentsSetInput>;
  where: PaymentsBoolExp;
};

/** aggregate var_pop on columns */
export type PaymentsVar_PopFields = {
  __typename?: 'PaymentsVar_popFields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type PaymentsVar_SampFields = {
  __typename?: 'PaymentsVar_sampFields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type PaymentsVarianceFields = {
  __typename?: 'PaymentsVarianceFields';
  amount?: Maybe<Scalars['Float']['output']>;
};

export type PayoutSettingsInput = {
  optBankAddress?: InputMaybe<BankAddress>;
  optEthAddress?: InputMaybe<Scalars['EthereumAddress']['input']>;
  optEthName?: InputMaybe<Scalars['EthereumName']['input']>;
  type: PayoutSettingsType;
};

export enum PayoutSettingsType {
  BankAddress = 'BANK_ADDRESS',
  EthereumAddress = 'ETHEREUM_ADDRESS',
  EthereumName = 'ETHEREUM_NAME'
}

/** columns and relationships of "pending_project_leader_invitations" */
export type PendingProjectLeaderInvitations = {
  __typename?: 'PendingProjectLeaderInvitations';
  githubUserId: Scalars['bigint']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  project?: Maybe<Projects>;
  projectId: Scalars['uuid']['output'];
  /** An object relationship */
  user?: Maybe<RegisteredUsers>;
};

/** aggregated selection of "pending_project_leader_invitations" */
export type PendingProjectLeaderInvitationsAggregate = {
  __typename?: 'PendingProjectLeaderInvitationsAggregate';
  aggregate?: Maybe<PendingProjectLeaderInvitationsAggregateFields>;
  nodes: Array<PendingProjectLeaderInvitations>;
};

/** aggregate fields of "pending_project_leader_invitations" */
export type PendingProjectLeaderInvitationsAggregateFields = {
  __typename?: 'PendingProjectLeaderInvitationsAggregateFields';
  avg?: Maybe<PendingProjectLeaderInvitationsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<PendingProjectLeaderInvitationsMaxFields>;
  min?: Maybe<PendingProjectLeaderInvitationsMinFields>;
  stddev?: Maybe<PendingProjectLeaderInvitationsStddevFields>;
  stddevPop?: Maybe<PendingProjectLeaderInvitationsStddev_PopFields>;
  stddevSamp?: Maybe<PendingProjectLeaderInvitationsStddev_SampFields>;
  sum?: Maybe<PendingProjectLeaderInvitationsSumFields>;
  varPop?: Maybe<PendingProjectLeaderInvitationsVar_PopFields>;
  varSamp?: Maybe<PendingProjectLeaderInvitationsVar_SampFields>;
  variance?: Maybe<PendingProjectLeaderInvitationsVarianceFields>;
};


/** aggregate fields of "pending_project_leader_invitations" */
export type PendingProjectLeaderInvitationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PendingProjectLeaderInvitationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "pending_project_leader_invitations" */
export type PendingProjectLeaderInvitationsAggregateOrderBy = {
  avg?: InputMaybe<Pending_Project_Leader_Invitations_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Pending_Project_Leader_Invitations_Max_Order_By>;
  min?: InputMaybe<Pending_Project_Leader_Invitations_Min_Order_By>;
  stddev?: InputMaybe<Pending_Project_Leader_Invitations_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pending_Project_Leader_Invitations_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pending_Project_Leader_Invitations_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pending_Project_Leader_Invitations_Sum_Order_By>;
  var_pop?: InputMaybe<Pending_Project_Leader_Invitations_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pending_Project_Leader_Invitations_Var_Samp_Order_By>;
  variance?: InputMaybe<Pending_Project_Leader_Invitations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pending_project_leader_invitations" */
export type PendingProjectLeaderInvitationsArrRelInsertInput = {
  data: Array<PendingProjectLeaderInvitationsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PendingProjectLeaderInvitationsOnConflict>;
};

/** aggregate avg on columns */
export type PendingProjectLeaderInvitationsAvgFields = {
  __typename?: 'PendingProjectLeaderInvitationsAvgFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "pending_project_leader_invitations". All fields are combined with a logical 'AND'. */
export type PendingProjectLeaderInvitationsBoolExp = {
  _and?: InputMaybe<Array<PendingProjectLeaderInvitationsBoolExp>>;
  _not?: InputMaybe<PendingProjectLeaderInvitationsBoolExp>;
  _or?: InputMaybe<Array<PendingProjectLeaderInvitationsBoolExp>>;
  githubUserId?: InputMaybe<BigintComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  project?: InputMaybe<ProjectsBoolExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<RegisteredUsersBoolExp>;
};

/** unique or primary key constraints on table "pending_project_leader_invitations" */
export enum PendingProjectLeaderInvitationsConstraint {
  /** unique or primary key constraint on columns "project_id", "github_user_id" */
  PendingProjectLeaderInvitationGithubUserIdProjectIdIdx = 'pending_project_leader_invitation_github_user_id_project_id_idx',
  /** unique or primary key constraint on columns "project_id", "github_user_id" */
  PendingProjectLeaderInvitationProjectIdGithubUserIdKey = 'pending_project_leader_invitation_project_id_github_user_id_key',
  /** unique or primary key constraint on columns "id" */
  PendingProjectLeaderInvitationsPkey = 'pending_project_leader_invitations_pkey'
}

/** input type for incrementing numeric columns in table "pending_project_leader_invitations" */
export type PendingProjectLeaderInvitationsIncInput = {
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "pending_project_leader_invitations" */
export type PendingProjectLeaderInvitationsInsertInput = {
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  project?: InputMaybe<ProjectsObjRelInsertInput>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<RegisteredUsersObjRelInsertInput>;
};

/** aggregate max on columns */
export type PendingProjectLeaderInvitationsMaxFields = {
  __typename?: 'PendingProjectLeaderInvitationsMaxFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type PendingProjectLeaderInvitationsMinFields = {
  __typename?: 'PendingProjectLeaderInvitationsMinFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "pending_project_leader_invitations" */
export type PendingProjectLeaderInvitationsMutationResponse = {
  __typename?: 'PendingProjectLeaderInvitationsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<PendingProjectLeaderInvitations>;
};

/** on_conflict condition type for table "pending_project_leader_invitations" */
export type PendingProjectLeaderInvitationsOnConflict = {
  constraint: PendingProjectLeaderInvitationsConstraint;
  update_columns?: Array<PendingProjectLeaderInvitationsUpdateColumn>;
  where?: InputMaybe<PendingProjectLeaderInvitationsBoolExp>;
};

/** Ordering options when selecting data from "pending_project_leader_invitations". */
export type PendingProjectLeaderInvitationsOrderBy = {
  githubUserId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  project?: InputMaybe<ProjectsOrderBy>;
  projectId?: InputMaybe<OrderBy>;
  user?: InputMaybe<RegisteredUsersOrderBy>;
};

/** primary key columns input for table: pending_project_leader_invitations */
export type PendingProjectLeaderInvitationsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "pending_project_leader_invitations" */
export enum PendingProjectLeaderInvitationsSelectColumn {
  /** column name */
  GithubUserId = 'githubUserId',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'projectId'
}

/** input type for updating data in table "pending_project_leader_invitations" */
export type PendingProjectLeaderInvitationsSetInput = {
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type PendingProjectLeaderInvitationsStddevFields = {
  __typename?: 'PendingProjectLeaderInvitationsStddevFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type PendingProjectLeaderInvitationsStddev_PopFields = {
  __typename?: 'PendingProjectLeaderInvitationsStddev_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type PendingProjectLeaderInvitationsStddev_SampFields = {
  __typename?: 'PendingProjectLeaderInvitationsStddev_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type PendingProjectLeaderInvitationsSumFields = {
  __typename?: 'PendingProjectLeaderInvitationsSumFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "pending_project_leader_invitations" */
export enum PendingProjectLeaderInvitationsUpdateColumn {
  /** column name */
  GithubUserId = 'githubUserId',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'projectId'
}

export type PendingProjectLeaderInvitationsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PendingProjectLeaderInvitationsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PendingProjectLeaderInvitationsSetInput>;
  where: PendingProjectLeaderInvitationsBoolExp;
};

/** aggregate var_pop on columns */
export type PendingProjectLeaderInvitationsVar_PopFields = {
  __typename?: 'PendingProjectLeaderInvitationsVar_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type PendingProjectLeaderInvitationsVar_SampFields = {
  __typename?: 'PendingProjectLeaderInvitationsVar_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type PendingProjectLeaderInvitationsVarianceFields = {
  __typename?: 'PendingProjectLeaderInvitationsVarianceFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

export type PersonIdentity = {
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
};

export enum ProfileCover {
  Blue = 'BLUE',
  Cyan = 'CYAN',
  Magenta = 'MAGENTA',
  Yellow = 'YELLOW'
}

/** Boolean expression to compare columns of type "profile_cover". All fields are combined with logical 'AND'. */
export type ProfileCoverComparisonExp = {
  _eq?: InputMaybe<Scalars['profile_cover']['input']>;
  _gt?: InputMaybe<Scalars['profile_cover']['input']>;
  _gte?: InputMaybe<Scalars['profile_cover']['input']>;
  _in?: InputMaybe<Array<Scalars['profile_cover']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['profile_cover']['input']>;
  _lte?: InputMaybe<Scalars['profile_cover']['input']>;
  _neq?: InputMaybe<Scalars['profile_cover']['input']>;
  _nin?: InputMaybe<Array<Scalars['profile_cover']['input']>>;
};

/** columns and relationships of "project_details" */
export type ProjectDetails = {
  __typename?: 'ProjectDetails';
  hiring: Scalars['Boolean']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  longDescription: Scalars['String']['output'];
  name: Scalars['String']['output'];
  projectId: Scalars['uuid']['output'];
  rank: Scalars['Int']['output'];
  shortDescription: Scalars['String']['output'];
  telegramLink?: Maybe<Scalars['String']['output']>;
  visibility: Scalars['project_visibility']['output'];
};

/** aggregated selection of "project_details" */
export type ProjectDetailsAggregate = {
  __typename?: 'ProjectDetailsAggregate';
  aggregate?: Maybe<ProjectDetailsAggregateFields>;
  nodes: Array<ProjectDetails>;
};

/** aggregate fields of "project_details" */
export type ProjectDetailsAggregateFields = {
  __typename?: 'ProjectDetailsAggregateFields';
  avg?: Maybe<ProjectDetailsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ProjectDetailsMaxFields>;
  min?: Maybe<ProjectDetailsMinFields>;
  stddev?: Maybe<ProjectDetailsStddevFields>;
  stddevPop?: Maybe<ProjectDetailsStddev_PopFields>;
  stddevSamp?: Maybe<ProjectDetailsStddev_SampFields>;
  sum?: Maybe<ProjectDetailsSumFields>;
  varPop?: Maybe<ProjectDetailsVar_PopFields>;
  varSamp?: Maybe<ProjectDetailsVar_SampFields>;
  variance?: Maybe<ProjectDetailsVarianceFields>;
};


/** aggregate fields of "project_details" */
export type ProjectDetailsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectDetailsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type ProjectDetailsAvgFields = {
  __typename?: 'ProjectDetailsAvgFields';
  rank?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "project_details". All fields are combined with a logical 'AND'. */
export type ProjectDetailsBoolExp = {
  _and?: InputMaybe<Array<ProjectDetailsBoolExp>>;
  _not?: InputMaybe<ProjectDetailsBoolExp>;
  _or?: InputMaybe<Array<ProjectDetailsBoolExp>>;
  hiring?: InputMaybe<BooleanComparisonExp>;
  logoUrl?: InputMaybe<StringComparisonExp>;
  longDescription?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  rank?: InputMaybe<IntComparisonExp>;
  shortDescription?: InputMaybe<StringComparisonExp>;
  telegramLink?: InputMaybe<StringComparisonExp>;
  visibility?: InputMaybe<ProjectVisibilityComparisonExp>;
};

/** unique or primary key constraints on table "project_details" */
export enum ProjectDetailsConstraint {
  /** unique or primary key constraint on columns "project_id" */
  ProjectDetailsPkey = 'project_details_pkey'
}

/** input type for incrementing numeric columns in table "project_details" */
export type ProjectDetailsIncInput = {
  rank?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "project_details" */
export type ProjectDetailsInsertInput = {
  hiring?: InputMaybe<Scalars['Boolean']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  telegramLink?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['project_visibility']['input']>;
};

/** aggregate max on columns */
export type ProjectDetailsMaxFields = {
  __typename?: 'ProjectDetailsMaxFields';
  logoUrl?: Maybe<Scalars['String']['output']>;
  longDescription?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  telegramLink?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Scalars['project_visibility']['output']>;
};

/** aggregate min on columns */
export type ProjectDetailsMinFields = {
  __typename?: 'ProjectDetailsMinFields';
  logoUrl?: Maybe<Scalars['String']['output']>;
  longDescription?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  telegramLink?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Scalars['project_visibility']['output']>;
};

/** response of any mutation on the table "project_details" */
export type ProjectDetailsMutationResponse = {
  __typename?: 'ProjectDetailsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ProjectDetails>;
};

/** input type for inserting object relation for remote table "project_details" */
export type ProjectDetailsObjRelInsertInput = {
  data: ProjectDetailsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ProjectDetailsOnConflict>;
};

/** on_conflict condition type for table "project_details" */
export type ProjectDetailsOnConflict = {
  constraint: ProjectDetailsConstraint;
  update_columns?: Array<ProjectDetailsUpdateColumn>;
  where?: InputMaybe<ProjectDetailsBoolExp>;
};

/** Ordering options when selecting data from "project_details". */
export type ProjectDetailsOrderBy = {
  hiring?: InputMaybe<OrderBy>;
  logoUrl?: InputMaybe<OrderBy>;
  longDescription?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  rank?: InputMaybe<OrderBy>;
  shortDescription?: InputMaybe<OrderBy>;
  telegramLink?: InputMaybe<OrderBy>;
  visibility?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: project_details */
export type ProjectDetailsPkColumnsInput = {
  projectId: Scalars['uuid']['input'];
};

/** select columns of table "project_details" */
export enum ProjectDetailsSelectColumn {
  /** column name */
  Hiring = 'hiring',
  /** column name */
  LogoUrl = 'logoUrl',
  /** column name */
  LongDescription = 'longDescription',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  Rank = 'rank',
  /** column name */
  ShortDescription = 'shortDescription',
  /** column name */
  TelegramLink = 'telegramLink',
  /** column name */
  Visibility = 'visibility'
}

/** input type for updating data in table "project_details" */
export type ProjectDetailsSetInput = {
  hiring?: InputMaybe<Scalars['Boolean']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  telegramLink?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['project_visibility']['input']>;
};

/** aggregate stddev on columns */
export type ProjectDetailsStddevFields = {
  __typename?: 'ProjectDetailsStddevFields';
  rank?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type ProjectDetailsStddev_PopFields = {
  __typename?: 'ProjectDetailsStddev_popFields';
  rank?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type ProjectDetailsStddev_SampFields = {
  __typename?: 'ProjectDetailsStddev_sampFields';
  rank?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type ProjectDetailsSumFields = {
  __typename?: 'ProjectDetailsSumFields';
  rank?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "project_details" */
export enum ProjectDetailsUpdateColumn {
  /** column name */
  Hiring = 'hiring',
  /** column name */
  LogoUrl = 'logoUrl',
  /** column name */
  LongDescription = 'longDescription',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  Rank = 'rank',
  /** column name */
  ShortDescription = 'shortDescription',
  /** column name */
  TelegramLink = 'telegramLink',
  /** column name */
  Visibility = 'visibility'
}

export type ProjectDetailsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ProjectDetailsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectDetailsSetInput>;
  where: ProjectDetailsBoolExp;
};

/** aggregate var_pop on columns */
export type ProjectDetailsVar_PopFields = {
  __typename?: 'ProjectDetailsVar_popFields';
  rank?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type ProjectDetailsVar_SampFields = {
  __typename?: 'ProjectDetailsVar_sampFields';
  rank?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type ProjectDetailsVarianceFields = {
  __typename?: 'ProjectDetailsVarianceFields';
  rank?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "project_github_repos" */
export type ProjectGithubRepos = {
  __typename?: 'ProjectGithubRepos';
  githubRepoId: Scalars['bigint']['output'];
  /** An object relationship */
  project?: Maybe<Projects>;
  projectId: Scalars['uuid']['output'];
  /** An object relationship */
  repo?: Maybe<GithubRepos>;
  /** An array relationship */
  repoContributors: Array<GithubReposContributors>;
  /** An aggregate relationship */
  repoContributorsAggregate: GithubReposContributorsAggregate;
  /** An array relationship */
  repoIssues: Array<GithubIssues>;
  /** An aggregate relationship */
  repoIssuesAggregate: GithubIssuesAggregate;
};


/** columns and relationships of "project_github_repos" */
export type ProjectGithubReposRepoContributorsArgs = {
  distinctOn?: InputMaybe<Array<GithubReposContributorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubReposContributorsOrderBy>>;
  where?: InputMaybe<GithubReposContributorsBoolExp>;
};


/** columns and relationships of "project_github_repos" */
export type ProjectGithubReposRepoContributorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<GithubReposContributorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubReposContributorsOrderBy>>;
  where?: InputMaybe<GithubReposContributorsBoolExp>;
};


/** columns and relationships of "project_github_repos" */
export type ProjectGithubReposRepoIssuesArgs = {
  distinctOn?: InputMaybe<Array<GithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>;
  where?: InputMaybe<GithubIssuesBoolExp>;
};


/** columns and relationships of "project_github_repos" */
export type ProjectGithubReposRepoIssuesAggregateArgs = {
  distinctOn?: InputMaybe<Array<GithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>;
  where?: InputMaybe<GithubIssuesBoolExp>;
};

/** aggregated selection of "project_github_repos" */
export type ProjectGithubReposAggregate = {
  __typename?: 'ProjectGithubReposAggregate';
  aggregate?: Maybe<ProjectGithubReposAggregateFields>;
  nodes: Array<ProjectGithubRepos>;
};

/** aggregate fields of "project_github_repos" */
export type ProjectGithubReposAggregateFields = {
  __typename?: 'ProjectGithubReposAggregateFields';
  avg?: Maybe<ProjectGithubReposAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ProjectGithubReposMaxFields>;
  min?: Maybe<ProjectGithubReposMinFields>;
  stddev?: Maybe<ProjectGithubReposStddevFields>;
  stddevPop?: Maybe<ProjectGithubReposStddev_PopFields>;
  stddevSamp?: Maybe<ProjectGithubReposStddev_SampFields>;
  sum?: Maybe<ProjectGithubReposSumFields>;
  varPop?: Maybe<ProjectGithubReposVar_PopFields>;
  varSamp?: Maybe<ProjectGithubReposVar_SampFields>;
  variance?: Maybe<ProjectGithubReposVarianceFields>;
};


/** aggregate fields of "project_github_repos" */
export type ProjectGithubReposAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectGithubReposSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "project_github_repos" */
export type ProjectGithubReposAggregateOrderBy = {
  avg?: InputMaybe<Project_Github_Repos_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Project_Github_Repos_Max_Order_By>;
  min?: InputMaybe<Project_Github_Repos_Min_Order_By>;
  stddev?: InputMaybe<Project_Github_Repos_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Project_Github_Repos_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Project_Github_Repos_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Project_Github_Repos_Sum_Order_By>;
  var_pop?: InputMaybe<Project_Github_Repos_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Project_Github_Repos_Var_Samp_Order_By>;
  variance?: InputMaybe<Project_Github_Repos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "project_github_repos" */
export type ProjectGithubReposArrRelInsertInput = {
  data: Array<ProjectGithubReposInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ProjectGithubReposOnConflict>;
};

/** aggregate avg on columns */
export type ProjectGithubReposAvgFields = {
  __typename?: 'ProjectGithubReposAvgFields';
  githubRepoId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "project_github_repos". All fields are combined with a logical 'AND'. */
export type ProjectGithubReposBoolExp = {
  _and?: InputMaybe<Array<ProjectGithubReposBoolExp>>;
  _not?: InputMaybe<ProjectGithubReposBoolExp>;
  _or?: InputMaybe<Array<ProjectGithubReposBoolExp>>;
  githubRepoId?: InputMaybe<BigintComparisonExp>;
  project?: InputMaybe<ProjectsBoolExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  repo?: InputMaybe<GithubReposBoolExp>;
  repoContributors?: InputMaybe<GithubReposContributorsBoolExp>;
  repoContributors_aggregate?: InputMaybe<Github_Repos_Contributors_Aggregate_Bool_Exp>;
  repoIssues?: InputMaybe<GithubIssuesBoolExp>;
  repoIssues_aggregate?: InputMaybe<Github_Issues_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "project_github_repos" */
export enum ProjectGithubReposConstraint {
  /** unique or primary key constraint on columns "github_repo_id", "project_id" */
  ProjectGithubReposGithubRepoIdProjectIdIdx = 'project_github_repos_github_repo_id_project_id_idx',
  /** unique or primary key constraint on columns "github_repo_id", "project_id" */
  ProjectGithubReposPkey = 'project_github_repos_pkey'
}

/** input type for incrementing numeric columns in table "project_github_repos" */
export type ProjectGithubReposIncInput = {
  githubRepoId?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "project_github_repos" */
export type ProjectGithubReposInsertInput = {
  githubRepoId?: InputMaybe<Scalars['bigint']['input']>;
  project?: InputMaybe<ProjectsObjRelInsertInput>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  repo?: InputMaybe<GithubReposObjRelInsertInput>;
  repoContributors?: InputMaybe<GithubReposContributorsArrRelInsertInput>;
  repoIssues?: InputMaybe<GithubIssuesArrRelInsertInput>;
};

/** aggregate max on columns */
export type ProjectGithubReposMaxFields = {
  __typename?: 'ProjectGithubReposMaxFields';
  githubRepoId?: Maybe<Scalars['bigint']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type ProjectGithubReposMinFields = {
  __typename?: 'ProjectGithubReposMinFields';
  githubRepoId?: Maybe<Scalars['bigint']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "project_github_repos" */
export type ProjectGithubReposMutationResponse = {
  __typename?: 'ProjectGithubReposMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ProjectGithubRepos>;
};

/** on_conflict condition type for table "project_github_repos" */
export type ProjectGithubReposOnConflict = {
  constraint: ProjectGithubReposConstraint;
  update_columns?: Array<ProjectGithubReposUpdateColumn>;
  where?: InputMaybe<ProjectGithubReposBoolExp>;
};

/** Ordering options when selecting data from "project_github_repos". */
export type ProjectGithubReposOrderBy = {
  githubRepoId?: InputMaybe<OrderBy>;
  project?: InputMaybe<ProjectsOrderBy>;
  projectId?: InputMaybe<OrderBy>;
  repo?: InputMaybe<GithubReposOrderBy>;
  repoContributorsAggregate?: InputMaybe<GithubReposContributorsAggregateOrderBy>;
  repoIssuesAggregate?: InputMaybe<GithubIssuesAggregateOrderBy>;
};

/** primary key columns input for table: project_github_repos */
export type ProjectGithubReposPkColumnsInput = {
  githubRepoId: Scalars['bigint']['input'];
  projectId: Scalars['uuid']['input'];
};

/** select columns of table "project_github_repos" */
export enum ProjectGithubReposSelectColumn {
  /** column name */
  GithubRepoId = 'githubRepoId',
  /** column name */
  ProjectId = 'projectId'
}

/** input type for updating data in table "project_github_repos" */
export type ProjectGithubReposSetInput = {
  githubRepoId?: InputMaybe<Scalars['bigint']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type ProjectGithubReposStddevFields = {
  __typename?: 'ProjectGithubReposStddevFields';
  githubRepoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type ProjectGithubReposStddev_PopFields = {
  __typename?: 'ProjectGithubReposStddev_popFields';
  githubRepoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type ProjectGithubReposStddev_SampFields = {
  __typename?: 'ProjectGithubReposStddev_sampFields';
  githubRepoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type ProjectGithubReposSumFields = {
  __typename?: 'ProjectGithubReposSumFields';
  githubRepoId?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "project_github_repos" */
export enum ProjectGithubReposUpdateColumn {
  /** column name */
  GithubRepoId = 'githubRepoId',
  /** column name */
  ProjectId = 'projectId'
}

export type ProjectGithubReposUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ProjectGithubReposIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectGithubReposSetInput>;
  where: ProjectGithubReposBoolExp;
};

/** aggregate var_pop on columns */
export type ProjectGithubReposVar_PopFields = {
  __typename?: 'ProjectGithubReposVar_popFields';
  githubRepoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type ProjectGithubReposVar_SampFields = {
  __typename?: 'ProjectGithubReposVar_sampFields';
  githubRepoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type ProjectGithubReposVarianceFields = {
  __typename?: 'ProjectGithubReposVarianceFields';
  githubRepoId?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "project_leads" */
export type ProjectLeads = {
  __typename?: 'ProjectLeads';
  assignedAt: Scalars['timestamp']['output'];
  /** An object relationship */
  project?: Maybe<Projects>;
  projectId: Scalars['uuid']['output'];
  /** An object relationship */
  user?: Maybe<RegisteredUsers>;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "project_leads" */
export type ProjectLeadsAggregate = {
  __typename?: 'ProjectLeadsAggregate';
  aggregate?: Maybe<ProjectLeadsAggregateFields>;
  nodes: Array<ProjectLeads>;
};

/** aggregate fields of "project_leads" */
export type ProjectLeadsAggregateFields = {
  __typename?: 'ProjectLeadsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ProjectLeadsMaxFields>;
  min?: Maybe<ProjectLeadsMinFields>;
};


/** aggregate fields of "project_leads" */
export type ProjectLeadsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectLeadsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "project_leads" */
export type ProjectLeadsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Project_Leads_Max_Order_By>;
  min?: InputMaybe<Project_Leads_Min_Order_By>;
};

/** input type for inserting array relation for remote table "project_leads" */
export type ProjectLeadsArrRelInsertInput = {
  data: Array<ProjectLeadsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ProjectLeadsOnConflict>;
};

/** Boolean expression to filter rows from the table "project_leads". All fields are combined with a logical 'AND'. */
export type ProjectLeadsBoolExp = {
  _and?: InputMaybe<Array<ProjectLeadsBoolExp>>;
  _not?: InputMaybe<ProjectLeadsBoolExp>;
  _or?: InputMaybe<Array<ProjectLeadsBoolExp>>;
  assignedAt?: InputMaybe<TimestampComparisonExp>;
  project?: InputMaybe<ProjectsBoolExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<RegisteredUsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "project_leads" */
export enum ProjectLeadsConstraint {
  /** unique or primary key constraint on columns "project_id", "user_id" */
  ProjectLeadsPkey = 'project_leads_pkey',
  /** unique or primary key constraint on columns "project_id", "user_id" */
  ProjectLeadsUserIdProjectIdIdx = 'project_leads_user_id_project_id_idx'
}

/** input type for inserting data into table "project_leads" */
export type ProjectLeadsInsertInput = {
  assignedAt?: InputMaybe<Scalars['timestamp']['input']>;
  project?: InputMaybe<ProjectsObjRelInsertInput>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<RegisteredUsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type ProjectLeadsMaxFields = {
  __typename?: 'ProjectLeadsMaxFields';
  assignedAt?: Maybe<Scalars['timestamp']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type ProjectLeadsMinFields = {
  __typename?: 'ProjectLeadsMinFields';
  assignedAt?: Maybe<Scalars['timestamp']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "project_leads" */
export type ProjectLeadsMutationResponse = {
  __typename?: 'ProjectLeadsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ProjectLeads>;
};

/** on_conflict condition type for table "project_leads" */
export type ProjectLeadsOnConflict = {
  constraint: ProjectLeadsConstraint;
  update_columns?: Array<ProjectLeadsUpdateColumn>;
  where?: InputMaybe<ProjectLeadsBoolExp>;
};

/** Ordering options when selecting data from "project_leads". */
export type ProjectLeadsOrderBy = {
  assignedAt?: InputMaybe<OrderBy>;
  project?: InputMaybe<ProjectsOrderBy>;
  projectId?: InputMaybe<OrderBy>;
  user?: InputMaybe<RegisteredUsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: project_leads */
export type ProjectLeadsPkColumnsInput = {
  projectId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
};

/** select columns of table "project_leads" */
export enum ProjectLeadsSelectColumn {
  /** column name */
  AssignedAt = 'assignedAt',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "project_leads" */
export type ProjectLeadsSetInput = {
  assignedAt?: InputMaybe<Scalars['timestamp']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "project_leads" */
export enum ProjectLeadsUpdateColumn {
  /** column name */
  AssignedAt = 'assignedAt',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  UserId = 'userId'
}

export type ProjectLeadsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectLeadsSetInput>;
  where: ProjectLeadsBoolExp;
};

/** Boolean expression to compare columns of type "project_visibility". All fields are combined with logical 'AND'. */
export type ProjectVisibilityComparisonExp = {
  _eq?: InputMaybe<Scalars['project_visibility']['input']>;
  _gt?: InputMaybe<Scalars['project_visibility']['input']>;
  _gte?: InputMaybe<Scalars['project_visibility']['input']>;
  _in?: InputMaybe<Array<Scalars['project_visibility']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['project_visibility']['input']>;
  _lte?: InputMaybe<Scalars['project_visibility']['input']>;
  _neq?: InputMaybe<Scalars['project_visibility']['input']>;
  _nin?: InputMaybe<Array<Scalars['project_visibility']['input']>>;
};

/** columns and relationships of "projects" */
export type Projects = {
  __typename?: 'Projects';
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applicationsAggregate: ApplicationsAggregate;
  /** An array relationship */
  budgets: Array<Budgets>;
  /** An aggregate relationship */
  budgetsAggregate: BudgetsAggregate;
  /** An array relationship */
  contributors: Array<ProjectsContributors>;
  /** An aggregate relationship */
  contributorsAggregate: ProjectsContributorsAggregate;
  /** An array relationship */
  githubRepos: Array<ProjectGithubRepos>;
  /** An aggregate relationship */
  githubReposAggregate: ProjectGithubReposAggregate;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  pendingInvitations: Array<PendingProjectLeaderInvitations>;
  /** An aggregate relationship */
  pendingInvitationsAggregate: PendingProjectLeaderInvitationsAggregate;
  /** An object relationship */
  projectDetails?: Maybe<ProjectDetails>;
  /** An array relationship */
  projectLeads: Array<ProjectLeads>;
  /** An aggregate relationship */
  projectLeadsAggregate: ProjectLeadsAggregate;
  /** An array relationship */
  projectSponsors: Array<ProjectsSponsors>;
  /** An aggregate relationship */
  projectSponsorsAggregate: ProjectsSponsorsAggregate;
};


/** columns and relationships of "projects" */
export type ProjectsApplicationsArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsApplicationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsBudgetsArgs = {
  distinctOn?: InputMaybe<Array<BudgetsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BudgetsOrderBy>>;
  where?: InputMaybe<BudgetsBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsBudgetsAggregateArgs = {
  distinctOn?: InputMaybe<Array<BudgetsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BudgetsOrderBy>>;
  where?: InputMaybe<BudgetsBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsContributorsArgs = {
  distinctOn?: InputMaybe<Array<ProjectsContributorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsContributorsOrderBy>>;
  where?: InputMaybe<ProjectsContributorsBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsContributorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectsContributorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsContributorsOrderBy>>;
  where?: InputMaybe<ProjectsContributorsBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsGithubReposArgs = {
  distinctOn?: InputMaybe<Array<ProjectGithubReposSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectGithubReposOrderBy>>;
  where?: InputMaybe<ProjectGithubReposBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsGithubReposAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectGithubReposSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectGithubReposOrderBy>>;
  where?: InputMaybe<ProjectGithubReposBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsPendingInvitationsArgs = {
  distinctOn?: InputMaybe<Array<PendingProjectLeaderInvitationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingProjectLeaderInvitationsOrderBy>>;
  where?: InputMaybe<PendingProjectLeaderInvitationsBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsPendingInvitationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PendingProjectLeaderInvitationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingProjectLeaderInvitationsOrderBy>>;
  where?: InputMaybe<PendingProjectLeaderInvitationsBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsProjectLeadsArgs = {
  distinctOn?: InputMaybe<Array<ProjectLeadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectLeadsOrderBy>>;
  where?: InputMaybe<ProjectLeadsBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsProjectLeadsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectLeadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectLeadsOrderBy>>;
  where?: InputMaybe<ProjectLeadsBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsProjectSponsorsArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSponsorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsSponsorsOrderBy>>;
  where?: InputMaybe<ProjectsSponsorsBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsProjectSponsorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSponsorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsSponsorsOrderBy>>;
  where?: InputMaybe<ProjectsSponsorsBoolExp>;
};

/** aggregated selection of "projects" */
export type ProjectsAggregate = {
  __typename?: 'ProjectsAggregate';
  aggregate?: Maybe<ProjectsAggregateFields>;
  nodes: Array<Projects>;
};

/** aggregate fields of "projects" */
export type ProjectsAggregateFields = {
  __typename?: 'ProjectsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ProjectsMaxFields>;
  min?: Maybe<ProjectsMinFields>;
};


/** aggregate fields of "projects" */
export type ProjectsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type ProjectsBoolExp = {
  _and?: InputMaybe<Array<ProjectsBoolExp>>;
  _not?: InputMaybe<ProjectsBoolExp>;
  _or?: InputMaybe<Array<ProjectsBoolExp>>;
  applications?: InputMaybe<ApplicationsBoolExp>;
  applications_aggregate?: InputMaybe<Applications_Aggregate_Bool_Exp>;
  budgets?: InputMaybe<BudgetsBoolExp>;
  budgets_aggregate?: InputMaybe<Budgets_Aggregate_Bool_Exp>;
  contributors?: InputMaybe<ProjectsContributorsBoolExp>;
  contributors_aggregate?: InputMaybe<Projects_Contributors_Aggregate_Bool_Exp>;
  githubRepos?: InputMaybe<ProjectGithubReposBoolExp>;
  githubRepos_aggregate?: InputMaybe<Project_Github_Repos_Aggregate_Bool_Exp>;
  id?: InputMaybe<UuidComparisonExp>;
  pendingInvitations?: InputMaybe<PendingProjectLeaderInvitationsBoolExp>;
  pendingInvitations_aggregate?: InputMaybe<Pending_Project_Leader_Invitations_Aggregate_Bool_Exp>;
  projectDetails?: InputMaybe<ProjectDetailsBoolExp>;
  projectLeads?: InputMaybe<ProjectLeadsBoolExp>;
  projectLeads_aggregate?: InputMaybe<Project_Leads_Aggregate_Bool_Exp>;
  projectSponsors?: InputMaybe<ProjectsSponsorsBoolExp>;
  projectSponsors_aggregate?: InputMaybe<Projects_Sponsors_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "projects" */
export enum ProjectsConstraint {
  /** unique or primary key constraint on columns "id" */
  ProjectsPkey = 'projects_pkey'
}

/** columns and relationships of "projects_contributors" */
export type ProjectsContributors = {
  __typename?: 'ProjectsContributors';
  /** An object relationship */
  githubUser?: Maybe<GithubUsers>;
  githubUserId: Scalars['bigint']['output'];
  linkCount: Scalars['Int']['output'];
  /** An object relationship */
  project?: Maybe<Projects>;
  projectId: Scalars['uuid']['output'];
  /** An object relationship */
  user?: Maybe<UserProfiles>;
};

/** aggregated selection of "projects_contributors" */
export type ProjectsContributorsAggregate = {
  __typename?: 'ProjectsContributorsAggregate';
  aggregate?: Maybe<ProjectsContributorsAggregateFields>;
  nodes: Array<ProjectsContributors>;
};

/** aggregate fields of "projects_contributors" */
export type ProjectsContributorsAggregateFields = {
  __typename?: 'ProjectsContributorsAggregateFields';
  avg?: Maybe<ProjectsContributorsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ProjectsContributorsMaxFields>;
  min?: Maybe<ProjectsContributorsMinFields>;
  stddev?: Maybe<ProjectsContributorsStddevFields>;
  stddevPop?: Maybe<ProjectsContributorsStddev_PopFields>;
  stddevSamp?: Maybe<ProjectsContributorsStddev_SampFields>;
  sum?: Maybe<ProjectsContributorsSumFields>;
  varPop?: Maybe<ProjectsContributorsVar_PopFields>;
  varSamp?: Maybe<ProjectsContributorsVar_SampFields>;
  variance?: Maybe<ProjectsContributorsVarianceFields>;
};


/** aggregate fields of "projects_contributors" */
export type ProjectsContributorsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectsContributorsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "projects_contributors" */
export type ProjectsContributorsAggregateOrderBy = {
  avg?: InputMaybe<Projects_Contributors_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Projects_Contributors_Max_Order_By>;
  min?: InputMaybe<Projects_Contributors_Min_Order_By>;
  stddev?: InputMaybe<Projects_Contributors_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Projects_Contributors_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Projects_Contributors_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Projects_Contributors_Sum_Order_By>;
  var_pop?: InputMaybe<Projects_Contributors_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Projects_Contributors_Var_Samp_Order_By>;
  variance?: InputMaybe<Projects_Contributors_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "projects_contributors" */
export type ProjectsContributorsArrRelInsertInput = {
  data: Array<ProjectsContributorsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ProjectsContributorsOnConflict>;
};

/** aggregate avg on columns */
export type ProjectsContributorsAvgFields = {
  __typename?: 'ProjectsContributorsAvgFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  linkCount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "projects_contributors". All fields are combined with a logical 'AND'. */
export type ProjectsContributorsBoolExp = {
  _and?: InputMaybe<Array<ProjectsContributorsBoolExp>>;
  _not?: InputMaybe<ProjectsContributorsBoolExp>;
  _or?: InputMaybe<Array<ProjectsContributorsBoolExp>>;
  githubUser?: InputMaybe<GithubUsersBoolExp>;
  githubUserId?: InputMaybe<BigintComparisonExp>;
  linkCount?: InputMaybe<IntComparisonExp>;
  project?: InputMaybe<ProjectsBoolExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserProfilesBoolExp>;
};

/** unique or primary key constraints on table "projects_contributors" */
export enum ProjectsContributorsConstraint {
  /** unique or primary key constraint on columns "project_id", "github_user_id" */
  ProjectsContributorsGithubUserIdProjectIdIdx = 'projects_contributors_github_user_id_project_id_idx',
  /** unique or primary key constraint on columns "project_id", "github_user_id" */
  ProjectsContributorsPkey = 'projects_contributors_pkey'
}

/** input type for incrementing numeric columns in table "projects_contributors" */
export type ProjectsContributorsIncInput = {
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  linkCount?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "projects_contributors" */
export type ProjectsContributorsInsertInput = {
  githubUser?: InputMaybe<GithubUsersObjRelInsertInput>;
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  linkCount?: InputMaybe<Scalars['Int']['input']>;
  project?: InputMaybe<ProjectsObjRelInsertInput>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<UserProfilesObjRelInsertInput>;
};

/** aggregate max on columns */
export type ProjectsContributorsMaxFields = {
  __typename?: 'ProjectsContributorsMaxFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  linkCount?: Maybe<Scalars['Int']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type ProjectsContributorsMinFields = {
  __typename?: 'ProjectsContributorsMinFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  linkCount?: Maybe<Scalars['Int']['output']>;
  projectId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "projects_contributors" */
export type ProjectsContributorsMutationResponse = {
  __typename?: 'ProjectsContributorsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ProjectsContributors>;
};

/** on_conflict condition type for table "projects_contributors" */
export type ProjectsContributorsOnConflict = {
  constraint: ProjectsContributorsConstraint;
  update_columns?: Array<ProjectsContributorsUpdateColumn>;
  where?: InputMaybe<ProjectsContributorsBoolExp>;
};

/** Ordering options when selecting data from "projects_contributors". */
export type ProjectsContributorsOrderBy = {
  githubUser?: InputMaybe<GithubUsersOrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  linkCount?: InputMaybe<OrderBy>;
  project?: InputMaybe<ProjectsOrderBy>;
  projectId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserProfilesOrderBy>;
};

/** primary key columns input for table: projects_contributors */
export type ProjectsContributorsPkColumnsInput = {
  githubUserId: Scalars['bigint']['input'];
  projectId: Scalars['uuid']['input'];
};

/** select columns of table "projects_contributors" */
export enum ProjectsContributorsSelectColumn {
  /** column name */
  GithubUserId = 'githubUserId',
  /** column name */
  LinkCount = 'linkCount',
  /** column name */
  ProjectId = 'projectId'
}

/** input type for updating data in table "projects_contributors" */
export type ProjectsContributorsSetInput = {
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  linkCount?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type ProjectsContributorsStddevFields = {
  __typename?: 'ProjectsContributorsStddevFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  linkCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type ProjectsContributorsStddev_PopFields = {
  __typename?: 'ProjectsContributorsStddev_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  linkCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type ProjectsContributorsStddev_SampFields = {
  __typename?: 'ProjectsContributorsStddev_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  linkCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type ProjectsContributorsSumFields = {
  __typename?: 'ProjectsContributorsSumFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  linkCount?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "projects_contributors" */
export enum ProjectsContributorsUpdateColumn {
  /** column name */
  GithubUserId = 'githubUserId',
  /** column name */
  LinkCount = 'linkCount',
  /** column name */
  ProjectId = 'projectId'
}

export type ProjectsContributorsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ProjectsContributorsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectsContributorsSetInput>;
  where: ProjectsContributorsBoolExp;
};

/** aggregate var_pop on columns */
export type ProjectsContributorsVar_PopFields = {
  __typename?: 'ProjectsContributorsVar_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  linkCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type ProjectsContributorsVar_SampFields = {
  __typename?: 'ProjectsContributorsVar_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  linkCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type ProjectsContributorsVarianceFields = {
  __typename?: 'ProjectsContributorsVarianceFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
  linkCount?: Maybe<Scalars['Float']['output']>;
};

/** input type for inserting data into table "projects" */
export type ProjectsInsertInput = {
  applications?: InputMaybe<ApplicationsArrRelInsertInput>;
  budgets?: InputMaybe<BudgetsArrRelInsertInput>;
  contributors?: InputMaybe<ProjectsContributorsArrRelInsertInput>;
  githubRepos?: InputMaybe<ProjectGithubReposArrRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  pendingInvitations?: InputMaybe<PendingProjectLeaderInvitationsArrRelInsertInput>;
  projectDetails?: InputMaybe<ProjectDetailsObjRelInsertInput>;
  projectLeads?: InputMaybe<ProjectLeadsArrRelInsertInput>;
  projectSponsors?: InputMaybe<ProjectsSponsorsArrRelInsertInput>;
};

/** aggregate max on columns */
export type ProjectsMaxFields = {
  __typename?: 'ProjectsMaxFields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type ProjectsMinFields = {
  __typename?: 'ProjectsMinFields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "projects" */
export type ProjectsMutationResponse = {
  __typename?: 'ProjectsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Projects>;
};

/** input type for inserting object relation for remote table "projects" */
export type ProjectsObjRelInsertInput = {
  data: ProjectsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ProjectsOnConflict>;
};

/** on_conflict condition type for table "projects" */
export type ProjectsOnConflict = {
  constraint: ProjectsConstraint;
  update_columns?: Array<ProjectsUpdateColumn>;
  where?: InputMaybe<ProjectsBoolExp>;
};

/** Ordering options when selecting data from "projects". */
export type ProjectsOrderBy = {
  applicationsAggregate?: InputMaybe<ApplicationsAggregateOrderBy>;
  budgetsAggregate?: InputMaybe<BudgetsAggregateOrderBy>;
  contributorsAggregate?: InputMaybe<ProjectsContributorsAggregateOrderBy>;
  githubReposAggregate?: InputMaybe<ProjectGithubReposAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  pendingInvitationsAggregate?: InputMaybe<PendingProjectLeaderInvitationsAggregateOrderBy>;
  projectDetails?: InputMaybe<ProjectDetailsOrderBy>;
  projectLeadsAggregate?: InputMaybe<ProjectLeadsAggregateOrderBy>;
  projectSponsorsAggregate?: InputMaybe<ProjectsSponsorsAggregateOrderBy>;
};

/** primary key columns input for table: projects */
export type ProjectsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "projects" */
export enum ProjectsSelectColumn {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "projects" */
export type ProjectsSetInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "projects_sponsors" */
export type ProjectsSponsors = {
  __typename?: 'ProjectsSponsors';
  /** An object relationship */
  project: Projects;
  projectId: Scalars['uuid']['output'];
  /** An object relationship */
  sponsor: Sponsors;
  sponsorId: Scalars['uuid']['output'];
};

/** aggregated selection of "projects_sponsors" */
export type ProjectsSponsorsAggregate = {
  __typename?: 'ProjectsSponsorsAggregate';
  aggregate?: Maybe<ProjectsSponsorsAggregateFields>;
  nodes: Array<ProjectsSponsors>;
};

/** aggregate fields of "projects_sponsors" */
export type ProjectsSponsorsAggregateFields = {
  __typename?: 'ProjectsSponsorsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ProjectsSponsorsMaxFields>;
  min?: Maybe<ProjectsSponsorsMinFields>;
};


/** aggregate fields of "projects_sponsors" */
export type ProjectsSponsorsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectsSponsorsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "projects_sponsors" */
export type ProjectsSponsorsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Projects_Sponsors_Max_Order_By>;
  min?: InputMaybe<Projects_Sponsors_Min_Order_By>;
};

/** input type for inserting array relation for remote table "projects_sponsors" */
export type ProjectsSponsorsArrRelInsertInput = {
  data: Array<ProjectsSponsorsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ProjectsSponsorsOnConflict>;
};

/** Boolean expression to filter rows from the table "projects_sponsors". All fields are combined with a logical 'AND'. */
export type ProjectsSponsorsBoolExp = {
  _and?: InputMaybe<Array<ProjectsSponsorsBoolExp>>;
  _not?: InputMaybe<ProjectsSponsorsBoolExp>;
  _or?: InputMaybe<Array<ProjectsSponsorsBoolExp>>;
  project?: InputMaybe<ProjectsBoolExp>;
  projectId?: InputMaybe<UuidComparisonExp>;
  sponsor?: InputMaybe<SponsorsBoolExp>;
  sponsorId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "projects_sponsors" */
export enum ProjectsSponsorsConstraint {
  /** unique or primary key constraint on columns "project_id", "sponsor_id" */
  ProjectsSponsorsPkey = 'projects_sponsors_pkey',
  /** unique or primary key constraint on columns "project_id", "sponsor_id" */
  ProjectsSponsorsProjectIdSponsorIdKey = 'projects_sponsors_project_id_sponsor_id_key'
}

/** input type for inserting data into table "projects_sponsors" */
export type ProjectsSponsorsInsertInput = {
  project?: InputMaybe<ProjectsObjRelInsertInput>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  sponsor?: InputMaybe<SponsorsObjRelInsertInput>;
  sponsorId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type ProjectsSponsorsMaxFields = {
  __typename?: 'ProjectsSponsorsMaxFields';
  projectId?: Maybe<Scalars['uuid']['output']>;
  sponsorId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type ProjectsSponsorsMinFields = {
  __typename?: 'ProjectsSponsorsMinFields';
  projectId?: Maybe<Scalars['uuid']['output']>;
  sponsorId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "projects_sponsors" */
export type ProjectsSponsorsMutationResponse = {
  __typename?: 'ProjectsSponsorsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ProjectsSponsors>;
};

/** on_conflict condition type for table "projects_sponsors" */
export type ProjectsSponsorsOnConflict = {
  constraint: ProjectsSponsorsConstraint;
  update_columns?: Array<ProjectsSponsorsUpdateColumn>;
  where?: InputMaybe<ProjectsSponsorsBoolExp>;
};

/** Ordering options when selecting data from "projects_sponsors". */
export type ProjectsSponsorsOrderBy = {
  project?: InputMaybe<ProjectsOrderBy>;
  projectId?: InputMaybe<OrderBy>;
  sponsor?: InputMaybe<SponsorsOrderBy>;
  sponsorId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: projects_sponsors */
export type ProjectsSponsorsPkColumnsInput = {
  projectId: Scalars['uuid']['input'];
  sponsorId: Scalars['uuid']['input'];
};

/** select columns of table "projects_sponsors" */
export enum ProjectsSponsorsSelectColumn {
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  SponsorId = 'sponsorId'
}

/** input type for updating data in table "projects_sponsors" */
export type ProjectsSponsorsSetInput = {
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  sponsorId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "projects_sponsors" */
export enum ProjectsSponsorsUpdateColumn {
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  SponsorId = 'sponsorId'
}

export type ProjectsSponsorsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectsSponsorsSetInput>;
  where: ProjectsSponsorsBoolExp;
};

/** update columns of table "projects" */
export enum ProjectsUpdateColumn {
  /** column name */
  Id = 'id'
}

export type ProjectsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectsSetInput>;
  where: ProjectsBoolExp;
};

export type Reason = {
  workItems: Array<WorkItem>;
};

/** columns and relationships of "registered_users" */
export type RegisteredUsers = {
  __typename?: 'RegisteredUsers';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  htmlUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamp']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  paymentRequests: Array<PaymentRequests>;
  /** An aggregate relationship */
  paymentRequestsAggregate: PaymentRequestsAggregate;
  /** An array relationship */
  projectsLeaded: Array<ProjectLeads>;
  /** An aggregate relationship */
  projectsLeadedAggregate: ProjectLeadsAggregate;
  /** An object relationship */
  userPayoutInfo?: Maybe<UserPayoutInfo>;
};


/** columns and relationships of "registered_users" */
export type RegisteredUsersPaymentRequestsArgs = {
  distinctOn?: InputMaybe<Array<PaymentRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRequestsOrderBy>>;
  where?: InputMaybe<PaymentRequestsBoolExp>;
};


/** columns and relationships of "registered_users" */
export type RegisteredUsersPaymentRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PaymentRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRequestsOrderBy>>;
  where?: InputMaybe<PaymentRequestsBoolExp>;
};


/** columns and relationships of "registered_users" */
export type RegisteredUsersProjectsLeadedArgs = {
  distinctOn?: InputMaybe<Array<ProjectLeadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectLeadsOrderBy>>;
  where?: InputMaybe<ProjectLeadsBoolExp>;
};


/** columns and relationships of "registered_users" */
export type RegisteredUsersProjectsLeadedAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectLeadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectLeadsOrderBy>>;
  where?: InputMaybe<ProjectLeadsBoolExp>;
};

/** aggregated selection of "registered_users" */
export type RegisteredUsersAggregate = {
  __typename?: 'RegisteredUsersAggregate';
  aggregate?: Maybe<RegisteredUsersAggregateFields>;
  nodes: Array<RegisteredUsers>;
};

/** aggregate fields of "registered_users" */
export type RegisteredUsersAggregateFields = {
  __typename?: 'RegisteredUsersAggregateFields';
  avg?: Maybe<RegisteredUsersAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<RegisteredUsersMaxFields>;
  min?: Maybe<RegisteredUsersMinFields>;
  stddev?: Maybe<RegisteredUsersStddevFields>;
  stddevPop?: Maybe<RegisteredUsersStddev_PopFields>;
  stddevSamp?: Maybe<RegisteredUsersStddev_SampFields>;
  sum?: Maybe<RegisteredUsersSumFields>;
  varPop?: Maybe<RegisteredUsersVar_PopFields>;
  varSamp?: Maybe<RegisteredUsersVar_SampFields>;
  variance?: Maybe<RegisteredUsersVarianceFields>;
};


/** aggregate fields of "registered_users" */
export type RegisteredUsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RegisteredUsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type RegisteredUsersAvgFields = {
  __typename?: 'RegisteredUsersAvgFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "registered_users". All fields are combined with a logical 'AND'. */
export type RegisteredUsersBoolExp = {
  _and?: InputMaybe<Array<RegisteredUsersBoolExp>>;
  _not?: InputMaybe<RegisteredUsersBoolExp>;
  _or?: InputMaybe<Array<RegisteredUsersBoolExp>>;
  avatarUrl?: InputMaybe<StringComparisonExp>;
  email?: InputMaybe<CitextComparisonExp>;
  githubUserId?: InputMaybe<BigintComparisonExp>;
  htmlUrl?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  lastSeen?: InputMaybe<TimestampComparisonExp>;
  login?: InputMaybe<StringComparisonExp>;
  paymentRequests?: InputMaybe<PaymentRequestsBoolExp>;
  paymentRequests_aggregate?: InputMaybe<Payment_Requests_Aggregate_Bool_Exp>;
  projectsLeaded?: InputMaybe<ProjectLeadsBoolExp>;
  projectsLeaded_aggregate?: InputMaybe<Project_Leads_Aggregate_Bool_Exp>;
  userPayoutInfo?: InputMaybe<UserPayoutInfoBoolExp>;
};

/** input type for inserting data into table "registered_users" */
export type RegisteredUsersInsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  htmlUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamp']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  paymentRequests?: InputMaybe<PaymentRequestsArrRelInsertInput>;
  projectsLeaded?: InputMaybe<ProjectLeadsArrRelInsertInput>;
  userPayoutInfo?: InputMaybe<UserPayoutInfoObjRelInsertInput>;
};

/** aggregate max on columns */
export type RegisteredUsersMaxFields = {
  __typename?: 'RegisteredUsersMaxFields';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  htmlUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamp']['output']>;
  login?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type RegisteredUsersMinFields = {
  __typename?: 'RegisteredUsersMinFields';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  htmlUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamp']['output']>;
  login?: Maybe<Scalars['String']['output']>;
};

/** input type for inserting object relation for remote table "registered_users" */
export type RegisteredUsersObjRelInsertInput = {
  data: RegisteredUsersInsertInput;
};

/** Ordering options when selecting data from "registered_users". */
export type RegisteredUsersOrderBy = {
  avatarUrl?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  htmlUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  login?: InputMaybe<OrderBy>;
  paymentRequestsAggregate?: InputMaybe<PaymentRequestsAggregateOrderBy>;
  projectsLeadedAggregate?: InputMaybe<ProjectLeadsAggregateOrderBy>;
  userPayoutInfo?: InputMaybe<UserPayoutInfoOrderBy>;
};

/** select columns of table "registered_users" */
export enum RegisteredUsersSelectColumn {
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  Email = 'email',
  /** column name */
  GithubUserId = 'githubUserId',
  /** column name */
  HtmlUrl = 'htmlUrl',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Login = 'login'
}

/** aggregate stddev on columns */
export type RegisteredUsersStddevFields = {
  __typename?: 'RegisteredUsersStddevFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type RegisteredUsersStddev_PopFields = {
  __typename?: 'RegisteredUsersStddev_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type RegisteredUsersStddev_SampFields = {
  __typename?: 'RegisteredUsersStddev_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type RegisteredUsersSumFields = {
  __typename?: 'RegisteredUsersSumFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type RegisteredUsersVar_PopFields = {
  __typename?: 'RegisteredUsersVar_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type RegisteredUsersVar_SampFields = {
  __typename?: 'RegisteredUsersVar_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type RegisteredUsersVarianceFields = {
  __typename?: 'RegisteredUsersVarianceFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "sponsors" */
export type Sponsors = {
  __typename?: 'Sponsors';
  id: Scalars['uuid']['output'];
  logoUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  sponsorProjects: Array<ProjectsSponsors>;
  /** An aggregate relationship */
  sponsorProjectsAggregate: ProjectsSponsorsAggregate;
  url?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "sponsors" */
export type SponsorsSponsorProjectsArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSponsorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsSponsorsOrderBy>>;
  where?: InputMaybe<ProjectsSponsorsBoolExp>;
};


/** columns and relationships of "sponsors" */
export type SponsorsSponsorProjectsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSponsorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsSponsorsOrderBy>>;
  where?: InputMaybe<ProjectsSponsorsBoolExp>;
};

/** aggregated selection of "sponsors" */
export type SponsorsAggregate = {
  __typename?: 'SponsorsAggregate';
  aggregate?: Maybe<SponsorsAggregateFields>;
  nodes: Array<Sponsors>;
};

/** aggregate fields of "sponsors" */
export type SponsorsAggregateFields = {
  __typename?: 'SponsorsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<SponsorsMaxFields>;
  min?: Maybe<SponsorsMinFields>;
};


/** aggregate fields of "sponsors" */
export type SponsorsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<SponsorsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "sponsors". All fields are combined with a logical 'AND'. */
export type SponsorsBoolExp = {
  _and?: InputMaybe<Array<SponsorsBoolExp>>;
  _not?: InputMaybe<SponsorsBoolExp>;
  _or?: InputMaybe<Array<SponsorsBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  logoUrl?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  sponsorProjects?: InputMaybe<ProjectsSponsorsBoolExp>;
  sponsorProjects_aggregate?: InputMaybe<Projects_Sponsors_Aggregate_Bool_Exp>;
  url?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "sponsors" */
export enum SponsorsConstraint {
  /** unique or primary key constraint on columns "name" */
  SponsorsNameKey = 'sponsors_name_key',
  /** unique or primary key constraint on columns "id" */
  SponsorsPkey = 'sponsors_pkey'
}

/** input type for inserting data into table "sponsors" */
export type SponsorsInsertInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sponsorProjects?: InputMaybe<ProjectsSponsorsArrRelInsertInput>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type SponsorsMaxFields = {
  __typename?: 'SponsorsMaxFields';
  id?: Maybe<Scalars['uuid']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type SponsorsMinFields = {
  __typename?: 'SponsorsMinFields';
  id?: Maybe<Scalars['uuid']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "sponsors" */
export type SponsorsMutationResponse = {
  __typename?: 'SponsorsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sponsors>;
};

/** input type for inserting object relation for remote table "sponsors" */
export type SponsorsObjRelInsertInput = {
  data: SponsorsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<SponsorsOnConflict>;
};

/** on_conflict condition type for table "sponsors" */
export type SponsorsOnConflict = {
  constraint: SponsorsConstraint;
  update_columns?: Array<SponsorsUpdateColumn>;
  where?: InputMaybe<SponsorsBoolExp>;
};

/** Ordering options when selecting data from "sponsors". */
export type SponsorsOrderBy = {
  id?: InputMaybe<OrderBy>;
  logoUrl?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  sponsorProjectsAggregate?: InputMaybe<ProjectsSponsorsAggregateOrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: sponsors */
export type SponsorsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "sponsors" */
export enum SponsorsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logoUrl',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "sponsors" */
export type SponsorsSetInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "sponsors" */
export enum SponsorsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logoUrl',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url'
}

export type SponsorsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SponsorsSetInput>;
  where: SponsorsBoolExp;
};

export enum Status {
  Cancelled = 'CANCELLED',
  Closed = 'CLOSED',
  Completed = 'COMPLETED',
  Merged = 'MERGED',
  Open = 'OPEN'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "api.technologies" */
export type Technologies = {
  __typename?: 'Technologies';
  technology?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "api.technologies" */
export type TechnologiesAggregate = {
  __typename?: 'TechnologiesAggregate';
  aggregate?: Maybe<TechnologiesAggregateFields>;
  nodes: Array<Technologies>;
};

/** aggregate fields of "api.technologies" */
export type TechnologiesAggregateFields = {
  __typename?: 'TechnologiesAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<TechnologiesMaxFields>;
  min?: Maybe<TechnologiesMinFields>;
};


/** aggregate fields of "api.technologies" */
export type TechnologiesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TechnologiesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "api.technologies". All fields are combined with a logical 'AND'. */
export type TechnologiesBoolExp = {
  _and?: InputMaybe<Array<TechnologiesBoolExp>>;
  _not?: InputMaybe<TechnologiesBoolExp>;
  _or?: InputMaybe<Array<TechnologiesBoolExp>>;
  technology?: InputMaybe<StringComparisonExp>;
};

/** input type for inserting data into table "api.technologies" */
export type TechnologiesInsertInput = {
  technology?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type TechnologiesMaxFields = {
  __typename?: 'TechnologiesMaxFields';
  technology?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type TechnologiesMinFields = {
  __typename?: 'TechnologiesMinFields';
  technology?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "api.technologies" */
export type TechnologiesMutationResponse = {
  __typename?: 'TechnologiesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Technologies>;
};

/** Ordering options when selecting data from "api.technologies". */
export type TechnologiesOrderBy = {
  technology?: InputMaybe<OrderBy>;
};

/** select columns of table "api.technologies" */
export enum TechnologiesSelectColumn {
  /** column name */
  Technology = 'technology'
}

/** input type for updating data in table "api.technologies" */
export type TechnologiesSetInput = {
  technology?: InputMaybe<Scalars['String']['input']>;
};

export type TechnologiesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TechnologiesSetInput>;
  where: TechnologiesBoolExp;
};

/** Streaming cursor of the table "Technologies" */
export type Technologies_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Technologies_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Technologies_StreamCursorValueInput = {
  technology?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export enum Type {
  Issue = 'ISSUE',
  PullRequest = 'PULL_REQUEST'
}

export type User = {
  __typename?: 'User';
  avatarUrl: Scalars['Url']['output'];
  htmlUrl: Scalars['Url']['output'];
  id: Scalars['GithubUserId']['output'];
  login: Scalars['String']['output'];
  /** An array relationship */
  paymentRequests: Array<PaymentRequests>;
  /** An aggregate relationship */
  paymentRequestsAggregate: PaymentRequestsAggregate;
  user?: Maybe<RegisteredUsers>;
};


export type UserPaymentRequestsArgs = {
  distinctOn?: InputMaybe<Array<PaymentRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRequestsOrderBy>>;
  where?: InputMaybe<PaymentRequestsBoolExp>;
};


export type UserPaymentRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PaymentRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRequestsOrderBy>>;
  where?: InputMaybe<PaymentRequestsBoolExp>;
};

/** columns and relationships of "user_payout_info" */
export type UserPayoutInfo = {
  __typename?: 'UserPayoutInfo';
  arePayoutSettingsValid: Scalars['Boolean']['output'];
  identity?: Maybe<Scalars['jsonb']['output']>;
  location?: Maybe<Scalars['jsonb']['output']>;
  payoutSettings?: Maybe<Scalars['jsonb']['output']>;
  userId: Scalars['uuid']['output'];
};


/** columns and relationships of "user_payout_info" */
export type UserPayoutInfoIdentityArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "user_payout_info" */
export type UserPayoutInfoLocationArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "user_payout_info" */
export type UserPayoutInfoPayoutSettingsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "user_payout_info" */
export type UserPayoutInfoAggregate = {
  __typename?: 'UserPayoutInfoAggregate';
  aggregate?: Maybe<UserPayoutInfoAggregateFields>;
  nodes: Array<UserPayoutInfo>;
};

/** aggregate fields of "user_payout_info" */
export type UserPayoutInfoAggregateFields = {
  __typename?: 'UserPayoutInfoAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<UserPayoutInfoMaxFields>;
  min?: Maybe<UserPayoutInfoMinFields>;
};


/** aggregate fields of "user_payout_info" */
export type UserPayoutInfoAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserPayoutInfoSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type UserPayoutInfoAppendInput = {
  identity?: InputMaybe<Scalars['jsonb']['input']>;
  location?: InputMaybe<Scalars['jsonb']['input']>;
  payoutSettings?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "user_payout_info". All fields are combined with a logical 'AND'. */
export type UserPayoutInfoBoolExp = {
  _and?: InputMaybe<Array<UserPayoutInfoBoolExp>>;
  _not?: InputMaybe<UserPayoutInfoBoolExp>;
  _or?: InputMaybe<Array<UserPayoutInfoBoolExp>>;
  arePayoutSettingsValid?: InputMaybe<BooleanComparisonExp>;
  identity?: InputMaybe<JsonbComparisonExp>;
  location?: InputMaybe<JsonbComparisonExp>;
  payoutSettings?: InputMaybe<JsonbComparisonExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "user_payout_info" */
export enum UserPayoutInfoConstraint {
  /** unique or primary key constraint on columns "user_id" */
  UserInfoPkey = 'user_info_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type UserPayoutInfoDeleteAtPathInput = {
  identity?: InputMaybe<Array<Scalars['String']['input']>>;
  location?: InputMaybe<Array<Scalars['String']['input']>>;
  payoutSettings?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type UserPayoutInfoDeleteElemInput = {
  identity?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['Int']['input']>;
  payoutSettings?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type UserPayoutInfoDeleteKeyInput = {
  identity?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  payoutSettings?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "user_payout_info" */
export type UserPayoutInfoInsertInput = {
  identity?: InputMaybe<Scalars['jsonb']['input']>;
  location?: InputMaybe<Scalars['jsonb']['input']>;
  payoutSettings?: InputMaybe<Scalars['jsonb']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type UserPayoutInfoMaxFields = {
  __typename?: 'UserPayoutInfoMaxFields';
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type UserPayoutInfoMinFields = {
  __typename?: 'UserPayoutInfoMinFields';
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "user_payout_info" */
export type UserPayoutInfoMutationResponse = {
  __typename?: 'UserPayoutInfoMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserPayoutInfo>;
};

/** input type for inserting object relation for remote table "user_payout_info" */
export type UserPayoutInfoObjRelInsertInput = {
  data: UserPayoutInfoInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UserPayoutInfoOnConflict>;
};

/** on_conflict condition type for table "user_payout_info" */
export type UserPayoutInfoOnConflict = {
  constraint: UserPayoutInfoConstraint;
  update_columns?: Array<UserPayoutInfoUpdateColumn>;
  where?: InputMaybe<UserPayoutInfoBoolExp>;
};

/** Ordering options when selecting data from "user_payout_info". */
export type UserPayoutInfoOrderBy = {
  arePayoutSettingsValid?: InputMaybe<OrderBy>;
  identity?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  payoutSettings?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_payout_info */
export type UserPayoutInfoPkColumnsInput = {
  userId: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type UserPayoutInfoPrependInput = {
  identity?: InputMaybe<Scalars['jsonb']['input']>;
  location?: InputMaybe<Scalars['jsonb']['input']>;
  payoutSettings?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "user_payout_info" */
export enum UserPayoutInfoSelectColumn {
  /** column name */
  ArePayoutSettingsValid = 'arePayoutSettingsValid',
  /** column name */
  Identity = 'identity',
  /** column name */
  Location = 'location',
  /** column name */
  PayoutSettings = 'payoutSettings',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user_payout_info" */
export type UserPayoutInfoSetInput = {
  identity?: InputMaybe<Scalars['jsonb']['input']>;
  location?: InputMaybe<Scalars['jsonb']['input']>;
  payoutSettings?: InputMaybe<Scalars['jsonb']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "user_payout_info" */
export enum UserPayoutInfoUpdateColumn {
  /** column name */
  Identity = 'identity',
  /** column name */
  Location = 'location',
  /** column name */
  PayoutSettings = 'payoutSettings',
  /** column name */
  UserId = 'userId'
}

export type UserPayoutInfoUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<UserPayoutInfoAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<UserPayoutInfoDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<UserPayoutInfoDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<UserPayoutInfoDeleteKeyInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<UserPayoutInfoPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserPayoutInfoSetInput>;
  where: UserPayoutInfoBoolExp;
};

/** columns and relationships of "api.user_profiles" */
export type UserProfiles = {
  __typename?: 'UserProfiles';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  contactInformations: Array<ContactInformations>;
  /** An aggregate relationship */
  contactInformationsAggregate: ContactInformationsAggregate;
  /** An array relationship */
  contributionCounts: Array<ContributionCounts>;
  /** An aggregate relationship */
  contributionCountsAggregate: ContributionCountsAggregate;
  /** An array relationship */
  contributionStats: Array<ContributionStats>;
  /** An aggregate relationship */
  contributionStatsAggregate: ContributionStatsAggregate;
  /** An array relationship */
  contributions: Array<Contributions>;
  /** An aggregate relationship */
  contributionsAggregate: ContributionsAggregate;
  cover?: Maybe<Scalars['profile_cover']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  htmlUrl?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Scalars['jsonb']['output']>;
  lastSeen?: Maybe<Scalars['timestamp']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  lookingForAJob?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  paymentStats: Array<PaymentStats>;
  /** An aggregate relationship */
  paymentStatsAggregate: PaymentStatsAggregate;
  /** An array relationship */
  projectsContributed: Array<ProjectsContributors>;
  /** An aggregate relationship */
  projectsContributedAggregate: ProjectsContributorsAggregate;
  /** An array relationship */
  projectsLeaded: Array<ProjectLeads>;
  /** An aggregate relationship */
  projectsLeadedAggregate: ProjectLeadsAggregate;
  userId?: Maybe<Scalars['uuid']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weeklyAllocatedTime?: Maybe<Scalars['allocated_time']['output']>;
};


/** columns and relationships of "api.user_profiles" */
export type UserProfilesContactInformationsArgs = {
  distinctOn?: InputMaybe<Array<ContactInformationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContactInformationsOrderBy>>;
  where?: InputMaybe<ContactInformationsBoolExp>;
};


/** columns and relationships of "api.user_profiles" */
export type UserProfilesContactInformationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ContactInformationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContactInformationsOrderBy>>;
  where?: InputMaybe<ContactInformationsBoolExp>;
};


/** columns and relationships of "api.user_profiles" */
export type UserProfilesContributionCountsArgs = {
  distinctOn?: InputMaybe<Array<ContributionCountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionCountsOrderBy>>;
  where?: InputMaybe<ContributionCountsBoolExp>;
};


/** columns and relationships of "api.user_profiles" */
export type UserProfilesContributionCountsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ContributionCountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionCountsOrderBy>>;
  where?: InputMaybe<ContributionCountsBoolExp>;
};


/** columns and relationships of "api.user_profiles" */
export type UserProfilesContributionStatsArgs = {
  distinctOn?: InputMaybe<Array<ContributionStatsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionStatsOrderBy>>;
  where?: InputMaybe<ContributionStatsBoolExp>;
};


/** columns and relationships of "api.user_profiles" */
export type UserProfilesContributionStatsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ContributionStatsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionStatsOrderBy>>;
  where?: InputMaybe<ContributionStatsBoolExp>;
};


/** columns and relationships of "api.user_profiles" */
export type UserProfilesContributionsArgs = {
  distinctOn?: InputMaybe<Array<ContributionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionsOrderBy>>;
  where?: InputMaybe<ContributionsBoolExp>;
};


/** columns and relationships of "api.user_profiles" */
export type UserProfilesContributionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ContributionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionsOrderBy>>;
  where?: InputMaybe<ContributionsBoolExp>;
};


/** columns and relationships of "api.user_profiles" */
export type UserProfilesLanguagesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "api.user_profiles" */
export type UserProfilesPaymentStatsArgs = {
  distinctOn?: InputMaybe<Array<PaymentStatsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentStatsOrderBy>>;
  where?: InputMaybe<PaymentStatsBoolExp>;
};


/** columns and relationships of "api.user_profiles" */
export type UserProfilesPaymentStatsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PaymentStatsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentStatsOrderBy>>;
  where?: InputMaybe<PaymentStatsBoolExp>;
};


/** columns and relationships of "api.user_profiles" */
export type UserProfilesProjectsContributedArgs = {
  distinctOn?: InputMaybe<Array<ProjectsContributorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsContributorsOrderBy>>;
  where?: InputMaybe<ProjectsContributorsBoolExp>;
};


/** columns and relationships of "api.user_profiles" */
export type UserProfilesProjectsContributedAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectsContributorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsContributorsOrderBy>>;
  where?: InputMaybe<ProjectsContributorsBoolExp>;
};


/** columns and relationships of "api.user_profiles" */
export type UserProfilesProjectsLeadedArgs = {
  distinctOn?: InputMaybe<Array<ProjectLeadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectLeadsOrderBy>>;
  where?: InputMaybe<ProjectLeadsBoolExp>;
};


/** columns and relationships of "api.user_profiles" */
export type UserProfilesProjectsLeadedAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectLeadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectLeadsOrderBy>>;
  where?: InputMaybe<ProjectLeadsBoolExp>;
};

/** aggregated selection of "api.user_profiles" */
export type UserProfilesAggregate = {
  __typename?: 'UserProfilesAggregate';
  aggregate?: Maybe<UserProfilesAggregateFields>;
  nodes: Array<UserProfiles>;
};

/** aggregate fields of "api.user_profiles" */
export type UserProfilesAggregateFields = {
  __typename?: 'UserProfilesAggregateFields';
  avg?: Maybe<UserProfilesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<UserProfilesMaxFields>;
  min?: Maybe<UserProfilesMinFields>;
  stddev?: Maybe<UserProfilesStddevFields>;
  stddevPop?: Maybe<UserProfilesStddev_PopFields>;
  stddevSamp?: Maybe<UserProfilesStddev_SampFields>;
  sum?: Maybe<UserProfilesSumFields>;
  varPop?: Maybe<UserProfilesVar_PopFields>;
  varSamp?: Maybe<UserProfilesVar_SampFields>;
  variance?: Maybe<UserProfilesVarianceFields>;
};


/** aggregate fields of "api.user_profiles" */
export type UserProfilesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserProfilesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type UserProfilesAvgFields = {
  __typename?: 'UserProfilesAvgFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "api.user_profiles". All fields are combined with a logical 'AND'. */
export type UserProfilesBoolExp = {
  _and?: InputMaybe<Array<UserProfilesBoolExp>>;
  _not?: InputMaybe<UserProfilesBoolExp>;
  _or?: InputMaybe<Array<UserProfilesBoolExp>>;
  avatarUrl?: InputMaybe<StringComparisonExp>;
  bio?: InputMaybe<StringComparisonExp>;
  contactInformations?: InputMaybe<ContactInformationsBoolExp>;
  contactInformations_aggregate?: InputMaybe<ContactInformations_Aggregate_Bool_Exp>;
  contributionCounts?: InputMaybe<ContributionCountsBoolExp>;
  contributionCounts_aggregate?: InputMaybe<ContributionCounts_Aggregate_Bool_Exp>;
  contributionStats?: InputMaybe<ContributionStatsBoolExp>;
  contributionStats_aggregate?: InputMaybe<ContributionStats_Aggregate_Bool_Exp>;
  contributions?: InputMaybe<ContributionsBoolExp>;
  contributions_aggregate?: InputMaybe<Contributions_Aggregate_Bool_Exp>;
  cover?: InputMaybe<ProfileCoverComparisonExp>;
  createdAt?: InputMaybe<TimestampComparisonExp>;
  githubUserId?: InputMaybe<BigintComparisonExp>;
  htmlUrl?: InputMaybe<StringComparisonExp>;
  languages?: InputMaybe<JsonbComparisonExp>;
  lastSeen?: InputMaybe<TimestampComparisonExp>;
  location?: InputMaybe<StringComparisonExp>;
  login?: InputMaybe<StringComparisonExp>;
  lookingForAJob?: InputMaybe<BooleanComparisonExp>;
  paymentStats?: InputMaybe<PaymentStatsBoolExp>;
  paymentStats_aggregate?: InputMaybe<Payment_Stats_Aggregate_Bool_Exp>;
  projectsContributed?: InputMaybe<ProjectsContributorsBoolExp>;
  projectsContributed_aggregate?: InputMaybe<Projects_Contributors_Aggregate_Bool_Exp>;
  projectsLeaded?: InputMaybe<ProjectLeadsBoolExp>;
  projectsLeaded_aggregate?: InputMaybe<Project_Leads_Aggregate_Bool_Exp>;
  userId?: InputMaybe<UuidComparisonExp>;
  website?: InputMaybe<StringComparisonExp>;
  weeklyAllocatedTime?: InputMaybe<AllocatedTimeComparisonExp>;
};

/** input type for inserting data into table "api.user_profiles" */
export type UserProfilesInsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  contactInformations?: InputMaybe<ContactInformationsArrRelInsertInput>;
  contributionCounts?: InputMaybe<ContributionCountsArrRelInsertInput>;
  contributionStats?: InputMaybe<ContributionStatsArrRelInsertInput>;
  contributions?: InputMaybe<ContributionsArrRelInsertInput>;
  cover?: InputMaybe<Scalars['profile_cover']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  htmlUrl?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Scalars['jsonb']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamp']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  lookingForAJob?: InputMaybe<Scalars['Boolean']['input']>;
  paymentStats?: InputMaybe<PaymentStatsArrRelInsertInput>;
  projectsContributed?: InputMaybe<ProjectsContributorsArrRelInsertInput>;
  projectsLeaded?: InputMaybe<ProjectLeadsArrRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  weeklyAllocatedTime?: InputMaybe<Scalars['allocated_time']['input']>;
};

/** aggregate max on columns */
export type UserProfilesMaxFields = {
  __typename?: 'UserProfilesMaxFields';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['profile_cover']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  htmlUrl?: Maybe<Scalars['String']['output']>;
  lastSeen?: Maybe<Scalars['timestamp']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weeklyAllocatedTime?: Maybe<Scalars['allocated_time']['output']>;
};

/** aggregate min on columns */
export type UserProfilesMinFields = {
  __typename?: 'UserProfilesMinFields';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['profile_cover']['output']>;
  createdAt?: Maybe<Scalars['timestamp']['output']>;
  githubUserId?: Maybe<Scalars['bigint']['output']>;
  htmlUrl?: Maybe<Scalars['String']['output']>;
  lastSeen?: Maybe<Scalars['timestamp']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  weeklyAllocatedTime?: Maybe<Scalars['allocated_time']['output']>;
};

/** input type for inserting object relation for remote table "api.user_profiles" */
export type UserProfilesObjRelInsertInput = {
  data: UserProfilesInsertInput;
};

/** Ordering options when selecting data from "api.user_profiles". */
export type UserProfilesOrderBy = {
  avatarUrl?: InputMaybe<OrderBy>;
  bio?: InputMaybe<OrderBy>;
  contactInformationsAggregate?: InputMaybe<ContactInformationsAggregateOrderBy>;
  contributionCountsAggregate?: InputMaybe<ContributionCountsAggregateOrderBy>;
  contributionStatsAggregate?: InputMaybe<ContributionStatsAggregateOrderBy>;
  contributionsAggregate?: InputMaybe<ContributionsAggregateOrderBy>;
  cover?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  githubUserId?: InputMaybe<OrderBy>;
  htmlUrl?: InputMaybe<OrderBy>;
  languages?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  login?: InputMaybe<OrderBy>;
  lookingForAJob?: InputMaybe<OrderBy>;
  paymentStatsAggregate?: InputMaybe<PaymentStatsAggregateOrderBy>;
  projectsContributedAggregate?: InputMaybe<ProjectsContributorsAggregateOrderBy>;
  projectsLeadedAggregate?: InputMaybe<ProjectLeadsAggregateOrderBy>;
  userId?: InputMaybe<OrderBy>;
  website?: InputMaybe<OrderBy>;
  weeklyAllocatedTime?: InputMaybe<OrderBy>;
};

/** select columns of table "api.user_profiles" */
export enum UserProfilesSelectColumn {
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  Bio = 'bio',
  /** column name */
  Cover = 'cover',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  GithubUserId = 'githubUserId',
  /** column name */
  HtmlUrl = 'htmlUrl',
  /** column name */
  Languages = 'languages',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Location = 'location',
  /** column name */
  Login = 'login',
  /** column name */
  LookingForAJob = 'lookingForAJob',
  /** column name */
  UserId = 'userId',
  /** column name */
  Website = 'website',
  /** column name */
  WeeklyAllocatedTime = 'weeklyAllocatedTime'
}

/** aggregate stddev on columns */
export type UserProfilesStddevFields = {
  __typename?: 'UserProfilesStddevFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type UserProfilesStddev_PopFields = {
  __typename?: 'UserProfilesStddev_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type UserProfilesStddev_SampFields = {
  __typename?: 'UserProfilesStddev_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type UserProfilesSumFields = {
  __typename?: 'UserProfilesSumFields';
  githubUserId?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type UserProfilesVar_PopFields = {
  __typename?: 'UserProfilesVar_popFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type UserProfilesVar_SampFields = {
  __typename?: 'UserProfilesVar_sampFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type UserProfilesVarianceFields = {
  __typename?: 'UserProfilesVarianceFields';
  githubUserId?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "UserProfiles" */
export type UserProfiles_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserProfiles_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserProfiles_StreamCursorValueInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['profile_cover']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  htmlUrl?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Scalars['jsonb']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamp']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  lookingForAJob?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  weeklyAllocatedTime?: InputMaybe<Scalars['allocated_time']['input']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export enum Visibility {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type WorkItem = {
  issueNumber: Scalars['GithubIssueNumber']['input'];
  repoId: Scalars['GithubRepoId']['input'];
};

/** columns and relationships of "work_items" */
export type WorkItems = {
  __typename?: 'WorkItems';
  githubIssue?: Maybe<Issue>;
  ignoredForProjects: Array<IgnoredGithubIssues>;
  ignoredForProjectsAggregate: IgnoredGithubIssuesAggregate;
  issueNumber: Scalars['bigint']['output'];
  paymentId: Scalars['uuid']['output'];
  /** An object relationship */
  paymentRequest?: Maybe<PaymentRequests>;
  repoId: Scalars['bigint']['output'];
};


/** columns and relationships of "work_items" */
export type WorkItemsIgnoredForProjectsArgs = {
  distinctOn?: InputMaybe<Array<IgnoredGithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IgnoredGithubIssuesOrderBy>>;
  where?: InputMaybe<IgnoredGithubIssuesBoolExp>;
};


/** columns and relationships of "work_items" */
export type WorkItemsIgnoredForProjectsAggregateArgs = {
  distinctOn?: InputMaybe<Array<IgnoredGithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IgnoredGithubIssuesOrderBy>>;
  where?: InputMaybe<IgnoredGithubIssuesBoolExp>;
};

/** aggregated selection of "work_items" */
export type WorkItemsAggregate = {
  __typename?: 'WorkItemsAggregate';
  aggregate?: Maybe<WorkItemsAggregateFields>;
  nodes: Array<WorkItems>;
};

/** aggregate fields of "work_items" */
export type WorkItemsAggregateFields = {
  __typename?: 'WorkItemsAggregateFields';
  avg?: Maybe<WorkItemsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<WorkItemsMaxFields>;
  min?: Maybe<WorkItemsMinFields>;
  stddev?: Maybe<WorkItemsStddevFields>;
  stddevPop?: Maybe<WorkItemsStddev_PopFields>;
  stddevSamp?: Maybe<WorkItemsStddev_SampFields>;
  sum?: Maybe<WorkItemsSumFields>;
  varPop?: Maybe<WorkItemsVar_PopFields>;
  varSamp?: Maybe<WorkItemsVar_SampFields>;
  variance?: Maybe<WorkItemsVarianceFields>;
};


/** aggregate fields of "work_items" */
export type WorkItemsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<WorkItemsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "work_items" */
export type WorkItemsAggregateOrderBy = {
  avg?: InputMaybe<Work_Items_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Work_Items_Max_Order_By>;
  min?: InputMaybe<Work_Items_Min_Order_By>;
  stddev?: InputMaybe<Work_Items_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Work_Items_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Work_Items_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Work_Items_Sum_Order_By>;
  var_pop?: InputMaybe<Work_Items_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Work_Items_Var_Samp_Order_By>;
  variance?: InputMaybe<Work_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "work_items" */
export type WorkItemsArrRelInsertInput = {
  data: Array<WorkItemsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<WorkItemsOnConflict>;
};

/** aggregate avg on columns */
export type WorkItemsAvgFields = {
  __typename?: 'WorkItemsAvgFields';
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "work_items". All fields are combined with a logical 'AND'. */
export type WorkItemsBoolExp = {
  _and?: InputMaybe<Array<WorkItemsBoolExp>>;
  _not?: InputMaybe<WorkItemsBoolExp>;
  _or?: InputMaybe<Array<WorkItemsBoolExp>>;
  ignoredForProjects?: InputMaybe<IgnoredGithubIssuesBoolExp>;
  ignoredForProjects_aggregate?: InputMaybe<Ignored_Github_Issues_Aggregate_Bool_Exp>;
  issueNumber?: InputMaybe<BigintComparisonExp>;
  paymentId?: InputMaybe<UuidComparisonExp>;
  paymentRequest?: InputMaybe<PaymentRequestsBoolExp>;
  repoId?: InputMaybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "work_items" */
export enum WorkItemsConstraint {
  /** unique or primary key constraint on columns "issue_number", "payment_id", "repo_id" */
  WorkItemsPkey = 'work_items_pkey'
}

/** input type for incrementing numeric columns in table "work_items" */
export type WorkItemsIncInput = {
  issueNumber?: InputMaybe<Scalars['bigint']['input']>;
  repoId?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "work_items" */
export type WorkItemsInsertInput = {
  ignoredForProjects?: InputMaybe<IgnoredGithubIssuesArrRelInsertInput>;
  issueNumber?: InputMaybe<Scalars['bigint']['input']>;
  paymentId?: InputMaybe<Scalars['uuid']['input']>;
  paymentRequest?: InputMaybe<PaymentRequestsObjRelInsertInput>;
  repoId?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type WorkItemsMaxFields = {
  __typename?: 'WorkItemsMaxFields';
  issueNumber?: Maybe<Scalars['bigint']['output']>;
  paymentId?: Maybe<Scalars['uuid']['output']>;
  repoId?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type WorkItemsMinFields = {
  __typename?: 'WorkItemsMinFields';
  issueNumber?: Maybe<Scalars['bigint']['output']>;
  paymentId?: Maybe<Scalars['uuid']['output']>;
  repoId?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "work_items" */
export type WorkItemsMutationResponse = {
  __typename?: 'WorkItemsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<WorkItems>;
};

/** on_conflict condition type for table "work_items" */
export type WorkItemsOnConflict = {
  constraint: WorkItemsConstraint;
  update_columns?: Array<WorkItemsUpdateColumn>;
  where?: InputMaybe<WorkItemsBoolExp>;
};

/** Ordering options when selecting data from "work_items". */
export type WorkItemsOrderBy = {
  ignoredForProjectsAggregate?: InputMaybe<IgnoredGithubIssuesAggregateOrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  paymentId?: InputMaybe<OrderBy>;
  paymentRequest?: InputMaybe<PaymentRequestsOrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: work_items */
export type WorkItemsPkColumnsInput = {
  issueNumber: Scalars['bigint']['input'];
  paymentId: Scalars['uuid']['input'];
  repoId: Scalars['bigint']['input'];
};

/** select columns of table "work_items" */
export enum WorkItemsSelectColumn {
  /** column name */
  IssueNumber = 'issueNumber',
  /** column name */
  PaymentId = 'paymentId',
  /** column name */
  RepoId = 'repoId'
}

/** input type for updating data in table "work_items" */
export type WorkItemsSetInput = {
  issueNumber?: InputMaybe<Scalars['bigint']['input']>;
  paymentId?: InputMaybe<Scalars['uuid']['input']>;
  repoId?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type WorkItemsStddevFields = {
  __typename?: 'WorkItemsStddevFields';
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type WorkItemsStddev_PopFields = {
  __typename?: 'WorkItemsStddev_popFields';
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type WorkItemsStddev_SampFields = {
  __typename?: 'WorkItemsStddev_sampFields';
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type WorkItemsSumFields = {
  __typename?: 'WorkItemsSumFields';
  issueNumber?: Maybe<Scalars['bigint']['output']>;
  repoId?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "work_items" */
export enum WorkItemsUpdateColumn {
  /** column name */
  IssueNumber = 'issueNumber',
  /** column name */
  PaymentId = 'paymentId',
  /** column name */
  RepoId = 'repoId'
}

export type WorkItemsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<WorkItemsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WorkItemsSetInput>;
  where: WorkItemsBoolExp;
};

/** aggregate var_pop on columns */
export type WorkItemsVar_PopFields = {
  __typename?: 'WorkItemsVar_popFields';
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type WorkItemsVar_SampFields = {
  __typename?: 'WorkItemsVar_sampFields';
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type WorkItemsVarianceFields = {
  __typename?: 'WorkItemsVarianceFields';
  issueNumber?: Maybe<Scalars['Float']['output']>;
  repoId?: Maybe<Scalars['Float']['output']>;
};

export type Applications_Aggregate_Bool_Exp = {
  count?: InputMaybe<Applications_Aggregate_Bool_Exp_Count>;
};

export type Applications_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ApplicationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ApplicationsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "applications" */
export type Applications_Max_Order_By = {
  applicantId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  receivedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "applications" */
export type Applications_Min_Order_By = {
  applicantId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  receivedAt?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "applications" */
export type Applications_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Applications_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Applications_StreamCursorValueInput = {
  applicantId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  receivedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid']['output'];
  options?: Maybe<Scalars['jsonb']['output']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequestsAggregate = {
  __typename?: 'authProviderRequestsAggregate';
  aggregate?: Maybe<AuthProviderRequestsAggregateFields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequestsAggregateFields = {
  __typename?: 'authProviderRequestsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthProviderRequestsMaxFields>;
  min?: Maybe<AuthProviderRequestsMinFields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequestsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequestsAppendInput = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequestsBoolExp = {
  _and?: InputMaybe<Array<AuthProviderRequestsBoolExp>>;
  _not?: InputMaybe<AuthProviderRequestsBoolExp>;
  _or?: InputMaybe<Array<AuthProviderRequestsBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  options?: InputMaybe<JsonbComparisonExp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequestsConstraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequestsDeleteAtPathInput = {
  options?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequestsDeleteElemInput = {
  options?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequestsDeleteKeyInput = {
  options?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequestsInsertInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type AuthProviderRequestsMaxFields = {
  __typename?: 'authProviderRequestsMaxFields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type AuthProviderRequestsMinFields = {
  __typename?: 'authProviderRequestsMinFields';
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequestsMutationResponse = {
  __typename?: 'authProviderRequestsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequestsOnConflict = {
  constraint: AuthProviderRequestsConstraint;
  update_columns?: Array<AuthProviderRequestsUpdateColumn>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequestsOrderBy = {
  id?: InputMaybe<OrderBy>;
  options?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequestsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequestsPrependInput = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequestsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequestsSetInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequestsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequestsUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequestsAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<AuthProviderRequestsDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<AuthProviderRequestsDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<AuthProviderRequestsDeleteKeyInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequestsPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequestsSetInput>;
  where: AuthProviderRequestsBoolExp;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AuthProviderRequests_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String']['output'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProvidersAggregate: AuthUserProvidersAggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProvidersAggregate = {
  __typename?: 'authProvidersAggregate';
  aggregate?: Maybe<AuthProvidersAggregateFields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProvidersAggregateFields = {
  __typename?: 'authProvidersAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthProvidersMaxFields>;
  min?: Maybe<AuthProvidersMinFields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProvidersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProvidersBoolExp = {
  _and?: InputMaybe<Array<AuthProvidersBoolExp>>;
  _not?: InputMaybe<AuthProvidersBoolExp>;
  _or?: InputMaybe<Array<AuthProvidersBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
  userProviders?: InputMaybe<AuthUserProvidersBoolExp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProvidersConstraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProvidersInsertInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  userProviders?: InputMaybe<AuthUserProvidersArrRelInsertInput>;
};

/** aggregate max on columns */
export type AuthProvidersMaxFields = {
  __typename?: 'authProvidersMaxFields';
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthProvidersMinFields = {
  __typename?: 'authProvidersMinFields';
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProvidersMutationResponse = {
  __typename?: 'authProvidersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProvidersObjRelInsertInput = {
  data: AuthProvidersInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<AuthProvidersOnConflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProvidersOnConflict = {
  constraint: AuthProvidersConstraint;
  update_columns?: Array<AuthProvidersUpdateColumn>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProvidersOrderBy = {
  id?: InputMaybe<OrderBy>;
  userProvidersAggregate?: InputMaybe<AuthUserProvidersAggregateOrderBy>;
};

/** primary key columns input for table: auth.providers */
export type AuthProvidersPkColumnsInput = {
  id: Scalars['String']['input'];
};

/** select columns of table "auth.providers" */
export enum AuthProvidersSelectColumn {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProvidersSetInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.providers" */
export enum AuthProvidersUpdateColumn {
  /** column name */
  Id = 'id'
}

export type AuthProvidersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProvidersSetInput>;
  where: AuthProvidersBoolExp;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AuthProviders_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz']['output'];
  expiresAt: Scalars['timestamptz']['output'];
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken: Scalars['uuid']['output'];
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregate = {
  __typename?: 'authRefreshTokensAggregate';
  aggregate?: Maybe<AuthRefreshTokensAggregateFields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateFields = {
  __typename?: 'authRefreshTokensAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRefreshTokensMaxFields>;
  min?: Maybe<AuthRefreshTokensMinFields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokensArrRelInsertInput = {
  data: Array<AuthRefreshTokensInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AuthRefreshTokensOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokensBoolExp = {
  _and?: InputMaybe<Array<AuthRefreshTokensBoolExp>>;
  _not?: InputMaybe<AuthRefreshTokensBoolExp>;
  _or?: InputMaybe<Array<AuthRefreshTokensBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  expiresAt?: InputMaybe<TimestamptzComparisonExp>;
  refreshToken?: InputMaybe<UuidComparisonExp>;
  refreshTokenHash?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokensConstraint {
  /** unique or primary key constraint on columns "refresh_token" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokensInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthRefreshTokensMaxFields = {
  __typename?: 'authRefreshTokensMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type AuthRefreshTokensMinFields = {
  __typename?: 'authRefreshTokensMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: Maybe<Scalars['uuid']['output']>;
  refreshTokenHash?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokensMutationResponse = {
  __typename?: 'authRefreshTokensMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokensOnConflict = {
  constraint: AuthRefreshTokensConstraint;
  update_columns?: Array<AuthRefreshTokensUpdateColumn>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokensOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  refreshTokenHash?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokensPkColumnsInput = {
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken: Scalars['uuid']['input'];
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokensSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokensSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Scalars['uuid']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokensUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokensUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokensSetInput>;
  where: AuthRefreshTokensBoolExp;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthRefreshTokensBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<OrderBy>;
  refreshTokenHash?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<OrderBy>;
  refreshTokenHash?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AuthRefreshTokens_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Scalars['uuid']['input']>;
  refreshTokenHash?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String']['output'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRolesAggregate: AuthUserRolesAggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRoleAggregate: UsersAggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRolesAggregate = {
  __typename?: 'authRolesAggregate';
  aggregate?: Maybe<AuthRolesAggregateFields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRolesAggregateFields = {
  __typename?: 'authRolesAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthRolesMaxFields>;
  min?: Maybe<AuthRolesMinFields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRolesBoolExp = {
  _and?: InputMaybe<Array<AuthRolesBoolExp>>;
  _not?: InputMaybe<AuthRolesBoolExp>;
  _or?: InputMaybe<Array<AuthRolesBoolExp>>;
  role?: InputMaybe<StringComparisonExp>;
  userRoles?: InputMaybe<AuthUserRolesBoolExp>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<UsersBoolExp>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRolesConstraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRolesInsertInput = {
  role?: InputMaybe<Scalars['String']['input']>;
  userRoles?: InputMaybe<AuthUserRolesArrRelInsertInput>;
  usersByDefaultRole?: InputMaybe<UsersArrRelInsertInput>;
};

/** aggregate max on columns */
export type AuthRolesMaxFields = {
  __typename?: 'authRolesMaxFields';
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AuthRolesMinFields = {
  __typename?: 'authRolesMinFields';
  role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRolesMutationResponse = {
  __typename?: 'authRolesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRolesObjRelInsertInput = {
  data: AuthRolesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<AuthRolesOnConflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRolesOnConflict = {
  constraint: AuthRolesConstraint;
  update_columns?: Array<AuthRolesUpdateColumn>;
  where?: InputMaybe<AuthRolesBoolExp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRolesOrderBy = {
  role?: InputMaybe<OrderBy>;
  userRolesAggregate?: InputMaybe<AuthUserRolesAggregateOrderBy>;
  usersByDefaultRoleAggregate?: InputMaybe<UsersAggregateOrderBy>;
};

/** primary key columns input for table: auth.roles */
export type AuthRolesPkColumnsInput = {
  role: Scalars['String']['input'];
};

/** select columns of table "auth.roles" */
export enum AuthRolesSelectColumn {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRolesSetInput = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.roles" */
export enum AuthRolesUpdateColumn {
  /** column name */
  Role = 'role'
}

export type AuthRolesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRolesSetInput>;
  where: AuthRolesBoolExp;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AuthRoles_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_StreamCursorValueInput = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String']['output'];
  providerUserId: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProvidersAggregate = {
  __typename?: 'authUserProvidersAggregate';
  aggregate?: Maybe<AuthUserProvidersAggregateFields>;
  nodes: Array<AuthUserProviders>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProvidersAggregateFields = {
  __typename?: 'authUserProvidersAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserProvidersMaxFields>;
  min?: Maybe<AuthUserProvidersMinFields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProvidersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProvidersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProvidersArrRelInsertInput = {
  data: Array<AuthUserProvidersInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AuthUserProvidersOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProvidersBoolExp = {
  _and?: InputMaybe<Array<AuthUserProvidersBoolExp>>;
  _not?: InputMaybe<AuthUserProvidersBoolExp>;
  _or?: InputMaybe<Array<AuthUserProvidersBoolExp>>;
  accessToken?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  provider?: InputMaybe<AuthProvidersBoolExp>;
  providerId?: InputMaybe<StringComparisonExp>;
  providerUserId?: InputMaybe<StringComparisonExp>;
  refreshToken?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProvidersConstraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_id", "provider_user_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProvidersInsertInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  provider?: InputMaybe<AuthProvidersObjRelInsertInput>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserProvidersMaxFields = {
  __typename?: 'authUserProvidersMaxFields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type AuthUserProvidersMinFields = {
  __typename?: 'authUserProvidersMinFields';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  providerUserId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProvidersMutationResponse = {
  __typename?: 'authUserProvidersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProvidersOnConflict = {
  constraint: AuthUserProvidersConstraint;
  update_columns?: Array<AuthUserProvidersUpdateColumn>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProvidersOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  provider?: InputMaybe<AuthProvidersOrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProvidersPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProvidersSelectColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProvidersSetInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProvidersUpdateColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProvidersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProvidersSetInput>;
  where: AuthUserProvidersBoolExp;
};

export type AuthUserProviders_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserProvidersBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AuthUserProviders_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_StreamCursorValueInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  role: Scalars['String']['output'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRolesAggregate = {
  __typename?: 'authUserRolesAggregate';
  aggregate?: Maybe<AuthUserRolesAggregateFields>;
  nodes: Array<AuthUserRoles>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRolesAggregateFields = {
  __typename?: 'authUserRolesAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserRolesMaxFields>;
  min?: Maybe<AuthUserRolesMinFields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRolesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRolesArrRelInsertInput = {
  data: Array<AuthUserRolesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AuthUserRolesOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRolesBoolExp = {
  _and?: InputMaybe<Array<AuthUserRolesBoolExp>>;
  _not?: InputMaybe<AuthUserRolesBoolExp>;
  _or?: InputMaybe<Array<AuthUserRolesBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  role?: InputMaybe<StringComparisonExp>;
  roleByRole?: InputMaybe<AuthRolesBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRolesConstraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRolesInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  roleByRole?: InputMaybe<AuthRolesObjRelInsertInput>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserRolesMaxFields = {
  __typename?: 'authUserRolesMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type AuthUserRolesMinFields = {
  __typename?: 'authUserRolesMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRolesMutationResponse = {
  __typename?: 'authUserRolesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRolesOnConflict = {
  constraint: AuthUserRolesConstraint;
  update_columns?: Array<AuthUserRolesUpdateColumn>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRolesOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  roleByRole?: InputMaybe<AuthRolesOrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRolesPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRolesSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRolesSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRolesUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRolesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRolesSetInput>;
  where: AuthUserRolesBoolExp;
};

export type AuthUserRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserRolesBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AuthUserRoles_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint']['output'];
  credentialId: Scalars['String']['output'];
  credentialPublicKey?: Maybe<Scalars['bytea']['output']>;
  id: Scalars['uuid']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  transports: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeysAggregate = {
  __typename?: 'authUserSecurityKeysAggregate';
  aggregate?: Maybe<AuthUserSecurityKeysAggregateFields>;
  nodes: Array<AuthUserSecurityKeys>;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeysAggregateFields = {
  __typename?: 'authUserSecurityKeysAggregateFields';
  avg?: Maybe<AuthUserSecurityKeysAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AuthUserSecurityKeysMaxFields>;
  min?: Maybe<AuthUserSecurityKeysMinFields>;
  stddev?: Maybe<AuthUserSecurityKeysStddevFields>;
  stddevPop?: Maybe<AuthUserSecurityKeysStddev_PopFields>;
  stddevSamp?: Maybe<AuthUserSecurityKeysStddev_SampFields>;
  sum?: Maybe<AuthUserSecurityKeysSumFields>;
  varPop?: Maybe<AuthUserSecurityKeysVar_PopFields>;
  varSamp?: Maybe<AuthUserSecurityKeysVar_SampFields>;
  variance?: Maybe<AuthUserSecurityKeysVarianceFields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeysAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeysSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeysAggregateOrderBy = {
  avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeysArrRelInsertInput = {
  data: Array<AuthUserSecurityKeysInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AuthUserSecurityKeysOnConflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeysAvgFields = {
  __typename?: 'authUserSecurityKeysAvgFields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeysBoolExp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeysBoolExp>>;
  _not?: InputMaybe<AuthUserSecurityKeysBoolExp>;
  _or?: InputMaybe<Array<AuthUserSecurityKeysBoolExp>>;
  counter?: InputMaybe<BigintComparisonExp>;
  credentialId?: InputMaybe<StringComparisonExp>;
  credentialPublicKey?: InputMaybe<ByteaComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  nickname?: InputMaybe<StringComparisonExp>;
  transports?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeysConstraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = 'user_security_keys_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeysIncInput = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeysInsertInput = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeysMaxFields = {
  __typename?: 'authUserSecurityKeysMaxFields';
  counter?: Maybe<Scalars['bigint']['output']>;
  credentialId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeysMinFields = {
  __typename?: 'authUserSecurityKeysMinFields';
  counter?: Maybe<Scalars['bigint']['output']>;
  credentialId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeysMutationResponse = {
  __typename?: 'authUserSecurityKeysMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeysOnConflict = {
  constraint: AuthUserSecurityKeysConstraint;
  update_columns?: Array<AuthUserSecurityKeysUpdateColumn>;
  where?: InputMaybe<AuthUserSecurityKeysBoolExp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeysOrderBy = {
  counter?: InputMaybe<OrderBy>;
  credentialId?: InputMaybe<OrderBy>;
  credentialPublicKey?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  nickname?: InputMaybe<OrderBy>;
  transports?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeysPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeysSelectColumn {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeysSetInput = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeysStddevFields = {
  __typename?: 'authUserSecurityKeysStddevFields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeysStddev_PopFields = {
  __typename?: 'authUserSecurityKeysStddev_popFields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeysStddev_SampFields = {
  __typename?: 'authUserSecurityKeysStddev_sampFields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeysSumFields = {
  __typename?: 'authUserSecurityKeysSumFields';
  counter?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeysUpdateColumn {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserSecurityKeysUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeysIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeysSetInput>;
  where: AuthUserSecurityKeysBoolExp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeysVar_PopFields = {
  __typename?: 'authUserSecurityKeysVar_popFields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeysVar_SampFields = {
  __typename?: 'authUserSecurityKeysVar_sampFields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeysVarianceFields = {
  __typename?: 'authUserSecurityKeysVarianceFields';
  counter?: Maybe<Scalars['Float']['output']>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserSecurityKeysSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AuthUserSecurityKeysBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<OrderBy>;
  credentialId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  nickname?: InputMaybe<OrderBy>;
  transports?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<OrderBy>;
  credentialId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  nickname?: InputMaybe<OrderBy>;
  transports?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AuthUserSecurityKeys_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_StreamCursorValueInput = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  credentialId?: InputMaybe<Scalars['String']['input']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  transports?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "auth_user_github_provider" */
export type Auth_User_Github_Provider_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Auth_User_Github_Provider_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_User_Github_Provider_StreamCursorValueInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  providerUserId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

export type Budgets_Aggregate_Bool_Exp = {
  count?: InputMaybe<Budgets_Aggregate_Bool_Exp_Count>;
};

export type Budgets_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<BudgetsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<BudgetsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "budgets" */
export type Budgets_Avg_Order_By = {
  initialAmount?: InputMaybe<OrderBy>;
  remainingAmount?: InputMaybe<OrderBy>;
  spentAmount?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "budgets" */
export type Budgets_Max_Order_By = {
  id?: InputMaybe<OrderBy>;
  initialAmount?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  remainingAmount?: InputMaybe<OrderBy>;
  spentAmount?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "budgets" */
export type Budgets_Min_Order_By = {
  id?: InputMaybe<OrderBy>;
  initialAmount?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  remainingAmount?: InputMaybe<OrderBy>;
  spentAmount?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "budgets" */
export type Budgets_Stddev_Order_By = {
  initialAmount?: InputMaybe<OrderBy>;
  remainingAmount?: InputMaybe<OrderBy>;
  spentAmount?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "budgets" */
export type Budgets_Stddev_Pop_Order_By = {
  initialAmount?: InputMaybe<OrderBy>;
  remainingAmount?: InputMaybe<OrderBy>;
  spentAmount?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "budgets" */
export type Budgets_Stddev_Samp_Order_By = {
  initialAmount?: InputMaybe<OrderBy>;
  remainingAmount?: InputMaybe<OrderBy>;
  spentAmount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "budgets" */
export type Budgets_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Budgets_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Budgets_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  initialAmount?: InputMaybe<Scalars['numeric']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  remainingAmount?: InputMaybe<Scalars['numeric']['input']>;
  spentAmount?: InputMaybe<Scalars['numeric']['input']>;
};

/** order by sum() on columns of table "budgets" */
export type Budgets_Sum_Order_By = {
  initialAmount?: InputMaybe<OrderBy>;
  remainingAmount?: InputMaybe<OrderBy>;
  spentAmount?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "budgets" */
export type Budgets_Var_Pop_Order_By = {
  initialAmount?: InputMaybe<OrderBy>;
  remainingAmount?: InputMaybe<OrderBy>;
  spentAmount?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "budgets" */
export type Budgets_Var_Samp_Order_By = {
  initialAmount?: InputMaybe<OrderBy>;
  remainingAmount?: InputMaybe<OrderBy>;
  spentAmount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "budgets" */
export type Budgets_Variance_Order_By = {
  initialAmount?: InputMaybe<OrderBy>;
  remainingAmount?: InputMaybe<OrderBy>;
  spentAmount?: InputMaybe<OrderBy>;
};

export type Github_Issues_Aggregate_Bool_Exp = {
  count?: InputMaybe<Github_Issues_Aggregate_Bool_Exp_Count>;
};

export type Github_Issues_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<GithubIssuesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GithubIssuesBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "github_issues" */
export type Github_Issues_Avg_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "github_issues" */
export type Github_Issues_Max_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  closedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  htmlUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  mergedAt?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "github_issues" */
export type Github_Issues_Min_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  closedAt?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  htmlUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  mergedAt?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "github_issues" */
export type Github_Issues_Stddev_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "github_issues" */
export type Github_Issues_Stddev_Pop_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "github_issues" */
export type Github_Issues_Stddev_Samp_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "github_issues" */
export type Github_Issues_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Github_Issues_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Github_Issues_StreamCursorValueInput = {
  authorId?: InputMaybe<Scalars['bigint']['input']>;
  closedAt?: InputMaybe<Scalars['timestamp']['input']>;
  createdAt?: InputMaybe<Scalars['timestamp']['input']>;
  htmlUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  issueNumber?: InputMaybe<Scalars['bigint']['input']>;
  mergedAt?: InputMaybe<Scalars['timestamp']['input']>;
  repoId?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Scalars['github_issue_status']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['github_issue_type']['input']>;
};

/** order by sum() on columns of table "github_issues" */
export type Github_Issues_Sum_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "github_issues" */
export type Github_Issues_Var_Pop_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "github_issues" */
export type Github_Issues_Var_Samp_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "github_issues" */
export type Github_Issues_Variance_Order_By = {
  authorId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

export type Github_Repos_Contributors_Aggregate_Bool_Exp = {
  count?: InputMaybe<Github_Repos_Contributors_Aggregate_Bool_Exp_Count>;
};

export type Github_Repos_Contributors_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<GithubReposContributorsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<GithubReposContributorsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "github_repos_contributors" */
export type Github_Repos_Contributors_Avg_Order_By = {
  repoId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "github_repos_contributors" */
export type Github_Repos_Contributors_Max_Order_By = {
  repoId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "github_repos_contributors" */
export type Github_Repos_Contributors_Min_Order_By = {
  repoId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "github_repos_contributors" */
export type Github_Repos_Contributors_Stddev_Order_By = {
  repoId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "github_repos_contributors" */
export type Github_Repos_Contributors_Stddev_Pop_Order_By = {
  repoId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "github_repos_contributors" */
export type Github_Repos_Contributors_Stddev_Samp_Order_By = {
  repoId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "github_repos_contributors" */
export type Github_Repos_Contributors_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Github_Repos_Contributors_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Github_Repos_Contributors_StreamCursorValueInput = {
  repoId?: InputMaybe<Scalars['bigint']['input']>;
  userId?: InputMaybe<Scalars['bigint']['input']>;
};

/** order by sum() on columns of table "github_repos_contributors" */
export type Github_Repos_Contributors_Sum_Order_By = {
  repoId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "github_repos_contributors" */
export type Github_Repos_Contributors_Var_Pop_Order_By = {
  repoId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "github_repos_contributors" */
export type Github_Repos_Contributors_Var_Samp_Order_By = {
  repoId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "github_repos_contributors" */
export type Github_Repos_Contributors_Variance_Order_By = {
  repoId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "github_repos" */
export type Github_Repos_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Github_Repos_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Github_Repos_StreamCursorValueInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  forkCount?: InputMaybe<Scalars['Int']['input']>;
  htmlUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  languages?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  stars?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamp']['input']>;
};

/** Streaming cursor of the table "github_users" */
export type Github_Users_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Github_Users_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Github_Users_StreamCursorValueInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  htmlUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type Ignored_Github_Issues_Aggregate_Bool_Exp = {
  count?: InputMaybe<Ignored_Github_Issues_Aggregate_Bool_Exp_Count>;
};

export type Ignored_Github_Issues_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<IgnoredGithubIssuesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<IgnoredGithubIssuesBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "ignored_github_issues" */
export type Ignored_Github_Issues_Avg_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "ignored_github_issues" */
export type Ignored_Github_Issues_Max_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "ignored_github_issues" */
export type Ignored_Github_Issues_Min_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "ignored_github_issues" */
export type Ignored_Github_Issues_Stddev_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "ignored_github_issues" */
export type Ignored_Github_Issues_Stddev_Pop_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "ignored_github_issues" */
export type Ignored_Github_Issues_Stddev_Samp_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "ignored_github_issues" */
export type Ignored_Github_Issues_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Ignored_Github_Issues_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Ignored_Github_Issues_StreamCursorValueInput = {
  issueNumber?: InputMaybe<Scalars['bigint']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  repoId?: InputMaybe<Scalars['bigint']['input']>;
};

/** order by sum() on columns of table "ignored_github_issues" */
export type Ignored_Github_Issues_Sum_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "ignored_github_issues" */
export type Ignored_Github_Issues_Var_Pop_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "ignored_github_issues" */
export type Ignored_Github_Issues_Var_Samp_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "ignored_github_issues" */
export type Ignored_Github_Issues_Variance_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  acceptProjectLeaderInvitation: Scalars['Boolean']['output'];
  acceptTermsAndConditions: Scalars['Uuid']['output'];
  addEthPaymentReceipt: Scalars['Uuid']['output'];
  addFiatPaymentReceipt: Scalars['Uuid']['output'];
  addSponsorToProject: Scalars['Uuid']['output'];
  applyToProject: Scalars['Uuid']['output'];
  cancelPaymentRequest: Payment;
  createIssue: Issue;
  createProject: Scalars['Uuid']['output'];
  createSponsor: Scalars['Uuid']['output'];
  /** delete data from the table: "applications" */
  deleteApplications?: Maybe<ApplicationsMutationResponse>;
  /** delete single row from the table: "applications" */
  deleteApplicationsByPk?: Maybe<Applications>;
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** delete data from the table: "auth.user_github_provider" */
  deleteAuthUserGithubProvider?: Maybe<AuthUserGithubProviderMutationResponse>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeysMutationResponse>;
  /** delete data from the table: "budgets" */
  deleteBudgets?: Maybe<BudgetsMutationResponse>;
  /** delete single row from the table: "budgets" */
  deleteBudgetsByPk?: Maybe<Budgets>;
  /** delete data from the table: "github_issues" */
  deleteGithubIssues?: Maybe<GithubIssuesMutationResponse>;
  /** delete single row from the table: "github_issues" */
  deleteGithubIssuesByPk?: Maybe<GithubIssues>;
  /** delete data from the table: "github_repos" */
  deleteGithubRepos?: Maybe<GithubReposMutationResponse>;
  /** delete single row from the table: "github_repos" */
  deleteGithubReposByPk?: Maybe<GithubRepos>;
  /** delete data from the table: "github_repos_contributors" */
  deleteGithubReposContributors?: Maybe<GithubReposContributorsMutationResponse>;
  /** delete single row from the table: "github_repos_contributors" */
  deleteGithubReposContributorsByPk?: Maybe<GithubReposContributors>;
  /** delete data from the table: "github_users" */
  deleteGithubUsers?: Maybe<GithubUsersMutationResponse>;
  /** delete single row from the table: "github_users" */
  deleteGithubUsersByPk?: Maybe<GithubUsers>;
  /** delete data from the table: "ignored_github_issues" */
  deleteIgnoredGithubIssues?: Maybe<IgnoredGithubIssuesMutationResponse>;
  /** delete single row from the table: "ignored_github_issues" */
  deleteIgnoredGithubIssuesByPk?: Maybe<IgnoredGithubIssues>;
  /** delete data from the table: "onboardings" */
  deleteOnboardings?: Maybe<OnboardingsMutationResponse>;
  /** delete single row from the table: "onboardings" */
  deleteOnboardingsByPk?: Maybe<Onboardings>;
  /** delete data from the table: "payment_requests" */
  deletePaymentRequests?: Maybe<PaymentRequestsMutationResponse>;
  /** delete single row from the table: "payment_requests" */
  deletePaymentRequestsByPk?: Maybe<PaymentRequests>;
  /** delete data from the table: "payments" */
  deletePayments?: Maybe<PaymentsMutationResponse>;
  /** delete single row from the table: "payments" */
  deletePaymentsByPk?: Maybe<Payments>;
  /** delete data from the table: "pending_project_leader_invitations" */
  deletePendingProjectLeaderInvitations?: Maybe<PendingProjectLeaderInvitationsMutationResponse>;
  /** delete single row from the table: "pending_project_leader_invitations" */
  deletePendingProjectLeaderInvitationsByPk?: Maybe<PendingProjectLeaderInvitations>;
  /** delete data from the table: "project_details" */
  deleteProjectDetails?: Maybe<ProjectDetailsMutationResponse>;
  /** delete single row from the table: "project_details" */
  deleteProjectDetailsByPk?: Maybe<ProjectDetails>;
  /** delete data from the table: "project_github_repos" */
  deleteProjectGithubRepos?: Maybe<ProjectGithubReposMutationResponse>;
  /** delete single row from the table: "project_github_repos" */
  deleteProjectGithubReposByPk?: Maybe<ProjectGithubRepos>;
  /** delete data from the table: "project_leads" */
  deleteProjectLeads?: Maybe<ProjectLeadsMutationResponse>;
  /** delete single row from the table: "project_leads" */
  deleteProjectLeadsByPk?: Maybe<ProjectLeads>;
  /** delete data from the table: "projects" */
  deleteProjects?: Maybe<ProjectsMutationResponse>;
  /** delete single row from the table: "projects" */
  deleteProjectsByPk?: Maybe<Projects>;
  /** delete data from the table: "projects_contributors" */
  deleteProjectsContributors?: Maybe<ProjectsContributorsMutationResponse>;
  /** delete single row from the table: "projects_contributors" */
  deleteProjectsContributorsByPk?: Maybe<ProjectsContributors>;
  /** delete data from the table: "projects_sponsors" */
  deleteProjectsSponsors?: Maybe<ProjectsSponsorsMutationResponse>;
  /** delete single row from the table: "projects_sponsors" */
  deleteProjectsSponsorsByPk?: Maybe<ProjectsSponsors>;
  /** delete data from the table: "sponsors" */
  deleteSponsors?: Maybe<SponsorsMutationResponse>;
  /** delete single row from the table: "sponsors" */
  deleteSponsorsByPk?: Maybe<Sponsors>;
  /** delete data from the table: "api.technologies" */
  deleteTechnologies?: Maybe<TechnologiesMutationResponse>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "user_payout_info" */
  deleteUserPayoutInfo?: Maybe<UserPayoutInfoMutationResponse>;
  /** delete single row from the table: "user_payout_info" */
  deleteUserPayoutInfoByPk?: Maybe<UserPayoutInfo>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<UsersMutationResponse>;
  /** delete data from the table: "work_items" */
  deleteWorkItems?: Maybe<WorkItemsMutationResponse>;
  /** delete single row from the table: "work_items" */
  deleteWorkItemsByPk?: Maybe<WorkItems>;
  ignoreIssue: Scalars['Boolean']['output'];
  /** insert data into the table: "applications" */
  insertApplications?: Maybe<ApplicationsMutationResponse>;
  /** insert a single row into the table: "applications" */
  insertApplicationsOne?: Maybe<Applications>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** insert data into the table: "auth.user_github_provider" */
  insertAuthUserGithubProvider?: Maybe<AuthUserGithubProviderMutationResponse>;
  /** insert a single row into the table: "auth.user_github_provider" */
  insertAuthUserGithubProviderOne?: Maybe<AuthUserGithubProvider>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeysMutationResponse>;
  /** insert data into the table: "budgets" */
  insertBudgets?: Maybe<BudgetsMutationResponse>;
  /** insert a single row into the table: "budgets" */
  insertBudgetsOne?: Maybe<Budgets>;
  /** insert data into the table: "github_issues" */
  insertGithubIssues?: Maybe<GithubIssuesMutationResponse>;
  /** insert a single row into the table: "github_issues" */
  insertGithubIssuesOne?: Maybe<GithubIssues>;
  /** insert data into the table: "github_repos" */
  insertGithubRepos?: Maybe<GithubReposMutationResponse>;
  /** insert data into the table: "github_repos_contributors" */
  insertGithubReposContributors?: Maybe<GithubReposContributorsMutationResponse>;
  /** insert a single row into the table: "github_repos_contributors" */
  insertGithubReposContributorsOne?: Maybe<GithubReposContributors>;
  /** insert a single row into the table: "github_repos" */
  insertGithubReposOne?: Maybe<GithubRepos>;
  /** insert data into the table: "github_users" */
  insertGithubUsers?: Maybe<GithubUsersMutationResponse>;
  /** insert a single row into the table: "github_users" */
  insertGithubUsersOne?: Maybe<GithubUsers>;
  /** insert data into the table: "ignored_github_issues" */
  insertIgnoredGithubIssues?: Maybe<IgnoredGithubIssuesMutationResponse>;
  /** insert a single row into the table: "ignored_github_issues" */
  insertIgnoredGithubIssuesOne?: Maybe<IgnoredGithubIssues>;
  /** insert data into the table: "onboardings" */
  insertOnboardings?: Maybe<OnboardingsMutationResponse>;
  /** insert a single row into the table: "onboardings" */
  insertOnboardingsOne?: Maybe<Onboardings>;
  /** insert data into the table: "payment_requests" */
  insertPaymentRequests?: Maybe<PaymentRequestsMutationResponse>;
  /** insert a single row into the table: "payment_requests" */
  insertPaymentRequestsOne?: Maybe<PaymentRequests>;
  /** insert data into the table: "payments" */
  insertPayments?: Maybe<PaymentsMutationResponse>;
  /** insert a single row into the table: "payments" */
  insertPaymentsOne?: Maybe<Payments>;
  /** insert data into the table: "pending_project_leader_invitations" */
  insertPendingProjectLeaderInvitations?: Maybe<PendingProjectLeaderInvitationsMutationResponse>;
  /** insert a single row into the table: "pending_project_leader_invitations" */
  insertPendingProjectLeaderInvitationsOne?: Maybe<PendingProjectLeaderInvitations>;
  /** insert data into the table: "project_details" */
  insertProjectDetails?: Maybe<ProjectDetailsMutationResponse>;
  /** insert a single row into the table: "project_details" */
  insertProjectDetailsOne?: Maybe<ProjectDetails>;
  /** insert data into the table: "project_github_repos" */
  insertProjectGithubRepos?: Maybe<ProjectGithubReposMutationResponse>;
  /** insert a single row into the table: "project_github_repos" */
  insertProjectGithubReposOne?: Maybe<ProjectGithubRepos>;
  /** insert data into the table: "project_leads" */
  insertProjectLeads?: Maybe<ProjectLeadsMutationResponse>;
  /** insert a single row into the table: "project_leads" */
  insertProjectLeadsOne?: Maybe<ProjectLeads>;
  /** insert data into the table: "projects" */
  insertProjects?: Maybe<ProjectsMutationResponse>;
  /** insert data into the table: "projects_contributors" */
  insertProjectsContributors?: Maybe<ProjectsContributorsMutationResponse>;
  /** insert a single row into the table: "projects_contributors" */
  insertProjectsContributorsOne?: Maybe<ProjectsContributors>;
  /** insert a single row into the table: "projects" */
  insertProjectsOne?: Maybe<Projects>;
  /** insert data into the table: "projects_sponsors" */
  insertProjectsSponsors?: Maybe<ProjectsSponsorsMutationResponse>;
  /** insert a single row into the table: "projects_sponsors" */
  insertProjectsSponsorsOne?: Maybe<ProjectsSponsors>;
  /** insert data into the table: "sponsors" */
  insertSponsors?: Maybe<SponsorsMutationResponse>;
  /** insert a single row into the table: "sponsors" */
  insertSponsorsOne?: Maybe<Sponsors>;
  /** insert data into the table: "api.technologies" */
  insertTechnologies?: Maybe<TechnologiesMutationResponse>;
  /** insert a single row into the table: "api.technologies" */
  insertTechnologiesOne?: Maybe<Technologies>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "user_payout_info" */
  insertUserPayoutInfo?: Maybe<UserPayoutInfoMutationResponse>;
  /** insert a single row into the table: "user_payout_info" */
  insertUserPayoutInfoOne?: Maybe<UserPayoutInfo>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<UsersMutationResponse>;
  /** insert data into the table: "work_items" */
  insertWorkItems?: Maybe<WorkItemsMutationResponse>;
  /** insert a single row into the table: "work_items" */
  insertWorkItemsOne?: Maybe<WorkItems>;
  internalCreateIssue: Issue;
  inviteProjectLeader: Scalars['Uuid']['output'];
  linkGithubRepo: Scalars['Uuid']['output'];
  markInvoiceAsReceived: Scalars['Int']['output'];
  markProfileWizardAsDisplayed: Scalars['Uuid']['output'];
  rejectInvoice: Scalars['Int']['output'];
  removeSponsorFromProject: Scalars['Uuid']['output'];
  requestPayment: Payment;
  /** Suggest a new technology */
  suggestTechnology: Scalars['Boolean']['output'];
  unassignProjectLead: Scalars['Boolean']['output'];
  unignoreIssue: Scalars['Boolean']['output'];
  unlinkGithubRepo: Scalars['Uuid']['output'];
  /** update data of the table: "applications" */
  updateApplications?: Maybe<ApplicationsMutationResponse>;
  /** update single row of the table: "applications" */
  updateApplicationsByPk?: Maybe<Applications>;
  /** update multiples rows of table: "applications" */
  updateApplicationsMany?: Maybe<Array<Maybe<ApplicationsMutationResponse>>>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** update multiples rows of table: "auth.provider_requests" */
  updateAuthProviderRequestsMany?: Maybe<Array<Maybe<AuthProviderRequestsMutationResponse>>>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** update multiples rows of table: "auth.providers" */
  updateAuthProvidersMany?: Maybe<Array<Maybe<AuthProvidersMutationResponse>>>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  updateAuthRefreshTokensMany?: Maybe<Array<Maybe<AuthRefreshTokensMutationResponse>>>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** update multiples rows of table: "auth.roles" */
  updateAuthRolesMany?: Maybe<Array<Maybe<AuthRolesMutationResponse>>>;
  /** update data of the table: "auth.user_github_provider" */
  updateAuthUserGithubProvider?: Maybe<AuthUserGithubProviderMutationResponse>;
  /** update multiples rows of table: "auth.user_github_provider" */
  updateAuthUserGithubProviderMany?: Maybe<Array<Maybe<AuthUserGithubProviderMutationResponse>>>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** update multiples rows of table: "auth.user_providers" */
  updateAuthUserProvidersMany?: Maybe<Array<Maybe<AuthUserProvidersMutationResponse>>>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** update multiples rows of table: "auth.user_roles" */
  updateAuthUserRolesMany?: Maybe<Array<Maybe<AuthUserRolesMutationResponse>>>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeysMutationResponse>;
  /** update multiples rows of table: "auth.user_security_keys" */
  updateAuthUserSecurityKeysMany?: Maybe<Array<Maybe<AuthUserSecurityKeysMutationResponse>>>;
  updateBudgetAllocation: Scalars['Uuid']['output'];
  /** update data of the table: "budgets" */
  updateBudgets?: Maybe<BudgetsMutationResponse>;
  /** update single row of the table: "budgets" */
  updateBudgetsByPk?: Maybe<Budgets>;
  /** update multiples rows of table: "budgets" */
  updateBudgetsMany?: Maybe<Array<Maybe<BudgetsMutationResponse>>>;
  /** update data of the table: "github_issues" */
  updateGithubIssues?: Maybe<GithubIssuesMutationResponse>;
  /** update single row of the table: "github_issues" */
  updateGithubIssuesByPk?: Maybe<GithubIssues>;
  /** update multiples rows of table: "github_issues" */
  updateGithubIssuesMany?: Maybe<Array<Maybe<GithubIssuesMutationResponse>>>;
  /** update data of the table: "github_repos" */
  updateGithubRepos?: Maybe<GithubReposMutationResponse>;
  /** update single row of the table: "github_repos" */
  updateGithubReposByPk?: Maybe<GithubRepos>;
  /** update data of the table: "github_repos_contributors" */
  updateGithubReposContributors?: Maybe<GithubReposContributorsMutationResponse>;
  /** update single row of the table: "github_repos_contributors" */
  updateGithubReposContributorsByPk?: Maybe<GithubReposContributors>;
  /** update multiples rows of table: "github_repos_contributors" */
  updateGithubReposContributorsMany?: Maybe<Array<Maybe<GithubReposContributorsMutationResponse>>>;
  /** update multiples rows of table: "github_repos" */
  updateGithubReposMany?: Maybe<Array<Maybe<GithubReposMutationResponse>>>;
  /** update data of the table: "github_users" */
  updateGithubUsers?: Maybe<GithubUsersMutationResponse>;
  /** update single row of the table: "github_users" */
  updateGithubUsersByPk?: Maybe<GithubUsers>;
  /** update multiples rows of table: "github_users" */
  updateGithubUsersMany?: Maybe<Array<Maybe<GithubUsersMutationResponse>>>;
  /** update data of the table: "ignored_github_issues" */
  updateIgnoredGithubIssues?: Maybe<IgnoredGithubIssuesMutationResponse>;
  /** update single row of the table: "ignored_github_issues" */
  updateIgnoredGithubIssuesByPk?: Maybe<IgnoredGithubIssues>;
  /** update multiples rows of table: "ignored_github_issues" */
  updateIgnoredGithubIssuesMany?: Maybe<Array<Maybe<IgnoredGithubIssuesMutationResponse>>>;
  /** update data of the table: "onboardings" */
  updateOnboardings?: Maybe<OnboardingsMutationResponse>;
  /** update single row of the table: "onboardings" */
  updateOnboardingsByPk?: Maybe<Onboardings>;
  /** update multiples rows of table: "onboardings" */
  updateOnboardingsMany?: Maybe<Array<Maybe<OnboardingsMutationResponse>>>;
  /** update data of the table: "payment_requests" */
  updatePaymentRequests?: Maybe<PaymentRequestsMutationResponse>;
  /** update single row of the table: "payment_requests" */
  updatePaymentRequestsByPk?: Maybe<PaymentRequests>;
  /** update multiples rows of table: "payment_requests" */
  updatePaymentRequestsMany?: Maybe<Array<Maybe<PaymentRequestsMutationResponse>>>;
  /** update data of the table: "payments" */
  updatePayments?: Maybe<PaymentsMutationResponse>;
  /** update single row of the table: "payments" */
  updatePaymentsByPk?: Maybe<Payments>;
  /** update multiples rows of table: "payments" */
  updatePaymentsMany?: Maybe<Array<Maybe<PaymentsMutationResponse>>>;
  updatePayoutInfo: Scalars['Uuid']['output'];
  /** update data of the table: "pending_project_leader_invitations" */
  updatePendingProjectLeaderInvitations?: Maybe<PendingProjectLeaderInvitationsMutationResponse>;
  /** update single row of the table: "pending_project_leader_invitations" */
  updatePendingProjectLeaderInvitationsByPk?: Maybe<PendingProjectLeaderInvitations>;
  /** update multiples rows of table: "pending_project_leader_invitations" */
  updatePendingProjectLeaderInvitationsMany?: Maybe<Array<Maybe<PendingProjectLeaderInvitationsMutationResponse>>>;
  updateProject: Scalars['Uuid']['output'];
  /** update data of the table: "project_details" */
  updateProjectDetails?: Maybe<ProjectDetailsMutationResponse>;
  /** update single row of the table: "project_details" */
  updateProjectDetailsByPk?: Maybe<ProjectDetails>;
  /** update multiples rows of table: "project_details" */
  updateProjectDetailsMany?: Maybe<Array<Maybe<ProjectDetailsMutationResponse>>>;
  /** update data of the table: "project_github_repos" */
  updateProjectGithubRepos?: Maybe<ProjectGithubReposMutationResponse>;
  /** update single row of the table: "project_github_repos" */
  updateProjectGithubReposByPk?: Maybe<ProjectGithubRepos>;
  /** update multiples rows of table: "project_github_repos" */
  updateProjectGithubReposMany?: Maybe<Array<Maybe<ProjectGithubReposMutationResponse>>>;
  /** update data of the table: "project_leads" */
  updateProjectLeads?: Maybe<ProjectLeadsMutationResponse>;
  /** update single row of the table: "project_leads" */
  updateProjectLeadsByPk?: Maybe<ProjectLeads>;
  /** update multiples rows of table: "project_leads" */
  updateProjectLeadsMany?: Maybe<Array<Maybe<ProjectLeadsMutationResponse>>>;
  /** update data of the table: "projects" */
  updateProjects?: Maybe<ProjectsMutationResponse>;
  /** update single row of the table: "projects" */
  updateProjectsByPk?: Maybe<Projects>;
  /** update data of the table: "projects_contributors" */
  updateProjectsContributors?: Maybe<ProjectsContributorsMutationResponse>;
  /** update single row of the table: "projects_contributors" */
  updateProjectsContributorsByPk?: Maybe<ProjectsContributors>;
  /** update multiples rows of table: "projects_contributors" */
  updateProjectsContributorsMany?: Maybe<Array<Maybe<ProjectsContributorsMutationResponse>>>;
  /** update multiples rows of table: "projects" */
  updateProjectsMany?: Maybe<Array<Maybe<ProjectsMutationResponse>>>;
  /** update data of the table: "projects_sponsors" */
  updateProjectsSponsors?: Maybe<ProjectsSponsorsMutationResponse>;
  /** update single row of the table: "projects_sponsors" */
  updateProjectsSponsorsByPk?: Maybe<ProjectsSponsors>;
  /** update multiples rows of table: "projects_sponsors" */
  updateProjectsSponsorsMany?: Maybe<Array<Maybe<ProjectsSponsorsMutationResponse>>>;
  updateSponsor: Scalars['Uuid']['output'];
  /** update data of the table: "sponsors" */
  updateSponsors?: Maybe<SponsorsMutationResponse>;
  /** update single row of the table: "sponsors" */
  updateSponsorsByPk?: Maybe<Sponsors>;
  /** update multiples rows of table: "sponsors" */
  updateSponsorsMany?: Maybe<Array<Maybe<SponsorsMutationResponse>>>;
  /** update data of the table: "api.technologies" */
  updateTechnologies?: Maybe<TechnologiesMutationResponse>;
  /** update multiples rows of table: "api.technologies" */
  updateTechnologiesMany?: Maybe<Array<Maybe<TechnologiesMutationResponse>>>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "user_payout_info" */
  updateUserPayoutInfo?: Maybe<UserPayoutInfoMutationResponse>;
  /** update single row of the table: "user_payout_info" */
  updateUserPayoutInfoByPk?: Maybe<UserPayoutInfo>;
  /** update multiples rows of table: "user_payout_info" */
  updateUserPayoutInfoMany?: Maybe<Array<Maybe<UserPayoutInfoMutationResponse>>>;
  updateUserProfile: Scalars['Boolean']['output'];
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update multiples rows of table: "auth.users" */
  updateUsersMany?: Maybe<Array<Maybe<UsersMutationResponse>>>;
  /** update data of the table: "work_items" */
  updateWorkItems?: Maybe<WorkItemsMutationResponse>;
  /** update single row of the table: "work_items" */
  updateWorkItemsByPk?: Maybe<WorkItems>;
  /** update multiples rows of table: "work_items" */
  updateWorkItemsMany?: Maybe<Array<Maybe<WorkItemsMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootAcceptProjectLeaderInvitationArgs = {
  invitationId: Scalars['Uuid']['input'];
};


/** mutation root */
export type Mutation_RootAddEthPaymentReceiptArgs = {
  amount: Scalars['String']['input'];
  currencyCode: Scalars['String']['input'];
  paymentId: Scalars['Uuid']['input'];
  projectId: Scalars['Uuid']['input'];
  recipientIdentity: EthereumIdentityInput;
  transactionHash: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootAddFiatPaymentReceiptArgs = {
  amount: Scalars['String']['input'];
  currencyCode: Scalars['String']['input'];
  paymentId: Scalars['Uuid']['input'];
  projectId: Scalars['Uuid']['input'];
  recipientIban: Scalars['Iban']['input'];
  transactionReference: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootAddSponsorToProjectArgs = {
  projectId: Scalars['Uuid']['input'];
  sponsorId: Scalars['Uuid']['input'];
};


/** mutation root */
export type Mutation_RootApplyToProjectArgs = {
  projectId: Scalars['Uuid']['input'];
};


/** mutation root */
export type Mutation_RootCancelPaymentRequestArgs = {
  paymentId: Scalars['Uuid']['input'];
  projectId: Scalars['Uuid']['input'];
};


/** mutation root */
export type Mutation_RootCreateIssueArgs = {
  description: Scalars['String']['input'];
  githubRepoId: Scalars['Int']['input'];
  projectId: Scalars['Uuid']['input'];
  title: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootCreateProjectArgs = {
  hiring?: InputMaybe<Scalars['Boolean']['input']>;
  initialBudget?: InputMaybe<Scalars['Int']['input']>;
  logoUrl?: InputMaybe<Scalars['Url']['input']>;
  longDescription: Scalars['String']['input'];
  name: Scalars['String']['input'];
  rank?: InputMaybe<Scalars['Int']['input']>;
  shortDescription: Scalars['String']['input'];
  telegramLink?: InputMaybe<Scalars['Url']['input']>;
  visibility?: InputMaybe<Visibility>;
};


/** mutation root */
export type Mutation_RootCreateSponsorArgs = {
  logoUrl: Scalars['Url']['input'];
  name: Scalars['String']['input'];
  url?: InputMaybe<Scalars['Url']['input']>;
};


/** mutation root */
export type Mutation_RootDeleteApplicationsArgs = {
  where: ApplicationsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteApplicationsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequestsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProvidersBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokensBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRolesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserGithubProviderArgs = {
  where: AuthUserGithubProviderBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProvidersBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRolesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeysBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteBudgetsArgs = {
  where: BudgetsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteBudgetsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteGithubIssuesArgs = {
  where: GithubIssuesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteGithubIssuesByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDeleteGithubReposArgs = {
  where: GithubReposBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteGithubReposByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDeleteGithubReposContributorsArgs = {
  where: GithubReposContributorsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteGithubReposContributorsByPkArgs = {
  repoId: Scalars['bigint']['input'];
  userId: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDeleteGithubUsersArgs = {
  where: GithubUsersBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteGithubUsersByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDeleteIgnoredGithubIssuesArgs = {
  where: IgnoredGithubIssuesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteIgnoredGithubIssuesByPkArgs = {
  issueNumber: Scalars['bigint']['input'];
  projectId: Scalars['uuid']['input'];
  repoId: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDeleteOnboardingsArgs = {
  where: OnboardingsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteOnboardingsByPkArgs = {
  userId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeletePaymentRequestsArgs = {
  where: PaymentRequestsBoolExp;
};


/** mutation root */
export type Mutation_RootDeletePaymentRequestsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeletePaymentsArgs = {
  where: PaymentsBoolExp;
};


/** mutation root */
export type Mutation_RootDeletePaymentsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeletePendingProjectLeaderInvitationsArgs = {
  where: PendingProjectLeaderInvitationsBoolExp;
};


/** mutation root */
export type Mutation_RootDeletePendingProjectLeaderInvitationsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteProjectDetailsArgs = {
  where: ProjectDetailsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteProjectDetailsByPkArgs = {
  projectId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteProjectGithubReposArgs = {
  where: ProjectGithubReposBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteProjectGithubReposByPkArgs = {
  githubRepoId: Scalars['bigint']['input'];
  projectId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteProjectLeadsArgs = {
  where: ProjectLeadsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteProjectLeadsByPkArgs = {
  projectId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteProjectsArgs = {
  where: ProjectsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteProjectsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteProjectsContributorsArgs = {
  where: ProjectsContributorsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteProjectsContributorsByPkArgs = {
  githubUserId: Scalars['bigint']['input'];
  projectId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteProjectsSponsorsArgs = {
  where: ProjectsSponsorsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteProjectsSponsorsByPkArgs = {
  projectId: Scalars['uuid']['input'];
  sponsorId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteSponsorsArgs = {
  where: SponsorsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteSponsorsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteTechnologiesArgs = {
  where: TechnologiesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUserPayoutInfoArgs = {
  where: UserPayoutInfoBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserPayoutInfoByPkArgs = {
  userId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteWorkItemsArgs = {
  where: WorkItemsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteWorkItemsByPkArgs = {
  issueNumber: Scalars['bigint']['input'];
  paymentId: Scalars['uuid']['input'];
  repoId: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootIgnoreIssueArgs = {
  issueNumber: Scalars['GithubIssueNumber']['input'];
  projectId: Scalars['Uuid']['input'];
  repoId: Scalars['GithubRepoId']['input'];
};


/** mutation root */
export type Mutation_RootInsertApplicationsArgs = {
  objects: Array<ApplicationsInsertInput>;
  onConflict?: InputMaybe<ApplicationsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertApplicationsOneArgs = {
  object: ApplicationsInsertInput;
  onConflict?: InputMaybe<ApplicationsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProvidersInsertInput;
  onConflict?: InputMaybe<AuthProvidersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequestsInsertInput;
  onConflict?: InputMaybe<AuthProviderRequestsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequestsInsertInput>;
  onConflict?: InputMaybe<AuthProviderRequestsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProvidersInsertInput>;
  onConflict?: InputMaybe<AuthProvidersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokensInsertInput;
  onConflict?: InputMaybe<AuthRefreshTokensOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokensInsertInput>;
  onConflict?: InputMaybe<AuthRefreshTokensOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRolesInsertInput;
  onConflict?: InputMaybe<AuthRolesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRolesInsertInput>;
  onConflict?: InputMaybe<AuthRolesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserGithubProviderArgs = {
  objects: Array<AuthUserGithubProviderInsertInput>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserGithubProviderOneArgs = {
  object: AuthUserGithubProviderInsertInput;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProvidersInsertInput;
  onConflict?: InputMaybe<AuthUserProvidersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProvidersInsertInput>;
  onConflict?: InputMaybe<AuthUserProvidersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRolesInsertInput;
  onConflict?: InputMaybe<AuthUserRolesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRolesInsertInput>;
  onConflict?: InputMaybe<AuthUserRolesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeysInsertInput;
  onConflict?: InputMaybe<AuthUserSecurityKeysOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeysInsertInput>;
  onConflict?: InputMaybe<AuthUserSecurityKeysOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertBudgetsArgs = {
  objects: Array<BudgetsInsertInput>;
  onConflict?: InputMaybe<BudgetsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertBudgetsOneArgs = {
  object: BudgetsInsertInput;
  onConflict?: InputMaybe<BudgetsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubIssuesArgs = {
  objects: Array<GithubIssuesInsertInput>;
  onConflict?: InputMaybe<GithubIssuesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubIssuesOneArgs = {
  object: GithubIssuesInsertInput;
  onConflict?: InputMaybe<GithubIssuesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubReposArgs = {
  objects: Array<GithubReposInsertInput>;
  onConflict?: InputMaybe<GithubReposOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubReposContributorsArgs = {
  objects: Array<GithubReposContributorsInsertInput>;
  onConflict?: InputMaybe<GithubReposContributorsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubReposContributorsOneArgs = {
  object: GithubReposContributorsInsertInput;
  onConflict?: InputMaybe<GithubReposContributorsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubReposOneArgs = {
  object: GithubReposInsertInput;
  onConflict?: InputMaybe<GithubReposOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubUsersArgs = {
  objects: Array<GithubUsersInsertInput>;
  onConflict?: InputMaybe<GithubUsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubUsersOneArgs = {
  object: GithubUsersInsertInput;
  onConflict?: InputMaybe<GithubUsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertIgnoredGithubIssuesArgs = {
  objects: Array<IgnoredGithubIssuesInsertInput>;
  onConflict?: InputMaybe<IgnoredGithubIssuesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertIgnoredGithubIssuesOneArgs = {
  object: IgnoredGithubIssuesInsertInput;
  onConflict?: InputMaybe<IgnoredGithubIssuesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOnboardingsArgs = {
  objects: Array<OnboardingsInsertInput>;
  onConflict?: InputMaybe<OnboardingsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertOnboardingsOneArgs = {
  object: OnboardingsInsertInput;
  onConflict?: InputMaybe<OnboardingsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPaymentRequestsArgs = {
  objects: Array<PaymentRequestsInsertInput>;
  onConflict?: InputMaybe<PaymentRequestsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPaymentRequestsOneArgs = {
  object: PaymentRequestsInsertInput;
  onConflict?: InputMaybe<PaymentRequestsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPaymentsArgs = {
  objects: Array<PaymentsInsertInput>;
  onConflict?: InputMaybe<PaymentsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPaymentsOneArgs = {
  object: PaymentsInsertInput;
  onConflict?: InputMaybe<PaymentsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPendingProjectLeaderInvitationsArgs = {
  objects: Array<PendingProjectLeaderInvitationsInsertInput>;
  onConflict?: InputMaybe<PendingProjectLeaderInvitationsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPendingProjectLeaderInvitationsOneArgs = {
  object: PendingProjectLeaderInvitationsInsertInput;
  onConflict?: InputMaybe<PendingProjectLeaderInvitationsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectDetailsArgs = {
  objects: Array<ProjectDetailsInsertInput>;
  onConflict?: InputMaybe<ProjectDetailsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectDetailsOneArgs = {
  object: ProjectDetailsInsertInput;
  onConflict?: InputMaybe<ProjectDetailsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectGithubReposArgs = {
  objects: Array<ProjectGithubReposInsertInput>;
  onConflict?: InputMaybe<ProjectGithubReposOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectGithubReposOneArgs = {
  object: ProjectGithubReposInsertInput;
  onConflict?: InputMaybe<ProjectGithubReposOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectLeadsArgs = {
  objects: Array<ProjectLeadsInsertInput>;
  onConflict?: InputMaybe<ProjectLeadsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectLeadsOneArgs = {
  object: ProjectLeadsInsertInput;
  onConflict?: InputMaybe<ProjectLeadsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectsArgs = {
  objects: Array<ProjectsInsertInput>;
  onConflict?: InputMaybe<ProjectsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectsContributorsArgs = {
  objects: Array<ProjectsContributorsInsertInput>;
  onConflict?: InputMaybe<ProjectsContributorsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectsContributorsOneArgs = {
  object: ProjectsContributorsInsertInput;
  onConflict?: InputMaybe<ProjectsContributorsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectsOneArgs = {
  object: ProjectsInsertInput;
  onConflict?: InputMaybe<ProjectsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectsSponsorsArgs = {
  objects: Array<ProjectsSponsorsInsertInput>;
  onConflict?: InputMaybe<ProjectsSponsorsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProjectsSponsorsOneArgs = {
  object: ProjectsSponsorsInsertInput;
  onConflict?: InputMaybe<ProjectsSponsorsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertSponsorsArgs = {
  objects: Array<SponsorsInsertInput>;
  onConflict?: InputMaybe<SponsorsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertSponsorsOneArgs = {
  object: SponsorsInsertInput;
  onConflict?: InputMaybe<SponsorsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTechnologiesArgs = {
  objects: Array<TechnologiesInsertInput>;
};


/** mutation root */
export type Mutation_RootInsertTechnologiesOneArgs = {
  object: TechnologiesInsertInput;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: UsersInsertInput;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserPayoutInfoArgs = {
  objects: Array<UserPayoutInfoInsertInput>;
  onConflict?: InputMaybe<UserPayoutInfoOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserPayoutInfoOneArgs = {
  object: UserPayoutInfoInsertInput;
  onConflict?: InputMaybe<UserPayoutInfoOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkItemsArgs = {
  objects: Array<WorkItemsInsertInput>;
  onConflict?: InputMaybe<WorkItemsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkItemsOneArgs = {
  object: WorkItemsInsertInput;
  onConflict?: InputMaybe<WorkItemsOnConflict>;
};


/** mutation root */
export type Mutation_RootInternalCreateIssueArgs = {
  description: Scalars['String']['input'];
  repoId: Scalars['GithubRepoId']['input'];
  title: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInviteProjectLeaderArgs = {
  githubUserId: Scalars['Int']['input'];
  projectId: Scalars['Uuid']['input'];
};


/** mutation root */
export type Mutation_RootLinkGithubRepoArgs = {
  githubRepoId: Scalars['Int']['input'];
  projectId: Scalars['Uuid']['input'];
};


/** mutation root */
export type Mutation_RootMarkInvoiceAsReceivedArgs = {
  paymentReferences: Array<PaymentReference>;
};


/** mutation root */
export type Mutation_RootRejectInvoiceArgs = {
  paymentReferences: Array<PaymentReference>;
};


/** mutation root */
export type Mutation_RootRemoveSponsorFromProjectArgs = {
  projectId: Scalars['Uuid']['input'];
  sponsorId: Scalars['Uuid']['input'];
};


/** mutation root */
export type Mutation_RootRequestPaymentArgs = {
  amountInUsd: Scalars['Int']['input'];
  hoursWorked: Scalars['Int']['input'];
  projectId: Scalars['Uuid']['input'];
  reason: Reason;
  recipientId: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootSuggestTechnologyArgs = {
  suggestion: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootUnassignProjectLeadArgs = {
  projectId: Scalars['Uuid']['input'];
  userId: Scalars['Uuid']['input'];
};


/** mutation root */
export type Mutation_RootUnignoreIssueArgs = {
  issueNumber: Scalars['GithubIssueNumber']['input'];
  projectId: Scalars['Uuid']['input'];
  repoId: Scalars['GithubRepoId']['input'];
};


/** mutation root */
export type Mutation_RootUnlinkGithubRepoArgs = {
  githubRepoId: Scalars['Int']['input'];
  projectId: Scalars['Uuid']['input'];
};


/** mutation root */
export type Mutation_RootUpdateApplicationsArgs = {
  _set?: InputMaybe<ApplicationsSetInput>;
  where: ApplicationsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateApplicationsByPkArgs = {
  _set?: InputMaybe<ApplicationsSetInput>;
  pk_columns: ApplicationsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateApplicationsManyArgs = {
  updates: Array<ApplicationsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProvidersSetInput>;
  pk_columns: AuthProvidersPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequestsAppendInput>;
  _deleteAtPath?: InputMaybe<AuthProviderRequestsDeleteAtPathInput>;
  _deleteElem?: InputMaybe<AuthProviderRequestsDeleteElemInput>;
  _deleteKey?: InputMaybe<AuthProviderRequestsDeleteKeyInput>;
  _prepend?: InputMaybe<AuthProviderRequestsPrependInput>;
  _set?: InputMaybe<AuthProviderRequestsSetInput>;
  pk_columns: AuthProviderRequestsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequestsAppendInput>;
  _deleteAtPath?: InputMaybe<AuthProviderRequestsDeleteAtPathInput>;
  _deleteElem?: InputMaybe<AuthProviderRequestsDeleteElemInput>;
  _deleteKey?: InputMaybe<AuthProviderRequestsDeleteKeyInput>;
  _prepend?: InputMaybe<AuthProviderRequestsPrependInput>;
  _set?: InputMaybe<AuthProviderRequestsSetInput>;
  where: AuthProviderRequestsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsManyArgs = {
  updates: Array<AuthProviderRequestsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProvidersSetInput>;
  where: AuthProvidersBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersManyArgs = {
  updates: Array<AuthProvidersUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _set?: InputMaybe<AuthRefreshTokensSetInput>;
  pk_columns: AuthRefreshTokensPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _set?: InputMaybe<AuthRefreshTokensSetInput>;
  where: AuthRefreshTokensBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensManyArgs = {
  updates: Array<AuthRefreshTokensUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRolesSetInput>;
  pk_columns: AuthRolesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRolesSetInput>;
  where: AuthRolesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesManyArgs = {
  updates: Array<AuthRolesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserGithubProviderArgs = {
  _inc?: InputMaybe<AuthUserGithubProviderIncInput>;
  _set?: InputMaybe<AuthUserGithubProviderSetInput>;
  where: AuthUserGithubProviderBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserGithubProviderManyArgs = {
  updates: Array<AuthUserGithubProviderUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProvidersSetInput>;
  pk_columns: AuthUserProvidersPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProvidersSetInput>;
  where: AuthUserProvidersBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersManyArgs = {
  updates: Array<AuthUserProvidersUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRolesSetInput>;
  pk_columns: AuthUserRolesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRolesSetInput>;
  where: AuthUserRolesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesManyArgs = {
  updates: Array<AuthUserRolesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeysIncInput>;
  _set?: InputMaybe<AuthUserSecurityKeysSetInput>;
  pk_columns: AuthUserSecurityKeysPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeysIncInput>;
  _set?: InputMaybe<AuthUserSecurityKeysSetInput>;
  where: AuthUserSecurityKeysBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysManyArgs = {
  updates: Array<AuthUserSecurityKeysUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateBudgetAllocationArgs = {
  newRemainingAmountInUsd: Scalars['Int']['input'];
  projectId: Scalars['Uuid']['input'];
};


/** mutation root */
export type Mutation_RootUpdateBudgetsArgs = {
  _inc?: InputMaybe<BudgetsIncInput>;
  _set?: InputMaybe<BudgetsSetInput>;
  where: BudgetsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateBudgetsByPkArgs = {
  _inc?: InputMaybe<BudgetsIncInput>;
  _set?: InputMaybe<BudgetsSetInput>;
  pk_columns: BudgetsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateBudgetsManyArgs = {
  updates: Array<BudgetsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateGithubIssuesArgs = {
  _inc?: InputMaybe<GithubIssuesIncInput>;
  _set?: InputMaybe<GithubIssuesSetInput>;
  where: GithubIssuesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateGithubIssuesByPkArgs = {
  _inc?: InputMaybe<GithubIssuesIncInput>;
  _set?: InputMaybe<GithubIssuesSetInput>;
  pk_columns: GithubIssuesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateGithubIssuesManyArgs = {
  updates: Array<GithubIssuesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateGithubReposArgs = {
  _append?: InputMaybe<GithubReposAppendInput>;
  _deleteAtPath?: InputMaybe<GithubReposDeleteAtPathInput>;
  _deleteElem?: InputMaybe<GithubReposDeleteElemInput>;
  _deleteKey?: InputMaybe<GithubReposDeleteKeyInput>;
  _inc?: InputMaybe<GithubReposIncInput>;
  _prepend?: InputMaybe<GithubReposPrependInput>;
  _set?: InputMaybe<GithubReposSetInput>;
  where: GithubReposBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateGithubReposByPkArgs = {
  _append?: InputMaybe<GithubReposAppendInput>;
  _deleteAtPath?: InputMaybe<GithubReposDeleteAtPathInput>;
  _deleteElem?: InputMaybe<GithubReposDeleteElemInput>;
  _deleteKey?: InputMaybe<GithubReposDeleteKeyInput>;
  _inc?: InputMaybe<GithubReposIncInput>;
  _prepend?: InputMaybe<GithubReposPrependInput>;
  _set?: InputMaybe<GithubReposSetInput>;
  pk_columns: GithubReposPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateGithubReposContributorsArgs = {
  _inc?: InputMaybe<GithubReposContributorsIncInput>;
  _set?: InputMaybe<GithubReposContributorsSetInput>;
  where: GithubReposContributorsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateGithubReposContributorsByPkArgs = {
  _inc?: InputMaybe<GithubReposContributorsIncInput>;
  _set?: InputMaybe<GithubReposContributorsSetInput>;
  pk_columns: GithubReposContributorsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateGithubReposContributorsManyArgs = {
  updates: Array<GithubReposContributorsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateGithubReposManyArgs = {
  updates: Array<GithubReposUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateGithubUsersArgs = {
  _inc?: InputMaybe<GithubUsersIncInput>;
  _set?: InputMaybe<GithubUsersSetInput>;
  where: GithubUsersBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateGithubUsersByPkArgs = {
  _inc?: InputMaybe<GithubUsersIncInput>;
  _set?: InputMaybe<GithubUsersSetInput>;
  pk_columns: GithubUsersPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateGithubUsersManyArgs = {
  updates: Array<GithubUsersUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateIgnoredGithubIssuesArgs = {
  _inc?: InputMaybe<IgnoredGithubIssuesIncInput>;
  _set?: InputMaybe<IgnoredGithubIssuesSetInput>;
  where: IgnoredGithubIssuesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateIgnoredGithubIssuesByPkArgs = {
  _inc?: InputMaybe<IgnoredGithubIssuesIncInput>;
  _set?: InputMaybe<IgnoredGithubIssuesSetInput>;
  pk_columns: IgnoredGithubIssuesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateIgnoredGithubIssuesManyArgs = {
  updates: Array<IgnoredGithubIssuesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateOnboardingsArgs = {
  _set?: InputMaybe<OnboardingsSetInput>;
  where: OnboardingsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateOnboardingsByPkArgs = {
  _set?: InputMaybe<OnboardingsSetInput>;
  pk_columns: OnboardingsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateOnboardingsManyArgs = {
  updates: Array<OnboardingsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdatePaymentRequestsArgs = {
  _inc?: InputMaybe<PaymentRequestsIncInput>;
  _set?: InputMaybe<PaymentRequestsSetInput>;
  where: PaymentRequestsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdatePaymentRequestsByPkArgs = {
  _inc?: InputMaybe<PaymentRequestsIncInput>;
  _set?: InputMaybe<PaymentRequestsSetInput>;
  pk_columns: PaymentRequestsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdatePaymentRequestsManyArgs = {
  updates: Array<PaymentRequestsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdatePaymentsArgs = {
  _append?: InputMaybe<PaymentsAppendInput>;
  _deleteAtPath?: InputMaybe<PaymentsDeleteAtPathInput>;
  _deleteElem?: InputMaybe<PaymentsDeleteElemInput>;
  _deleteKey?: InputMaybe<PaymentsDeleteKeyInput>;
  _inc?: InputMaybe<PaymentsIncInput>;
  _prepend?: InputMaybe<PaymentsPrependInput>;
  _set?: InputMaybe<PaymentsSetInput>;
  where: PaymentsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdatePaymentsByPkArgs = {
  _append?: InputMaybe<PaymentsAppendInput>;
  _deleteAtPath?: InputMaybe<PaymentsDeleteAtPathInput>;
  _deleteElem?: InputMaybe<PaymentsDeleteElemInput>;
  _deleteKey?: InputMaybe<PaymentsDeleteKeyInput>;
  _inc?: InputMaybe<PaymentsIncInput>;
  _prepend?: InputMaybe<PaymentsPrependInput>;
  _set?: InputMaybe<PaymentsSetInput>;
  pk_columns: PaymentsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdatePaymentsManyArgs = {
  updates: Array<PaymentsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdatePayoutInfoArgs = {
  identity?: InputMaybe<IdentityInput>;
  location?: InputMaybe<Location>;
  payoutSettings?: InputMaybe<PayoutSettingsInput>;
};


/** mutation root */
export type Mutation_RootUpdatePendingProjectLeaderInvitationsArgs = {
  _inc?: InputMaybe<PendingProjectLeaderInvitationsIncInput>;
  _set?: InputMaybe<PendingProjectLeaderInvitationsSetInput>;
  where: PendingProjectLeaderInvitationsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdatePendingProjectLeaderInvitationsByPkArgs = {
  _inc?: InputMaybe<PendingProjectLeaderInvitationsIncInput>;
  _set?: InputMaybe<PendingProjectLeaderInvitationsSetInput>;
  pk_columns: PendingProjectLeaderInvitationsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdatePendingProjectLeaderInvitationsManyArgs = {
  updates: Array<PendingProjectLeaderInvitationsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateProjectArgs = {
  hiring?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Uuid']['input'];
  logoUrl?: InputMaybe<Scalars['Url']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  telegramLink?: InputMaybe<Scalars['Url']['input']>;
  visibility?: InputMaybe<Visibility>;
};


/** mutation root */
export type Mutation_RootUpdateProjectDetailsArgs = {
  _inc?: InputMaybe<ProjectDetailsIncInput>;
  _set?: InputMaybe<ProjectDetailsSetInput>;
  where: ProjectDetailsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateProjectDetailsByPkArgs = {
  _inc?: InputMaybe<ProjectDetailsIncInput>;
  _set?: InputMaybe<ProjectDetailsSetInput>;
  pk_columns: ProjectDetailsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateProjectDetailsManyArgs = {
  updates: Array<ProjectDetailsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateProjectGithubReposArgs = {
  _inc?: InputMaybe<ProjectGithubReposIncInput>;
  _set?: InputMaybe<ProjectGithubReposSetInput>;
  where: ProjectGithubReposBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateProjectGithubReposByPkArgs = {
  _inc?: InputMaybe<ProjectGithubReposIncInput>;
  _set?: InputMaybe<ProjectGithubReposSetInput>;
  pk_columns: ProjectGithubReposPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateProjectGithubReposManyArgs = {
  updates: Array<ProjectGithubReposUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateProjectLeadsArgs = {
  _set?: InputMaybe<ProjectLeadsSetInput>;
  where: ProjectLeadsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateProjectLeadsByPkArgs = {
  _set?: InputMaybe<ProjectLeadsSetInput>;
  pk_columns: ProjectLeadsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateProjectLeadsManyArgs = {
  updates: Array<ProjectLeadsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateProjectsArgs = {
  _set?: InputMaybe<ProjectsSetInput>;
  where: ProjectsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateProjectsByPkArgs = {
  _set?: InputMaybe<ProjectsSetInput>;
  pk_columns: ProjectsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateProjectsContributorsArgs = {
  _inc?: InputMaybe<ProjectsContributorsIncInput>;
  _set?: InputMaybe<ProjectsContributorsSetInput>;
  where: ProjectsContributorsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateProjectsContributorsByPkArgs = {
  _inc?: InputMaybe<ProjectsContributorsIncInput>;
  _set?: InputMaybe<ProjectsContributorsSetInput>;
  pk_columns: ProjectsContributorsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateProjectsContributorsManyArgs = {
  updates: Array<ProjectsContributorsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateProjectsManyArgs = {
  updates: Array<ProjectsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateProjectsSponsorsArgs = {
  _set?: InputMaybe<ProjectsSponsorsSetInput>;
  where: ProjectsSponsorsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateProjectsSponsorsByPkArgs = {
  _set?: InputMaybe<ProjectsSponsorsSetInput>;
  pk_columns: ProjectsSponsorsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateProjectsSponsorsManyArgs = {
  updates: Array<ProjectsSponsorsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateSponsorArgs = {
  logoUrl?: InputMaybe<Scalars['Url']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sponsorId: Scalars['Uuid']['input'];
  url?: InputMaybe<Scalars['Url']['input']>;
};


/** mutation root */
export type Mutation_RootUpdateSponsorsArgs = {
  _set?: InputMaybe<SponsorsSetInput>;
  where: SponsorsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateSponsorsByPkArgs = {
  _set?: InputMaybe<SponsorsSetInput>;
  pk_columns: SponsorsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateSponsorsManyArgs = {
  updates: Array<SponsorsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateTechnologiesArgs = {
  _set?: InputMaybe<TechnologiesSetInput>;
  where: TechnologiesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateTechnologiesManyArgs = {
  updates: Array<TechnologiesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<UsersAppendInput>;
  _deleteAtPath?: InputMaybe<UsersDeleteAtPathInput>;
  _deleteElem?: InputMaybe<UsersDeleteElemInput>;
  _deleteKey?: InputMaybe<UsersDeleteKeyInput>;
  _prepend?: InputMaybe<UsersPrependInput>;
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserPayoutInfoArgs = {
  _append?: InputMaybe<UserPayoutInfoAppendInput>;
  _deleteAtPath?: InputMaybe<UserPayoutInfoDeleteAtPathInput>;
  _deleteElem?: InputMaybe<UserPayoutInfoDeleteElemInput>;
  _deleteKey?: InputMaybe<UserPayoutInfoDeleteKeyInput>;
  _prepend?: InputMaybe<UserPayoutInfoPrependInput>;
  _set?: InputMaybe<UserPayoutInfoSetInput>;
  where: UserPayoutInfoBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserPayoutInfoByPkArgs = {
  _append?: InputMaybe<UserPayoutInfoAppendInput>;
  _deleteAtPath?: InputMaybe<UserPayoutInfoDeleteAtPathInput>;
  _deleteElem?: InputMaybe<UserPayoutInfoDeleteElemInput>;
  _deleteKey?: InputMaybe<UserPayoutInfoDeleteKeyInput>;
  _prepend?: InputMaybe<UserPayoutInfoPrependInput>;
  _set?: InputMaybe<UserPayoutInfoSetInput>;
  pk_columns: UserPayoutInfoPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserPayoutInfoManyArgs = {
  updates: Array<UserPayoutInfoUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserProfileArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  contactInformations: Array<Information>;
  cover?: InputMaybe<ProfileCover>;
  languages?: InputMaybe<Array<Language>>;
  location?: InputMaybe<Scalars['String']['input']>;
  lookingForAJob: Scalars['Boolean']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
  weeklyAllocatedTime: AllocatedTime;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<UsersAppendInput>;
  _deleteAtPath?: InputMaybe<UsersDeleteAtPathInput>;
  _deleteElem?: InputMaybe<UsersDeleteElemInput>;
  _deleteKey?: InputMaybe<UsersDeleteKeyInput>;
  _prepend?: InputMaybe<UsersPrependInput>;
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateWorkItemsArgs = {
  _inc?: InputMaybe<WorkItemsIncInput>;
  _set?: InputMaybe<WorkItemsSetInput>;
  where: WorkItemsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateWorkItemsByPkArgs = {
  _inc?: InputMaybe<WorkItemsIncInput>;
  _set?: InputMaybe<WorkItemsSetInput>;
  pk_columns: WorkItemsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateWorkItemsManyArgs = {
  updates: Array<WorkItemsUpdates>;
};

/** Streaming cursor of the table "onboardings" */
export type Onboardings_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Onboardings_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Onboardings_StreamCursorValueInput = {
  profileWizardDisplayDate?: InputMaybe<Scalars['timestamp']['input']>;
  termsAndConditionsAcceptanceDate?: InputMaybe<Scalars['timestamp']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

export type Payment_Requests_Aggregate_Bool_Exp = {
  count?: InputMaybe<Payment_Requests_Aggregate_Bool_Exp_Count>;
};

export type Payment_Requests_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<PaymentRequestsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PaymentRequestsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "payment_requests" */
export type Payment_Requests_Avg_Order_By = {
  amountInUsd?: InputMaybe<OrderBy>;
  hoursWorked?: InputMaybe<OrderBy>;
  recipientId?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "payment_requests" */
export type Payment_Requests_Max_Order_By = {
  amountInUsd?: InputMaybe<OrderBy>;
  budgetId?: InputMaybe<OrderBy>;
  hoursWorked?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  invoiceReceivedAt?: InputMaybe<OrderBy>;
  recipientId?: InputMaybe<OrderBy>;
  requestedAt?: InputMaybe<OrderBy>;
  requestorId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "payment_requests" */
export type Payment_Requests_Min_Order_By = {
  amountInUsd?: InputMaybe<OrderBy>;
  budgetId?: InputMaybe<OrderBy>;
  hoursWorked?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  invoiceReceivedAt?: InputMaybe<OrderBy>;
  recipientId?: InputMaybe<OrderBy>;
  requestedAt?: InputMaybe<OrderBy>;
  requestorId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "payment_requests" */
export type Payment_Requests_Stddev_Order_By = {
  amountInUsd?: InputMaybe<OrderBy>;
  hoursWorked?: InputMaybe<OrderBy>;
  recipientId?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "payment_requests" */
export type Payment_Requests_Stddev_Pop_Order_By = {
  amountInUsd?: InputMaybe<OrderBy>;
  hoursWorked?: InputMaybe<OrderBy>;
  recipientId?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "payment_requests" */
export type Payment_Requests_Stddev_Samp_Order_By = {
  amountInUsd?: InputMaybe<OrderBy>;
  hoursWorked?: InputMaybe<OrderBy>;
  recipientId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "payment_requests" */
export type Payment_Requests_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Payment_Requests_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Payment_Requests_StreamCursorValueInput = {
  amountInUsd?: InputMaybe<Scalars['bigint']['input']>;
  budgetId?: InputMaybe<Scalars['uuid']['input']>;
  hoursWorked?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invoiceReceivedAt?: InputMaybe<Scalars['timestamp']['input']>;
  recipientId?: InputMaybe<Scalars['bigint']['input']>;
  requestedAt?: InputMaybe<Scalars['timestamp']['input']>;
  requestorId?: InputMaybe<Scalars['uuid']['input']>;
};

/** order by sum() on columns of table "payment_requests" */
export type Payment_Requests_Sum_Order_By = {
  amountInUsd?: InputMaybe<OrderBy>;
  hoursWorked?: InputMaybe<OrderBy>;
  recipientId?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "payment_requests" */
export type Payment_Requests_Var_Pop_Order_By = {
  amountInUsd?: InputMaybe<OrderBy>;
  hoursWorked?: InputMaybe<OrderBy>;
  recipientId?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "payment_requests" */
export type Payment_Requests_Var_Samp_Order_By = {
  amountInUsd?: InputMaybe<OrderBy>;
  hoursWorked?: InputMaybe<OrderBy>;
  recipientId?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "payment_requests" */
export type Payment_Requests_Variance_Order_By = {
  amountInUsd?: InputMaybe<OrderBy>;
  hoursWorked?: InputMaybe<OrderBy>;
  recipientId?: InputMaybe<OrderBy>;
};

export type Payment_Stats_Aggregate_Bool_Exp = {
  count?: InputMaybe<Payment_Stats_Aggregate_Bool_Exp_Count>;
};

export type Payment_Stats_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<PaymentStatsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PaymentStatsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "payment_stats" */
export type Payment_Stats_Avg_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  moneyGranted?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "payment_stats" */
export type Payment_Stats_Max_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  moneyGranted?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "payment_stats" */
export type Payment_Stats_Min_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  moneyGranted?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "payment_stats" */
export type Payment_Stats_Stddev_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  moneyGranted?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "payment_stats" */
export type Payment_Stats_Stddev_Pop_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  moneyGranted?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "payment_stats" */
export type Payment_Stats_Stddev_Samp_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  moneyGranted?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "payment_stats" */
export type Payment_Stats_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Payment_Stats_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Payment_Stats_StreamCursorValueInput = {
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  moneyGranted?: InputMaybe<Scalars['numeric']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** order by sum() on columns of table "payment_stats" */
export type Payment_Stats_Sum_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  moneyGranted?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "payment_stats" */
export type Payment_Stats_Var_Pop_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  moneyGranted?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "payment_stats" */
export type Payment_Stats_Var_Samp_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  moneyGranted?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "payment_stats" */
export type Payment_Stats_Variance_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  moneyGranted?: InputMaybe<OrderBy>;
};

export type Payments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Payments_Aggregate_Bool_Exp_Count>;
};

export type Payments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<PaymentsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PaymentsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "payments" */
export type Payments_Avg_Order_By = {
  amount?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "payments" */
export type Payments_Max_Order_By = {
  amount?: InputMaybe<OrderBy>;
  currencyCode?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  processedAt?: InputMaybe<OrderBy>;
  requestId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "payments" */
export type Payments_Min_Order_By = {
  amount?: InputMaybe<OrderBy>;
  currencyCode?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  processedAt?: InputMaybe<OrderBy>;
  requestId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "payments" */
export type Payments_Stddev_Order_By = {
  amount?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "payments" */
export type Payments_Stddev_Pop_Order_By = {
  amount?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "payments" */
export type Payments_Stddev_Samp_Order_By = {
  amount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "payments" */
export type Payments_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Payments_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Payments_StreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  processedAt?: InputMaybe<Scalars['timestamp']['input']>;
  receipt?: InputMaybe<Scalars['jsonb']['input']>;
  requestId?: InputMaybe<Scalars['uuid']['input']>;
};

/** order by sum() on columns of table "payments" */
export type Payments_Sum_Order_By = {
  amount?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "payments" */
export type Payments_Var_Pop_Order_By = {
  amount?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "payments" */
export type Payments_Var_Samp_Order_By = {
  amount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "payments" */
export type Payments_Variance_Order_By = {
  amount?: InputMaybe<OrderBy>;
};

export type Pending_Project_Leader_Invitations_Aggregate_Bool_Exp = {
  count?: InputMaybe<Pending_Project_Leader_Invitations_Aggregate_Bool_Exp_Count>;
};

export type Pending_Project_Leader_Invitations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<PendingProjectLeaderInvitationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PendingProjectLeaderInvitationsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "pending_project_leader_invitations" */
export type Pending_Project_Leader_Invitations_Avg_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "pending_project_leader_invitations" */
export type Pending_Project_Leader_Invitations_Max_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "pending_project_leader_invitations" */
export type Pending_Project_Leader_Invitations_Min_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "pending_project_leader_invitations" */
export type Pending_Project_Leader_Invitations_Stddev_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "pending_project_leader_invitations" */
export type Pending_Project_Leader_Invitations_Stddev_Pop_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "pending_project_leader_invitations" */
export type Pending_Project_Leader_Invitations_Stddev_Samp_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "pending_project_leader_invitations" */
export type Pending_Project_Leader_Invitations_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Pending_Project_Leader_Invitations_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Pending_Project_Leader_Invitations_StreamCursorValueInput = {
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** order by sum() on columns of table "pending_project_leader_invitations" */
export type Pending_Project_Leader_Invitations_Sum_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "pending_project_leader_invitations" */
export type Pending_Project_Leader_Invitations_Var_Pop_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "pending_project_leader_invitations" */
export type Pending_Project_Leader_Invitations_Var_Samp_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "pending_project_leader_invitations" */
export type Pending_Project_Leader_Invitations_Variance_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "project_details" */
export type Project_Details_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Project_Details_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Details_StreamCursorValueInput = {
  hiring?: InputMaybe<Scalars['Boolean']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  telegramLink?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['project_visibility']['input']>;
};

export type Project_Github_Repos_Aggregate_Bool_Exp = {
  count?: InputMaybe<Project_Github_Repos_Aggregate_Bool_Exp_Count>;
};

export type Project_Github_Repos_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ProjectGithubReposSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ProjectGithubReposBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "project_github_repos" */
export type Project_Github_Repos_Avg_Order_By = {
  githubRepoId?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "project_github_repos" */
export type Project_Github_Repos_Max_Order_By = {
  githubRepoId?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "project_github_repos" */
export type Project_Github_Repos_Min_Order_By = {
  githubRepoId?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "project_github_repos" */
export type Project_Github_Repos_Stddev_Order_By = {
  githubRepoId?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "project_github_repos" */
export type Project_Github_Repos_Stddev_Pop_Order_By = {
  githubRepoId?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "project_github_repos" */
export type Project_Github_Repos_Stddev_Samp_Order_By = {
  githubRepoId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "project_github_repos" */
export type Project_Github_Repos_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Project_Github_Repos_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Github_Repos_StreamCursorValueInput = {
  githubRepoId?: InputMaybe<Scalars['bigint']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** order by sum() on columns of table "project_github_repos" */
export type Project_Github_Repos_Sum_Order_By = {
  githubRepoId?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "project_github_repos" */
export type Project_Github_Repos_Var_Pop_Order_By = {
  githubRepoId?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "project_github_repos" */
export type Project_Github_Repos_Var_Samp_Order_By = {
  githubRepoId?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "project_github_repos" */
export type Project_Github_Repos_Variance_Order_By = {
  githubRepoId?: InputMaybe<OrderBy>;
};

export type Project_Leads_Aggregate_Bool_Exp = {
  count?: InputMaybe<Project_Leads_Aggregate_Bool_Exp_Count>;
};

export type Project_Leads_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ProjectLeadsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ProjectLeadsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "project_leads" */
export type Project_Leads_Max_Order_By = {
  assignedAt?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "project_leads" */
export type Project_Leads_Min_Order_By = {
  assignedAt?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "project_leads" */
export type Project_Leads_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Project_Leads_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Leads_StreamCursorValueInput = {
  assignedAt?: InputMaybe<Scalars['timestamp']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

export type Projects_Contributors_Aggregate_Bool_Exp = {
  count?: InputMaybe<Projects_Contributors_Aggregate_Bool_Exp_Count>;
};

export type Projects_Contributors_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ProjectsContributorsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ProjectsContributorsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "projects_contributors" */
export type Projects_Contributors_Avg_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  linkCount?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "projects_contributors" */
export type Projects_Contributors_Max_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  linkCount?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "projects_contributors" */
export type Projects_Contributors_Min_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  linkCount?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "projects_contributors" */
export type Projects_Contributors_Stddev_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  linkCount?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "projects_contributors" */
export type Projects_Contributors_Stddev_Pop_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  linkCount?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "projects_contributors" */
export type Projects_Contributors_Stddev_Samp_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  linkCount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "projects_contributors" */
export type Projects_Contributors_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Projects_Contributors_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Projects_Contributors_StreamCursorValueInput = {
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  linkCount?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['uuid']['input']>;
};

/** order by sum() on columns of table "projects_contributors" */
export type Projects_Contributors_Sum_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  linkCount?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "projects_contributors" */
export type Projects_Contributors_Var_Pop_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  linkCount?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "projects_contributors" */
export type Projects_Contributors_Var_Samp_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  linkCount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "projects_contributors" */
export type Projects_Contributors_Variance_Order_By = {
  githubUserId?: InputMaybe<OrderBy>;
  linkCount?: InputMaybe<OrderBy>;
};

export type Projects_Sponsors_Aggregate_Bool_Exp = {
  count?: InputMaybe<Projects_Sponsors_Aggregate_Bool_Exp_Count>;
};

export type Projects_Sponsors_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ProjectsSponsorsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ProjectsSponsorsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "projects_sponsors" */
export type Projects_Sponsors_Max_Order_By = {
  projectId?: InputMaybe<OrderBy>;
  sponsorId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "projects_sponsors" */
export type Projects_Sponsors_Min_Order_By = {
  projectId?: InputMaybe<OrderBy>;
  sponsorId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "projects_sponsors" */
export type Projects_Sponsors_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Projects_Sponsors_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Projects_Sponsors_StreamCursorValueInput = {
  projectId?: InputMaybe<Scalars['uuid']['input']>;
  sponsorId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "projects" */
export type Projects_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Projects_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Projects_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applicationsAggregate: ApplicationsAggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applicationsByPk?: Maybe<Applications>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequestsAggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProvidersAggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokensAggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRolesAggregate;
  /** fetch data from the table: "auth.user_github_provider" */
  authUserGithubProvider: Array<AuthUserGithubProvider>;
  /** fetch aggregated fields from the table: "auth.user_github_provider" */
  authUserGithubProviderAggregate: AuthUserGithubProviderAggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProvidersAggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRolesAggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeysAggregate;
  /** An array relationship */
  budgets: Array<Budgets>;
  /** An aggregate relationship */
  budgetsAggregate: BudgetsAggregate;
  /** fetch data from the table: "budgets" using primary key columns */
  budgetsByPk?: Maybe<Budgets>;
  /** fetch data from the table: "api.commands" */
  commands: Array<Commands>;
  /** fetch aggregated fields from the table: "api.commands" */
  commandsAggregate: CommandsAggregate;
  /** An array relationship */
  contactInformations: Array<ContactInformations>;
  /** An aggregate relationship */
  contactInformationsAggregate: ContactInformationsAggregate;
  /** An array relationship */
  contributionCounts: Array<ContributionCounts>;
  /** An aggregate relationship */
  contributionCountsAggregate: ContributionCountsAggregate;
  /** An array relationship */
  contributionStats: Array<ContributionStats>;
  /** An aggregate relationship */
  contributionStatsAggregate: ContributionStatsAggregate;
  /** An array relationship */
  contributions: Array<Contributions>;
  /** An aggregate relationship */
  contributionsAggregate: ContributionsAggregate;
  fetchIssue?: Maybe<Issue>;
  fetchIssueByRepositoryId?: Maybe<Issue>;
  fetchUserDetailsById?: Maybe<User>;
  /** fetch data from the table: "github_issues" */
  githubIssues: Array<GithubIssues>;
  /** fetch aggregated fields from the table: "github_issues" */
  githubIssuesAggregate: GithubIssuesAggregate;
  /** fetch data from the table: "github_issues" using primary key columns */
  githubIssuesByPk?: Maybe<GithubIssues>;
  /** fetch data from the table: "github_repos" */
  githubRepos: Array<GithubRepos>;
  /** fetch aggregated fields from the table: "github_repos" */
  githubReposAggregate: GithubReposAggregate;
  /** fetch data from the table: "github_repos" using primary key columns */
  githubReposByPk?: Maybe<GithubRepos>;
  /** fetch data from the table: "github_repos_contributors" */
  githubReposContributors: Array<GithubReposContributors>;
  /** fetch aggregated fields from the table: "github_repos_contributors" */
  githubReposContributorsAggregate: GithubReposContributorsAggregate;
  /** fetch data from the table: "github_repos_contributors" using primary key columns */
  githubReposContributorsByPk?: Maybe<GithubReposContributors>;
  /** fetch data from the table: "github_users" */
  githubUsers: Array<GithubUsers>;
  /** fetch aggregated fields from the table: "github_users" */
  githubUsersAggregate: GithubUsersAggregate;
  /** fetch data from the table: "github_users" using primary key columns */
  githubUsersByPk?: Maybe<GithubUsers>;
  hello: Scalars['String']['output'];
  helloFromDustyBot: Scalars['String']['output'];
  /** fetch data from the table: "ignored_github_issues" */
  ignoredGithubIssues: Array<IgnoredGithubIssues>;
  /** fetch aggregated fields from the table: "ignored_github_issues" */
  ignoredGithubIssuesAggregate: IgnoredGithubIssuesAggregate;
  /** fetch data from the table: "ignored_github_issues" using primary key columns */
  ignoredGithubIssuesByPk?: Maybe<IgnoredGithubIssues>;
  /** fetch data from the table: "onboardings" */
  onboardings: Array<Onboardings>;
  /** fetch aggregated fields from the table: "onboardings" */
  onboardingsAggregate: OnboardingsAggregate;
  /** fetch data from the table: "onboardings" using primary key columns */
  onboardingsByPk?: Maybe<Onboardings>;
  /** An array relationship */
  paymentRequests: Array<PaymentRequests>;
  /** An aggregate relationship */
  paymentRequestsAggregate: PaymentRequestsAggregate;
  /** fetch data from the table: "payment_requests" using primary key columns */
  paymentRequestsByPk?: Maybe<PaymentRequests>;
  /** An array relationship */
  paymentStats: Array<PaymentStats>;
  /** An aggregate relationship */
  paymentStatsAggregate: PaymentStatsAggregate;
  /** An array relationship */
  payments: Array<Payments>;
  /** An aggregate relationship */
  paymentsAggregate: PaymentsAggregate;
  /** fetch data from the table: "payments" using primary key columns */
  paymentsByPk?: Maybe<Payments>;
  /** fetch data from the table: "pending_project_leader_invitations" */
  pendingProjectLeaderInvitations: Array<PendingProjectLeaderInvitations>;
  /** fetch aggregated fields from the table: "pending_project_leader_invitations" */
  pendingProjectLeaderInvitationsAggregate: PendingProjectLeaderInvitationsAggregate;
  /** fetch data from the table: "pending_project_leader_invitations" using primary key columns */
  pendingProjectLeaderInvitationsByPk?: Maybe<PendingProjectLeaderInvitations>;
  /** fetch data from the table: "project_details" */
  projectDetails: Array<ProjectDetails>;
  /** fetch aggregated fields from the table: "project_details" */
  projectDetailsAggregate: ProjectDetailsAggregate;
  /** fetch data from the table: "project_details" using primary key columns */
  projectDetailsByPk?: Maybe<ProjectDetails>;
  /** fetch data from the table: "project_github_repos" */
  projectGithubRepos: Array<ProjectGithubRepos>;
  /** fetch aggregated fields from the table: "project_github_repos" */
  projectGithubReposAggregate: ProjectGithubReposAggregate;
  /** fetch data from the table: "project_github_repos" using primary key columns */
  projectGithubReposByPk?: Maybe<ProjectGithubRepos>;
  /** An array relationship */
  projectLeads: Array<ProjectLeads>;
  /** An aggregate relationship */
  projectLeadsAggregate: ProjectLeadsAggregate;
  /** fetch data from the table: "project_leads" using primary key columns */
  projectLeadsByPk?: Maybe<ProjectLeads>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projectsAggregate: ProjectsAggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projectsByPk?: Maybe<Projects>;
  /** fetch data from the table: "projects_contributors" */
  projectsContributors: Array<ProjectsContributors>;
  /** fetch aggregated fields from the table: "projects_contributors" */
  projectsContributorsAggregate: ProjectsContributorsAggregate;
  /** fetch data from the table: "projects_contributors" using primary key columns */
  projectsContributorsByPk?: Maybe<ProjectsContributors>;
  /** fetch data from the table: "projects_sponsors" */
  projectsSponsors: Array<ProjectsSponsors>;
  /** fetch aggregated fields from the table: "projects_sponsors" */
  projectsSponsorsAggregate: ProjectsSponsorsAggregate;
  /** fetch data from the table: "projects_sponsors" using primary key columns */
  projectsSponsorsByPk?: Maybe<ProjectsSponsors>;
  /** fetch data from the table: "registered_users" */
  registeredUsers: Array<RegisteredUsers>;
  /** fetch aggregated fields from the table: "registered_users" */
  registeredUsersAggregate: RegisteredUsersAggregate;
  releaseDate: Scalars['String']['output'];
  searchUsers?: Maybe<Array<User>>;
  /** fetch data from the table: "sponsors" */
  sponsors: Array<Sponsors>;
  /** fetch aggregated fields from the table: "sponsors" */
  sponsorsAggregate: SponsorsAggregate;
  /** fetch data from the table: "sponsors" using primary key columns */
  sponsorsByPk?: Maybe<Sponsors>;
  /** fetch data from the table: "api.technologies" */
  technologies: Array<Technologies>;
  /** fetch aggregated fields from the table: "api.technologies" */
  technologiesAggregate: TechnologiesAggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_payout_info" */
  userPayoutInfo: Array<UserPayoutInfo>;
  /** fetch aggregated fields from the table: "user_payout_info" */
  userPayoutInfoAggregate: UserPayoutInfoAggregate;
  /** fetch data from the table: "user_payout_info" using primary key columns */
  userPayoutInfoByPk?: Maybe<UserPayoutInfo>;
  /** fetch data from the table: "api.user_profiles" */
  userProfiles: Array<UserProfiles>;
  /** fetch aggregated fields from the table: "api.user_profiles" */
  userProfilesAggregate: UserProfilesAggregate;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: UsersAggregate;
  /** An array relationship */
  workItems: Array<WorkItems>;
  /** An aggregate relationship */
  workItemsAggregate: WorkItemsAggregate;
  /** fetch data from the table: "work_items" using primary key columns */
  workItemsByPk?: Maybe<WorkItems>;
};


export type Query_RootApplicationsArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


export type Query_RootApplicationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


export type Query_RootApplicationsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinctOn?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type Query_RootAuthProvidersArgs = {
  distinctOn?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid']['input'];
};


export type Query_RootAuthRefreshTokensArgs = {
  distinctOn?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String']['input'];
};


export type Query_RootAuthRolesArgs = {
  distinctOn?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type Query_RootAuthUserGithubProviderArgs = {
  distinctOn?: InputMaybe<Array<AuthUserGithubProviderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserGithubProviderOrderBy>>;
  where?: InputMaybe<AuthUserGithubProviderBoolExp>;
};


export type Query_RootAuthUserGithubProviderAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserGithubProviderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserGithubProviderOrderBy>>;
  where?: InputMaybe<AuthUserGithubProviderBoolExp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserRolesArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAuthUserSecurityKeysArgs = {
  distinctOn?: InputMaybe<Array<AuthUserSecurityKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserSecurityKeysOrderBy>>;
  where?: InputMaybe<AuthUserSecurityKeysBoolExp>;
};


export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserSecurityKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserSecurityKeysOrderBy>>;
  where?: InputMaybe<AuthUserSecurityKeysBoolExp>;
};


export type Query_RootBudgetsArgs = {
  distinctOn?: InputMaybe<Array<BudgetsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BudgetsOrderBy>>;
  where?: InputMaybe<BudgetsBoolExp>;
};


export type Query_RootBudgetsAggregateArgs = {
  distinctOn?: InputMaybe<Array<BudgetsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BudgetsOrderBy>>;
  where?: InputMaybe<BudgetsBoolExp>;
};


export type Query_RootBudgetsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCommandsArgs = {
  distinctOn?: InputMaybe<Array<CommandsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommandsOrderBy>>;
  where?: InputMaybe<CommandsBoolExp>;
};


export type Query_RootCommandsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommandsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommandsOrderBy>>;
  where?: InputMaybe<CommandsBoolExp>;
};


export type Query_RootContactInformationsArgs = {
  distinctOn?: InputMaybe<Array<ContactInformationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContactInformationsOrderBy>>;
  where?: InputMaybe<ContactInformationsBoolExp>;
};


export type Query_RootContactInformationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ContactInformationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContactInformationsOrderBy>>;
  where?: InputMaybe<ContactInformationsBoolExp>;
};


export type Query_RootContributionCountsArgs = {
  distinctOn?: InputMaybe<Array<ContributionCountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionCountsOrderBy>>;
  where?: InputMaybe<ContributionCountsBoolExp>;
};


export type Query_RootContributionCountsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ContributionCountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionCountsOrderBy>>;
  where?: InputMaybe<ContributionCountsBoolExp>;
};


export type Query_RootContributionStatsArgs = {
  distinctOn?: InputMaybe<Array<ContributionStatsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionStatsOrderBy>>;
  where?: InputMaybe<ContributionStatsBoolExp>;
};


export type Query_RootContributionStatsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ContributionStatsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionStatsOrderBy>>;
  where?: InputMaybe<ContributionStatsBoolExp>;
};


export type Query_RootContributionsArgs = {
  distinctOn?: InputMaybe<Array<ContributionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionsOrderBy>>;
  where?: InputMaybe<ContributionsBoolExp>;
};


export type Query_RootContributionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ContributionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionsOrderBy>>;
  where?: InputMaybe<ContributionsBoolExp>;
};


export type Query_RootFetchIssueArgs = {
  issueNumber: Scalars['Int']['input'];
  repoName: Scalars['String']['input'];
  repoOwner: Scalars['String']['input'];
};


export type Query_RootFetchIssueByRepositoryIdArgs = {
  issueNumber: Scalars['Int']['input'];
  repositoryId: Scalars['Int']['input'];
};


export type Query_RootFetchUserDetailsByIdArgs = {
  userId: Scalars['Int']['input'];
};


export type Query_RootGithubIssuesArgs = {
  distinctOn?: InputMaybe<Array<GithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>;
  where?: InputMaybe<GithubIssuesBoolExp>;
};


export type Query_RootGithubIssuesAggregateArgs = {
  distinctOn?: InputMaybe<Array<GithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>;
  where?: InputMaybe<GithubIssuesBoolExp>;
};


export type Query_RootGithubIssuesByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootGithubReposArgs = {
  distinctOn?: InputMaybe<Array<GithubReposSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubReposOrderBy>>;
  where?: InputMaybe<GithubReposBoolExp>;
};


export type Query_RootGithubReposAggregateArgs = {
  distinctOn?: InputMaybe<Array<GithubReposSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubReposOrderBy>>;
  where?: InputMaybe<GithubReposBoolExp>;
};


export type Query_RootGithubReposByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootGithubReposContributorsArgs = {
  distinctOn?: InputMaybe<Array<GithubReposContributorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubReposContributorsOrderBy>>;
  where?: InputMaybe<GithubReposContributorsBoolExp>;
};


export type Query_RootGithubReposContributorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<GithubReposContributorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubReposContributorsOrderBy>>;
  where?: InputMaybe<GithubReposContributorsBoolExp>;
};


export type Query_RootGithubReposContributorsByPkArgs = {
  repoId: Scalars['bigint']['input'];
  userId: Scalars['bigint']['input'];
};


export type Query_RootGithubUsersArgs = {
  distinctOn?: InputMaybe<Array<GithubUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubUsersOrderBy>>;
  where?: InputMaybe<GithubUsersBoolExp>;
};


export type Query_RootGithubUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<GithubUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubUsersOrderBy>>;
  where?: InputMaybe<GithubUsersBoolExp>;
};


export type Query_RootGithubUsersByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootIgnoredGithubIssuesArgs = {
  distinctOn?: InputMaybe<Array<IgnoredGithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IgnoredGithubIssuesOrderBy>>;
  where?: InputMaybe<IgnoredGithubIssuesBoolExp>;
};


export type Query_RootIgnoredGithubIssuesAggregateArgs = {
  distinctOn?: InputMaybe<Array<IgnoredGithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IgnoredGithubIssuesOrderBy>>;
  where?: InputMaybe<IgnoredGithubIssuesBoolExp>;
};


export type Query_RootIgnoredGithubIssuesByPkArgs = {
  issueNumber: Scalars['bigint']['input'];
  projectId: Scalars['uuid']['input'];
  repoId: Scalars['bigint']['input'];
};


export type Query_RootOnboardingsArgs = {
  distinctOn?: InputMaybe<Array<OnboardingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OnboardingsOrderBy>>;
  where?: InputMaybe<OnboardingsBoolExp>;
};


export type Query_RootOnboardingsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OnboardingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OnboardingsOrderBy>>;
  where?: InputMaybe<OnboardingsBoolExp>;
};


export type Query_RootOnboardingsByPkArgs = {
  userId: Scalars['uuid']['input'];
};


export type Query_RootPaymentRequestsArgs = {
  distinctOn?: InputMaybe<Array<PaymentRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRequestsOrderBy>>;
  where?: InputMaybe<PaymentRequestsBoolExp>;
};


export type Query_RootPaymentRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PaymentRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRequestsOrderBy>>;
  where?: InputMaybe<PaymentRequestsBoolExp>;
};


export type Query_RootPaymentRequestsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPaymentStatsArgs = {
  distinctOn?: InputMaybe<Array<PaymentStatsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentStatsOrderBy>>;
  where?: InputMaybe<PaymentStatsBoolExp>;
};


export type Query_RootPaymentStatsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PaymentStatsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentStatsOrderBy>>;
  where?: InputMaybe<PaymentStatsBoolExp>;
};


export type Query_RootPaymentsArgs = {
  distinctOn?: InputMaybe<Array<PaymentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
  where?: InputMaybe<PaymentsBoolExp>;
};


export type Query_RootPaymentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PaymentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
  where?: InputMaybe<PaymentsBoolExp>;
};


export type Query_RootPaymentsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPendingProjectLeaderInvitationsArgs = {
  distinctOn?: InputMaybe<Array<PendingProjectLeaderInvitationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingProjectLeaderInvitationsOrderBy>>;
  where?: InputMaybe<PendingProjectLeaderInvitationsBoolExp>;
};


export type Query_RootPendingProjectLeaderInvitationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PendingProjectLeaderInvitationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingProjectLeaderInvitationsOrderBy>>;
  where?: InputMaybe<PendingProjectLeaderInvitationsBoolExp>;
};


export type Query_RootPendingProjectLeaderInvitationsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProjectDetailsArgs = {
  distinctOn?: InputMaybe<Array<ProjectDetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectDetailsOrderBy>>;
  where?: InputMaybe<ProjectDetailsBoolExp>;
};


export type Query_RootProjectDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectDetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectDetailsOrderBy>>;
  where?: InputMaybe<ProjectDetailsBoolExp>;
};


export type Query_RootProjectDetailsByPkArgs = {
  projectId: Scalars['uuid']['input'];
};


export type Query_RootProjectGithubReposArgs = {
  distinctOn?: InputMaybe<Array<ProjectGithubReposSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectGithubReposOrderBy>>;
  where?: InputMaybe<ProjectGithubReposBoolExp>;
};


export type Query_RootProjectGithubReposAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectGithubReposSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectGithubReposOrderBy>>;
  where?: InputMaybe<ProjectGithubReposBoolExp>;
};


export type Query_RootProjectGithubReposByPkArgs = {
  githubRepoId: Scalars['bigint']['input'];
  projectId: Scalars['uuid']['input'];
};


export type Query_RootProjectLeadsArgs = {
  distinctOn?: InputMaybe<Array<ProjectLeadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectLeadsOrderBy>>;
  where?: InputMaybe<ProjectLeadsBoolExp>;
};


export type Query_RootProjectLeadsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectLeadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectLeadsOrderBy>>;
  where?: InputMaybe<ProjectLeadsBoolExp>;
};


export type Query_RootProjectLeadsByPkArgs = {
  projectId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
};


export type Query_RootProjectsArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Query_RootProjectsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Query_RootProjectsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProjectsContributorsArgs = {
  distinctOn?: InputMaybe<Array<ProjectsContributorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsContributorsOrderBy>>;
  where?: InputMaybe<ProjectsContributorsBoolExp>;
};


export type Query_RootProjectsContributorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectsContributorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsContributorsOrderBy>>;
  where?: InputMaybe<ProjectsContributorsBoolExp>;
};


export type Query_RootProjectsContributorsByPkArgs = {
  githubUserId: Scalars['bigint']['input'];
  projectId: Scalars['uuid']['input'];
};


export type Query_RootProjectsSponsorsArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSponsorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsSponsorsOrderBy>>;
  where?: InputMaybe<ProjectsSponsorsBoolExp>;
};


export type Query_RootProjectsSponsorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSponsorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsSponsorsOrderBy>>;
  where?: InputMaybe<ProjectsSponsorsBoolExp>;
};


export type Query_RootProjectsSponsorsByPkArgs = {
  projectId: Scalars['uuid']['input'];
  sponsorId: Scalars['uuid']['input'];
};


export type Query_RootRegisteredUsersArgs = {
  distinctOn?: InputMaybe<Array<RegisteredUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RegisteredUsersOrderBy>>;
  where?: InputMaybe<RegisteredUsersBoolExp>;
};


export type Query_RootRegisteredUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<RegisteredUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RegisteredUsersOrderBy>>;
  where?: InputMaybe<RegisteredUsersBoolExp>;
};


export type Query_RootSearchUsersArgs = {
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type Query_RootSponsorsArgs = {
  distinctOn?: InputMaybe<Array<SponsorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SponsorsOrderBy>>;
  where?: InputMaybe<SponsorsBoolExp>;
};


export type Query_RootSponsorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<SponsorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SponsorsOrderBy>>;
  where?: InputMaybe<SponsorsBoolExp>;
};


export type Query_RootSponsorsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTechnologiesArgs = {
  distinctOn?: InputMaybe<Array<TechnologiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TechnologiesOrderBy>>;
  where?: InputMaybe<TechnologiesBoolExp>;
};


export type Query_RootTechnologiesAggregateArgs = {
  distinctOn?: InputMaybe<Array<TechnologiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TechnologiesOrderBy>>;
  where?: InputMaybe<TechnologiesBoolExp>;
};


export type Query_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUserPayoutInfoArgs = {
  distinctOn?: InputMaybe<Array<UserPayoutInfoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserPayoutInfoOrderBy>>;
  where?: InputMaybe<UserPayoutInfoBoolExp>;
};


export type Query_RootUserPayoutInfoAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserPayoutInfoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserPayoutInfoOrderBy>>;
  where?: InputMaybe<UserPayoutInfoBoolExp>;
};


export type Query_RootUserPayoutInfoByPkArgs = {
  userId: Scalars['uuid']['input'];
};


export type Query_RootUserProfilesArgs = {
  distinctOn?: InputMaybe<Array<UserProfilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserProfilesOrderBy>>;
  where?: InputMaybe<UserProfilesBoolExp>;
};


export type Query_RootUserProfilesAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserProfilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserProfilesOrderBy>>;
  where?: InputMaybe<UserProfilesBoolExp>;
};


export type Query_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Query_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Query_RootWorkItemsArgs = {
  distinctOn?: InputMaybe<Array<WorkItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkItemsOrderBy>>;
  where?: InputMaybe<WorkItemsBoolExp>;
};


export type Query_RootWorkItemsAggregateArgs = {
  distinctOn?: InputMaybe<Array<WorkItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkItemsOrderBy>>;
  where?: InputMaybe<WorkItemsBoolExp>;
};


export type Query_RootWorkItemsByPkArgs = {
  issueNumber: Scalars['bigint']['input'];
  paymentId: Scalars['uuid']['input'];
  repoId: Scalars['bigint']['input'];
};

/** Streaming cursor of the table "registered_users" */
export type Registered_Users_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Registered_Users_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Registered_Users_StreamCursorValueInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  githubUserId?: InputMaybe<Scalars['bigint']['input']>;
  htmlUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamp']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "sponsors" */
export type Sponsors_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Sponsors_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Sponsors_StreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table in a streaming manner: "api.commands" */
  CommandsStream: Array<Commands>;
  /** fetch data from the table in a streaming manner: "api.contact_informations" */
  ContactInformationsStream: Array<ContactInformations>;
  /** fetch data from the table in a streaming manner: "api.contribution_counts" */
  ContributionCountsStream: Array<ContributionCounts>;
  /** fetch data from the table in a streaming manner: "api.contribution_stats" */
  ContributionStatsStream: Array<ContributionStats>;
  /** fetch data from the table in a streaming manner: "api.contributions" */
  ContributionsStream: Array<Contributions>;
  /** fetch data from the table in a streaming manner: "api.technologies" */
  TechnologiesStream: Array<Technologies>;
  /** fetch data from the table in a streaming manner: "api.user_profiles" */
  UserProfilesStream: Array<UserProfiles>;
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applicationsAggregate: ApplicationsAggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applicationsByPk?: Maybe<Applications>;
  /** fetch data from the table in a streaming manner: "applications" */
  applicationsStream: Array<Applications>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequestsAggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequestsStream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProvidersAggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProvidersStream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokensAggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokensStream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRolesAggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRolesStream: Array<AuthRoles>;
  /** fetch data from the table: "auth.user_github_provider" */
  authUserGithubProvider: Array<AuthUserGithubProvider>;
  /** fetch aggregated fields from the table: "auth.user_github_provider" */
  authUserGithubProviderAggregate: AuthUserGithubProviderAggregate;
  /** fetch data from the table in a streaming manner: "auth.user_github_provider" */
  authUserGithubProviderStream: Array<AuthUserGithubProvider>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProvidersAggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProvidersStream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRolesAggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRolesStream: Array<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeysAggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeysStream: Array<AuthUserSecurityKeys>;
  /** An array relationship */
  budgets: Array<Budgets>;
  /** An aggregate relationship */
  budgetsAggregate: BudgetsAggregate;
  /** fetch data from the table: "budgets" using primary key columns */
  budgetsByPk?: Maybe<Budgets>;
  /** fetch data from the table in a streaming manner: "budgets" */
  budgetsStream: Array<Budgets>;
  /** fetch data from the table: "api.commands" */
  commands: Array<Commands>;
  /** fetch aggregated fields from the table: "api.commands" */
  commandsAggregate: CommandsAggregate;
  /** An array relationship */
  contactInformations: Array<ContactInformations>;
  /** An aggregate relationship */
  contactInformationsAggregate: ContactInformationsAggregate;
  /** An array relationship */
  contributionCounts: Array<ContributionCounts>;
  /** An aggregate relationship */
  contributionCountsAggregate: ContributionCountsAggregate;
  /** An array relationship */
  contributionStats: Array<ContributionStats>;
  /** An aggregate relationship */
  contributionStatsAggregate: ContributionStatsAggregate;
  /** An array relationship */
  contributions: Array<Contributions>;
  /** An aggregate relationship */
  contributionsAggregate: ContributionsAggregate;
  /** fetch data from the table: "github_issues" */
  githubIssues: Array<GithubIssues>;
  /** fetch aggregated fields from the table: "github_issues" */
  githubIssuesAggregate: GithubIssuesAggregate;
  /** fetch data from the table: "github_issues" using primary key columns */
  githubIssuesByPk?: Maybe<GithubIssues>;
  /** fetch data from the table in a streaming manner: "github_issues" */
  githubIssuesStream: Array<GithubIssues>;
  /** fetch data from the table: "github_repos" */
  githubRepos: Array<GithubRepos>;
  /** fetch aggregated fields from the table: "github_repos" */
  githubReposAggregate: GithubReposAggregate;
  /** fetch data from the table: "github_repos" using primary key columns */
  githubReposByPk?: Maybe<GithubRepos>;
  /** fetch data from the table: "github_repos_contributors" */
  githubReposContributors: Array<GithubReposContributors>;
  /** fetch aggregated fields from the table: "github_repos_contributors" */
  githubReposContributorsAggregate: GithubReposContributorsAggregate;
  /** fetch data from the table: "github_repos_contributors" using primary key columns */
  githubReposContributorsByPk?: Maybe<GithubReposContributors>;
  /** fetch data from the table in a streaming manner: "github_repos_contributors" */
  githubReposContributorsStream: Array<GithubReposContributors>;
  /** fetch data from the table in a streaming manner: "github_repos" */
  githubReposStream: Array<GithubRepos>;
  /** fetch data from the table: "github_users" */
  githubUsers: Array<GithubUsers>;
  /** fetch aggregated fields from the table: "github_users" */
  githubUsersAggregate: GithubUsersAggregate;
  /** fetch data from the table: "github_users" using primary key columns */
  githubUsersByPk?: Maybe<GithubUsers>;
  /** fetch data from the table in a streaming manner: "github_users" */
  githubUsersStream: Array<GithubUsers>;
  /** fetch data from the table: "ignored_github_issues" */
  ignoredGithubIssues: Array<IgnoredGithubIssues>;
  /** fetch aggregated fields from the table: "ignored_github_issues" */
  ignoredGithubIssuesAggregate: IgnoredGithubIssuesAggregate;
  /** fetch data from the table: "ignored_github_issues" using primary key columns */
  ignoredGithubIssuesByPk?: Maybe<IgnoredGithubIssues>;
  /** fetch data from the table in a streaming manner: "ignored_github_issues" */
  ignoredGithubIssuesStream: Array<IgnoredGithubIssues>;
  /** fetch data from the table: "onboardings" */
  onboardings: Array<Onboardings>;
  /** fetch aggregated fields from the table: "onboardings" */
  onboardingsAggregate: OnboardingsAggregate;
  /** fetch data from the table: "onboardings" using primary key columns */
  onboardingsByPk?: Maybe<Onboardings>;
  /** fetch data from the table in a streaming manner: "onboardings" */
  onboardingsStream: Array<Onboardings>;
  /** An array relationship */
  paymentRequests: Array<PaymentRequests>;
  /** An aggregate relationship */
  paymentRequestsAggregate: PaymentRequestsAggregate;
  /** fetch data from the table: "payment_requests" using primary key columns */
  paymentRequestsByPk?: Maybe<PaymentRequests>;
  /** fetch data from the table in a streaming manner: "payment_requests" */
  paymentRequestsStream: Array<PaymentRequests>;
  /** An array relationship */
  paymentStats: Array<PaymentStats>;
  /** An aggregate relationship */
  paymentStatsAggregate: PaymentStatsAggregate;
  /** fetch data from the table in a streaming manner: "payment_stats" */
  paymentStatsStream: Array<PaymentStats>;
  /** An array relationship */
  payments: Array<Payments>;
  /** An aggregate relationship */
  paymentsAggregate: PaymentsAggregate;
  /** fetch data from the table: "payments" using primary key columns */
  paymentsByPk?: Maybe<Payments>;
  /** fetch data from the table in a streaming manner: "payments" */
  paymentsStream: Array<Payments>;
  /** fetch data from the table: "pending_project_leader_invitations" */
  pendingProjectLeaderInvitations: Array<PendingProjectLeaderInvitations>;
  /** fetch aggregated fields from the table: "pending_project_leader_invitations" */
  pendingProjectLeaderInvitationsAggregate: PendingProjectLeaderInvitationsAggregate;
  /** fetch data from the table: "pending_project_leader_invitations" using primary key columns */
  pendingProjectLeaderInvitationsByPk?: Maybe<PendingProjectLeaderInvitations>;
  /** fetch data from the table in a streaming manner: "pending_project_leader_invitations" */
  pendingProjectLeaderInvitationsStream: Array<PendingProjectLeaderInvitations>;
  /** fetch data from the table: "project_details" */
  projectDetails: Array<ProjectDetails>;
  /** fetch aggregated fields from the table: "project_details" */
  projectDetailsAggregate: ProjectDetailsAggregate;
  /** fetch data from the table: "project_details" using primary key columns */
  projectDetailsByPk?: Maybe<ProjectDetails>;
  /** fetch data from the table in a streaming manner: "project_details" */
  projectDetailsStream: Array<ProjectDetails>;
  /** fetch data from the table: "project_github_repos" */
  projectGithubRepos: Array<ProjectGithubRepos>;
  /** fetch aggregated fields from the table: "project_github_repos" */
  projectGithubReposAggregate: ProjectGithubReposAggregate;
  /** fetch data from the table: "project_github_repos" using primary key columns */
  projectGithubReposByPk?: Maybe<ProjectGithubRepos>;
  /** fetch data from the table in a streaming manner: "project_github_repos" */
  projectGithubReposStream: Array<ProjectGithubRepos>;
  /** An array relationship */
  projectLeads: Array<ProjectLeads>;
  /** An aggregate relationship */
  projectLeadsAggregate: ProjectLeadsAggregate;
  /** fetch data from the table: "project_leads" using primary key columns */
  projectLeadsByPk?: Maybe<ProjectLeads>;
  /** fetch data from the table in a streaming manner: "project_leads" */
  projectLeadsStream: Array<ProjectLeads>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projectsAggregate: ProjectsAggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projectsByPk?: Maybe<Projects>;
  /** fetch data from the table: "projects_contributors" */
  projectsContributors: Array<ProjectsContributors>;
  /** fetch aggregated fields from the table: "projects_contributors" */
  projectsContributorsAggregate: ProjectsContributorsAggregate;
  /** fetch data from the table: "projects_contributors" using primary key columns */
  projectsContributorsByPk?: Maybe<ProjectsContributors>;
  /** fetch data from the table in a streaming manner: "projects_contributors" */
  projectsContributorsStream: Array<ProjectsContributors>;
  /** fetch data from the table: "projects_sponsors" */
  projectsSponsors: Array<ProjectsSponsors>;
  /** fetch aggregated fields from the table: "projects_sponsors" */
  projectsSponsorsAggregate: ProjectsSponsorsAggregate;
  /** fetch data from the table: "projects_sponsors" using primary key columns */
  projectsSponsorsByPk?: Maybe<ProjectsSponsors>;
  /** fetch data from the table in a streaming manner: "projects_sponsors" */
  projectsSponsorsStream: Array<ProjectsSponsors>;
  /** fetch data from the table in a streaming manner: "projects" */
  projectsStream: Array<Projects>;
  /** fetch data from the table: "registered_users" */
  registeredUsers: Array<RegisteredUsers>;
  /** fetch aggregated fields from the table: "registered_users" */
  registeredUsersAggregate: RegisteredUsersAggregate;
  /** fetch data from the table in a streaming manner: "registered_users" */
  registeredUsersStream: Array<RegisteredUsers>;
  /** fetch data from the table: "sponsors" */
  sponsors: Array<Sponsors>;
  /** fetch aggregated fields from the table: "sponsors" */
  sponsorsAggregate: SponsorsAggregate;
  /** fetch data from the table: "sponsors" using primary key columns */
  sponsorsByPk?: Maybe<Sponsors>;
  /** fetch data from the table in a streaming manner: "sponsors" */
  sponsorsStream: Array<Sponsors>;
  /** fetch data from the table: "api.technologies" */
  technologies: Array<Technologies>;
  /** fetch aggregated fields from the table: "api.technologies" */
  technologiesAggregate: TechnologiesAggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_payout_info" */
  userPayoutInfo: Array<UserPayoutInfo>;
  /** fetch aggregated fields from the table: "user_payout_info" */
  userPayoutInfoAggregate: UserPayoutInfoAggregate;
  /** fetch data from the table: "user_payout_info" using primary key columns */
  userPayoutInfoByPk?: Maybe<UserPayoutInfo>;
  /** fetch data from the table in a streaming manner: "user_payout_info" */
  userPayoutInfoStream: Array<UserPayoutInfo>;
  /** fetch data from the table: "api.user_profiles" */
  userProfiles: Array<UserProfiles>;
  /** fetch aggregated fields from the table: "api.user_profiles" */
  userProfilesAggregate: UserProfilesAggregate;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  usersStream: Array<Users>;
  /** An array relationship */
  workItems: Array<WorkItems>;
  /** An aggregate relationship */
  workItemsAggregate: WorkItemsAggregate;
  /** fetch data from the table: "work_items" using primary key columns */
  workItemsByPk?: Maybe<WorkItems>;
  /** fetch data from the table in a streaming manner: "work_items" */
  workItemsStream: Array<WorkItems>;
};


export type Subscription_RootCommandsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Commands_StreamCursorInput>>;
  where?: InputMaybe<CommandsBoolExp>;
};


export type Subscription_RootContactInformationsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ContactInformations_StreamCursorInput>>;
  where?: InputMaybe<ContactInformationsBoolExp>;
};


export type Subscription_RootContributionCountsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ContributionCounts_StreamCursorInput>>;
  where?: InputMaybe<ContributionCountsBoolExp>;
};


export type Subscription_RootContributionStatsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ContributionStats_StreamCursorInput>>;
  where?: InputMaybe<ContributionStatsBoolExp>;
};


export type Subscription_RootContributionsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contributions_StreamCursorInput>>;
  where?: InputMaybe<ContributionsBoolExp>;
};


export type Subscription_RootTechnologiesStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Technologies_StreamCursorInput>>;
  where?: InputMaybe<TechnologiesBoolExp>;
};


export type Subscription_RootUserProfilesStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserProfiles_StreamCursorInput>>;
  where?: InputMaybe<UserProfilesBoolExp>;
};


export type Subscription_RootApplicationsArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


export type Subscription_RootApplicationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


export type Subscription_RootApplicationsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootApplicationsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Applications_StreamCursorInput>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinctOn?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type Subscription_RootAuthProviderRequestsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthProviderRequests_StreamCursorInput>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinctOn?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type Subscription_RootAuthProvidersStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthProviders_StreamCursorInput>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid']['input'];
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinctOn?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type Subscription_RootAuthRefreshTokensStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRefreshTokens_StreamCursorInput>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String']['input'];
};


export type Subscription_RootAuthRolesArgs = {
  distinctOn?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type Subscription_RootAuthRolesStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthRoles_StreamCursorInput>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type Subscription_RootAuthUserGithubProviderArgs = {
  distinctOn?: InputMaybe<Array<AuthUserGithubProviderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserGithubProviderOrderBy>>;
  where?: InputMaybe<AuthUserGithubProviderBoolExp>;
};


export type Subscription_RootAuthUserGithubProviderAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserGithubProviderSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserGithubProviderOrderBy>>;
  where?: InputMaybe<AuthUserGithubProviderBoolExp>;
};


export type Subscription_RootAuthUserGithubProviderStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_User_Github_Provider_StreamCursorInput>>;
  where?: InputMaybe<AuthUserGithubProviderBoolExp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type Subscription_RootAuthUserProvidersStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserProviders_StreamCursorInput>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type Subscription_RootAuthUserRolesStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserRoles_StreamCursorInput>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinctOn?: InputMaybe<Array<AuthUserSecurityKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserSecurityKeysOrderBy>>;
  where?: InputMaybe<AuthUserSecurityKeysBoolExp>;
};


export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserSecurityKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserSecurityKeysOrderBy>>;
  where?: InputMaybe<AuthUserSecurityKeysBoolExp>;
};


export type Subscription_RootAuthUserSecurityKeysStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AuthUserSecurityKeys_StreamCursorInput>>;
  where?: InputMaybe<AuthUserSecurityKeysBoolExp>;
};


export type Subscription_RootBudgetsArgs = {
  distinctOn?: InputMaybe<Array<BudgetsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BudgetsOrderBy>>;
  where?: InputMaybe<BudgetsBoolExp>;
};


export type Subscription_RootBudgetsAggregateArgs = {
  distinctOn?: InputMaybe<Array<BudgetsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BudgetsOrderBy>>;
  where?: InputMaybe<BudgetsBoolExp>;
};


export type Subscription_RootBudgetsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootBudgetsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Budgets_StreamCursorInput>>;
  where?: InputMaybe<BudgetsBoolExp>;
};


export type Subscription_RootCommandsArgs = {
  distinctOn?: InputMaybe<Array<CommandsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommandsOrderBy>>;
  where?: InputMaybe<CommandsBoolExp>;
};


export type Subscription_RootCommandsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommandsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommandsOrderBy>>;
  where?: InputMaybe<CommandsBoolExp>;
};


export type Subscription_RootContactInformationsArgs = {
  distinctOn?: InputMaybe<Array<ContactInformationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContactInformationsOrderBy>>;
  where?: InputMaybe<ContactInformationsBoolExp>;
};


export type Subscription_RootContactInformationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ContactInformationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContactInformationsOrderBy>>;
  where?: InputMaybe<ContactInformationsBoolExp>;
};


export type Subscription_RootContributionCountsArgs = {
  distinctOn?: InputMaybe<Array<ContributionCountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionCountsOrderBy>>;
  where?: InputMaybe<ContributionCountsBoolExp>;
};


export type Subscription_RootContributionCountsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ContributionCountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionCountsOrderBy>>;
  where?: InputMaybe<ContributionCountsBoolExp>;
};


export type Subscription_RootContributionStatsArgs = {
  distinctOn?: InputMaybe<Array<ContributionStatsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionStatsOrderBy>>;
  where?: InputMaybe<ContributionStatsBoolExp>;
};


export type Subscription_RootContributionStatsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ContributionStatsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionStatsOrderBy>>;
  where?: InputMaybe<ContributionStatsBoolExp>;
};


export type Subscription_RootContributionsArgs = {
  distinctOn?: InputMaybe<Array<ContributionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionsOrderBy>>;
  where?: InputMaybe<ContributionsBoolExp>;
};


export type Subscription_RootContributionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ContributionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContributionsOrderBy>>;
  where?: InputMaybe<ContributionsBoolExp>;
};


export type Subscription_RootGithubIssuesArgs = {
  distinctOn?: InputMaybe<Array<GithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>;
  where?: InputMaybe<GithubIssuesBoolExp>;
};


export type Subscription_RootGithubIssuesAggregateArgs = {
  distinctOn?: InputMaybe<Array<GithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubIssuesOrderBy>>;
  where?: InputMaybe<GithubIssuesBoolExp>;
};


export type Subscription_RootGithubIssuesByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootGithubIssuesStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Github_Issues_StreamCursorInput>>;
  where?: InputMaybe<GithubIssuesBoolExp>;
};


export type Subscription_RootGithubReposArgs = {
  distinctOn?: InputMaybe<Array<GithubReposSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubReposOrderBy>>;
  where?: InputMaybe<GithubReposBoolExp>;
};


export type Subscription_RootGithubReposAggregateArgs = {
  distinctOn?: InputMaybe<Array<GithubReposSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubReposOrderBy>>;
  where?: InputMaybe<GithubReposBoolExp>;
};


export type Subscription_RootGithubReposByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootGithubReposContributorsArgs = {
  distinctOn?: InputMaybe<Array<GithubReposContributorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubReposContributorsOrderBy>>;
  where?: InputMaybe<GithubReposContributorsBoolExp>;
};


export type Subscription_RootGithubReposContributorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<GithubReposContributorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubReposContributorsOrderBy>>;
  where?: InputMaybe<GithubReposContributorsBoolExp>;
};


export type Subscription_RootGithubReposContributorsByPkArgs = {
  repoId: Scalars['bigint']['input'];
  userId: Scalars['bigint']['input'];
};


export type Subscription_RootGithubReposContributorsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Github_Repos_Contributors_StreamCursorInput>>;
  where?: InputMaybe<GithubReposContributorsBoolExp>;
};


export type Subscription_RootGithubReposStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Github_Repos_StreamCursorInput>>;
  where?: InputMaybe<GithubReposBoolExp>;
};


export type Subscription_RootGithubUsersArgs = {
  distinctOn?: InputMaybe<Array<GithubUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubUsersOrderBy>>;
  where?: InputMaybe<GithubUsersBoolExp>;
};


export type Subscription_RootGithubUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<GithubUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GithubUsersOrderBy>>;
  where?: InputMaybe<GithubUsersBoolExp>;
};


export type Subscription_RootGithubUsersByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootGithubUsersStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Github_Users_StreamCursorInput>>;
  where?: InputMaybe<GithubUsersBoolExp>;
};


export type Subscription_RootIgnoredGithubIssuesArgs = {
  distinctOn?: InputMaybe<Array<IgnoredGithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IgnoredGithubIssuesOrderBy>>;
  where?: InputMaybe<IgnoredGithubIssuesBoolExp>;
};


export type Subscription_RootIgnoredGithubIssuesAggregateArgs = {
  distinctOn?: InputMaybe<Array<IgnoredGithubIssuesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IgnoredGithubIssuesOrderBy>>;
  where?: InputMaybe<IgnoredGithubIssuesBoolExp>;
};


export type Subscription_RootIgnoredGithubIssuesByPkArgs = {
  issueNumber: Scalars['bigint']['input'];
  projectId: Scalars['uuid']['input'];
  repoId: Scalars['bigint']['input'];
};


export type Subscription_RootIgnoredGithubIssuesStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ignored_Github_Issues_StreamCursorInput>>;
  where?: InputMaybe<IgnoredGithubIssuesBoolExp>;
};


export type Subscription_RootOnboardingsArgs = {
  distinctOn?: InputMaybe<Array<OnboardingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OnboardingsOrderBy>>;
  where?: InputMaybe<OnboardingsBoolExp>;
};


export type Subscription_RootOnboardingsAggregateArgs = {
  distinctOn?: InputMaybe<Array<OnboardingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OnboardingsOrderBy>>;
  where?: InputMaybe<OnboardingsBoolExp>;
};


export type Subscription_RootOnboardingsByPkArgs = {
  userId: Scalars['uuid']['input'];
};


export type Subscription_RootOnboardingsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Onboardings_StreamCursorInput>>;
  where?: InputMaybe<OnboardingsBoolExp>;
};


export type Subscription_RootPaymentRequestsArgs = {
  distinctOn?: InputMaybe<Array<PaymentRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRequestsOrderBy>>;
  where?: InputMaybe<PaymentRequestsBoolExp>;
};


export type Subscription_RootPaymentRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PaymentRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRequestsOrderBy>>;
  where?: InputMaybe<PaymentRequestsBoolExp>;
};


export type Subscription_RootPaymentRequestsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPaymentRequestsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Payment_Requests_StreamCursorInput>>;
  where?: InputMaybe<PaymentRequestsBoolExp>;
};


export type Subscription_RootPaymentStatsArgs = {
  distinctOn?: InputMaybe<Array<PaymentStatsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentStatsOrderBy>>;
  where?: InputMaybe<PaymentStatsBoolExp>;
};


export type Subscription_RootPaymentStatsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PaymentStatsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentStatsOrderBy>>;
  where?: InputMaybe<PaymentStatsBoolExp>;
};


export type Subscription_RootPaymentStatsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Payment_Stats_StreamCursorInput>>;
  where?: InputMaybe<PaymentStatsBoolExp>;
};


export type Subscription_RootPaymentsArgs = {
  distinctOn?: InputMaybe<Array<PaymentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
  where?: InputMaybe<PaymentsBoolExp>;
};


export type Subscription_RootPaymentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PaymentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
  where?: InputMaybe<PaymentsBoolExp>;
};


export type Subscription_RootPaymentsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPaymentsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Payments_StreamCursorInput>>;
  where?: InputMaybe<PaymentsBoolExp>;
};


export type Subscription_RootPendingProjectLeaderInvitationsArgs = {
  distinctOn?: InputMaybe<Array<PendingProjectLeaderInvitationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingProjectLeaderInvitationsOrderBy>>;
  where?: InputMaybe<PendingProjectLeaderInvitationsBoolExp>;
};


export type Subscription_RootPendingProjectLeaderInvitationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PendingProjectLeaderInvitationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingProjectLeaderInvitationsOrderBy>>;
  where?: InputMaybe<PendingProjectLeaderInvitationsBoolExp>;
};


export type Subscription_RootPendingProjectLeaderInvitationsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPendingProjectLeaderInvitationsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pending_Project_Leader_Invitations_StreamCursorInput>>;
  where?: InputMaybe<PendingProjectLeaderInvitationsBoolExp>;
};


export type Subscription_RootProjectDetailsArgs = {
  distinctOn?: InputMaybe<Array<ProjectDetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectDetailsOrderBy>>;
  where?: InputMaybe<ProjectDetailsBoolExp>;
};


export type Subscription_RootProjectDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectDetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectDetailsOrderBy>>;
  where?: InputMaybe<ProjectDetailsBoolExp>;
};


export type Subscription_RootProjectDetailsByPkArgs = {
  projectId: Scalars['uuid']['input'];
};


export type Subscription_RootProjectDetailsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Project_Details_StreamCursorInput>>;
  where?: InputMaybe<ProjectDetailsBoolExp>;
};


export type Subscription_RootProjectGithubReposArgs = {
  distinctOn?: InputMaybe<Array<ProjectGithubReposSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectGithubReposOrderBy>>;
  where?: InputMaybe<ProjectGithubReposBoolExp>;
};


export type Subscription_RootProjectGithubReposAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectGithubReposSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectGithubReposOrderBy>>;
  where?: InputMaybe<ProjectGithubReposBoolExp>;
};


export type Subscription_RootProjectGithubReposByPkArgs = {
  githubRepoId: Scalars['bigint']['input'];
  projectId: Scalars['uuid']['input'];
};


export type Subscription_RootProjectGithubReposStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Project_Github_Repos_StreamCursorInput>>;
  where?: InputMaybe<ProjectGithubReposBoolExp>;
};


export type Subscription_RootProjectLeadsArgs = {
  distinctOn?: InputMaybe<Array<ProjectLeadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectLeadsOrderBy>>;
  where?: InputMaybe<ProjectLeadsBoolExp>;
};


export type Subscription_RootProjectLeadsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectLeadsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectLeadsOrderBy>>;
  where?: InputMaybe<ProjectLeadsBoolExp>;
};


export type Subscription_RootProjectLeadsByPkArgs = {
  projectId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
};


export type Subscription_RootProjectLeadsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Project_Leads_StreamCursorInput>>;
  where?: InputMaybe<ProjectLeadsBoolExp>;
};


export type Subscription_RootProjectsArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Subscription_RootProjectsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Subscription_RootProjectsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProjectsContributorsArgs = {
  distinctOn?: InputMaybe<Array<ProjectsContributorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsContributorsOrderBy>>;
  where?: InputMaybe<ProjectsContributorsBoolExp>;
};


export type Subscription_RootProjectsContributorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectsContributorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsContributorsOrderBy>>;
  where?: InputMaybe<ProjectsContributorsBoolExp>;
};


export type Subscription_RootProjectsContributorsByPkArgs = {
  githubUserId: Scalars['bigint']['input'];
  projectId: Scalars['uuid']['input'];
};


export type Subscription_RootProjectsContributorsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Projects_Contributors_StreamCursorInput>>;
  where?: InputMaybe<ProjectsContributorsBoolExp>;
};


export type Subscription_RootProjectsSponsorsArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSponsorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsSponsorsOrderBy>>;
  where?: InputMaybe<ProjectsSponsorsBoolExp>;
};


export type Subscription_RootProjectsSponsorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSponsorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsSponsorsOrderBy>>;
  where?: InputMaybe<ProjectsSponsorsBoolExp>;
};


export type Subscription_RootProjectsSponsorsByPkArgs = {
  projectId: Scalars['uuid']['input'];
  sponsorId: Scalars['uuid']['input'];
};


export type Subscription_RootProjectsSponsorsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Projects_Sponsors_StreamCursorInput>>;
  where?: InputMaybe<ProjectsSponsorsBoolExp>;
};


export type Subscription_RootProjectsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Projects_StreamCursorInput>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Subscription_RootRegisteredUsersArgs = {
  distinctOn?: InputMaybe<Array<RegisteredUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RegisteredUsersOrderBy>>;
  where?: InputMaybe<RegisteredUsersBoolExp>;
};


export type Subscription_RootRegisteredUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<RegisteredUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RegisteredUsersOrderBy>>;
  where?: InputMaybe<RegisteredUsersBoolExp>;
};


export type Subscription_RootRegisteredUsersStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Registered_Users_StreamCursorInput>>;
  where?: InputMaybe<RegisteredUsersBoolExp>;
};


export type Subscription_RootSponsorsArgs = {
  distinctOn?: InputMaybe<Array<SponsorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SponsorsOrderBy>>;
  where?: InputMaybe<SponsorsBoolExp>;
};


export type Subscription_RootSponsorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<SponsorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SponsorsOrderBy>>;
  where?: InputMaybe<SponsorsBoolExp>;
};


export type Subscription_RootSponsorsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSponsorsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sponsors_StreamCursorInput>>;
  where?: InputMaybe<SponsorsBoolExp>;
};


export type Subscription_RootTechnologiesArgs = {
  distinctOn?: InputMaybe<Array<TechnologiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TechnologiesOrderBy>>;
  where?: InputMaybe<TechnologiesBoolExp>;
};


export type Subscription_RootTechnologiesAggregateArgs = {
  distinctOn?: InputMaybe<Array<TechnologiesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TechnologiesOrderBy>>;
  where?: InputMaybe<TechnologiesBoolExp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUserPayoutInfoArgs = {
  distinctOn?: InputMaybe<Array<UserPayoutInfoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserPayoutInfoOrderBy>>;
  where?: InputMaybe<UserPayoutInfoBoolExp>;
};


export type Subscription_RootUserPayoutInfoAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserPayoutInfoSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserPayoutInfoOrderBy>>;
  where?: InputMaybe<UserPayoutInfoBoolExp>;
};


export type Subscription_RootUserPayoutInfoByPkArgs = {
  userId: Scalars['uuid']['input'];
};


export type Subscription_RootUserPayoutInfoStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Payout_Info_StreamCursorInput>>;
  where?: InputMaybe<UserPayoutInfoBoolExp>;
};


export type Subscription_RootUserProfilesArgs = {
  distinctOn?: InputMaybe<Array<UserProfilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserProfilesOrderBy>>;
  where?: InputMaybe<UserProfilesBoolExp>;
};


export type Subscription_RootUserProfilesAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserProfilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserProfilesOrderBy>>;
  where?: InputMaybe<UserProfilesBoolExp>;
};


export type Subscription_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootUsersStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_StreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootWorkItemsArgs = {
  distinctOn?: InputMaybe<Array<WorkItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkItemsOrderBy>>;
  where?: InputMaybe<WorkItemsBoolExp>;
};


export type Subscription_RootWorkItemsAggregateArgs = {
  distinctOn?: InputMaybe<Array<WorkItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkItemsOrderBy>>;
  where?: InputMaybe<WorkItemsBoolExp>;
};


export type Subscription_RootWorkItemsByPkArgs = {
  issueNumber: Scalars['bigint']['input'];
  paymentId: Scalars['uuid']['input'];
  repoId: Scalars['bigint']['input'];
};


export type Subscription_RootWorkItemsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Work_Items_StreamCursorInput>>;
  where?: InputMaybe<WorkItemsBoolExp>;
};

/** Streaming cursor of the table "user_payout_info" */
export type User_Payout_Info_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: User_Payout_Info_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Payout_Info_StreamCursorValueInput = {
  arePayoutSettingsValid?: InputMaybe<Scalars['Boolean']['input']>;
  identity?: InputMaybe<Scalars['jsonb']['input']>;
  location?: InputMaybe<Scalars['jsonb']['input']>;
  payoutSettings?: InputMaybe<Scalars['jsonb']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole: Scalars['String']['output'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean']['output'];
  displayName: Scalars['String']['output'];
  email?: Maybe<Scalars['citext']['output']>;
  emailVerified: Scalars['Boolean']['output'];
  id: Scalars['uuid']['output'];
  isAnonymous: Scalars['Boolean']['output'];
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale: Scalars['String']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt: Scalars['timestamptz']['output'];
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberVerified: Scalars['Boolean']['output'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokensAggregate: AuthRefreshTokensAggregate;
  /** An object relationship */
  registeredUser?: Maybe<RegisteredUsers>;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  rolesAggregate: AuthUserRolesAggregate;
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeysAggregate: AuthUserSecurityKeysAggregate;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt: Scalars['timestamptz']['output'];
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  userGithubProvider?: Maybe<AuthUserGithubProvider>;
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProvidersAggregate: AuthUserProvidersAggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinctOn?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
  distinctOn?: InputMaybe<Array<AuthUserSecurityKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserSecurityKeysOrderBy>>;
  where?: InputMaybe<AuthUserSecurityKeysBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserSecurityKeysSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserSecurityKeysOrderBy>>;
  where?: InputMaybe<AuthUserSecurityKeysBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** aggregated selection of "auth.users" */
export type UsersAggregate = {
  __typename?: 'usersAggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type UsersAggregateFields = {
  __typename?: 'usersAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "auth.users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.users" */
export type UsersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type UsersAppendInput = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type UsersArrRelInsertInput = {
  data: Array<UsersInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  activeMfaType?: InputMaybe<StringComparisonExp>;
  avatarUrl?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  currentChallenge?: InputMaybe<StringComparisonExp>;
  defaultRole?: InputMaybe<StringComparisonExp>;
  defaultRoleByRole?: InputMaybe<AuthRolesBoolExp>;
  disabled?: InputMaybe<BooleanComparisonExp>;
  displayName?: InputMaybe<StringComparisonExp>;
  email?: InputMaybe<CitextComparisonExp>;
  emailVerified?: InputMaybe<BooleanComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isAnonymous?: InputMaybe<BooleanComparisonExp>;
  lastSeen?: InputMaybe<TimestamptzComparisonExp>;
  locale?: InputMaybe<StringComparisonExp>;
  metadata?: InputMaybe<JsonbComparisonExp>;
  newEmail?: InputMaybe<CitextComparisonExp>;
  otpHash?: InputMaybe<StringComparisonExp>;
  otpHashExpiresAt?: InputMaybe<TimestamptzComparisonExp>;
  otpMethodLastUsed?: InputMaybe<StringComparisonExp>;
  passwordHash?: InputMaybe<StringComparisonExp>;
  phoneNumber?: InputMaybe<StringComparisonExp>;
  phoneNumberVerified?: InputMaybe<BooleanComparisonExp>;
  refreshTokens?: InputMaybe<AuthRefreshTokensBoolExp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  registeredUser?: InputMaybe<RegisteredUsersBoolExp>;
  roles?: InputMaybe<AuthUserRolesBoolExp>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  securityKeys?: InputMaybe<AuthUserSecurityKeysBoolExp>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
  ticket?: InputMaybe<StringComparisonExp>;
  ticketExpiresAt?: InputMaybe<TimestamptzComparisonExp>;
  totpSecret?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userGithubProvider?: InputMaybe<AuthUserGithubProviderBoolExp>;
  userProviders?: InputMaybe<AuthUserProvidersBoolExp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type UsersDeleteAtPathInput = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type UsersDeleteElemInput = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type UsersDeleteKeyInput = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "auth.users" */
export type UsersInsertInput = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  defaultRoleByRole?: InputMaybe<AuthRolesObjRelInsertInput>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  refreshTokens?: InputMaybe<AuthRefreshTokensArrRelInsertInput>;
  registeredUser?: InputMaybe<RegisteredUsersObjRelInsertInput>;
  roles?: InputMaybe<AuthUserRolesArrRelInsertInput>;
  securityKeys?: InputMaybe<AuthUserSecurityKeysArrRelInsertInput>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userGithubProvider?: InputMaybe<AuthUserGithubProviderObjRelInsertInput>;
  userProviders?: InputMaybe<AuthUserProvidersArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'usersMaxFields';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'usersMinFields';
  activeMfaType?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  currentChallenge?: Maybe<Scalars['String']['output']>;
  defaultRole?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['citext']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['citext']['output']>;
  otpHash?: Maybe<Scalars['String']['output']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  otpMethodLastUsed?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  ticket?: Maybe<Scalars['String']['output']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  totpSecret?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "auth.users" */
export type UsersMutationResponse = {
  __typename?: 'usersMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "auth.users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "auth.users". */
export type UsersOrderBy = {
  activeMfaType?: InputMaybe<OrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currentChallenge?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  defaultRoleByRole?: InputMaybe<AuthRolesOrderBy>;
  disabled?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isAnonymous?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  newEmail?: InputMaybe<OrderBy>;
  otpHash?: InputMaybe<OrderBy>;
  otpHashExpiresAt?: InputMaybe<OrderBy>;
  otpMethodLastUsed?: InputMaybe<OrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  phoneNumberVerified?: InputMaybe<OrderBy>;
  refreshTokensAggregate?: InputMaybe<AuthRefreshTokensAggregateOrderBy>;
  registeredUser?: InputMaybe<RegisteredUsersOrderBy>;
  rolesAggregate?: InputMaybe<AuthUserRolesAggregateOrderBy>;
  securityKeysAggregate?: InputMaybe<AuthUserSecurityKeysAggregateOrderBy>;
  ticket?: InputMaybe<OrderBy>;
  ticketExpiresAt?: InputMaybe<OrderBy>;
  totpSecret?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userGithubProvider?: InputMaybe<AuthUserGithubProviderOrderBy>;
  userProvidersAggregate?: InputMaybe<AuthUserProvidersAggregateOrderBy>;
};

/** primary key columns input for table: auth.users */
export type UsersPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type UsersPrependInput = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.users" */
export enum UsersSelectColumn {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "auth.users" */
export type UsersSetInput = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.users" */
export enum UsersUpdateColumn {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type UsersUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<UsersAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _deleteAtPath?: InputMaybe<UsersDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _deleteElem?: InputMaybe<UsersDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _deleteKey?: InputMaybe<UsersDeleteKeyInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<UsersPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UsersBoolExp>;
  predicate: BooleanComparisonExp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UsersBoolExp>;
  predicate: BooleanComparisonExp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UsersBoolExp>;
  predicate: IntComparisonExp;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<OrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currentChallenge?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  newEmail?: InputMaybe<OrderBy>;
  otpHash?: InputMaybe<OrderBy>;
  otpHashExpiresAt?: InputMaybe<OrderBy>;
  otpMethodLastUsed?: InputMaybe<OrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  ticket?: InputMaybe<OrderBy>;
  ticketExpiresAt?: InputMaybe<OrderBy>;
  totpSecret?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<OrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currentChallenge?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  newEmail?: InputMaybe<OrderBy>;
  otpHash?: InputMaybe<OrderBy>;
  otpHashExpiresAt?: InputMaybe<OrderBy>;
  otpMethodLastUsed?: InputMaybe<OrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  ticket?: InputMaybe<OrderBy>;
  ticketExpiresAt?: InputMaybe<OrderBy>;
  totpSecret?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** Streaming cursor of the table "users" */
export type Users_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Users_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_StreamCursorValueInput = {
  activeMfaType?: InputMaybe<Scalars['String']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  currentChallenge?: InputMaybe<Scalars['String']['input']>;
  defaultRole?: InputMaybe<Scalars['String']['input']>;
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['citext']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  newEmail?: InputMaybe<Scalars['citext']['input']>;
  otpHash?: InputMaybe<Scalars['String']['input']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']['input']>;
  passwordHash?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']['input']>;
  ticket?: InputMaybe<Scalars['String']['input']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  totpSecret?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

export type Work_Items_Aggregate_Bool_Exp = {
  count?: InputMaybe<Work_Items_Aggregate_Bool_Exp_Count>;
};

export type Work_Items_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<WorkItemsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<WorkItemsBoolExp>;
  predicate: IntComparisonExp;
};

/** order by avg() on columns of table "work_items" */
export type Work_Items_Avg_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "work_items" */
export type Work_Items_Max_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  paymentId?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "work_items" */
export type Work_Items_Min_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  paymentId?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "work_items" */
export type Work_Items_Stddev_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "work_items" */
export type Work_Items_Stddev_Pop_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "work_items" */
export type Work_Items_Stddev_Samp_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "work_items" */
export type Work_Items_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Work_Items_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Work_Items_StreamCursorValueInput = {
  issueNumber?: InputMaybe<Scalars['bigint']['input']>;
  paymentId?: InputMaybe<Scalars['uuid']['input']>;
  repoId?: InputMaybe<Scalars['bigint']['input']>;
};

/** order by sum() on columns of table "work_items" */
export type Work_Items_Sum_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "work_items" */
export type Work_Items_Var_Pop_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "work_items" */
export type Work_Items_Var_Samp_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "work_items" */
export type Work_Items_Variance_Order_By = {
  issueNumber?: InputMaybe<OrderBy>;
  repoId?: InputMaybe<OrderBy>;
};

export type GetProjectReposQueryVariables = Exact<{
  projectName: Scalars['String']['input'];
}>;


export type GetProjectReposQuery = { __typename?: 'query_root', projects: Array<{ __typename?: 'Projects', projectDetails?: { __typename?: 'ProjectDetails', name: string } | null, githubRepos: Array<{ __typename?: 'ProjectGithubRepos', repo?: { __typename?: 'GithubRepos', owner: string, name: string } | null }> }> };


export const GetProjectReposDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectRepos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"projectDetails"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectName"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"githubRepos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectReposQuery, GetProjectReposQueryVariables>;