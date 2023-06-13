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
    userId: Scalars['Int'];
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
    Requesting = 'REQUESTING',
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
    rideId?: Maybe<Scalars['Int']>;
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

export type ToggleDrivingMutationVariables = Exact<{ [key: string]: never }>;

export type ToggleDrivingMutation = {
    __typename?: 'Mutation';
    ToggleDrivingMode?: { __typename?: 'ToggleDrivingModeResponse'; ok: boolean; error?: string | null } | null;
};

export type EditPlaceMutationVariables = Exact<{
    placeId: Scalars['Int'];
    isFav?: InputMaybe<Scalars['Boolean']>;
    name?: InputMaybe<Scalars['String']>;
}>;

export type EditPlaceMutation = {
    __typename?: 'Mutation';
    EditPlace: { __typename?: 'EditPlaceResponse'; ok: boolean; error?: string | null };
};

export type AddPlaceMutationVariables = Exact<{
    name: Scalars['String'];
    lat: Scalars['Float'];
    lng: Scalars['Float'];
    address: Scalars['String'];
    isFav: Scalars['Boolean'];
}>;

export type AddPlaceMutation = {
    __typename?: 'Mutation';
    AddPlace: { __typename?: 'AddPlaceResponse'; ok: boolean; error?: string | null };
};

export type GetChatQueryVariables = Exact<{
    chatId: Scalars['Int'];
}>;

export type GetChatQuery = {
    __typename?: 'Query';
    GetChat?: {
        __typename?: 'GetChatResponse';
        ok: boolean;
        error?: string | null;
        chat?: {
            __typename?: 'Chat';
            passengerId: number;
            driverId?: number | null;
            messages?: Array<{ __typename?: 'Message'; id: number; text: string; userId: number } | null> | null;
        } | null;
    } | null;
};

export type SendMessageMutationVariables = Exact<{
    text: Scalars['String'];
    chatId: Scalars['Int'];
}>;

export type SendMessageMutation = {
    __typename?: 'Mutation';
    SendChatMessage: {
        __typename?: 'SendChatMessageResponse';
        ok: boolean;
        error?: string | null;
        message?: { __typename?: 'Message'; id: number; text: string; userId: number } | null;
    };
};

export type MessageSubscriptionSubscriptionVariables = Exact<{ [key: string]: never }>;

export type MessageSubscriptionSubscription = {
    __typename?: 'Subscription';
    MessageSubscription?: { __typename?: 'Message'; id: number; text: string; userId: number } | null;
};

export type UpdateProfileMutationVariables = Exact<{
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    profilePhoto: Scalars['String'];
}>;

export type UpdateProfileMutation = {
    __typename?: 'Mutation';
    UpdateMyProfile: { __typename?: 'UpdateMyProfileResponse'; ok?: boolean | null; error?: string | null };
};

export type ReportMovementMutationVariables = Exact<{
    lat: Scalars['Float'];
    lng: Scalars['Float'];
}>;

export type ReportMovementMutation = {
    __typename?: 'Mutation';
    ReportMovement: { __typename?: 'ReportMovementResponse'; ok: boolean };
};

export type GetDriversQueryVariables = Exact<{ [key: string]: never }>;

export type GetDriversQuery = {
    __typename?: 'Query';
    GetNearbyDrivers: {
        __typename?: 'GetNearbyDriversResponse';
        ok: boolean;
        drivers?: Array<{
            __typename?: 'User';
            id: number;
            lastLat?: number | null;
            lastLng?: number | null;
        } | null> | null;
    };
};

export type RequestRideMutationVariables = Exact<{
    pickUpAddress: Scalars['String'];
    pickUpLat: Scalars['Float'];
    pickUpLng: Scalars['Float'];
    dropOffAddress: Scalars['String'];
    dropOffLat: Scalars['Float'];
    dropOffLng: Scalars['Float'];
    price: Scalars['Float'];
    distance: Scalars['String'];
    duration: Scalars['String'];
}>;

export type RequestRideMutation = {
    __typename?: 'Mutation';
    RequestRide: {
        __typename?: 'RequestRideResponse';
        ok: boolean;
        error?: string | null;
        ride?: { __typename?: 'Ride'; id: number } | null;
    };
};

export type GetRidesQueryVariables = Exact<{ [key: string]: never }>;

export type GetRidesQuery = {
    __typename?: 'Query';
    GetNearbyRide: {
        __typename?: 'GetNearbyRideResponse';
        ok: boolean;
        error?: string | null;
        ride?: {
            __typename?: 'Ride';
            id: number;
            pickUpAddress: string;
            dropOffAddress: string;
            price: number;
            distance: string;
            passenger: { __typename?: 'User'; fullName?: string | null; profilePhoto?: string | null };
        } | null;
    };
};

export type AcceptRideMutationVariables = Exact<{
    rideId: Scalars['Int'];
}>;

