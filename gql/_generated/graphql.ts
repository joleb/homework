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
  /** The `BigDecimal` scalar type represents signed fractional values with arbitrary precision. */
  BigDecimal: { input: any; output: any; }
  DayOfWeek: { input: any; output: any; }
  LocalDate: { input: any; output: any; }
  LocalTime: { input: any; output: any; }
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  ZonedDateTIme: { input: any; output: any; }
};

export type AvgsPotentialAnalysisLicenseDefinitionData = LicenseDefinitionData & {
  __typename?: 'AVGSPotentialAnalysisLicenseDefinitionData';
  kind: LicenseDefinitionDataKind | '%future added value';
  name: Scalars['String']['output'];
};

export type AvgsPotentialAnalysisLicenseDefinitionDataInput = {
  name: Scalars['String']['input'];
};

export type AvgsPotentialAnalysis_AcceptedForUser = AvgsPotentialAnalysis_ForUser & {
  __typename?: 'AVGSPotentialAnalysis_AcceptedForUser';
  client?: Maybe<User>;
  kind: AvgsPotentialAnalysis_ForUserKind | '%future added value';
};

export type AvgsPotentialAnalysis_Dimension = {
  __typename?: 'AVGSPotentialAnalysis_Dimension';
  dimensionId: Scalars['Int']['output'];
  dimensionText: Scalars['String']['output'];
  questions: Array<PotentialAnalysisQuestion>;
};

export type AvgsPotentialAnalysis_ForUser = {
  kind: AvgsPotentialAnalysis_ForUserKind | '%future added value';
};

export enum AvgsPotentialAnalysis_ForUserKind {
  AcceptedForUser = 'AcceptedForUser',
  InvitedForUser = 'InvitedForUser'
}

export type AvgsPotentialAnalysis_Info = {
  __typename?: 'AVGSPotentialAnalysis_Info';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  numAvailableLicenses: Scalars['Int']['output'];
};

export type AvgsPotentialAnalysis_InvitedForUser = AvgsPotentialAnalysis_ForUser & {
  __typename?: 'AVGSPotentialAnalysis_InvitedForUser';
  email: Scalars['String']['output'];
  kind: AvgsPotentialAnalysis_ForUserKind | '%future added value';
};

export type AvgsPotentialAnalysis_LearnPotentialAnalysis = {
  __typename?: 'AVGSPotentialAnalysis_LearnPotentialAnalysis';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  isFinished: Scalars['Boolean']['output'];
  modules: Array<AvgsPotentialAnalysis_Module>;
};

export type AvgsPotentialAnalysis_Module = {
  __typename?: 'AVGSPotentialAnalysis_Module';
  dimensions: Array<AvgsPotentialAnalysis_Dimension>;
  moduleId: Scalars['Int']['output'];
  moduleText: Scalars['String']['output'];
};

export type AvgsPotentialAnalysis_PotentialAnalysis = Node & {
  __typename?: 'AVGSPotentialAnalysis_PotentialAnalysis';
  base64EncodedReport?: Maybe<Scalars['String']['output']>;
  client: AvgsPotentialAnalysis_ForUser;
  coach?: Maybe<User>;
  coachAccount?: Maybe<Account>;
  createdAt: Scalars['ZonedDateTIme']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  isFinished: Scalars['Boolean']['output'];
  linkToPotentialAnalysisOrInvitation: Scalars['String']['output'];
  modules: Array<AvgsPotentialAnalysis_Module>;
  replacementCoach?: Maybe<User>;
};

export type AcademiesAccountExtension = AccountExtension & {
  __typename?: 'AcademiesAccountExtension';
  baseData: BaseData;
  kind: AccountExtensionKind | '%future added value';
  licenseModelKind?: Maybe<Kind | '%future added value'>;
  licenses: LicenseConnection;
  users: UserInAccountConnection;
};


export type AcademiesAccountExtensionLicensesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AcademiesAccountExtensionUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AcademiesChildTag = AcademiesTag & {
  __typename?: 'AcademiesChildTag';
  canBeDeleted: Scalars['Boolean']['output'];
  children: AcademiesChildTagsConnection;
  coordinates: AcademiesTagCoordinates;
  data: AcademiesTagData;
  id: Scalars['ID']['output'];
  kind: AcademiesTagKind | '%future added value';
  subId: Scalars['ID']['output'];
};


export type AcademiesChildTagChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type AcademiesChildTagsConnection = {
  __typename?: 'AcademiesChildTagsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AcademiesChildTagsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AcademiesChildTagsEdge = {
  __typename?: 'AcademiesChildTagsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AcademiesChildTag;
};

export type AcademiesProductExtension = ProductExtension & {
  __typename?: 'AcademiesProductExtension';
  atGrossPrice: Scalars['BigDecimal']['output'];
  chGrossPrice: Scalars['BigDecimal']['output'];
  costUnit?: Maybe<Scalars['String']['output']>;
  deGrossPrice: Scalars['BigDecimal']['output'];
  kind: ProductExtensionKind | '%future added value';
};

export type AcademiesRootTag = AcademiesTag & {
  __typename?: 'AcademiesRootTag';
  canBeDeleted: Scalars['Boolean']['output'];
  children: AcademiesChildTagsConnection;
  data: AcademiesTagData;
  id: Scalars['ID']['output'];
  kind: AcademiesTagKind | '%future added value';
  subId: Scalars['ID']['output'];
};


export type AcademiesRootTagChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type AcademiesRootTagsConnection = {
  __typename?: 'AcademiesRootTagsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AcademiesRootTagsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AcademiesRootTagsEdge = {
  __typename?: 'AcademiesRootTagsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AcademiesRootTag;
};

export type AcademiesTag = {
  canBeDeleted: Scalars['Boolean']['output'];
  children: AcademiesChildTagsConnection;
  data: AcademiesTagData;
  id: Scalars['ID']['output'];
  kind: AcademiesTagKind | '%future added value';
};


export type AcademiesTagChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Data only accessible by the admin */
export type AcademiesTagAdminMutationSchema = {
  __typename?: 'AcademiesTagAdminMutationSchema';
  createAndAppendChildTag?: Maybe<CreateAndAppendChildTagPayload>;
  createRootTag?: Maybe<CreateRootTagPayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  editTag?: Maybe<EditTagPayload>;
};


/** Data only accessible by the admin */
export type AcademiesTagAdminMutationSchemaCreateAndAppendChildTagArgs = {
  input: CreateAndAppendChildTagInput;
};


/** Data only accessible by the admin */
export type AcademiesTagAdminMutationSchemaCreateRootTagArgs = {
  input: CreateRootTagInput;
};


/** Data only accessible by the admin */
export type AcademiesTagAdminMutationSchemaDeleteTagArgs = {
  input: DeleteTagInput;
};


/** Data only accessible by the admin */
export type AcademiesTagAdminMutationSchemaEditTagArgs = {
  input: EditTagInput;
};

/** Data only accessible by the admin */
export type AcademiesTagAdminSchema = {
  __typename?: 'AcademiesTagAdminSchema';
  RootTags: AcademiesRootTagsConnection;
  SelectTags: AcademiesTagsConnection;
};


/** Data only accessible by the admin */
export type AcademiesTagAdminSchemaRootTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isClickable?: InputMaybe<Scalars['Boolean']['input']>;
  isTopic?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type AcademiesTagAdminSchemaSelectTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isClickable?: InputMaybe<Scalars['Boolean']['input']>;
  isRoot?: InputMaybe<Scalars['Boolean']['input']>;
  isTopic?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AcademiesTagCoordinates = {
  __typename?: 'AcademiesTagCoordinates';
  parent?: Maybe<AcademiesTag>;
  root?: Maybe<AcademiesRootTag>;
};

export type AcademiesTagData = {
  __typename?: 'AcademiesTagData';
  isClickable: Scalars['Boolean']['output'];
  isTopic: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export enum AcademiesTagKind {
  Child = 'Child',
  Root = 'Root'
}

export type AcademiesTagQueries = {
  __typename?: 'AcademiesTagQueries';
  AcademiesTags: AcademiesRootTagsConnection;
};


export type AcademiesTagQueriesAcademiesTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type AcademiesTagsConnection = {
  __typename?: 'AcademiesTagsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AcademiesTagsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AcademiesTagsEdge = {
  __typename?: 'AcademiesTagsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AcademiesTag;
};

export type AcademiesUserExtension = UserExtension & {
  __typename?: 'AcademiesUserExtension';
  adsOptIn: Scalars['Boolean']['output'];
  avatar?: Maybe<File>;
  branch?: Maybe<Branch | '%future added value'>;
  firstLogin: Scalars['Boolean']['output'];
  firstName: Scalars['String']['output'];
  gamificationPoints: Scalars['Int']['output'];
  kind: UserExtensionKind | '%future added value';
  lastName: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  position?: Maybe<Scalars['String']['output']>;
  potentialAnalysisMaxRewardAcknowledged?: Maybe<Scalars['Boolean']['output']>;
  progressInPercent: Scalars['Int']['output'];
  sumGamificationPoints: Scalars['Int']['output'];
  teamSize?: Maybe<TeamSize | '%future added value'>;
};

export type AcceptInvitationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type AcceptInvitationPayload = {
  __typename?: 'AcceptInvitationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AcceptInviteWithNewUserInput = {
  adsOptIn: Scalars['Boolean']['input'];
  branch?: InputMaybe<Branch | '%future added value'>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  position?: InputMaybe<Scalars['String']['input']>;
  rawPassword: Scalars['String']['input'];
  teamSize?: InputMaybe<TeamSize | '%future added value'>;
  token: Scalars['String']['input'];
};

export type AcceptInviteWithNewUserPayload = {
  __typename?: 'AcceptInviteWithNewUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  loginResult: LoginResult;
};

export type Account = Node & {
  __typename?: 'Account';
  extension?: Maybe<AccountExtension>;
  extensions: Array<AccountExtension>;
  groupAssociations: Array<AccountGroupAssociation>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  registeredAt: Scalars['ZonedDateTIme']['output'];
};


export type AccountExtensionArgs = {
  accountExtensionKind: AccountExtensionKind;
};

/** Data only accessible by the admin */
export type AccountBaseDataAdminMutationSchema = {
  __typename?: 'AccountBaseDataAdminMutationSchema';
  editBusinessBaseData?: Maybe<EditBusinessBaseDataAdminPayload>;
  editPrivateBaseData?: Maybe<EditPrivateBaseDataAdminPayload>;
};


/** Data only accessible by the admin */
export type AccountBaseDataAdminMutationSchemaEditBusinessBaseDataArgs = {
  input: EditBusinessBaseDataAdminInput;
};


/** Data only accessible by the admin */
export type AccountBaseDataAdminMutationSchemaEditPrivateBaseDataArgs = {
  input: EditPrivateBaseDataAdminInput;
};

/** Data only accessible by the admin */
export type AccountBaseDataAdminSchema = {
  __typename?: 'AccountBaseDataAdminSchema';
  AccountBaseData: BaseData;
};


/** Data only accessible by the admin */
export type AccountBaseDataAdminSchemaAccountBaseDataArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByAccountId: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AccountBaseDataMutations = {
  __typename?: 'AccountBaseDataMutations';
  editBusinessBaseData?: Maybe<EditBusinessBaseDataPayload>;
  editPrivateBaseData?: Maybe<EditPrivateBaseDataPayload>;
  setAccountBaseDataCountry?: Maybe<SetAccountBaseDataCountryPayload>;
};


export type AccountBaseDataMutationsEditBusinessBaseDataArgs = {
  input: EditBusinessBaseDataInput;
};


export type AccountBaseDataMutationsEditPrivateBaseDataArgs = {
  input: EditPrivateBaseDataInput;
};


export type AccountBaseDataMutationsSetAccountBaseDataCountryArgs = {
  input: SetAccountBaseDataCountryInput;
};

export type AccountBaseDataQueries = {
  __typename?: 'AccountBaseDataQueries';
  AccountBaseData: BaseData;
};

/** A connection to a list of items. */
export type AccountConnection = {
  __typename?: 'AccountConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AccountEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AccountData = {
  __typename?: 'AccountData';
  bic?: Maybe<Scalars['String']['output']>;
  iban: Scalars['String']['output'];
};

export type AccountDataInput = {
  bic?: InputMaybe<Scalars['String']['input']>;
  iban: Scalars['String']['input'];
};

/** An edge in a connection. */
export type AccountEdge = {
  __typename?: 'AccountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Account;
};

export type AccountExtension = {
  kind: AccountExtensionKind | '%future added value';
};

export enum AccountExtensionKind {
  Academies = 'Academies'
}

export type AccountGroup = Node & {
  __typename?: 'AccountGroup';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  isBuiltIn: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Permission | '%future added value'>;
};

export type AccountGroupAssignmentRule = AssignmentRule & Node & {
  __typename?: 'AccountGroupAssignmentRule';
  accountRef: Scalars['ID']['output'];
  active: Scalars['Boolean']['output'];
  amountEffectedUser: Scalars['Long']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  licenseGroupingId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  userInAccountGroups: Array<UserInAccountGroup>;
};

export type AccountGroupAssociation = {
  __typename?: 'AccountGroupAssociation';
  group?: Maybe<AccountGroup>;
};

export type AccountGroupProduct = ProductData & {
  __typename?: 'AccountGroupProduct';
  accountGroupId?: Maybe<Scalars['ID']['output']>;
  kind: ProductKind | '%future added value';
};

/** A connection to a list of items. */
export type AccountGroupsConnection = {
  __typename?: 'AccountGroupsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AccountGroupsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AccountGroupsEdge = {
  __typename?: 'AccountGroupsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AccountGroup;
};

export type AccountMember = {
  groups: Array<UserInAccountGroup>;
  id: Scalars['ID']['output'];
  isManager: Scalars['Boolean']['output'];
  kind: AccountMemberKind | '%future added value';
  name: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type AccountMemberConnection = {
  __typename?: 'AccountMemberConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AccountMemberEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AccountMemberEdge = {
  __typename?: 'AccountMemberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AccountMember;
};

export enum AccountMemberKind {
  Invitation = 'Invitation',
  UserInAccount = 'UserInAccount'
}

export type AccountMemberManagementMutations = {
  __typename?: 'AccountMemberManagementMutations';
  anonymizeAccountAsOwner?: Maybe<AnonymizeAccountAsOwnerPayload>;
  createUserInAccountGroupAndAddOrInviteUsersMutation?: Maybe<CreateUserInAccountGroupAndAddOrInviteUsersMutationPayload>;
  deleteInvitation?: Maybe<DeleteInvitationPayload>;
  deleteUserInAccountGroups?: Maybe<DeleteUserInAccountGroupsPayload>;
  editUserInAccountGroupAndAddOrInviteUsersMutation?: Maybe<EditUserInAccountGroupAndAddOrInviteUsersMutationPayload>;
  inviteOrAddUsersToUserInAccountGroups?: Maybe<InviteOrAddUsersToUserInAccountGroupsPayload>;
  removeUsersFromAccount?: Maybe<RemoveUsersFromAccountPayload>;
  removeUsersFromUserInAccountGroup?: Maybe<RemoveUsersFromUserInAccountGroupPayload>;
};


export type AccountMemberManagementMutationsAnonymizeAccountAsOwnerArgs = {
  input: AnonymizeAccountAsOwnerInput;
};


export type AccountMemberManagementMutationsCreateUserInAccountGroupAndAddOrInviteUsersMutationArgs = {
  input: CreateUserInAccountGroupAndAddOrInviteUsersMutationInput;
};


export type AccountMemberManagementMutationsDeleteInvitationArgs = {
  input: DeleteInvitationInput;
};


export type AccountMemberManagementMutationsDeleteUserInAccountGroupsArgs = {
  input: DeleteUserInAccountGroupsInput;
};


export type AccountMemberManagementMutationsEditUserInAccountGroupAndAddOrInviteUsersMutationArgs = {
  input: EditUserInAccountGroupAndAddOrInviteUsersMutationInput;
};


export type AccountMemberManagementMutationsInviteOrAddUsersToUserInAccountGroupsArgs = {
  input: InviteOrAddUsersToUserInAccountGroupsInput;
};


export type AccountMemberManagementMutationsRemoveUsersFromAccountArgs = {
  input: RemoveUsersFromAccountInput;
};


export type AccountMemberManagementMutationsRemoveUsersFromUserInAccountGroupArgs = {
  input: RemoveUsersFromUserInAccountGroupInput;
};

export type AccountMemberManagementQueries = {
  __typename?: 'AccountMemberManagementQueries';
  AccountMembers: AccountMembersResult;
  UserInAccountGroupWrapper?: Maybe<UserInAccountGroupWrapper>;
  UserInAccountGroupWrappers: UserInAccountGroupWrappersResult;
};


export type AccountMemberManagementQueriesAccountMembersArgs = {
  filterByAccountMemberKind?: InputMaybe<AccountMemberKind>;
  filterByGroupIds: Array<Scalars['ID']['input']>;
  filterByNameOrEmail?: InputMaybe<Scalars['String']['input']>;
};


export type AccountMemberManagementQueriesUserInAccountGroupWrapperArgs = {
  id: Scalars['ID']['input'];
};


export type AccountMemberManagementQueriesUserInAccountGroupWrappersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  doCalcMemberCount: Scalars['Boolean']['input'];
  filterByName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  includeOwner: Scalars['Boolean']['input'];
  includeUser: Scalars['Boolean']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AccountMembersResult = {
  __typename?: 'AccountMembersResult';
  accountMembers: AccountMemberConnection;
  invitationCount: Scalars['Long']['output'];
  userCount: Scalars['Long']['output'];
};


export type AccountMembersResultAccountMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AccountPermissions = {
  __typename?: 'AccountPermissions';
  accountRef: Scalars['ID']['output'];
  permissions: Array<Permission | '%future added value'>;
};

export type AcknowledgePotentialAnalysisMaxRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type AcknowledgePotentialAnalysisMaxRewardPayload = {
  __typename?: 'AcknowledgePotentialAnalysisMaxRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AcknowledgePublishingV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  publishingId: Scalars['ID']['input'];
};

export type AcknowledgePublishingV2Payload = {
  __typename?: 'AcknowledgePublishingV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  publishing: PublishingV2;
};

export type ActivateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type ActivateUserPayload = {
  __typename?: 'ActivateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ActiveAsyncContentSubmissionDefinition = AsyncContentSubmissionDefinition & ContentSubmissionDefinition & {
  __typename?: 'ActiveAsyncContentSubmissionDefinition';
  contentKind: ContentKind | '%future added value';
  element?: Maybe<AsyncLearnElement>;
  status: ContentSubmissionStatus | '%future added value';
};

export type ActiveELearningContentSubmissionDefinition = ContentSubmissionDefinition & ELearningContentSubmissionDefinition & {
  __typename?: 'ActiveELearningContentSubmissionDefinition';
  canGoToNext: Scalars['Boolean']['output'];
  canGoToPrevious: Scalars['Boolean']['output'];
  contentKind: ContentKind | '%future added value';
  currentElementState?: Maybe<ElementState>;
  progress: ELearningContentSubmissionProgress;
  relativeProgress: ELearningContentSubmissionRelativeProgress;
  status: ContentSubmissionStatus | '%future added value';
};

export type ActiveELearningContentSubmissionProgress = ELearningContentSubmissionProgress & {
  __typename?: 'ActiveELearningContentSubmissionProgress';
  currentElementIndex: Scalars['Int']['output'];
  isAtLastElement: Scalars['Boolean']['output'];
  numElements: Scalars['Int']['output'];
  percentage: Scalars['Int']['output'];
};

export type AddAfterDateTimeVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dateTime: Scalars['ZonedDateTIme']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type AddAfterDateTimeVisibilityTreeConfigPayload = {
  __typename?: 'AddAfterDateTimeVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddBlockPermanentlyRestartIfFailedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
  maximumTries: Scalars['Int']['input'];
};

export type AddBlockPermanentlyRestartIfFailedContentConfigPayload = {
  __typename?: 'AddBlockPermanentlyRestartIfFailedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type AddBlockTemporarilyRestartIfFailedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
  daysToBlock: Scalars['Int']['input'];
};

export type AddBlockTemporarilyRestartIfFailedContentConfigPayload = {
  __typename?: 'AddBlockTemporarilyRestartIfFailedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type AddCanAfterStartingTreeStartContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
};

export type AddCanAfterStartingTreeStartContentConfigPayload = {
  __typename?: 'AddCanAfterStartingTreeStartContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type AddCanIfUnlockedStartContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
};

export type AddCanIfUnlockedStartContentConfigPayload = {
  __typename?: 'AddCanIfUnlockedStartContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type AddCanNotRestartIfFailedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type AddCanNotRestartIfFailedContentConfigPayload = {
  __typename?: 'AddCanNotRestartIfFailedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type AddColumnToMatrixElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  columnTitle: Scalars['String']['input'];
  correctAnswerContent: Scalars['String']['input'];
  matrixElementId: Scalars['ID']['input'];
};

export type AddColumnToMatrixElementPayload = {
  __typename?: 'AddColumnToMatrixElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type AddCrmTreeHeadUpdaterRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
};

export type AddCrmTreeHeadUpdaterRewardPayload = {
  __typename?: 'AddCrmTreeHeadUpdaterRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type AddDefaultFileAttachmentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  descriptionOpt?: InputMaybe<Scalars['String']['input']>;
  fileId: Scalars['ID']['input'];
  nodeId: Scalars['ID']['input'];
  titleOpt?: InputMaybe<Scalars['String']['input']>;
};

export type AddDefaultFileAttachmentPayload = {
  __typename?: 'AddDefaultFileAttachmentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  node: TreeNode;
};

export type AddDoNotRewardTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type AddDoNotRewardTreeConfigPayload = {
  __typename?: 'AddDoNotRewardTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddEducationalParticipationCertificateRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
  data: ParticipationCertificateRewardDataInput;
};

export type AddEducationalParticipationCertificateRewardPayload = {
  __typename?: 'AddEducationalParticipationCertificateRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type AddExternalLicenseRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
  data: ExternalLicenseRewardDataInput;
};

export type AddExternalLicenseRewardPayload = {
  __typename?: 'AddExternalLicenseRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type AddGamificationPointsFinishContentSubmissionActionToActionResultToNextActionsInput = {
  actionResultToNextActionsId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fieldValueKindAndIdMap: Array<TriggerAction_FieldValueKindAndIdMapEntryInput>;
  name: Scalars['String']['input'];
};

export type AddGamificationPointsFinishContentSubmissionActionToActionResultToNextActionsPayload = {
  __typename?: 'AddGamificationPointsFinishContentSubmissionActionToActionResultToNextActionsPayload';
  actionResultToNextActions: TriggerAction_ActionResultToNextActions;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AddGamificationPointsFinishContentSubmissionActionToTriggerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fieldValueKindAndIdMap: Array<TriggerAction_FieldValueKindAndIdMapEntryInput>;
  name: Scalars['String']['input'];
  triggerId: Scalars['ID']['input'];
};

export type AddGamificationPointsFinishContentSubmissionActionToTriggerPayload = {
  __typename?: 'AddGamificationPointsFinishContentSubmissionActionToTriggerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  trigger: TriggerAction_Trigger;
};

export type AddHideVisibilityCoachingConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachingOfferId: Scalars['ID']['input'];
};

export type AddHideVisibilityCoachingConfigPayload = {
  __typename?: 'AddHideVisibilityCoachingConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachingOffer: CoachingOffer;
};

export type AddHideVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type AddHideVisibilityTreeConfigPayload = {
  __typename?: 'AddHideVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddIhkCertificateFinishContentSubmissionActionToActionResultToNextActionsInput = {
  actionResultToNextActionsId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fieldValueKindAndIdMap: Array<TriggerAction_FieldValueKindAndIdMapEntryInput>;
  name: Scalars['String']['input'];
};

export type AddIhkCertificateFinishContentSubmissionActionToActionResultToNextActionsPayload = {
  __typename?: 'AddIHKCertificateFinishContentSubmissionActionToActionResultToNextActionsPayload';
  actionResultToNextActions: TriggerAction_ActionResultToNextActions;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AddIhkCertificateFinishContentSubmissionActionToTriggerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fieldValueKindAndIdMap: Array<TriggerAction_FieldValueKindAndIdMapEntryInput>;
  name: Scalars['String']['input'];
  triggerId: Scalars['ID']['input'];
};

export type AddIhkCertificateFinishContentSubmissionActionToTriggerPayload = {
  __typename?: 'AddIHKCertificateFinishContentSubmissionActionToTriggerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  trigger: TriggerAction_Trigger;
};

export type AddIhkCertificateRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
};

export type AddIhkCertificateRewardPayload = {
  __typename?: 'AddIHKCertificateRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type AddMatchingPlacementInput = {
  accountId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  matchingId: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type AddMatchingPlacementPayload = {
  __typename?: 'AddMatchingPlacementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  linkToCoachingOffer: Scalars['String']['output'];
};

export type AddNotAfterDateTimeVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dateTime: Scalars['ZonedDateTIme']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type AddNotAfterDateTimeVisibilityTreeConfigPayload = {
  __typename?: 'AddNotAfterDateTimeVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddOnlyAzavAccountVisibilityCoachingConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachingOfferId: Scalars['ID']['input'];
};

export type AddOnlyAzavAccountVisibilityCoachingConfigPayload = {
  __typename?: 'AddOnlyAZAVAccountVisibilityCoachingConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachingOffer: CoachingOffer;
};

export type AddOnlyAzavAccountVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type AddOnlyAzavAccountVisibilityTreeConfigPayload = {
  __typename?: 'AddOnlyAZAVAccountVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddOnlyAdminsVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type AddOnlyAdminsVisibilityTreeConfigPayload = {
  __typename?: 'AddOnlyAdminsVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddOnlyBusinessAccountVisibilityCoachingConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachingOfferId: Scalars['ID']['input'];
};

export type AddOnlyBusinessAccountVisibilityCoachingConfigPayload = {
  __typename?: 'AddOnlyBusinessAccountVisibilityCoachingConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachingOffer: CoachingOffer;
};

export type AddOnlyBusinessAccountVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type AddOnlyBusinessAccountVisibilityTreeConfigPayload = {
  __typename?: 'AddOnlyBusinessAccountVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddOnlyEditorsVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type AddOnlyEditorsVisibilityTreeConfigPayload = {
  __typename?: 'AddOnlyEditorsVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddOnlyIfTreeStateVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type AddOnlyIfTreeStateVisibilityTreeConfigPayload = {
  __typename?: 'AddOnlyIfTreeStateVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type AddOnlyWithLicenseVisibilityCoachingConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachingOfferId: Scalars['ID']['input'];
};

export type AddOnlyWithLicenseVisibilityCoachingConfigPayload = {
  __typename?: 'AddOnlyWithLicenseVisibilityCoachingConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachingOffer: CoachingOffer;
};

export type AddOrderItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderElementId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type AddOrderItemPayload = {
  __typename?: 'AddOrderItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderElement: OrderElement;
};

export type AddParticipantAdminInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
};

export type AddParticipantAdminPayload = {
  __typename?: 'AddParticipantAdminPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AddParticipantToBookingAsCoachInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
};

export type AddParticipantToBookingAsCoachPayload = {
  __typename?: 'AddParticipantToBookingAsCoachPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AddParticipantToMyBookingInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
};

export type AddParticipantToMyBookingPayload = {
  __typename?: 'AddParticipantToMyBookingPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AddProductSelectionConditionInput = {
  amount: Scalars['Int']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  limitedCartDiscountId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};

export type AddProductSelectionConditionPayload = {
  __typename?: 'AddProductSelectionConditionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  limitedCartDiscount: LimitedCartDiscount;
};

export type AddRowToMatrixElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  correctAnswerContent: Scalars['String']['input'];
  matrixElementId: Scalars['ID']['input'];
  rowTitle: Scalars['String']['input'];
};

export type AddRowToMatrixElementPayload = {
  __typename?: 'AddRowToMatrixElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type AddUserToAccountAdminInput = {
  accountId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type AddUserToAccountAdminPayload = {
  __typename?: 'AddUserToAccountAdminPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userInAccount: UserInAccountEdge;
};

export type AddWordNoteInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  note: Scalars['String']['input'];
  wordId: Scalars['ID']['input'];
};

export type AddWordNotePayload = {
  __typename?: 'AddWordNotePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  inventory: WordInventory;
};

export type AddWordPackageRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
  data: WordPackageRewardDataInput;
};

export type AddWordPackageRewardPayload = {
  __typename?: 'AddWordPackageRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type AddWordProficienciesRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
};

export type AddWordProficienciesRewardPayload = {
  __typename?: 'AddWordProficienciesRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type AddWordToPackageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  explanation: Scalars['String']['input'];
  translation?: InputMaybe<Scalars['String']['input']>;
  word: Scalars['String']['input'];
  wordPackageId: Scalars['ID']['input'];
};

export type AddWordToPackagePayload = {
  __typename?: 'AddWordToPackagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  wordPackage: WordPackage;
};

export type AddWrongAnswerInMatrixElementCellInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  matrixCellId: Scalars['ID']['input'];
  matrixElementId: Scalars['ID']['input'];
  wrongAnswerContent: Scalars['String']['input'];
};

export type AddWrongAnswerInMatrixElementCellPayload = {
  __typename?: 'AddWrongAnswerInMatrixElementCellPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  lineOne: Scalars['String']['output'];
  lineTwo: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
};

export type AddressInput = {
  city: Scalars['String']['input'];
  lineOne: Scalars['String']['input'];
  lineTwo: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
};

/** Data only accessible by the admin */
export type AdminMutationType = {
  __typename?: 'AdminMutationType';
  AcademiesTag: AcademiesTagAdminMutationSchema;
  AccountBaseData: AccountBaseDataAdminMutationSchema;
  AsyncContent: AsyncContentAdminMutationSchema;
  Auth: AuthAdminMutationSchema;
  AvgsPotentialAnalysis: AvgsPotentialAnalysisAdminMutationSchema;
  Azav: AzavAdminMutationSchema;
  Billing: BillingAdminMutationSchema;
  Caching: CachingAdminMutationSchema;
  Coaching: CoachingAdminMutationSchema;
  CustomerFeedback: CustomerFeedbackAdminMutationSchema;
  ElearningV2: ElearningV2AdminMutationSchema;
  Email: EmailAdminMutationSchema;
  FeatureToggle: FeatureToggleAdminMutationSchema;
  Files: FilesAdminMutationSchema;
  Hubspot: HubspotAdminMutationSchema;
  Instructor: InstructorAdminMutationSchema;
  LearnV2: LearnV2AdminMutationSchema;
  LicenseDefinition: LicenseDefinitionAdminMutationSchema;
  Notification: NotificationAdminMutationSchema;
  PublishingV2: PublishingV2AdminMutationSchema;
  Settings: SettingsAdminMutationSchema;
  Staging: StagingAdminMutationSchema;
  Tag: TagAdminMutationSchema;
  Tree: TreeAdminMutationSchema;
  Trend: TrendAdminMutationSchema;
  TriggerAction: TriggerActionAdminMutationSchema;
  VimeoVideoSource: VimeoVideoSourceAdminMutationSchema;
  Vocab: VocabAdminMutationSchema;
};

/** Data only accessible by the admin */
export type AdminQueryType = {
  __typename?: 'AdminQueryType';
  AcademiesTag: AcademiesTagAdminSchema;
  AccountBaseData: AccountBaseDataAdminSchema;
  AsyncContent: AsyncContentAdminSchema;
  Auth: AuthAdminSchema;
  AvgsPotentialAnalysis: AvgsPotentialAnalysisAdminSchema;
  Billing: BillingAdminSchema;
  Coaching: CoachingAdminSchema;
  Email: EmailAdminSchema;
  FeatureToggle: FeatureToggleAdminSchema;
  Files: FilesAdminSchema;
  Instructor: InstructorAdminSchema;
  LearnV2: LearnV2AdminSchema;
  Learnable: LearnableAdminSchema;
  LicenseDefinition: LicenseDefinitionAdminSchema;
  Management: ManagementAdminSchema;
  Notification: NotificationAdminSchema;
  PublishingV2: PublishingV2AdminSchema;
  Reports: ReportsAdminSchema;
  Settings: SettingsAdminSchema;
  Tag: TagAdminSchema;
  Tree: TreeAdminSchema;
  Trend: TrendAdminSchema;
  TriggerAction: TriggerActionAdminSchema;
  VimeoVideoSource: VimeoVideoSourceAdminSchema;
  Vocab: VocabAdminSchema;
};

export type Advantage = {
  __typename?: 'Advantage';
  description: Scalars['String']['output'];
  heading: Scalars['String']['output'];
  icon?: Maybe<Icon | '%future added value'>;
};

export type AdvantageInput = {
  description: Scalars['String']['input'];
  heading: Scalars['String']['input'];
  icon?: InputMaybe<Icon | '%future added value'>;
};

export type AfterDateTimeVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'AfterDateTimeVisibilityTreeConfig';
  configType: VisibilityTreeConfigType | '%future added value';
  dateTime: Scalars['ZonedDateTIme']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type AlwaysPassContentConfig = PassContentConfig & {
  __typename?: 'AlwaysPassContentConfig';
  configType: PassContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type AlwaysRestartContinueContentConfig = ContinueContentConfig & {
  __typename?: 'AlwaysRestartContinueContentConfig';
  configType: ContinueContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type AnonymizeAccountAsOwnerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type AnonymizeAccountAsOwnerPayload = {
  __typename?: 'AnonymizeAccountAsOwnerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type AnonymizeAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type AnonymizeAccountPayload = {
  __typename?: 'AnonymizeAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type AnonymizeMyUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type AnonymizeMyUserPayload = {
  __typename?: 'AnonymizeMyUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type AnswerMatrixElementCell = MatrixElementCell & {
  __typename?: 'AnswerMatrixElementCell';
  correctAnswer: MatrixElementCellCorrectAnswer;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: MatrixElementCellKind | '%future added value';
  wrongAnswers: Array<MatrixElementCellWrongAnswer>;
  xIdx: Scalars['Int']['output'];
  yIdx: Scalars['Int']['output'];
};

export type AnswerMatrixLearnElementCell = MatrixLearnElementCell & {
  __typename?: 'AnswerMatrixLearnElementCell';
  answers: Array<MatrixLearnElementAnswer>;
  kind: MatrixElementCellKind | '%future added value';
  xIdx: Scalars['Int']['output'];
  yIdx: Scalars['Int']['output'];
};

export type AnswerOptionV2 = {
  __typename?: 'AnswerOptionV2';
  answer: Scalars['String']['output'];
  image?: Maybe<File>;
  isCorrect: Scalars['Boolean']['output'];
};

export type AnswerOptionV2Input = {
  answer: Scalars['String']['input'];
  imageRef?: InputMaybe<Scalars['ID']['input']>;
  isCorrect: Scalars['Boolean']['input'];
};

export type AnswerOptionWithoutCorrect = {
  __typename?: 'AnswerOptionWithoutCorrect';
  answer: Scalars['String']['output'];
  image?: Maybe<File>;
};

export enum AnsweringTypeV2 {
  AllowMultipleAnswersAllCorrectMustBeGiven = 'allowMultipleAnswersAllCorrectMustBeGiven',
  AllowMultipleAnswersOnlySomeCorrectMustBeGiven = 'allowMultipleAnswersOnlySomeCorrectMustBeGiven',
  AllowOnlyOneAnswer = 'allowOnlyOneAnswer'
}

export type AppleIapData = PaymentProviderData & {
  __typename?: 'AppleIAPData';
  dataType: PaymentProviderDataType | '%future added value';
  paymentMethod: PaymentMethodType | '%future added value';
  receipt: Scalars['String']['output'];
};

export type AssignmentRule = {
  accountRef: Scalars['ID']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  licenseGroupingId: Scalars['ID']['output'];
};

/** Data only accessible by the admin */
export type AsyncContentAdminMutationSchema = {
  __typename?: 'AsyncContentAdminMutationSchema';
  createUploadAsyncElement?: Maybe<CreateUploadAsyncElementPayload>;
  editUploadAsyncElement?: Maybe<EditUploadAsyncElementPayload>;
  evaluateUploadAsyncElementTask?: Maybe<EvaluateUploadAsyncElementTaskPayload>;
};


/** Data only accessible by the admin */
export type AsyncContentAdminMutationSchemaCreateUploadAsyncElementArgs = {
  input: CreateUploadAsyncElementInput;
};


/** Data only accessible by the admin */
export type AsyncContentAdminMutationSchemaEditUploadAsyncElementArgs = {
  input: EditUploadAsyncElementInput;
};


/** Data only accessible by the admin */
export type AsyncContentAdminMutationSchemaEvaluateUploadAsyncElementTaskArgs = {
  input: EvaluateUploadAsyncElementTaskInput;
};

/** Data only accessible by the admin */
export type AsyncContentAdminSchema = {
  __typename?: 'AsyncContentAdminSchema';
  GetAsyncElementTasks: AsyncElementTasksConnection;
};


/** Data only accessible by the admin */
export type AsyncContentAdminSchemaGetAsyncElementTasksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AsyncContentMutations = {
  __typename?: 'AsyncContentMutations';
  submitUploadAsyncElement?: Maybe<SubmitUploadAsyncElementPayload>;
};


export type AsyncContentMutationsSubmitUploadAsyncElementArgs = {
  input: SubmitUploadAsyncElementInput;
};

export type AsyncContentSubmissionDefinition = {
  contentKind: ContentKind | '%future added value';
  element?: Maybe<AsyncLearnElement>;
  status: ContentSubmissionStatus | '%future added value';
};

export type AsyncContentTypeDefinition = ContentTypeDefinition & TypeDefinition & {
  __typename?: 'AsyncContentTypeDefinition';
  contentKind: ContentKind | '%future added value';
  continueConfig: ContinueContentConfig;
  definitionType: TypeDefinitionType | '%future added value';
  element?: Maybe<AsyncElement>;
  extension: ContentExtension;
  passConfig: PassContentConfig;
  restartIfFailedConfigs: Array<RestartIfFailedContentConfig>;
  restartIfPassedConfig: RestartIfPassedContentConfig;
  rewardConfig: RewardContentConfig;
  rewards: Array<Reward>;
  startConfigs: Array<StartContentConfig>;
  trigger?: Maybe<TriggerAction_Trigger>;
};

export type AsyncElement = {
  assignedEvaluator?: Maybe<User>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: AsyncElementKind | '%future added value';
  taskDescription?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export enum AsyncElementKind {
  Upload = 'Upload'
}

export type AsyncElementTask = {
  assignedEvaluator?: Maybe<User>;
  elementKind: AsyncElementKind | '%future added value';
  extension: AsyncElementTaskExtension;
  id: Scalars['ID']['output'];
  status: AsyncElementTaskStatus | '%future added value';
  submissionInfo: AsyncElementTaskSubmissionInfo;
};

export type AsyncElementTaskExtension = {
  doNotUse: Scalars['String']['output'];
};

export type AsyncElementTaskExtensionImpl = AsyncElementTaskExtension & {
  __typename?: 'AsyncElementTaskExtensionImpl';
  doNotUse: Scalars['String']['output'];
  hierarchy?: Maybe<AsyncElementTaskHierarchy>;
};

export type AsyncElementTaskHierarchy = {
  __typename?: 'AsyncElementTaskHierarchy';
  asyncContentTitle: Scalars['String']['output'];
  branchTitle: Scalars['String']['output'];
  rootTitle: Scalars['String']['output'];
};

export enum AsyncElementTaskStatus {
  Evaluated = 'Evaluated',
  Fresh = 'Fresh'
}

export type AsyncElementTaskSubmissionInfo = {
  __typename?: 'AsyncElementTaskSubmissionInfo';
  at: Scalars['ZonedDateTIme']['output'];
  by?: Maybe<User>;
};

/** A connection to a list of items. */
export type AsyncElementTasksConnection = {
  __typename?: 'AsyncElementTasksConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AsyncElementTasksEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AsyncElementTasksEdge = {
  __typename?: 'AsyncElementTasksEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AsyncElementTask;
};

export type AsyncLearnElement = {
  elementKind: AsyncElementKind | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  taskDescription: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export enum AttachmentKind {
  DefaultFile = 'DefaultFile'
}

export type AttachmentV2 = {
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: AttachmentKind | '%future added value';
  title?: Maybe<Scalars['String']['output']>;
};

/** Data only accessible by the admin */
export type AuthAdminMutationSchema = {
  __typename?: 'AuthAdminMutationSchema';
  addUserToAccount?: Maybe<AddUserToAccountAdminPayload>;
  anonymizeAccountAdmin?: Maybe<AnonymizeAccountPayload>;
  anonymizeUser?: Maybe<DeleteUserPayload>;
  createAccount?: Maybe<CreateAccountPayload>;
  createUserInAccount?: Maybe<CreateUserInAccountPayload>;
  editUser?: Maybe<EditUserPayload>;
  loginAsUserJwt?: Maybe<LoginAsUserJwtPayload>;
  removeUserFromAccount?: Maybe<RemoveUserFromAccountPayload>;
  setAccountGroups?: Maybe<SetAccountGroupsPayload>;
  setAccountName?: Maybe<SetAccountNamePayload>;
  setUserInAccountGroups?: Maybe<SetUserInAccountGroupsPayload>;
  triggerResendActivation?: Maybe<TriggerResendActivationPayload>;
  triggerResetPassword?: Maybe<TriggerResetPasswordPayload>;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaAddUserToAccountArgs = {
  input: AddUserToAccountAdminInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaAnonymizeAccountAdminArgs = {
  input: AnonymizeAccountInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaAnonymizeUserArgs = {
  input: DeleteUserInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaCreateAccountArgs = {
  input: CreateAccountInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaCreateUserInAccountArgs = {
  input: CreateUserInAccountInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaEditUserArgs = {
  input: EditUserInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaLoginAsUserJwtArgs = {
  input: LoginAsUserJwtInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaRemoveUserFromAccountArgs = {
  input: RemoveUserFromAccountInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaSetAccountGroupsArgs = {
  input: SetAccountGroupsInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaSetAccountNameArgs = {
  input: SetAccountNameInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaSetUserInAccountGroupsArgs = {
  input: SetUserInAccountGroupsInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaTriggerResendActivationArgs = {
  input: TriggerResendActivationInput;
};


/** Data only accessible by the admin */
export type AuthAdminMutationSchemaTriggerResetPasswordArgs = {
  input: TriggerResetPasswordInput;
};

/** Data only accessible by the admin */
export type AuthAdminSchema = {
  __typename?: 'AuthAdminSchema';
  Accounts: AccountConnection;
  GetUserInAccountGroups: Array<UserInAccountGroup>;
  SearchEditors: UserConnection;
  SelectAccounts: AccountConnection;
  SelectUsers: UserConnection;
  Users: UserConnection;
};


/** Data only accessible by the admin */
export type AuthAdminSchemaAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type AuthAdminSchemaGetUserInAccountGroupsArgs = {
  id: Scalars['ID']['input'];
};


/** Data only accessible by the admin */
export type AuthAdminSchemaSearchEditorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByNameOrEmail?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type AuthAdminSchemaSelectAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids: Array<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  nameOpt?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type AuthAdminSchemaSelectUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByAccountId?: InputMaybe<Scalars['ID']['input']>;
  filterByNameOrEmail?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type AuthAdminSchemaUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByAccountId?: InputMaybe<Scalars['ID']['input']>;
  filterByNameOrEmail?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AuthMutations = {
  __typename?: 'AuthMutations';
  acceptInvitation?: Maybe<AcceptInvitationPayload>;
  acceptInvitationWithNewUser?: Maybe<AcceptInviteWithNewUserPayload>;
  activateUser?: Maybe<ActivateUserPayload>;
  forgotPassword?: Maybe<ForgotPasswordPayload>;
  leaveAccount?: Maybe<LeaveAccountPayload>;
  login?: Maybe<LoginPayload>;
  loginJwt?: Maybe<LoginJwtPayload>;
  logoutJwt?: Maybe<LogoutJwtPayload>;
  registerUser?: Maybe<RegisterUserPayload>;
  resendActivation?: Maybe<ResendActivationPayload>;
  resetPasswordAndActivate?: Maybe<ResetPasswordAndActivatePayload>;
  setAccountNameUser?: Maybe<SetAccountNameUserPayload>;
  switchAccount?: Maybe<SwitchAccountPayload>;
};


export type AuthMutationsAcceptInvitationArgs = {
  input: AcceptInvitationInput;
};


export type AuthMutationsAcceptInvitationWithNewUserArgs = {
  input: AcceptInviteWithNewUserInput;
};


export type AuthMutationsActivateUserArgs = {
  input: ActivateUserInput;
};


export type AuthMutationsForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type AuthMutationsLeaveAccountArgs = {
  input: LeaveAccountInput;
};


export type AuthMutationsLoginArgs = {
  input: LoginInput;
};


export type AuthMutationsLoginJwtArgs = {
  input: LoginJwtInput;
};


export type AuthMutationsLogoutJwtArgs = {
  input: LogoutJwtInput;
};


export type AuthMutationsRegisterUserArgs = {
  input: RegisterUserInput;
};


export type AuthMutationsResendActivationArgs = {
  input: ResendActivationInput;
};


export type AuthMutationsResetPasswordAndActivateArgs = {
  input: ResetPasswordAndActivateInput;
};


export type AuthMutationsSetAccountNameUserArgs = {
  input: SetAccountNameUserInput;
};


export type AuthMutationsSwitchAccountArgs = {
  input: SwitchAccountInput;
};

export type AuthQueries = {
  __typename?: 'AuthQueries';
  InvitationByToken?: Maybe<Invitation>;
};


export type AuthQueriesInvitationByTokenArgs = {
  token: Scalars['String']['input'];
};

/** Data partaining to the current user */
export type AuthViewerMutationSchema = {
  __typename?: 'AuthViewerMutationSchema';
  anonymizeMyUser?: Maybe<AnonymizeMyUserPayload>;
};


/** Data partaining to the current user */
export type AuthViewerMutationSchemaAnonymizeMyUserArgs = {
  input: AnonymizeMyUserInput;
};

/** Data partaining to the current user */
export type AuthViewerSchema = {
  __typename?: 'AuthViewerSchema';
  currentUser?: Maybe<CurrentUser>;
};

export type Availability = Node & {
  __typename?: 'Availability';
  booking: BookingInterface;
  coachProfile?: Maybe<CoachProfile>;
  data: AvailabilityData;
  feedback?: Maybe<CoachFeedback>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type AvailabilityConnection = {
  __typename?: 'AvailabilityConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AvailabilityEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AvailabilityData = {
  __typename?: 'AvailabilityData';
  endDateTime: Scalars['ZonedDateTIme']['output'];
  startDateTime: Scalars['ZonedDateTIme']['output'];
};

export type AvailabilityDataInput = {
  endDateTime: Scalars['ZonedDateTIme']['input'];
  startDateTime: Scalars['ZonedDateTIme']['input'];
};

/** An edge in a connection. */
export type AvailabilityEdge = {
  __typename?: 'AvailabilityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Availability;
};

export type AvailabilitySchedule = Node & {
  __typename?: 'AvailabilitySchedule';
  coachRef: Scalars['ID']['output'];
  data: ScheduleData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type AvailabilityScheduleConnection = {
  __typename?: 'AvailabilityScheduleConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AvailabilityScheduleEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AvailabilityScheduleDayAndTimes = {
  __typename?: 'AvailabilityScheduleDayAndTimes';
  dayOfWeek: Scalars['DayOfWeek']['output'];
  timeSlots: Array<Scalars['LocalTime']['output']>;
};

/** An edge in a connection. */
export type AvailabilityScheduleEdge = {
  __typename?: 'AvailabilityScheduleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AvailabilitySchedule;
};

/** Data only accessible by the admin */
export type AvgsPotentialAnalysisAdminMutationSchema = {
  __typename?: 'AvgsPotentialAnalysisAdminMutationSchema';
  changeInvitedForUser?: Maybe<ChangeInvitedForUserPayload>;
  changeReplacementCoach?: Maybe<ChangeReplacementCoachPayload>;
  createPotentialAnalysis?: Maybe<CreatePotentialAnalysisPayload>;
  transformBusinessAccountToAVGSAccount?: Maybe<TransformBusinessAccountToAvgsAccountPayload>;
  transformPrivateAccountToAVGSAccount?: Maybe<TransformPrivateAccountToAvgsAccountPayload>;
};


/** Data only accessible by the admin */
export type AvgsPotentialAnalysisAdminMutationSchemaChangeInvitedForUserArgs = {
  input: ChangeInvitedForUserInput;
};


/** Data only accessible by the admin */
export type AvgsPotentialAnalysisAdminMutationSchemaChangeReplacementCoachArgs = {
  input: ChangeReplacementCoachInput;
};


/** Data only accessible by the admin */
export type AvgsPotentialAnalysisAdminMutationSchemaCreatePotentialAnalysisArgs = {
  input: CreatePotentialAnalysisInput;
};


/** Data only accessible by the admin */
export type AvgsPotentialAnalysisAdminMutationSchemaTransformBusinessAccountToAvgsAccountArgs = {
  input: TransformBusinessAccountToAvgsAccountInput;
};


/** Data only accessible by the admin */
export type AvgsPotentialAnalysisAdminMutationSchemaTransformPrivateAccountToAvgsAccountArgs = {
  input: TransformPrivateAccountToAvgsAccountInput;
};

/** Data only accessible by the admin */
export type AvgsPotentialAnalysisAdminSchema = {
  __typename?: 'AvgsPotentialAnalysisAdminSchema';
  AVGSPotentialAnalysis: PotentialAnalysisConnection;
  AvailableModulesAndDimensions: Array<AvgsPotentialAnalysis_Module>;
  Info?: Maybe<AvgsPotentialAnalysis_Info>;
  SearchAVGSCoaches: UserConnection;
};


/** Data only accessible by the admin */
export type AvgsPotentialAnalysisAdminSchemaAvgsPotentialAnalysisArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type AvgsPotentialAnalysisAdminSchemaAvailableModulesAndDimensionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type AvgsPotentialAnalysisAdminSchemaSearchAvgsCoachesArgs = {
  accountId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByNameOrEmail?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AvgsPotentialAnalysisMutations = {
  __typename?: 'AvgsPotentialAnalysisMutations';
  setAnswerInMultipleChoiceFreeTextQuestion?: Maybe<SetAnswerInMultipleChoiceFreeTextQuestionPayload>;
  setAnswerInMultipleChoiceQuestion?: Maybe<SetAnswerInMultipleChoiceQuestionPayload>;
  setAnswerInScaleQuestion?: Maybe<SetAnswerInScaleQuestionPayload>;
  setAnswerInSingleChoiceFreeTextQuestion?: Maybe<SetAnswerInSingleChoiceFreeTextQuestionPayload>;
  setAnswerInSingleChoiceQuestion?: Maybe<SetAnswerInSingleChoiceQuestionPayload>;
  setAnswerInTextQuestion?: Maybe<SetAnswerInTextQuestionPayload>;
};


export type AvgsPotentialAnalysisMutationsSetAnswerInMultipleChoiceFreeTextQuestionArgs = {
  input: SetAnswerInMultipleChoiceFreeTextQuestionInput;
};


export type AvgsPotentialAnalysisMutationsSetAnswerInMultipleChoiceQuestionArgs = {
  input: SetAnswerInMultipleChoiceQuestionInput;
};


export type AvgsPotentialAnalysisMutationsSetAnswerInScaleQuestionArgs = {
  input: SetAnswerInScaleQuestionInput;
};


export type AvgsPotentialAnalysisMutationsSetAnswerInSingleChoiceFreeTextQuestionArgs = {
  input: SetAnswerInSingleChoiceFreeTextQuestionInput;
};


export type AvgsPotentialAnalysisMutationsSetAnswerInSingleChoiceQuestionArgs = {
  input: SetAnswerInSingleChoiceQuestionInput;
};


export type AvgsPotentialAnalysisMutationsSetAnswerInTextQuestionArgs = {
  input: SetAnswerInTextQuestionInput;
};

export type AvgsPotentialAnalysisQueries = {
  __typename?: 'AvgsPotentialAnalysisQueries';
  AVGSAccounts: AccountConnection;
  LearnPotentialAnalysis?: Maybe<AvgsPotentialAnalysis_LearnPotentialAnalysis>;
};


export type AvgsPotentialAnalysisQueriesAvgsAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type AvgsPotentialAnalysisQueriesLearnPotentialAnalysisArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learnPotentialAnalysisId: Scalars['ID']['input'];
};

/** Data only accessible by the admin */
export type AzavAdminMutationSchema = {
  __typename?: 'AzavAdminMutationSchema';
  transformBusinessAccountToAZAVAccount?: Maybe<TransformBusinessAccountToAzavAccountPayload>;
  transformPrivateAccountToAZAVAccount?: Maybe<TransformPrivateAccountToAzavAccountPayload>;
};


/** Data only accessible by the admin */
export type AzavAdminMutationSchemaTransformBusinessAccountToAzavAccountArgs = {
  input: TransformBusinessAccountToAzavAccountInput;
};


/** Data only accessible by the admin */
export type AzavAdminMutationSchemaTransformPrivateAccountToAzavAccountArgs = {
  input: TransformPrivateAccountToAzavAccountInput;
};

/** Data only accessible by the admin */
export type BillingAdminMutationSchema = {
  __typename?: 'BillingAdminMutationSchema';
  addProductSelectionCondition?: Maybe<AddProductSelectionConditionPayload>;
  createAccountGroupProduct?: Maybe<CreateAccountGroupProductPayload>;
  createContractPartner?: Maybe<CreateContractPartnerPayload>;
  createDiscountCode?: Maybe<CreateDiscountCodePayload>;
  createEuroDiscountAction?: Maybe<CreateEuroDiscountActionPayload>;
  createExternalLicense?: Maybe<CreateExternalLicensePayload>;
  createExternalLicensePool?: Maybe<CreateExternalLicensePoolPayload>;
  createLicenseProduct?: Maybe<CreateLicenseProductPayload>;
  createLicenseUsageReport?: Maybe<CreateLicenseUsageReportPayload>;
  createLicenses?: Maybe<CreateLicensesPayload>;
  createLimitedCartDiscount?: Maybe<CreateLimitedCartDiscountPayload>;
  createPercentageDiscountAction?: Maybe<CreatePercentageDiscountActionPayload>;
  createPlacementProduct?: Maybe<CreatePlacementProductPayload>;
  createRandomDiscountCodes?: Maybe<CreateRandomDiscountCodesPayload>;
  createStripeConnectAccount?: Maybe<CreateStripeConnectAccountPayload>;
  createTransfersReport?: Maybe<CreateTransfersReportPayload>;
  deleteCondition?: Maybe<DeleteConditionPayload>;
  deleteContractPartner?: Maybe<DeleteContractPartnerPayload>;
  deleteDiscountAction?: Maybe<DeleteDiscountActionPayload>;
  deleteDiscountCode?: Maybe<DeleteDiscountCodePayload>;
  deleteExternalLicense?: Maybe<DeleteExternalLicensePayload>;
  deleteExternalLicensePool?: Maybe<DeleteExternalLicensePoolPayload>;
  deleteLicense?: Maybe<DeleteLicensePayload>;
  deleteLimitedCartDiscount?: Maybe<DeleteLimitedCartDiscountPayload>;
  deleteProduct?: Maybe<DeleteProductPayload>;
  editAcademiesProductExtension?: Maybe<EditAcademiesProductExtensionPayload>;
  editAccountGroupProduct?: Maybe<EditAccountGroupProductPayload>;
  editContractPartnerData?: Maybe<EditContractPartnerDataPayload>;
  editDiscountCode?: Maybe<EditDiscountCodePayload>;
  editEuroDiscountAction?: Maybe<EditEuroDiscountActionPayload>;
  editExternalLicense?: Maybe<EditExternalLicensePayload>;
  editExternalLicensePool?: Maybe<EditExternalLicensePoolPayload>;
  editLicenseProduct?: Maybe<EditLicenseProductPayload>;
  editLimitedCartDiscount?: Maybe<EditLimitedCartDiscountPayload>;
  editPercentageDiscountAction?: Maybe<EditPercentageDiscountActionPayload>;
  editProduct?: Maybe<EditProductPayload>;
  editProductSelectionCondition?: Maybe<EditProductSelectionConditionPayload>;
  generateAbsoluteCartLink?: Maybe<GenerateAbsoluteCartLinkPayload>;
  issueExternalLicense?: Maybe<IssueExternalLicensePayload>;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaAddProductSelectionConditionArgs = {
  input: AddProductSelectionConditionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateAccountGroupProductArgs = {
  input: CreateAccountGroupProductInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateContractPartnerArgs = {
  input: CreateContractPartnerInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateDiscountCodeArgs = {
  input: CreateDiscountCodeInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateEuroDiscountActionArgs = {
  input: CreateEuroDiscountActionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateExternalLicenseArgs = {
  input: CreateExternalLicenseInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateExternalLicensePoolArgs = {
  input: CreateExternalLicensePoolInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateLicenseProductArgs = {
  input: CreateLicenseProductInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateLicenseUsageReportArgs = {
  input: CreateLicenseUsageReportInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateLicensesArgs = {
  input: CreateLicensesInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateLimitedCartDiscountArgs = {
  input: CreateLimitedCartDiscountInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreatePercentageDiscountActionArgs = {
  input: CreatePercentageDiscountActionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreatePlacementProductArgs = {
  input: CreatePlacementProductInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateRandomDiscountCodesArgs = {
  input: CreateRandomDiscountCodesInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateStripeConnectAccountArgs = {
  input: CreateStripeConnectAccountInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaCreateTransfersReportArgs = {
  input: CreateTransfersReportInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteConditionArgs = {
  input: DeleteConditionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteContractPartnerArgs = {
  input: DeleteContractPartnerInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteDiscountActionArgs = {
  input: DeleteDiscountActionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteDiscountCodeArgs = {
  input: DeleteDiscountCodeInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteExternalLicenseArgs = {
  input: DeleteExternalLicenseInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteExternalLicensePoolArgs = {
  input: DeleteExternalLicensePoolInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteLicenseArgs = {
  input: DeleteLicenseInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteLimitedCartDiscountArgs = {
  input: DeleteLimitedCartDiscountInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaDeleteProductArgs = {
  input: DeleteProductInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditAcademiesProductExtensionArgs = {
  input: EditAcademiesProductExtensionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditAccountGroupProductArgs = {
  input: EditAccountGroupProductInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditContractPartnerDataArgs = {
  input: EditContractPartnerDataInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditDiscountCodeArgs = {
  input: EditDiscountCodeInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditEuroDiscountActionArgs = {
  input: EditEuroDiscountActionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditExternalLicenseArgs = {
  input: EditExternalLicenseInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditExternalLicensePoolArgs = {
  input: EditExternalLicensePoolInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditLicenseProductArgs = {
  input: EditLicenseProductInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditLimitedCartDiscountArgs = {
  input: EditLimitedCartDiscountInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditPercentageDiscountActionArgs = {
  input: EditPercentageDiscountActionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditProductArgs = {
  input: EditProductInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaEditProductSelectionConditionArgs = {
  input: EditProductSelectionConditionInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaGenerateAbsoluteCartLinkArgs = {
  input: GenerateAbsoluteCartLinkInput;
};


/** Data only accessible by the admin */
export type BillingAdminMutationSchemaIssueExternalLicenseArgs = {
  input: IssueExternalLicenseInput;
};

/** Data only accessible by the admin */
export type BillingAdminSchema = {
  __typename?: 'BillingAdminSchema';
  ContractPartners: ContractPartnersConnection;
  DiscountActions: DiscountActionsConnection;
  DiscountsMultiselect: DiscountCodesV2Connection;
  GetExternalLicensePools: ExternalLicensePoolsConnection;
  GetExternalLicenses: ExternalLicensesConnection;
  LimitedCartDiscounts: LimitedCartDiscountConnection;
  Orders: OrdersConnection;
  SearchProducts: ProductsConnection;
  selectDiscountCodes: DiscountCodesV2Connection;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaContractPartnersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaDiscountActionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByActionTitle?: InputMaybe<Scalars['String']['input']>;
  filterByCode?: InputMaybe<Scalars['String']['input']>;
  filterByDiscountTypeKind?: InputMaybe<DiscountTypeKindInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaDiscountsMultiselectArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  codeOpt?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids: Array<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaGetExternalLicensePoolsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  nameOpt?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaGetExternalLicensesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isIssued?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pool?: InputMaybe<Scalars['ID']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaLimitedCartDiscountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaOrdersArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaSearchProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  inKinds: Array<ProductKind>;
  isHiddenOpt?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  titleOpt?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type BillingAdminSchemaSelectDiscountCodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type BillingDetails = {
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  customerType: CustomerType | '%future added value';
  firstName: Scalars['String']['output'];
  houseNumber: Scalars['String']['output'];
  invoiceEmail: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  salutation: SalutationType | '%future added value';
  street: Scalars['String']['output'];
};

export type BillingDetailsUpdate = HistoryEventInterface & {
  __typename?: 'BillingDetailsUpdate';
  kind: HistoryEventType | '%future added value';
};

export type BillingMutations = {
  __typename?: 'BillingMutations';
  bookTree?: Maybe<BookTreePayload>;
  changePaymentDate?: Maybe<ChangePaymentDatePayload>;
  changePaymentMethod?: Maybe<ChangePaymentMethodPayload>;
  createOrder?: Maybe<CreateOrderPayload>;
  payOrder?: Maybe<PayOrderPayload>;
  payOrderViaIAP?: Maybe<PayOrderViaIapPayload>;
  updateBusinessBillingDetails?: Maybe<UpdateBusinessBillingDetailsPayload>;
  updateBusinessBillingDetailsAndInitiateCheckout?: Maybe<UpdateBusinessBillingDetailsAndInitiateCheckoutPayload>;
  updateCart?: Maybe<UpdateCartPayload>;
  updatePrivateBillingDetails?: Maybe<UpdatePrivateBillingDetailsPayload>;
  updatePrivateBillingDetailsAndInitiateCheckout?: Maybe<UpdatePrivateBillingDetailsAndInitiateCheckoutPayload>;
};


export type BillingMutationsBookTreeArgs = {
  input: BookTreeInput;
};


export type BillingMutationsChangePaymentDateArgs = {
  input: ChangePaymentDateInput;
};


export type BillingMutationsChangePaymentMethodArgs = {
  input: ChangePaymentMethodInput;
};


export type BillingMutationsCreateOrderArgs = {
  input: CreateOrderInput;
};


export type BillingMutationsPayOrderArgs = {
  input: PayOrderInput;
};


export type BillingMutationsPayOrderViaIapArgs = {
  input: PayOrderViaIapInput;
};


export type BillingMutationsUpdateBusinessBillingDetailsArgs = {
  input: UpdateBusinessBillingDetailsInput;
};


export type BillingMutationsUpdateBusinessBillingDetailsAndInitiateCheckoutArgs = {
  input: UpdateBusinessBillingDetailsAndInitiateCheckoutInput;
};


export type BillingMutationsUpdateCartArgs = {
  input: UpdateCartInput;
};


export type BillingMutationsUpdatePrivateBillingDetailsArgs = {
  input: UpdatePrivateBillingDetailsInput;
};


export type BillingMutationsUpdatePrivateBillingDetailsAndInitiateCheckoutArgs = {
  input: UpdatePrivateBillingDetailsAndInitiateCheckoutInput;
};

/** Data partaining to the current user */
export type BillingViewerSchema = {
  __typename?: 'BillingViewerSchema';
  LicensesGroupedByDefinition: LicensesGroupedByDefinitionConnection;
  ViewerOrders: OrdersConnection;
};


/** Data partaining to the current user */
export type BillingViewerSchemaLicensesGroupedByDefinitionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data partaining to the current user */
export type BillingViewerSchemaViewerOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type BlockPermanentlyRestartIfFailedContentConfig = RestartIfFailedContentConfig & {
  __typename?: 'BlockPermanentlyRestartIfFailedContentConfig';
  configType: RestartIfFailedContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  maximumTries: Scalars['Int']['output'];
};

export type BlockTemporarilyRestartIfFailedContentConfig = RestartIfFailedContentConfig & {
  __typename?: 'BlockTemporarilyRestartIfFailedContentConfig';
  configType: RestartIfFailedContentConfigType | '%future added value';
  daysToBlock: Scalars['Int']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type BlockedByTreeContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'BlockedByTreeContentNodeAdvancementResult';
  status: ContentNodeAdvancementStatus | '%future added value';
};

export type BlockoutDate = {
  __typename?: 'BlockoutDate';
  from: Scalars['ZonedDateTIme']['output'];
  to: Scalars['ZonedDateTIme']['output'];
};

export type BlockoutDateInput = {
  from: Scalars['ZonedDateTIme']['input'];
  to: Scalars['ZonedDateTIme']['input'];
};

export type BookCoachingInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachingId: Scalars['ID']['input'];
};

export type BookCoachingPayload = {
  __typename?: 'BookCoachingPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type BookTreeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootId: Scalars['ID']['input'];
};

export type BookTreePayload = {
  __typename?: 'BookTreePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  root: LearnOpportunityV2;
};

export type BookedForGroup = BookingInterface & {
  __typename?: 'BookedForGroup';
  kind: BookingKind | '%future added value';
  msTeamsLink: Scalars['String']['output'];
  offer?: Maybe<CoachingOffer>;
  participants: Array<Participant>;
};

export type BookedOneToOne = BookingInterface & {
  __typename?: 'BookedOneToOne';
  kind: BookingKind | '%future added value';
  msTeamsLink: Scalars['String']['output'];
  offer?: Maybe<CoachingOffer>;
  participant: Participant;
};

export type BookingInterface = {
  kind: BookingKind | '%future added value';
};

export enum BookingKind {
  BookedForGroup = 'BookedForGroup',
  BookedOneToOne = 'BookedOneToOne',
  NotBooked = 'NotBooked'
}

export enum Branch {
  AdviceAndConsulting = 'adviceAndConsulting',
  AnalysisAndStatistic = 'analysisAndStatistic',
  FinanceAccountingAndControlling = 'financeAccountingAndControlling',
  GraphicsAndDesign = 'graphicsAndDesign',
  HealthMedicineAndSocialAffairs = 'healthMedicineAndSocialAffairs',
  ItAndSoftwareDevelopment = 'itAndSoftwareDevelopment',
  LegalServices = 'legalServices',
  MarketingAndAdvertising = 'marketingAndAdvertising',
  OtherFieldsOfActivity = 'otherFieldsOfActivity',
  PersonnelAndHr = 'personnelAndHr',
  ProcessPlanningAndQualityAssurance = 'processPlanningAndQualityAssurance',
  ProductManagement = 'productManagement'
}

export type BranchTypeDefinition = TypeDefinition & {
  __typename?: 'BranchTypeDefinition';
  childRefs: Array<Scalars['ID']['output']>;
  definitionType: TypeDefinitionType | '%future added value';
};

export type BusinessBaseData = BaseData & {
  __typename?: 'BusinessBaseData';
  accountData?: Maybe<AccountData>;
  billingOffice?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  companyLegalForm?: Maybe<CompanyType | '%future added value'>;
  companyName?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<CountryCode | '%future added value'>;
  houseNumber?: Maybe<Scalars['String']['output']>;
  invoiceEmail?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  taxData?: Maybe<TaxData>;
};

export type BusinessBaseDataInput = {
  accountData: AccountDataInput;
  billingOffice: Scalars['String']['input'];
  city: Scalars['String']['input'];
  companyLegalForm: CompanyType | '%future added value';
  companyName: Scalars['String']['input'];
  countryCode: CountryCode | '%future added value';
  houseNumber: Scalars['String']['input'];
  invoiceEmail: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  street: Scalars['String']['input'];
  taxData: TaxDataInput;
};

export type BusinessBaseDataOutput = {
  __typename?: 'BusinessBaseDataOutput';
  accountData: AccountData;
  accountName: Scalars['String']['output'];
  billingOffice: Scalars['String']['output'];
  city: Scalars['String']['output'];
  companyLegalForm: CompanyType | '%future added value';
  companyName: Scalars['String']['output'];
  countryCode: CountryCode | '%future added value';
  houseNumber: Scalars['String']['output'];
  invoiceEmail: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  street: Scalars['String']['output'];
  taxData: TaxData;
};

export type BusinessBillingDetails = BillingDetails & {
  __typename?: 'BusinessBillingDetails';
  city: Scalars['String']['output'];
  company: Scalars['String']['output'];
  companyDetails?: Maybe<Scalars['String']['output']>;
  companyType: CompanyType | '%future added value';
  country: Scalars['String']['output'];
  customerType: CustomerType | '%future added value';
  firstName: Scalars['String']['output'];
  houseNumber: Scalars['String']['output'];
  invoiceEmail: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  salutation: SalutationType | '%future added value';
  street: Scalars['String']['output'];
  taxIdentificationNumber?: Maybe<Scalars['String']['output']>;
};

export type BusinessData = {
  __typename?: 'BusinessData';
  bic?: Maybe<Scalars['String']['output']>;
  employerNumber?: Maybe<Scalars['String']['output']>;
  iban?: Maybe<Scalars['String']['output']>;
  insuranceNumber?: Maybe<Scalars['String']['output']>;
  taxNumber?: Maybe<Scalars['String']['output']>;
};

export type BusinessDataInput = {
  bic?: InputMaybe<Scalars['String']['input']>;
  employerNumber?: InputMaybe<Scalars['String']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  insuranceNumber?: InputMaybe<Scalars['String']['input']>;
  taxNumber?: InputMaybe<Scalars['String']['input']>;
};

/** Data only accessible by the admin */
export type CachingAdminMutationSchema = {
  __typename?: 'CachingAdminMutationSchema';
  clearCache?: Maybe<ClearCachePayload>;
};


/** Data only accessible by the admin */
export type CachingAdminMutationSchemaClearCacheArgs = {
  input: ClearCacheInput;
};

export type CalendarWeekAndYear = {
  __typename?: 'CalendarWeekAndYear';
  calendarWeek: Scalars['Int']['output'];
  calendarYear: Scalars['Int']['output'];
};

export type CanAfterStartingTreeStartContentConfig = StartContentConfig & {
  __typename?: 'CanAfterStartingTreeStartContentConfig';
  configType: StartContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanBeRestartedAfterFailedContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'CanBeRestartedAfterFailedContentNodeAdvancementResult';
  status: ContentNodeAdvancementStatus | '%future added value';
};

export type CanBeRestartedAfterPassedContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'CanBeRestartedAfterPassedContentNodeAdvancementResult';
  status: ContentNodeAdvancementStatus | '%future added value';
};

export type CanBeStartedContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'CanBeStartedContentNodeAdvancementResult';
  status: ContentNodeAdvancementStatus | '%future added value';
};

export type CanBeStartedViewerTreeState = ViewerTreeState & {
  __typename?: 'CanBeStartedViewerTreeState';
  kind: ViewerTreeStateKind | '%future added value';
};

export type CanIfInTreeFlowStartContentConfig = StartContentConfig & {
  __typename?: 'CanIfInTreeFlowStartContentConfig';
  configType: StartContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanIfUnlockedStartContentConfig = StartContentConfig & {
  __typename?: 'CanIfUnlockedStartContentConfig';
  configType: StartContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanNotBeRestartedAfterFailedContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'CanNotBeRestartedAfterFailedContentNodeAdvancementResult';
  configResults: Array<RestartIfFailedContentConfigResult>;
  status: ContentNodeAdvancementStatus | '%future added value';
};

export type CanNotBeRestartedAfterPassedContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'CanNotBeRestartedAfterPassedContentNodeAdvancementResult';
  reasonConfigTypes: Array<RestartIfPassedContentConfigType | '%future added value'>;
  status: ContentNodeAdvancementStatus | '%future added value';
};

export type CanNotBeStartedContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'CanNotBeStartedContentNodeAdvancementResult';
  reasonConfigTypes: Array<StartContentConfigType | '%future added value'>;
  status: ContentNodeAdvancementStatus | '%future added value';
};

export type CanNotBeStartedViewerTreeState = ViewerTreeState & {
  __typename?: 'CanNotBeStartedViewerTreeState';
  kind: ViewerTreeStateKind | '%future added value';
  reasonConfigTypes: Array<StartTreeConfigType | '%future added value'>;
};

export type CanNotRestartIfFailedContentConfig = RestartIfFailedContentConfig & {
  __typename?: 'CanNotRestartIfFailedContentConfig';
  configType: RestartIfFailedContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanNotRestartIfPassedContentConfig = RestartIfPassedContentConfig & {
  __typename?: 'CanNotRestartIfPassedContentConfig';
  configType: RestartIfPassedContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanNotStartContentConfig = StartContentConfig & {
  __typename?: 'CanNotStartContentConfig';
  configType: StartContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanNotStartTreeConfig = StartTreeConfig & {
  __typename?: 'CanNotStartTreeConfig';
  configType: StartTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanRestartIfPassedContentConfig = RestartIfPassedContentConfig & {
  __typename?: 'CanRestartIfPassedContentConfig';
  configType: RestartIfPassedContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type CanShowElementAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
};

export type CanShowElementAnswerPayload = {
  __typename?: 'CanShowElementAnswerPayload';
  can: Scalars['Boolean']['output'];
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CanSubmitElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  elementId: Scalars['ID']['input'];
};

export type CanSubmitElementPayload = {
  __typename?: 'CanSubmitElementPayload';
  can: Scalars['Boolean']['output'];
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CancelBookingAsCoachInput = {
  availabilityId: Scalars['ID']['input'];
  cancellationComment?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CancelBookingAsCoachPayload = {
  __typename?: 'CancelBookingAsCoachPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CancelBookingAsParticipantInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CancelBookingAsParticipantPayload = {
  __typename?: 'CancelBookingAsParticipantPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type Cart = {
  __typename?: 'Cart';
  discountCodeRefusals: Array<Refusal>;
  items: Array<Item>;
  otherAvailableProducts: ProductsConnection;
  paymentDates: Array<Scalars['ZonedDateTIme']['output']>;
  selection: Selection;
  taxTotals?: Maybe<TaxTotals>;
  totals: CartTotals;
};


export type CartOtherAvailableProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CartBulkDiscount = Item & {
  __typename?: 'CartBulkDiscount';
  discountPercentage: Scalars['BigDecimal']['output'];
  eligibleProductCount: Scalars['Int']['output'];
  itemType: ItemType | '%future added value';
};

export type CartClickout = {
  __typename?: 'CartClickout';
  absoluteLink: Scalars['String']['output'];
  relativeLink: Scalars['String']['output'];
};

export type CartDiscount = Item & {
  __typename?: 'CartDiscount';
  code: Scalars['String']['output'];
  itemType: ItemType | '%future added value';
  title: Scalars['String']['output'];
  validUntil?: Maybe<Scalars['ZonedDateTIme']['output']>;
  value: DiscountActionCalcType;
};

export type CartGlobalDiscount = Item & {
  __typename?: 'CartGlobalDiscount';
  itemType: ItemType | '%future added value';
  title: Scalars['String']['output'];
  value: DiscountActionCalcType;
};

export type CartLimitedDiscount = Item & {
  __typename?: 'CartLimitedDiscount';
  itemType: ItemType | '%future added value';
  title: Scalars['String']['output'];
  value: DiscountActionCalcType;
};

export type CartLinkProductsInput = {
  amount: Scalars['Int']['input'];
  productId: Scalars['ID']['input'];
};

export type CartProduct = Item & {
  __typename?: 'CartProduct';
  amount: Scalars['Int']['output'];
  individualPrice: Price;
  itemType: ItemType | '%future added value';
  product?: Maybe<Product>;
  totalPrice: Price;
};

export type CartSelectionInput = {
  createdByUser?: InputMaybe<Scalars['ID']['input']>;
  selectedDiscountCodes: Array<Scalars['String']['input']>;
  selectedProducts: Array<SelectedProductInput>;
};

export type CartTotals = {
  __typename?: 'CartTotals';
  appliedDiscount?: Maybe<Price>;
  appliedDiscountPercentage?: Maybe<Scalars['BigDecimal']['output']>;
  appliedMoneyDiscount?: Maybe<Scalars['BigDecimal']['output']>;
  includingAllDiscounts: Price;
  monthlyOptions: Array<MonthlyOption>;
  withoutDiscounts: Price;
};

export type CartUpdate = HistoryEventInterface & {
  __typename?: 'CartUpdate';
  kind: HistoryEventType | '%future added value';
};

export type CategoryResult = {
  __typename?: 'CategoryResult';
  benchmark?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  result?: Maybe<Scalars['Float']['output']>;
};

export type ChangeInvitedForUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newClientEmail: Scalars['String']['input'];
  potentialAnalysisId: Scalars['ID']['input'];
};

export type ChangeInvitedForUserPayload = {
  __typename?: 'ChangeInvitedForUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  potentialAnalysis: AvgsPotentialAnalysis_PotentialAnalysis;
};

export type ChangePaymentDateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  paymentDate: Scalars['ZonedDateTIme']['input'];
};

export type ChangePaymentDatePayload = {
  __typename?: 'ChangePaymentDatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type ChangePaymentMethodInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  paymentMethodType: PaymentMethodType | '%future added value';
  paymentType: PaymentType | '%future added value';
  rateCount?: InputMaybe<Scalars['Int']['input']>;
};

export type ChangePaymentMethodPayload = {
  __typename?: 'ChangePaymentMethodPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type ChangeReplacementCoachInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newReplacementCoachId?: InputMaybe<Scalars['ID']['input']>;
  potentialAnalysisId: Scalars['ID']['input'];
};

export type ChangeReplacementCoachPayload = {
  __typename?: 'ChangeReplacementCoachPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: PotentialAnalysisEdge;
};

export type ChildStructureDefinition = StructureDefinition & {
  __typename?: 'ChildStructureDefinition';
  coordinates: CoordinatesV2;
  definitionType: StructureType | '%future added value';
  title: Scalars['String']['output'];
};

export type CleanUpUserInputRelatedToStagingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CleanUpUserInputRelatedToStagingPayload = {
  __typename?: 'CleanUpUserInputRelatedToStagingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ClearCacheInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type ClearCachePayload = {
  __typename?: 'ClearCachePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CloneTreeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type CloneTreePayload = {
  __typename?: 'CloneTreePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  clonedRootNode: TreeNodesEdge;
};

export type ClozeAnswer = {
  __typename?: 'ClozeAnswer';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type ClozePart = ClozeTextPart & {
  __typename?: 'ClozePart';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: ClozeTextPartKind | '%future added value';
};

export type ClozeTextElementV2 = ElementV2 & {
  __typename?: 'ClozeTextElementV2';
  additionalWords: Array<Scalars['String']['output']>;
  elementType: ElementTypeV2 | '%future added value';
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ClozeTextInputElementState = ElementState & InputElementState & {
  __typename?: 'ClozeTextInputElementState';
  checkedAnswers: Array<Scalars['ID']['output']>;
  element: LearnElement;
  kind: ElementStateKind | '%future added value';
};

export type ClozeTextLearnElement = LearnElement & {
  __typename?: 'ClozeTextLearnElement';
  elementType: ElementTypeV2 | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  parts: Array<ClozeTextPart>;
  shuffledAnswers: Array<ClozeAnswer>;
  title: Scalars['String']['output'];
};

export type ClozeTextPart = {
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: ClozeTextPartKind | '%future added value';
};

export enum ClozeTextPartKind {
  Cloze = 'cloze',
  Text = 'text'
}

export type ClozeTextShowAnswerElementState = ElementState & ShowAnswerElementState & {
  __typename?: 'ClozeTextShowAnswerElementState';
  correctAnswers: Array<Scalars['ID']['output']>;
  element: LearnElement;
  kind: ElementStateKind | '%future added value';
  lastCheckedAnswers: Array<Scalars['ID']['output']>;
};

export type CoachFeedback = Node & {
  __typename?: 'CoachFeedback';
  coach?: Maybe<User>;
  createdAt: Scalars['ZonedDateTIme']['output'];
  data: CoachingFeedbackData;
  feedbackGiver?: Maybe<User>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type CoachFeedbackConnection = {
  __typename?: 'CoachFeedbackConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CoachFeedbackEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CoachFeedbackEdge = {
  __typename?: 'CoachFeedbackEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CoachFeedback;
};

export type CoachProfile = Node & {
  __typename?: 'CoachProfile';
  averageFeedbackScore: Scalars['Float']['output'];
  baseData: BaseData;
  businessData: BusinessData;
  coach?: Maybe<User>;
  coachAccountId: Scalars['ID']['output'];
  feedbacks: CoachFeedbackConnection;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  profileData: ProfileData;
};


export type CoachProfileFeedbacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CoachProfileBaseData = {
  address: AddressInput;
  birthDate: Scalars['LocalDate']['input'];
  birthPlace: Scalars['String']['input'];
  gender: Gender | '%future added value';
  nationality: Scalars['String']['input'];
};

/** An edge in a connection. */
export type CoachProfileEdge = {
  __typename?: 'CoachProfileEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CoachProfile;
};

export type CoachProfileWithCoachings = {
  __typename?: 'CoachProfileWithCoachings';
  coachingOffer: CoachProfile;
  coachings: Array<CoachingOffer>;
};

/** A connection to a list of items. */
export type CoachProfileWithCoachingsConnection = {
  __typename?: 'CoachProfileWithCoachingsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CoachProfileWithCoachingsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CoachProfileWithCoachingsEdge = {
  __typename?: 'CoachProfileWithCoachingsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CoachProfileWithCoachings;
};

export type CoachStatement = Node & {
  __typename?: 'CoachStatement';
  billingDetails?: Maybe<BillingDetails>;
  coachAccountId: Scalars['ID']['output'];
  createdAt: Scalars['ZonedDateTIme']['output'];
  creditNoteData?: Maybe<CreditNoteData>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  lineItems: Array<SessionLineItem>;
};

/** A connection to a list of items. */
export type CoachStatementConnection = {
  __typename?: 'CoachStatementConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CoachStatementEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CoachStatementEdge = {
  __typename?: 'CoachStatementEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CoachStatement;
};

/** Data only accessible by the admin */
export type CoachingAdminMutationSchema = {
  __typename?: 'CoachingAdminMutationSchema';
  addHideVisibilityCoachingConfig?: Maybe<AddHideVisibilityCoachingConfigPayload>;
  addOnlyAZAVAccountVisibilityCoachingConfig?: Maybe<AddOnlyAzavAccountVisibilityCoachingConfigPayload>;
  addOnlyBusinessAccountVisibilityCoachingConfig?: Maybe<AddOnlyBusinessAccountVisibilityCoachingConfigPayload>;
  addOnlyWithLicenseVisibilityCoachingConfig?: Maybe<AddOnlyWithLicenseVisibilityCoachingConfigPayload>;
  addParticipant?: Maybe<AddParticipantAdminPayload>;
  createAvailability?: Maybe<CreateAvailabilityPayload>;
  createCoachProfile?: Maybe<CreateCoachProfilePayload>;
  createCoachingOffer?: Maybe<CreateCoachingOfferPayload>;
  deleteAvailability?: Maybe<DeleteAvailabilityPayload>;
  deleteCoachProfile?: Maybe<DeleteCoachProfilePayload>;
  deleteCoachingOffer?: Maybe<DeleteCoachingOfferPayload>;
  editAssociatedCoaches?: Maybe<EditAssociatedCoachesPayload>;
  editAvailability?: Maybe<EditAvailabilityPayload>;
  editAvailabilitySchedule?: Maybe<EditAvailabilitySchedulePayload>;
  editBaseData?: Maybe<EditBaseDataPayload>;
  editBusinessData?: Maybe<EditBusinessDataPayload>;
  editCoachingOfferParticipationCertificate?: Maybe<EditCoachingOfferParticipationCertificatePayload>;
  editCoachingRemuneration?: Maybe<EditRenumerationPayload>;
  editGroupSetting?: Maybe<EditOneToOneSettingPayload>;
  editOfferDescription?: Maybe<EditOfferDescriptionPayload>;
  editProfileData?: Maybe<EditProfileDataPayload>;
  registerParticipationAdmin?: Maybe<RegisterParticipationAdminPayload>;
  removeParticipant?: Maybe<RemoveParticipantAdminPayload>;
  removeVisibilityCoachingConfig?: Maybe<RemoveVisibilityCoachingConfigPayload>;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaAddHideVisibilityCoachingConfigArgs = {
  input: AddHideVisibilityCoachingConfigInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaAddOnlyAzavAccountVisibilityCoachingConfigArgs = {
  input: AddOnlyAzavAccountVisibilityCoachingConfigInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaAddOnlyBusinessAccountVisibilityCoachingConfigArgs = {
  input: AddOnlyBusinessAccountVisibilityCoachingConfigInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaAddOnlyWithLicenseVisibilityCoachingConfigArgs = {
  input: AddOnlyWithLicenseVisibilityCoachingConfigInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaAddParticipantArgs = {
  input: AddParticipantAdminInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaCreateAvailabilityArgs = {
  input: CreateAvailabilityInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaCreateCoachProfileArgs = {
  input: CreateCoachProfileInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaCreateCoachingOfferArgs = {
  input: CreateCoachingOfferInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaDeleteAvailabilityArgs = {
  input: DeleteAvailabilityInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaDeleteCoachProfileArgs = {
  input: DeleteCoachProfileInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaDeleteCoachingOfferArgs = {
  input: DeleteCoachingOfferInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditAssociatedCoachesArgs = {
  input: EditAssociatedCoachesInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditAvailabilityArgs = {
  input: EditAvailabilityInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditAvailabilityScheduleArgs = {
  input: EditAvailabilityScheduleInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditBaseDataArgs = {
  input: EditBaseDataInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditBusinessDataArgs = {
  input: EditBusinessDataInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditCoachingOfferParticipationCertificateArgs = {
  input: EditCoachingOfferParticipationCertificateInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditCoachingRemunerationArgs = {
  input: EditRenumerationInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditGroupSettingArgs = {
  input: EditOneToOneSettingInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditOfferDescriptionArgs = {
  input: EditOfferDescriptionInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaEditProfileDataArgs = {
  input: EditProfileDataInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaRegisterParticipationAdminArgs = {
  input: RegisterParticipationAdminInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaRemoveParticipantArgs = {
  input: RemoveParticipantAdminInput;
};


/** Data only accessible by the admin */
export type CoachingAdminMutationSchemaRemoveVisibilityCoachingConfigArgs = {
  input: RemoveVisibilityCoachingConfigInput;
};

/** Data only accessible by the admin */
export type CoachingAdminSchema = {
  __typename?: 'CoachingAdminSchema';
  Availabilities: AvailabilityConnection;
  AvailabilitySchedules: AvailabilityScheduleConnection;
  CoachFeedbacks: CoachFeedbackConnection;
  CoachProfiles: CoachProfileWithCoachingsConnection;
  CoachStatements: CoachStatementConnection;
  CoachingOffers: CoachingOfferConnection;
  FreeCalendarWeeks: Array<CalendarWeekAndYear>;
  GetCoachingOffer?: Maybe<CoachingOffer>;
};


/** Data only accessible by the admin */
export type CoachingAdminSchemaAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByCoachIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  filterByMaxDate?: InputMaybe<Scalars['LocalDate']['input']>;
  filterByMinDate?: InputMaybe<Scalars['LocalDate']['input']>;
  filterByParticipantIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  onlyBooked?: InputMaybe<Scalars['Boolean']['input']>;
  onlyFree?: InputMaybe<Scalars['Boolean']['input']>;
  onlyNeedConfirmation?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Data only accessible by the admin */
export type CoachingAdminSchemaAvailabilitySchedulesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByCoaches?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type CoachingAdminSchemaCoachFeedbacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type CoachingAdminSchemaCoachProfilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByUserId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type CoachingAdminSchemaCoachStatementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByAccountId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type CoachingAdminSchemaCoachingOffersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Data only accessible by the admin */
export type CoachingAdminSchemaFreeCalendarWeeksArgs = {
  coachUserId?: InputMaybe<Scalars['ID']['input']>;
};


/** Data only accessible by the admin */
export type CoachingAdminSchemaGetCoachingOfferArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CoachingFeedbackData = {
  __typename?: 'CoachingFeedbackData';
  comment?: Maybe<Scalars['String']['output']>;
  score: Scalars['Int']['output'];
};

export type CoachingLicenseDefinitionData = LicenseDefinitionData & {
  __typename?: 'CoachingLicenseDefinitionData';
  coachingInfo?: Maybe<LicenseDefinitionCoachingInfo>;
  kind: LicenseDefinitionDataKind | '%future added value';
  name: Scalars['String']['output'];
};

export type CoachingLicenseDefinitionDataInput = {
  coachingId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type CoachingMutations = {
  __typename?: 'CoachingMutations';
  addParticipantToBookingAsCoach?: Maybe<AddParticipantToBookingAsCoachPayload>;
  addParticipantToMyBooking?: Maybe<AddParticipantToMyBookingPayload>;
  bookCoaching?: Maybe<BookCoachingPayload>;
  cancelBookingAsCoach?: Maybe<CancelBookingAsCoachPayload>;
  cancelBookingAsParticipant?: Maybe<CancelBookingAsParticipantPayload>;
  createMyAvailability?: Maybe<CreateMyAvailabilityPayload>;
  deleteMyAvailability?: Maybe<DeleteMyAvailabilityPayload>;
  editMyAvailability?: Maybe<EditMyAvailabilityPayload>;
  editMyAvailabilitySchedule?: Maybe<EditMyAvailabilitySchedulePayload>;
  editMyBaseData?: Maybe<EditMyBaseDataPayload>;
  editMyBusinessData?: Maybe<EditMyBusinessDataPayload>;
  editMyProfileData?: Maybe<EditMyProfileDataPayload>;
  initializeFreeCalendarWeekOverride?: Maybe<InitializeFreeCalendarWeekOverridePayload>;
  leaveFeedback?: Maybe<LeaveFeedbackPayload>;
  registerParticipation?: Maybe<RegisterParticipationPayload>;
  removeParticipantFromBookingAsCoach?: Maybe<RemoveParticipantFromBookingAsCoachPayload>;
  removeParticipantFromMyBooking?: Maybe<RemoveParticipantFromMyBookingPayload>;
};


export type CoachingMutationsAddParticipantToBookingAsCoachArgs = {
  input: AddParticipantToBookingAsCoachInput;
};


export type CoachingMutationsAddParticipantToMyBookingArgs = {
  input: AddParticipantToMyBookingInput;
};


export type CoachingMutationsBookCoachingArgs = {
  input: BookCoachingInput;
};


export type CoachingMutationsCancelBookingAsCoachArgs = {
  input: CancelBookingAsCoachInput;
};


export type CoachingMutationsCancelBookingAsParticipantArgs = {
  input: CancelBookingAsParticipantInput;
};


export type CoachingMutationsCreateMyAvailabilityArgs = {
  input: CreateMyAvailabilityInput;
};


export type CoachingMutationsDeleteMyAvailabilityArgs = {
  input: DeleteMyAvailabilityInput;
};


export type CoachingMutationsEditMyAvailabilityArgs = {
  input: EditMyAvailabilityInput;
};


export type CoachingMutationsEditMyAvailabilityScheduleArgs = {
  input: EditMyAvailabilityScheduleInput;
};


export type CoachingMutationsEditMyBaseDataArgs = {
  input: EditMyBaseDataInput;
};


export type CoachingMutationsEditMyBusinessDataArgs = {
  input: EditMyBusinessDataInput;
};


export type CoachingMutationsEditMyProfileDataArgs = {
  input: EditMyProfileDataInput;
};


export type CoachingMutationsInitializeFreeCalendarWeekOverrideArgs = {
  input: InitializeFreeCalendarWeekOverrideInput;
};


export type CoachingMutationsLeaveFeedbackArgs = {
  input: LeaveFeedbackInput;
};


export type CoachingMutationsRegisterParticipationArgs = {
  input: RegisterParticipationInput;
};


export type CoachingMutationsRemoveParticipantFromBookingAsCoachArgs = {
  input: RemoveParticipantFromBookingAsCoachInput;
};


export type CoachingMutationsRemoveParticipantFromMyBookingArgs = {
  input: RemoveParticipantFromMyBookingInput;
};

export type CoachingOffer = Node & {
  __typename?: 'CoachingOffer';
  associatedCoaches: Array<CoachProfile>;
  cartClickout?: Maybe<CartClickout>;
  description?: Maybe<CoachingOfferDescription>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  licenseAvailability: LicenseAvailability;
  participationCertificate?: Maybe<ParticipationCertificate>;
  remunerationData: CoachingOfferRemunerationData;
  setting: CoachingSetting;
  visibilityConfigs: Array<VisibilityCoachingConfig>;
};

/** A connection to a list of items. */
export type CoachingOfferConnection = {
  __typename?: 'CoachingOfferConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CoachingOfferEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CoachingOfferDescription = {
  __typename?: 'CoachingOfferDescription';
  contents?: Maybe<Scalars['String']['output']>;
  contractPartner?: Maybe<ContractPartner>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<File>;
  modules?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  product?: Maybe<Product>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  tags: Array<AcademiesTag>;
};

export type CoachingOfferDescriptionInput = {
  contents?: InputMaybe<Scalars['String']['input']>;
  contractPartnerId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  licenseProductId?: InputMaybe<Scalars['ID']['input']>;
  modules?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  tagIds: Array<Scalars['ID']['input']>;
};

/** An edge in a connection. */
export type CoachingOfferEdge = {
  __typename?: 'CoachingOfferEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CoachingOffer;
};

export type CoachingOfferParticipationCertificateInput = {
  html: Scalars['String']['input'];
  name: Scalars['String']['input'];
  variables: Array<Scalars['String']['input']>;
};

export type CoachingOfferRemunerationData = {
  kind: CoachingOfferRemunerationDataKind | '%future added value';
  percentageShare: Scalars['Int']['output'];
};

export enum CoachingOfferRemunerationDataKind {
  NotRemunerated = 'NotRemunerated',
  PerSession = 'PerSession'
}

export type CoachingOfferRemunerationDataNotRemunerated = CoachingOfferRemunerationData & {
  __typename?: 'CoachingOfferRemunerationDataNotRemunerated';
  kind: CoachingOfferRemunerationDataKind | '%future added value';
  percentageShare: Scalars['Int']['output'];
};

export type CoachingOfferRemunerationDataPerSession = CoachingOfferRemunerationData & {
  __typename?: 'CoachingOfferRemunerationDataPerSession';
  additionalInformation?: Maybe<Scalars['String']['output']>;
  kind: CoachingOfferRemunerationDataKind | '%future added value';
  percentageShare: Scalars['Int']['output'];
  sessionRate: Price;
};

export type CoachingQueries = {
  __typename?: 'CoachingQueries';
  CoachAvailabilities: AvailabilityConnection;
  CoachingOffersToCoach: CoachingOfferConnection;
  FreeAvailabilities: AvailabilityConnection;
};


export type CoachingQueriesCoachAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByMaxDate?: InputMaybe<Scalars['LocalDate']['input']>;
  filterByMinDate?: InputMaybe<Scalars['LocalDate']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  onlyBooked?: InputMaybe<Scalars['Boolean']['input']>;
  onlyFree?: InputMaybe<Scalars['Boolean']['input']>;
  onlyNeedConfirmation?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CoachingQueriesCoachingOffersToCoachArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  coachProfileId: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CoachingQueriesFreeAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByCoach?: InputMaybe<Scalars['ID']['input']>;
  filterByMaxDate?: InputMaybe<Scalars['LocalDate']['input']>;
  filterByMinDate?: InputMaybe<Scalars['LocalDate']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CoachingSetting = {
  kind: CoachingSettingKind | '%future added value';
};

export enum CoachingSettingKind {
  Group = 'Group',
  OneToOne = 'OneToOne'
}

/** Data partaining to the current user */
export type CoachingViewerSchema = {
  __typename?: 'CoachingViewerSchema';
  CoachCoachingAppointments: AvailabilityConnection;
  CoachingOffers: CoachingOfferConnection;
  FreeCalendarWeeks: Array<CalendarWeekAndYear>;
  MyAvailabilitySchedule?: Maybe<AvailabilitySchedule>;
  MyCoachProfile?: Maybe<CoachProfile>;
  MyCoachingAppointments: AvailabilityConnection;
  MyDocuments: Array<File>;
};


/** Data partaining to the current user */
export type CoachingViewerSchemaCoachCoachingAppointmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByMaxDate?: InputMaybe<Scalars['LocalDate']['input']>;
  filterByMinDate?: InputMaybe<Scalars['LocalDate']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data partaining to the current user */
export type CoachingViewerSchemaCoachingOffersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data partaining to the current user */
export type CoachingViewerSchemaMyCoachingAppointmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByMaxDate?: InputMaybe<Scalars['LocalDate']['input']>;
  filterByMinDate?: InputMaybe<Scalars['LocalDate']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum CompanyType {
  Ag = 'Ag',
  Einzelunternehmen = 'Einzelunternehmen',
  Ev = 'Ev',
  Gbr = 'Gbr',
  Gmbh = 'Gmbh',
  GmbhCoKg = 'GmbhCoKg',
  Kg = 'Kg',
  OeffentlicheEinrichtung = 'OeffentlicheEinrichtung',
  Ohg = 'Ohg',
  PartmbH = 'PartmbH',
  Ug = 'Ug',
  Unknown = 'Unknown'
}

export enum CompanyTypeInput {
  Ag = 'Ag',
  Einzelunternehmen = 'Einzelunternehmen',
  Ev = 'Ev',
  Gbr = 'Gbr',
  Gmbh = 'Gmbh',
  GmbhCoKg = 'GmbhCoKg',
  Kg = 'Kg',
  OeffentlicheEinrichtung = 'OeffentlicheEinrichtung',
  Ohg = 'Ohg',
  PartmbH = 'PartmbH',
  Ug = 'Ug',
  Unknown = 'Unknown'
}

export type ConstellationCreateBranchRootInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type ConstellationCreateBranchRootPayload = {
  __typename?: 'ConstellationCreateBranchRootPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: UnpublishedLearnablesEdge;
};

export type ConstellationLoginResultExtension = LoginResultExtension & {
  __typename?: 'ConstellationLoginResultExtension';
  doNotUse: Scalars['String']['output'];
  forwardToFrontendURL?: Maybe<Scalars['String']['output']>;
  isAVGSClient: Scalars['Boolean']['output'];
};

export type ConstellationRootExtensionExtension = RootExtensionExtension & {
  __typename?: 'ConstellationRootExtensionExtension';
  contractPartner?: Maybe<ContractPartner>;
  doNotUse: Scalars['String']['output'];
  isMicroLearning: Scalars['Boolean']['output'];
};

export type ContentExtension = {
  doNotUse: Scalars['String']['output'];
};

export type ContentExtensionImpl = ContentExtension & {
  __typename?: 'ContentExtensionImpl';
  doNotUse: Scalars['String']['output'];
};

export enum ContentKind {
  Async = 'Async',
  ELearning = 'ELearning'
}

export type ContentNodeAdvancementResult = {
  status: ContentNodeAdvancementStatus | '%future added value';
};

export enum ContentNodeAdvancementStatus {
  BlockedByTree = 'BlockedByTree',
  CanBeRestartedAfterFailed = 'CanBeRestartedAfterFailed',
  CanBeRestartedAfterPassed = 'CanBeRestartedAfterPassed',
  CanBeStarted = 'CanBeStarted',
  CanNotBeRestartedAfterFailed = 'CanNotBeRestartedAfterFailed',
  CanNotBeRestartedAfterPassed = 'CanNotBeRestartedAfterPassed',
  CanNotBeStarted = 'CanNotBeStarted',
  Continue = 'Continue',
  NotContentNode = 'NotContentNode',
  ViolatesTreeFlow = 'ViolatesTreeFlow'
}

export type ContentSubmission = Node & {
  __typename?: 'ContentSubmission';
  definition: ContentSubmissionDefinition;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  lastUpdated?: Maybe<Scalars['ZonedDateTIme']['output']>;
  learnOpportunity?: Maybe<LearnOpportunityV2>;
  startedAt: Scalars['ZonedDateTIme']['output'];
};

export type ContentSubmissionDefinition = {
  contentKind: ContentKind | '%future added value';
  status: ContentSubmissionStatus | '%future added value';
};

export enum ContentSubmissionStatus {
  Active = 'active',
  Failed = 'failed',
  Passed = 'passed'
}

/** A connection to a list of items. */
export type ContentSubmissionsConnection = {
  __typename?: 'ContentSubmissionsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContentSubmissionsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ContentSubmissionsEdge = {
  __typename?: 'ContentSubmissionsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ContentSubmission;
};

export type ContentTypeDefinition = {
  contentKind: ContentKind | '%future added value';
  continueConfig: ContinueContentConfig;
  definitionType: TypeDefinitionType | '%future added value';
  extension: ContentExtension;
  passConfig: PassContentConfig;
  restartIfFailedConfigs: Array<RestartIfFailedContentConfig>;
  restartIfPassedConfig: RestartIfPassedContentConfig;
  rewardConfig: RewardContentConfig;
  rewards: Array<Reward>;
  startConfigs: Array<StartContentConfig>;
  trigger?: Maybe<TriggerAction_Trigger>;
};

export type ContinueContentConfig = {
  configType: ContinueContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum ContinueContentConfigType {
  ContinueContentAlwaysRestart = 'ContinueContent_AlwaysRestart'
}

export type ContinueContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'ContinueContentNodeAdvancementResult';
  activeContentSubmissionId: Scalars['ID']['output'];
  status: ContentNodeAdvancementStatus | '%future added value';
};

export type ContractPartner = Node & {
  __typename?: 'ContractPartner';
  data: ContractPartnerData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  shareAmountPercentage: Scalars['Int']['output'];
  stripeConnectAccountId?: Maybe<Scalars['String']['output']>;
};

export type ContractPartnerData = {
  __typename?: 'ContractPartnerData';
  association?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  houseNumber?: Maybe<Scalars['String']['output']>;
  linkToAGB?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  postalCode?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  taxNumber?: Maybe<Scalars['String']['output']>;
};

export type ContractPartnerDataInput = {
  association: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  houseNumber: Scalars['String']['input'];
  linkToAGB?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  street: Scalars['String']['input'];
  taxNumber: Scalars['String']['input'];
};

/** A connection to a list of items. */
export type ContractPartnersConnection = {
  __typename?: 'ContractPartnersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContractPartnersEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ContractPartnersEdge = {
  __typename?: 'ContractPartnersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ContractPartner;
};

export type CoordinatesV2 = {
  __typename?: 'CoordinatesV2';
  parentRef?: Maybe<Scalars['ID']['output']>;
};

export enum CountryCode {
  At = 'AT',
  Ch = 'CH',
  De = 'DE'
}

export type CreateAvgsPotentialAnalysisLicenseDefinitionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: AvgsPotentialAnalysisLicenseDefinitionDataInput;
};

export type CreateAvgsPotentialAnalysisLicenseDefinitionPayload = {
  __typename?: 'CreateAVGSPotentialAnalysisLicenseDefinitionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: LicenseDefinitionsEdge;
};

export type CreateAccountGroupAssignmentRuleInput = {
  active: Scalars['Boolean']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  licenseGroupingId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  userInAccountGroupIds: Array<Scalars['ID']['input']>;
};

export type CreateAccountGroupAssignmentRulePayload = {
  __typename?: 'CreateAccountGroupAssignmentRulePayload';
  assignmentRule: AssignmentRule;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateAccountGroupProductInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateAccountGroupProductPayload = {
  __typename?: 'CreateAccountGroupProductPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: ProductsEdge;
};

export type CreateAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateAccountPayload = {
  __typename?: 'CreateAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: AccountEdge;
};

export type CreateActionResultToNextActionsInput = {
  actionId: Scalars['ID']['input'];
  actionResultKind: TriggerAction_ActionResultKind | '%future added value';
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateActionResultToNextActionsPayload = {
  __typename?: 'CreateActionResultToNextActionsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  someActionResultToNextActions: TriggerAction_SomeActionResultToNextActions;
};

export type CreateAndAppendChildTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: TagDataInput;
  parentId: Scalars['ID']['input'];
};

export type CreateAndAppendChildTagPayload = {
  __typename?: 'CreateAndAppendChildTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: AcademiesChildTagsEdge;
};

export type CreateAvailabilityInput = {
  availabilityData: AvailabilityDataInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachAccountRef: Scalars['ID']['input'];
  coachRef: Scalars['ID']['input'];
};

export type CreateAvailabilityPayload = {
  __typename?: 'CreateAvailabilityPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: AvailabilityEdge;
};

export type CreateBranchChildInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  parentBranchId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateBranchChildPayload = {
  __typename?: 'CreateBranchChildPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  createdChildNode: TreeNode;
  tree: Tree;
};

export type CreateBranchRootInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateBranchRootPayload = {
  __typename?: 'CreateBranchRootPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  createdRootNode: TreeNodesEdge;
  tree: Tree;
};

export type CreateClickOutByLinkIdInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  linkId: Scalars['String']['input'];
};

export type CreateClickOutByLinkIdPayload = {
  __typename?: 'CreateClickOutByLinkIdPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  placementUrl: Scalars['String']['output'];
};

export type CreateClickOutForUserOrBusinessInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateClickOutForUserOrBusinessPayload = {
  __typename?: 'CreateClickOutForUserOrBusinessPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  placementUrl: Scalars['String']['output'];
};

export type CreateClozeTextElementV2Input = {
  additionalWords: Array<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateClozeTextElementV2Payload = {
  __typename?: 'CreateClozeTextElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateCoachProfileInput = {
  accountId: Scalars['ID']['input'];
  baseData: CoachProfileBaseData;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateCoachProfilePayload = {
  __typename?: 'CreateCoachProfilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: CoachProfileEdge;
};

export type CreateCoachStatementsFromUnbilledInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCoachStatementsFromUnbilledPayload = {
  __typename?: 'CreateCoachStatementsFromUnbilledPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateCoachingLicenseDefinitionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: CoachingLicenseDefinitionDataInput;
};

export type CreateCoachingLicenseDefinitionPayload = {
  __typename?: 'CreateCoachingLicenseDefinitionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: LicenseDefinitionsEdge;
};

export type CreateCoachingOfferInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kind: CoachingSettingKind | '%future added value';
};

export type CreateCoachingOfferPayload = {
  __typename?: 'CreateCoachingOfferPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: UnpublishedLearnablesEdge;
};

export type CreateContentChildInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentKind: Scalars['String']['input'];
  parentBranchId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateContentChildPayload = {
  __typename?: 'CreateContentChildPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  createdChildNode: TreeNode;
  tree: Tree;
};

export type CreateContentRootNodeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentKind: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateContentRootNodePayload = {
  __typename?: 'CreateContentRootNodePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  createdRootNode: TreeNodesEdge;
  tree: Tree;
};

export type CreateContractPartnerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: ContractPartnerDataInput;
  shareAmountPercentage: Scalars['Int']['input'];
};

export type CreateContractPartnerPayload = {
  __typename?: 'CreateContractPartnerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: ContractPartnersEdge;
};

export type CreateCustomerFeedbackInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  feedback: Scalars['String']['input'];
  name: Scalars['String']['input'];
  position: Scalars['String']['input'];
};

export type CreateCustomerFeedbackPayload = {
  __typename?: 'CreateCustomerFeedbackPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: CustomerFeedbackEdge;
};

export type CreateDiscountCodeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  discountActionId: Scalars['ID']['input'];
};

export type CreateDiscountCodePayload = {
  __typename?: 'CreateDiscountCodePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edges: Array<DiscountCodesV2Edge>;
};

export type CreateDynamicVocabElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateDynamicVocabElementPayload = {
  __typename?: 'CreateDynamicVocabElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateEnhancedTextElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  readMore?: InputMaybe<Scalars['String']['input']>;
  readMoreButtonText?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateEnhancedTextElementPayload = {
  __typename?: 'CreateEnhancedTextElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateEuroDiscountActionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateEuroDiscountActionPayload = {
  __typename?: 'CreateEuroDiscountActionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: DiscountActionsEdge;
};

export type CreateExternalLicenseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: ExternalLicenseDataInput;
  poolId: Scalars['ID']['input'];
};

export type CreateExternalLicensePayload = {
  __typename?: 'CreateExternalLicensePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: ExternalLicensesEdge;
};

export type CreateExternalLicensePoolInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: ExternalLicensePoolDataInput;
};

export type CreateExternalLicensePoolPayload = {
  __typename?: 'CreateExternalLicensePoolPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: ExternalLicensePoolsEdge;
};

export type CreateFileElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  fileId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
};

export type CreateFileElementV2Payload = {
  __typename?: 'CreateFileElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateGlobalVocabElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateGlobalVocabElementPayload = {
  __typename?: 'CreateGlobalVocabElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateInstructorImplInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: InstructorImplInput;
};

export type CreateInstructorImplPayload = {
  __typename?: 'CreateInstructorImplPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: InstructorImplsEdge;
};

export type CreateLicenseProductInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateLicenseProductPayload = {
  __typename?: 'CreateLicenseProductPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: ProductsEdge;
};

export type CreateLicenseUsageReportInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateLicenseUsageReportPayload = {
  __typename?: 'CreateLicenseUsageReportPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateLicensesInput = {
  accountId: Scalars['ID']['input'];
  amount: Scalars['Int']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  licenseDefinitionId: Scalars['ID']['input'];
};

export type CreateLicensesPayload = {
  __typename?: 'CreateLicensesPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edges: Array<LicenseEdge>;
};

export type CreateLimitedCartDiscountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateLimitedCartDiscountPayload = {
  __typename?: 'CreateLimitedCartDiscountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: LimitedCartDiscountEdge;
};

export type CreateMarkMistakesElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateMarkMistakesElementPayload = {
  __typename?: 'CreateMarkMistakesElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
};

export type CreateMatrixElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  correctAnswer: Scalars['String']['input'];
  eLearningContentId: Scalars['ID']['input'];
  firstColumnTitle: Scalars['String']['input'];
  firstRowTitle: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateMatrixElementPayload = {
  __typename?: 'CreateMatrixElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
};

export type CreateMicroLearningLicenseDefinitionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: MicroLearningLicenseDefinitionDataInput;
};

export type CreateMicroLearningLicenseDefinitionPayload = {
  __typename?: 'CreateMicroLearningLicenseDefinitionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: LicenseDefinitionsEdge;
};

export type CreateMultipleChoiceElementV2Input = {
  answerOptions: Array<AnswerOptionV2Input>;
  answeringType: Scalars['String']['input'];
  answeringTypeText?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  imageId?: InputMaybe<Scalars['ID']['input']>;
  question: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateMultipleChoiceElementV2Payload = {
  __typename?: 'CreateMultipleChoiceElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateMyAvailabilityInput = {
  availabilityData: AvailabilityDataInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMyAvailabilityPayload = {
  __typename?: 'CreateMyAvailabilityPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: AvailabilityEdge;
};

export type CreateOrderElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateOrderElementPayload = {
  __typename?: 'CreateOrderElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateOrderInput = {
  cartSelection?: InputMaybe<CartSelectionInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderPayload = {
  __typename?: 'CreateOrderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type CreatePercentageDiscountActionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreatePercentageDiscountActionPayload = {
  __typename?: 'CreatePercentageDiscountActionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: DiscountActionsEdge;
};

export type CreatePersonalizedEmailTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: PersonalizedEmailTemplateInput;
};

export type CreatePersonalizedEmailTemplatePayload = {
  __typename?: 'CreatePersonalizedEmailTemplatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: PersonalizedEmailTemplatesEdge;
};

export type CreatePersonalizedNotificationTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: PersonalizedNotificationTemplateInput;
};

export type CreatePersonalizedNotificationTemplatePayload = {
  __typename?: 'CreatePersonalizedNotificationTemplatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: PersonalizedNotificationTemplatesEdge;
};

export type CreatePlacementProductInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreatePlacementProductPayload = {
  __typename?: 'CreatePlacementProductPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: ProductsEdge;
};

export type CreatePodcastElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreatePodcastElementV2Payload = {
  __typename?: 'CreatePodcastElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreatePodcastWithTimestampInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentId: Scalars['ID']['input'];
  podcastFileId?: InputMaybe<Scalars['ID']['input']>;
  timestampsWithImage: Array<TimestampWithImageInput>;
  title: Scalars['String']['input'];
};

export type CreatePodcastWithTimestampPayload = {
  __typename?: 'CreatePodcastWithTimestampPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
};

export type CreatePotentialAnalysisClickoutInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  shortTest: Scalars['Boolean']['input'];
};

export type CreatePotentialAnalysisClickoutPayload = {
  __typename?: 'CreatePotentialAnalysisClickoutPayload';
  clickout: Scalars['String']['output'];
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreatePotentialAnalysisInput = {
  clientEmail: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachAccountId: Scalars['ID']['input'];
  coachId: Scalars['ID']['input'];
  replacementCoachId?: InputMaybe<Scalars['ID']['input']>;
  selectedModuleIds: Array<Scalars['Int']['input']>;
};

export type CreatePotentialAnalysisPayload = {
  __typename?: 'CreatePotentialAnalysisPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: PotentialAnalysisEdge;
  info: AvgsPotentialAnalysis_Info;
};

export type CreateRandomDiscountCodesInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discountActionId: Scalars['ID']['input'];
  number: Scalars['Int']['input'];
};

export type CreateRandomDiscountCodesPayload = {
  __typename?: 'CreateRandomDiscountCodesPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edges: Array<DiscountCodesV2Edge>;
};

export type CreateReportInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: DsaReportDataInput;
};

export type CreateReportPayload = {
  __typename?: 'CreateReportPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  referenceNumber: Scalars['String']['output'];
};

export type CreateRootTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: TagDataInput;
};

export type CreateRootTagPayload = {
  __typename?: 'CreateRootTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: AcademiesRootTagsEdge;
};

export type CreateSingleUserAssignmentRuleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  licenseGroupingId: Scalars['ID']['input'];
  maxLicenseAmount: Scalars['Int']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateSingleUserAssignmentRulePayload = {
  __typename?: 'CreateSingleUserAssignmentRulePayload';
  assignmentRule: AssignmentRule;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateStripeConnectAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contractPartnerId: Scalars['ID']['input'];
};

export type CreateStripeConnectAccountPayload = {
  __typename?: 'CreateStripeConnectAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contractPartner: ContractPartnersEdge;
};

export type CreateTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: TagInput;
};

export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: TagsEdge;
};

export type CreateTextElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateTextElementV2Payload = {
  __typename?: 'CreateTextElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateTransfersReportInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTransfersReportPayload = {
  __typename?: 'CreateTransfersReportPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateTreeLicenseDefinitionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: TreeLicenseDefinitionDataInput;
};

export type CreateTreeLicenseDefinitionPayload = {
  __typename?: 'CreateTreeLicenseDefinitionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: LicenseDefinitionsEdge;
};

export type CreateTreeStateForUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateTreeStateForUserPayload = {
  __typename?: 'CreateTreeStateForUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  publishedNode: LearnOpportunityV2;
  treeState: TreeState;
};

export type CreateTrendInput = {
  aboutOffersHeadingAndDescription: HeadingAndDescriptionInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachingHeadingAndDescription: HeadingAndDescriptionInput;
  coachingImageId: Scalars['ID']['input'];
  customerData: CustomerDataInput;
  potentialAnalysisHeadingAndDescription: HeadingAndDescriptionInput;
  trendData: TrendDataInput;
  trendMedia: TrendMediaInput;
};

export type CreateTrendPayload = {
  __typename?: 'CreateTrendPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: TrendEdge;
};

export type CreateUploadAsyncElementInput = {
  asyncContentId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateUploadAsyncElementPayload = {
  __typename?: 'CreateUploadAsyncElementPayload';
  asyncContent: TreeNode;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateUserInAccountGroupAndAddOrInviteUsersMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  emails: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateUserInAccountGroupAndAddOrInviteUsersMutationPayload = {
  __typename?: 'CreateUserInAccountGroupAndAddOrInviteUsersMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  newGroup: UserInAccountGroupWrapperEdge;
};

export type CreateUserInAccountInput = {
  accountId: Scalars['ID']['input'];
  adsOptIn: Scalars['Boolean']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateUserInAccountPayload = {
  __typename?: 'CreateUserInAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userInAccount: UserInAccountEdge;
};

export type CreateVideoElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  vimeoId: Scalars['String']['input'];
  vimeoVideoSourceId: Scalars['ID']['input'];
};

export type CreateVideoElementV2Payload = {
  __typename?: 'CreateVideoElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type CreateVimeoVideoSourceInput = {
  accessToken: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateVimeoVideoSourcePayload = {
  __typename?: 'CreateVimeoVideoSourcePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: Vimeo_VimeoVideoSourceEdge;
};

export type CreateWordPackageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: WordPackageDataInput;
};

export type CreateWordPackagePayload = {
  __typename?: 'CreateWordPackagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: WordPackageEdge;
};

export type CreditNoteData = {
  __typename?: 'CreditNoteData';
  creditNoteFile?: Maybe<File>;
  creditNoteId: Scalars['String']['output'];
  creditNoteNumber?: Maybe<Scalars['String']['output']>;
};

export type CreditNoteSentUpdate = HistoryEventInterface & {
  __typename?: 'CreditNoteSentUpdate';
  creditNoteId: Scalars['String']['output'];
  creditNoteNumber: Scalars['String']['output'];
  kind: HistoryEventType | '%future added value';
};

export type CrmTreeHeadUpdaterReward = Reward & {
  __typename?: 'CrmTreeHeadUpdaterReward';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: RewardKind | '%future added value';
  superId: Scalars['ID']['output'];
};

export type CrmTreeHeadUpdater_ErrorOccurredRewardResult = RewardResult & {
  __typename?: 'CrmTreeHeadUpdater_ErrorOccurredRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type CrmTreeHeadUpdater_HeadUpdatedRewardResult = RewardResult & {
  __typename?: 'CrmTreeHeadUpdater_HeadUpdatedRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type CrmTreeHeadUpdater_NotPassedRewardResult = RewardResult & {
  __typename?: 'CrmTreeHeadUpdater_NotPassedRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type CurrentUser = {
  __typename?: 'CurrentUser';
  accounts: Array<Account>;
  permissionsInAccount: Array<Permission | '%future added value'>;
  user: User;
};

export type CustomerData = {
  __typename?: 'CustomerData';
  amountCustomer: Scalars['String']['output'];
  customerFeedbacks: Array<CustomerFeedback>;
};

export type CustomerDataInput = {
  amountCustomer: Scalars['String']['input'];
  customerFeedbackIds: Array<Scalars['ID']['input']>;
};

export type CustomerFeedback = Node & {
  __typename?: 'CustomerFeedback';
  feedback: Scalars['String']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  position: Scalars['String']['output'];
};

/** Data only accessible by the admin */
export type CustomerFeedbackAdminMutationSchema = {
  __typename?: 'CustomerFeedbackAdminMutationSchema';
  createCustomerFeedback?: Maybe<CreateCustomerFeedbackPayload>;
  deleteCustomerFeedback?: Maybe<DeleteCustomerFeedbackPayload>;
  editCustomerFeedback?: Maybe<EditCustomerFeedbackPayload>;
};


/** Data only accessible by the admin */
export type CustomerFeedbackAdminMutationSchemaCreateCustomerFeedbackArgs = {
  input: CreateCustomerFeedbackInput;
};


/** Data only accessible by the admin */
export type CustomerFeedbackAdminMutationSchemaDeleteCustomerFeedbackArgs = {
  input: DeleteCustomerFeedbackInput;
};


/** Data only accessible by the admin */
export type CustomerFeedbackAdminMutationSchemaEditCustomerFeedbackArgs = {
  input: EditCustomerFeedbackInput;
};

/** A connection to a list of items. */
export type CustomerFeedbackConnection = {
  __typename?: 'CustomerFeedbackConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CustomerFeedbackEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CustomerFeedbackEdge = {
  __typename?: 'CustomerFeedbackEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CustomerFeedback;
};

export type CustomerJourneyQueries = {
  __typename?: 'CustomerJourneyQueries';
  CustomerFeedback: CustomerFeedbackConnection;
  Dashboard?: Maybe<Dashboard>;
  trend: TrendConnection;
};


export type CustomerJourneyQueriesCustomerFeedbackArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CustomerJourneyQueriesDashboardArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByCompleted: Scalars['Boolean']['input'];
  filterByText?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kinds: Array<LearnableKind>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CustomerJourneyQueriesTrendArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum CustomerType {
  Business = 'Business',
  Private = 'Private'
}

export type DsaReport = Node & {
  __typename?: 'DSAReport';
  createdAt: Scalars['ZonedDateTIme']['output'];
  data: DsaReportData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  referenceNumber: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type DsaReportConnection = {
  __typename?: 'DSAReportConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DsaReportEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DsaReportData = {
  __typename?: 'DSAReportData';
  email?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  problemType: DsaReportProblemType | '%future added value';
  reportType: DsaReportType | '%future added value';
  url?: Maybe<Scalars['String']['output']>;
};

export type DsaReportDataInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  problemType: DsaReportProblemType | '%future added value';
  reportType: DsaReportType | '%future added value';
  url?: InputMaybe<Scalars['String']['input']>;
};

/** An edge in a connection. */
export type DsaReportEdge = {
  __typename?: 'DSAReportEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DsaReport;
};

export enum DsaReportProblemType {
  Accessibility = 'Accessibility',
  ConsumerProtection = 'ConsumerProtection',
  Disinformation = 'Disinformation',
  IllegalContents = 'IllegalContents',
  Other = 'Other',
  PrivacyRequest = 'PrivacyRequest',
  ProtectionOfMinors = 'ProtectionOfMinors',
  TransparencyForOnlineAds = 'TransparencyForOnlineAds',
  UserRightsAndComplaints = 'UserRightsAndComplaints'
}

export enum DsaReportType {
  Complaint = 'Complaint',
  Feedback = 'Feedback',
  Other = 'Other',
  Report = 'Report'
}

export type Dashboard = {
  __typename?: 'Dashboard';
  mostRecentLearnable?: Maybe<LearnableWithLastUpdated>;
  sortedLearnables: SortedLearnablesConnection;
  userData?: Maybe<User>;
};


export type DashboardSortedLearnablesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DayAndTimesForCalendarWeek = {
  __typename?: 'DayAndTimesForCalendarWeek';
  calendarWeek: Scalars['Int']['output'];
  calendarYear: Scalars['Int']['output'];
  dayOfWeek: Scalars['DayOfWeek']['output'];
  timeSlots: Array<Scalars['LocalTime']['output']>;
};

export type DayAndTimesForCalendarWeekInput = {
  calendarWeek: Scalars['Int']['input'];
  calendarYear: Scalars['Int']['input'];
  dayOfWeek: Scalars['DayOfWeek']['input'];
  timeSlots: Array<Scalars['LocalTime']['input']>;
};

export type DayAndTimesInput = {
  dayOfWeek: Scalars['DayOfWeek']['input'];
  timeSlots: Array<Scalars['LocalTime']['input']>;
};

export type DefaultFileAttachment = AttachmentV2 & FileAttachment & {
  __typename?: 'DefaultFileAttachment';
  description?: Maybe<Scalars['String']['output']>;
  file?: Maybe<File>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: AttachmentKind | '%future added value';
  title?: Maybe<Scalars['String']['output']>;
};

export type DefaultPaymentProviderData = PaymentProviderData & {
  __typename?: 'DefaultPaymentProviderData';
  dataType: PaymentProviderDataType | '%future added value';
  paymentMethod: PaymentMethodType | '%future added value';
};

export type DeleteActionInput = {
  actionId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteActionPayload = {
  __typename?: 'DeleteActionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type DeleteActionResultToNextActionsInput = {
  actionResultToNextActionsId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteActionResultToNextActionsPayload = {
  __typename?: 'DeleteActionResultToNextActionsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  noneActionResultToNextActions: TriggerAction_NoneActionResultToNextActions;
};

export type DeleteAssignmentRuleInput = {
  assignmentRuleId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteAssignmentRulePayload = {
  __typename?: 'DeleteAssignmentRulePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteAvailabilityInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteAvailabilityPayload = {
  __typename?: 'DeleteAvailabilityPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteCoachProfileInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteCoachProfilePayload = {
  __typename?: 'DeleteCoachProfilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteCoachingOfferInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachingId: Scalars['ID']['input'];
};

export type DeleteCoachingOfferPayload = {
  __typename?: 'DeleteCoachingOfferPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUnpublishedLearnableId: Scalars['ID']['output'];
};

export type DeleteConditionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  conditionId: Scalars['ID']['input'];
  limitedCartDiscountId: Scalars['ID']['input'];
};

export type DeleteConditionPayload = {
  __typename?: 'DeleteConditionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  limitedCartDiscount: LimitedCartDiscount;
};

export type DeleteContractPartnerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteContractPartnerPayload = {
  __typename?: 'DeleteContractPartnerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteCourseOrMicroLearningLearnableInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootId: Scalars['ID']['input'];
};

export type DeleteCourseOrMicroLearningLearnablePayload = {
  __typename?: 'DeleteCourseOrMicroLearningLearnablePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedCourseOrMicroLearningLearnableId: Scalars['ID']['output'];
};

export type DeleteCustomerFeedbackInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteCustomerFeedbackPayload = {
  __typename?: 'DeleteCustomerFeedbackPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteDiscountActionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteDiscountActionPayload = {
  __typename?: 'DeleteDiscountActionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteDiscountCodeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteDiscountCodePayload = {
  __typename?: 'DeleteDiscountCodePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  elementId: Scalars['ID']['input'];
};

export type DeleteElementV2Payload = {
  __typename?: 'DeleteElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type DeleteExternalLicenseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteExternalLicensePayload = {
  __typename?: 'DeleteExternalLicensePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteExternalLicensePoolInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteExternalLicensePoolPayload = {
  __typename?: 'DeleteExternalLicensePoolPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type DeleteFileInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteFilePayload = {
  __typename?: 'DeleteFilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteInstructorImplInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteInstructorImplPayload = {
  __typename?: 'DeleteInstructorImplPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteInvitationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteInvitationPayload = {
  __typename?: 'DeleteInvitationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedId?: Maybe<Scalars['ID']['output']>;
};

export type DeleteLicenseDefinitionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  licenseDefinitionId: Scalars['ID']['input'];
};

export type DeleteLicenseDefinitionPayload = {
  __typename?: 'DeleteLicenseDefinitionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteLicenseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteLicensePayload = {
  __typename?: 'DeleteLicensePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteLimitedCartDiscountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteLimitedCartDiscountPayload = {
  __typename?: 'DeleteLimitedCartDiscountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteMyAvailabilityInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteMyAvailabilityPayload = {
  __typename?: 'DeleteMyAvailabilityPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeletePersonalizedEmailTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeletePersonalizedEmailTemplatePayload = {
  __typename?: 'DeletePersonalizedEmailTemplatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeletePersonalizedNotificationTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeletePersonalizedNotificationTemplatePayload = {
  __typename?: 'DeletePersonalizedNotificationTemplatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteProductInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['ID']['input'];
};

export type DeleteProductPayload = {
  __typename?: 'DeleteProductPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  productId: Scalars['ID']['output'];
};

export type DeleteRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
  rewardId: Scalars['ID']['input'];
};

export type DeleteRewardPayload = {
  __typename?: 'DeleteRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type DeleteTreeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootId: Scalars['ID']['input'];
};

export type DeleteTreePayload = {
  __typename?: 'DeleteTreePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedRootId: Scalars['ID']['output'];
};

export type DeleteTrendInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteTrendPayload = {
  __typename?: 'DeleteTrendPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteUserInAccountGroupsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteUserInAccountGroupsPayload = {
  __typename?: 'DeleteUserInAccountGroupsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  removedIds: Array<Scalars['ID']['output']>;
};

export type DeleteUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteVimeoVideoSourceInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteVimeoVideoSourcePayload = {
  __typename?: 'DeleteVimeoVideoSourcePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteWordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  wordId: Scalars['ID']['input'];
  wordPackageId: Scalars['ID']['input'];
};

export type DeleteWordPackageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteWordPackagePayload = {
  __typename?: 'DeleteWordPackagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIds: Array<Scalars['ID']['output']>;
};

export type DeleteWordPayload = {
  __typename?: 'DeleteWordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  wordPackage: WordPackage;
};

export type DirectFeedbackFlowELearningContentConfig = FlowELearningContentConfig & {
  __typename?: 'DirectFeedbackFlowELearningContentConfig';
  configType: FlowELearningContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  minNumTriesTillShowAnswer: Scalars['Int']['output'];
};

/** a discount action is a common wrapper of 0 - n discount codes. */
export type DiscountAction = Node & {
  __typename?: 'DiscountAction';
  calcType: DiscountActionCalcType;
  createdAt: Scalars['ZonedDateTIme']['output'];
  discountCodes: DiscountCodesV2Connection;
  discountCodesCSV: Scalars['String']['output'];
  discountType: DiscountType;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  numUsages: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  usageLimitation: DiscountActionUsageLimitation;
  validUntil: DiscountActionValidUntil;
};


/** a discount action is a common wrapper of 0 - n discount codes. */
export type DiscountActionDiscountCodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DiscountActionAmountLimitation = {
  kind: DiscountActionAmountLimitationKind | '%future added value';
};

export enum DiscountActionAmountLimitationKind {
  Limited = 'limited',
  Unlimited = 'unlimited'
}

export type DiscountActionAmountLimited = DiscountActionAmountLimitation & {
  __typename?: 'DiscountActionAmountLimited';
  kind: DiscountActionAmountLimitationKind | '%future added value';
  max: Scalars['Int']['output'];
};

export type DiscountActionAmountUnlimited = DiscountActionAmountLimitation & {
  __typename?: 'DiscountActionAmountUnlimited';
  kind: DiscountActionAmountLimitationKind | '%future added value';
};

export type DiscountActionCalcType = {
  kind: DiscountActionCalcTypeKind | '%future added value';
};

export enum DiscountActionCalcTypeKind {
  Euro = 'euro',
  Percentage = 'percentage'
}

export type DiscountActionEuroCalcType = DiscountActionCalcType & {
  __typename?: 'DiscountActionEuroCalcType';
  euro: Scalars['BigDecimal']['output'];
  kind: DiscountActionCalcTypeKind | '%future added value';
};

export type DiscountActionPercentageCalcType = DiscountActionCalcType & {
  __typename?: 'DiscountActionPercentageCalcType';
  kind: DiscountActionCalcTypeKind | '%future added value';
  percentage: Scalars['BigDecimal']['output'];
};

export type DiscountActionUsageLimitation = {
  kind: DiscountActionUsageLimitationKind | '%future added value';
};

export enum DiscountActionUsageLimitationKind {
  Limited = 'limited',
  Unlimited = 'unlimited'
}

export type DiscountActionUsageLimited = DiscountActionUsageLimitation & {
  __typename?: 'DiscountActionUsageLimited';
  kind: DiscountActionUsageLimitationKind | '%future added value';
  maxAmountOfUsages: DiscountActionAmountLimitation;
  maxAmountOfUsagesPerAccount: DiscountActionAmountLimitation;
  onlyForAccountIds: Array<Scalars['ID']['output']>;
  onlyForProductIds: Array<Scalars['ID']['output']>;
};

export type DiscountActionUsageUnlimited = DiscountActionUsageLimitation & {
  __typename?: 'DiscountActionUsageUnlimited';
  kind: DiscountActionUsageLimitationKind | '%future added value';
};

export type DiscountActionValidUntil = {
  kind: DiscountActionValidUntilKind | '%future added value';
};

export type DiscountActionValidUntilDateTime = DiscountActionValidUntil & {
  __typename?: 'DiscountActionValidUntilDateTime';
  dateTime: Scalars['ZonedDateTIme']['output'];
  kind: DiscountActionValidUntilKind | '%future added value';
};

export type DiscountActionValidUntilForever = DiscountActionValidUntil & {
  __typename?: 'DiscountActionValidUntilForever';
  kind: DiscountActionValidUntilKind | '%future added value';
};

export enum DiscountActionValidUntilKind {
  UntilDateTime = 'untilDateTime',
  UntilForever = 'untilForever'
}

/** A connection to a list of items. */
export type DiscountActionsConnection = {
  __typename?: 'DiscountActionsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DiscountActionsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DiscountActionsEdge = {
  __typename?: 'DiscountActionsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DiscountAction;
};

/** a discount code. */
export type DiscountCode = Node & {
  __typename?: 'DiscountCode';
  code: Scalars['String']['output'];
  createdAt: Scalars['ZonedDateTIme']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  numUsages: Scalars['Int']['output'];
  searchUsages: SearchDiscountCodeUsagesResult;
};


/** a discount code. */
export type DiscountCodeSearchUsagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByUsedAtFrom?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByUsedToFrom?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DiscountCodeUsage = Node & {
  __typename?: 'DiscountCodeUsage';
  at: Scalars['ZonedDateTIme']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  order?: Maybe<Order>;
};

/** A connection to a list of items. */
export type DiscountCodeUsagesConnection = {
  __typename?: 'DiscountCodeUsagesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DiscountCodeUsagesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DiscountCodeUsagesEdge = {
  __typename?: 'DiscountCodeUsagesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DiscountCodeUsage;
};

/** A connection to a list of items. */
export type DiscountCodesV2Connection = {
  __typename?: 'DiscountCodesV2Connection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DiscountCodesV2Edge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DiscountCodesV2Edge = {
  __typename?: 'DiscountCodesV2Edge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DiscountCode;
};

export type DiscountType = {
  kind: DiscountTypeKind | '%future added value';
};

export enum DiscountTypeKind {
  System = 'system',
  User = 'user'
}

export enum DiscountTypeKindInput {
  System = 'system',
  User = 'user'
}

export type DisplayMatrixElementCell = MatrixElementCell & {
  __typename?: 'DisplayMatrixElementCell';
  content: Scalars['String']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: MatrixElementCellKind | '%future added value';
  xIdx: Scalars['Int']['output'];
  yIdx: Scalars['Int']['output'];
};

export type DisplayMatrixLearnElementCell = MatrixLearnElementCell & {
  __typename?: 'DisplayMatrixLearnElementCell';
  content: Scalars['String']['output'];
  kind: MatrixElementCellKind | '%future added value';
  xIdx: Scalars['Int']['output'];
  yIdx: Scalars['Int']['output'];
};

export type DoNotRewardTreeConfig = RewardTreeConfig & {
  __typename?: 'DoNotRewardTreeConfig';
  configType: RewardTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type DoNotShowAnswerTreeConfig = ShowAnswerTreeConfig & {
  __typename?: 'DoNotShowAnswerTreeConfig';
  configType: ShowAnswerTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type DoRewardContentConfig = RewardContentConfig & {
  __typename?: 'DoRewardContentConfig';
  configType: RewardContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type DynamicVocabElement = ElementV2 & {
  __typename?: 'DynamicVocabElement';
  elementType: ElementTypeV2 | '%future added value';
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  numDecoy: Scalars['Int']['output'];
  numWords: DynamicVocabElementNumWords;
  packageSelections: Array<VocabTrainWordPackageSelection>;
  title: Scalars['String']['output'];
};

export type DynamicVocabElementNumWords = {
  kind: DynamicVocabElementNumWordsKind | '%future added value';
};

export type DynamicVocabElementNumWordsAll = DynamicVocabElementNumWords & {
  __typename?: 'DynamicVocabElementNumWordsAll';
  kind: DynamicVocabElementNumWordsKind | '%future added value';
};

export enum DynamicVocabElementNumWordsKind {
  All = 'All',
  Num = 'Num'
}

export type ELearningContentSubmissionDefinition = {
  contentKind: ContentKind | '%future added value';
  progress: ELearningContentSubmissionProgress;
  relativeProgress: ELearningContentSubmissionRelativeProgress;
  status: ContentSubmissionStatus | '%future added value';
};

export type ELearningContentSubmissionProgress = {
  percentage: Scalars['Int']['output'];
};

export type ELearningContentSubmissionRelativeProgress = {
  __typename?: 'ELearningContentSubmissionRelativeProgress';
  numCorrect: Scalars['Int']['output'];
  numElements: Scalars['Int']['output'];
  percentageCorrect: Scalars['Int']['output'];
};

export type ELearningContentTypeDefinition = ContentTypeDefinition & TypeDefinition & {
  __typename?: 'ELearningContentTypeDefinition';
  contentKind: ContentKind | '%future added value';
  continueConfig: ContinueContentConfig;
  definitionType: TypeDefinitionType | '%future added value';
  elements: Array<ElementV2>;
  extension: ContentExtension;
  flowConfig: FlowELearningContentConfig;
  passConfig: PassContentConfig;
  restartIfFailedConfigs: Array<RestartIfFailedContentConfig>;
  restartIfPassedConfig: RestartIfPassedContentConfig;
  rewardConfig: RewardContentConfig;
  rewards: Array<Reward>;
  startConfigs: Array<StartContentConfig>;
  trigger?: Maybe<TriggerAction_Trigger>;
};

export type ELearningMutations = {
  __typename?: 'ELearningMutations';
  canShowElementAnswer?: Maybe<CanShowElementAnswerPayload>;
  canSubmitElement?: Maybe<CanSubmitElementPayload>;
  goToNextElement?: Maybe<GoToNextElementPayload>;
  goToPreviousElement?: Maybe<GoToPreviousElementPayload>;
  showElementAnswerElement?: Maybe<ShowElementAnswerElementPayload>;
};


export type ELearningMutationsCanShowElementAnswerArgs = {
  input: CanShowElementAnswerInput;
};


export type ELearningMutationsCanSubmitElementArgs = {
  input: CanSubmitElementInput;
};


export type ELearningMutationsGoToNextElementArgs = {
  input: GoToNextElementInput;
};


export type ELearningMutationsGoToPreviousElementArgs = {
  input: GoToPreviousElementInput;
};


export type ELearningMutationsShowElementAnswerElementArgs = {
  input: ShowElementAnswerElementInput;
};

export type EditAvgsPotentialAnalysisLicenseDefinitionAdminMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: AvgsPotentialAnalysisLicenseDefinitionDataInput;
  licenseDefinitionId: Scalars['ID']['input'];
};

export type EditAvgsPotentialAnalysisLicenseDefinitionAdminMutationPayload = {
  __typename?: 'EditAVGSPotentialAnalysisLicenseDefinitionAdminMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  licenseDefinition: LicenseDefinition;
};

export type EditAcademiesProductExtensionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  costUnit?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['ID']['input'];
};

export type EditAcademiesProductExtensionPayload = {
  __typename?: 'EditAcademiesProductExtensionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  product: Product;
};

export type EditAccountGroupAssignmentRuleInput = {
  active: Scalars['Boolean']['input'];
  assignmentRuleId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  userInAccountGroupIds: Array<Scalars['ID']['input']>;
};

export type EditAccountGroupAssignmentRulePayload = {
  __typename?: 'EditAccountGroupAssignmentRulePayload';
  assignmentRule: AssignmentRule;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type EditAccountGroupProductInput = {
  accountGroupId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type EditAccountGroupProductPayload = {
  __typename?: 'EditAccountGroupProductPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  product: Product;
};

export type EditAfterDateTimeVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  newDateTime: Scalars['ZonedDateTIme']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type EditAfterDateTimeVisibilityTreeConfigPayload = {
  __typename?: 'EditAfterDateTimeVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type EditAssociatedCoachesInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachIds: Array<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  potentialCancellationMessage: Scalars['String']['input'];
};

export type EditAssociatedCoachesPayload = {
  __typename?: 'EditAssociatedCoachesPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachingOffer: CoachingOffer;
};

export type EditAvailabilityInput = {
  availabilityData: AvailabilityDataInput;
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type EditAvailabilityPayload = {
  __typename?: 'EditAvailabilityPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type EditAvailabilityScheduleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachAccountId: Scalars['ID']['input'];
  coachId: Scalars['ID']['input'];
  scheduleData: ScheduleDataInput;
};

export type EditAvailabilitySchedulePayload = {
  __typename?: 'EditAvailabilitySchedulePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  schedule: AvailabilitySchedule;
};

export type EditBaseDataInput = {
  baseData: CoachProfileBaseData;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachProfileId: Scalars['ID']['input'];
};

export type EditBaseDataPayload = {
  __typename?: 'EditBaseDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: CoachProfileEdge;
};

export type EditBlockPermanentlyRestartIfFailedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  contentNodeId: Scalars['ID']['input'];
  newMaximumTries: Scalars['Int']['input'];
};

export type EditBlockPermanentlyRestartIfFailedContentConfigPayload = {
  __typename?: 'EditBlockPermanentlyRestartIfFailedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type EditBlockTemporarilyRestartIfFailedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  contentNodeId: Scalars['ID']['input'];
  newDaysToBlock: Scalars['Int']['input'];
};

export type EditBlockTemporarilyRestartIfFailedContentConfigPayload = {
  __typename?: 'EditBlockTemporarilyRestartIfFailedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type EditBusinessBaseDataAdminInput = {
  accountId: Scalars['ID']['input'];
  baseData: BusinessBaseDataInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type EditBusinessBaseDataAdminPayload = {
  __typename?: 'EditBusinessBaseDataAdminPayload';
  baseData: BusinessBaseData;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type EditBusinessBaseDataInput = {
  baseData: BusinessBaseDataInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type EditBusinessBaseDataPayload = {
  __typename?: 'EditBusinessBaseDataPayload';
  baseData: BusinessBaseData;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type EditBusinessDataInput = {
  businessData: BusinessDataInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachProfileId: Scalars['ID']['input'];
};

export type EditBusinessDataPayload = {
  __typename?: 'EditBusinessDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: CoachProfileEdge;
};

export type EditClozeTextElementV2Input = {
  additionalWords: Array<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  clozeTextElementId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type EditClozeTextElementV2Payload = {
  __typename?: 'EditClozeTextElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  clozeTextElement: ClozeTextElementV2;
  eLearningContentNode: TreeNode;
};

export type EditCoachingLicenseDefinitionAdminMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: CoachingLicenseDefinitionDataInput;
  licenseDefinitionId: Scalars['ID']['input'];
};

export type EditCoachingLicenseDefinitionAdminMutationPayload = {
  __typename?: 'EditCoachingLicenseDefinitionAdminMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  licenseDefinition: LicenseDefinition;
};

export type EditCoachingOfferParticipationCertificateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachingOfferId: Scalars['ID']['input'];
  participationCertificateOpt?: InputMaybe<CoachingOfferParticipationCertificateInput>;
};

export type EditCoachingOfferParticipationCertificatePayload = {
  __typename?: 'EditCoachingOfferParticipationCertificatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachingOffer: CoachingOffer;
};

export type EditContractPartnerDataInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: ContractPartnerDataInput;
  id: Scalars['ID']['input'];
  shareAmountPercentage: Scalars['Int']['input'];
};

export type EditContractPartnerDataPayload = {
  __typename?: 'EditContractPartnerDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contractPartner: ContractPartner;
};

export type EditCustomerFeedbackInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  customerFeedbackId: Scalars['ID']['input'];
  feedback: Scalars['String']['input'];
  name: Scalars['String']['input'];
  position: Scalars['String']['input'];
};

export type EditCustomerFeedbackPayload = {
  __typename?: 'EditCustomerFeedbackPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: CustomerFeedbackEdge;
};

export type EditDefaultFileAttachmentInput = {
  attachmentId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  descriptionOpt?: InputMaybe<Scalars['String']['input']>;
  fileId: Scalars['ID']['input'];
  nodeId: Scalars['ID']['input'];
  titleOpt?: InputMaybe<Scalars['String']['input']>;
};

export type EditDefaultFileAttachmentPayload = {
  __typename?: 'EditDefaultFileAttachmentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  node: TreeNode;
};

export type EditDirectFeedbackFlowELearningContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  contentId: Scalars['ID']['input'];
  minNumTriesTillShowAnswer: Scalars['Int']['input'];
};

export type EditDirectFeedbackFlowELearningContentConfigPayload = {
  __typename?: 'EditDirectFeedbackFlowELearningContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type EditDiscountCodeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discountCodeId: Scalars['ID']['input'];
  newCode: Scalars['String']['input'];
};

export type EditDiscountCodePayload = {
  __typename?: 'EditDiscountCodePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  discountCode: DiscountCode;
};

export type EditDynamicVocabElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  elementId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  wordPackageIds: Array<Scalars['ID']['input']>;
};

export type EditDynamicVocabElementPayload = {
  __typename?: 'EditDynamicVocabElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dynamicVocabElement: DynamicVocabElement;
  eLearningContentNode: TreeNode;
};

export type EditEducationalParticipationCertificateRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
  newData: ParticipationCertificateRewardDataInput;
  rewardId: Scalars['ID']['input'];
};

export type EditEducationalParticipationCertificateRewardPayload = {
  __typename?: 'EditEducationalParticipationCertificateRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type EditEnhancedTextElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  enhancedTextElementId: Scalars['ID']['input'];
  readMore?: InputMaybe<Scalars['String']['input']>;
  readMoreButtonText?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type EditEnhancedTextElementPayload = {
  __typename?: 'EditEnhancedTextElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  enhancedTextElement: EnhancedTextElement;
};

export type EditEuroDiscountActionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discountActionId: Scalars['ID']['input'];
  newDiscountType: Scalars['String']['input'];
  newEuro: Scalars['BigDecimal']['input'];
  newTitle: Scalars['String']['input'];
  newUsageLimitation?: InputMaybe<UpdateUsageLimited>;
  newValidUntil?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
};

export type EditEuroDiscountActionPayload = {
  __typename?: 'EditEuroDiscountActionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  discountAction: DiscountAction;
};

export type EditExternalLicenseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: ExternalLicenseDataInput;
  externalLicenseId: Scalars['ID']['input'];
};

export type EditExternalLicensePayload = {
  __typename?: 'EditExternalLicensePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalLicense: ExternalLicense;
};

export type EditExternalLicensePoolInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: ExternalLicensePoolDataInput;
  id: Scalars['ID']['input'];
};

export type EditExternalLicensePoolPayload = {
  __typename?: 'EditExternalLicensePoolPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalLicensePool: ExternalLicensePool;
};

export type EditExternalLicenseRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
  newData: ExternalLicenseRewardDataInput;
  rewardId: Scalars['ID']['input'];
};

export type EditExternalLicenseRewardPayload = {
  __typename?: 'EditExternalLicenseRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type EditFeatureToggleDataInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: FeatureToggleDataInput;
  id: Scalars['ID']['input'];
};

export type EditFeatureToggleDataPayload = {
  __typename?: 'EditFeatureToggleDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  featureToggle: FeatureToggle;
};

export type EditFileElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fileElementId: Scalars['ID']['input'];
  fileId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
};

export type EditFileElementV2Payload = {
  __typename?: 'EditFileElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  fileElement: FileElementV2;
};

export type EditGlobalVocabElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  elementId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type EditGlobalVocabElementPayload = {
  __typename?: 'EditGlobalVocabElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  globalVocabElement: GlobalVocabElement;
};

export type EditLicenseModelInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  licenseModelKind: Kind | '%future added value';
};

export type EditLicenseModelPayload = {
  __typename?: 'EditLicenseModelPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type EditLicenseProductInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  licenseDefinitionAmount?: InputMaybe<Scalars['Int']['input']>;
  licenseDefinitionId: Scalars['ID']['input'];
};

export type EditLicenseProductPayload = {
  __typename?: 'EditLicenseProductPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  product: Product;
};

export type EditLimitedCartDiscountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  limitedCartDiscountId: Scalars['ID']['input'];
  percentageValue: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type EditLimitedCartDiscountPayload = {
  __typename?: 'EditLimitedCartDiscountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  limitedCartDiscount: LimitedCartDiscount;
};

export type EditMarkMistakesElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  markMistakesElementId: Scalars['ID']['input'];
  newText: Scalars['String']['input'];
  newTitle: Scalars['String']['input'];
};

export type EditMarkMistakesElementPayload = {
  __typename?: 'EditMarkMistakesElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  markMistakesElement: MarkMistakesElement;
};

export type EditMatrixElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  matrixElementId: Scalars['ID']['input'];
  newTitle: Scalars['String']['input'];
};

export type EditMatrixElementPayload = {
  __typename?: 'EditMatrixElementPayload';
  MatrixElement: MatrixElement;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
};

export type EditMicroLearningLicenseDefinitionAdminMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: MicroLearningLicenseDefinitionDataInput;
  licenseDefinitionId: Scalars['ID']['input'];
};

export type EditMicroLearningLicenseDefinitionAdminMutationPayload = {
  __typename?: 'EditMicroLearningLicenseDefinitionAdminMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  licenseDefinition: LicenseDefinition;
};

export type EditMultipleChoiceElementV2Input = {
  answerOptions: Array<AnswerOptionV2Input>;
  answeringType: Scalars['String']['input'];
  answeringTypeText?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  imageIdOpt?: InputMaybe<Scalars['ID']['input']>;
  multipleChoiceElementId: Scalars['ID']['input'];
  question: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type EditMultipleChoiceElementV2Payload = {
  __typename?: 'EditMultipleChoiceElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  multipleChoiceElement: MultipleChoiceElementV2;
};

export type EditMyAvailabilityInput = {
  availabilityData: AvailabilityDataInput;
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type EditMyAvailabilityPayload = {
  __typename?: 'EditMyAvailabilityPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type EditMyAvailabilityScheduleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  scheduleData: ScheduleDataInput;
};

export type EditMyAvailabilitySchedulePayload = {
  __typename?: 'EditMyAvailabilitySchedulePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  schedule: AvailabilitySchedule;
};

export type EditMyBaseDataInput = {
  baseData: CoachProfileBaseData;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type EditMyBaseDataPayload = {
  __typename?: 'EditMyBaseDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachProfile: CoachProfile;
};

export type EditMyBusinessDataInput = {
  businessData: BusinessDataInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type EditMyBusinessDataPayload = {
  __typename?: 'EditMyBusinessDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachProfile: CoachProfile;
};

export type EditMyProfileDataInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  profileData: ProfileDataInput;
};

export type EditMyProfileDataPayload = {
  __typename?: 'EditMyProfileDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachProfile: CoachProfile;
};

export type EditNodeCoreInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  instructorIds: Array<Scalars['ID']['input']>;
  nodeId: Scalars['ID']['input'];
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type EditNodeCorePayload = {
  __typename?: 'EditNodeCorePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  editedNode: TreeNode;
};

export type EditNotAfterDateTimeVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  newDateTime: Scalars['ZonedDateTIme']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type EditNotAfterDateTimeVisibilityTreeConfigPayload = {
  __typename?: 'EditNotAfterDateTimeVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type EditOfferDescriptionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description: CoachingOfferDescriptionInput;
  id: Scalars['ID']['input'];
};

export type EditOfferDescriptionPayload = {
  __typename?: 'EditOfferDescriptionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachingOffer: CoachingOffer;
};

export type EditOneToOneSettingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  setting: GroupCoachingSettingInput;
};

export type EditOneToOneSettingPayload = {
  __typename?: 'EditOneToOneSettingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachingOffer: CoachingOffer;
};

export type EditOrderElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newAnsweringTypeTextOpt?: InputMaybe<Scalars['String']['input']>;
  newTitle: Scalars['String']['input'];
  orderElementId: Scalars['ID']['input'];
};

export type EditOrderElementPayload = {
  __typename?: 'EditOrderElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  orderElement: OrderElement;
};

export type EditOrderItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newText: Scalars['String']['input'];
  orderElementId: Scalars['ID']['input'];
  orderItemId: Scalars['ID']['input'];
};

export type EditOrderItemPayload = {
  __typename?: 'EditOrderItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderElement: OrderElement;
};

export type EditPercentageDiscountActionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discountActionId: Scalars['ID']['input'];
  newDiscountType: Scalars['String']['input'];
  newPercentage: Scalars['BigDecimal']['input'];
  newTitle: Scalars['String']['input'];
  newUsageLimitation?: InputMaybe<UpdateUsageLimited>;
  newValidUntil?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
};

export type EditPercentageDiscountActionPayload = {
  __typename?: 'EditPercentageDiscountActionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  discountAction: DiscountAction;
};

export type EditPodcastWithTimestampInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  elementId: Scalars['ID']['input'];
  newPodcastFileId: Scalars['ID']['input'];
  newTimestampsWithImage: Array<TimestampWithImageInput>;
  newTitle: Scalars['String']['input'];
};

export type EditPodcastWithTimestampPayload = {
  __typename?: 'EditPodcastWithTimestampPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  podcastWithTimestampElement: PodcastWithTimestamp;
};

export type EditPodigeePodcastElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  lengthInSeconds: Scalars['Int']['input'];
  podigeePodcastElementId: Scalars['ID']['input'];
  podigeeUrl: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type EditPodigeePodcastElementV2Payload = {
  __typename?: 'EditPodigeePodcastElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  podigeePodcastElement: PodcastElementV2;
};

export type EditPrivateBaseDataAdminInput = {
  accountId: Scalars['ID']['input'];
  baseData: PrivateBaseDataInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type EditPrivateBaseDataAdminPayload = {
  __typename?: 'EditPrivateBaseDataAdminPayload';
  baseData: PrivateBaseData;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type EditPrivateBaseDataInput = {
  baseData: PrivateBaseDataInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type EditPrivateBaseDataPayload = {
  __typename?: 'EditPrivateBaseDataPayload';
  baseData: PrivateBaseData;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type EditProductInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newIsHidden: Scalars['Boolean']['input'];
  newIsTaxFree: Scalars['Boolean']['input'];
  newNetPrice: Scalars['BigDecimal']['input'];
  newTitle: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
};

export type EditProductPayload = {
  __typename?: 'EditProductPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  editedProduct: Product;
};

export type EditProductSelectionConditionInput = {
  amount: Scalars['Int']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  conditionId: Scalars['ID']['input'];
  limitedCartDiscountId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};

export type EditProductSelectionConditionPayload = {
  __typename?: 'EditProductSelectionConditionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  limitedCartDiscount: LimitedCartDiscount;
};

export type EditProfileDataInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachProfileId: Scalars['ID']['input'];
  profileData: ProfileDataInput;
};

export type EditProfileDataPayload = {
  __typename?: 'EditProfileDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: CoachProfileEdge;
};

export type EditRenumerationInput = {
  additionalInformation?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  percentageShare: Scalars['Int']['input'];
  sessionRate: PriceInput;
};

export type EditRenumerationPayload = {
  __typename?: 'EditRenumerationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachingOffer: CoachingOffer;
};

export type EditRootNodePartInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  firstReleasedAt?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  iconId?: InputMaybe<Scalars['ID']['input']>;
  rootNodeId: Scalars['ID']['input'];
  searchWords?: InputMaybe<Scalars['String']['input']>;
  tagIds: Array<Scalars['ID']['input']>;
};

export type EditRootNodePartPayload = {
  __typename?: 'EditRootNodePartPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  editedNode: TreeNode;
};

export type EditSingleUserAssignmentRuleInput = {
  assignmentRuleId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  maxLicenseAmount: Scalars['Int']['input'];
  userId: Scalars['ID']['input'];
};

export type EditSingleUserAssignmentRulePayload = {
  __typename?: 'EditSingleUserAssignmentRulePayload';
  assignmentRule: AssignmentRule;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type EditTextElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  textElementId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type EditTextElementV2Payload = {
  __typename?: 'EditTextElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  textElement: TextElementV2;
};

export type EditTreeLicenseDefinitionAdminMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: TreeLicenseDefinitionDataInput;
  licenseDefinitionId: Scalars['ID']['input'];
};

export type EditTreeLicenseDefinitionAdminMutationPayload = {
  __typename?: 'EditTreeLicenseDefinitionAdminMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  licenseDefinition: LicenseDefinition;
};

export type EditTrendInput = {
  aboutOffersHeadingAndDescription: HeadingAndDescriptionInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachingHeadingAndDescription: HeadingAndDescriptionInput;
  coachingImageId: Scalars['ID']['input'];
  customerData: CustomerDataInput;
  potentialAnalysisHeadingAndDescription: HeadingAndDescriptionInput;
  trendData: TrendDataInput;
  trendId: Scalars['ID']['input'];
  trendMedia: TrendMediaInput;
};

export type EditTrendPayload = {
  __typename?: 'EditTrendPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: TrendEdge;
};

export type EditUploadAsyncElementInput = {
  assignedEvaluator: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  taskDescription: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type EditUploadAsyncElementPayload = {
  __typename?: 'EditUploadAsyncElementPayload';
  asyncContent: TreeNode;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  uploadAsyncElement: UploadAsyncElement;
};

export type EditUserInAccountGroupAndAddOrInviteUsersMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  emails: Array<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  newName: Scalars['String']['input'];
};

export type EditUserInAccountGroupAndAddOrInviteUsersMutationPayload = {
  __typename?: 'EditUserInAccountGroupAndAddOrInviteUsersMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  group?: Maybe<UserInAccountGroupWrapper>;
};

export type EditUserInput = {
  activated: Scalars['Boolean']['input'];
  adsOptIn: Scalars['Boolean']['input'];
  branch?: InputMaybe<Branch | '%future added value'>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  imageId?: InputMaybe<Scalars['ID']['input']>;
  lastName: Scalars['String']['input'];
  position?: InputMaybe<Scalars['String']['input']>;
  teamSize?: InputMaybe<TeamSize | '%future added value'>;
  userId: Scalars['ID']['input'];
};

export type EditUserPayload = {
  __typename?: 'EditUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  user: User;
};

export type EditVideoElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  videoElementId: Scalars['ID']['input'];
  vimeoId: Scalars['String']['input'];
  vimeoVideoSourceId: Scalars['ID']['input'];
};

export type EditVideoElementV2Payload = {
  __typename?: 'EditVideoElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  videoElement: VideoElement;
};

export type EditVimeoPodcastElementV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  vimeoId: Scalars['String']['input'];
  vimeoPodcastElementId: Scalars['ID']['input'];
  vimeoVideoSourceId: Scalars['ID']['input'];
};

export type EditVimeoPodcastElementV2Payload = {
  __typename?: 'EditVimeoPodcastElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
  vimeoPodcastElement: PodcastElementV2;
};

export type EditVimeoVideoSourceInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type EditVimeoVideoSourcePayload = {
  __typename?: 'EditVimeoVideoSourcePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: Vimeo_VimeoVideoSourceEdge;
};

export type EditWordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  explanation: Scalars['String']['input'];
  translation?: InputMaybe<Scalars['String']['input']>;
  word: Scalars['String']['input'];
  wordId: Scalars['ID']['input'];
  wordPackageId: Scalars['ID']['input'];
};

export type EditWordPackageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: WordPackageDataInput;
  wordPackageId: Scalars['ID']['input'];
};

export type EditWordPackagePayload = {
  __typename?: 'EditWordPackagePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  wordPackage: WordPackage;
};

export type EditWordPackageRewardInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
  newData: WordPackageRewardDataInput;
  rewardId: Scalars['ID']['input'];
};

export type EditWordPackageRewardPayload = {
  __typename?: 'EditWordPackageRewardPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type EditWordPayload = {
  __typename?: 'EditWordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  wordPackage: WordPackage;
};

export type EditWrongAnswerInMatrixElementCellInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  matrixCellId: Scalars['ID']['input'];
  matrixElementId: Scalars['ID']['input'];
  wrongAnswerContent: Scalars['String']['input'];
  wrongAnswerId: Scalars['ID']['input'];
};

export type EditWrongAnswerInMatrixElementCellPayload = {
  __typename?: 'EditWrongAnswerInMatrixElementCellPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchema = {
  __typename?: 'ElearningV2AdminMutationSchema';
  addColumnToMatrixElement?: Maybe<AddColumnToMatrixElementPayload>;
  addOrderItem?: Maybe<AddOrderItemPayload>;
  addRowToMatrixElement?: Maybe<AddRowToMatrixElementPayload>;
  addWrongAnswerInMatrixElementCell?: Maybe<AddWrongAnswerInMatrixElementCellPayload>;
  createClozeTextElement?: Maybe<CreateClozeTextElementV2Payload>;
  createDynamicVocabElement?: Maybe<CreateDynamicVocabElementPayload>;
  createEnhancedTextElement?: Maybe<CreateEnhancedTextElementPayload>;
  createFileElement?: Maybe<CreateFileElementV2Payload>;
  createGlobalVocabElement?: Maybe<CreateGlobalVocabElementPayload>;
  createMarkMistakesElement?: Maybe<CreateMarkMistakesElementPayload>;
  createMatrixElement?: Maybe<CreateMatrixElementPayload>;
  createMultipleChoiceElement?: Maybe<CreateMultipleChoiceElementV2Payload>;
  createOrderElement?: Maybe<CreateOrderElementPayload>;
  createPodcastElement?: Maybe<CreatePodcastElementV2Payload>;
  createPodcastWithTimestampElement?: Maybe<CreatePodcastWithTimestampPayload>;
  createTextElement?: Maybe<CreateTextElementV2Payload>;
  createVideoElement?: Maybe<CreateVideoElementV2Payload>;
  deleteElement?: Maybe<DeleteElementV2Payload>;
  editClozeTextElement?: Maybe<EditClozeTextElementV2Payload>;
  editDynamicVocabElement?: Maybe<EditDynamicVocabElementPayload>;
  editEnhancedTextElement?: Maybe<EditEnhancedTextElementPayload>;
  editFileElement?: Maybe<EditFileElementV2Payload>;
  editGlobalVocabElement?: Maybe<EditGlobalVocabElementPayload>;
  editMarkMistakesElement?: Maybe<EditMarkMistakesElementPayload>;
  editMatrixElement?: Maybe<EditMatrixElementPayload>;
  editMultipleChoiceElement?: Maybe<EditMultipleChoiceElementV2Payload>;
  editOrderElement?: Maybe<EditOrderElementPayload>;
  editOrderItem?: Maybe<EditOrderItemPayload>;
  editPodcastWithTimestampElement?: Maybe<EditPodcastWithTimestampPayload>;
  editPodigeePodcastElement?: Maybe<EditPodigeePodcastElementV2Payload>;
  editTextElement?: Maybe<EditTextElementV2Payload>;
  editVideoElement?: Maybe<EditVideoElementV2Payload>;
  editVimeoPodcastElement?: Maybe<EditVimeoPodcastElementV2Payload>;
  editWrongAnswerInMatrixElementCell?: Maybe<EditWrongAnswerInMatrixElementCellPayload>;
  getVideoData?: Maybe<GetVideoDataV2Payload>;
  moveOrderItems?: Maybe<MoveOrderItemsPayload>;
  rearrangeElements?: Maybe<RearrangeElementsV2Payload>;
  removeColumnFromMatrixElement?: Maybe<RemoveColumnFromMatrixElementPayload>;
  removeOrderItem?: Maybe<RemoveOrderItemPayload>;
  removeRowFromMatrixElement?: Maybe<RemoveRowFromMatrixElementPayload>;
  removeWrongAnswerFromMatrixElementCell?: Maybe<RemoveWrongAnswerFromMatrixElementCellPayload>;
  setCorrectAnswerInMatrixElementCell?: Maybe<SetCorrectAnswerInMatrixElementCellPayload>;
  setMatrixElementColumnTitle?: Maybe<SetMatrixElementColumnTitlePayload>;
  setMatrixElementRowTitle?: Maybe<SetMatrixElementRowTitlePayload>;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaAddColumnToMatrixElementArgs = {
  input: AddColumnToMatrixElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaAddOrderItemArgs = {
  input: AddOrderItemInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaAddRowToMatrixElementArgs = {
  input: AddRowToMatrixElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaAddWrongAnswerInMatrixElementCellArgs = {
  input: AddWrongAnswerInMatrixElementCellInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateClozeTextElementArgs = {
  input: CreateClozeTextElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateDynamicVocabElementArgs = {
  input: CreateDynamicVocabElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateEnhancedTextElementArgs = {
  input: CreateEnhancedTextElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateFileElementArgs = {
  input: CreateFileElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateGlobalVocabElementArgs = {
  input: CreateGlobalVocabElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateMarkMistakesElementArgs = {
  input: CreateMarkMistakesElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateMatrixElementArgs = {
  input: CreateMatrixElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateMultipleChoiceElementArgs = {
  input: CreateMultipleChoiceElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateOrderElementArgs = {
  input: CreateOrderElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreatePodcastElementArgs = {
  input: CreatePodcastElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreatePodcastWithTimestampElementArgs = {
  input: CreatePodcastWithTimestampInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateTextElementArgs = {
  input: CreateTextElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaCreateVideoElementArgs = {
  input: CreateVideoElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaDeleteElementArgs = {
  input: DeleteElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditClozeTextElementArgs = {
  input: EditClozeTextElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditDynamicVocabElementArgs = {
  input: EditDynamicVocabElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditEnhancedTextElementArgs = {
  input: EditEnhancedTextElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditFileElementArgs = {
  input: EditFileElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditGlobalVocabElementArgs = {
  input: EditGlobalVocabElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditMarkMistakesElementArgs = {
  input: EditMarkMistakesElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditMatrixElementArgs = {
  input: EditMatrixElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditMultipleChoiceElementArgs = {
  input: EditMultipleChoiceElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditOrderElementArgs = {
  input: EditOrderElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditOrderItemArgs = {
  input: EditOrderItemInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditPodcastWithTimestampElementArgs = {
  input: EditPodcastWithTimestampInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditPodigeePodcastElementArgs = {
  input: EditPodigeePodcastElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditTextElementArgs = {
  input: EditTextElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditVideoElementArgs = {
  input: EditVideoElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditVimeoPodcastElementArgs = {
  input: EditVimeoPodcastElementV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaEditWrongAnswerInMatrixElementCellArgs = {
  input: EditWrongAnswerInMatrixElementCellInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaGetVideoDataArgs = {
  input: GetVideoDataV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaMoveOrderItemsArgs = {
  input: MoveOrderItemsInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaRearrangeElementsArgs = {
  input: RearrangeElementsV2Input;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaRemoveColumnFromMatrixElementArgs = {
  input: RemoveColumnFromMatrixElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaRemoveOrderItemArgs = {
  input: RemoveOrderItemInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaRemoveRowFromMatrixElementArgs = {
  input: RemoveRowFromMatrixElementInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaRemoveWrongAnswerFromMatrixElementCellArgs = {
  input: RemoveWrongAnswerFromMatrixElementCellInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaSetCorrectAnswerInMatrixElementCellArgs = {
  input: SetCorrectAnswerInMatrixElementCellInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaSetMatrixElementColumnTitleArgs = {
  input: SetMatrixElementColumnTitleInput;
};


/** Data only accessible by the admin */
export type ElearningV2AdminMutationSchemaSetMatrixElementRowTitleArgs = {
  input: SetMatrixElementRowTitleInput;
};

export type ElementExtension = {
  doNotUse: Scalars['String']['output'];
};

export type ElementExtensionImpl = ElementExtension & {
  __typename?: 'ElementExtensionImpl';
  doNotUse: Scalars['String']['output'];
  points: Scalars['Int']['output'];
};

export type ElementState = {
  element: LearnElement;
  kind: ElementStateKind | '%future added value';
};

export enum ElementStateKind {
  Input = 'Input',
  InputAndIsCorrect = 'InputAndIsCorrect',
  ShowAnswer = 'ShowAnswer',
  Untouched = 'Untouched',
  UntouchedAndPreviouslyIncorrect = 'UntouchedAndPreviouslyIncorrect'
}

export enum ElementTypeV2 {
  ClozeText = 'clozeText',
  DynamicVocab = 'dynamicVocab',
  EnhancedText = 'enhancedText',
  File = 'file',
  GlobalVocab = 'globalVocab',
  MarkMistakes = 'markMistakes',
  Matrix = 'matrix',
  MultipleChoice = 'multipleChoice',
  Order = 'order',
  Podcast = 'podcast',
  PodcastWithTimestamp = 'podcastWithTimestamp',
  Text = 'text',
  Video = 'video'
}

export type ElementV2 = {
  elementType: ElementTypeV2 | '%future added value';
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ElementsSummary = {
  __typename?: 'ElementsSummary';
  numExerciseElements: Scalars['Int']['output'];
  numFileElements: Scalars['Int']['output'];
  sumPodcastWithTimestampLengthInSec: Scalars['Int']['output'];
  sumTextLengthInSec: Scalars['Int']['output'];
  sumVideoLengthInSec: Scalars['Int']['output'];
};

/** Data only accessible by the admin */
export type EmailAdminMutationSchema = {
  __typename?: 'EmailAdminMutationSchema';
  createPersonalizedEmailTemplate?: Maybe<CreatePersonalizedEmailTemplatePayload>;
  deletePersonalizedEmailTemplate?: Maybe<DeletePersonalizedEmailTemplatePayload>;
  sendEmail?: Maybe<SendEmailPayload>;
  updatePersonalizedEmailTemplate?: Maybe<UpdatePersonalizedEmailTemplatePayload>;
};


/** Data only accessible by the admin */
export type EmailAdminMutationSchemaCreatePersonalizedEmailTemplateArgs = {
  input: CreatePersonalizedEmailTemplateInput;
};


/** Data only accessible by the admin */
export type EmailAdminMutationSchemaDeletePersonalizedEmailTemplateArgs = {
  input: DeletePersonalizedEmailTemplateInput;
};


/** Data only accessible by the admin */
export type EmailAdminMutationSchemaSendEmailArgs = {
  input: SendEmailInput;
};


/** Data only accessible by the admin */
export type EmailAdminMutationSchemaUpdatePersonalizedEmailTemplateArgs = {
  input: UpdatePersonalizedEmailTemplateInput;
};

/** Data only accessible by the admin */
export type EmailAdminSchema = {
  __typename?: 'EmailAdminSchema';
  AvailableSystemTemplates: Array<EmailTemplate>;
  PersonalizedEmailTemplates: PersonalizedEmailTemplatesConnection;
};


/** Data only accessible by the admin */
export type EmailAdminSchemaAvailableSystemTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type EmailAdminSchemaPersonalizedEmailTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  body: Scalars['String']['output'];
  key: Scalars['String']['output'];
  previewText: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  variables: Array<Scalars['String']['output']>;
};

export type EmployerInvoicePaymentMethod = SelectedPaymentMethod & {
  __typename?: 'EmployerInvoicePaymentMethod';
  paymentMethodId: PaymentMethodType | '%future added value';
  selectedPaymentMethodType: SelectedPaymentMethodType | '%future added value';
};

export type EmptyOrderExtension = OrderExtension & {
  __typename?: 'EmptyOrderExtension';
  kind: OrderExtensionKind | '%future added value';
};

export type EmptyTreeStateExtension = TreeStateExtension & {
  __typename?: 'EmptyTreeStateExtension';
  doNotUse: Scalars['String']['output'];
};

export type EnhancedTextElement = ElementV2 & {
  __typename?: 'EnhancedTextElement';
  elementType: ElementTypeV2 | '%future added value';
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  readMore?: Maybe<Scalars['String']['output']>;
  readMoreButtonText?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type EnhancedTextLearnElement = LearnElement & {
  __typename?: 'EnhancedTextLearnElement';
  elementType: ElementTypeV2 | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  readMore?: Maybe<Scalars['String']['output']>;
  readMoreButtonText?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type EvaluateUploadAsyncElementTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fileId: Scalars['ID']['input'];
  taskId: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};

export type EvaluateUploadAsyncElementTaskPayload = {
  __typename?: 'EvaluateUploadAsyncElementTaskPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  evaluatedTask: EvaluatedUploadAsyncElementTask;
};

export type EvaluatedUploadAsyncElementTask = AsyncElementTask & Node & UploadAsyncElementTask & {
  __typename?: 'EvaluatedUploadAsyncElementTask';
  assignedEvaluator?: Maybe<User>;
  elementKind: AsyncElementKind | '%future added value';
  evaluation: UploadEvaluation;
  extension: AsyncElementTaskExtension;
  file?: Maybe<File>;
  id: Scalars['ID']['output'];
  status: AsyncElementTaskStatus | '%future added value';
  submissionInfo: AsyncElementTaskSubmissionInfo;
};

export type ExternalLicense = Node & {
  __typename?: 'ExternalLicense';
  data: ExternalLicenseData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  issuingInfo: ExternalLicenseIssuingInfoInterface;
  pool?: Maybe<ExternalLicensePool>;
};

export type ExternalLicenseData = {
  __typename?: 'ExternalLicenseData';
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ExternalLicenseDataInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ExternalLicenseIssuedToUserIssuingInfoType = ExternalLicenseIssuingInfoInterface & {
  __typename?: 'ExternalLicenseIssuedToUserIssuingInfoType';
  hasBeenIssued: Scalars['Boolean']['output'];
  issuedAt: Scalars['ZonedDateTIme']['output'];
  issuedTo?: Maybe<User>;
  kind: ExternalLicenseIssuingInfoKind | '%future added value';
  validUntil: Scalars['ZonedDateTIme']['output'];
};

export type ExternalLicenseIssuingInfoInterface = {
  hasBeenIssued: Scalars['Boolean']['output'];
  kind: ExternalLicenseIssuingInfoKind | '%future added value';
};

export enum ExternalLicenseIssuingInfoKind {
  IssuedToUser = 'issuedToUser',
  NotIssued = 'notIssued'
}

export type ExternalLicenseNotIssuedIssuingInfoType = ExternalLicenseIssuingInfoInterface & {
  __typename?: 'ExternalLicenseNotIssuedIssuingInfoType';
  hasBeenIssued: Scalars['Boolean']['output'];
  kind: ExternalLicenseIssuingInfoKind | '%future added value';
};

export type ExternalLicensePool = Node & {
  __typename?: 'ExternalLicensePool';
  canBeDeleted: Scalars['Boolean']['output'];
  data: ExternalLicensePoolData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type ExternalLicensePoolData = {
  __typename?: 'ExternalLicensePoolData';
  link?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  usageInformation: Scalars['String']['output'];
  validNumDaysAfterIssuing: Scalars['Int']['output'];
};

export type ExternalLicensePoolDataInput = {
  link?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  usageInformation: Scalars['String']['input'];
  validNumDaysAfterIssuing: Scalars['Int']['input'];
};

/** A connection to a list of items. */
export type ExternalLicensePoolsConnection = {
  __typename?: 'ExternalLicensePoolsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ExternalLicensePoolsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ExternalLicensePoolsEdge = {
  __typename?: 'ExternalLicensePoolsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ExternalLicensePool;
};

export type ExternalLicenseReward = Reward & {
  __typename?: 'ExternalLicenseReward';
  data: ExternalLicenseRewardData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: RewardKind | '%future added value';
  superId: Scalars['ID']['output'];
};

export type ExternalLicenseRewardData = {
  __typename?: 'ExternalLicenseRewardData';
  pool?: Maybe<ExternalLicensePool>;
};

export type ExternalLicenseRewardDataInput = {
  pool: Scalars['ID']['input'];
};

export type ExternalLicense_ErrorOccurredRewardResult = RewardResult & {
  __typename?: 'ExternalLicense_ErrorOccurredRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type ExternalLicense_IssuedToUserRewardResult = RewardResult & {
  __typename?: 'ExternalLicense_IssuedToUserRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type ExternalLicense_NotPassedRewardResult = RewardResult & {
  __typename?: 'ExternalLicense_NotPassedRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

/** A connection to a list of items. */
export type ExternalLicensesConnection = {
  __typename?: 'ExternalLicensesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ExternalLicensesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ExternalLicensesEdge = {
  __typename?: 'ExternalLicensesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ExternalLicense;
};

export type FailedELearningContentSubmissionDefinition = ContentSubmissionDefinition & ELearningContentSubmissionDefinition & FinishedELearningContentSubmissionDefinitionInterface & {
  __typename?: 'FailedELearningContentSubmissionDefinition';
  contentKind: ContentKind | '%future added value';
  progress: ELearningContentSubmissionProgress;
  relativeProgress: ELearningContentSubmissionRelativeProgress;
  rewardResults: Array<RewardResult>;
  status: ContentSubmissionStatus | '%future added value';
};

export enum FeatureId {
  PotentialAnalysisV2 = 'potentialAnalysisV2',
  Test = 'test'
}

export type FeatureToggle = Node & {
  __typename?: 'FeatureToggle';
  data: FeatureToggleData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

/** Data only accessible by the admin */
export type FeatureToggleAdminMutationSchema = {
  __typename?: 'FeatureToggleAdminMutationSchema';
  editFeatureToggleData?: Maybe<EditFeatureToggleDataPayload>;
};


/** Data only accessible by the admin */
export type FeatureToggleAdminMutationSchemaEditFeatureToggleDataArgs = {
  input: EditFeatureToggleDataInput;
};

/** Data only accessible by the admin */
export type FeatureToggleAdminSchema = {
  __typename?: 'FeatureToggleAdminSchema';
  FeatureToggles: FeatureTogglesConnection;
};


/** Data only accessible by the admin */
export type FeatureToggleAdminSchemaFeatureTogglesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByIsActive?: InputMaybe<Scalars['Boolean']['input']>;
  filterByName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type FeatureToggleData = {
  __typename?: 'FeatureToggleData';
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type FeatureToggleDataInput = {
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type FeatureToggleQueries = {
  __typename?: 'FeatureToggleQueries';
  ActiveFeatureToggleIds: Array<FeatureId | '%future added value'>;
};

/** A connection to a list of items. */
export type FeatureTogglesConnection = {
  __typename?: 'FeatureTogglesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FeatureTogglesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type FeatureTogglesEdge = {
  __typename?: 'FeatureTogglesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: FeatureToggle;
};

export type FeedbackData = {
  comment?: InputMaybe<Scalars['String']['input']>;
  score: Scalars['Int']['input'];
};

export type File = Node & {
  __typename?: 'File';
  accessType: FileAccessType | '%future added value';
  fileSize: Scalars['Long']['output'];
  fileType: Scalars['String']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  storageKey: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  thumbnailKey?: Maybe<Scalars['String']['output']>;
  uploadDateTime: Scalars['ZonedDateTIme']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export enum FileAccessType {
  Public = 'public',
  SignedUrl = 'signedUrl'
}

export type FileAttachment = {
  description?: Maybe<Scalars['String']['output']>;
  file?: Maybe<File>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: AttachmentKind | '%future added value';
  title?: Maybe<Scalars['String']['output']>;
};

export enum FileContentTypeV2 {
  Jpg = 'jpg',
  Pdf = 'pdf',
  Png = 'png'
}

export type FileElementV2 = ElementV2 & {
  __typename?: 'FileElementV2';
  elementType: ElementTypeV2 | '%future added value';
  extension: ElementExtension;
  file?: Maybe<File>;
  fileContentType: FileContentTypeV2 | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type FileLearnElement = LearnElement & {
  __typename?: 'FileLearnElement';
  elementType: ElementTypeV2 | '%future added value';
  file?: Maybe<File>;
  fileContentType: FileContentTypeV2 | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

/** Data only accessible by the admin */
export type FilesAdminMutationSchema = {
  __typename?: 'FilesAdminMutationSchema';
  deleteFile?: Maybe<DeleteFilePayload>;
};


/** Data only accessible by the admin */
export type FilesAdminMutationSchemaDeleteFileArgs = {
  input: DeleteFileInput;
};

/** Data only accessible by the admin */
export type FilesAdminSchema = {
  __typename?: 'FilesAdminSchema';
  Files: FilesConnection;
};


/** Data only accessible by the admin */
export type FilesAdminSchemaFilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fileType?: InputMaybe<Array<Scalars['String']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fromDateTimeInclusive?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tagsExcluded?: InputMaybe<Array<Scalars['String']['input']>>;
  tagsIncluded?: InputMaybe<Array<Scalars['String']['input']>>;
  toDateTimeInclusive?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
};

/** A connection to a list of items. */
export type FilesConnection = {
  __typename?: 'FilesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type FilesEdge = {
  __typename?: 'FilesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: File;
};

export type FinishedAsyncContentSubmissionDefinitionInterface = {
  contentKind: ContentKind | '%future added value';
  element?: Maybe<AsyncLearnElement>;
  rewardResults: Array<RewardResult>;
  status: ContentSubmissionStatus | '%future added value';
};

export type FinishedELearningContentSubmissionDefinitionInterface = {
  contentKind: ContentKind | '%future added value';
  progress: ELearningContentSubmissionProgress;
  relativeProgress: ELearningContentSubmissionRelativeProgress;
  rewardResults: Array<RewardResult>;
  status: ContentSubmissionStatus | '%future added value';
};

export type FinishedELearningContentSubmissionProgress = ELearningContentSubmissionProgress & {
  __typename?: 'FinishedELearningContentSubmissionProgress';
  percentage: Scalars['Int']['output'];
};

export type FinishedTreeStateDefinition = TreeStateDefinition & {
  __typename?: 'FinishedTreeStateDefinition';
  status: TreeStateStatus | '%future added value';
};

export type FirstContentStartAtTreeConfig = StartAtTreeConfig & {
  __typename?: 'FirstContentStartAtTreeConfig';
  configType: StartAtTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type FlowELearningContentConfig = {
  configType: FlowELearningContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum FlowELearningContentConfigType {
  FlowELearningContentDirectFeedback = 'FlowELearningContent_DirectFeedback',
  FlowELearningContentSimplyContinue = 'FlowELearningContent_SimplyContinue'
}

export type ForgotPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

export type ForgotPasswordPayload = {
  __typename?: 'ForgotPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type FreshUploadAsyncElementTask = AsyncElementTask & Node & UploadAsyncElementTask & {
  __typename?: 'FreshUploadAsyncElementTask';
  assignedEvaluator?: Maybe<User>;
  elementKind: AsyncElementKind | '%future added value';
  extension: AsyncElementTaskExtension;
  file?: Maybe<File>;
  id: Scalars['ID']['output'];
  status: AsyncElementTaskStatus | '%future added value';
  submissionInfo: AsyncElementTaskSubmissionInfo;
};

export type GamificationPoints = {
  id: Scalars['ID']['output'];
  kind: GamificationPointsKind | '%future added value';
  num: Scalars['Int']['output'];
  owner?: Maybe<User>;
  receivedAt: Scalars['ZonedDateTIme']['output'];
};

export enum GamificationPointsKind {
  ReceivedByContent = 'ReceivedByContent'
}

export type GamificationPointsReceivedByContent = GamificationPoints & {
  __typename?: 'GamificationPointsReceivedByContent';
  contentId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  kind: GamificationPointsKind | '%future added value';
  num: Scalars['Int']['output'];
  owner?: Maybe<User>;
  receivedAt: Scalars['ZonedDateTIme']['output'];
};

export type GamificationPointsReward = Reward & {
  __typename?: 'GamificationPointsReward';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: RewardKind | '%future added value';
  superId: Scalars['ID']['output'];
};

export type GamificationPoints_AlreadyReceivedPointsRewardResult = RewardResult & {
  __typename?: 'GamificationPoints_AlreadyReceivedPointsRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type GamificationPoints_ErrorOccurredRewardResult = RewardResult & {
  __typename?: 'GamificationPoints_ErrorOccurredRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type GamificationPoints_NoPointsReceivedRewardResult = RewardResult & {
  __typename?: 'GamificationPoints_NoPointsReceivedRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type GamificationPoints_NotPassedIhkTestFlowRewardResult = RewardResult & {
  __typename?: 'GamificationPoints_NotPassedIHKTestFlowRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type GamificationPoints_PointsReceivedRewardResult = RewardResult & {
  __typename?: 'GamificationPoints_PointsReceivedRewardResult';
  kind: RewardResultKind | '%future added value';
  points?: Maybe<GamificationPointsReceivedByContent>;
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export enum Gender {
  Diverse = 'Diverse',
  Female = 'Female',
  Male = 'Male',
  NotDefined = 'NotDefined'
}

export type GenerateAbsoluteCartLinkInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  selectedDiscountCodes: Array<Scalars['String']['input']>;
  selectedProducts: Array<CartLinkProductsInput>;
};

export type GenerateAbsoluteCartLinkPayload = {
  __typename?: 'GenerateAbsoluteCartLinkPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  link: Scalars['String']['output'];
};

export type GetActiveContentNodeOrFallbackRoot_ActiveContentNode = GetActiveContentNodeOrFallbackRoot_Result & {
  __typename?: 'GetActiveContentNodeOrFallbackRoot_ActiveContentNode';
  contentNode: LearnOpportunityV2;
  kind: GetActiveContentNodeOrFallbackRoot_ResultKind | '%future added value';
};

export type GetActiveContentNodeOrFallbackRoot_Empty = GetActiveContentNodeOrFallbackRoot_Result & {
  __typename?: 'GetActiveContentNodeOrFallbackRoot_Empty';
  kind: GetActiveContentNodeOrFallbackRoot_ResultKind | '%future added value';
};

export type GetActiveContentNodeOrFallbackRoot_FallbackRoot = GetActiveContentNodeOrFallbackRoot_Result & {
  __typename?: 'GetActiveContentNodeOrFallbackRoot_FallbackRoot';
  fallbackRoot: LearnOpportunityV2;
  kind: GetActiveContentNodeOrFallbackRoot_ResultKind | '%future added value';
};

export type GetActiveContentNodeOrFallbackRoot_Result = {
  kind: GetActiveContentNodeOrFallbackRoot_ResultKind | '%future added value';
};

export enum GetActiveContentNodeOrFallbackRoot_ResultKind {
  ActiveContentNode = 'ActiveContentNode',
  Empty = 'Empty',
  FallbackRoot = 'FallbackRoot'
}

export type GetVideoDataV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  vimeoId: Scalars['String']['input'];
  vimeoVideoSourceId: Scalars['ID']['input'];
};

export type GetVideoDataV2Payload = {
  __typename?: 'GetVideoDataV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  videoData?: Maybe<VideoDataV2>;
};

export type GlobalVocabElement = ElementV2 & {
  __typename?: 'GlobalVocabElement';
  elementType: ElementTypeV2 | '%future added value';
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type GoToNextElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
};

export type GoToNextElementPayload = {
  __typename?: 'GoToNextElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type GoToPreviousElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
};

export type GoToPreviousElementPayload = {
  __typename?: 'GoToPreviousElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type GoogleIapData = PaymentProviderData & {
  __typename?: 'GoogleIAPData';
  dataType: PaymentProviderDataType | '%future added value';
  orderId: Scalars['ID']['output'];
  paymentMethod: PaymentMethodType | '%future added value';
  receipt: Scalars['String']['output'];
};

export type GrantPlacementPermissionAndRedirectInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type GrantPlacementPermissionAndRedirectPayload = {
  __typename?: 'GrantPlacementPermissionAndRedirectPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  placementUrl: Scalars['String']['output'];
};

export type GroupCoachingSetting = CoachingSetting & {
  __typename?: 'GroupCoachingSetting';
  kind: CoachingSettingKind | '%future added value';
  maxParticipants: Scalars['Int']['output'];
};

export type GroupCoachingSettingInput = {
  kind?: InputMaybe<CoachingSettingKind | '%future added value'>;
  maxParticipants: Scalars['Int']['input'];
};

export type HeadingAndDescription = {
  __typename?: 'HeadingAndDescription';
  description: Scalars['String']['output'];
  heading: Scalars['String']['output'];
};

export type HeadingAndDescriptionInput = {
  description: Scalars['String']['input'];
  heading: Scalars['String']['input'];
};

export type HideVisibilityCoachingConfig = VisibilityCoachingConfig & {
  __typename?: 'HideVisibilityCoachingConfig';
  configType: VisibilityCoachingConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type HideVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'HideVisibilityTreeConfig';
  configType: VisibilityTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type HistoryEventInterface = {
  kind: HistoryEventType | '%future added value';
};

export enum HistoryEventType {
  BillingDetailsUpdate = 'BillingDetailsUpdate',
  CartUpdate = 'CartUpdate',
  CreditNoteSentUpdate = 'CreditNoteSentUpdate',
  InvoiceSentUpdate = 'InvoiceSentUpdate',
  OrderCreationUpdate = 'OrderCreationUpdate',
  PaymentInProcessUpdate = 'PaymentInProcessUpdate',
  PaymentMethodUpdate = 'PaymentMethodUpdate',
  PurchaseUpdate = 'PurchaseUpdate'
}

/** Data only accessible by the admin */
export type HubspotAdminMutationSchema = {
  __typename?: 'HubspotAdminMutationSchema';
  syncHubspotContactsWithUsers?: Maybe<SyncHubspotContactsWithUsersPayload>;
};


/** Data only accessible by the admin */
export type HubspotAdminMutationSchemaSyncHubspotContactsWithUsersArgs = {
  input: SyncHubspotContactsWithUsersInput;
};

export enum IhkCertificateOrderStateKind {
  ErrorOccurred = 'ErrorOccurred',
  NotIhk = 'NotIHK',
  Ordered = 'Ordered',
  ReadyToOrder = 'ReadyToOrder',
  RewardNotAchievedYet = 'RewardNotAchievedYet'
}

export type IhkCertificateOrderUserDataInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  dateOfBirth: Scalars['LocalDate']['input'];
  firstName: Scalars['String']['input'];
  houseNumber: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  salutation?: InputMaybe<Scalars['String']['input']>;
  street: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type IhkCertificateReward = Reward & {
  __typename?: 'IHKCertificateReward';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: RewardKind | '%future added value';
  superId: Scalars['ID']['output'];
};

export type IhkCertificate_ErrorOccurredRewardResult = RewardResult & {
  __typename?: 'IHKCertificate_ErrorOccurredRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type IhkCertificate_NotPassedRewardResult = RewardResult & {
  __typename?: 'IHKCertificate_NotPassedRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type IhkCertificate_ReadyToOrderRewardResult = RewardResult & {
  __typename?: 'IHKCertificate_ReadyToOrderRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type IhkFlowPassContentConfig = PassContentConfig & {
  __typename?: 'IHKFlowPassContentConfig';
  configType: PassContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum Icon {
  ArrowLoop = 'arrowLoop',
  BridgeOverRiver = 'bridgeOverRiver',
  ComputerWithHeart = 'computerWithHeart',
  DotsConnected = 'dotsConnected',
  FlowerInCircle = 'flowerInCircle',
  HandWithFlower = 'handWithFlower',
  HandsWithHeart = 'handsWithHeart',
  LightBulb = 'lightBulb',
  PeopleHighFive = 'peopleHighFive',
  PersonWithStars = 'personWithStars',
  Rocket = 'rocket',
  WorkingDesk = 'workingDesk'
}

export type ImageTrendMedia = TrendMedia & {
  __typename?: 'ImageTrendMedia';
  file?: Maybe<File>;
  kind: TrendMediaKind | '%future added value';
};

export type ImageTrendMediaInput = {
  fileId: Scalars['ID']['input'];
  trendMediaType: TrendMediaKind | '%future added value';
};

export type InformAboutSuccessfulPlacementInput = {
  accountId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  jobListingTitle: Scalars['String']['input'];
};

export type InformAboutSuccessfulPlacementPayload = {
  __typename?: 'InformAboutSuccessfulPlacementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type InitializeFreeCalendarWeekOverrideInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type InitializeFreeCalendarWeekOverridePayload = {
  __typename?: 'InitializeFreeCalendarWeekOverridePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  schedule: AvailabilitySchedule;
};

export type InputAndIsCorrectElementState = ElementState & {
  __typename?: 'InputAndIsCorrectElementState';
  element: LearnElement;
  inputElementState: InputElementState;
  isCorrect: Scalars['Boolean']['output'];
  kind: ElementStateKind | '%future added value';
};

export type InputElementState = {
  element: LearnElement;
  kind: ElementStateKind | '%future added value';
};

export type Instructor = {
  /** The ID of an object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  superId: Scalars['ID']['output'];
};

/** Data only accessible by the admin */
export type InstructorAdminMutationSchema = {
  __typename?: 'InstructorAdminMutationSchema';
  createInstructorImpl?: Maybe<CreateInstructorImplPayload>;
  deleteInstructorImpl?: Maybe<DeleteInstructorImplPayload>;
  updateInstructorImpl?: Maybe<UpdateInstructorImplPayload>;
};


/** Data only accessible by the admin */
export type InstructorAdminMutationSchemaCreateInstructorImplArgs = {
  input: CreateInstructorImplInput;
};


/** Data only accessible by the admin */
export type InstructorAdminMutationSchemaDeleteInstructorImplArgs = {
  input: DeleteInstructorImplInput;
};


/** Data only accessible by the admin */
export type InstructorAdminMutationSchemaUpdateInstructorImplArgs = {
  input: UpdateInstructorImplInput;
};

/** Data only accessible by the admin */
export type InstructorAdminSchema = {
  __typename?: 'InstructorAdminSchema';
  InstructorImpls: InstructorImplsConnection;
};


/** Data only accessible by the admin */
export type InstructorAdminSchemaInstructorImplsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type InstructorImpl = Instructor & Node & {
  __typename?: 'InstructorImpl';
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  name: Scalars['String']['output'];
  position?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  superId: Scalars['ID']['output'];
};

export type InstructorImplInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  position?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of items. */
export type InstructorImplsConnection = {
  __typename?: 'InstructorImplsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InstructorImplsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type InstructorImplsEdge = {
  __typename?: 'InstructorImplsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: InstructorImpl;
};

/** A connection to a list of items. */
export type InstructorsConnection = {
  __typename?: 'InstructorsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InstructorsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type InstructorsEdge = {
  __typename?: 'InstructorsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Instructor;
};

export type Invitation = {
  __typename?: 'Invitation';
  accountName?: Maybe<Scalars['String']['output']>;
  addToGroups: Array<UserInAccountGroup>;
  email: Scalars['String']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  invitingUser?: Maybe<User>;
  invitingUserName?: Maybe<Scalars['String']['output']>;
  validUntil?: Maybe<Scalars['ZonedDateTIme']['output']>;
};

export type InvitationWrapper = AccountMember & {
  __typename?: 'InvitationWrapper';
  groups: Array<UserInAccountGroup>;
  id: Scalars['ID']['output'];
  invitation: Invitation;
  isManager: Scalars['Boolean']['output'];
  kind: AccountMemberKind | '%future added value';
  name: Scalars['String']['output'];
};

export type InviteOrAddUsersToUserInAccountGroupsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  emails: Array<Scalars['String']['input']>;
  groupIds: Array<Scalars['ID']['input']>;
};

export type InviteOrAddUsersToUserInAccountGroupsPayload = {
  __typename?: 'InviteOrAddUsersToUserInAccountGroupsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  newAccountMembers: Array<AccountMemberEdge>;
  updatedAccountMembers: Array<AccountMember>;
};

export type InvoiceAddress = {
  __typename?: 'InvoiceAddress';
  city: Scalars['String']['output'];
  companyDetails?: Maybe<Scalars['String']['output']>;
  companyName: Scalars['String']['output'];
  country: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  houseNumber: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  street: Scalars['String']['output'];
};

export type InvoiceData = {
  __typename?: 'InvoiceData';
  invoiceFile?: Maybe<File>;
  invoiceId: Scalars['String']['output'];
  invoiceNumber?: Maybe<Scalars['String']['output']>;
};

export type InvoiceSentUpdate = HistoryEventInterface & {
  __typename?: 'InvoiceSentUpdate';
  invoiceId: Scalars['String']['output'];
  invoiceNumber: Scalars['String']['output'];
  kind: HistoryEventType | '%future added value';
};

export type IsFinishedViewerTreeState = ViewerTreeState & {
  __typename?: 'IsFinishedViewerTreeState';
  kind: ViewerTreeStateKind | '%future added value';
  startedAt: Scalars['ZonedDateTIme']['output'];
};

export type IsStartedViewerTreeState = ViewerTreeState & {
  __typename?: 'IsStartedViewerTreeState';
  headContentId: Scalars['ID']['output'];
  kind: ViewerTreeStateKind | '%future added value';
  startedAt: Scalars['ZonedDateTIme']['output'];
};

export type IssueExternalLicenseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalLicenseId: Scalars['ID']['input'];
  issuedToUser: Scalars['ID']['input'];
};

export type IssueExternalLicensePayload = {
  __typename?: 'IssueExternalLicensePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: ExternalLicensesEdge;
};

export type Item = {
  itemType: ItemType | '%future added value';
};

export enum ItemType {
  CartBulkDiscount = 'CartBulkDiscount',
  CartDiscount = 'CartDiscount',
  CartGlobalDiscount = 'CartGlobalDiscount',
  CartLimitedDiscount = 'CartLimitedDiscount',
  CartProduct = 'CartProduct'
}

export type JwtLoginInformation = {
  __typename?: 'JwtLoginInformation';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export enum Kind {
  Assigment = 'Assigment',
  FreeForAll = 'FreeForAll'
}

export type LearnAsyncContentTypeDefinition = LearnOpportunityContentTypeDefinition & LearnOpportunityTypeDefinition & {
  __typename?: 'LearnAsyncContentTypeDefinition';
  contentKind: ContentKind | '%future added value';
  contentNodeAdvancementResult: ContentNodeAdvancementResult;
  definitionType: TypeDefinitionType | '%future added value';
  extension: LearnContentExtension;
  task?: Maybe<AsyncElementTask>;
  taskDescription?: Maybe<Scalars['String']['output']>;
};

export type LearnContentExtension = {
  doNotUse: Scalars['String']['output'];
};

export type LearnContentExtensionImpl = LearnContentExtension & {
  __typename?: 'LearnContentExtensionImpl';
  doNotUse: Scalars['String']['output'];
  elementsSummary?: Maybe<ElementsSummary>;
  image?: Maybe<File>;
  instructors: InstructorsConnection;
  isUnlockNecessaryToStart: Scalars['Boolean']['output'];
  receivableGamificationPoints: Scalars['Int']['output'];
  receivedGamificationPoints: Scalars['Int']['output'];
};


export type LearnContentExtensionImplInstructorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type LearnElement = {
  elementType: ElementTypeV2 | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type LearnMutations = {
  __typename?: 'LearnMutations';
  orderIHKCertificate?: Maybe<OrderIhkCertificatePayload>;
};


export type LearnMutationsOrderIhkCertificateArgs = {
  input: OrderIhkCertificateInput;
};

/** A connection to a list of items. */
export type LearnOpportunitiesV2Connection = {
  __typename?: 'LearnOpportunitiesV2Connection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LearnOpportunitiesV2Edge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LearnOpportunitiesV2Edge = {
  __typename?: 'LearnOpportunitiesV2Edge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LearnOpportunityV2;
};

export type LearnOpportunityBranchTypeDefinition = LearnOpportunityTypeDefinition & {
  __typename?: 'LearnOpportunityBranchTypeDefinition';
  children: Array<LearnOpportunityV2>;
  definitionType: TypeDefinitionType | '%future added value';
};

export type LearnOpportunityChildStructureDefinition = LearnOpportunityStructureDefinition & {
  __typename?: 'LearnOpportunityChildStructureDefinition';
  definitionType: StructureType | '%future added value';
  title: Scalars['String']['output'];
};

export type LearnOpportunityContentTypeDefinition = {
  contentKind: ContentKind | '%future added value';
  contentNodeAdvancementResult: ContentNodeAdvancementResult;
  definitionType: TypeDefinitionType | '%future added value';
  extension: LearnContentExtension;
};

export type LearnOpportunityELearningContentTypeDefinition = LearnOpportunityContentTypeDefinition & LearnOpportunityTypeDefinition & {
  __typename?: 'LearnOpportunityELearningContentTypeDefinition';
  containedElementTypes: Array<ElementTypeV2 | '%future added value'>;
  contentKind: ContentKind | '%future added value';
  contentNodeAdvancementResult: ContentNodeAdvancementResult;
  definitionType: TypeDefinitionType | '%future added value';
  extension: LearnContentExtension;
  showAnswerElements?: Maybe<Array<ElementV2>>;
};

export type LearnOpportunityRootExtension = {
  doNotUse: Scalars['String']['output'];
};

export type LearnOpportunityRootStructureDefinition = LearnOpportunityStructureDefinition & {
  __typename?: 'LearnOpportunityRootStructureDefinition';
  definitionType: StructureType | '%future added value';
  extension: LearnOpportunityRootExtension;
  icon?: Maybe<File>;
  progressPercentage?: Maybe<Scalars['Int']['output']>;
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  viewerTreeState: ViewerTreeState;
};

export type LearnOpportunityStructureDefinition = {
  definitionType: StructureType | '%future added value';
  title: Scalars['String']['output'];
};

export type LearnOpportunityTypeDefinition = {
  definitionType: TypeDefinitionType | '%future added value';
};

export type LearnOpportunityV2 = Node & {
  __typename?: 'LearnOpportunityV2';
  attachmentsV2: Array<AttachmentV2>;
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  indexPath: Array<Scalars['Int']['output']>;
  instructors: Array<Instructor>;
  instructorsV2: InstructorsConnection;
  lengthInSecondsV2: Scalars['Int']['output'];
  nextContentNode?: Maybe<LearnOpportunityV2>;
  nextContentNodeId?: Maybe<Scalars['ID']['output']>;
  path: Array<LearnOpportunityV2>;
  previousContentNodeId?: Maybe<Scalars['ID']['output']>;
  root?: Maybe<LearnOpportunityV2>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  structureDefinition: LearnOpportunityStructureDefinition;
  typeDefinition: LearnOpportunityTypeDefinition;
};


export type LearnOpportunityV2InstructorsV2Args = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type LearnQueries = {
  __typename?: 'LearnQueries';
  Tags: TagsConnection;
};


export type LearnQueriesTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Data only accessible by the admin */
export type LearnV2AdminMutationSchema = {
  __typename?: 'LearnV2AdminMutationSchema';
  createTreeStateForUser?: Maybe<CreateTreeStateForUserPayload>;
  deleteTree?: Maybe<DeleteTreePayload>;
  setTreeStateHead?: Maybe<SetTreeStateHeadPayload>;
};


/** Data only accessible by the admin */
export type LearnV2AdminMutationSchemaCreateTreeStateForUserArgs = {
  input: CreateTreeStateForUserInput;
};


/** Data only accessible by the admin */
export type LearnV2AdminMutationSchemaDeleteTreeArgs = {
  input: DeleteTreeInput;
};


/** Data only accessible by the admin */
export type LearnV2AdminMutationSchemaSetTreeStateHeadArgs = {
  input: SetTreeStateHeadInput;
};

/** Data only accessible by the admin */
export type LearnV2AdminSchema = {
  __typename?: 'LearnV2AdminSchema';
  GetContentSubmissions: ContentSubmissionsConnection;
  GetTreeStates: TreeStatesConnection;
  RootNodesWithTreeStatesForUser: Array<RootNodesWithTreeStateType>;
  SearchLearnOpportunityV2: LearnOpportunitiesV2Connection;
};


/** Data only accessible by the admin */
export type LearnV2AdminSchemaGetContentSubmissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  treeStateId: Scalars['ID']['input'];
};


/** Data only accessible by the admin */
export type LearnV2AdminSchemaGetTreeStatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByRootNodeId?: InputMaybe<Scalars['ID']['input']>;
  filterByUserId?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type LearnV2AdminSchemaRootNodesWithTreeStatesForUserArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};


/** Data only accessible by the admin */
export type LearnV2AdminSchemaSearchLearnOpportunityV2Args = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  titleMatchRegex?: InputMaybe<Scalars['String']['input']>;
};

export type LearnV2Mutations = {
  __typename?: 'LearnV2Mutations';
  restartContentNodeAfterFailed?: Maybe<RestartContentNodeAfterFailedPayload>;
  restartContentNodeAfterPassed?: Maybe<RestartContentNodeAfterPassedPayload>;
  startContentNode?: Maybe<StartContentNodePayload>;
  startTree?: Maybe<StartTreePayload>;
  submitClozeTextElement?: Maybe<SubmitClozeTextElementV2Payload>;
  submitDisplayElement?: Maybe<SubmitDisplayElementPayload>;
  submitMarkMistakesElement?: Maybe<SubmitMarkMistakesElementV2Payload>;
  submitMatrixElement?: Maybe<SubmitMatrixElementV2Payload>;
  submitMultipleChoiceElement?: Maybe<SubmitMultipleChoiceElementV2Payload>;
  submitOrderElement?: Maybe<SubmitOrderElementPayload>;
};


export type LearnV2MutationsRestartContentNodeAfterFailedArgs = {
  input: RestartContentNodeAfterFailedInput;
};


export type LearnV2MutationsRestartContentNodeAfterPassedArgs = {
  input: RestartContentNodeAfterPassedInput;
};


export type LearnV2MutationsStartContentNodeArgs = {
  input: StartContentNodeInput;
};


export type LearnV2MutationsStartTreeArgs = {
  input: StartTreeInput;
};


export type LearnV2MutationsSubmitClozeTextElementArgs = {
  input: SubmitClozeTextElementV2Input;
};


export type LearnV2MutationsSubmitDisplayElementArgs = {
  input: SubmitDisplayElementInput;
};


export type LearnV2MutationsSubmitMarkMistakesElementArgs = {
  input: SubmitMarkMistakesElementV2Input;
};


export type LearnV2MutationsSubmitMatrixElementArgs = {
  input: SubmitMatrixElementV2Input;
};


export type LearnV2MutationsSubmitMultipleChoiceElementArgs = {
  input: SubmitMultipleChoiceElementV2Input;
};


export type LearnV2MutationsSubmitOrderElementArgs = {
  input: SubmitOrderElementInput;
};

/** Data partaining to the current user */
export type LearnViewerSchema = {
  __typename?: 'LearnViewerSchema';
  getActiveContentNodeOrFallbackRoot: GetActiveContentNodeOrFallbackRoot_Result;
  getActiveRoots: Array<LearnOpportunityV2>;
  myNodeDocuments: Array<File>;
};

/** Data only accessible by the admin */
export type LearnableAdminSchema = {
  __typename?: 'LearnableAdminSchema';
  UnpublishedLearnables: UnpublishedLearnablesConnection;
};


/** Data only accessible by the admin */
export type LearnableAdminSchemaUnpublishedLearnablesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  kinds: Array<LearnableKind>;
  last?: InputMaybe<Scalars['Int']['input']>;
  tagIds: Array<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export enum LearnableKind {
  Course = 'Course',
  GroupCoaching = 'GroupCoaching',
  MicroLearning = 'MicroLearning',
  OneToOneCoaching = 'OneToOneCoaching'
}

export type LearnableLicenseGrouping = LicenseGrouping & {
  __typename?: 'LearnableLicenseGrouping';
  assignmentRules: Array<AssignmentRule>;
  id: Scalars['ID']['output'];
  kind: LicenseGroupingKind | '%future added value';
  learnable?: Maybe<PublishedLearnable>;
  totalLicenseAmount: Scalars['Int']['output'];
  totalLicenseAmountForUser: Scalars['Int']['output'];
  usedLicenseAmount: Scalars['Int']['output'];
  usedLicenseAmountForUser: Scalars['Int']['output'];
};

export type LearnableQueries = {
  __typename?: 'LearnableQueries';
  PublishedLearnables: PublishedLearnablesConnection;
};


export type LearnableQueriesPublishedLearnablesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kinds: Array<LearnableKind>;
  last?: InputMaybe<Scalars['Int']['input']>;
  tagIds: Array<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type LearnableWithLastUpdated = {
  __typename?: 'LearnableWithLastUpdated';
  lastUpdated?: Maybe<Scalars['ZonedDateTIme']['output']>;
  learnable: PublishedLearnable;
};

export type LeaveAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type LeaveAccountPayload = {
  __typename?: 'LeaveAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type LeaveFeedbackInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  feedbackData: FeedbackData;
};

export type LeaveFeedbackPayload = {
  __typename?: 'LeaveFeedbackPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type License = {
  __typename?: 'License';
  creationInfo: LicenseCreationInfo;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  usage: LicenseUsage;
};

export type LicenseAvailability = {
  kind: LicenseAvailabilityKind | '%future added value';
};

export type LicenseAvailabilityFreeLicensesAvailable = LicenseAvailability & {
  __typename?: 'LicenseAvailabilityFreeLicensesAvailable';
  kind: LicenseAvailabilityKind | '%future added value';
  numAvailable: Scalars['Int']['output'];
};

export enum LicenseAvailabilityKind {
  FreeLicensesAvailable = 'FreeLicensesAvailable',
  NoneAvailable = 'NoneAvailable'
}

export type LicenseAvailabilityNoneAvailableType = LicenseAvailability & {
  __typename?: 'LicenseAvailabilityNoneAvailableType';
  kind: LicenseAvailabilityKind | '%future added value';
};

/** A connection to a list of items. */
export type LicenseConnection = {
  __typename?: 'LicenseConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LicenseEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LicenseCreatedByAdmin = LicenseCreationInfo & {
  __typename?: 'LicenseCreatedByAdmin';
  createdAt: Scalars['ZonedDateTIme']['output'];
  creatorId: Scalars['ID']['output'];
  kind: LicenseCreationInfoKind | '%future added value';
  licenseDefinition?: Maybe<LicenseDefinition>;
};

export type LicenseCreatedByOrder = LicenseCreationInfo & {
  __typename?: 'LicenseCreatedByOrder';
  createdAt: Scalars['ZonedDateTIme']['output'];
  kind: LicenseCreationInfoKind | '%future added value';
  licenseDefinition?: Maybe<LicenseDefinition>;
  orderId: Scalars['ID']['output'];
};

export type LicenseCreatedByPlacement = LicenseCreationInfo & {
  __typename?: 'LicenseCreatedByPlacement';
  createdAt: Scalars['ZonedDateTIme']['output'];
  kind: LicenseCreationInfoKind | '%future added value';
  licenseDefinition?: Maybe<LicenseDefinition>;
};

export type LicenseCreatedByPotentialAnalysis = LicenseCreationInfo & {
  __typename?: 'LicenseCreatedByPotentialAnalysis';
  createdAt: Scalars['ZonedDateTIme']['output'];
  fromUserId: Scalars['ID']['output'];
  kind: LicenseCreationInfoKind | '%future added value';
  licenseDefinition?: Maybe<LicenseDefinition>;
};

export type LicenseCreatedByRegistration = LicenseCreationInfo & {
  __typename?: 'LicenseCreatedByRegistration';
  createdAt: Scalars['ZonedDateTIme']['output'];
  kind: LicenseCreationInfoKind | '%future added value';
  licenseDefinition?: Maybe<LicenseDefinition>;
  userId: Scalars['ID']['output'];
};

export type LicenseCreationInfo = {
  createdAt: Scalars['ZonedDateTIme']['output'];
  kind: LicenseCreationInfoKind | '%future added value';
  licenseDefinition?: Maybe<LicenseDefinition>;
};

export enum LicenseCreationInfoKind {
  Admin = 'Admin',
  Order = 'Order',
  Placement = 'Placement',
  PotentialAnalysis = 'PotentialAnalysis',
  Registration = 'Registration'
}

export type LicenseDefinition = Node & {
  __typename?: 'LicenseDefinition';
  data: LicenseDefinitionData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

/** Data only accessible by the admin */
export type LicenseDefinitionAdminMutationSchema = {
  __typename?: 'LicenseDefinitionAdminMutationSchema';
  createAVGSPotentialAnalysisLicenseDefinition?: Maybe<CreateAvgsPotentialAnalysisLicenseDefinitionPayload>;
  createCoachingLicenseDefinition?: Maybe<CreateCoachingLicenseDefinitionPayload>;
  createMicroLearningLicenseDefinition?: Maybe<CreateMicroLearningLicenseDefinitionPayload>;
  createTreeLicenseDefinition?: Maybe<CreateTreeLicenseDefinitionPayload>;
  deleteLicenseDefinition?: Maybe<DeleteLicenseDefinitionPayload>;
  editAVGSPotentialAnalysisLicenseDefinitionAdminMutation?: Maybe<EditAvgsPotentialAnalysisLicenseDefinitionAdminMutationPayload>;
  editCoachingLicenseDefinitionAdminMutation?: Maybe<EditCoachingLicenseDefinitionAdminMutationPayload>;
  editMicroLicenseDefinitionAdminMutation?: Maybe<EditMicroLearningLicenseDefinitionAdminMutationPayload>;
  editTreeLicenseDefinitionAdminMutation?: Maybe<EditTreeLicenseDefinitionAdminMutationPayload>;
};


/** Data only accessible by the admin */
export type LicenseDefinitionAdminMutationSchemaCreateAvgsPotentialAnalysisLicenseDefinitionArgs = {
  input: CreateAvgsPotentialAnalysisLicenseDefinitionInput;
};


/** Data only accessible by the admin */
export type LicenseDefinitionAdminMutationSchemaCreateCoachingLicenseDefinitionArgs = {
  input: CreateCoachingLicenseDefinitionInput;
};


/** Data only accessible by the admin */
export type LicenseDefinitionAdminMutationSchemaCreateMicroLearningLicenseDefinitionArgs = {
  input: CreateMicroLearningLicenseDefinitionInput;
};


/** Data only accessible by the admin */
export type LicenseDefinitionAdminMutationSchemaCreateTreeLicenseDefinitionArgs = {
  input: CreateTreeLicenseDefinitionInput;
};


/** Data only accessible by the admin */
export type LicenseDefinitionAdminMutationSchemaDeleteLicenseDefinitionArgs = {
  input: DeleteLicenseDefinitionInput;
};


/** Data only accessible by the admin */
export type LicenseDefinitionAdminMutationSchemaEditAvgsPotentialAnalysisLicenseDefinitionAdminMutationArgs = {
  input: EditAvgsPotentialAnalysisLicenseDefinitionAdminMutationInput;
};


/** Data only accessible by the admin */
export type LicenseDefinitionAdminMutationSchemaEditCoachingLicenseDefinitionAdminMutationArgs = {
  input: EditCoachingLicenseDefinitionAdminMutationInput;
};


/** Data only accessible by the admin */
export type LicenseDefinitionAdminMutationSchemaEditMicroLicenseDefinitionAdminMutationArgs = {
  input: EditMicroLearningLicenseDefinitionAdminMutationInput;
};


/** Data only accessible by the admin */
export type LicenseDefinitionAdminMutationSchemaEditTreeLicenseDefinitionAdminMutationArgs = {
  input: EditTreeLicenseDefinitionAdminMutationInput;
};

/** Data only accessible by the admin */
export type LicenseDefinitionAdminSchema = {
  __typename?: 'LicenseDefinitionAdminSchema';
  SearchLicenseDefinitions: LicenseDefinitionsConnection;
};


/** Data only accessible by the admin */
export type LicenseDefinitionAdminSchemaSearchLicenseDefinitionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dataKinds: Array<LicenseDefinitionDataKind>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  nameMatchRegex?: InputMaybe<Scalars['String']['input']>;
};

export type LicenseDefinitionCoachingInfo = {
  __typename?: 'LicenseDefinitionCoachingInfo';
  coachingId: Scalars['ID']['output'];
  contractPartner?: Maybe<ContractPartner>;
  image?: Maybe<File>;
  title: Scalars['String']['output'];
};

export type LicenseDefinitionData = {
  kind: LicenseDefinitionDataKind | '%future added value';
  name: Scalars['String']['output'];
};

export enum LicenseDefinitionDataKind {
  AvgsPotentialAnalysis = 'AVGSPotentialAnalysis',
  Coaching = 'Coaching',
  MicroLearning = 'MicroLearning',
  Tree = 'Tree'
}

export type LicenseDefinitionRootInfo = {
  __typename?: 'LicenseDefinitionRootInfo';
  contractPartner?: Maybe<ContractPartner>;
  image?: Maybe<File>;
  rootId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type LicenseDefinitionsConnection = {
  __typename?: 'LicenseDefinitionsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LicenseDefinitionsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LicenseDefinitionsEdge = {
  __typename?: 'LicenseDefinitionsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LicenseDefinition;
};

/** An edge in a connection. */
export type LicenseEdge = {
  __typename?: 'LicenseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: License;
};

export type LicenseGrouping = {
  assignmentRules: Array<AssignmentRule>;
  id: Scalars['ID']['output'];
  kind: LicenseGroupingKind | '%future added value';
  totalLicenseAmount: Scalars['Int']['output'];
  totalLicenseAmountForUser: Scalars['Int']['output'];
  usedLicenseAmount: Scalars['Int']['output'];
  usedLicenseAmountForUser: Scalars['Int']['output'];
};

export enum LicenseGroupingKind {
  Learnable = 'Learnable',
  MicroLearning = 'MicroLearning'
}

export type LicenseGroupingQueries = {
  __typename?: 'LicenseGroupingQueries';
  LicenseGrouping: LicenseGrouping;
  LicenseGroupings: LicenseGroupingsConnection;
  MyLicenses: LicenseGroupingsConnection;
};


export type LicenseGroupingQueriesLicenseGroupingArgs = {
  id: Scalars['ID']['input'];
};


export type LicenseGroupingQueriesLicenseGroupingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kinds: Array<LearnableKind>;
  last?: InputMaybe<Scalars['Int']['input']>;
  licensesAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  licensesConsumed?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type LicenseGroupingQueriesMyLicensesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kinds: Array<LearnableKind>;
  last?: InputMaybe<Scalars['Int']['input']>;
  licensesAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  licensesConsumed?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of items. */
export type LicenseGroupingsConnection = {
  __typename?: 'LicenseGroupingsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LicenseGroupingsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LicenseGroupingsEdge = {
  __typename?: 'LicenseGroupingsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LicenseGrouping;
};

export type LicenseManagementMutations = {
  __typename?: 'LicenseManagementMutations';
  createAccountGroupAssignmentRule?: Maybe<CreateAccountGroupAssignmentRulePayload>;
  createSingleUserAssignmentRule?: Maybe<CreateSingleUserAssignmentRulePayload>;
  deleteAssignmentRule?: Maybe<DeleteAssignmentRulePayload>;
  editAccountGroupAssignmentRule?: Maybe<EditAccountGroupAssignmentRulePayload>;
  editSingleUserAssignmentRule?: Maybe<EditSingleUserAssignmentRulePayload>;
};


export type LicenseManagementMutationsCreateAccountGroupAssignmentRuleArgs = {
  input: CreateAccountGroupAssignmentRuleInput;
};


export type LicenseManagementMutationsCreateSingleUserAssignmentRuleArgs = {
  input: CreateSingleUserAssignmentRuleInput;
};


export type LicenseManagementMutationsDeleteAssignmentRuleArgs = {
  input: DeleteAssignmentRuleInput;
};


export type LicenseManagementMutationsEditAccountGroupAssignmentRuleArgs = {
  input: EditAccountGroupAssignmentRuleInput;
};


export type LicenseManagementMutationsEditSingleUserAssignmentRuleArgs = {
  input: EditSingleUserAssignmentRuleInput;
};

export type LicenseModelMutations = {
  __typename?: 'LicenseModelMutations';
  editLicenseModel?: Maybe<EditLicenseModelPayload>;
};


export type LicenseModelMutationsEditLicenseModelArgs = {
  input: EditLicenseModelInput;
};

export type LicenseProductData = ProductData & {
  __typename?: 'LicenseProductData';
  kind: ProductKind | '%future added value';
  licenseDefinition?: Maybe<LicenseDefinition>;
  licenseDefinitionAmount?: Maybe<Scalars['Int']['output']>;
};

export type LicenseUsage = {
  kind: LicenseUsageKind | '%future added value';
};

export type LicenseUsageFree = LicenseUsage & {
  __typename?: 'LicenseUsageFree';
  kind: LicenseUsageKind | '%future added value';
};

export enum LicenseUsageKind {
  Free = 'Free',
  UsedForAvgsPotentialAnalysis = 'UsedForAVGSPotentialAnalysis',
  UsedForCoaching = 'UsedForCoaching',
  UsedForTree = 'UsedForTree'
}

export type LicenseUsageUsedForCoaching = LicenseUsage & LicenseUsed & {
  __typename?: 'LicenseUsageUsedForCoaching';
  at: Scalars['ZonedDateTIme']['output'];
  forUser?: Maybe<User>;
  kind: LicenseUsageKind | '%future added value';
};

export type LicenseUsageUsedForTree = LicenseUsage & LicenseUsed & {
  __typename?: 'LicenseUsageUsedForTree';
  at: Scalars['ZonedDateTIme']['output'];
  forUser?: Maybe<User>;
  kind: LicenseUsageKind | '%future added value';
};

export type LicenseUsed = {
  at: Scalars['ZonedDateTIme']['output'];
  forUser?: Maybe<User>;
  kind: LicenseUsageKind | '%future added value';
};

export type LicenseUsedForCreatingAvgsPotentialAnalysis = LicenseUsage & LicenseUsed & {
  __typename?: 'LicenseUsedForCreatingAVGSPotentialAnalysis';
  at: Scalars['ZonedDateTIme']['output'];
  forUser?: Maybe<User>;
  kind: LicenseUsageKind | '%future added value';
};

export type LicensesGroupedByDefinition = {
  __typename?: 'LicensesGroupedByDefinition';
  definition?: Maybe<LicenseDefinition>;
  numFree: Scalars['Int']['output'];
  numUsed: Scalars['Int']['output'];
  usedBy: Array<User>;
};

/** A connection to a list of items. */
export type LicensesGroupedByDefinitionConnection = {
  __typename?: 'LicensesGroupedByDefinitionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LicensesGroupedByDefinitionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LicensesGroupedByDefinitionEdge = {
  __typename?: 'LicensesGroupedByDefinitionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LicensesGroupedByDefinition;
};

export type LimitedCartDiscount = Node & {
  __typename?: 'LimitedCartDiscount';
  conditions: Array<LimitedCartDiscountCondition>;
  createdAt: Scalars['ZonedDateTIme']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  productSelectionConfig: ProductSelectionConfig;
  title: Scalars['String']['output'];
};

export type LimitedCartDiscountCondition = {
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: LimitedCartDiscountConditionKindEnum | '%future added value';
};

export enum LimitedCartDiscountConditionKindEnum {
  ProductSelectionCondition = 'ProductSelectionCondition'
}

/** A connection to a list of items. */
export type LimitedCartDiscountConnection = {
  __typename?: 'LimitedCartDiscountConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LimitedCartDiscountEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LimitedCartDiscountEdge = {
  __typename?: 'LimitedCartDiscountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LimitedCartDiscount;
};

export type LoginAsUserJwtInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type LoginAsUserJwtPayload = {
  __typename?: 'LoginAsUserJwtPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  jwtTokens: JwtLoginInformation;
};

export type LoginInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginJwtInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginJwtPayload = {
  __typename?: 'LoginJwtPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  loginResult: LoginResult;
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  accounts: Array<Account>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  groupAssociations: Array<UserGroupAssociation>;
  permissionsInAccounts: Array<AccountPermissions>;
  token: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  extension: LoginResultExtension;
  firstLogin: Scalars['Boolean']['output'];
  jwtTokens: JwtLoginInformation;
};

export type LoginResultExtension = {
  doNotUse: Scalars['String']['output'];
};

export type LogoutJwtInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type LogoutJwtPayload = {
  __typename?: 'LogoutJwtPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Data only accessible by the admin */
export type ManagementAdminSchema = {
  __typename?: 'ManagementAdminSchema';
  AccountGroups: AccountGroupsConnection;
  UsersAdmin: UserConnection;
};


/** Data only accessible by the admin */
export type ManagementAdminSchemaAccountGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type ManagementAdminSchemaUsersAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  alwaysIncludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  filterByName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ManagementQueries = {
  __typename?: 'ManagementQueries';
  Groups: UserInAccountGroupsConnection;
};


export type ManagementQueriesGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type MandateInformation = {
  __typename?: 'MandateInformation';
  acceptanceDateTime: Scalars['ZonedDateTIme']['output'];
  mandateNumber: Scalars['String']['output'];
};

export type MarkMistakesElement = ElementV2 & {
  __typename?: 'MarkMistakesElement';
  elementType: ElementTypeV2 | '%future added value';
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type MarkMistakesInputElementState = ElementState & InputElementState & {
  __typename?: 'MarkMistakesInputElementState';
  checkedMistakeIndices: Array<Scalars['Int']['output']>;
  element: LearnElement;
  kind: ElementStateKind | '%future added value';
};

export type MarkMistakesLearnElement = LearnElement & {
  __typename?: 'MarkMistakesLearnElement';
  elementType: ElementTypeV2 | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  snippets: Array<MarkMistakes_Snippet>;
  title: Scalars['String']['output'];
};

export type MarkMistakesShowAnswerElementState = ElementState & ShowAnswerElementState & {
  __typename?: 'MarkMistakesShowAnswerElementState';
  correctMistakeIndices: Array<Scalars['Int']['output']>;
  element: LearnElement;
  kind: ElementStateKind | '%future added value';
  lastCheckedMistakeIndices?: Maybe<Array<Scalars['Int']['output']>>;
};

export type MarkMistakes_Snippet = {
  __typename?: 'MarkMistakes_Snippet';
  content: Scalars['String']['output'];
};

export type MatrixElement = ElementV2 & {
  __typename?: 'MatrixElement';
  cells: Array<MatrixElementCell>;
  elementType: ElementTypeV2 | '%future added value';
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type MatrixElementCell = {
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: MatrixElementCellKind | '%future added value';
  xIdx: Scalars['Int']['output'];
  yIdx: Scalars['Int']['output'];
};

export type MatrixElementCellAnswer = {
  content: Scalars['String']['output'];
  isCorrect: Scalars['Boolean']['output'];
};

export type MatrixElementCellCorrectAnswer = MatrixElementCellAnswer & {
  __typename?: 'MatrixElementCellCorrectAnswer';
  content: Scalars['String']['output'];
  isCorrect: Scalars['Boolean']['output'];
};

export enum MatrixElementCellKind {
  Answer = 'Answer',
  Display = 'Display'
}

export type MatrixElementCellWrongAnswer = MatrixElementCellAnswer & {
  __typename?: 'MatrixElementCellWrongAnswer';
  content: Scalars['String']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  isCorrect: Scalars['Boolean']['output'];
};

export type MatrixInputElementState = ElementState & InputElementState & {
  __typename?: 'MatrixInputElementState';
  checkedIndices: Array<MatrixLearnElementIndexCell>;
  element: LearnElement;
  kind: ElementStateKind | '%future added value';
};

export type MatrixLearnElement = LearnElement & {
  __typename?: 'MatrixLearnElement';
  cells: Array<MatrixLearnElementCell>;
  elementType: ElementTypeV2 | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type MatrixLearnElementAnswer = {
  __typename?: 'MatrixLearnElementAnswer';
  content: Scalars['String']['output'];
};

export type MatrixLearnElementCell = {
  kind: MatrixElementCellKind | '%future added value';
  xIdx: Scalars['Int']['output'];
  yIdx: Scalars['Int']['output'];
};

export type MatrixLearnElementIndexCell = {
  __typename?: 'MatrixLearnElementIndexCell';
  index: Scalars['Int']['output'];
  xIdx: Scalars['Int']['output'];
  yIdx: Scalars['Int']['output'];
};

export type MatrixShowAnswerElementState = ElementState & ShowAnswerElementState & {
  __typename?: 'MatrixShowAnswerElementState';
  correctIndices: Array<MatrixLearnElementIndexCell>;
  element: LearnElement;
  kind: ElementStateKind | '%future added value';
  lastCheckedIndices?: Maybe<Array<MatrixLearnElementIndexCell>>;
};

export type MicroLearningLicenseDefinitionData = LicenseDefinitionData & {
  __typename?: 'MicroLearningLicenseDefinitionData';
  kind: LicenseDefinitionDataKind | '%future added value';
  name: Scalars['String']['output'];
};

export type MicroLearningLicenseDefinitionDataInput = {
  name: Scalars['String']['input'];
};

export type MicroLearningLicenseGrouping = LicenseGrouping & {
  __typename?: 'MicroLearningLicenseGrouping';
  assignmentRules: Array<AssignmentRule>;
  id: Scalars['ID']['output'];
  kind: LicenseGroupingKind | '%future added value';
  totalLicenseAmount: Scalars['Int']['output'];
  totalLicenseAmountForUser: Scalars['Int']['output'];
  usedLicenseAmount: Scalars['Int']['output'];
  usedLicenseAmountForUser: Scalars['Int']['output'];
};

export type MonthlyOption = {
  __typename?: 'MonthlyOption';
  closingRate: Price;
  downPayment: Price;
  financedAmount: Price;
  monthlyRate: Price;
  paymentMethodTypes: Array<PaymentMethodType | '%future added value'>;
  rateCount: Scalars['Int']['output'];
  totalAmount: Price;
};

export type MonthlySelectedPaymentMethod = SelectedPaymentMethod & {
  __typename?: 'MonthlySelectedPaymentMethod';
  chosenOption: MonthlyOption;
  paymentMethodId: PaymentMethodType | '%future added value';
  selectedPaymentMethodType: SelectedPaymentMethodType | '%future added value';
};

export type MoveChildNodeInput = {
  childToBeMovedId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newParentId: Scalars['ID']['input'];
  newPreviousSiblingId?: InputMaybe<Scalars['ID']['input']>;
};

export type MoveChildNodePayload = {
  __typename?: 'MoveChildNodePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  tree: Tree;
};

export type MoveOrderItemsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderElementId: Scalars['ID']['input'];
  orderItemIds: Array<Scalars['ID']['input']>;
};

export type MoveOrderItemsPayload = {
  __typename?: 'MoveOrderItemsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderElement: OrderElement;
};

export type MultipleChoiceElementV2 = ElementV2 & {
  __typename?: 'MultipleChoiceElementV2';
  answerOptions: Array<AnswerOptionV2>;
  answeringType: AnsweringTypeV2 | '%future added value';
  answeringTypeText?: Maybe<Scalars['String']['output']>;
  elementType: ElementTypeV2 | '%future added value';
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  question: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type MultipleChoiceInputElementState = ElementState & InputElementState & {
  __typename?: 'MultipleChoiceInputElementState';
  checkedAnswerIndices: Array<Scalars['Int']['output']>;
  element: LearnElement;
  kind: ElementStateKind | '%future added value';
};

export type MultipleChoiceLearnElement = LearnElement & {
  __typename?: 'MultipleChoiceLearnElement';
  answerOptions: Array<AnswerOptionWithoutCorrect>;
  answeringType: AnsweringTypeV2 | '%future added value';
  answeringTypeText?: Maybe<Scalars['String']['output']>;
  elementType: ElementTypeV2 | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  question: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type MultipleChoiceShowAnswerElementState = ElementState & ShowAnswerElementState & {
  __typename?: 'MultipleChoiceShowAnswerElementState';
  correctAnswerIndices: Array<Scalars['Int']['output']>;
  element: LearnElement;
  kind: ElementStateKind | '%future added value';
  lastCheckedAnswerIndices?: Maybe<Array<Scalars['Int']['output']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AccountBaseData: AccountBaseDataMutations;
  AccountMemberManagement: AccountMemberManagementMutations;
  /** Data only accessible by the admin */
  Admin: AdminMutationType;
  AsyncContent: AsyncContentMutations;
  Auth: AuthMutations;
  AvgsPotentialAnalysis: AvgsPotentialAnalysisMutations;
  Billing: BillingMutations;
  Coaching: CoachingMutations;
  ELearning: ELearningMutations;
  Learn: LearnMutations;
  LearnV2: LearnV2Mutations;
  LicenseManagement: LicenseManagementMutations;
  LicenseModel: LicenseModelMutations;
  Notification: NotificationMutations;
  Placement: PlacementMutations;
  PotentialAnalysis: PotentialAnalysisMutations;
  Reports: ReportsMutations;
  /** Data partaining to the current user */
  Viewer: ViewerMutationType;
  Vocab: VocabMutations;
};

export type NegativeBlockPermanentlyRestartIfFailedContentConfigResult = NegativeRestartIfFailedContentConfigResult & RestartIfFailedContentConfigResult & {
  __typename?: 'NegativeBlockPermanentlyRestartIfFailedContentConfigResult';
  canBeRestarted: Scalars['Boolean']['output'];
  configType: RestartIfFailedContentConfigType | '%future added value';
};

export type NegativeBlockTemporarilyRestartIfFailedContentConfigResult = NegativeRestartIfFailedContentConfigResult & RestartIfFailedContentConfigResult & {
  __typename?: 'NegativeBlockTemporarilyRestartIfFailedContentConfigResult';
  blockedUntil: Scalars['ZonedDateTIme']['output'];
  canBeRestarted: Scalars['Boolean']['output'];
  configType: RestartIfFailedContentConfigType | '%future added value';
};

export type NegativeCanNotRestartIfFailedContentConfigResult = NegativeRestartIfFailedContentConfigResult & RestartIfFailedContentConfigResult & {
  __typename?: 'NegativeCanNotRestartIfFailedContentConfigResult';
  canBeRestarted: Scalars['Boolean']['output'];
  configType: RestartIfFailedContentConfigType | '%future added value';
};

export type NegativeRestartIfFailedContentConfigResult = {
  canBeRestarted: Scalars['Boolean']['output'];
  configType: RestartIfFailedContentConfigType | '%future added value';
};

export type NoPodcastSourceV2 = PodcastSourceV2 & {
  __typename?: 'NoPodcastSourceV2';
  sourceType: PodcastSourceTypeV2 | '%future added value';
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
};

export type NotAfterDateTimeVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'NotAfterDateTimeVisibilityTreeConfig';
  configType: VisibilityTreeConfigType | '%future added value';
  dateTime: Scalars['ZonedDateTIme']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type NotBooked = BookingInterface & {
  __typename?: 'NotBooked';
  kind: BookingKind | '%future added value';
};

export type NotContentNodeContentNodeAdvancementResult = ContentNodeAdvancementResult & {
  __typename?: 'NotContentNodeContentNodeAdvancementResult';
  status: ContentNodeAdvancementStatus | '%future added value';
};

export type NotVisibleViewerTreeState = ViewerTreeState & {
  __typename?: 'NotVisibleViewerTreeState';
  kind: ViewerTreeStateKind | '%future added value';
  reasonConfigTypes: Array<VisibilityTreeConfigType | '%future added value'>;
};

/** Data only accessible by the admin */
export type NotificationAdminMutationSchema = {
  __typename?: 'NotificationAdminMutationSchema';
  createPersonalizedNotificationTemplate?: Maybe<CreatePersonalizedNotificationTemplatePayload>;
  deletePersonalizedNotificationTemplate?: Maybe<DeletePersonalizedNotificationTemplatePayload>;
  updatePersonalizedNotificationTemplate?: Maybe<UpdatePersonalizedNotificationTemplatePayload>;
};


/** Data only accessible by the admin */
export type NotificationAdminMutationSchemaCreatePersonalizedNotificationTemplateArgs = {
  input: CreatePersonalizedNotificationTemplateInput;
};


/** Data only accessible by the admin */
export type NotificationAdminMutationSchemaDeletePersonalizedNotificationTemplateArgs = {
  input: DeletePersonalizedNotificationTemplateInput;
};


/** Data only accessible by the admin */
export type NotificationAdminMutationSchemaUpdatePersonalizedNotificationTemplateArgs = {
  input: UpdatePersonalizedNotificationTemplateInput;
};

/** Data only accessible by the admin */
export type NotificationAdminSchema = {
  __typename?: 'NotificationAdminSchema';
  AvailableSystemTemplates: Array<NotificationTemplate>;
  PersonalizedNotificationTemplates: PersonalizedNotificationTemplatesConnection;
};


/** Data only accessible by the admin */
export type NotificationAdminSchemaAvailableSystemTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type NotificationAdminSchemaPersonalizedNotificationTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type NotificationMutations = {
  __typename?: 'NotificationMutations';
  registerForNotification?: Maybe<RegisterForNotificationPayload>;
};


export type NotificationMutationsRegisterForNotificationArgs = {
  input: RegisterForNotificationInput;
};

export enum NotificationServiceType {
  Apns = 'Apns',
  Gcm = 'Gcm'
}

export type NotificationTemplate = {
  __typename?: 'NotificationTemplate';
  key: Scalars['String']['output'];
  message: Scalars['String']['output'];
  title: Scalars['String']['output'];
  variables: Array<Scalars['String']['output']>;
};

export type OneTimeSelectedPaymentMethod = SelectedPaymentMethod & {
  __typename?: 'OneTimeSelectedPaymentMethod';
  paymentMethodId: PaymentMethodType | '%future added value';
  selectedPaymentMethodType: SelectedPaymentMethodType | '%future added value';
  stripeData?: Maybe<StripeData>;
};

export type OneToOneCoachingSetting = CoachingSetting & {
  __typename?: 'OneToOneCoachingSetting';
  kind: CoachingSettingKind | '%future added value';
};

export type OnlyAzavAccountVisibilityCoachingConfig = VisibilityCoachingConfig & {
  __typename?: 'OnlyAZAVAccountVisibilityCoachingConfig';
  configType: VisibilityCoachingConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type OnlyAzavAccountVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'OnlyAZAVAccountVisibilityTreeConfig';
  configType: VisibilityTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type OnlyAdminsVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'OnlyAdminsVisibilityTreeConfig';
  configType: VisibilityTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type OnlyBusinessAccountVisibilityCoachingConfig = VisibilityCoachingConfig & {
  __typename?: 'OnlyBusinessAccountVisibilityCoachingConfig';
  configType: VisibilityCoachingConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type OnlyBusinessAccountVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'OnlyBusinessAccountVisibilityTreeConfig';
  configType: VisibilityTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type OnlyEditorsVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'OnlyEditorsVisibilityTreeConfig';
  configType: VisibilityTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type OnlyIfTreeStateVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'OnlyIfTreeStateVisibilityTreeConfig';
  configType: VisibilityTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type OnlyPermissionsImplVisibilityTreeConfig = VisibilityTreeConfig & {
  __typename?: 'OnlyPermissionsImplVisibilityTreeConfig';
  configType: VisibilityTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type OnlyWithLicenseVisibilityCoachingConfig = VisibilityCoachingConfig & {
  __typename?: 'OnlyWithLicenseVisibilityCoachingConfig';
  configType: VisibilityCoachingConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type Order = Node & {
  __typename?: 'Order';
  allowedPaymentMethods: Array<PaymentMethodType | '%future added value'>;
  billingDetails?: Maybe<BillingDetails>;
  cart?: Maybe<Cart>;
  createdAt: Scalars['ZonedDateTIme']['output'];
  creditNoteData?: Maybe<CreditNoteData>;
  extensions: Array<OrderExtension>;
  history: OrderHistoriesConnection;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  invoiceData?: Maybe<InvoiceData>;
  paymentData?: Maybe<PaymentProviderData>;
  purchaser?: Maybe<Purchaser>;
  selectedPaymentDate?: Maybe<Scalars['ZonedDateTIme']['output']>;
  selectedPaymentMethod?: Maybe<SelectedPaymentMethod>;
  status: OrderStatus | '%future added value';
};


export type OrderHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderCreationUpdate = HistoryEventInterface & {
  __typename?: 'OrderCreationUpdate';
  kind: HistoryEventType | '%future added value';
};

export type OrderElement = ElementV2 & {
  __typename?: 'OrderElement';
  answeringTypeText?: Maybe<Scalars['String']['output']>;
  elementType: ElementTypeV2 | '%future added value';
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  orderItems: Array<OrderItem>;
  title: Scalars['String']['output'];
};

export type OrderExtension = {
  kind: OrderExtensionKind | '%future added value';
};

export enum OrderExtensionKind {
  Empty = 'Empty'
}

/** A connection to a list of items. */
export type OrderHistoriesConnection = {
  __typename?: 'OrderHistoriesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OrderHistoriesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OrderHistoriesEdge = {
  __typename?: 'OrderHistoriesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: OrderHistory;
};

export type OrderHistory = {
  __typename?: 'OrderHistory';
  createdAt: Scalars['ZonedDateTIme']['output'];
  event: HistoryEventInterface;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  orderId: Scalars['ID']['output'];
  status: OrderStatus | '%future added value';
};

export type OrderIhkCertificateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootId: Scalars['ID']['input'];
  userData: IhkCertificateOrderUserDataInput;
};

export type OrderIhkCertificatePayload = {
  __typename?: 'OrderIHKCertificatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  root: LearnOpportunityV2;
};

export type OrderInputElementState = ElementState & InputElementState & {
  __typename?: 'OrderInputElementState';
  element: LearnElement;
  kind: ElementStateKind | '%future added value';
  selectedOrder: Array<Scalars['ID']['output']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type OrderLearnElement = LearnElement & {
  __typename?: 'OrderLearnElement';
  answeringTypeText?: Maybe<Scalars['String']['output']>;
  elementType: ElementTypeV2 | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  orderItems: Array<OrderItem>;
  title: Scalars['String']['output'];
};

export type OrderShowAnswerElementState = ElementState & ShowAnswerElementState & {
  __typename?: 'OrderShowAnswerElementState';
  correctOrder: Array<Scalars['ID']['output']>;
  element: LearnElement;
  kind: ElementStateKind | '%future added value';
  lastSelectedOrder: Array<Scalars['ID']['output']>;
};

export enum OrderStatus {
  HasBillingDetails = 'HasBillingDetails',
  HasCart = 'HasCart',
  HasPaymentDetails = 'HasPaymentDetails',
  PaymentReceived = 'PaymentReceived',
  Purchased = 'Purchased',
  Transient = 'Transient'
}

/** A connection to a list of items. */
export type OrdersConnection = {
  __typename?: 'OrdersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OrdersEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OrdersEdge = {
  __typename?: 'OrdersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Order;
};

export type PackageUnlock = {
  __typename?: 'PackageUnlock';
  unlockedAt: Scalars['ZonedDateTIme']['output'];
  wordPackage?: Maybe<WordPackage>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Participant = {
  __typename?: 'Participant';
  participationStatus: ParticipationStatus | '%future added value';
  user?: Maybe<User>;
};

export type ParticipationCertificate = {
  __typename?: 'ParticipationCertificate';
  html: Scalars['String']['output'];
  name: Scalars['String']['output'];
  variables: Array<Scalars['String']['output']>;
};

export type ParticipationCertificateReward = Reward & {
  __typename?: 'ParticipationCertificateReward';
  data: ParticipationCertificateRewardData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: RewardKind | '%future added value';
  superId: Scalars['ID']['output'];
};

export type ParticipationCertificateRewardData = {
  __typename?: 'ParticipationCertificateRewardData';
  html: Scalars['String']['output'];
  name: Scalars['String']['output'];
  variables: Array<ParticipationCertificateRewardVariables | '%future added value'>;
};

export type ParticipationCertificateRewardDataInput = {
  html: Scalars['String']['input'];
  name: Scalars['String']['input'];
  variables: Array<ParticipationCertificateRewardDataVariableInput>;
};

export type ParticipationCertificateRewardDataVariableInput = {
  key: ParticipationCertificateRewardVariables | '%future added value';
  value: Scalars['String']['input'];
};

export enum ParticipationCertificateRewardVariables {
  CertificationName = 'certificationName',
  Description = 'description',
  FirstName = 'firstName',
  LastName = 'lastName',
  PartnerName = 'partnerName',
  ShortDesc = 'shortDesc',
  SubmissionDate = 'submissionDate'
}

export type ParticipationCertificate_ErrorOccurredRewardResult = RewardResult & {
  __typename?: 'ParticipationCertificate_ErrorOccurredRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type ParticipationCertificate_NotPassedRewardResult = RewardResult & {
  __typename?: 'ParticipationCertificate_NotPassedRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type ParticipationCertificate_ParticipationCertificateRewardResult = RewardResult & {
  __typename?: 'ParticipationCertificate_ParticipationCertificateRewardResult';
  data: ParticipationCertificate_ParticipationCertificateRewardResultData;
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type ParticipationCertificate_ParticipationCertificateRewardResultData = {
  __typename?: 'ParticipationCertificate_ParticipationCertificateRewardResultData';
  file?: Maybe<File>;
  name: Scalars['String']['output'];
};

export enum ParticipationStatus {
  Absent = 'Absent',
  AbsentExcused = 'AbsentExcused',
  NotConfirmed = 'NotConfirmed',
  Participated = 'Participated'
}

export type PassContentConfig = {
  configType: PassContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum PassContentConfigType {
  PassContentAlways = 'PassContent_Always',
  PassContentIhkFlow = 'PassContent_IHKFlow'
}

export type PassedAsyncContentSubmissionDefinition = AsyncContentSubmissionDefinition & ContentSubmissionDefinition & FinishedAsyncContentSubmissionDefinitionInterface & {
  __typename?: 'PassedAsyncContentSubmissionDefinition';
  contentKind: ContentKind | '%future added value';
  element?: Maybe<AsyncLearnElement>;
  rewardResults: Array<RewardResult>;
  status: ContentSubmissionStatus | '%future added value';
};

export type PassedELearningContentSubmissionDefinition = ContentSubmissionDefinition & ELearningContentSubmissionDefinition & FinishedELearningContentSubmissionDefinitionInterface & {
  __typename?: 'PassedELearningContentSubmissionDefinition';
  contentKind: ContentKind | '%future added value';
  progress: ELearningContentSubmissionProgress;
  relativeProgress: ELearningContentSubmissionRelativeProgress;
  rewardResults: Array<RewardResult>;
  status: ContentSubmissionStatus | '%future added value';
};

export type PayOrderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  iban?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};

export type PayOrderPayload = {
  __typename?: 'PayOrderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type PayOrderViaIapInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  receipt: Scalars['String']['input'];
  targetSystem: TargetSystem | '%future added value';
};

export type PayOrderViaIapPayload = {
  __typename?: 'PayOrderViaIAPPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type PaymentInProcessUpdate = HistoryEventInterface & {
  __typename?: 'PaymentInProcessUpdate';
  kind: HistoryEventType | '%future added value';
};

export enum PaymentMethodType {
  Card = 'Card',
  Giropay = 'Giropay',
  IapApple = 'IapApple',
  IapGoogle = 'IapGoogle',
  InvoicePartner = 'InvoicePartner',
  InvoiceTk = 'InvoiceTk',
  Klarna = 'Klarna',
  MonthlyPartner = 'MonthlyPartner',
  MonthlyTk = 'MonthlyTk',
  Paypal = 'Paypal',
  Sepa = 'Sepa',
  Sofort = 'Sofort'
}

export type PaymentMethodUpdate = HistoryEventInterface & {
  __typename?: 'PaymentMethodUpdate';
  kind: HistoryEventType | '%future added value';
};

export type PaymentProviderData = {
  dataType: PaymentProviderDataType | '%future added value';
  paymentMethod: PaymentMethodType | '%future added value';
};

export enum PaymentProviderDataType {
  AppleIap = 'AppleIap',
  Default = 'Default',
  GoogleIap = 'GoogleIap',
  Sepa = 'Sepa',
  Stripe = 'Stripe',
  StripeSepa = 'StripeSepa'
}

export enum PaymentType {
  EmployerInvoice = 'EmployerInvoice',
  MonthlyPayment = 'MonthlyPayment',
  OneTimePayment = 'OneTimePayment'
}

export type PercentageProductSelectionConfig = ProductSelectionConfig & {
  __typename?: 'PercentageProductSelectionConfig';
  kind: ProductSelectionConfigKindEnum | '%future added value';
  value: Scalars['Int']['output'];
};

export enum Permission {
  AccountPermissionAvgsPotentialAnalysisIsAvgsAccount = 'AccountPermission_AVGSPotentialAnalysis_IsAVGSAccount',
  AccountPermissionAzavAdminIsAzavAccount = 'AccountPermission_AZAVAdmin_IsAZAVAccount',
  AccountPermissionAccountMemberManagementCanInviteOrAddUsersToUserInAccountGroups = 'AccountPermission_AccountMemberManagement_CanInviteOrAddUsersToUserInAccountGroups',
  AccountPermissionAuthIsBusinessAccount = 'AccountPermission_Auth_IsBusinessAccount',
  AccountPermissionAuthUsePlacement = 'AccountPermission_Auth_usePlacement',
  AccountPermissionCoachingCoachProfileAdminIsCoachAccount = 'AccountPermission_CoachingCoachProfileAdmin_IsCoachAccount',
  AccountPermissionSystemRoot = 'AccountPermission_System_Root',
  UserInAccountPermissionAvgsPotentialAnalysisIsAvgsAdmin = 'UserInAccountPermission_AVGSPotentialAnalysis_IsAVGSAdmin',
  UserInAccountPermissionAvgsPotentialAnalysisIsAvgsCoach = 'UserInAccountPermission_AVGSPotentialAnalysis_IsAVGSCoach',
  UserInAccountPermissionAvgsPotentialAnalysisModifyAdmin = 'UserInAccountPermission_AVGSPotentialAnalysis_ModifyAdmin',
  UserInAccountPermissionAvgsPotentialAnalysisReadAdmin = 'UserInAccountPermission_AVGSPotentialAnalysis_ReadAdmin',
  UserInAccountPermissionAzavAdminModify = 'UserInAccountPermission_AZAVAdmin_Modify',
  UserInAccountPermissionAzavAdminRead = 'UserInAccountPermission_AZAVAdmin_Read',
  UserInAccountPermissionAsyncElementTaskAdminModify = 'UserInAccountPermission_AsyncElementTaskAdmin_Modify',
  UserInAccountPermissionAsyncElementTaskAdminRead = 'UserInAccountPermission_AsyncElementTaskAdmin_Read',
  UserInAccountPermissionAuthAdminMinimalRead = 'UserInAccountPermission_AuthAdmin_MinimalRead',
  UserInAccountPermissionAuthAdminModify = 'UserInAccountPermission_AuthAdmin_Modify',
  UserInAccountPermissionAuthAdminRead = 'UserInAccountPermission_AuthAdmin_Read',
  UserInAccountPermissionAuthModify = 'UserInAccountPermission_Auth_Modify',
  UserInAccountPermissionAuthRead = 'UserInAccountPermission_Auth_Read',
  UserInAccountPermissionCachingAdminModify = 'UserInAccountPermission_CachingAdmin_Modify',
  UserInAccountPermissionCoachBillingAdminRead = 'UserInAccountPermission_CoachBillingAdmin_Read',
  UserInAccountPermissionCoachFeedbackRead = 'UserInAccountPermission_CoachFeedback_Read',
  UserInAccountPermissionCoachingAvailabilityAdminModifyAvailability = 'UserInAccountPermission_CoachingAvailabilityAdmin_ModifyAvailability',
  UserInAccountPermissionCoachingAvailabilityAdminReadAvailability = 'UserInAccountPermission_CoachingAvailabilityAdmin_ReadAvailability',
  UserInAccountPermissionCoachingCoachProfileAdminModifyCoachProfiles = 'UserInAccountPermission_CoachingCoachProfileAdmin_ModifyCoachProfiles',
  UserInAccountPermissionCoachingCoachProfileAdminReadCoachProfiles = 'UserInAccountPermission_CoachingCoachProfileAdmin_ReadCoachProfiles',
  UserInAccountPermissionCoachingOfferAdminModify = 'UserInAccountPermission_CoachingOfferAdmin_Modify',
  UserInAccountPermissionCoachingOfferAdminRead = 'UserInAccountPermission_CoachingOfferAdmin_Read',
  UserInAccountPermissionContractPartnerAdminModify = 'UserInAccountPermission_ContractPartnerAdmin_Modify',
  UserInAccountPermissionContractPartnerAdminRead = 'UserInAccountPermission_ContractPartnerAdmin_Read',
  UserInAccountPermissionCustomerFeedbackModify = 'UserInAccountPermission_CustomerFeedback_Modify',
  UserInAccountPermissionCustomerFeedbackRead = 'UserInAccountPermission_CustomerFeedback_Read',
  UserInAccountPermissionDiscountAdminModify = 'UserInAccountPermission_DiscountAdmin_Modify',
  UserInAccountPermissionDiscountAdminRead = 'UserInAccountPermission_DiscountAdmin_Read',
  UserInAccountPermissionEmailTemplates = 'UserInAccountPermission_Email_Templates',
  UserInAccountPermissionExternalLicenseAdminModify = 'UserInAccountPermission_ExternalLicenseAdmin_Modify',
  UserInAccountPermissionExternalLicenseAdminRead = 'UserInAccountPermission_ExternalLicenseAdmin_Read',
  UserInAccountPermissionFeatureToggleAdminModify = 'UserInAccountPermission_FeatureToggleAdmin_Modify',
  UserInAccountPermissionFeatureToggleAdminRead = 'UserInAccountPermission_FeatureToggleAdmin_Read',
  UserInAccountPermissionFilesDelete = 'UserInAccountPermission_Files_Delete',
  UserInAccountPermissionGenerateCartLinkAdminModify = 'UserInAccountPermission_GenerateCartLinkAdmin_Modify',
  UserInAccountPermissionInstructorsCreateInstructors = 'UserInAccountPermission_Instructors_CreateInstructors',
  UserInAccountPermissionInstructorsDeleteInstructors = 'UserInAccountPermission_Instructors_DeleteInstructors',
  UserInAccountPermissionInstructorsReadInstructors = 'UserInAccountPermission_Instructors_ReadInstructors',
  UserInAccountPermissionInstructorsUpdateInstructors = 'UserInAccountPermission_Instructors_UpdateInstructors',
  UserInAccountPermissionLearnStatesReadLearnStates = 'UserInAccountPermission_LearnStates_ReadLearnStates',
  UserInAccountPermissionLearnableAdminModify = 'UserInAccountPermission_LearnableAdmin_Modify',
  UserInAccountPermissionLearnableAdminRead = 'UserInAccountPermission_LearnableAdmin_Read',
  UserInAccountPermissionLicenseAdminModify = 'UserInAccountPermission_LicenseAdmin_Modify',
  UserInAccountPermissionLicenseAdminRead = 'UserInAccountPermission_LicenseAdmin_Read',
  UserInAccountPermissionLicenseDefinitionAdminModify = 'UserInAccountPermission_LicenseDefinitionAdmin_Modify',
  UserInAccountPermissionLicenseDefinitionAdminRead = 'UserInAccountPermission_LicenseDefinitionAdmin_Read',
  UserInAccountPermissionLimitedCartDiscountAdminModify = 'UserInAccountPermission_LimitedCartDiscountAdmin_Modify',
  UserInAccountPermissionLimitedCartDiscountAdminRead = 'UserInAccountPermission_LimitedCartDiscountAdmin_Read',
  UserInAccountPermissionManagementManagement = 'UserInAccountPermission_Management_Management',
  UserInAccountPermissionNodesCreateNodes = 'UserInAccountPermission_Nodes_CreateNodes',
  UserInAccountPermissionNodesDeleteNodes = 'UserInAccountPermission_Nodes_DeleteNodes',
  UserInAccountPermissionNodesPublishNodes = 'UserInAccountPermission_Nodes_PublishNodes',
  UserInAccountPermissionNodesReadNodes = 'UserInAccountPermission_Nodes_ReadNodes',
  UserInAccountPermissionNodesUpdateNodes = 'UserInAccountPermission_Nodes_UpdateNodes',
  UserInAccountPermissionOrderAdminModify = 'UserInAccountPermission_OrderAdmin_Modify',
  UserInAccountPermissionOrderAdminRead = 'UserInAccountPermission_OrderAdmin_Read',
  UserInAccountPermissionPlacementContactPersonAccess = 'UserInAccountPermission_PlacementContactPerson_Access',
  UserInAccountPermissionProductAdminModify = 'UserInAccountPermission_ProductAdmin_Modify',
  UserInAccountPermissionProductAdminRead = 'UserInAccountPermission_ProductAdmin_Read',
  UserInAccountPermissionReportAdminModify = 'UserInAccountPermission_ReportAdmin_Modify',
  UserInAccountPermissionReportAdminRead = 'UserInAccountPermission_ReportAdmin_Read',
  UserInAccountPermissionSettingsAdminModify = 'UserInAccountPermission_SettingsAdmin_Modify',
  UserInAccountPermissionSettingsAdminRead = 'UserInAccountPermission_SettingsAdmin_Read',
  UserInAccountPermissionSubmissionsReadSubmissions = 'UserInAccountPermission_Submissions_ReadSubmissions',
  UserInAccountPermissionSystemOwner = 'UserInAccountPermission_System_Owner',
  UserInAccountPermissionTagAdminModify = 'UserInAccountPermission_TagAdmin_Modify',
  UserInAccountPermissionTagAdminRead = 'UserInAccountPermission_TagAdmin_Read',
  UserInAccountPermissionTagAdminSelect = 'UserInAccountPermission_TagAdmin_Select',
  UserInAccountPermissionTagsCreateTags = 'UserInAccountPermission_Tags_CreateTags',
  UserInAccountPermissionTagsDeleteTags = 'UserInAccountPermission_Tags_DeleteTags',
  UserInAccountPermissionTagsReadTags = 'UserInAccountPermission_Tags_ReadTags',
  UserInAccountPermissionTagsUpdateTags = 'UserInAccountPermission_Tags_UpdateTags',
  UserInAccountPermissionTreeStateAdminModify = 'UserInAccountPermission_TreeStateAdmin_Modify',
  UserInAccountPermissionTreeStateAdminRead = 'UserInAccountPermission_TreeStateAdmin_Read',
  UserInAccountPermissionTrendModify = 'UserInAccountPermission_Trend_Modify',
  UserInAccountPermissionTrendRead = 'UserInAccountPermission_Trend_Read',
  UserInAccountPermissionTriggerActionAdminModify = 'UserInAccountPermission_TriggerActionAdmin_Modify',
  UserInAccountPermissionTriggerActionAdminRead = 'UserInAccountPermission_TriggerActionAdmin_Read',
  UserInAccountPermissionVimeoVideoSourceAdminModify = 'UserInAccountPermission_VimeoVideoSourceAdmin_Modify',
  UserInAccountPermissionVimeoVideoSourceAdminRead = 'UserInAccountPermission_VimeoVideoSourceAdmin_Read',
  UserInAccountPermissionVocabAdminModifyWordPackages = 'UserInAccountPermission_VocabAdmin_ModifyWordPackages',
  UserInAccountPermissionVocabAdminReadWordPackages = 'UserInAccountPermission_VocabAdmin_ReadWordPackages'
}

export type PersonalizedEmailTemplate = Node & {
  __typename?: 'PersonalizedEmailTemplate';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  template: EmailTemplate;
};

export type PersonalizedEmailTemplateInput = {
  body: Scalars['String']['input'];
  key: Scalars['String']['input'];
  previewText: Scalars['String']['input'];
  subject: Scalars['String']['input'];
  variables: Array<Scalars['String']['input']>;
};

/** A connection to a list of items. */
export type PersonalizedEmailTemplatesConnection = {
  __typename?: 'PersonalizedEmailTemplatesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonalizedEmailTemplatesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PersonalizedEmailTemplatesEdge = {
  __typename?: 'PersonalizedEmailTemplatesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PersonalizedEmailTemplate;
};

export type PersonalizedNotificationTemplate = Node & {
  __typename?: 'PersonalizedNotificationTemplate';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  template: NotificationTemplate;
};

export type PersonalizedNotificationTemplateInput = {
  key: Scalars['String']['input'];
  message: Scalars['String']['input'];
  title: Scalars['String']['input'];
  variables: Array<Scalars['String']['input']>;
};

/** A connection to a list of items. */
export type PersonalizedNotificationTemplatesConnection = {
  __typename?: 'PersonalizedNotificationTemplatesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonalizedNotificationTemplatesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PersonalizedNotificationTemplatesEdge = {
  __typename?: 'PersonalizedNotificationTemplatesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PersonalizedNotificationTemplate;
};

export type PingQueries = {
  __typename?: 'PingQueries';
  /** A simple endpoint to find out if the API is reachable */
  ping: Scalars['String']['output'];
};

export type PlacementMutations = {
  __typename?: 'PlacementMutations';
  addMatchingPlacement?: Maybe<AddMatchingPlacementPayload>;
  createClickOutByLinkId?: Maybe<CreateClickOutByLinkIdPayload>;
  createClickOutForUserOrBusiness?: Maybe<CreateClickOutForUserOrBusinessPayload>;
  grantPlacementPermissionAndRedirect?: Maybe<GrantPlacementPermissionAndRedirectPayload>;
  informAboutSuccessfulPlacement?: Maybe<InformAboutSuccessfulPlacementPayload>;
  sendAskCompanyIfContractWasConcluded?: Maybe<SendAskCompanyIfContractWasConcludedPayload>;
  sendCompanyIsInterestedInUserProfile?: Maybe<SendCompanyIsInterestedInUserProfilePayload>;
  sendInformAboutAcceptedMatching?: Maybe<SendInformAboutAcceptedMatchingPayload>;
  sendInformAboutAvailableDossier?: Maybe<SendInformAboutAvailableDossierPayload>;
  sendInformAboutClosedProfileAfterMatching?: Maybe<SendInformAboutClosedProfileAfterMatchingPayload>;
  sendMatchingResultsAvailableToBusiness?: Maybe<SendMatchingResultsAvailableToBusinessPayload>;
  sendMatchingResultsAvailableToUser?: Maybe<SendMatchingResultsAvailableToUserPayload>;
  sendRemindCompanyToPayFee?: Maybe<SendRemindCompanyToPayFeePayload>;
  sendReminderForInviteToSecondInterview?: Maybe<SendReminderForInviteToSecondInterviewPayload>;
  sendReminderForSecondInterviewToUser?: Maybe<SendReminderForSecondInterviewToUserPayload>;
  sendSummaryForFirstInterviewToContactPerson?: Maybe<SendSummaryForFirstInterviewToContactPersonPayload>;
  sendSummaryForFirstInterviewToUser?: Maybe<SendSummaryForFirstInterviewToUserPayload>;
  sendSummaryForSecondInterviewToContactPerson?: Maybe<SendSummaryForSecondInterviewToContactPersonPayload>;
  sendSummaryForSecondInterviewToUser?: Maybe<SendSummaryForSecondInterviewToUserPayload>;
  sendUserIsInterestedForJobListing?: Maybe<SendUserIsInterestedForJobListingPayload>;
};


export type PlacementMutationsAddMatchingPlacementArgs = {
  input: AddMatchingPlacementInput;
};


export type PlacementMutationsCreateClickOutByLinkIdArgs = {
  input: CreateClickOutByLinkIdInput;
};


export type PlacementMutationsCreateClickOutForUserOrBusinessArgs = {
  input: CreateClickOutForUserOrBusinessInput;
};


export type PlacementMutationsGrantPlacementPermissionAndRedirectArgs = {
  input: GrantPlacementPermissionAndRedirectInput;
};


export type PlacementMutationsInformAboutSuccessfulPlacementArgs = {
  input: InformAboutSuccessfulPlacementInput;
};


export type PlacementMutationsSendAskCompanyIfContractWasConcludedArgs = {
  input: SendAskCompanyIfContractWasConcludedInput;
};


export type PlacementMutationsSendCompanyIsInterestedInUserProfileArgs = {
  input: SendCompanyIsInterestedInUserProfileInput;
};


export type PlacementMutationsSendInformAboutAcceptedMatchingArgs = {
  input: SendInformAboutAcceptedMatchingInput;
};


export type PlacementMutationsSendInformAboutAvailableDossierArgs = {
  input: SendInformAboutAvailableDossierInput;
};


export type PlacementMutationsSendInformAboutClosedProfileAfterMatchingArgs = {
  input: SendInformAboutClosedProfileAfterMatchingInput;
};


export type PlacementMutationsSendMatchingResultsAvailableToBusinessArgs = {
  input: SendMatchingResultsAvailableToBusinessInput;
};


export type PlacementMutationsSendMatchingResultsAvailableToUserArgs = {
  input: SendMatchingResultsAvailableToUserInput;
};


export type PlacementMutationsSendRemindCompanyToPayFeeArgs = {
  input: SendRemindCompanyToPayFeeInput;
};


export type PlacementMutationsSendReminderForInviteToSecondInterviewArgs = {
  input: SendReminderForInviteToSecondInterviewInput;
};


export type PlacementMutationsSendReminderForSecondInterviewToUserArgs = {
  input: SendReminderForSecondInterviewToUserInput;
};


export type PlacementMutationsSendSummaryForFirstInterviewToContactPersonArgs = {
  input: SendSummaryForFirstInterviewToContactPersonInput;
};


export type PlacementMutationsSendSummaryForFirstInterviewToUserArgs = {
  input: SendSummaryForFirstInterviewToUserInput;
};


export type PlacementMutationsSendSummaryForSecondInterviewToContactPersonArgs = {
  input: SendSummaryForSecondInterviewToContactPersonInput;
};


export type PlacementMutationsSendSummaryForSecondInterviewToUserArgs = {
  input: SendSummaryForSecondInterviewToUserInput;
};


export type PlacementMutationsSendUserIsInterestedForJobListingArgs = {
  input: SendUserIsInterestedForJobListingInput;
};

export type PlacementProductData = ProductData & {
  __typename?: 'PlacementProductData';
  kind: ProductKind | '%future added value';
};

export type PlacementQueries = {
  __typename?: 'PlacementQueries';
  PlacementBusinessBaseData: BusinessBaseDataOutput;
  permissionCartClickOut: Scalars['String']['output'];
};


export type PlacementQueriesPlacementBusinessBaseDataArgs = {
  accountId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['ID']['input'];
};


export type PlacementQueriesPermissionCartClickOutArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PodcastElementV2 = ElementV2 & {
  __typename?: 'PodcastElementV2';
  durationInSeconds?: Maybe<Scalars['Int']['output']>;
  elementType: ElementTypeV2 | '%future added value';
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  podcastSource: PodcastSourceV2;
  releasedFileOpt?: Maybe<ReleasedFileV2>;
  releasedSubtitlesOpt?: Maybe<ReleasedSubtitlesV2>;
  title: Scalars['String']['output'];
};

export type PodcastLearnElement = LearnElement & {
  __typename?: 'PodcastLearnElement';
  durationInSeconds?: Maybe<Scalars['Int']['output']>;
  elementType: ElementTypeV2 | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  podcastSource: PodcastSourceV2;
  releasedFileOpt?: Maybe<ReleasedFileV2>;
  releasedSubtitlesOpt?: Maybe<ReleasedSubtitlesV2>;
  title: Scalars['String']['output'];
};

export enum PodcastSourceTypeV2 {
  None = 'none',
  Podigee = 'podigee',
  Vimeo = 'vimeo'
}

export type PodcastSourceV2 = {
  sourceType: PodcastSourceTypeV2 | '%future added value';
};

export type PodcastWithTimestamp = ElementV2 & {
  __typename?: 'PodcastWithTimestamp';
  elementType: ElementTypeV2 | '%future added value';
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  podcastFile?: Maybe<File>;
  timestampsWithImage: Array<TimestampWithImage>;
  title: Scalars['String']['output'];
};

export type PodcastWithTimestampLearnElement = LearnElement & {
  __typename?: 'PodcastWithTimestampLearnElement';
  duration: Scalars['Int']['output'];
  elementType: ElementTypeV2 | '%future added value';
  end: Scalars['Int']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  podcastFile: File;
  start: Scalars['Int']['output'];
  timestampsWithImage: Array<TimestampWithImage>;
  title: Scalars['String']['output'];
};

export type PodigeePodcastSourceV2 = PodcastSourceV2 & {
  __typename?: 'PodigeePodcastSourceV2';
  lengthInSeconds: Scalars['Int']['output'];
  podigeeUrl: Scalars['String']['output'];
  sourceType: PodcastSourceTypeV2 | '%future added value';
};

export type PositiveRestartIfFailedContentConfigResult = RestartIfFailedContentConfigResult & {
  __typename?: 'PositiveRestartIfFailedContentConfigResult';
  canBeRestarted: Scalars['Boolean']['output'];
  configType: RestartIfFailedContentConfigType | '%future added value';
};

export type PotentialAnalysisAnswerOption = {
  answerOptionId: Scalars['Int']['output'];
};

/** A connection to a list of items. */
export type PotentialAnalysisConnection = {
  __typename?: 'PotentialAnalysisConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PotentialAnalysisEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PotentialAnalysisEdge = {
  __typename?: 'PotentialAnalysisEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AvgsPotentialAnalysis_PotentialAnalysis;
};

export type PotentialAnalysisFreeTextAnswerOptionInput = {
  answerOptionId: Scalars['Int']['input'];
  isFreeText: Scalars['Boolean']['input'];
  text: Scalars['String']['input'];
};

export type PotentialAnalysisFreetextAnswerOption = PotentialAnalysisAnswerOption & {
  __typename?: 'PotentialAnalysisFreetextAnswerOption';
  answerOptionId: Scalars['Int']['output'];
  isFreeText: Scalars['Boolean']['output'];
  text: Scalars['String']['output'];
};

export type PotentialAnalysisGivenAnswer = {
  kind: PotentialAnalysisGivenAnswerKind | '%future added value';
};

export enum PotentialAnalysisGivenAnswerKind {
  SelectedWithFreetext = 'SelectedWithFreetext',
  Text = 'Text',
  Selected = 'selected'
}

export type PotentialAnalysisMultipleChoiceFreetextQuestion = PotentialAnalysisQuestion & {
  __typename?: 'PotentialAnalysisMultipleChoiceFreetextQuestion';
  answerOptions: Array<PotentialAnalysisFreetextAnswerOption>;
  givenAnswers: Array<PotentialAnalysisSelectedWithFreetextGivenAnswer>;
  id: Scalars['ID']['output'];
  kind: PotentialAnalysisQuestionDataKind | '%future added value';
  questionText: Scalars['String']['output'];
};

export type PotentialAnalysisMultipleChoiceQuestion = PotentialAnalysisQuestion & {
  __typename?: 'PotentialAnalysisMultipleChoiceQuestion';
  answerOptions: Array<PotentialAnalysisSelectAnswerOption>;
  givenAnswers: Array<PotentialAnalysisSelectedGivenAnswer>;
  id: Scalars['ID']['output'];
  kind: PotentialAnalysisQuestionDataKind | '%future added value';
  questionText: Scalars['String']['output'];
};

export type PotentialAnalysisMutations = {
  __typename?: 'PotentialAnalysisMutations';
  acknowledgePotentialAnalysisMaxReward?: Maybe<AcknowledgePotentialAnalysisMaxRewardPayload>;
  createPotentialAnalysisClickout?: Maybe<CreatePotentialAnalysisClickoutPayload>;
};


export type PotentialAnalysisMutationsAcknowledgePotentialAnalysisMaxRewardArgs = {
  input: AcknowledgePotentialAnalysisMaxRewardInput;
};


export type PotentialAnalysisMutationsCreatePotentialAnalysisClickoutArgs = {
  input: CreatePotentialAnalysisClickoutInput;
};

export type PotentialAnalysisQuestion = {
  id: Scalars['ID']['output'];
  kind: PotentialAnalysisQuestionDataKind | '%future added value';
};

export enum PotentialAnalysisQuestionDataKind {
  MultipleChoice = 'MULTIPLE_CHOICE',
  MultipleChoiceFreetext = 'MULTIPLE_CHOICE_FREETEXT',
  Scale = 'SCALE',
  SingleChoice = 'SINGLE_CHOICE',
  SingleChoiceFreetext = 'SINGLE_CHOICE_FREETEXT',
  Text = 'TEXT'
}

export type PotentialAnalysisRegistrationDataInput = {
  language: Scalars['String']['input'];
  ptt: Scalars['Int']['input'];
  pttchk: Scalars['String']['input'];
  rvw: Scalars['Int']['input'];
  rvwchk: Scalars['String']['input'];
};

export type PotentialAnalysisResult = {
  __typename?: 'PotentialAnalysisResult';
  categoryResults: Array<CategoryResult>;
  isLongAnalysis: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  pdf?: Maybe<File>;
};

export type PotentialAnalysisScaleQuestion = PotentialAnalysisQuestion & {
  __typename?: 'PotentialAnalysisScaleQuestion';
  answerOptions: Array<PotentialAnalysisSelectAnswerOption>;
  givenAnswer?: Maybe<PotentialAnalysisSelectedGivenAnswer>;
  id: Scalars['ID']['output'];
  kind: PotentialAnalysisQuestionDataKind | '%future added value';
  questionText: Scalars['String']['output'];
};

export type PotentialAnalysisSelectAnswerOption = PotentialAnalysisAnswerOption & {
  __typename?: 'PotentialAnalysisSelectAnswerOption';
  answerOptionId: Scalars['Int']['output'];
  text: Scalars['String']['output'];
};

export type PotentialAnalysisSelectAnswerOptionInput = {
  answerOptionId: Scalars['Int']['input'];
  text: Scalars['String']['input'];
};

export type PotentialAnalysisSelectedGivenAnswer = PotentialAnalysisGivenAnswer & {
  __typename?: 'PotentialAnalysisSelectedGivenAnswer';
  answerOptionId: Scalars['Int']['output'];
  kind: PotentialAnalysisGivenAnswerKind | '%future added value';
};

export type PotentialAnalysisSelectedGivenAnswerInput = {
  answerOptionId: Scalars['Int']['input'];
};

export type PotentialAnalysisSelectedWithFreetextGivenAnswer = PotentialAnalysisGivenAnswer & {
  __typename?: 'PotentialAnalysisSelectedWithFreetextGivenAnswer';
  answerOptionId: Scalars['Int']['output'];
  freeText?: Maybe<Scalars['String']['output']>;
  kind: PotentialAnalysisGivenAnswerKind | '%future added value';
};

export type PotentialAnalysisSelectedWithFreetextGivenAnswerInput = {
  answerOptionId: Scalars['Int']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};

export type PotentialAnalysisSingleChoiceFreetextQuestion = PotentialAnalysisQuestion & {
  __typename?: 'PotentialAnalysisSingleChoiceFreetextQuestion';
  answerOptions: Array<PotentialAnalysisFreetextAnswerOption>;
  givenAnswer?: Maybe<PotentialAnalysisSelectedWithFreetextGivenAnswer>;
  id: Scalars['ID']['output'];
  kind: PotentialAnalysisQuestionDataKind | '%future added value';
  questionText: Scalars['String']['output'];
};

export type PotentialAnalysisSingleChoiceQuestion = PotentialAnalysisQuestion & {
  __typename?: 'PotentialAnalysisSingleChoiceQuestion';
  answerOptions: Array<PotentialAnalysisSelectAnswerOption>;
  givenAnswer?: Maybe<PotentialAnalysisSelectedGivenAnswer>;
  id: Scalars['ID']['output'];
  kind: PotentialAnalysisQuestionDataKind | '%future added value';
  questionText: Scalars['String']['output'];
};

export type PotentialAnalysisTextGivenAnswer = PotentialAnalysisGivenAnswer & {
  __typename?: 'PotentialAnalysisTextGivenAnswer';
  kind: PotentialAnalysisGivenAnswerKind | '%future added value';
  text: Scalars['String']['output'];
};

export type PotentialAnalysisTextGivenAnswerInput = {
  text: Scalars['String']['input'];
};

export type PotentialAnalysisTextQuestion = PotentialAnalysisQuestion & {
  __typename?: 'PotentialAnalysisTextQuestion';
  givenAnswer?: Maybe<PotentialAnalysisTextGivenAnswer>;
  id: Scalars['ID']['output'];
  kind: PotentialAnalysisQuestionDataKind | '%future added value';
  questionText: Scalars['String']['output'];
};

/** Data partaining to the current user */
export type PotentialAnalysisViewerSchema = {
  __typename?: 'PotentialAnalysisViewerSchema';
  MyPotentialAnalysisResult?: Maybe<PotentialAnalysisResult>;
};

export type Price = {
  __typename?: 'Price';
  grossPrice: Scalars['BigDecimal']['output'];
  netPrice: Scalars['BigDecimal']['output'];
  taxRatePercentage: Scalars['BigDecimal']['output'];
};

export type PriceInput = {
  grossPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  netPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  taxRatePercentage?: InputMaybe<Scalars['BigDecimal']['input']>;
};

export type PrivateBaseData = BaseData & {
  __typename?: 'PrivateBaseData';
  city?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<CountryCode | '%future added value'>;
  firstName?: Maybe<Scalars['String']['output']>;
  houseNumber?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  salutation?: Maybe<SalutationType | '%future added value'>;
  street?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PrivateBaseDataInput = {
  city: Scalars['String']['input'];
  countryCode: CountryCode | '%future added value';
  firstName: Scalars['String']['input'];
  houseNumber: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode: Scalars['String']['input'];
  salutation: SalutationType | '%future added value';
  street: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PrivateBillingDetails = BillingDetails & {
  __typename?: 'PrivateBillingDetails';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  customerType: CustomerType | '%future added value';
  dateOfBirth: Scalars['ZonedDateTIme']['output'];
  firstName: Scalars['String']['output'];
  houseNumber: Scalars['String']['output'];
  invoiceAddress?: Maybe<InvoiceAddress>;
  invoiceEmail: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  salutation: SalutationType | '%future added value';
  street: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Product = Node & {
  __typename?: 'Product';
  data: ProductData;
  extensions: Array<ProductExtension>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  isHidden: Scalars['Boolean']['output'];
  isTaxFree: Scalars['Boolean']['output'];
  netPrice: Scalars['BigDecimal']['output'];
  title: Scalars['String']['output'];
};

export type ProductData = {
  kind: ProductKind | '%future added value';
};

export type ProductExtension = {
  kind: ProductExtensionKind | '%future added value';
};

export enum ProductExtensionKind {
  Academies = 'Academies'
}

export enum ProductKind {
  AccountGroup = 'AccountGroup',
  License = 'License',
  Placement = 'Placement'
}

export type ProductSelectionCondition = LimitedCartDiscountCondition & {
  __typename?: 'ProductSelectionCondition';
  amount: Scalars['Int']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: LimitedCartDiscountConditionKindEnum | '%future added value';
  product?: Maybe<Product>;
  productId: Scalars['ID']['output'];
};

export type ProductSelectionConfig = {
  kind: ProductSelectionConfigKindEnum | '%future added value';
};

export enum ProductSelectionConfigKindEnum {
  Percentage = 'Percentage'
}

/** A connection to a list of items. */
export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProductsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductsEdge = {
  __typename?: 'ProductsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Product;
};

export type ProfileData = {
  __typename?: 'ProfileData';
  avatar?: Maybe<File>;
  basicPersonal: ProfileDataBasicPersonal;
  certificateAnswer?: Maybe<Scalars['Int']['output']>;
  certificateFileIds: Array<File>;
  coachingStrongPointsTopics: Array<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  digitalAffinity1?: Maybe<Scalars['Boolean']['output']>;
  digitalAffinity2?: Maybe<Scalars['Boolean']['output']>;
  educationFreeText?: Maybe<Scalars['String']['output']>;
  educationMoreThan150h?: Maybe<Scalars['Boolean']['output']>;
  experience: ProfileDataExperience;
  jobTitles?: Maybe<Array<Scalars['String']['output']>>;
  languages: Array<Scalars['String']['output']>;
  methods: Array<Scalars['String']['output']>;
  personalPhilosophyCoachingStyle?: Maybe<Scalars['String']['output']>;
  personalPhilosophyVisionMission?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Scalars['String']['output']>;
  referencesCoachingExperienceIds: Array<File>;
  referencesPublications?: Maybe<Scalars['String']['output']>;
  socials?: Maybe<ProfileDataSocials>;
  studies?: Maybe<Scalars['String']['output']>;
};

export type ProfileDataBasicPersonal = {
  __typename?: 'ProfileDataBasicPersonal';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  salutation?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ProfileDataBasicPersonalInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileDataExperience = {
  __typename?: 'ProfileDataExperience';
  branches: Array<Scalars['String']['output']>;
  branchesSteps: Array<Scalars['String']['output']>;
  coachingFileIds: Array<File>;
  coachingHours?: Maybe<Scalars['Int']['output']>;
};

export type ProfileDataExperienceInput = {
  branches: Array<Scalars['String']['input']>;
  branchesSteps: Array<Scalars['String']['input']>;
  coachingFileIds: Array<Scalars['ID']['input']>;
  coachingHours?: InputMaybe<Scalars['Int']['input']>;
};

export type ProfileDataInput = {
  avatarId?: InputMaybe<Scalars['ID']['input']>;
  basicPersonal: ProfileDataBasicPersonalInput;
  certificateAnswer?: InputMaybe<Scalars['Int']['input']>;
  certificateFileIds: Array<Scalars['ID']['input']>;
  coachingStrongPointsTopics: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  digitalAffinity1?: InputMaybe<Scalars['Boolean']['input']>;
  digitalAffinity2?: InputMaybe<Scalars['Boolean']['input']>;
  educationFreeText?: InputMaybe<Scalars['String']['input']>;
  educationMoreThan150h?: InputMaybe<Scalars['Boolean']['input']>;
  experience: ProfileDataExperienceInput;
  jobTitles?: InputMaybe<Array<Scalars['String']['input']>>;
  languages: Array<Scalars['String']['input']>;
  methods: Array<Scalars['String']['input']>;
  personalPhilosophyCoachingStyle?: InputMaybe<Scalars['String']['input']>;
  personalPhilosophyVisionMission?: InputMaybe<Scalars['String']['input']>;
  quote?: InputMaybe<Scalars['String']['input']>;
  referencesCoachingExperienceIds: Array<Scalars['ID']['input']>;
  referencesPublications?: InputMaybe<Scalars['String']['input']>;
  socials?: InputMaybe<ProfileDataSocialsInput>;
  studies?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileDataSocials = {
  __typename?: 'ProfileDataSocials';
  facebook?: Maybe<Scalars['String']['output']>;
  linkedIn?: Maybe<Scalars['String']['output']>;
  others?: Maybe<Array<Scalars['String']['output']>>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type ProfileDataSocialsInput = {
  facebook?: InputMaybe<Scalars['String']['input']>;
  linkedIn?: InputMaybe<Scalars['String']['input']>;
  others?: InputMaybe<Array<Scalars['String']['input']>>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type PublishTriggerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  triggerId: Scalars['ID']['input'];
};

export type PublishTriggerPayload = {
  __typename?: 'PublishTriggerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  trigger: TriggerAction_Trigger;
};

export type PublishedConstellationRootExtensionExtension = PublishedRootExtensionExtension & {
  __typename?: 'PublishedConstellationRootExtensionExtension';
  contractPartner?: Maybe<ContractPartner>;
  doNotUse: Scalars['String']['output'];
  isMicroLearning: Scalars['Boolean']['output'];
  licenseAvailability: LicenseAvailability;
};

export type PublishedCourseLearnable = PublishedLearnable & {
  __typename?: 'PublishedCourseLearnable';
  id: Scalars['ID']['output'];
  kind: LearnableKind | '%future added value';
  root?: Maybe<LearnOpportunityV2>;
};

export type PublishedGroupCoachingLearnable = PublishedLearnable & {
  __typename?: 'PublishedGroupCoachingLearnable';
  groupCoaching?: Maybe<CoachingOffer>;
  id: Scalars['ID']['output'];
  kind: LearnableKind | '%future added value';
};

export type PublishedLearnable = {
  id: Scalars['ID']['output'];
  kind: LearnableKind | '%future added value';
};

/** A connection to a list of items. */
export type PublishedLearnablesConnection = {
  __typename?: 'PublishedLearnablesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PublishedLearnablesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PublishedLearnablesEdge = {
  __typename?: 'PublishedLearnablesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PublishedLearnable;
};

export type PublishedMicroLearningLearnable = PublishedLearnable & {
  __typename?: 'PublishedMicroLearningLearnable';
  id: Scalars['ID']['output'];
  kind: LearnableKind | '%future added value';
  root?: Maybe<LearnOpportunityV2>;
};

export type PublishedOneToOneCoachingLearnable = PublishedLearnable & {
  __typename?: 'PublishedOneToOneCoachingLearnable';
  id: Scalars['ID']['output'];
  kind: LearnableKind | '%future added value';
  oneToOneCoaching?: Maybe<CoachingOffer>;
};

export type PublishedRootExtensionExtension = {
  doNotUse: Scalars['String']['output'];
};

export type PublishedRootExtensionImpl = LearnOpportunityRootExtension & {
  __typename?: 'PublishedRootExtensionImpl';
  cartClickout?: Maybe<CartClickout>;
  diploma?: Maybe<Scalars['String']['output']>;
  doNotUse: Scalars['String']['output'];
  extension: PublishedRootExtensionExtension;
  ihkState: IhkCertificateOrderStateKind | '%future added value';
  learnGoals?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  receivedGamificationPoints: Scalars['Int']['output'];
  reducedData?: Maybe<ReducedData>;
  systemTags: Array<SystemTag | '%future added value'>;
  tags: Array<AcademiesTag>;
  trailer?: Maybe<StreamFile>;
  unlockInfo: UnlockInfo;
};

export type PublishingMessageV2 = {
  __typename?: 'PublishingMessageV2';
  additionalMessage?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  timestamp: Scalars['ZonedDateTIme']['output'];
};

export enum PublishingStatus {
  Acknowledged = 'acknowledged',
  Failed = 'failed',
  Inprogress = 'inprogress',
  Succeeded = 'succeeded'
}

export type PublishingUpdatedEventV2 = {
  __typename?: 'PublishingUpdatedEventV2';
  name: Scalars['String']['output'];
  publishing: PublishingV2;
  tree: Tree;
};

export type PublishingV2 = Node & {
  __typename?: 'PublishingV2';
  canBeAcknowledged: Scalars['Boolean']['output'];
  finishedAt?: Maybe<Scalars['ZonedDateTIme']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  initiatedAt: Scalars['ZonedDateTIme']['output'];
  messages: Array<PublishingMessageV2>;
  status: PublishingStatus | '%future added value';
};

/** Data only accessible by the admin */
export type PublishingV2AdminMutationSchema = {
  __typename?: 'PublishingV2AdminMutationSchema';
  acknowledgePublishingV2?: Maybe<AcknowledgePublishingV2Payload>;
  startPublishingV2?: Maybe<StartPublishingV2Payload>;
};


/** Data only accessible by the admin */
export type PublishingV2AdminMutationSchemaAcknowledgePublishingV2Args = {
  input: AcknowledgePublishingV2Input;
};


/** Data only accessible by the admin */
export type PublishingV2AdminMutationSchemaStartPublishingV2Args = {
  input: StartPublishingV2Input;
};

/** Data only accessible by the admin */
export type PublishingV2AdminSchema = {
  __typename?: 'PublishingV2AdminSchema';
  ActivePublishing?: Maybe<PublishingV2>;
};


/** Data only accessible by the admin */
export type PublishingV2AdminSchemaActivePublishingArgs = {
  rootId: Scalars['ID']['input'];
};

export type PurchaseUpdate = HistoryEventInterface & {
  __typename?: 'PurchaseUpdate';
  kind: HistoryEventType | '%future added value';
};

export type Purchaser = {
  __typename?: 'Purchaser';
  accountId: Scalars['ID']['output'];
  userId: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  AcademiesTag: AcademiesTagQueries;
  AccountBaseData: AccountBaseDataQueries;
  AccountMemberManagement: AccountMemberManagementQueries;
  /** Data only accessible by the admin */
  Admin: AdminQueryType;
  Auth: AuthQueries;
  AvgsPotentialAnalysis: AvgsPotentialAnalysisQueries;
  Coaching: CoachingQueries;
  CustomerJourney: CustomerJourneyQueries;
  FeatureToggle: FeatureToggleQueries;
  Learn: LearnQueries;
  Learnable: LearnableQueries;
  LicenseGrouping: LicenseGroupingQueries;
  Management: ManagementQueries;
  Ping: PingQueries;
  Placement: PlacementQueries;
  /** Data partaining to the current user */
  Viewer: ViewerQueryType;
  Vocab: VocabQueries;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Fetches objects given their IDs */
  nodes: Array<Maybe<Node>>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type RearrangeElementsV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  eLearningContentNodeId: Scalars['ID']['input'];
  newElementIds: Array<Scalars['ID']['input']>;
};

export type RearrangeElementsV2Payload = {
  __typename?: 'RearrangeElementsV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContentNode: TreeNode;
};

export type ReducedData = {
  __typename?: 'ReducedData';
  containsVideo: Scalars['Boolean']['output'];
  isIHK: Scalars['Boolean']['output'];
  numAttachments: Scalars['Int']['output'];
  numBranches: Scalars['Int']['output'];
  numContents: Scalars['Int']['output'];
  receivableGamificationPoints: Scalars['Int']['output'];
  videoDurationInSec: Scalars['Long']['output'];
};

export type Refusal = {
  __typename?: 'Refusal';
  code: Scalars['String']['output'];
  discountCodeId: Scalars['ID']['output'];
  refusalReason: RefusalReason | '%future added value';
  title: Scalars['String']['output'];
};

export enum RefusalReason {
  DuplicatedSystemCode = 'DuplicatedSystemCode',
  DuplicatedUserCode = 'DuplicatedUserCode',
  Expired = 'Expired',
  OverLimit = 'OverLimit',
  OverUserLimit = 'OverUserLimit',
  WrongAccount = 'WrongAccount',
  WrongProducts = 'WrongProducts'
}

export type RegisterForNotificationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  service: NotificationServiceType | '%future added value';
  token: Scalars['String']['input'];
};

export type RegisterForNotificationPayload = {
  __typename?: 'RegisterForNotificationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RegisterParticipationAdminInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
  participationStatus: ParticipationStatus | '%future added value';
};

export type RegisterParticipationAdminPayload = {
  __typename?: 'RegisterParticipationAdminPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RegisterParticipationInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
  participationStatus: ParticipationStatus | '%future added value';
};

export type RegisterParticipationPayload = {
  __typename?: 'RegisterParticipationPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RegisterUserInput = {
  adsOptIn: Scalars['Boolean']['input'];
  branch?: InputMaybe<Branch | '%future added value'>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  position?: InputMaybe<Scalars['String']['input']>;
  potentialAnalysisRegistrationData?: InputMaybe<PotentialAnalysisRegistrationDataInput>;
  rawPassword: Scalars['String']['input'];
  teamSize?: InputMaybe<TeamSize | '%future added value'>;
};

export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  accountId: Scalars['ID']['output'];
  clientMutationId?: Maybe<Scalars['String']['output']>;
  firstLogin: Scalars['Boolean']['output'];
  userId: Scalars['ID']['output'];
};

export type ReleasedFileV2 = {
  __typename?: 'ReleasedFileV2';
  file?: Maybe<File>;
};

export type ReleasedSubtitlesV2 = {
  __typename?: 'ReleasedSubtitlesV2';
  subtitles?: Maybe<SubtitlesV2>;
  vimeoId: Scalars['String']['output'];
};

export type RemoveActionFromActionResultToNextActionsAndDeleteItInput = {
  actionId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveActionFromActionResultToNextActionsAndDeleteItPayload = {
  __typename?: 'RemoveActionFromActionResultToNextActionsAndDeleteItPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedActionId: Scalars['ID']['output'];
};

export type RemoveAttachmentInput = {
  attachmentId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  nodeId: Scalars['ID']['input'];
};

export type RemoveAttachmentPayload = {
  __typename?: 'RemoveAttachmentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  node: TreeNode;
};

export type RemoveColumnFromMatrixElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  idx: Scalars['Int']['input'];
  matrixElementId: Scalars['ID']['input'];
};

export type RemoveColumnFromMatrixElementPayload = {
  __typename?: 'RemoveColumnFromMatrixElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type RemoveNodeFromTreeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  nodeId: Scalars['ID']['input'];
};

export type RemoveNodeFromTreePayload = {
  __typename?: 'RemoveNodeFromTreePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  tree: Tree;
};

export type RemoveOrderItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderElementId: Scalars['ID']['input'];
  orderItemId: Scalars['ID']['input'];
};

export type RemoveOrderItemPayload = {
  __typename?: 'RemoveOrderItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  orderElement: OrderElement;
};

export type RemoveParticipantAdminInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
};

export type RemoveParticipantAdminPayload = {
  __typename?: 'RemoveParticipantAdminPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RemoveParticipantFromBookingAsCoachInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
};

export type RemoveParticipantFromBookingAsCoachPayload = {
  __typename?: 'RemoveParticipantFromBookingAsCoachPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RemoveParticipantFromMyBookingInput = {
  availabilityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  participantId: Scalars['ID']['input'];
};

export type RemoveParticipantFromMyBookingPayload = {
  __typename?: 'RemoveParticipantFromMyBookingPayload';
  availability: Availability;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RemoveRestartIfFailedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  contentNodeId: Scalars['ID']['input'];
};

export type RemoveRestartIfFailedContentConfigPayload = {
  __typename?: 'RemoveRestartIfFailedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type RemoveRewardTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type RemoveRewardTreeConfigPayload = {
  __typename?: 'RemoveRewardTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type RemoveRowFromMatrixElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  idx: Scalars['Int']['input'];
  matrixElementId: Scalars['ID']['input'];
};

export type RemoveRowFromMatrixElementPayload = {
  __typename?: 'RemoveRowFromMatrixElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type RemoveStartContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  contentNodeId: Scalars['ID']['input'];
};

export type RemoveStartContentConfigPayload = {
  __typename?: 'RemoveStartContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type RemoveStartTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type RemoveStartTreeConfigPayload = {
  __typename?: 'RemoveStartTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type RemoveUserFromAccountInput = {
  accountId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type RemoveUserFromAccountPayload = {
  __typename?: 'RemoveUserFromAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  removedUserId: Scalars['ID']['output'];
};

export type RemoveUsersFromAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userIds: Array<Scalars['ID']['input']>;
};

export type RemoveUsersFromAccountPayload = {
  __typename?: 'RemoveUsersFromAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  removedIds: Array<Scalars['ID']['output']>;
};

export type RemoveUsersFromUserInAccountGroupInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['ID']['input'];
  userIds: Array<Scalars['ID']['input']>;
};

export type RemoveUsersFromUserInAccountGroupPayload = {
  __typename?: 'RemoveUsersFromUserInAccountGroupPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  removedIds: Array<Scalars['ID']['output']>;
};

export type RemoveVisibilityCoachingConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  coachingOfferId: Scalars['ID']['input'];
  configId: Scalars['ID']['input'];
};

export type RemoveVisibilityCoachingConfigPayload = {
  __typename?: 'RemoveVisibilityCoachingConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  coachingOffer: CoachingOffer;
};

export type RemoveVisibilityTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  configId: Scalars['ID']['input'];
  rootNodeId: Scalars['ID']['input'];
};

export type RemoveVisibilityTreeConfigPayload = {
  __typename?: 'RemoveVisibilityTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type RemoveWrongAnswerFromMatrixElementCellInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  matrixCellId: Scalars['ID']['input'];
  matrixElementId: Scalars['ID']['input'];
  wrongAnswerId: Scalars['ID']['input'];
};

export type RemoveWrongAnswerFromMatrixElementCellPayload = {
  __typename?: 'RemoveWrongAnswerFromMatrixElementCellPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

/** Data only accessible by the admin */
export type ReportsAdminSchema = {
  __typename?: 'ReportsAdminSchema';
  Reports: DsaReportConnection;
};


/** Data only accessible by the admin */
export type ReportsAdminSchemaReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
};

export type ReportsMutations = {
  __typename?: 'ReportsMutations';
  createReport?: Maybe<CreateReportPayload>;
};


export type ReportsMutationsCreateReportArgs = {
  input: CreateReportInput;
};

/** Data partaining to the current user */
export type ReportsViewerSchema = {
  __typename?: 'ReportsViewerSchema';
  SystemEmail: Scalars['String']['output'];
};

export type ResendActivationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

export type ResendActivationPayload = {
  __typename?: 'ResendActivationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ResetAllStagingDataInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type ResetAllStagingDataPayload = {
  __typename?: 'ResetAllStagingDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ResetPasswordAndActivateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type ResetPasswordAndActivatePayload = {
  __typename?: 'ResetPasswordAndActivatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ResetStagingBillingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type ResetStagingBillingPayload = {
  __typename?: 'ResetStagingBillingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ResetStagingUsersInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type ResetStagingUsersPayload = {
  __typename?: 'ResetStagingUsersPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RestartContentNodeAfterFailedInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type RestartContentNodeAfterFailedPayload = {
  __typename?: 'RestartContentNodeAfterFailedPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type RestartContentNodeAfterPassedInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type RestartContentNodeAfterPassedPayload = {
  __typename?: 'RestartContentNodeAfterPassedPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type RestartIfFailedContentConfig = {
  configType: RestartIfFailedContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type RestartIfFailedContentConfigResult = {
  canBeRestarted: Scalars['Boolean']['output'];
  configType: RestartIfFailedContentConfigType | '%future added value';
};

export enum RestartIfFailedContentConfigType {
  RestartIfFailedContentBlockPermanently = 'RestartIfFailedContent_BlockPermanently',
  RestartIfFailedContentBlockTemporarily = 'RestartIfFailedContent_BlockTemporarily',
  RestartIfFailedContentCanNot = 'RestartIfFailedContent_CanNot'
}

export type RestartIfPassedContentConfig = {
  configType: RestartIfPassedContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum RestartIfPassedContentConfigType {
  RestartIfPassedContentCan = 'RestartIfPassedContent_Can',
  RestartIfPassedContentCanNot = 'RestartIfPassedContent_CanNot'
}

export type Reward = {
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: RewardKind | '%future added value';
  superId: Scalars['ID']['output'];
};

export type RewardContentConfig = {
  configType: RewardContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum RewardContentConfigType {
  RewardContentDo = 'RewardContent_Do'
}

export enum RewardKind {
  CrmTreeHeadUpdater = 'CrmTreeHeadUpdater',
  ExternalLicense = 'ExternalLicense',
  GamificationPoints = 'GamificationPoints',
  IhkCertificate = 'IHKCertificate',
  ParticipationCertificate = 'ParticipationCertificate',
  WordPackage = 'WordPackage',
  WordProficiencies = 'WordProficiencies'
}

export type RewardResult = {
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export enum RewardResultKind {
  CrmTreeHeadUpdaterErrorOccurred = 'CrmTreeHeadUpdater_ErrorOccurred',
  CrmTreeHeadUpdaterHeadUpdated = 'CrmTreeHeadUpdater_HeadUpdated',
  CrmTreeHeadUpdaterNotPassed = 'CrmTreeHeadUpdater_NotPassed',
  ExternalLicenseErrorOccurred = 'ExternalLicense_ErrorOccurred',
  ExternalLicenseIssuedToUser = 'ExternalLicense_IssuedToUser',
  ExternalLicenseNotPassed = 'ExternalLicense_NotPassed',
  GamificationPointsAlreadyReceivedPoints = 'GamificationPoints_AlreadyReceivedPoints',
  GamificationPointsErrorOccurred = 'GamificationPoints_ErrorOccurred',
  GamificationPointsNoPointsReceived = 'GamificationPoints_NoPointsReceived',
  GamificationPointsNotPassedIhkTestFlow = 'GamificationPoints_NotPassedIHKTestFlow',
  GamificationPointsPointsReceived = 'GamificationPoints_PointsReceived',
  IhkCertificateErrorOccurred = 'IHKCertificate_ErrorOccurred',
  IhkCertificateReadyToOrder = 'IHKCertificate_ReadyToOrder',
  ParticipationCertificateParticipationCertificate = 'ParticipationCertificate_ParticipationCertificate',
  WordPackageErrorOccurred = 'WordPackage_ErrorOccurred',
  WordPackageNothingNewToUnlock = 'WordPackage_NothingNewToUnlock',
  WordPackagePackageUnlocked = 'WordPackage_PackageUnlocked',
  WordProficienciesErrorOccurred = 'WordProficiencies_ErrorOccurred',
  WordProficienciesProficienciesChanged = 'WordProficiencies_ProficienciesChanged'
}

export type RewardTreeConfig = {
  configType: RewardTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum RewardTreeConfigType {
  RewardTreeDoNot = 'RewardTree_DoNot'
}

export type RootCost = {
  __typename?: 'RootCost';
  percentageShare: Scalars['Int']['output'];
  price: Scalars['BigDecimal']['output'];
  supplier: Scalars['String']['output'];
};

export type RootCostInput = {
  percentageShare: Scalars['Int']['input'];
  price: Scalars['BigDecimal']['input'];
  supplier: Scalars['String']['input'];
};

export type RootExtension = {
  doNotUse: Scalars['String']['output'];
};

export type RootExtensionExtension = {
  doNotUse: Scalars['String']['output'];
};

export type RootExtensionImpl = RootExtension & {
  __typename?: 'RootExtensionImpl';
  cost?: Maybe<RootCost>;
  diploma?: Maybe<Scalars['String']['output']>;
  doNotUse: Scalars['String']['output'];
  extension: RootExtensionExtension;
  learnGoalsOpt?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  tags: Array<AcademiesTag>;
  trailerOpt?: Maybe<Trailer>;
};

export type RootNodesWithTreeStateType = {
  __typename?: 'RootNodesWithTreeStateType';
  rootNode?: Maybe<LearnOpportunityV2>;
  treeState?: Maybe<TreeState>;
};

export type RootStructureDefinition = StructureDefinition & {
  __typename?: 'RootStructureDefinition';
  coordinates: CoordinatesV2;
  definitionType: StructureType | '%future added value';
  extension: RootExtension;
  firstReleasedAt?: Maybe<Scalars['ZonedDateTIme']['output']>;
  icon?: Maybe<File>;
  rewardConfigs: Array<RewardTreeConfig>;
  searchWords?: Maybe<Scalars['String']['output']>;
  showAnswerConfig: ShowAnswerTreeConfig;
  startAtConfig: StartAtTreeConfig;
  startConfigs: Array<StartTreeConfig>;
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  visibilityConfigs: Array<VisibilityTreeConfig>;
};

export enum SalutationType {
  Divers = 'Divers',
  Mr = 'Mr',
  Mrs = 'Mrs',
  Unknown = 'Unknown'
}

export type ScheduleData = {
  __typename?: 'ScheduleData';
  blockoutDates: Array<BlockoutDate>;
  daysAndTimes: Array<AvailabilityScheduleDayAndTimes>;
  overrideDaysAndTimesForCalendarWeek: Array<DayAndTimesForCalendarWeek>;
};

export type ScheduleDataInput = {
  blockoutDates: Array<BlockoutDateInput>;
  daysAndTimes: Array<DayAndTimesInput>;
  overrideDaysAndTimesForCalendarWeek: Array<DayAndTimesForCalendarWeekInput>;
};

/** result of searching discount code usages. */
export type SearchDiscountCodeUsagesResult = {
  __typename?: 'SearchDiscountCodeUsagesResult';
  csv: Scalars['String']['output'];
  sumGrossPriceWithDiscounts: Scalars['BigDecimal']['output'];
  sumGrossPriceWithoutDiscounts: Scalars['BigDecimal']['output'];
  usages: DiscountCodeUsagesConnection;
};


/** result of searching discount code usages. */
export type SearchDiscountCodeUsagesResultUsagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type SelectedPaymentMethod = {
  paymentMethodId: PaymentMethodType | '%future added value';
  selectedPaymentMethodType: SelectedPaymentMethodType | '%future added value';
};

export enum SelectedPaymentMethodType {
  EmployerInvoice = 'EmployerInvoice',
  MonthlyPayment = 'MonthlyPayment',
  OneTimePayment = 'OneTimePayment'
}

export type SelectedProduct = {
  __typename?: 'SelectedProduct';
  amount: Scalars['Int']['output'];
  product?: Maybe<Product>;
};

export type SelectedProductInput = {
  additionalInformation?: InputMaybe<Scalars['String']['input']>;
  amount: Scalars['Int']['input'];
  productId: Scalars['ID']['input'];
};

export type Selection = {
  __typename?: 'Selection';
  createdByUser?: Maybe<User>;
  selectedDiscountCodes: Array<Scalars['String']['output']>;
  selectedProducts: Array<SelectedProduct>;
};

export type SendAskCompanyIfContractWasConcludedInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contactPersonAccountId: Scalars['ID']['input'];
  contactPersonUserId: Scalars['ID']['input'];
  jobListingTitle: Scalars['String']['input'];
  linkId: Scalars['String']['input'];
};

export type SendAskCompanyIfContractWasConcludedPayload = {
  __typename?: 'SendAskCompanyIfContractWasConcludedPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendCompanyIsInterestedInUserProfileInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  deadlineMatching: Scalars['ZonedDateTIme']['input'];
  jobListingInterestedYes: Scalars['Boolean']['input'];
  jobListingTitle: Scalars['String']['input'];
  linkId: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type SendCompanyIsInterestedInUserProfilePayload = {
  __typename?: 'SendCompanyIsInterestedInUserProfilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  personalizedEmailTemplateId: Scalars['ID']['input'];
};

export type SendEmailPayload = {
  __typename?: 'SendEmailPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendInformAboutAcceptedMatchingInput = {
  businessAccountId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  jobListingTitle: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type SendInformAboutAcceptedMatchingPayload = {
  __typename?: 'SendInformAboutAcceptedMatchingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendInformAboutAvailableDossierInput = {
  businessAccountId: Scalars['ID']['input'];
  businessUserId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  jobListingId: Scalars['String']['input'];
  jobListingTitle: Scalars['String']['input'];
};

export type SendInformAboutAvailableDossierPayload = {
  __typename?: 'SendInformAboutAvailableDossierPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendInformAboutClosedProfileAfterMatchingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  linkId: Scalars['String']['input'];
  nextMatchingRoundDate: Scalars['ZonedDateTIme']['input'];
  userId: Scalars['ID']['input'];
};

export type SendInformAboutClosedProfileAfterMatchingPayload = {
  __typename?: 'SendInformAboutClosedProfileAfterMatchingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendMatchingResultsAvailableToBusinessInput = {
  businessAccountId: Scalars['ID']['input'];
  businessUserId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  deadlineMatching: Scalars['ZonedDateTIme']['input'];
  linkId: Scalars['String']['input'];
};

export type SendMatchingResultsAvailableToBusinessPayload = {
  __typename?: 'SendMatchingResultsAvailableToBusinessPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendMatchingResultsAvailableToUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  deadlineMatching: Scalars['ZonedDateTIme']['input'];
  linkId: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type SendMatchingResultsAvailableToUserPayload = {
  __typename?: 'SendMatchingResultsAvailableToUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendRemindCompanyToPayFeeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  jobListingTitle: Scalars['String']['input'];
  managerAccountId: Scalars['ID']['input'];
  managerUserId: Scalars['ID']['input'];
};

export type SendRemindCompanyToPayFeePayload = {
  __typename?: 'SendRemindCompanyToPayFeePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendReminderForInviteToSecondInterviewInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contactPersonAccountId: Scalars['ID']['input'];
  contactPersonUserId: Scalars['ID']['input'];
  deadlineMatching: Scalars['ZonedDateTIme']['input'];
  jobListingTitle: Scalars['String']['input'];
  linkId: Scalars['String']['input'];
};

export type SendReminderForInviteToSecondInterviewPayload = {
  __typename?: 'SendReminderForInviteToSecondInterviewPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendReminderForSecondInterviewToUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  deadlineMatching: Scalars['ZonedDateTIme']['input'];
  linkId: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type SendReminderForSecondInterviewToUserPayload = {
  __typename?: 'SendReminderForSecondInterviewToUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendSummaryForFirstInterviewToContactPersonInput = {
  accountId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  interviewDate: Scalars['ZonedDateTIme']['input'];
  jobListingTitle: Scalars['String']['input'];
  linkId: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type SendSummaryForFirstInterviewToContactPersonPayload = {
  __typename?: 'SendSummaryForFirstInterviewToContactPersonPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendSummaryForFirstInterviewToUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  interviewDate: Scalars['ZonedDateTIme']['input'];
  linkId: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type SendSummaryForFirstInterviewToUserPayload = {
  __typename?: 'SendSummaryForFirstInterviewToUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendSummaryForSecondInterviewToContactPersonInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contactPersonAccountId: Scalars['ID']['input'];
  contactPersonUserId: Scalars['ID']['input'];
  interviewDate: Scalars['ZonedDateTIme']['input'];
  jobListingTitle: Scalars['String']['input'];
  linkId: Scalars['String']['input'];
};

export type SendSummaryForSecondInterviewToContactPersonPayload = {
  __typename?: 'SendSummaryForSecondInterviewToContactPersonPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendSummaryForSecondInterviewToUserInput = {
  businessAccountId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  interviewDate: Scalars['ZonedDateTIme']['input'];
  linkId: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type SendSummaryForSecondInterviewToUserPayload = {
  __typename?: 'SendSummaryForSecondInterviewToUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SendUserIsInterestedForJobListingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contactPersonAccountId: Scalars['ID']['input'];
  contactPersonUserId: Scalars['ID']['input'];
  deadlineMatching: Scalars['ZonedDateTIme']['input'];
  jobListingTitle: Scalars['String']['input'];
  linkId: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type SendUserIsInterestedForJobListingPayload = {
  __typename?: 'SendUserIsInterestedForJobListingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SepaData = PaymentProviderData & {
  __typename?: 'SepaData';
  dataType: PaymentProviderDataType | '%future added value';
  iban: Scalars['String']['output'];
  mandateInformation: MandateInformation;
  paymentMethod: PaymentMethodType | '%future added value';
};

export type SessionLineItem = {
  __typename?: 'SessionLineItem';
  coach?: Maybe<User>;
  coachingOffer?: Maybe<CoachingOffer>;
  remuneration: Price;
  sessionFrom: Scalars['ZonedDateTIme']['output'];
  sessionTo: Scalars['ZonedDateTIme']['output'];
};

export type SetAccountBaseDataCountryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  countryCode: CountryCode | '%future added value';
};

export type SetAccountBaseDataCountryPayload = {
  __typename?: 'SetAccountBaseDataCountryPayload';
  baseData: BaseData;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SetAccountGroupsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupIds: Array<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};

export type SetAccountGroupsPayload = {
  __typename?: 'SetAccountGroupsPayload';
  account: Account;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SetAccountNameInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type SetAccountNamePayload = {
  __typename?: 'SetAccountNamePayload';
  account: Account;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SetAccountNameUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type SetAccountNameUserPayload = {
  __typename?: 'SetAccountNameUserPayload';
  account: Account;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SetActionNameInput = {
  actionId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type SetActionNamePayload = {
  __typename?: 'SetActionNamePayload';
  action: TriggerAction_Action;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SetAlwaysPassContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type SetAlwaysPassContentConfigPayload = {
  __typename?: 'SetAlwaysPassContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type SetAlwaysRestartContinueContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type SetAlwaysRestartContinueContentConfigPayload = {
  __typename?: 'SetAlwaysRestartContinueContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type SetAnswerInMultipleChoiceFreeTextQuestionInput = {
  answerOptions: Array<PotentialAnalysisFreeTextAnswerOptionInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  givenAnswer: Array<PotentialAnalysisSelectedWithFreetextGivenAnswerInput>;
  learnPotentialAnalysisId: Scalars['ID']['input'];
  questionId: Scalars['ID']['input'];
  questionText: Scalars['String']['input'];
};

export type SetAnswerInMultipleChoiceFreeTextQuestionPayload = {
  __typename?: 'SetAnswerInMultipleChoiceFreeTextQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  isFinished: Scalars['Boolean']['output'];
  question?: Maybe<PotentialAnalysisMultipleChoiceFreetextQuestion>;
};

export type SetAnswerInMultipleChoiceQuestionInput = {
  answerOptions: Array<PotentialAnalysisSelectAnswerOptionInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  givenAnswer: Array<PotentialAnalysisSelectedGivenAnswerInput>;
  learnPotentialAnalysisId: Scalars['ID']['input'];
  questionId: Scalars['ID']['input'];
  questionText: Scalars['String']['input'];
};

export type SetAnswerInMultipleChoiceQuestionPayload = {
  __typename?: 'SetAnswerInMultipleChoiceQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  isFinished: Scalars['Boolean']['output'];
  question: PotentialAnalysisMultipleChoiceQuestion;
};

export type SetAnswerInScaleQuestionInput = {
  answerOptions: Array<PotentialAnalysisSelectAnswerOptionInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  givenAnswer: PotentialAnalysisSelectedGivenAnswerInput;
  learnPotentialAnalysisId: Scalars['ID']['input'];
  questionId: Scalars['ID']['input'];
  questionText: Scalars['String']['input'];
};

export type SetAnswerInScaleQuestionPayload = {
  __typename?: 'SetAnswerInScaleQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  isFinished: Scalars['Boolean']['output'];
  question: PotentialAnalysisScaleQuestion;
};

export type SetAnswerInSingleChoiceFreeTextQuestionInput = {
  answerOptions: Array<PotentialAnalysisFreeTextAnswerOptionInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  givenAnswer: PotentialAnalysisSelectedWithFreetextGivenAnswerInput;
  learnPotentialAnalysisId: Scalars['ID']['input'];
  questionId: Scalars['ID']['input'];
  questionText: Scalars['String']['input'];
};

export type SetAnswerInSingleChoiceFreeTextQuestionPayload = {
  __typename?: 'SetAnswerInSingleChoiceFreeTextQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  isFinished: Scalars['Boolean']['output'];
  question?: Maybe<PotentialAnalysisSingleChoiceFreetextQuestion>;
};

export type SetAnswerInSingleChoiceQuestionInput = {
  answerOptions: Array<PotentialAnalysisSelectAnswerOptionInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  givenAnswer: PotentialAnalysisSelectedGivenAnswerInput;
  learnPotentialAnalysisId: Scalars['ID']['input'];
  questionId: Scalars['ID']['input'];
  questionText: Scalars['String']['input'];
};

export type SetAnswerInSingleChoiceQuestionPayload = {
  __typename?: 'SetAnswerInSingleChoiceQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  isFinished: Scalars['Boolean']['output'];
  question: PotentialAnalysisSingleChoiceQuestion;
};

export type SetAnswerInTextQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  givenAnswer: PotentialAnalysisTextGivenAnswerInput;
  learnPotentialAnalysisId: Scalars['ID']['input'];
  questionId: Scalars['ID']['input'];
  questionText: Scalars['String']['input'];
};

export type SetAnswerInTextQuestionPayload = {
  __typename?: 'SetAnswerInTextQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  isFinished: Scalars['Boolean']['output'];
  question?: Maybe<PotentialAnalysisTextQuestion>;
};

export type SetCanNotRestartIfPassedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type SetCanNotRestartIfPassedContentConfigPayload = {
  __typename?: 'SetCanNotRestartIfPassedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type SetCanRestartIfPassedContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type SetCanRestartIfPassedContentConfigPayload = {
  __typename?: 'SetCanRestartIfPassedContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type SetConstellationRootExtensionExtensionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  isMicroLearning: Scalars['Boolean']['input'];
  rootId: Scalars['ID']['input'];
};

export type SetConstellationRootExtensionExtensionPayload = {
  __typename?: 'SetConstellationRootExtensionExtensionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  root: TreeNode;
};

export type SetContractPartnerInConstellationRootExtensionExtensionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contractPartner?: InputMaybe<Scalars['ID']['input']>;
  rootId: Scalars['ID']['input'];
};

export type SetContractPartnerInConstellationRootExtensionExtensionPayload = {
  __typename?: 'SetContractPartnerInConstellationRootExtensionExtensionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  root: TreeNode;
};

export type SetCorrectAnswerInMatrixElementCellInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  matrixCellId: Scalars['ID']['input'];
  matrixElementId: Scalars['ID']['input'];
  newCorrectAnswerContent: Scalars['String']['input'];
};

export type SetCorrectAnswerInMatrixElementCellPayload = {
  __typename?: 'SetCorrectAnswerInMatrixElementCellPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type SetDirectFeedbackFlowELearningContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
  minNumTriesTillShowAnswer: Scalars['Int']['input'];
};

export type SetDirectFeedbackFlowELearningContentConfigPayload = {
  __typename?: 'SetDirectFeedbackFlowELearningContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type SetDoNotShowAnswerTreeConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type SetDoNotShowAnswerTreeConfigPayload = {
  __typename?: 'SetDoNotShowAnswerTreeConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rootNode: TreeNode;
};

export type SetDoRewardContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type SetDoRewardContentConfigPayload = {
  __typename?: 'SetDoRewardContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentNode: TreeNode;
};

export type SetFieldValueKindAndIdMapInActionResultToNextActionInput = {
  actionId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fieldValueKindAndIdMap: Array<TriggerAction_FieldValueKindAndIdMapEntryInput>;
};

export type SetFieldValueKindAndIdMapInActionResultToNextActionPayload = {
  __typename?: 'SetFieldValueKindAndIdMapInActionResultToNextActionPayload';
  action: TriggerAction_Action;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SetFinishContentSubmissionTriggerInContentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
};

export type SetFinishContentSubmissionTriggerInContentPayload = {
  __typename?: 'SetFinishContentSubmissionTriggerInContentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type SetGlobalDiscountCodeIdInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  discountCodeId?: InputMaybe<Scalars['ID']['input']>;
};

export type SetGlobalDiscountCodeIdPayload = {
  __typename?: 'SetGlobalDiscountCodeIdPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  settings: Settings;
};

export type SetIhkFlowPassContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type SetIhkFlowPassContentConfigPayload = {
  __typename?: 'SetIHKFlowPassContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type SetMatrixElementColumnTitleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  idx: Scalars['Int']['input'];
  matrixElementId: Scalars['ID']['input'];
  newTitle: Scalars['String']['input'];
};

export type SetMatrixElementColumnTitlePayload = {
  __typename?: 'SetMatrixElementColumnTitlePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type SetMatrixElementRowTitleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  idx: Scalars['Int']['input'];
  matrixElementId: Scalars['ID']['input'];
  newTitle: Scalars['String']['input'];
};

export type SetMatrixElementRowTitlePayload = {
  __typename?: 'SetMatrixElementRowTitlePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  eLearningContent: TreeNode;
  matrixElement: MatrixElement;
};

export type SetRootExtensionImplInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<RootCostInput>;
  diploma?: InputMaybe<Scalars['String']['input']>;
  learnGoals?: InputMaybe<Scalars['String']['input']>;
  licenseProductId?: InputMaybe<Scalars['ID']['input']>;
  rootId: Scalars['ID']['input'];
  tagIds: Array<Scalars['ID']['input']>;
  trailerVimeoId?: InputMaybe<Scalars['String']['input']>;
  videoSourceId?: InputMaybe<Scalars['ID']['input']>;
};

export type SetRootExtensionImplPayload = {
  __typename?: 'SetRootExtensionImplPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  root: TreeNode;
};

export type SetSimplyContinueFlowELearningContentConfigInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentId: Scalars['ID']['input'];
};

export type SetSimplyContinueFlowELearningContentConfigPayload = {
  __typename?: 'SetSimplyContinueFlowELearningContentConfigPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  content: TreeNode;
};

export type SetTreeStateHeadInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newHeadContentId: Scalars['ID']['input'];
  rootId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type SetTreeStateHeadPayload = {
  __typename?: 'SetTreeStateHeadPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  treeState: TreeState;
};

export type SetTrendOrderInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  trendIdsWithPositions: Array<TrendIdWithPosition>;
};

export type SetTrendOrderPayload = {
  __typename?: 'SetTrendOrderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SetTriggerNameInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  triggerId: Scalars['ID']['input'];
};

export type SetTriggerNamePayload = {
  __typename?: 'SetTriggerNamePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  trigger: TriggerAction_Trigger;
};

export type SetUserInAccountGroupsInput = {
  accountId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupIds: Array<Scalars['ID']['input']>;
  userId: Scalars['ID']['input'];
};

export type SetUserInAccountGroupsPayload = {
  __typename?: 'SetUserInAccountGroupsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userInAccount: UserInAccountEdge;
};

export type SetVimeoVideoSourceAsDefaultInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type SetVimeoVideoSourceAsDefaultPayload = {
  __typename?: 'SetVimeoVideoSourceAsDefaultPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  edge: Vimeo_VimeoVideoSourceEdge;
};

export type Settings = {
  __typename?: 'Settings';
  globalDiscountCode?: Maybe<DiscountCode>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

/** Data only accessible by the admin */
export type SettingsAdminMutationSchema = {
  __typename?: 'SettingsAdminMutationSchema';
  setGlobalDiscountCodeId?: Maybe<SetGlobalDiscountCodeIdPayload>;
};


/** Data only accessible by the admin */
export type SettingsAdminMutationSchemaSetGlobalDiscountCodeIdArgs = {
  input: SetGlobalDiscountCodeIdInput;
};

/** Data only accessible by the admin */
export type SettingsAdminSchema = {
  __typename?: 'SettingsAdminSchema';
  Settings: Settings;
};


/** Data only accessible by the admin */
export type SettingsAdminSchemaSettingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ShowAnswerElementState = {
  element: LearnElement;
  kind: ElementStateKind | '%future added value';
};

export type ShowAnswerTreeConfig = {
  configType: ShowAnswerTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum ShowAnswerTreeConfigType {
  ShowAnswerTreeDoNot = 'ShowAnswerTree_DoNot'
}

export type ShowElementAnswerElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  inputElementId: Scalars['ID']['input'];
};

export type ShowElementAnswerElementPayload = {
  __typename?: 'ShowElementAnswerElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type SimplyContinueFlowELearningContentConfig = FlowELearningContentConfig & {
  __typename?: 'SimplyContinueFlowELearningContentConfig';
  configType: FlowELearningContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type SingleUserAssignmentRule = AssignmentRule & Node & {
  __typename?: 'SingleUserAssignmentRule';
  accountRef: Scalars['ID']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  licenseGroupingId: Scalars['ID']['output'];
  licensesUsedByUser: Scalars['Int']['output'];
  maxLicenseAmount: Scalars['Int']['output'];
  userId: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type SortedLearnablesConnection = {
  __typename?: 'SortedLearnablesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SortedLearnablesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SortedLearnablesEdge = {
  __typename?: 'SortedLearnablesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LearnableWithLastUpdated;
};

/** Data only accessible by the admin */
export type StagingAdminMutationSchema = {
  __typename?: 'StagingAdminMutationSchema';
  cleanUpUserInputRelatedToStaging?: Maybe<CleanUpUserInputRelatedToStagingPayload>;
  createCoachStatementsFromUnbilled?: Maybe<CreateCoachStatementsFromUnbilledPayload>;
  resetAllStagingData?: Maybe<ResetAllStagingDataPayload>;
  resetStagingBilling?: Maybe<ResetStagingBillingPayload>;
  resetStagingUsers?: Maybe<ResetStagingUsersPayload>;
};


/** Data only accessible by the admin */
export type StagingAdminMutationSchemaCleanUpUserInputRelatedToStagingArgs = {
  input: CleanUpUserInputRelatedToStagingInput;
};


/** Data only accessible by the admin */
export type StagingAdminMutationSchemaCreateCoachStatementsFromUnbilledArgs = {
  input: CreateCoachStatementsFromUnbilledInput;
};


/** Data only accessible by the admin */
export type StagingAdminMutationSchemaResetAllStagingDataArgs = {
  input: ResetAllStagingDataInput;
};


/** Data only accessible by the admin */
export type StagingAdminMutationSchemaResetStagingBillingArgs = {
  input: ResetStagingBillingInput;
};


/** Data only accessible by the admin */
export type StagingAdminMutationSchemaResetStagingUsersArgs = {
  input: ResetStagingUsersInput;
};

export type StartAtTreeConfig = {
  configType: StartAtTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum StartAtTreeConfigType {
  StartAtTreeFirstContentNode = 'StartAtTree_FirstContentNode'
}

export type StartContentConfig = {
  configType: StartContentConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum StartContentConfigType {
  StartContentCanAfterStartingTree = 'StartContent_CanAfterStartingTree',
  StartContentCanIfInTreeFlow = 'StartContent_CanIfInTreeFlow',
  StartContentCanIfUnlocked = 'StartContent_CanIfUnlocked',
  StartContentCanNot = 'StartContent_CanNot'
}

export type StartContentNodeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentNodeId: Scalars['ID']['input'];
};

export type StartContentNodePayload = {
  __typename?: 'StartContentNodePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type StartPublishingV2Input = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rootNodeId: Scalars['ID']['input'];
};

export type StartPublishingV2Payload = {
  __typename?: 'StartPublishingV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  tree: Tree;
};

export type StartStandaloneVocabTrainingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  numWords: Scalars['Int']['input'];
  words: Array<WordInPackageInput>;
};

export type StartStandaloneVocabTrainingPayload = {
  __typename?: 'StartStandaloneVocabTrainingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type StartTreeConfig = {
  configType: StartTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum StartTreeConfigType {
  StartTreeCanNot = 'StartTree_CanNot'
}

export type StartTreeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  nodeId: Scalars['ID']['input'];
  startAtContentNodeId?: InputMaybe<Scalars['ID']['input']>;
};

export type StartTreePayload = {
  __typename?: 'StartTreePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  learnOpportunity: LearnOpportunityV2;
};

export type StartedTreeStateDefinition = TreeStateDefinition & {
  __typename?: 'StartedTreeStateDefinition';
  headContentNode?: Maybe<TreeNode>;
  status: TreeStateStatus | '%future added value';
};

export type StreamFile = {
  __typename?: 'StreamFile';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  thumbnail?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type StripeData = PaymentProviderData & {
  __typename?: 'StripeData';
  dataType: PaymentProviderDataType | '%future added value';
  paymentIntentId: Scalars['String']['output'];
  paymentIntentSecret: Scalars['String']['output'];
  paymentMethod: PaymentMethodType | '%future added value';
};

export type StripeSepaData = PaymentProviderData & {
  __typename?: 'StripeSepaData';
  dataType: PaymentProviderDataType | '%future added value';
  mandateInformation: MandateInformation;
  paymentIntentId: Scalars['String']['output'];
  paymentIntentSecret: Scalars['String']['output'];
  paymentMethod: PaymentMethodType | '%future added value';
};

export type StructureDefinition = {
  coordinates: CoordinatesV2;
  definitionType: StructureType | '%future added value';
  title: Scalars['String']['output'];
};

export enum StructureType {
  Child = 'child',
  Root = 'root'
}

export type SubmitClozeTextElementV2Input = {
  checkedAnswers: Array<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  clozeTextElementId: Scalars['ID']['input'];
  contentSubmissionId: Scalars['ID']['input'];
};

export type SubmitClozeTextElementV2Payload = {
  __typename?: 'SubmitClozeTextElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type SubmitDisplayElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  displayElementId: Scalars['ID']['input'];
};

export type SubmitDisplayElementPayload = {
  __typename?: 'SubmitDisplayElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type SubmitMarkMistakesElementV2Input = {
  checkedMistakeIndices: Array<Scalars['Int']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  markMistakesElementId: Scalars['ID']['input'];
};

export type SubmitMarkMistakesElementV2Payload = {
  __typename?: 'SubmitMarkMistakesElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type SubmitMatrixElementV2Input = {
  checkedIndices: Array<SubmitMatrixIndexCellInput>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  matrixElementId: Scalars['ID']['input'];
};

export type SubmitMatrixElementV2Payload = {
  __typename?: 'SubmitMatrixElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type SubmitMatrixIndexCellInput = {
  index: Scalars['Int']['input'];
  xIdx: Scalars['Int']['input'];
  yIdx: Scalars['Int']['input'];
};

export type SubmitMultipleChoiceElementV2Input = {
  checkedAnswerIndices: Array<Scalars['Int']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  multipleChoiceElementId: Scalars['ID']['input'];
};

export type SubmitMultipleChoiceElementV2Payload = {
  __typename?: 'SubmitMultipleChoiceElementV2Payload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type SubmitOrderElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  order: Array<Scalars['ID']['input']>;
  orderElementId: Scalars['ID']['input'];
};

export type SubmitOrderElementPayload = {
  __typename?: 'SubmitOrderElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type SubmitUploadAsyncElementInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contentSubmissionId: Scalars['ID']['input'];
  fileId: Scalars['ID']['input'];
  uploadAsyncElementId: Scalars['ID']['input'];
};

export type SubmitUploadAsyncElementPayload = {
  __typename?: 'SubmitUploadAsyncElementPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contentSubmission: ContentSubmission;
};

export type Subscription = {
  __typename?: 'Subscription';
  subscribeToPublishingUpdatesV2: PublishingUpdatedEventV2;
};

export enum SubtitleLanguage {
  De = 'de',
  En = 'en'
}

export type SubtitleV2 = {
  __typename?: 'SubtitleV2';
  endTime: Scalars['Long']['output'];
  startTime: Scalars['Long']['output'];
  text: Scalars['String']['output'];
};

export type SubtitlesForLanguage = {
  __typename?: 'SubtitlesForLanguage';
  language: SubtitleLanguage | '%future added value';
  subtitles: Array<VideoSubtitle>;
  transcriptFileId?: Maybe<File>;
};

export type SubtitlesV2 = {
  __typename?: 'SubtitlesV2';
  subtitles: Array<SubtitleV2>;
};

export type SwitchAccountInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  refreshToken: Scalars['String']['input'];
  targetAccount: Scalars['ID']['input'];
};

export type SwitchAccountPayload = {
  __typename?: 'SwitchAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  jwtTokens: JwtLoginInformation;
};

export type SyncHubspotContactsWithUsersInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type SyncHubspotContactsWithUsersPayload = {
  __typename?: 'SyncHubspotContactsWithUsersPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SystemDiscountType = DiscountType & {
  __typename?: 'SystemDiscountType';
  kind: DiscountTypeKind | '%future added value';
};

export enum SystemTag {
  Finished = 'finished',
  FullAccess = 'fullAccess',
  New = 'new',
  TestAccess = 'testAccess'
}

export type Tag = Node & {
  __typename?: 'Tag';
  colorHex: Scalars['String']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Data only accessible by the admin */
export type TagAdminMutationSchema = {
  __typename?: 'TagAdminMutationSchema';
  createTag?: Maybe<CreateTagPayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  updateTag?: Maybe<UpdateTagPayload>;
};


/** Data only accessible by the admin */
export type TagAdminMutationSchemaCreateTagArgs = {
  input: CreateTagInput;
};


/** Data only accessible by the admin */
export type TagAdminMutationSchemaDeleteTagArgs = {
  input: DeleteTagInput;
};


/** Data only accessible by the admin */
export type TagAdminMutationSchemaUpdateTagArgs = {
  input: UpdateTagInput;
};

/** Data only accessible by the admin */
export type TagAdminSchema = {
  __typename?: 'TagAdminSchema';
  Tags: TagsConnection;
};


/** Data only accessible by the admin */
export type TagAdminSchemaTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TagDataInput = {
  isClickable: Scalars['Boolean']['input'];
  isTopic: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type TagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  colorHex: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/** A connection to a list of items. */
export type TagsConnection = {
  __typename?: 'TagsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TagsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TagsEdge = {
  __typename?: 'TagsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Tag;
};

export enum TargetSystem {
  Android = 'android',
  Ios = 'ios'
}

export type TaxData = {
  __typename?: 'TaxData';
  taxIdentificationNumber: Scalars['String']['output'];
  taxNumber: Scalars['String']['output'];
};

export type TaxDataInput = {
  taxIdentificationNumber: Scalars['String']['input'];
  taxNumber: Scalars['String']['input'];
};

export type TaxTotals = {
  __typename?: 'TaxTotals';
  discountTotal: Scalars['BigDecimal']['output'];
  grossPrice: Scalars['BigDecimal']['output'];
  hasTaxFreeProducts: Scalars['Boolean']['output'];
  netPrice: Scalars['BigDecimal']['output'];
  taxTotal: Scalars['BigDecimal']['output'];
};

export enum TeamSize {
  FiftyToHundred = 'fiftyToHundred',
  OneToTen = 'oneToTen',
  OverHundred = 'overHundred',
  TenToTwentyFive = 'tenToTwentyFive',
  TwentyFiveToFifty = 'twentyFiveToFifty'
}

export type TextElementV2 = ElementV2 & {
  __typename?: 'TextElementV2';
  elementType: ElementTypeV2 | '%future added value';
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type TextLearnElement = LearnElement & {
  __typename?: 'TextLearnElement';
  elementType: ElementTypeV2 | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type TextPart = ClozeTextPart & {
  __typename?: 'TextPart';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: ClozeTextPartKind | '%future added value';
  text: Scalars['String']['output'];
};

export type TimestampWithImage = {
  __typename?: 'TimestampWithImage';
  end: Scalars['Int']['output'];
  imageFile?: Maybe<File>;
  start: Scalars['Int']['output'];
};

export type TimestampWithImageInput = {
  end: Scalars['Int']['input'];
  imageFileId?: InputMaybe<Scalars['ID']['input']>;
  start: Scalars['Int']['input'];
};

export type Trailer = {
  __typename?: 'Trailer';
  videoSourceId: Scalars['ID']['output'];
  vimeoId?: Maybe<Scalars['String']['output']>;
};

export type TransformBusinessAccountToAvgsAccountInput = {
  accountId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type TransformBusinessAccountToAvgsAccountPayload = {
  __typename?: 'TransformBusinessAccountToAVGSAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type TransformBusinessAccountToAzavAccountInput = {
  accountId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type TransformBusinessAccountToAzavAccountPayload = {
  __typename?: 'TransformBusinessAccountToAZAVAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type TransformPrivateAccountToAvgsAccountInput = {
  accountId: Scalars['ID']['input'];
  businessBaseData: BusinessBaseDataInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type TransformPrivateAccountToAvgsAccountPayload = {
  __typename?: 'TransformPrivateAccountToAVGSAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type TransformPrivateAccountToAzavAccountInput = {
  accountId: Scalars['ID']['input'];
  businessBaseData: BusinessBaseDataInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type TransformPrivateAccountToAzavAccountPayload = {
  __typename?: 'TransformPrivateAccountToAZAVAccountPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type Tree = {
  __typename?: 'Tree';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  nodes: Array<TreeNode>;
  rootNode?: Maybe<TreeNode>;
};

/** Data only accessible by the admin */
export type TreeAdminMutationSchema = {
  __typename?: 'TreeAdminMutationSchema';
  AddOnlyIfTreeStateVisibilityTreeConfig?: Maybe<AddOnlyIfTreeStateVisibilityTreeConfigPayload>;
  EditDefaultFileAttachment?: Maybe<EditDefaultFileAttachmentPayload>;
  addAfterDateTimeVisibilityTreeConfig?: Maybe<AddAfterDateTimeVisibilityTreeConfigPayload>;
  addBlockPermanentlyRestartIfFailedContentConfig?: Maybe<AddBlockPermanentlyRestartIfFailedContentConfigPayload>;
  addBlockTemporarilyRestartIfFailedContentConfig?: Maybe<AddBlockTemporarilyRestartIfFailedContentConfigPayload>;
  addCanAfterStartingTreeStartContentConfig?: Maybe<AddCanAfterStartingTreeStartContentConfigPayload>;
  addCanIfUnlockedStartContentConfig?: Maybe<AddCanIfUnlockedStartContentConfigPayload>;
  addCanNotRestartIfFailedContentConfig?: Maybe<AddCanNotRestartIfFailedContentConfigPayload>;
  addCrmTreeHeadUpdaterReward?: Maybe<AddCrmTreeHeadUpdaterRewardPayload>;
  addDefaultFileAttachment?: Maybe<AddDefaultFileAttachmentPayload>;
  addDoNotRewardTreeConfig?: Maybe<AddDoNotRewardTreeConfigPayload>;
  addEducationalParticipationCertificateReward?: Maybe<AddEducationalParticipationCertificateRewardPayload>;
  addExternalLicenseReward?: Maybe<AddExternalLicenseRewardPayload>;
  addHideVisibilityTreeConfig?: Maybe<AddHideVisibilityTreeConfigPayload>;
  addIHKCertificateReward?: Maybe<AddIhkCertificateRewardPayload>;
  addNotAfterDateTimeVisibilityTreeConfig?: Maybe<AddNotAfterDateTimeVisibilityTreeConfigPayload>;
  addOnlyAZAVAccountVisibilityTreeConfig?: Maybe<AddOnlyAzavAccountVisibilityTreeConfigPayload>;
  addOnlyAdminsVisibilityTreeConfig?: Maybe<AddOnlyAdminsVisibilityTreeConfigPayload>;
  addOnlyBusinessAccountVisibilityTreeConfig?: Maybe<AddOnlyBusinessAccountVisibilityTreeConfigPayload>;
  addOnlyEditorsVisibilityTreeConfig?: Maybe<AddOnlyEditorsVisibilityTreeConfigPayload>;
  addWordPackageReward?: Maybe<AddWordPackageRewardPayload>;
  addWordProficienciesReward?: Maybe<AddWordProficienciesRewardPayload>;
  cloneTree?: Maybe<CloneTreePayload>;
  constellationCreateBranchRoot?: Maybe<ConstellationCreateBranchRootPayload>;
  createBranchChild?: Maybe<CreateBranchChildPayload>;
  createBranchRoot?: Maybe<CreateBranchRootPayload>;
  createContentChild?: Maybe<CreateContentChildPayload>;
  createContentRoot?: Maybe<CreateContentRootNodePayload>;
  deleteCourseOrMicroLearningLearnable?: Maybe<DeleteCourseOrMicroLearningLearnablePayload>;
  deleteReward?: Maybe<DeleteRewardPayload>;
  editAfterDateTimeVisibilityTreeConfig?: Maybe<EditAfterDateTimeVisibilityTreeConfigPayload>;
  editBlockPermanentlyRestartIfFailedContentConfig?: Maybe<EditBlockPermanentlyRestartIfFailedContentConfigPayload>;
  editBlockTemporarilyRestartIfFailedContentConfig?: Maybe<EditBlockTemporarilyRestartIfFailedContentConfigPayload>;
  editDirectFeedbackFlowELearningContentConfig?: Maybe<EditDirectFeedbackFlowELearningContentConfigPayload>;
  editEducationalParticipationCertificateReward?: Maybe<EditEducationalParticipationCertificateRewardPayload>;
  editExternalLicenseReward?: Maybe<EditExternalLicenseRewardPayload>;
  editNodeCore?: Maybe<EditNodeCorePayload>;
  editNotAfterDateTimeVisibilityTreeConfig?: Maybe<EditNotAfterDateTimeVisibilityTreeConfigPayload>;
  editRootNodePart?: Maybe<EditRootNodePartPayload>;
  editWordPackageReward?: Maybe<EditWordPackageRewardPayload>;
  moveChildNode?: Maybe<MoveChildNodePayload>;
  removeAttachment?: Maybe<RemoveAttachmentPayload>;
  removeNodeFromTree?: Maybe<RemoveNodeFromTreePayload>;
  removeRestartIfFailedContentConfig?: Maybe<RemoveRestartIfFailedContentConfigPayload>;
  removeRewardTreeConfig?: Maybe<RemoveRewardTreeConfigPayload>;
  removeStartContentConfig?: Maybe<RemoveStartContentConfigPayload>;
  removeStartTreeConfig?: Maybe<RemoveStartTreeConfigPayload>;
  removeVisibilityTreeConfig?: Maybe<RemoveVisibilityTreeConfigPayload>;
  setAlwaysPassContentConfig?: Maybe<SetAlwaysPassContentConfigPayload>;
  setAlwaysRestartContinueContentConfig?: Maybe<SetAlwaysRestartContinueContentConfigPayload>;
  setCanNotRestartIfPassedContentConfig?: Maybe<SetCanNotRestartIfPassedContentConfigPayload>;
  setCanRestartIfPassedContentConfig?: Maybe<SetCanRestartIfPassedContentConfigPayload>;
  setConstellationRootExtensionExtension?: Maybe<SetConstellationRootExtensionExtensionPayload>;
  setContractPartnerInConstellationRootExtensionExtension?: Maybe<SetContractPartnerInConstellationRootExtensionExtensionPayload>;
  setDirectFeedbackFlowELearningContentConfig?: Maybe<SetDirectFeedbackFlowELearningContentConfigPayload>;
  setDoNotShowAnswerTreeConfig?: Maybe<SetDoNotShowAnswerTreeConfigPayload>;
  setDoRewardContentConfig?: Maybe<SetDoRewardContentConfigPayload>;
  setFinishContentSubmissionTriggerInContent?: Maybe<SetFinishContentSubmissionTriggerInContentPayload>;
  setIHKFlowPassContentConfig?: Maybe<SetIhkFlowPassContentConfigPayload>;
  setRootExtensionImpl?: Maybe<SetRootExtensionImplPayload>;
  setSimplyContinueFlowELearningContentConfig?: Maybe<SetSimplyContinueFlowELearningContentConfigPayload>;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddOnlyIfTreeStateVisibilityTreeConfigArgs = {
  input: AddOnlyIfTreeStateVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditDefaultFileAttachmentArgs = {
  input: EditDefaultFileAttachmentInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddAfterDateTimeVisibilityTreeConfigArgs = {
  input: AddAfterDateTimeVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddBlockPermanentlyRestartIfFailedContentConfigArgs = {
  input: AddBlockPermanentlyRestartIfFailedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddBlockTemporarilyRestartIfFailedContentConfigArgs = {
  input: AddBlockTemporarilyRestartIfFailedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddCanAfterStartingTreeStartContentConfigArgs = {
  input: AddCanAfterStartingTreeStartContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddCanIfUnlockedStartContentConfigArgs = {
  input: AddCanIfUnlockedStartContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddCanNotRestartIfFailedContentConfigArgs = {
  input: AddCanNotRestartIfFailedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddCrmTreeHeadUpdaterRewardArgs = {
  input: AddCrmTreeHeadUpdaterRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddDefaultFileAttachmentArgs = {
  input: AddDefaultFileAttachmentInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddDoNotRewardTreeConfigArgs = {
  input: AddDoNotRewardTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddEducationalParticipationCertificateRewardArgs = {
  input: AddEducationalParticipationCertificateRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddExternalLicenseRewardArgs = {
  input: AddExternalLicenseRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddHideVisibilityTreeConfigArgs = {
  input: AddHideVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddIhkCertificateRewardArgs = {
  input: AddIhkCertificateRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddNotAfterDateTimeVisibilityTreeConfigArgs = {
  input: AddNotAfterDateTimeVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddOnlyAzavAccountVisibilityTreeConfigArgs = {
  input: AddOnlyAzavAccountVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddOnlyAdminsVisibilityTreeConfigArgs = {
  input: AddOnlyAdminsVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddOnlyBusinessAccountVisibilityTreeConfigArgs = {
  input: AddOnlyBusinessAccountVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddOnlyEditorsVisibilityTreeConfigArgs = {
  input: AddOnlyEditorsVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddWordPackageRewardArgs = {
  input: AddWordPackageRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaAddWordProficienciesRewardArgs = {
  input: AddWordProficienciesRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaCloneTreeArgs = {
  input: CloneTreeInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaConstellationCreateBranchRootArgs = {
  input: ConstellationCreateBranchRootInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaCreateBranchChildArgs = {
  input: CreateBranchChildInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaCreateBranchRootArgs = {
  input: CreateBranchRootInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaCreateContentChildArgs = {
  input: CreateContentChildInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaCreateContentRootArgs = {
  input: CreateContentRootNodeInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaDeleteCourseOrMicroLearningLearnableArgs = {
  input: DeleteCourseOrMicroLearningLearnableInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaDeleteRewardArgs = {
  input: DeleteRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditAfterDateTimeVisibilityTreeConfigArgs = {
  input: EditAfterDateTimeVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditBlockPermanentlyRestartIfFailedContentConfigArgs = {
  input: EditBlockPermanentlyRestartIfFailedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditBlockTemporarilyRestartIfFailedContentConfigArgs = {
  input: EditBlockTemporarilyRestartIfFailedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditDirectFeedbackFlowELearningContentConfigArgs = {
  input: EditDirectFeedbackFlowELearningContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditEducationalParticipationCertificateRewardArgs = {
  input: EditEducationalParticipationCertificateRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditExternalLicenseRewardArgs = {
  input: EditExternalLicenseRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditNodeCoreArgs = {
  input: EditNodeCoreInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditNotAfterDateTimeVisibilityTreeConfigArgs = {
  input: EditNotAfterDateTimeVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditRootNodePartArgs = {
  input: EditRootNodePartInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaEditWordPackageRewardArgs = {
  input: EditWordPackageRewardInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaMoveChildNodeArgs = {
  input: MoveChildNodeInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaRemoveAttachmentArgs = {
  input: RemoveAttachmentInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaRemoveNodeFromTreeArgs = {
  input: RemoveNodeFromTreeInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaRemoveRestartIfFailedContentConfigArgs = {
  input: RemoveRestartIfFailedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaRemoveRewardTreeConfigArgs = {
  input: RemoveRewardTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaRemoveStartContentConfigArgs = {
  input: RemoveStartContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaRemoveStartTreeConfigArgs = {
  input: RemoveStartTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaRemoveVisibilityTreeConfigArgs = {
  input: RemoveVisibilityTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetAlwaysPassContentConfigArgs = {
  input: SetAlwaysPassContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetAlwaysRestartContinueContentConfigArgs = {
  input: SetAlwaysRestartContinueContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetCanNotRestartIfPassedContentConfigArgs = {
  input: SetCanNotRestartIfPassedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetCanRestartIfPassedContentConfigArgs = {
  input: SetCanRestartIfPassedContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetConstellationRootExtensionExtensionArgs = {
  input: SetConstellationRootExtensionExtensionInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetContractPartnerInConstellationRootExtensionExtensionArgs = {
  input: SetContractPartnerInConstellationRootExtensionExtensionInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetDirectFeedbackFlowELearningContentConfigArgs = {
  input: SetDirectFeedbackFlowELearningContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetDoNotShowAnswerTreeConfigArgs = {
  input: SetDoNotShowAnswerTreeConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetDoRewardContentConfigArgs = {
  input: SetDoRewardContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetFinishContentSubmissionTriggerInContentArgs = {
  input: SetFinishContentSubmissionTriggerInContentInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetIhkFlowPassContentConfigArgs = {
  input: SetIhkFlowPassContentConfigInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetRootExtensionImplArgs = {
  input: SetRootExtensionImplInput;
};


/** Data only accessible by the admin */
export type TreeAdminMutationSchemaSetSimplyContinueFlowELearningContentConfigArgs = {
  input: SetSimplyContinueFlowELearningContentConfigInput;
};

/** Data only accessible by the admin */
export type TreeAdminSchema = {
  __typename?: 'TreeAdminSchema';
  GetContentNodes: TreeNodesConnection;
  GetRootNodes: TreeNodesConnection;
  Tree: Tree;
};


/** Data only accessible by the admin */
export type TreeAdminSchemaGetContentNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type TreeAdminSchemaGetRootNodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByAttachmentId?: InputMaybe<Scalars['ID']['input']>;
  filterByCanBeRewardedFrom?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByCanBeRewardedTo?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByIsReleased?: InputMaybe<Scalars['Boolean']['input']>;
  filterByIsVisibleFrom?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByIsVisibleTo?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByReleasedAtFrom?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByShowAnswersFrom?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByShowAnswersTo?: InputMaybe<Scalars['ZonedDateTIme']['input']>;
  filterByTagIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  filterByTitleOrDescriptionOrShortDescription?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type TreeAdminSchemaTreeArgs = {
  rootId: Scalars['ID']['input'];
};

export type TreeLicenseDefinitionData = LicenseDefinitionData & {
  __typename?: 'TreeLicenseDefinitionData';
  kind: LicenseDefinitionDataKind | '%future added value';
  name: Scalars['String']['output'];
  rootInfo?: Maybe<LicenseDefinitionRootInfo>;
};

export type TreeLicenseDefinitionDataInput = {
  name: Scalars['String']['input'];
  rootId: Scalars['ID']['input'];
};

export type TreeNode = Node & {
  __typename?: 'TreeNode';
  attachments: Array<AttachmentV2>;
  description?: Maybe<Scalars['String']['output']>;
  hasBeenPublishedOnce: Scalars['Boolean']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  imageId?: Maybe<Scalars['ID']['output']>;
  instructors: Array<Instructor>;
  parentId?: Maybe<Scalars['ID']['output']>;
  rootId: Scalars['ID']['output'];
  shortDescription?: Maybe<Scalars['String']['output']>;
  structureDefinition: StructureDefinition;
  typeDefinition: TypeDefinition;
  versioning: Versioning;
};

/** A connection to a list of items. */
export type TreeNodesConnection = {
  __typename?: 'TreeNodesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TreeNodesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TreeNodesEdge = {
  __typename?: 'TreeNodesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TreeNode;
};

export type TreeState = Node & {
  __typename?: 'TreeState';
  definition: TreeStateDefinition;
  extension: TreeStateExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  progressPercentage: Scalars['Int']['output'];
  rootNode: TreeNode;
  startedAt: Scalars['ZonedDateTIme']['output'];
  user?: Maybe<User>;
};

export type TreeStateDefinition = {
  status: TreeStateStatus | '%future added value';
};

export type TreeStateExtension = {
  doNotUse: Scalars['String']['output'];
};

export enum TreeStateStatus {
  Finished = 'finished',
  Started = 'started'
}

/** A connection to a list of items. */
export type TreeStatesConnection = {
  __typename?: 'TreeStatesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TreeStatesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TreeStatesEdge = {
  __typename?: 'TreeStatesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TreeState;
};

export type Trend = Node & {
  __typename?: 'Trend';
  aboutOffersHeadingAndDescription: HeadingAndDescription;
  coachingHeadingAndDescription: HeadingAndDescription;
  coachingImage?: Maybe<File>;
  customerData: CustomerData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  learnables: Array<PublishedLearnable>;
  position?: Maybe<Scalars['Int']['output']>;
  potentialAnalysisHeadingAndDescription: HeadingAndDescription;
  trendData: TrendData;
  trendMedia: TrendMedia;
};

/** Data only accessible by the admin */
export type TrendAdminMutationSchema = {
  __typename?: 'TrendAdminMutationSchema';
  createTrend?: Maybe<CreateTrendPayload>;
  deleteTrend?: Maybe<DeleteTrendPayload>;
  editTrend?: Maybe<EditTrendPayload>;
  setTrendOrder?: Maybe<SetTrendOrderPayload>;
};


/** Data only accessible by the admin */
export type TrendAdminMutationSchemaCreateTrendArgs = {
  input: CreateTrendInput;
};


/** Data only accessible by the admin */
export type TrendAdminMutationSchemaDeleteTrendArgs = {
  input: DeleteTrendInput;
};


/** Data only accessible by the admin */
export type TrendAdminMutationSchemaEditTrendArgs = {
  input: EditTrendInput;
};


/** Data only accessible by the admin */
export type TrendAdminMutationSchemaSetTrendOrderArgs = {
  input: SetTrendOrderInput;
};

/** Data only accessible by the admin */
export type TrendAdminSchema = {
  __typename?: 'TrendAdminSchema';
  trend: TrendConnection;
};


/** Data only accessible by the admin */
export type TrendAdminSchemaTrendArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of items. */
export type TrendConnection = {
  __typename?: 'TrendConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TrendEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TrendData = {
  __typename?: 'TrendData';
  advantages: Array<Advantage>;
  description: Scalars['String']['output'];
  icon: Icon | '%future added value';
  name: Scalars['String']['output'];
  tags: Array<AcademiesTag>;
  visible: Scalars['Boolean']['output'];
};

export type TrendDataInput = {
  advantages: Array<AdvantageInput>;
  description: Scalars['String']['input'];
  icon: Icon | '%future added value';
  name: Scalars['String']['input'];
  tagIds: Array<Scalars['ID']['input']>;
  visible: Scalars['Boolean']['input'];
};

/** An edge in a connection. */
export type TrendEdge = {
  __typename?: 'TrendEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Trend;
};

export type TrendIdWithPosition = {
  position: Scalars['Int']['input'];
  trendId: Scalars['ID']['input'];
};

export type TrendMedia = {
  file?: Maybe<File>;
  kind: TrendMediaKind | '%future added value';
};

export type TrendMediaInput = {
  image?: InputMaybe<ImageTrendMediaInput>;
  video?: InputMaybe<VideoTrendMediaInput>;
};

export enum TrendMediaKind {
  Image = 'image',
  Video = 'video'
}

/** Data only accessible by the admin */
export type TriggerActionAdminMutationSchema = {
  __typename?: 'TriggerActionAdminMutationSchema';
  addGamificationPointsFinishContentSubmissionActionToActionResultToNextActions?: Maybe<AddGamificationPointsFinishContentSubmissionActionToActionResultToNextActionsPayload>;
  addGamificationPointsFinishContentSubmissionActionToTrigger?: Maybe<AddGamificationPointsFinishContentSubmissionActionToTriggerPayload>;
  addIHKCertificateFinishContentSubmissionActionToActionResultToNextActions?: Maybe<AddIhkCertificateFinishContentSubmissionActionToActionResultToNextActionsPayload>;
  addIHKCertificateFinishContentSubmissionActionToTrigger?: Maybe<AddIhkCertificateFinishContentSubmissionActionToTriggerPayload>;
  createActionResultToNextActions?: Maybe<CreateActionResultToNextActionsPayload>;
  deleteAction?: Maybe<DeleteActionPayload>;
  deleteActionResultToNextActions?: Maybe<DeleteActionResultToNextActionsPayload>;
  publishTrigger?: Maybe<PublishTriggerPayload>;
  removeActionFromActionResultToNextActionsAndDeleteIt?: Maybe<RemoveActionFromActionResultToNextActionsAndDeleteItPayload>;
  removeActionFromTriggerAndDeleteIt?: Maybe<RemoveActionFromTriggerAndDeleteItPayload>;
  setActionName?: Maybe<SetActionNamePayload>;
  setFieldValueKindAndIdMap?: Maybe<SetFieldValueKindAndIdMapInActionResultToNextActionPayload>;
  setTriggerName?: Maybe<SetTriggerNamePayload>;
};


/** Data only accessible by the admin */
export type TriggerActionAdminMutationSchemaAddGamificationPointsFinishContentSubmissionActionToActionResultToNextActionsArgs = {
  input: AddGamificationPointsFinishContentSubmissionActionToActionResultToNextActionsInput;
};


/** Data only accessible by the admin */
export type TriggerActionAdminMutationSchemaAddGamificationPointsFinishContentSubmissionActionToTriggerArgs = {
  input: AddGamificationPointsFinishContentSubmissionActionToTriggerInput;
};


/** Data only accessible by the admin */
export type TriggerActionAdminMutationSchemaAddIhkCertificateFinishContentSubmissionActionToActionResultToNextActionsArgs = {
  input: AddIhkCertificateFinishContentSubmissionActionToActionResultToNextActionsInput;
};


/** Data only accessible by the admin */
export type TriggerActionAdminMutationSchemaAddIhkCertificateFinishContentSubmissionActionToTriggerArgs = {
  input: AddIhkCertificateFinishContentSubmissionActionToTriggerInput;
};


/** Data only accessible by the admin */
export type TriggerActionAdminMutationSchemaCreateActionResultToNextActionsArgs = {
  input: CreateActionResultToNextActionsInput;
};


/** Data only accessible by the admin */
export type TriggerActionAdminMutationSchemaDeleteActionArgs = {
  input: DeleteActionInput;
};


/** Data only accessible by the admin */
export type TriggerActionAdminMutationSchemaDeleteActionResultToNextActionsArgs = {
  input: DeleteActionResultToNextActionsInput;
};


/** Data only accessible by the admin */
export type TriggerActionAdminMutationSchemaPublishTriggerArgs = {
  input: PublishTriggerInput;
};


/** Data only accessible by the admin */
export type TriggerActionAdminMutationSchemaRemoveActionFromActionResultToNextActionsAndDeleteItArgs = {
  input: RemoveActionFromActionResultToNextActionsAndDeleteItInput;
};


/** Data only accessible by the admin */
export type TriggerActionAdminMutationSchemaRemoveActionFromTriggerAndDeleteItArgs = {
  input: RemoveActionFromTriggerAndDeleteItInput;
};


/** Data only accessible by the admin */
export type TriggerActionAdminMutationSchemaSetActionNameArgs = {
  input: SetActionNameInput;
};


/** Data only accessible by the admin */
export type TriggerActionAdminMutationSchemaSetFieldValueKindAndIdMapArgs = {
  input: SetFieldValueKindAndIdMapInActionResultToNextActionInput;
};


/** Data only accessible by the admin */
export type TriggerActionAdminMutationSchemaSetTriggerNameArgs = {
  input: SetTriggerNameInput;
};

/** Data only accessible by the admin */
export type TriggerActionAdminSchema = {
  __typename?: 'TriggerActionAdminSchema';
  ActionKinds: TriggerAction_ActionKindsConnection;
  AvailableFieldDefinitionsForActionIfParentActionResultToNextActions: TriggerAction_FieldDefinitionsConnection;
  AvailableFieldDefinitionsForActionIfParentTrigger: TriggerAction_FieldDefinitionsConnection;
  FieldValueKindAndIdsForActionKind: TriggerAction_FieldValueKindAndIdsConnection;
  Triggers: TriggerAction_TriggersConnection;
};


/** Data only accessible by the admin */
export type TriggerActionAdminSchemaActionKindsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type TriggerActionAdminSchemaAvailableFieldDefinitionsForActionIfParentActionResultToNextActionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type TriggerActionAdminSchemaAvailableFieldDefinitionsForActionIfParentTriggerArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByFieldValueKind?: InputMaybe<TriggerAction_FieldValueKind>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  triggerId: Scalars['ID']['input'];
};


/** Data only accessible by the admin */
export type TriggerActionAdminSchemaFieldValueKindAndIdsForActionKindArgs = {
  actionKind: TriggerAction_ActionKind;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Data only accessible by the admin */
export type TriggerActionAdminSchemaTriggersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TriggerAction_Action = Node & {
  __typename?: 'TriggerAction_Action';
  actionResultToNextActionsOpts: TriggerAction_ActionResultToNextActionsOptsConnection;
  data: TriggerAction_ActionData;
  fieldValueKindAndIdMap: Array<TriggerAction_FieldValueKindAndIdMapEntry>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};


export type TriggerAction_ActionActionResultToNextActionsOptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TriggerAction_ActionData = {
  kind: TriggerAction_ActionKind | '%future added value';
};

export type TriggerAction_ActionInputFieldSource = TriggerAction_FieldSource & {
  __typename?: 'TriggerAction_ActionInputFieldSource';
  actionKind: TriggerAction_ActionKind | '%future added value';
  kind: TriggerAction_FieldSourceKind | '%future added value';
};

export enum TriggerAction_ActionKind {
  GamificationPointsFinishContentSubmission = 'GamificationPointsFinishContentSubmission',
  IhkCertificateFinishContentSubmission = 'IHKCertificateFinishContentSubmission'
}

/** A connection to a list of items. */
export type TriggerAction_ActionKindsConnection = {
  __typename?: 'TriggerAction_ActionKindsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TriggerAction_ActionKindsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TriggerAction_ActionKindsEdge = {
  __typename?: 'TriggerAction_ActionKindsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TriggerAction_ActionKind | '%future added value';
};

export enum TriggerAction_ActionResultKind {
  GamificationPointsFinishContentSubmissionAlreadyReceivedPoints = 'GamificationPointsFinishContentSubmission_AlreadyReceivedPoints',
  GamificationPointsFinishContentSubmissionNoPointsReceived = 'GamificationPointsFinishContentSubmission_NoPointsReceived',
  GamificationPointsFinishContentSubmissionNotPassedIhkTestFlow = 'GamificationPointsFinishContentSubmission_NotPassedIHKTestFlow',
  GamificationPointsFinishContentSubmissionPointsReceived = 'GamificationPointsFinishContentSubmission_PointsReceived',
  IhkCertificateFinishContentSubmissionReadyToOrder = 'IHKCertificateFinishContentSubmission_ReadyToOrder'
}

export type TriggerAction_ActionResultOutputFieldSource = TriggerAction_FieldSource & {
  __typename?: 'TriggerAction_ActionResultOutputFieldSource';
  action?: Maybe<TriggerAction_Action>;
  actionResultKind: TriggerAction_ActionResultKind | '%future added value';
  kind: TriggerAction_FieldSourceKind | '%future added value';
};

export type TriggerAction_ActionResultToNextActions = {
  __typename?: 'TriggerAction_ActionResultToNextActions';
  actionResultKind: TriggerAction_ActionResultKind | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  nextActions: TriggerAction_ActionsConnection;
};


export type TriggerAction_ActionResultToNextActionsNextActionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TriggerAction_ActionResultToNextActionsOpt = {
  actionResultKind: TriggerAction_ActionResultKind | '%future added value';
  id: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type TriggerAction_ActionResultToNextActionsOptsConnection = {
  __typename?: 'TriggerAction_ActionResultToNextActionsOptsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TriggerAction_ActionResultToNextActionsOptsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TriggerAction_ActionResultToNextActionsOptsEdge = {
  __typename?: 'TriggerAction_ActionResultToNextActionsOptsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TriggerAction_ActionResultToNextActionsOpt;
};

/** A connection to a list of items. */
export type TriggerAction_ActionsConnection = {
  __typename?: 'TriggerAction_ActionsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TriggerAction_ActionsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TriggerAction_ActionsEdge = {
  __typename?: 'TriggerAction_ActionsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TriggerAction_Action;
};

export type TriggerAction_BuiltInOutputFieldSource = TriggerAction_FieldSource & {
  __typename?: 'TriggerAction_BuiltInOutputFieldSource';
  kind: TriggerAction_FieldSourceKind | '%future added value';
};

export type TriggerAction_FieldDefinition = {
  __typename?: 'TriggerAction_FieldDefinition';
  fieldIdWithinSource: Scalars['ID']['output'];
  fieldValueKind: TriggerAction_FieldValueKind | '%future added value';
  source: TriggerAction_FieldSource;
};

/** A connection to a list of items. */
export type TriggerAction_FieldDefinitionsConnection = {
  __typename?: 'TriggerAction_FieldDefinitionsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TriggerAction_FieldDefinitionsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TriggerAction_FieldDefinitionsEdge = {
  __typename?: 'TriggerAction_FieldDefinitionsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TriggerAction_FieldDefinition;
};

export type TriggerAction_FieldSource = {
  kind: TriggerAction_FieldSourceKind | '%future added value';
};

export enum TriggerAction_FieldSourceKind {
  ActionInput = 'ActionInput',
  ActionResultOutput = 'ActionResultOutput',
  BuiltInOutput = 'BuiltInOutput',
  TriggerOutput = 'TriggerOutput'
}

export enum TriggerAction_FieldValueKind {
  AccountId = 'AccountId',
  Boolean = 'Boolean',
  DateTime = 'DateTime',
  GamificationPointsId = 'GamificationPointsId',
  IhkCertificateOrderId = 'IHKCertificateOrderId',
  Int = 'Int',
  String = 'String',
  TriggerKind = 'TriggerKind',
  UserId = 'UserId'
}

export type TriggerAction_FieldValueKindAndId = {
  __typename?: 'TriggerAction_FieldValueKindAndId';
  fieldValueKind: TriggerAction_FieldValueKind | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export type TriggerAction_FieldValueKindAndIdInput = {
  fieldId: Scalars['ID']['input'];
  fieldValueKind: TriggerAction_FieldValueKindInput | '%future added value';
};

export type TriggerAction_FieldValueKindAndIdMapEntry = {
  __typename?: 'TriggerAction_FieldValueKindAndIdMapEntry';
  fromOutput: TriggerAction_FieldValueKindAndId;
  toInput: TriggerAction_FieldValueKindAndId;
};

export type TriggerAction_FieldValueKindAndIdMapEntryInput = {
  fromOutput: TriggerAction_FieldValueKindAndIdInput;
  toInput: TriggerAction_FieldValueKindAndIdInput;
};

/** A connection to a list of items. */
export type TriggerAction_FieldValueKindAndIdsConnection = {
  __typename?: 'TriggerAction_FieldValueKindAndIdsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TriggerAction_FieldValueKindAndIdsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TriggerAction_FieldValueKindAndIdsEdge = {
  __typename?: 'TriggerAction_FieldValueKindAndIdsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TriggerAction_FieldValueKindAndId;
};

export enum TriggerAction_FieldValueKindInput {
  AccountId = 'AccountId',
  Boolean = 'Boolean',
  DateTime = 'DateTime',
  GamificationPointsId = 'GamificationPointsId',
  IhkCertificateOrderId = 'IHKCertificateOrderId',
  Int = 'Int',
  String = 'String',
  TriggerKind = 'TriggerKind',
  UserId = 'UserId'
}

export type TriggerAction_FinishContentSubmissionTriggerData = TriggerAction_TriggerData & {
  __typename?: 'TriggerAction_FinishContentSubmissionTriggerData';
  kind: TriggerAction_TriggerKind | '%future added value';
};

export type TriggerAction_GamificationPointsFinishContentSubmissionActionData = TriggerAction_ActionData & {
  __typename?: 'TriggerAction_GamificationPointsFinishContentSubmissionActionData';
  kind: TriggerAction_ActionKind | '%future added value';
};

export type TriggerAction_IhkCertificateFinishContentSubmissionActionData = TriggerAction_ActionData & {
  __typename?: 'TriggerAction_IHKCertificateFinishContentSubmissionActionData';
  kind: TriggerAction_ActionKind | '%future added value';
};

export type TriggerAction_NoneActionResultToNextActions = TriggerAction_ActionResultToNextActionsOpt & {
  __typename?: 'TriggerAction_NoneActionResultToNextActions';
  actionResultKind: TriggerAction_ActionResultKind | '%future added value';
  id: Scalars['ID']['output'];
};

export type TriggerAction_PublishedAction = {
  __typename?: 'TriggerAction_PublishedAction';
  actionResultToNextActionsOpts: TriggerAction_PublishedActionResultToNextActionsOptsConnection;
  data: TriggerAction_ActionData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};


export type TriggerAction_PublishedActionActionResultToNextActionsOptsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TriggerAction_PublishedActionResultToNextActions = {
  __typename?: 'TriggerAction_PublishedActionResultToNextActions';
  actionResultKind: TriggerAction_ActionResultKind | '%future added value';
  actions: TriggerAction_PublishedActionsConnection;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};


export type TriggerAction_PublishedActionResultToNextActionsActionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TriggerAction_PublishedActionResultToNextActionsOpt = {
  id: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type TriggerAction_PublishedActionResultToNextActionsOptsConnection = {
  __typename?: 'TriggerAction_PublishedActionResultToNextActionsOptsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TriggerAction_PublishedActionResultToNextActionsOptsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TriggerAction_PublishedActionResultToNextActionsOptsEdge = {
  __typename?: 'TriggerAction_PublishedActionResultToNextActionsOptsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TriggerAction_PublishedActionResultToNextActionsOpt;
};

/** A connection to a list of items. */
export type TriggerAction_PublishedActionsConnection = {
  __typename?: 'TriggerAction_PublishedActionsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TriggerAction_PublishedActionsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TriggerAction_PublishedActionsEdge = {
  __typename?: 'TriggerAction_PublishedActionsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TriggerAction_PublishedAction;
};

export type TriggerAction_PublishedNoneActionResultToNextActions = TriggerAction_PublishedActionResultToNextActionsOpt & {
  __typename?: 'TriggerAction_PublishedNoneActionResultToNextActions';
  actionResultKind: TriggerAction_ActionResultKind | '%future added value';
  id: Scalars['ID']['output'];
};

export type TriggerAction_PublishedSomeActionResultToNextActions = TriggerAction_PublishedActionResultToNextActionsOpt & {
  __typename?: 'TriggerAction_PublishedSomeActionResultToNextActions';
  actionResultToNextAction?: Maybe<TriggerAction_PublishedActionResultToNextActions>;
  id: Scalars['ID']['output'];
};

export type TriggerAction_PublishedTrigger = {
  __typename?: 'TriggerAction_PublishedTrigger';
  actions: TriggerAction_PublishedActionsConnection;
  data: TriggerAction_TriggerData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
};


export type TriggerAction_PublishedTriggerActionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TriggerAction_SomeActionResultToNextActions = TriggerAction_ActionResultToNextActionsOpt & {
  __typename?: 'TriggerAction_SomeActionResultToNextActions';
  actionResultKind: TriggerAction_ActionResultKind | '%future added value';
  actionResultToNextAction?: Maybe<TriggerAction_ActionResultToNextActions>;
  id: Scalars['ID']['output'];
};

export type TriggerAction_Trigger = Node & {
  __typename?: 'TriggerAction_Trigger';
  actions: TriggerAction_ActionsConnection;
  data: TriggerAction_TriggerData;
  doUnpublishedChangesExist: Scalars['Boolean']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedTrigger?: Maybe<TriggerAction_PublishedTrigger>;
};


export type TriggerAction_TriggerActionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TriggerAction_TriggerData = {
  kind: TriggerAction_TriggerKind | '%future added value';
};

export enum TriggerAction_TriggerKind {
  FinishContentSubmission = 'FinishContentSubmission'
}

export type TriggerAction_TriggerOutputFieldSource = TriggerAction_FieldSource & {
  __typename?: 'TriggerAction_TriggerOutputFieldSource';
  kind: TriggerAction_FieldSourceKind | '%future added value';
  triggerKind: TriggerAction_TriggerKind | '%future added value';
};

/** A connection to a list of items. */
export type TriggerAction_TriggersConnection = {
  __typename?: 'TriggerAction_TriggersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TriggerAction_TriggersEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TriggerAction_TriggersEdge = {
  __typename?: 'TriggerAction_TriggersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TriggerAction_Trigger;
};

export type TriggerResendActivationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type TriggerResendActivationPayload = {
  __typename?: 'TriggerResendActivationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type TriggerResetPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type TriggerResetPasswordPayload = {
  __typename?: 'TriggerResetPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type TypeDefinition = {
  definitionType: TypeDefinitionType | '%future added value';
};

export enum TypeDefinitionType {
  Branch = 'branch',
  Content = 'content'
}

export type UnlockInfo = {
  kind: UnlockInfoKind | '%future added value';
};

export type UnlockInfoDemo = UnlockInfo & {
  __typename?: 'UnlockInfoDemo';
  firstContentCoordinatesIndexPath: Array<Scalars['Int']['output']>;
  firstContentId: Scalars['ID']['output'];
  kind: UnlockInfoKind | '%future added value';
};

export type UnlockInfoFullAccess = UnlockInfo & {
  __typename?: 'UnlockInfoFullAccess';
  kind: UnlockInfoKind | '%future added value';
};

export enum UnlockInfoKind {
  Demo = 'Demo',
  ErrorOccurred = 'ErrorOccurred',
  FullAccess = 'FullAccess',
  WallNotFound = 'WallNotFound'
}

export type UnlockInfoWallNotFound = UnlockInfo & {
  __typename?: 'UnlockInfoWallNotFound';
  kind: UnlockInfoKind | '%future added value';
};

export type UnpublishedCourseLearnable = UnpublishedLearnable & {
  __typename?: 'UnpublishedCourseLearnable';
  id: Scalars['ID']['output'];
  kind: LearnableKind | '%future added value';
  root?: Maybe<TreeNode>;
};

export type UnpublishedGroupCoachingLearnable = UnpublishedLearnable & {
  __typename?: 'UnpublishedGroupCoachingLearnable';
  groupCoaching?: Maybe<CoachingOffer>;
  id: Scalars['ID']['output'];
  kind: LearnableKind | '%future added value';
};

export type UnpublishedLearnable = {
  id: Scalars['ID']['output'];
  kind: LearnableKind | '%future added value';
};

/** A connection to a list of items. */
export type UnpublishedLearnablesConnection = {
  __typename?: 'UnpublishedLearnablesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UnpublishedLearnablesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UnpublishedLearnablesEdge = {
  __typename?: 'UnpublishedLearnablesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UnpublishedLearnable;
};

export type UnpublishedMicroLearningLearnable = UnpublishedLearnable & {
  __typename?: 'UnpublishedMicroLearningLearnable';
  id: Scalars['ID']['output'];
  kind: LearnableKind | '%future added value';
  root?: Maybe<TreeNode>;
};

export type UnpublishedOneToOneCoachingLearnable = UnpublishedLearnable & {
  __typename?: 'UnpublishedOneToOneCoachingLearnable';
  id: Scalars['ID']['output'];
  kind: LearnableKind | '%future added value';
  oneToOneCoaching?: Maybe<CoachingOffer>;
};

export type UntouchedAndPreviouslyIncorrectElementState = ElementState & {
  __typename?: 'UntouchedAndPreviouslyIncorrectElementState';
  element: LearnElement;
  kind: ElementStateKind | '%future added value';
};

export type UntouchedElementState = ElementState & {
  __typename?: 'UntouchedElementState';
  element: LearnElement;
  kind: ElementStateKind | '%future added value';
};

export type UpdateBusinessBillingDetailsAndInitiateCheckoutInput = {
  city: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  company: Scalars['String']['input'];
  companyDetails?: InputMaybe<Scalars['String']['input']>;
  companyType: CompanyTypeInput | '%future added value';
  houseNumber: Scalars['String']['input'];
  invoiceEmail?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  phoneNumber: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  street: Scalars['String']['input'];
  taxIdentificationNumber: Scalars['String']['input'];
};

export type UpdateBusinessBillingDetailsAndInitiateCheckoutPayload = {
  __typename?: 'UpdateBusinessBillingDetailsAndInitiateCheckoutPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  clientSecret: Scalars['String']['output'];
  order: Order;
};

export type UpdateBusinessBillingDetailsInput = {
  city: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  company: Scalars['String']['input'];
  companyDetails?: InputMaybe<Scalars['String']['input']>;
  companyType: CompanyTypeInput | '%future added value';
  country: Scalars['String']['input'];
  houseNumber: Scalars['String']['input'];
  invoiceEmail?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  phoneNumber: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  street: Scalars['String']['input'];
  taxIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBusinessBillingDetailsPayload = {
  __typename?: 'UpdateBusinessBillingDetailsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type UpdateCartInput = {
  cartSelection: CartSelectionInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};

export type UpdateCartPayload = {
  __typename?: 'UpdateCartPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type UpdateInstructorImplInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: InstructorImplInput;
  id: Scalars['ID']['input'];
};

export type UpdateInstructorImplPayload = {
  __typename?: 'UpdateInstructorImplPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: InstructorImplsEdge;
};

export type UpdatePersonalizedEmailTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: PersonalizedEmailTemplateInput;
  id: Scalars['ID']['input'];
};

export type UpdatePersonalizedEmailTemplatePayload = {
  __typename?: 'UpdatePersonalizedEmailTemplatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: PersonalizedEmailTemplatesEdge;
};

export type UpdatePersonalizedNotificationTemplateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: PersonalizedNotificationTemplateInput;
  id: Scalars['ID']['input'];
};

export type UpdatePersonalizedNotificationTemplatePayload = {
  __typename?: 'UpdatePersonalizedNotificationTemplatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: PersonalizedNotificationTemplatesEdge;
};

export type UpdatePrivateBillingDetailsAndInitiateCheckoutInput = {
  city: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth: Scalars['ZonedDateTIme']['input'];
  firstName: Scalars['String']['input'];
  houseNumber: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  orderId: Scalars['ID']['input'];
  phoneNumber: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  salutation: SalutationType | '%future added value';
  street: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePrivateBillingDetailsAndInitiateCheckoutPayload = {
  __typename?: 'UpdatePrivateBillingDetailsAndInitiateCheckoutPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  clientSecret: Scalars['String']['output'];
  order: Order;
};

export type UpdatePrivateBillingDetailsInput = {
  city: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  dateOfBirth: Scalars['ZonedDateTIme']['input'];
  firstName: Scalars['String']['input'];
  houseNumber: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  orderId: Scalars['ID']['input'];
  phoneNumber: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  salutation: SalutationType | '%future added value';
  street: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePrivateBillingDetailsPayload = {
  __typename?: 'UpdatePrivateBillingDetailsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  order: Order;
};

export type UpdateTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: TagInput;
  id: Scalars['ID']['input'];
};

export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data: TagsEdge;
};

export type UpdateUsageLimited = {
  maxAmountOfUsages?: InputMaybe<Scalars['Int']['input']>;
  maxAmountOfUsagesPerAccount?: InputMaybe<Scalars['Int']['input']>;
  onlyForAccountIds: Array<Scalars['ID']['input']>;
  onlyForProductIds: Array<Scalars['ID']['input']>;
};

export type UploadAsyncElement = AsyncElement & {
  __typename?: 'UploadAsyncElement';
  assignedEvaluator?: Maybe<User>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: AsyncElementKind | '%future added value';
  taskDescription?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type UploadAsyncElementTask = {
  assignedEvaluator?: Maybe<User>;
  elementKind: AsyncElementKind | '%future added value';
  extension: AsyncElementTaskExtension;
  file?: Maybe<File>;
  id: Scalars['ID']['output'];
  status: AsyncElementTaskStatus | '%future added value';
  submissionInfo: AsyncElementTaskSubmissionInfo;
};

export type UploadAsyncLearnElement = AsyncLearnElement & {
  __typename?: 'UploadAsyncLearnElement';
  elementKind: AsyncElementKind | '%future added value';
  file?: Maybe<File>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  taskDescription: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type UploadEvaluation = {
  __typename?: 'UploadEvaluation';
  file?: Maybe<File>;
  text?: Maybe<Scalars['String']['output']>;
};

export type User = Node & {
  __typename?: 'User';
  activated: Scalars['Boolean']['output'];
  email: Scalars['String']['output'];
  extension?: Maybe<UserExtension>;
  extensions: Array<UserExtension>;
  groupAssociations: Array<UserGroupAssociation>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  registeredAt: Scalars['ZonedDateTIme']['output'];
};


export type UserExtensionArgs = {
  userExtensionKind: UserExtensionKind;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserDiscountType = DiscountType & {
  __typename?: 'UserDiscountType';
  kind: DiscountTypeKind | '%future added value';
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

export type UserExtension = {
  kind: UserExtensionKind | '%future added value';
};

export enum UserExtensionKind {
  Academies = 'Academies'
}

export type UserGroupAssociation = {
  __typename?: 'UserGroupAssociation';
  account?: Maybe<Account>;
  group?: Maybe<UserInAccountGroup>;
};

export type UserInAccount = Node & {
  __typename?: 'UserInAccount';
  groups: Array<UserInAccountGroup>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  user: User;
};

/** A connection to a list of items. */
export type UserInAccountConnection = {
  __typename?: 'UserInAccountConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserInAccountEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserInAccountEdge = {
  __typename?: 'UserInAccountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserInAccount;
};

export type UserInAccountGroup = Node & {
  __typename?: 'UserInAccountGroup';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  isBuiltIn: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Permission | '%future added value'>;
};

export type UserInAccountGroupWrapper = {
  __typename?: 'UserInAccountGroupWrapper';
  group: UserInAccountGroup;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  memberCount: Scalars['Long']['output'];
  newInvitations: AccountMemberConnection;
};


export type UserInAccountGroupWrapperNewInvitationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type UserInAccountGroupWrapperConnection = {
  __typename?: 'UserInAccountGroupWrapperConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserInAccountGroupWrapperEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserInAccountGroupWrapperEdge = {
  __typename?: 'UserInAccountGroupWrapperEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserInAccountGroupWrapper;
};

export type UserInAccountGroupWrappersResult = {
  __typename?: 'UserInAccountGroupWrappersResult';
  count: Scalars['Long']['output'];
  userInAccountGroupWrappers: UserInAccountGroupWrapperConnection;
};


export type UserInAccountGroupWrappersResultUserInAccountGroupWrappersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type UserInAccountGroupsConnection = {
  __typename?: 'UserInAccountGroupsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserInAccountGroupsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserInAccountGroupsEdge = {
  __typename?: 'UserInAccountGroupsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UserInAccountGroup;
};

export type UserInAccountWrapper = AccountMember & {
  __typename?: 'UserInAccountWrapper';
  groups: Array<UserInAccountGroup>;
  id: Scalars['ID']['output'];
  isManager: Scalars['Boolean']['output'];
  kind: AccountMemberKind | '%future added value';
  name: Scalars['String']['output'];
  user: UserInAccount;
};

export type Versioning = {
  __typename?: 'Versioning';
  draftVersion: Scalars['Int']['output'];
  releaseVersion: Scalars['Int']['output'];
};

export type VideoDataV2 = {
  __typename?: 'VideoDataV2';
  duration: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
  videoId: Scalars['String']['output'];
};

export type VideoElement = ElementV2 & {
  __typename?: 'VideoElement';
  elementType: ElementTypeV2 | '%future added value';
  extension: ElementExtension;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  vimeoId: Scalars['String']['output'];
  vimeoVideoSource?: Maybe<Vimeo_VimeoVideoSource>;
};

export type VideoLearnElement = LearnElement & {
  __typename?: 'VideoLearnElement';
  durationInSec: Scalars['Int']['output'];
  elementType: ElementTypeV2 | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  streamFile?: Maybe<StreamFile>;
  subtitles: Array<SubtitlesForLanguage>;
  thumbnailFile?: Maybe<File>;
  title: Scalars['String']['output'];
  videoFile?: Maybe<File>;
};

export type VideoSubtitle = {
  __typename?: 'VideoSubtitle';
  endTimeInSec: Scalars['Long']['output'];
  startTimeInSec: Scalars['Long']['output'];
  text: Scalars['String']['output'];
};

export type VideoTrendMedia = TrendMedia & {
  __typename?: 'VideoTrendMedia';
  file?: Maybe<File>;
  kind: TrendMediaKind | '%future added value';
};

export type VideoTrendMediaInput = {
  fileId: Scalars['ID']['input'];
  trendMediaType: TrendMediaKind | '%future added value';
};

/** Data partaining to the current user */
export type ViewerMutationType = {
  __typename?: 'ViewerMutationType';
  Auth: AuthViewerMutationSchema;
};

/** Data partaining to the current user */
export type ViewerQueryType = {
  __typename?: 'ViewerQueryType';
  Auth: AuthViewerSchema;
  Billing: BillingViewerSchema;
  Coaching: CoachingViewerSchema;
  Learn: LearnViewerSchema;
  PotentialAnalysis: PotentialAnalysisViewerSchema;
  Reports: ReportsViewerSchema;
};

export type ViewerTreeState = {
  kind: ViewerTreeStateKind | '%future added value';
};

export enum ViewerTreeStateKind {
  CanBeStarted = 'CanBeStarted',
  CanNotBeStarted = 'CanNotBeStarted',
  IsFinished = 'IsFinished',
  IsStarted = 'IsStarted',
  NotVisible = 'NotVisible'
}

export type VimeoPodcastSourceV2 = PodcastSourceV2 & {
  __typename?: 'VimeoPodcastSourceV2';
  sourceType: PodcastSourceTypeV2 | '%future added value';
  videoSource?: Maybe<Vimeo_VimeoVideoSource>;
  vimeoId: Scalars['String']['output'];
};

/** Data only accessible by the admin */
export type VimeoVideoSourceAdminMutationSchema = {
  __typename?: 'VimeoVideoSourceAdminMutationSchema';
  createVimeoVideoSource?: Maybe<CreateVimeoVideoSourcePayload>;
  deleteVimeoVideoSource?: Maybe<DeleteVimeoVideoSourcePayload>;
  editVimeoVideoSource?: Maybe<EditVimeoVideoSourcePayload>;
  setVimeoVideoSourceAsDefault?: Maybe<SetVimeoVideoSourceAsDefaultPayload>;
};


/** Data only accessible by the admin */
export type VimeoVideoSourceAdminMutationSchemaCreateVimeoVideoSourceArgs = {
  input: CreateVimeoVideoSourceInput;
};


/** Data only accessible by the admin */
export type VimeoVideoSourceAdminMutationSchemaDeleteVimeoVideoSourceArgs = {
  input: DeleteVimeoVideoSourceInput;
};


/** Data only accessible by the admin */
export type VimeoVideoSourceAdminMutationSchemaEditVimeoVideoSourceArgs = {
  input: EditVimeoVideoSourceInput;
};


/** Data only accessible by the admin */
export type VimeoVideoSourceAdminMutationSchemaSetVimeoVideoSourceAsDefaultArgs = {
  input: SetVimeoVideoSourceAsDefaultInput;
};

/** Data only accessible by the admin */
export type VimeoVideoSourceAdminSchema = {
  __typename?: 'VimeoVideoSourceAdminSchema';
  GetDefaultVimeoVideoSource?: Maybe<Vimeo_VimeoVideoSource>;
  VimeoVideoSources: Vimeo_VimeoVideoSourceConnection;
};


/** Data only accessible by the admin */
export type VimeoVideoSourceAdminSchemaVimeoVideoSourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Vimeo_VimeoVideoSource = {
  __typename?: 'Vimeo_VimeoVideoSource';
  accessToken: Scalars['String']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type Vimeo_VimeoVideoSourceConnection = {
  __typename?: 'Vimeo_VimeoVideoSourceConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Vimeo_VimeoVideoSourceEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type Vimeo_VimeoVideoSourceEdge = {
  __typename?: 'Vimeo_VimeoVideoSourceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Vimeo_VimeoVideoSource;
};

export type VisibilityCoachingConfig = {
  configType: VisibilityCoachingConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum VisibilityCoachingConfigType {
  VisibilityCoachingHide = 'VisibilityCoaching_Hide',
  VisibilityCoachingOnlyAzavAccount = 'VisibilityCoaching_OnlyAZAVAccount',
  VisibilityCoachingOnlyBusinessAccount = 'VisibilityCoaching_OnlyBusinessAccount',
  VisibilityCoachingOnlyWithLicense = 'VisibilityCoaching_OnlyWithLicense'
}

export type VisibilityTreeConfig = {
  configType: VisibilityTreeConfigType | '%future added value';
  /** The ID of an object */
  id: Scalars['ID']['output'];
};

export enum VisibilityTreeConfigType {
  VisibilityTreeAfterDateTime = 'VisibilityTree_AfterDateTime',
  VisibilityTreeHide = 'VisibilityTree_Hide',
  VisibilityTreeNotAfterDateTime = 'VisibilityTree_NotAfterDateTime',
  VisibilityTreeOnlyAzavAccount = 'VisibilityTree_OnlyAZAVAccount',
  VisibilityTreeOnlyAdmins = 'VisibilityTree_OnlyAdmins',
  VisibilityTreeOnlyBusinessAccount = 'VisibilityTree_OnlyBusinessAccount',
  VisibilityTreeOnlyEditors = 'VisibilityTree_OnlyEditors',
  VisibilityTreeOnlyIfTreeState = 'VisibilityTree_OnlyIfTreeState',
  VisibilityTreeOnlyPermissionsImpl = 'VisibilityTree_OnlyPermissionsImpl'
}

/** Data only accessible by the admin */
export type VocabAdminMutationSchema = {
  __typename?: 'VocabAdminMutationSchema';
  addWordToPackage?: Maybe<AddWordToPackagePayload>;
  createWordPackage?: Maybe<CreateWordPackagePayload>;
  deleteWord?: Maybe<DeleteWordPayload>;
  deleteWordPackage?: Maybe<DeleteWordPackagePayload>;
  editWord?: Maybe<EditWordPayload>;
  editWordPackage?: Maybe<EditWordPackagePayload>;
};


/** Data only accessible by the admin */
export type VocabAdminMutationSchemaAddWordToPackageArgs = {
  input: AddWordToPackageInput;
};


/** Data only accessible by the admin */
export type VocabAdminMutationSchemaCreateWordPackageArgs = {
  input: CreateWordPackageInput;
};


/** Data only accessible by the admin */
export type VocabAdminMutationSchemaDeleteWordArgs = {
  input: DeleteWordInput;
};


/** Data only accessible by the admin */
export type VocabAdminMutationSchemaDeleteWordPackageArgs = {
  input: DeleteWordPackageInput;
};


/** Data only accessible by the admin */
export type VocabAdminMutationSchemaEditWordArgs = {
  input: EditWordInput;
};


/** Data only accessible by the admin */
export type VocabAdminMutationSchemaEditWordPackageArgs = {
  input: EditWordPackageInput;
};

/** Data only accessible by the admin */
export type VocabAdminSchema = {
  __typename?: 'VocabAdminSchema';
  WordPackages: WordPackageConnection;
};


/** Data only accessible by the admin */
export type VocabAdminSchemaWordPackagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  alwaysInclude?: InputMaybe<Array<Scalars['ID']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  filterByName?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type VocabMutations = {
  __typename?: 'VocabMutations';
  addWordNote?: Maybe<AddWordNotePayload>;
  startStandaloneVocabTraining?: Maybe<StartStandaloneVocabTrainingPayload>;
};


export type VocabMutationsAddWordNoteArgs = {
  input: AddWordNoteInput;
};


export type VocabMutationsStartStandaloneVocabTrainingArgs = {
  input: StartStandaloneVocabTrainingInput;
};

export type VocabQueries = {
  __typename?: 'VocabQueries';
  MyWordInventory?: Maybe<WordInventory>;
};

export type VocabTrainWordPackageSelection = {
  kind: VocabTrainWordPackageSelectionKind | '%future added value';
  wordPackage?: Maybe<WordPackage>;
};

export type VocabTrainWordPackageSelectionFullPackage = VocabTrainWordPackageSelection & {
  __typename?: 'VocabTrainWordPackageSelectionFullPackage';
  kind: VocabTrainWordPackageSelectionKind | '%future added value';
  wordPackage?: Maybe<WordPackage>;
};

export enum VocabTrainWordPackageSelectionKind {
  FullPackage = 'FullPackage',
  SpecificWords = 'SpecificWords'
}

export type VocabTrainWordPackageSelectionSpecificWords = VocabTrainWordPackageSelection & {
  __typename?: 'VocabTrainWordPackageSelectionSpecificWords';
  kind: VocabTrainWordPackageSelectionKind | '%future added value';
  wordIds: Array<Scalars['ID']['output']>;
  wordPackage?: Maybe<WordPackage>;
};

export type Word = {
  __typename?: 'Word';
  explanation: Scalars['String']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  translation?: Maybe<Scalars['String']['output']>;
  word: Scalars['String']['output'];
};

export type WordInPackageInput = {
  packageId: Scalars['ID']['input'];
  wordId: Scalars['ID']['input'];
};

export type WordInventory = {
  __typename?: 'WordInventory';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  notes: Array<WordNote>;
  packages: Array<PackageUnlock>;
  proficiencies: Array<WordProficiency>;
};

export type WordNote = {
  __typename?: 'WordNote';
  note: Scalars['String']['output'];
  wordId: Scalars['ID']['output'];
};

export type WordPackage = Node & {
  __typename?: 'WordPackage';
  associatedWords: Array<Word>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  language: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type WordPackageConnection = {
  __typename?: 'WordPackageConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WordPackageEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type WordPackageDataInput = {
  language: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/** An edge in a connection. */
export type WordPackageEdge = {
  __typename?: 'WordPackageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: WordPackage;
};

export type WordPackageReward = Reward & {
  __typename?: 'WordPackageReward';
  data: WordPackageRewardData;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: RewardKind | '%future added value';
  superId: Scalars['ID']['output'];
};

export type WordPackageRewardData = {
  __typename?: 'WordPackageRewardData';
  wordPackage?: Maybe<WordPackage>;
};

export type WordPackageRewardDataInput = {
  wordPackageId: Scalars['ID']['input'];
};

export type WordPackage_ErrorOccurredRewardResult = RewardResult & {
  __typename?: 'WordPackage_ErrorOccurredRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type WordPackage_NothingNewToUnlockRewardResult = RewardResult & {
  __typename?: 'WordPackage_NothingNewToUnlockRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
  wordPackage?: Maybe<WordPackage>;
};

export type WordPackage_PackageUnlockedRewardResult = RewardResult & {
  __typename?: 'WordPackage_PackageUnlockedRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
  wordPackage?: Maybe<WordPackage>;
};

export type WordProficienciesReward = Reward & {
  __typename?: 'WordProficienciesReward';
  /** The ID of an object */
  id: Scalars['ID']['output'];
  kind: RewardKind | '%future added value';
  superId: Scalars['ID']['output'];
};

export type WordProficiencies_ErrorOccurredRewardResult = RewardResult & {
  __typename?: 'WordProficiencies_ErrorOccurredRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type WordProficiencies_ProficienciesChangedRewardResult = RewardResult & {
  __typename?: 'WordProficiencies_ProficienciesChangedRewardResult';
  kind: RewardResultKind | '%future added value';
  rewardId: Scalars['ID']['output'];
  rewardKind: RewardKind | '%future added value';
};

export type WordProficiency = {
  __typename?: 'WordProficiency';
  proficiencyLevel: Scalars['Int']['output'];
  wordId: Scalars['ID']['output'];
};

export type BaseData = {
  city?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<CountryCode | '%future added value'>;
  houseNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type DeleteTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteTagPayload = {
  __typename?: 'deleteTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedId: Scalars['ID']['output'];
};

export type EditTagInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: TagDataInput;
  id: Scalars['ID']['input'];
};

export type EditTagPayload = {
  __typename?: 'editTagPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  tag: AcademiesTag;
};

export type RemoveActionFromTriggerAndDeleteItInput = {
  actionId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveActionFromTriggerAndDeleteItPayload = {
  __typename?: 'removeActionFromTriggerAndDeleteItPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedActionId: Scalars['ID']['output'];
};

export type LoginJwtMutationVariables = Exact<{
  input: LoginJwtInput;
}>;


export type LoginJwtMutation = { __typename?: 'Mutation', Auth: { __typename?: 'AuthMutations', loginJwt?: { __typename?: 'LoginJwtPayload', loginResult: { __typename?: 'LoginResult', firstLogin: boolean, jwtTokens: { __typename?: 'JwtLoginInformation', accessToken: string, refreshToken: string } } } | null } };

export type AdminQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminQuery = { __typename?: 'Query', Admin: { __typename?: 'AdminQueryType', Tree: { __typename?: 'TreeAdminSchema', GetContentNodes: { __typename?: 'TreeNodesConnection', edges?: Array<{ __typename?: 'TreeNodesEdge', cursor: string, node: { __typename?: 'TreeNode', id: string, description?: string | null, shortDescription?: string | null, imageId?: string | null, parentId?: string | null, hasBeenPublishedOnce: boolean, rootId: string, attachments: Array<{ __typename?: 'DefaultFileAttachment', id: string, title?: string | null, description?: string | null, kind: AttachmentKind }>, structureDefinition: { __typename?: 'ChildStructureDefinition', title: string, definitionType: StructureType, coordinates: { __typename?: 'CoordinatesV2', parentRef?: string | null } } | { __typename?: 'RootStructureDefinition', title: string, definitionType: StructureType, coordinates: { __typename?: 'CoordinatesV2', parentRef?: string | null } }, typeDefinition: { __typename?: 'AsyncContentTypeDefinition', definitionType: TypeDefinitionType } | { __typename?: 'BranchTypeDefinition', definitionType: TypeDefinitionType } | { __typename?: 'ELearningContentTypeDefinition', definitionType: TypeDefinitionType }, image?: { __typename?: 'File', name: string, fileType: string, fileSize: any, storageKey: string, thumbnailKey?: string | null, accessType: FileAccessType, tags: Array<string>, uploadDateTime: any, id: string, thumbnail?: string | null, url?: string | null } | null, versioning: { __typename?: 'Versioning', draftVersion: number, releaseVersion: number }, instructors: Array<{ __typename?: 'InstructorImpl', id: string, superId: string, name: string }> } } | null> | null } } } };


export const LoginJwtDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginJwt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginJwtInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Auth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginJwt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginResult"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwtTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}},{"kind":"Field","name":{"kind":"Name","value":"firstLogin"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LoginJwtMutation, LoginJwtMutationVariables>;
export const AdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetContentNodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}}]}},{"kind":"Field","name":{"kind":"Name","value":"structureDefinition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parentRef"}}]}},{"kind":"Field","name":{"kind":"Name","value":"definitionType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"typeDefinition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"definitionType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"imageId"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileType"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"storageKey"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailKey"}},{"kind":"Field","name":{"kind":"Name","value":"accessType"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"uploadDateTime"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"versioning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"draftVersion"}},{"kind":"Field","name":{"kind":"Name","value":"releaseVersion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"superId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"hasBeenPublishedOnce"}},{"kind":"Field","name":{"kind":"Name","value":"rootId"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AdminQuery, AdminQueryVariables>;