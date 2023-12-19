# CDK in typescript with Lambda and Layers
The aim of this practice is reach a CDK in typescript with Lambda and Layers deployement. Also to have debug in local enabled for a better development experience.

## Useful commands

* `npm run build`     compile typescript to javascript
* `npm run rebuild`   delete javascript files and compile typescript to javascript
* `npm run synth`     emits the synthesized CloudFormation template
* `npm run deploy`    deploy this stack to your default AWS account/region
* `npm run destroy`   destroy this stack

# Steps from scratch
1- `mkdir cdk-layer-typescript-debug`
2- `git init`
3- Commit number 1: - Create README.md
4- Create a repository in github
5- `git remote add origin https://github.com/GermanBerdi/cdk-layer-typescript-debug.git`
6- Publish main branch
7- Commit number 2: - Add simple javascript function
8- Commit number 3: - Add launcher.js to call handler from lambda1
9- Commit number 4: - Add launch.json
10- Commit number 5: - Add simple "javascript library" layer1
11- Commit number 6: - Moving layer1 to CDK layers expected structure
12- Commit number 7: - Indent fix on launch.json
13- `npm install -D typescript`
14- Create .gitignore
15- Add node_modules to .gitignore
16- Commit number 8: - Installing typescript
17- Re-writing lambda1 and layer1 in typescript
17- add !src/**/node_modules to .gitignore
18- Commit number 9: - Implementing lambda1 and layer1 in typescript
19- Commit number 10: - Implementing launcher in typescript
20- `tsc --init`
21- Commit number 11: - Add tsconfig.json
22- Commit number 12: - Setting target, outdir, include in tsconfig.json
23- Add scripts in package.json
24- Add Useful commands section to README.md
25- Commit number 13: - Add build and rebuild npm commands
26- Moving debug folder inside src to be transpiled when executing npm build command
27- Add build to .gitignored
28- Commit number 14: - Preparing debug folder to be transpiled
29- Setting program, outFiles, preLaunchTask in launch.json
30- Setting sourceMap in tsconfig.json
31- Commit number 15: - Debug environment with typescript ready
32- Add cdk.json
33- `npm install aws-cdk-lib`
34- Commit number 16: - Installing aws-cdk-lib
35- Commit number 17: - Add launcher for cdk stack deployement
37- `npm install aws-cdk`
38- `npm install --save-dev ts-node`
39- Add synth, deploy and destroy scripts
40- `npm run synth`
41- Add cdk.out to .gitignore
42- Commit number 18: - Synth cdk template
