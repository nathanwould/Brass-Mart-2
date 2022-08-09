import { gql } from "graphql-request";
import { useQuery } from "react-query";
import useRequest from "../../API/request";

const PAGINATION_QUERY = gql`
  query {
    productsCount
  }
`;

interface UsePaginationOptions {
  filter?: any;
};

const getPaginationComposer =
  (/*filter?: any*/) =>
    () => useRequest({
  document: PAGINATION_QUERY,
  // variables: { filter }
})

function usePagination() {
  return useQuery({
    queryKey: ['products'/*, filter*/],
    queryFn: getPaginationComposer(/*filter*/),
    // ...options,
  });
}

export default usePagination;