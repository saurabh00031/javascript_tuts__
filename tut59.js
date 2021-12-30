
console.log("tut 59 is running")
console.log("...symbols in js.......");


//symbols  are availabe in  ES6


const sp1= Symbol('sssp');
console.log(sp1);


const sp2= Symbol('sssp');
console.log(sp2);

//sp1 and sp2 different hoga bcz uniqueness rakta hain symbol
// unique keys banana mushkil thhha ES6 version se pehle so ES6 me isliye Symbols ka janm huva //



if(sp1==sp2)  
{
    console.log("equals");
}
else{
    console.log("not equals");
}

let sym1=Symbol();
let sym2=Symbol();


obj={};

obj[sym1]="symbol1";
obj[sym2]="symbol2";

console.log(obj[sym1]);
console.log(obj[sym2]);


