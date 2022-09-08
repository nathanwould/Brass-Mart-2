import { gql } from "graphql-request";
import { useQuery } from "react-query";
import useRequest from "../../API/request";

const PRODUCT_QUERY = gql`
  query GetProduct(
    $id: ID!
    ) {
    product(
      where: 
        { id: $id }
      ) {
      id
      productType
      category
      instrumentType
      name
      make
      model
      instrumentKey
      boreSize
      bellSize
      description
      price
      status
      photos {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

interface UseProductOptions {
  id?: string;
};

const getProductComposer =
  ({ id }: UseProductOptions) =>
    () => useRequest({
      document: PRODUCT_QUERY,
      variables: { id }
    });

function useProduct({
  id,
  ...options
}: UseProductOptions) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: getProductComposer({id}),
    ...options,
  });
};

export default useProduct;