export type AcceptRideMutation = {
    __typename?: 'Mutation';
    UpdateRideStatus?: {
        __typename?: 'UpdateRideStatusResponse';
        ok: boolean;
        error?: string | null;
        rideId?: number | null;
    } | null;
};

export type NearbyRidesSubscriptionVariables = Exact<{ [key: string]: never }>;

export type NearbyRidesSubscription = {
    __typename?: 'Subscription';
    NearbyRideSubscription?: {
        __typename?: 'Ride';
        id: number;
        pickUpAddress: string;
        dropOffAddress: string;
        price: number;
        distance: string;
        passenger: { __typename?: 'User'; fullName?: string | null; profilePhoto?: string | null };
    } | null;
};

export type StartPhoneVerificationMutationVariables = Exact<{
    phoneNumber: Scalars['String'];
}>;

export type StartPhoneVerificationMutation = {
    __typename?: 'Mutation';
    StartPhoneVerification: { __typename?: 'StartPhoneVerificationResponse'; ok: boolean; error?: string | null };
};

export type GetRideQueryVariables = Exact<{
    rideId: Scalars['Int'];
}>;

export type GetRideQuery = {
    __typename?: 'Query';
    GetRide: {
        __typename?: 'GetRideResponse';
        ok: boolean;
        error?: string | null;
        ride?: {
            __typename?: 'Ride';
            id: number;
            status: string;
            pickUpAddress: string;
            dropOffAddress: string;
            price: number;
            distance: string;
            duration: string;
            chatId?: number | null;
            driver: { __typename?: 'User'; id: number; fullName?: string | null; profilePhoto?: string | null };
            passenger: { __typename?: 'User'; id: number; fullName?: string | null; profilePhoto?: string | null };
        } | null;
    };
};

export type RideUpdatesSubscriptionVariables = Exact<{ [key: string]: never }>;

export type RideUpdatesSubscription = {
    __typename?: 'Subscription';
    RideStatusSubscription?: {
        __typename?: 'Ride';
        id: number;
        status: string;
        pickUpAddress: string;
        dropOffAddress: string;
        price: number;
        distance: string;
        duration: string;
        chatId?: number | null;
        driver: { __typename?: 'User'; id: number; fullName?: string | null; profilePhoto?: string | null };
        passenger: { __typename?: 'User'; id: number; fullName?: string | null; profilePhoto?: string | null };
    } | null;
};

export type UpdateRideMutationVariables = Exact<{
    rideId: Scalars['Int'];
    status: StatusOption;
}>;

export type UpdateRideMutation = {
    __typename?: 'Mutation';
    UpdateRideStatus?: {
        __typename?: 'UpdateRideStatusResponse';
        ok: boolean;
        error?: string | null;
        rideId?: number | null;
    } | null;
};

export type VerifyPhoneMutationVariables = Exact<{
    key: Scalars['String'];
    phoneNumber: Scalars['String'];
}>;

export type VerifyPhoneMutation = {
    __typename?: 'Mutation';
    CompletePhoneVerification: {
        __typename?: 'CompletePhoneVerificationResponse';
        ok: boolean;
        error?: string | null;
        token?: string | null;
    };
};

export type UserProfileQueryVariables = Exact<{ [key: string]: never }>;

export type UserProfileQuery = {
    __typename?: 'Query';
    GetMyProfile: {
        __typename?: 'GetMyProfileResponse';
        ok: boolean;
        error?: string | null;
        user?: {
            __typename?: 'User';
            id: number;
            firstName: string;
            lastName: string;
            email?: string | null;
            profilePhoto?: string | null;
            fullName?: string | null;
            isDriving: boolean;
        } | null;
    };
};

export type GetPlacesQueryVariables = Exact<{ [key: string]: never }>;

export type GetPlacesQuery = {
    __typename?: 'Query';
    GetMyPlaces: {
        __typename?: 'GetMyPlacesResponse';
        ok: boolean;
        error?: string | null;
        places?: Array<{
            __typename?: 'Place';
            id: number;
            name: string;
            address: string;
            isFav: boolean;
        } | null> | null;
    };
};

