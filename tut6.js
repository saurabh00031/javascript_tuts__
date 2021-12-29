

htmls='sAurabh is Trying for javascript now';

console.log(htmls);


console.log(htmls.toUpperCase());
console.log(htmls.toLowerCase());
console.log(htmls.substring(0,4));
console.log(htmls.indexOf('s'));
console.log(htmls.lastIndexOf('s'));
console.log(htmls.charAt(26));

console.log(htmls.endsWith('now'));
console.log(htmls.endsWith('sAurabh'));

htmls=htmls.concat(htmls,htmls);


console.log(htmls);

console.log('is present or not:-'+htmls.includes('is')); //check whether given is substring or not//


console.log(htmls.substring(0,39));



let jam='saurabh';


console.log('........................slice function.........................');


console.log(jam.slice(0,4));
console.log(jam.slice(2));  //2 chya pudy slice means 2 chya pudla sarva

console.log(jam.slice(0));

console.log(jam.replace('saura','saurabh'));  //replace substr saura with saurabh


console.log('........................string literals.........................');


let frt1='mango';
let frt2='orange';
let frt3='apple';

let bh=`i want ${frt1},${frt2} and ${frt3}
         <h1>saurabh</h1>
                         `;



console.log
(`
i want ${frt1},${frt2} and ${frt3}

<h1>saurabh</h1>



`);



document.write(bh);


document.body.innerHTML=bh;


let stri1='saurabh';
let stri2='patil';

let stri3=stri1.concat(stri2,stri2,stri1,stri2);
console.log('................many arguments can be passed here in concat functions..................');
console.log(stri3);