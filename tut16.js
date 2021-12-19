
console.log('tut 16 ');

let elem1=document.createElement('li');
console.log(elem1);

let elem1Txt=document.createTextNode('i m good boy');
console.log(elem1Txt);

elem1.append(elem1Txt);

elem1.setAttribute('title','mytitle');

let ul=document.querySelector('ul.this');

elem1.innerHTML="<b>hello,i m learning js<b>";
elem1.innerHTML="hello,i m learning js";

ul.appendChild(elem1);
console.log(ul);
