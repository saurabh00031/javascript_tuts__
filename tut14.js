
console.log('tut 14 is running');

// let a=document;
// console.log(a);

// let aa=document.all;
// let bb=document.body;

// console.log(aa);


// console.log(document.forms);

// Array.from(aa).forEach(function(element)
// {
//   console.log(element);

// });

// let ahref=document.links[0];
// console.log(document.links[0]);

// console.log(document.images);

//ELEMENT SELECTOR:-

//single element selector
//multiple element selector


var el1=document.getElementById('colx1');
console.log(el1);
var el2=document.getElementById('colx2');
console.log(el2);

let el3=el2.className;
console.log(el3);


let doc=document.all;

console.log(doc);


Array.from(doc).forEach(function(elem)
{
    console.log(elem);
});


el1.style.color='red';
el2.style.color='green';

el1.innerText='saurabhs1';
el2.innerHTML='<h2>saurabhs2</h2>'; //html bhi laga sakta huin;

console.log(el2.innerHTML);



console.log('..........................................jquerys..................................................');
console.log('.................................single element selector...........................................');
let selc1=document.querySelector('#colx3');  //for id
console.log(selc1);

let selc2=document.querySelector('.ssp');  //for divs
console.log(selc2);

let selcx2=document.querySelector('.child');  //for divs
console.log(selcx2);

let selc3=document.querySelector('center');        
console.log(selc3);

let selc4=document.querySelector('p');
console.log(selc4);

let selc5=document.querySelector('span');
console.log(selc5);

selc5.style.background='pink';


console.log('..........................................jquerys..................................................');
console.log('.................................multi element selector...........................................');

let sc1=document.getElementsByClassName('child');      //no need of . or #
console.log(sc1);


console.log('...........................................for each array...................................');

Array.from(sc1).forEach(function(elems,index)
{
     console.log(elems,index);
});

console.log('...................................................................................................');


let ch1=document.getElementsByClassName('ssp');    //className
console.log(ch1[0].getElementsByClassName('child'));

console.log('...................................Tag Name...............................................................');


let cg=document.getElementsByTagName('div');
console.log(cg);


const helloWorld = () => 
{
    console.log('Hello World!');
};


helloWorld();





