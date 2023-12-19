import { Stack, StackProps } from "aws-cdk-lib"
import { Code, ILayerVersion, LayerVersion } from "aws-cdk-lib/aws-lambda";
import { Runtime } from "aws-cdk-lib/aws-lambda"
import { Construct } from "constructs";
import { join } from "path";

export class LayersStack extends Stack {

  public readonly layer1: ILayerVersion;
  public readonly layer2: ILayerVersion;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    this.layer1 = new LayerVersion(this, "Layer1", {
      compatibleRuntimes: [Runtime.NODEJS_18_X],
      code: Code.fromAsset(join(__dirname, "..", "..", "..", "build", "services", "layers", "layer1")),
      description: "Lambdas commmon code 1",
      layerVersionName: `TypescriptDebug-Layer1-${process.env.RESOURCE_NAME_SUFFIX}`
    });

    this.layer2 = new LayerVersion(this, "Layer2", {
      compatibleRuntimes: [Runtime.NODEJS_18_X],
      code: Code.fromAsset(join(__dirname, "..", "..", "..", "build", "services", "layers", "layer2")),
      description: "Lambdas commmon code 2",
      layerVersionName: `TypescriptDebug-Layer2-${process.env.RESOURCE_NAME_SUFFIX}`
    });
  }
}