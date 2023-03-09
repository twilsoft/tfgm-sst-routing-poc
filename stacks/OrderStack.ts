import { StackContext, use } from "sst/constructs";
import { ApiGatewayStack } from "./ApiGatewayStack";

export function OrderApi({ stack }: StackContext) {
  const apiGw = use(ApiGatewayStack);

  apiGw.addRoutes(stack, {
    "GET /order": "src/platforms/order/get.handler",
    "GET /order/{id}": "src/platforms/order/get_by_id.handler",
    "POST /order": "src/platforms/order/create.handler",
  });
}
