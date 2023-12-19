import { handler as handler1} from "../src/services/lambdas/lambda1/handler";

console.log("Starting debug session");
handler1();
console.log("Finishing debug session");
