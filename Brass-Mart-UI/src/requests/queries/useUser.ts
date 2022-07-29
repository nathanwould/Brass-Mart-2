import { gql } from "graphql-request";
import { useQuery } from "react-query";
import request from "../../API/request";

const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        cartCount
        cart {
          id
          quantity
          product {
            id
            price
            name
            photos {
              image {
                publicUrlTransformed
              }
            }
          }
        }
        orders {
          id
          total
          charge
        }
      }
    }
  }
`;

const getUserComposer = () => () => request({
  document: CURRENT_USER_QUERY,
});

function useUser() {
  return useQuery({
    queryKey: 'authenticatedItem',
    queryFn: getUserComposer(),
  });
}

export default useUser;