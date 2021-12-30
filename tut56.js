console.log("............................................................");

console.log("tut 56 is running");
console.log("'for in' -- v/s-- 'for of' loops in javascript")

console.log("............................................................");




sp=['ssp','saurabh','patil','sp'];


console.log("..(classic method).purana wala loop...");

console.log("......................other for loops.....................................");


for(let i=0;i<sp.length;i++)
{
    console.log(sp[i]);
}



print("..kuch naya Wala loop...");

sp.forEach(function(element)
{
    console.log(element);
});


obj={
    name:"saurabh",
    rolln:"00031"
}

console.log("..............for in loop....(used for object literals)...............");

for(let key in obj)
{
    console.log(obj[key]);
}

console.log("...............for of loop...(used for arrays).........................");


arr=["saurabh","patil","ssp"];

for(let name of arr)
{
    console.log(name);
}


console.log("..........................................................................")