
console.log("regular expresions in javascript");
console.log("tutorial 36 is running");




let reg=/saurabh/g;  // This is regular expression literals  in js // global flag help karto sarva search vala words

let regx=/saurabh/i;    //  case insensitive (Saurabh,SAURABH,saurabh) are same //

console.log(reg);
console.log(reg.source);   // data inside regular expressions //

let s="this is great tutorial going on ,saurabh,saurabh";
let ss="this is great tutorial going on ,Saurabh";

// SOME FUNCTUCTIONS TO MATXCH EXPRESSIONS //


// 1.exec() //.........................................................................................//



// this function  will return an array for match or null for no match //


/// g wala exec()

let res=reg.exec(s);
console.log(res);

res=reg.exec(s);
console.log(res);

res=reg.exec(s);
console.log(res);


/// i wala exec()

let resx=regx.exec(ss);
console.log(resx);
console.log(resx.input);
console.log(resx.index);


// 2.test() //...........................................................................................//

let result=reg.test(s);  //reg yeh s mein hain kya dekh  aur bata : true or false
console.log(result);

// 3.match() //.............................................................................................//

   
let rss=s.match(reg);     //it will return an array of results or null
console.log(rss);             //sab reg wale agaye bcz g lagaya hain uper reg mein yani global kiya humne



// 4.search() //............................................................................................//


let sch=s.search(regx);       //returns index of first match else -1
console.log(sch);


// 5.replace() //........................................................................................................//


let rsu=s.replace(reg,"ssp");  //sab replace hogaye bcz g use kiya hain reg mein
console.log(rsu);


// ..........................................................................................................//

