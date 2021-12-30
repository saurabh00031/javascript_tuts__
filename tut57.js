
console.log(".......................................................")


console.log("this is tutorial 57")
console.log("........maps in js.....");


const mp=new Map();

const key1="saurabh",key2={},key3=function(){};


mp.set(key1,"this is string");
mp.set(key2,'this is blank obj');
mp.set(key3,"this is an empty function");

const sz=mp.size
console.log(sz);

let val;
val=mp.get(key1);
console.log(val);

console.log(".......................................................")

for(let [key,value] of mp)
{
    console.log(key ,value);
}

console.log(".......................................................")

for(let key of mp.keys())
{
    console.log(key);
}


console.log(".......................................................");

for(let value of mp.values())
{
    console.log(value);
}

console.log(".......................................................")

console.log(".......................................................")