import { GraphQLClient, RequestOptions } from "graphql-request";


const useRequest = (opts: RequestOptions) => {
  const endpoint = `${process.env.REACT_APP_API_BASE_URL}/api/graphql`;

  const graphQLClient = new GraphQLClient(endpoint, {
    credentials: 'include',
  })
  return graphQLClient.request({
    ...opts,
  });
};

export default useRequest;