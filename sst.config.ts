import { SSTConfig } from "sst";
import { ApiGatewayStack } from "./stacks/ApiGatewayStack";
import { FulfillmentApi } from "./stacks/FulfillmentStack";
import { OrderApi } from "./stacks/OrderStack";
import { ProductApi } from "./stacks/ProductStack";

export default {
  config(_input) {
    return {
      name: "routing-poc",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(ApiGatewayStack)
    .stack(OrderApi)
    .stack(FulfillmentApi)
    .stack(ProductApi)
  }
} satisfies SSTConfig;
