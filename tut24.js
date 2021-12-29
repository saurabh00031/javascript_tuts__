

console.log("......................................tut 24..........................................");

let td=new Date();
console.log(td);

let otd=new Date("17 July 2001");
console.log(otd);

let td1=new Date("12-7-2001"); //mm dd yy is format
console.log(td1);

console.log(".................................. .get functions....................................");

let a;
a=otd.getDay();
console.log(a);

a=otd.getDate();
console.log(a);

a=otd.getMinutes();
console.log(a);

a=otd.getHours();
console.log(a);

a=otd.getTime();
console.log(a);

a=otd.getUTCHours();
console.log(a);

a=otd.getMonth();
console.log(a);

console.log(".....................................set functions....................................");


otd.setDate(15);
console.log(otd);

otd.setMonth(8);
console.log(otd);

                               //similarly all can be setted up in this way 

console.log("...................................................................................");




