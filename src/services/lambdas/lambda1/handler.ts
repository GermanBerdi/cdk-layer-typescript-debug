import { double } from "layer1";
import { triple } from "layer2";

export function handler ():void {
  const myNum = 20;
  console.log (`The double of ${myNum} is ${double(myNum)}`);
  console.log (`The triple of ${myNum} is ${triple(myNum)}`);
}

