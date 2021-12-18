

//DATA TYPES

//primitive data types 
//strings
//numbers
//boolean
//null
//undefined
//symbol


//reference data types
//arrays
//object literals
//functions
//dates

console.log('tut4');

//......................................primitive data-types................................................//

//string
let str="saurabh patil";
console.log(str+'\t'+str);
console.log(typeof str);

//number
let number1=1002
console.log(number1);

//boolean 
let bl=true;
console.log(bl);

//null
let nullvar=null;
console.log(nullvar);
console.log(typeof nullvar);  //bogus value of null ..it says object although it is primitives


//......................................reference data-types................................................//

//Array
myArr=[12,32,3,33,3,'saurabh',false,'s'];
console.log(myArr);
console.log(typeof myArr);

for(var i=0;i<myArr.length;i++)
{
    console.log(myArr[i]);
}


//object literals
console.log(".....now obj-literals..........\n");
let grp={

    saurabh:7,
    ssp:20,
    sp:45,
    'saurabh patil ':9,

}

console.log(grp.saurabh);
console.log(grp.ssp);
console.log(grp.sp);
console.log(typeof grp);


//functions

function calling()
{
    console.log("saurfabh is good  boy");
    console.log(" hii try to type fast plx else otherwise you will be back on foot");
    console.log("saurabh is good boy kkk ...try to understand ")
}

calling();
console.log(typeof calling);