export const ToggleDrivingDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'toggleDriving' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'ToggleDrivingMode' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<ToggleDrivingMutation, ToggleDrivingMutationVariables>;
export const EditPlaceDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'editPlace' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'placeId' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'isFav' } },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'EditPlace' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'placeId' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'placeId' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'isFav' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'isFav' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'name' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<EditPlaceMutation, EditPlaceMutationVariables>;
export const AddPlaceDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'addPlace' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'lat' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'lng' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'isFav' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'AddPlace' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'name' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'lat' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'lat' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'lng' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'lng' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'address' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'isFav' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'isFav' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<AddPlaceMutation, AddPlaceMutationVariables>;
export const GetChatDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'getChat' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'chatId' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'GetChat' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'chatId' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'chatId' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'chat' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'passengerId' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'driverId' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'messages' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                                        { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                                                        { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetChatQuery, GetChatQueryVariables>;
export const SendMessageDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'sendMessage' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'text' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'chatId' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SendChatMessage' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'text' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'text' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'chatId' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'chatId' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'message' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<SendMessageMutation, SendMessageMutationVariables>;
export const MessageSubscriptionDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'subscription',
            name: { kind: 'Name', value: 'messageSubscription' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'MessageSubscription' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<MessageSubscriptionSubscription, MessageSubscriptionSubscriptionVariables>;
export const UpdateProfileDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'updateProfile' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'firstName' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'lastName' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'profilePhoto' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'UpdateMyProfile' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'firstName' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'firstName' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'lastName' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'lastName' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'email' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'profilePhoto' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'profilePhoto' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const ReportMovementDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'reportMovement' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'lat' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'lng' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'ReportMovement' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'lastLat' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'lat' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'lastLng' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'lng' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{ kind: 'Field', name: { kind: 'Name', value: 'ok' } }],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<ReportMovementMutation, ReportMovementMutationVariables>;
export const GetDriversDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'getDrivers' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'GetNearbyDrivers' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'drivers' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'lastLat' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'lastLng' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetDriversQuery, GetDriversQueryVariables>;
export const RequestRideDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'requestRide' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'pickUpAddress' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'pickUpLat' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'pickUpLng' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'dropOffAddress' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'dropOffLat' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'dropOffLng' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'price' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'distance' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'duration' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'RequestRide' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'pickUpAddress' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'pickUpAddress' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'pickUpLat' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'pickUpLat' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'pickUpLng' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'pickUpLng' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'dropOffAddress' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'dropOffAddress' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'dropOffLat' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'dropOffLat' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'dropOffLng' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'dropOffLng' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'price' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'price' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'distance' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'distance' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'duration' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'duration' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ride' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<RequestRideMutation, RequestRideMutationVariables>;
export const GetRidesDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'getRides' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'GetNearbyRide' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ride' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'pickUpAddress' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'dropOffAddress' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'distance' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'passenger' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        { kind: 'Field', name: { kind: 'Name', value: 'fullName' } },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'profilePhoto' },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetRidesQuery, GetRidesQueryVariables>;
export const AcceptRideDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'acceptRide' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'rideId' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'UpdateRideStatus' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'rideId' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'rideId' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'status' },
                                value: { kind: 'EnumValue', value: 'ACCEPTED' },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'rideId' } },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<AcceptRideMutation, AcceptRideMutationVariables>;
export const NearbyRidesDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'subscription',
            name: { kind: 'Name', value: 'nearbyRides' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'NearbyRideSubscription' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'pickUpAddress' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'dropOffAddress' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'distance' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'passenger' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'fullName' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'profilePhoto' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<NearbyRidesSubscription, NearbyRidesSubscriptionVariables>;
export const StartPhoneVerificationDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'startPhoneVerification' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'phoneNumber' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'StartPhoneVerification' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'phoneNumber' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'phoneNumber' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<StartPhoneVerificationMutation, StartPhoneVerificationMutationVariables>;
export const GetRideDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'getRide' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'rideId' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'GetRide' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'rideId' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'rideId' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ride' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'pickUpAddress' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'dropOffAddress' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'distance' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'duration' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'driver' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                                        { kind: 'Field', name: { kind: 'Name', value: 'fullName' } },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'profilePhoto' },
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'passenger' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                                        { kind: 'Field', name: { kind: 'Name', value: 'fullName' } },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'profilePhoto' },
                                                        },
                                                    ],
                                                },
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'chatId' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetRideQuery, GetRideQueryVariables>;
export const RideUpdatesDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'subscription',
            name: { kind: 'Name', value: 'rideUpdates' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'RideStatusSubscription' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'pickUpAddress' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'dropOffAddress' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'distance' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'duration' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'driver' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'fullName' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'profilePhoto' } },
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'passenger' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'fullName' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'profilePhoto' } },
                                        ],
                                    },
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'chatId' } },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<RideUpdatesSubscription, RideUpdatesSubscriptionVariables>;
export const UpdateRideDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'updateRide' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'rideId' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'status' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'StatusOption' } },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'UpdateRideStatus' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'rideId' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'rideId' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'status' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'status' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'rideId' } },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<UpdateRideMutation, UpdateRideMutationVariables>;
export const VerifyPhoneDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'verifyPhone' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'key' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'phoneNumber' } },
                    type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CompletePhoneVerification' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'key' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'key' } },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'phoneNumber' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'phoneNumber' } },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<VerifyPhoneMutation, VerifyPhoneMutationVariables>;
export const UserProfileDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'userProfile' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'GetMyProfile' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'profilePhoto' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'fullName' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'isDriving' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<UserProfileQuery, UserProfileQueryVariables>;
export const GetPlacesDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'getPlaces' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'GetMyPlaces' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'places' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'isFav' } },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetPlacesQuery, GetPlacesQueryVariables>;
