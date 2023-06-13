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
    '\n  mutation toggleDriving {\n    ToggleDrivingMode {\n      ok\n      error\n    }\n  }\n':
        types.ToggleDrivingDocument,
    '\n  mutation editPlace($placeId: Int!, $isFav: Boolean, $name:String) {\n    EditPlace(placeId: $placeId, isFav: $isFav, name: $name) {\n      ok\n      error\n    }\n  }\n':
        types.EditPlaceDocument,
    '\n    mutation addPlace(\n        $name: String!\n        $lat: Float!\n        $lng: Float!\n        $address: String!\n        $isFav: Boolean!\n    ) {\n        AddPlace(\n            name: $name\n            lat: $lat\n            lng: $lng\n            address: $address\n            isFav: $isFav\n        ) {\n            ok\n            error\n        }\n    }\n':
        types.AddPlaceDocument,
    '\n    query getChat($chatId: Int!) {\n        GetChat(chatId: $chatId) {\n            ok\n            error\n            chat {\n                passengerId\n                driverId\n                messages {\n                id\n                text\n                userId\n                }\n            }\n        }\n    }\n':
        types.GetChatDocument,
    '\n    mutation sendMessage($text: String!, $chatId: Int!) {\n        SendChatMessage(text: $text, chatId: $chatId) {\n            ok\n            error\n            message {\n                id\n                text\n                userId\n            }\n        }\n    }\n':
        types.SendMessageDocument,
    '\n  subscription messageSubscription {\n    MessageSubscription {\n      id\n      text\n      userId\n    }\n  }\n':
        types.MessageSubscriptionDocument,
    '\n    mutation updateProfile(\n        $firstName: String!\n        $lastName: String!\n        $email: String!\n        $profilePhoto: String!\n    ) {\n        UpdateMyProfile(\n            firstName: $firstName\n            lastName: $lastName\n            email: $email\n            profilePhoto: $profilePhoto\n        ) {\n            ok\n            error\n        }\n    }\n':
        types.UpdateProfileDocument,
    '\n    mutation reportMovement($lat: Float!, $lng: Float!) {\n        ReportMovement(lastLat: $lat, lastLng: $lng) {\n            ok\n        }\n    }\n':
        types.ReportMovementDocument,
    '\n    query getDrivers {\n        GetNearbyDrivers {\n            ok\n            drivers {\n                id\n                lastLat\n                lastLng\n            }\n        }\n    }\n':
        types.GetDriversDocument,
    '\n  mutation requestRide(\n    $pickUpAddress: String!\n    $pickUpLat: Float!\n    $pickUpLng: Float!\n    $dropOffAddress: String!\n    $dropOffLat: Float!\n    $dropOffLng: Float!\n    $price: Float!\n    $distance: String!\n    $duration: String!\n  ) {\n    RequestRide(\n      pickUpAddress: $pickUpAddress\n      pickUpLat: $pickUpLat\n      pickUpLng: $pickUpLng\n      dropOffAddress: $dropOffAddress\n      dropOffLat: $dropOffLat\n      dropOffLng: $dropOffLng\n      price: $price\n      distance: $distance\n      duration: $duration\n    ) {\n      ok\n      error\n      ride {\n        id\n      }\n    }\n  }\n':
        types.RequestRideDocument,
    '\n  query getRides {\n    GetNearbyRide {\n      ok\n      error\n      ride {\n        id\n        pickUpAddress\n        dropOffAddress\n        price\n        distance\n        passenger {\n          fullName\n          profilePhoto\n        }\n      }\n    }\n  }\n':
        types.GetRidesDocument,
    '\n  mutation acceptRide($rideId: Int!) {\n    UpdateRideStatus(rideId: $rideId, status: ACCEPTED) {\n      ok\n      error\n      rideId\n    }\n  }\n':
        types.AcceptRideDocument,
    '\n  subscription nearbyRides {\n    NearbyRideSubscription {\n      id\n      pickUpAddress\n      dropOffAddress\n      price\n      distance\n      passenger {\n        fullName\n        profilePhoto\n      }\n    }\n  }\n':
        types.NearbyRidesDocument,
    '\n    mutation startPhoneVerification($phoneNumber: String!) {\n        StartPhoneVerification(phoneNumber: $phoneNumber) {\n            ok\n            error\n        }\n    }\n':
        types.StartPhoneVerificationDocument,
    '\n    query getRide($rideId: Int!) {\n        GetRide(rideId: $rideId) {\n            ok\n            error\n            ride {\n                id\n                status\n                pickUpAddress\n                dropOffAddress\n                price\n                distance\n                duration\n                driver {\n                    id\n                    fullName\n                    profilePhoto\n                }\n                passenger {\n                    id\n                    fullName\n                    profilePhoto\n                }\n                chatId\n            }\n        }\n    }\n':
        types.GetRideDocument,
    '\n    subscription rideUpdates {\n        RideStatusSubscription {\n        id\n        status\n        pickUpAddress\n        dropOffAddress\n        price\n        distance\n        duration\n        driver {\n            id\n            fullName\n            profilePhoto\n        }\n        passenger {\n            id\n            fullName\n            profilePhoto\n        }\n        chatId\n        }\n    }\n':
        types.RideUpdatesDocument,
    '\n  mutation updateRide($rideId: Int!, $status: StatusOption!) {\n    UpdateRideStatus(rideId: $rideId, status: $status) {\n      ok\n      error\n      rideId\n    }\n  }\n':
        types.UpdateRideDocument,
    '\n    mutation verifyPhone($key: String!, $phoneNumber: String!) {\n        CompletePhoneVerification(key: $key, phoneNumber: $phoneNumber) {\n            ok\n            error\n            token\n        }\n    }\n':
        types.VerifyPhoneDocument,
    '\n    query userProfile {\n        GetMyProfile {\n            ok\n            error\n            user {\n                id\n                firstName\n                lastName\n                email\n                profilePhoto\n                fullName\n                isDriving\n            }\n        }\n    }\n':
        types.UserProfileDocument,
    '\n    query getPlaces {\n        GetMyPlaces {\n            ok\n            error\n            places {\n                id\n                name\n                address\n                isFav\n            }\n        }\n    }\n':
        types.GetPlacesDocument,
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
export function gql(
    source: '\n  mutation toggleDriving {\n    ToggleDrivingMode {\n      ok\n      error\n    }\n  }\n'
): (typeof documents)['\n  mutation toggleDriving {\n    ToggleDrivingMode {\n      ok\n      error\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n  mutation editPlace($placeId: Int!, $isFav: Boolean, $name:String) {\n    EditPlace(placeId: $placeId, isFav: $isFav, name: $name) {\n      ok\n      error\n    }\n  }\n'
): (typeof documents)['\n  mutation editPlace($placeId: Int!, $isFav: Boolean, $name:String) {\n    EditPlace(placeId: $placeId, isFav: $isFav, name: $name) {\n      ok\n      error\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n    mutation addPlace(\n        $name: String!\n        $lat: Float!\n        $lng: Float!\n        $address: String!\n        $isFav: Boolean!\n    ) {\n        AddPlace(\n            name: $name\n            lat: $lat\n            lng: $lng\n            address: $address\n            isFav: $isFav\n        ) {\n            ok\n            error\n        }\n    }\n'
): (typeof documents)['\n    mutation addPlace(\n        $name: String!\n        $lat: Float!\n        $lng: Float!\n        $address: String!\n        $isFav: Boolean!\n    ) {\n        AddPlace(\n            name: $name\n            lat: $lat\n            lng: $lng\n            address: $address\n            isFav: $isFav\n        ) {\n            ok\n            error\n        }\n    }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n    query getChat($chatId: Int!) {\n        GetChat(chatId: $chatId) {\n            ok\n            error\n            chat {\n                passengerId\n                driverId\n                messages {\n                id\n                text\n                userId\n                }\n            }\n        }\n    }\n'
): (typeof documents)['\n    query getChat($chatId: Int!) {\n        GetChat(chatId: $chatId) {\n            ok\n            error\n            chat {\n                passengerId\n                driverId\n                messages {\n                id\n                text\n                userId\n                }\n            }\n        }\n    }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n    mutation sendMessage($text: String!, $chatId: Int!) {\n        SendChatMessage(text: $text, chatId: $chatId) {\n            ok\n            error\n            message {\n                id\n                text\n                userId\n            }\n        }\n    }\n'
): (typeof documents)['\n    mutation sendMessage($text: String!, $chatId: Int!) {\n        SendChatMessage(text: $text, chatId: $chatId) {\n            ok\n            error\n            message {\n                id\n                text\n                userId\n            }\n        }\n    }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n  subscription messageSubscription {\n    MessageSubscription {\n      id\n      text\n      userId\n    }\n  }\n'
): (typeof documents)['\n  subscription messageSubscription {\n    MessageSubscription {\n      id\n      text\n      userId\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n    mutation updateProfile(\n        $firstName: String!\n        $lastName: String!\n        $email: String!\n        $profilePhoto: String!\n    ) {\n        UpdateMyProfile(\n            firstName: $firstName\n            lastName: $lastName\n            email: $email\n            profilePhoto: $profilePhoto\n        ) {\n            ok\n            error\n        }\n    }\n'
): (typeof documents)['\n    mutation updateProfile(\n        $firstName: String!\n        $lastName: String!\n        $email: String!\n        $profilePhoto: String!\n    ) {\n        UpdateMyProfile(\n            firstName: $firstName\n            lastName: $lastName\n            email: $email\n            profilePhoto: $profilePhoto\n        ) {\n            ok\n            error\n        }\n    }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n    mutation reportMovement($lat: Float!, $lng: Float!) {\n        ReportMovement(lastLat: $lat, lastLng: $lng) {\n            ok\n        }\n    }\n'
): (typeof documents)['\n    mutation reportMovement($lat: Float!, $lng: Float!) {\n        ReportMovement(lastLat: $lat, lastLng: $lng) {\n            ok\n        }\n    }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n    query getDrivers {\n        GetNearbyDrivers {\n            ok\n            drivers {\n                id\n                lastLat\n                lastLng\n            }\n        }\n    }\n'
): (typeof documents)['\n    query getDrivers {\n        GetNearbyDrivers {\n            ok\n            drivers {\n                id\n                lastLat\n                lastLng\n            }\n        }\n    }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n  mutation requestRide(\n    $pickUpAddress: String!\n    $pickUpLat: Float!\n    $pickUpLng: Float!\n    $dropOffAddress: String!\n    $dropOffLat: Float!\n    $dropOffLng: Float!\n    $price: Float!\n    $distance: String!\n    $duration: String!\n  ) {\n    RequestRide(\n      pickUpAddress: $pickUpAddress\n      pickUpLat: $pickUpLat\n      pickUpLng: $pickUpLng\n      dropOffAddress: $dropOffAddress\n      dropOffLat: $dropOffLat\n      dropOffLng: $dropOffLng\n      price: $price\n      distance: $distance\n      duration: $duration\n    ) {\n      ok\n      error\n      ride {\n        id\n      }\n    }\n  }\n'
): (typeof documents)['\n  mutation requestRide(\n    $pickUpAddress: String!\n    $pickUpLat: Float!\n    $pickUpLng: Float!\n    $dropOffAddress: String!\n    $dropOffLat: Float!\n    $dropOffLng: Float!\n    $price: Float!\n    $distance: String!\n    $duration: String!\n  ) {\n    RequestRide(\n      pickUpAddress: $pickUpAddress\n      pickUpLat: $pickUpLat\n      pickUpLng: $pickUpLng\n      dropOffAddress: $dropOffAddress\n      dropOffLat: $dropOffLat\n      dropOffLng: $dropOffLng\n      price: $price\n      distance: $distance\n      duration: $duration\n    ) {\n      ok\n      error\n      ride {\n        id\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n  query getRides {\n    GetNearbyRide {\n      ok\n      error\n      ride {\n        id\n        pickUpAddress\n        dropOffAddress\n        price\n        distance\n        passenger {\n          fullName\n          profilePhoto\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  query getRides {\n    GetNearbyRide {\n      ok\n      error\n      ride {\n        id\n        pickUpAddress\n        dropOffAddress\n        price\n        distance\n        passenger {\n          fullName\n          profilePhoto\n        }\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n  mutation acceptRide($rideId: Int!) {\n    UpdateRideStatus(rideId: $rideId, status: ACCEPTED) {\n      ok\n      error\n      rideId\n    }\n  }\n'
): (typeof documents)['\n  mutation acceptRide($rideId: Int!) {\n    UpdateRideStatus(rideId: $rideId, status: ACCEPTED) {\n      ok\n      error\n      rideId\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n  subscription nearbyRides {\n    NearbyRideSubscription {\n      id\n      pickUpAddress\n      dropOffAddress\n      price\n      distance\n      passenger {\n        fullName\n        profilePhoto\n      }\n    }\n  }\n'
): (typeof documents)['\n  subscription nearbyRides {\n    NearbyRideSubscription {\n      id\n      pickUpAddress\n      dropOffAddress\n      price\n      distance\n      passenger {\n        fullName\n        profilePhoto\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n    mutation startPhoneVerification($phoneNumber: String!) {\n        StartPhoneVerification(phoneNumber: $phoneNumber) {\n            ok\n            error\n        }\n    }\n'
): (typeof documents)['\n    mutation startPhoneVerification($phoneNumber: String!) {\n        StartPhoneVerification(phoneNumber: $phoneNumber) {\n            ok\n            error\n        }\n    }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n    query getRide($rideId: Int!) {\n        GetRide(rideId: $rideId) {\n            ok\n            error\n            ride {\n                id\n                status\n                pickUpAddress\n                dropOffAddress\n                price\n                distance\n                duration\n                driver {\n                    id\n                    fullName\n                    profilePhoto\n                }\n                passenger {\n                    id\n                    fullName\n                    profilePhoto\n                }\n                chatId\n            }\n        }\n    }\n'
): (typeof documents)['\n    query getRide($rideId: Int!) {\n        GetRide(rideId: $rideId) {\n            ok\n            error\n            ride {\n                id\n                status\n                pickUpAddress\n                dropOffAddress\n                price\n                distance\n                duration\n                driver {\n                    id\n                    fullName\n                    profilePhoto\n                }\n                passenger {\n                    id\n                    fullName\n                    profilePhoto\n                }\n                chatId\n            }\n        }\n    }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n    subscription rideUpdates {\n        RideStatusSubscription {\n        id\n        status\n        pickUpAddress\n        dropOffAddress\n        price\n        distance\n        duration\n        driver {\n            id\n            fullName\n            profilePhoto\n        }\n        passenger {\n            id\n            fullName\n            profilePhoto\n        }\n        chatId\n        }\n    }\n'
): (typeof documents)['\n    subscription rideUpdates {\n        RideStatusSubscription {\n        id\n        status\n        pickUpAddress\n        dropOffAddress\n        price\n        distance\n        duration\n        driver {\n            id\n            fullName\n            profilePhoto\n        }\n        passenger {\n            id\n            fullName\n            profilePhoto\n        }\n        chatId\n        }\n    }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n  mutation updateRide($rideId: Int!, $status: StatusOption!) {\n    UpdateRideStatus(rideId: $rideId, status: $status) {\n      ok\n      error\n      rideId\n    }\n  }\n'
): (typeof documents)['\n  mutation updateRide($rideId: Int!, $status: StatusOption!) {\n    UpdateRideStatus(rideId: $rideId, status: $status) {\n      ok\n      error\n      rideId\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n    mutation verifyPhone($key: String!, $phoneNumber: String!) {\n        CompletePhoneVerification(key: $key, phoneNumber: $phoneNumber) {\n            ok\n            error\n            token\n        }\n    }\n'
): (typeof documents)['\n    mutation verifyPhone($key: String!, $phoneNumber: String!) {\n        CompletePhoneVerification(key: $key, phoneNumber: $phoneNumber) {\n            ok\n            error\n            token\n        }\n    }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n    query userProfile {\n        GetMyProfile {\n            ok\n            error\n            user {\n                id\n                firstName\n                lastName\n                email\n                profilePhoto\n                fullName\n                isDriving\n            }\n        }\n    }\n'
): (typeof documents)['\n    query userProfile {\n        GetMyProfile {\n            ok\n            error\n            user {\n                id\n                firstName\n                lastName\n                email\n                profilePhoto\n                fullName\n                isDriving\n            }\n        }\n    }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
    source: '\n    query getPlaces {\n        GetMyPlaces {\n            ok\n            error\n            places {\n                id\n                name\n                address\n                isFav\n            }\n        }\n    }\n'
): (typeof documents)['\n    query getPlaces {\n        GetMyPlaces {\n            ok\n            error\n            places {\n                id\n                name\n                address\n                isFav\n            }\n        }\n    }\n'];

export function gql(source: string) {
    return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
    infer TType,
    any
>
    ? TType
    : never;
