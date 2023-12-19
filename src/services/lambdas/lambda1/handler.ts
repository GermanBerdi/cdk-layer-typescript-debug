import { double } from "layer1";

export function handler ():void {
  const myNum = 20;
  console.log (`The double of ${myNum} is ${double(myNum)}`);
}

