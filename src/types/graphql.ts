/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
};

export type AddPlaceResponse = {
  __typename?: 'AddPlaceResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Chat = {
  __typename?: 'Chat';
  createdAt: Scalars['String'];
  driver: User;
  driverId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  messages?: Maybe<Array<Maybe<Message>>>;
  passenger: User;
  passengerId: Scalars['Int'];
  ride: Ride;
  rideId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CompleteEmailVerificationResponse = {
  __typename?: 'CompleteEmailVerificationResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CompletePhoneVerificationResponse = {
  __typename?: 'CompletePhoneVerificationResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type DeletePlaceResponse = {
  __typename?: 'DeletePlaceResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditPlaceResponse = {
  __typename?: 'EditPlaceResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EmailSignInResponse = {
  __typename?: 'EmailSignInResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type EmailSignUpResponse = {
  __typename?: 'EmailSignUpResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type FacebookConnectResponse = {
  __typename?: 'FacebookConnectResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type GetChatResponse = {
  __typename?: 'GetChatResponse';
  chat?: Maybe<Chat>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GetMyPlacesResponse = {
  __typename?: 'GetMyPlacesResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  places?: Maybe<Array<Maybe<Place>>>;
};

export type GetMyProfileResponse = {
  __typename?: 'GetMyProfileResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type GetNearbyDriversResponse = {
  __typename?: 'GetNearbyDriversResponse';
  drivers?: Maybe<Array<Maybe<User>>>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GetNearbyRideResponse = {
  __typename?: 'GetNearbyRideResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  ride?: Maybe<Ride>;
};

export type GetRideResponse = {
  __typename?: 'GetRideResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  ride?: Maybe<Ride>;
};

export type GetUser = {
  __typename?: 'GetUser';
  users?: Maybe<Array<Maybe<User>>>;
};

export type Message = {
  __typename?: 'Message';
  chat: Chat;
  chatId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddPlace: AddPlaceResponse;
  CompleteEmailVerification?: Maybe<CompleteEmailVerificationResponse>;
  CompletePhoneVerification: CompletePhoneVerificationResponse;
  DeletePlace: DeletePlaceResponse;
  EditPlace: EditPlaceResponse;
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  FacebookConnect: FacebookConnectResponse;
  ReportMovement: ReportMovementResponse;
  RequestEmailVerification: RequestEmailVerificationResponse;
  RequestRide: RequestRideResponse;
  SendChatMessage: SendChatMessageResponse;
  StartEmailVerification: StartEmailVerificationResponse;
  StartPhoneVerification: StartPhoneVerificationResponse;
  ToggleDrivingMode?: Maybe<ToggleDrivingModeResponse>;
  UpdateMyProfile: UpdateMyProfileResponse;
  UpdateRideStatus?: Maybe<UpdateRideStatusResponse>;
};


export type MutationAddPlaceArgs = {
  address: Scalars['String'];
  isFav: Scalars['Boolean'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
};


export type MutationCompleteEmailVerificationArgs = {
  key: Scalars['String'];
};


export type MutationCompletePhoneVerificationArgs = {
  key: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type MutationDeletePlaceArgs = {
  placeId: Scalars['Int'];
};


export type MutationEditPlaceArgs = {
  isFav?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  placeId: Scalars['Int'];
};


export type MutationEmailSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationEmailSignUpArgs = {
  age: Scalars['Int'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  profilePhoto: Scalars['String'];
};


export type MutationFacebookConnectArgs = {
  email?: InputMaybe<Scalars['String']>;
  fbId: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type MutationReportMovementArgs = {
  lastLat?: InputMaybe<Scalars['Float']>;
  lastLng?: InputMaybe<Scalars['Float']>;
  lastOrientation?: InputMaybe<Scalars['Float']>;
};


export type MutationRequestRideArgs = {
  distance: Scalars['String'];
  dropOffAddress: Scalars['String'];
  dropOffLat: Scalars['Float'];
  dropOffLng: Scalars['Float'];
  duration: Scalars['String'];
  pickUpAddress: Scalars['String'];
  pickUpLat: Scalars['Float'];
  pickUpLng: Scalars['Float'];
  price: Scalars['Float'];
};


export type MutationSendChatMessageArgs = {
  chatId: Scalars['Int'];
  text: Scalars['String'];
};


export type MutationStartEmailVerificationArgs = {
  email: Scalars['String'];
};


export type MutationStartPhoneVerificationArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationUpdateMyProfileArgs = {
  age?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  profilePhoto?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateRideStatusArgs = {
  rideId: Scalars['Int'];
  status: StatusOption;
};

export type Place = {
  __typename?: 'Place';
  address: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  isFav: Scalars['Boolean'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  GetChat?: Maybe<GetChatResponse>;
  GetMyPlaces: GetMyPlacesResponse;
  GetMyProfile: GetMyProfileResponse;
  GetNearbyDrivers: GetNearbyDriversResponse;
  GetNearbyRide: GetNearbyRideResponse;
  GetRide: GetRideResponse;
  GetUser: GetUser;
  place?: Maybe<Place>;
  user?: Maybe<User>;
};


export type QueryGetChatArgs = {
  chatId: Scalars['Int'];
};


export type QueryGetRideArgs = {
  rideId: Scalars['Int'];
};

export type ReportMovementResponse = {
  __typename?: 'ReportMovementResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type RequestEmailVerificationResponse = {
  __typename?: 'RequestEmailVerificationResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type RequestRideResponse = {
  __typename?: 'RequestRideResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  ride?: Maybe<Ride>;
};

export type Ride = {
  __typename?: 'Ride';
  chat?: Maybe<Chat>;
  chatId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['String'];
  distance: Scalars['String'];
  driver: User;
  driverId?: Maybe<Scalars['Int']>;
  dropOffAddress: Scalars['String'];
  dropOffLat: Scalars['Float'];
  dropOffLng: Scalars['Float'];
  duration: Scalars['String'];
  id: Scalars['Int'];
  passenger: User;
  passengerId: Scalars['Int'];
  pickUpAddress: Scalars['String'];
  pickUpLat: Scalars['Float'];
  pickUpLng: Scalars['Float'];
  price: Scalars['Float'];
  status: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type SendChatMessageResponse = {
  __typename?: 'SendChatMessageResponse';
  error?: Maybe<Scalars['String']>;
  message?: Maybe<Message>;
  ok: Scalars['Boolean'];
};

export type StartEmailVerificationResponse = {
  __typename?: 'StartEmailVerificationResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type StartPhoneVerificationResponse = {
  __typename?: 'StartPhoneVerificationResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export enum StatusOption {
  Accepted = 'ACCEPTED',
  Canceled = 'CANCELED',
  Finished = 'FINISHED',
  Onroute = 'ONROUTE',
  Requesting = 'REQUESTING'
}

export type Subscription = {
  __typename?: 'Subscription';
  DriversSubscription?: Maybe<User>;
  MessageSubscription?: Maybe<Message>;
  NearbyRideSubscription?: Maybe<Ride>;
  RideStatusSubscription?: Maybe<Ride>;
};

export type ToggleDrivingModeResponse = {
  __typename?: 'ToggleDrivingModeResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateMyProfileResponse = {
  __typename?: 'UpdateMyProfileResponse';
  error?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type UpdateRideStatusResponse = {
  __typename?: 'UpdateRideStatusResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  age?: Maybe<Scalars['Int']>;
  chatsAsDriver?: Maybe<Array<Maybe<Chat>>>;
  chatsAsPassenger?: Maybe<Array<Maybe<Chat>>>;
  createdAt: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  fbId?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isDriving: Scalars['Boolean'];
  isRiding: Scalars['Boolean'];
  isTaken: Scalars['Boolean'];
  lastLat?: Maybe<Scalars['Float']>;
  lastLng?: Maybe<Scalars['Float']>;
  lastName: Scalars['String'];
  lastOrientation?: Maybe<Scalars['Float']>;
  messages?: Maybe<Array<Maybe<Message>>>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  places?: Maybe<Array<Maybe<Place>>>;
  profilePhoto?: Maybe<Scalars['String']>;
  ridesAsDriver?: Maybe<Array<Maybe<Ride>>>;
  ridesAsPassenger?: Maybe<Array<Maybe<Ride>>>;
  updatedAt?: Maybe<Scalars['String']>;
  verifiedEmail: Scalars['Boolean'];
  verifiedPhoneNumber: Scalars['Boolean'];
};

export type Verification = {
  __typename?: 'Verification';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  key: Scalars['String'];
  payload: Scalars['String'];
  target: Scalars['String'];
  updatedAt: Scalars['String'];
  used: Scalars['Boolean'];
};

export type ToggleDrivingMutationVariables = Exact<{ [key: string]: never; }>;


export type ToggleDrivingMutation = { __typename?: 'Mutation', ToggleDrivingMode?: { __typename?: 'ToggleDrivingModeResponse', ok: boolean, error?: string | null } | null };

export type StartPhoneVerificationMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
}>;


export type StartPhoneVerificationMutation = { __typename?: 'Mutation', StartPhoneVerification: { __typename?: 'StartPhoneVerificationResponse', ok: boolean, error?: string | null } };

export type VerifyPhoneMutationVariables = Exact<{
  key: Scalars['String'];
  phoneNumber: Scalars['String'];
}>;


export type VerifyPhoneMutation = { __typename?: 'Mutation', CompletePhoneVerification: { __typename?: 'CompletePhoneVerificationResponse', ok: boolean, error?: string | null, token?: string | null } };

export type UserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type UserProfileQuery = { __typename?: 'Query', GetMyProfile: { __typename?: 'GetMyProfileResponse', ok: boolean, error?: string | null, user?: { __typename?: 'User', profilePhoto?: string | null, fullName?: string | null, isDriving: boolean } | null } };


export const ToggleDrivingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"toggleDriving"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ToggleDrivingMode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<ToggleDrivingMutation, ToggleDrivingMutationVariables>;
export const StartPhoneVerificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"startPhoneVerification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"StartPhoneVerification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<StartPhoneVerificationMutation, StartPhoneVerificationMutationVariables>;
export const VerifyPhoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyPhone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CompletePhoneVerification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}},{"kind":"Argument","name":{"kind":"Name","value":"phoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<VerifyPhoneMutation, VerifyPhoneMutationVariables>;
export const UserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GetMyProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"isDriving"}}]}}]}}]}}]} as unknown as DocumentNode<UserProfileQuery, UserProfileQueryVariables>;