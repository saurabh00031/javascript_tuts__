console.log('tut 12 is running');

let a=document;
console.log(a);

let b=window.document;
console.log(b);

let aa=document.all;
let bb=document.body;

console.log(aa);


console.log(document.forms);


Array.from(aa).forEach(function(element)
{
  console.log(element);

});

console.log('.................links........................................')

let ahref=document.links[0];
console.log(document.links[0]);
console.log(document.links[1]);
console.log(document.images);


let yu=document.all;


Array.from(yu).forEach(function(element,index,array)
{
  console.log(element,index,array);
})

