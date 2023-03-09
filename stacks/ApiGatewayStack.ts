import { StackContext, Api } from "sst/constructs";

export function ApiGatewayStack({ stack }: StackContext) {
  const api = new Api(stack, "api", {});
  stack.addOutputs({
    url: api.url
  })
  return api;
}
