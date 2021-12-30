
console.log("tut 60 is running ");
console.log("Destructuring in js");



let a,b;
[a,b]=[2,7]

console.log(a,b);


[a,b,c, ...d]=[1,2,3,4,5,6,7,8,9,100];
console.log(a,b,c,d);



({a,b,c,...d}={a:1,b:2,c:3,d:4,e:5,f:6});

console.log(d);