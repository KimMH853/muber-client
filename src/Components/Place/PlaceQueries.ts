import { gql } from '@apollo/client';

export const EDIT_PLACE = gql`
    mutation editPlace($placeId: Int!, $isFav: Boolean, $name: String) {
        EditPlace(placeId: $placeId, isFav: $isFav, name: $name) {
            ok
            error
        }
    }
`;
