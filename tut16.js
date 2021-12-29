
console.log('tut 16 ');

let elem1=document.createElement('li');
console.log(elem1);

elem1.className="lilis";
elem1.id="liid";
elem1.setAttribute('title','mytitle');


let elem1Txt=document.createTextNode('i m text Node ');
console.log(elem1Txt);

elem1.append(elem1Txt);



let ul=document.querySelector('ul.this');

elem1.innerHTML="<b>hello,i m learning js<b>";   //dyanamically creation and setting of attributes using js//
elem1.innerHTML="hello,i m learning js";         //dyanamically creation and setting of attributes using js//

ul.appendChild(elem1);
console.log(ul);


console.log("\n..................................replace any node...............................................\n")


let elem2=document.createElement('h2');

elem2.id="liid2";
elem2.className="lilis2";

let tNode=document.createTextNode("hiii ,learning to replace ");

elem2.appendChild(tNode);
ul.appendChild(elem2);
console.log(elem2);






console.log('....................................replace............................................');

 elem1.replaceWith(elem2);
 console.log(elem1);

// let elem3=document.getElementById('ul1');
// console.log(elem3)

// elem2.replaceWith(elem1)
// console.log(elem2)

// elem1.innerHTML="saurabh santosh patil"

// console.log('\n.............................................................................\n');
// let sop=document.getElementById('container');
// console.log(sop);










