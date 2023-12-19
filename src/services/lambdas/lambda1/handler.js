const layer1 = require("../../layers/layer1/nodejs/node_modules/layer1");

function handler () {
  const myNum = 20;
  console.log (`The double of ${myNum} is ${layer1.double(myNum)}`);
}

exports.handler = handler;
