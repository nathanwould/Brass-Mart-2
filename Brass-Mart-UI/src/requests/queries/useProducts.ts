import { gql } from "graphql-request";
import { useQuery } from "react-query";
import useRequest from "../../API/request";
import { IFilter, IOrderBy } from "../../types";

const ALL_PRODUCTS_QUERY = gql`
  query GetProducts(
    $filter: ProductWhereInput!
    $skip: Int!
    $take: Int!
    $orderBy: [ProductOrderByInput!]
    ) {
    products(
      where: $filter
      skip: $skip
      take: $take
      orderBy: $orderBy
      ) {
      id
      productType
      category
      instrumentType
      name
      make
      model
      description
      price
      photos {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

// export type IFilter = Object;

interface UseProductsOptions {
  filter?: IFilter;
  skip?: number;
  take?: number;
  orderBy?: IOrderBy;
};

const getProductsComposer =
  ({filter, skip, take, orderBy}: UseProductsOptions) =>
    () => useRequest({
      document: ALL_PRODUCTS_QUERY,
      variables: { filter, skip, take, orderBy }
    });

function useProducts({
  filter,
  skip,
  take,
  orderBy,
  ...options
}: UseProductsOptions) {
  return useQuery({
    queryKey: ['products', filter, skip, take, orderBy],
    queryFn: getProductsComposer({filter, skip, take, orderBy}),
    ...options,
  });
};

export default useProducts;