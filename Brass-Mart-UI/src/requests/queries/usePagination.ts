import { gql } from "graphql-request";
import { useQuery } from "react-query";
import useRequest from "../../API/request";

const PAGINATION_QUERY = gql`
  query ($filter: ProductWhereInput) {
    productsCount( where: $filter )
  }
`;

interface UsePaginationOptions {
  filter?: any;
};

const getPaginationComposer =
  ({ filter }: UsePaginationOptions) =>
    () => useRequest({
  document: PAGINATION_QUERY,
  variables: { filter }
})

function usePagination(
  { filter }: UsePaginationOptions
) {
  return useQuery({
    queryKey: ['products', filter],
    queryFn: getPaginationComposer({ filter }),
    // ...options,
  });
}

export default usePagination;