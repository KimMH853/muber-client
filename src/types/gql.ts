/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation toggleDriving {\n    ToggleDrivingMode {\n      ok\n      error\n    }\n  }\n": types.ToggleDrivingDocument,
    "\n    mutation startPhoneVerification($phoneNumber: String!) {\n        StartPhoneVerification(phoneNumber: $phoneNumber) {\n            ok\n            error\n        }\n    }\n": types.StartPhoneVerificationDocument,
    "\n    mutation verifyPhone($key: String!, $phoneNumber: String!) {\n        CompletePhoneVerification(key: $key, phoneNumber: $phoneNumber) {\n            ok\n            error\n            token\n        }\n    }\n": types.VerifyPhoneDocument,
    "\n    query userProfile {\n        GetMyProfile {\n            ok\n            error\n            user {\n                profilePhoto\n                fullName\n                isDriving\n            }\n        }\n    }\n": types.UserProfileDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation toggleDriving {\n    ToggleDrivingMode {\n      ok\n      error\n    }\n  }\n"): (typeof documents)["\n  mutation toggleDriving {\n    ToggleDrivingMode {\n      ok\n      error\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation startPhoneVerification($phoneNumber: String!) {\n        StartPhoneVerification(phoneNumber: $phoneNumber) {\n            ok\n            error\n        }\n    }\n"): (typeof documents)["\n    mutation startPhoneVerification($phoneNumber: String!) {\n        StartPhoneVerification(phoneNumber: $phoneNumber) {\n            ok\n            error\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation verifyPhone($key: String!, $phoneNumber: String!) {\n        CompletePhoneVerification(key: $key, phoneNumber: $phoneNumber) {\n            ok\n            error\n            token\n        }\n    }\n"): (typeof documents)["\n    mutation verifyPhone($key: String!, $phoneNumber: String!) {\n        CompletePhoneVerification(key: $key, phoneNumber: $phoneNumber) {\n            ok\n            error\n            token\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query userProfile {\n        GetMyProfile {\n            ok\n            error\n            user {\n                profilePhoto\n                fullName\n                isDriving\n            }\n        }\n    }\n"): (typeof documents)["\n    query userProfile {\n        GetMyProfile {\n            ok\n            error\n            user {\n                profilePhoto\n                fullName\n                isDriving\n            }\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;