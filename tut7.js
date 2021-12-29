
console.log("tut7");


const a1=[25,388,38383,39367,39393];
console.log(a1);

const a2=new Array(1,2,3,4,5,6,7);
console.log(a2);

console.log(Array.isArray(a1));      //true// ....check whether it is array or not
console.log(Array.isArray("sp"));  //false// ....check whether it is array or not


console.log('\n........................................................................................\n')

let val=a1.indexOf(25);
console.log(val);



//mutating array/changging arrays

print("\n...........................\n")

a1.push(34);
console.log(a1);

a1.unshift(233);
console.log(a1);

a1.pop();
console.log(a1);

a1.reverse();
console.log(a1);

let u=a1.concat(a1,a1,a1);
console.log(u);





///Object Literals


//example of nested object literals

const marks={
    saurabh:100,
    patil:101,
    ssp:120,
    arrx:[192920,282892,20202],
    y:{g:10,h:11,i:[10,20,3040]},

}

console.log(marks);
console.log(marks.arrx);
console.log(marks.saurabh);
console.log(marks.y.g);
console.log(marks.y.i)



