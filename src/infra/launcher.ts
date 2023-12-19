#!/usr/bin/env node
//import "source-map-support/register";
import * as dotenv from "dotenv"
import { App, Tags } from "aws-cdk-lib";
import { LambdasStack } from "./stacks/lambdasStack";
import { LayersStack } from "./stacks/layersStack"

dotenv.config();

const userName = process.env.USER_NAME;

if (!userName)
  throw new Error (
    "You must specify a USER_NAME",
  );

const app = new App();

Tags.of(app).add("UserName",userName);
Tags.of(app).add("Project","typescript-debug");

const layersStack = new LayersStack(app,"TypescriptDebugLayersStack");
const lambdasStack = new LambdasStack(app, "TypescriptDebugLambdasStack", {
  layer1: layersStack.layer1
});
