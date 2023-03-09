import { StackContext, use } from "sst/constructs";
import { ApiGatewayStack } from "./ApiGatewayStack";

export function FulfillmentApi({ stack }: StackContext) {
  const apiGw = use(ApiGatewayStack);

  apiGw.addRoutes(stack, {
    "GET /fulfillment": "src/platforms/fulfillment/get.handler",
    "GET /fulfillment/{id}": "src/platforms/fulfillment/get_by_id.handler",
    "POST /fulfillment": "src/platforms/fulfillment/create.handler",
  });
}
