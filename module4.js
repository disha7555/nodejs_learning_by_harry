// 1)import {simple} from "./module3.mjs";
// simple();

//2)import two fn from module3.mjs
// import {simple,simple2} from "./module3.mjs";
// simple();
// simple2();

//3)/import simple2 as simple fn from module3.mjs
// import {simple2 as simple} from "./module3.mjs";
// simple();

//4)import simple fn without using {} from module3.mjs(gives error b'coz no default fn in module3.mjs)
// import simple from "./module3.mjs";
// simple();
            //to resolve this make any fn default in module3.mjs
            //i have made simple2 default fn, so whatever you import without {},but default fn will only imported 

//5)import all from module3.mjs
import * as a2 from "./module3.mjs";
console.log(a2);
console.log(a2.simple());