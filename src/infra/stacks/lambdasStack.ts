import { Stack, StackProps } from "aws-cdk-lib"
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { ILayerVersion, Runtime } from "aws-cdk-lib/aws-lambda"
import { Construct } from "constructs";
import { join } from "path";

interface LambdasStackProps extends StackProps {
  layer1: ILayerVersion
}

export class LambdasStack extends Stack {

  constructor(scope: Construct, id: string, props: LambdasStackProps) {
    super(scope, id, props)

    const lambda1 = new NodejsFunction(this, "Lambda1", {
      runtime:Runtime.NODEJS_18_X,
      entry: join(__dirname, "..", "..", "services", "lambdas", "lambda1", "handler.ts"),
      handler: "handler",
      layers: [props.layer1],
      bundling: {
        externalModules: ["layer1"],
      },
    })

  }
}