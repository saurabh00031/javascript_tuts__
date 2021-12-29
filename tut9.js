

console.log('we are at tut9');

//for loop in js


console.log('for loop in javascripts');

for(let i=0;i<10;i++)
{
    console.log(i);
   // console.log('\n');
}

console.log('while  loop in javascripts');

let i=1;
while(i<=10)
{

console.log(i,i);
i++;

}

console.log('do while  loop in javascripts');

//kamse kam ek baar toh chalna hi chalna hain isko

let ii=20;
do{

    console.log(ii);
    ii++;

}while(ii<=10);




console.log('..............................................................');

console.log('for each loop in js');

 arx=[1,2,4,5,6,3];


arx.forEach(function(element,index)
{
console.log(element,index);
}
);


console.log('...........................for each loop.................................');
arx.forEach(function(element)
{
console.log(element);
}
);



console.log('..............................................................');

console.log('printing object data');


let objj={

    a: 'saurabh',
    b:23,
    c:'saurabh',
}

for(let key in objj)
{
    console.log(`key is ${key}`,` and val is ${objj[key]}`);
}


console.log('..............................................................');

arx.forEach(function(element,index,array)
{
console.log(element,index ,array);
}
);




let ui={
    s1:1,
    s2:2,
    s3:3
}


for(let k in ui)
{
    console.log(`the key is ${k} and val is ${ui[k]}`);
}

