import { gql } from '@apollo/client';

export const UPDATE_PROFILE = gql`
    mutation updateProfile($firstName: String!, $lastName: String!, $email: String!, $profilePhoto: String!) {
        UpdateMyProfile(firstName: $firstName, lastName: $lastName, email: $email, profilePhoto: $profilePhoto) {
            ok
            error
        }
    }
`;
