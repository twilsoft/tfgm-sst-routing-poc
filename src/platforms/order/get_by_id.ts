import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (evt) => {
  return {
    body: `Hello world from get order by id. The id you requested was ${evt.pathParameters}`,
  };
});
