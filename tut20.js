

console.log('.................................this is tut20............................');

localStorage.setItem("name1" ,"patil");   //add key-value pair inside localStorage
localStorage.setItem("name2" ,"saurabh");   //add key-value pair inside localStorage

console.log('...............................retrieve...................................');

let nm1=localStorage.getItem("name1");       //retrieve key-value pair inside localStorage
console.log(nm1);

var nm2=localStorage.getItem("name2");        //retrieve key-value pair inside localStorage 
console.log(nm2);

let nm3=localStorage.getItem("name3");        //retrieve key-value pair inside localStorage
console.log(nm3);

localStorage.removeItem("name1")    //clears the specific pair (key-value) from local storage
localStorage.clear()  //clears the local storage

nm2=localStorage.getItem("name2");
console.log(nm2);


console.log('...............................JSON used....................................');

let imp=['chai','coffee','sharbat'];

localStorage.setItem("beverages" ,JSON.stringify(imp));  

let bvg=localStorage.getItem("beverages");
console.log(bvg);

let bvgA=JSON.parse(localStorage.getItem("beverages"));
console.log(bvgA);


console.log('......................................................................');
console.log('......................................session storage.............................');


sessionStorage.setItem("name1" ,"patil");     //add key-value pair inside sessionStorage
sessionStorage.setItem("name2" ,"saurabh");   //add key-value pair inside sessionStorage


// same functions ahet //
// yeh server fir se shuru kiya toh erase ho jate hain //
