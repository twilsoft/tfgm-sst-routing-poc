import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (evt) => {
  return {
    body: `Hello world from get fulfillment by id. The id you requested was ${evt.pathParameters}`,
  };
});
