import request, { RequestOptions } from "graphql-request";

const requestComposer = (opts: RequestOptions) => {
  // const token = sessionStorage.getItem('keystonejs-session');
  return request({
    url: `${process.env.REACT_APP_API_BASE_URL}/api/graphql`,
    ...opts,
    requestHeaders: {
      authorization: `Bearer <token>`,
    },
  });
};

export default requestComposer;
