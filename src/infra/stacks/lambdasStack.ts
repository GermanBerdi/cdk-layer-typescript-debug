import { Stack, StackProps } from "aws-cdk-lib"
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Runtime } from "aws-cdk-lib/aws-lambda"
import { Construct } from "constructs";
import { join } from "path";

export class LambdasStack extends Stack {

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const lambda1 = new NodejsFunction(this, "Lambda1", {
      runtime:Runtime.NODEJS_18_X,
      entry: join(__dirname, "..", "..", "services", "lambdas", "lambda1", "handler.ts"),
      handler: "handler",
    })

  }
}