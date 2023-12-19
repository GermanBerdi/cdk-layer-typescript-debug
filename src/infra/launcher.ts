#!/usr/bin/env node
//import "source-map-support/register";
import { App, Tags } from "aws-cdk-lib";

const app = new App();

Tags.of(app).add("UserName","MyUserName");
Tags.of(app).add("Project","typescript-debug");
