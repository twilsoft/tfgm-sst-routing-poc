import { StackContext, use } from "sst/constructs";
import { ApiGatewayStack } from "./ApiGatewayStack";

export function ProductApi({ stack }: StackContext) {
  const apiGw = use(ApiGatewayStack);

  apiGw.addRoutes(stack, {
    "GET /product": "src/platforms/product/get.handler",
    "GET /product/{id}": "src/platforms/product/get_by_id.handler",
    "POST /product": "src/platforms/product/create.handler",
  });
}
