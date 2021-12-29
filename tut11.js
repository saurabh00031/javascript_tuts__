
console.log('this is tut11');

let a=window;
//window obj is automatically always global
console.log(a);

//  let b=prompt('this will destroy your computer');   //store kar leta data answer kiya huva
//  console.log(b);


// let c=confirm('do you want to sleep?');
// console.log(c);

let dc=window.document

console.log(dc);


let h1=window.innerHeight;
let w1=window.innerWidth;

console.log(h1,w1);



let xs=scrollX;
let ys=scrollY;

console.log(xs,ys);

function callStunt()
{

    if(confirm('do you want reload'))
    {
     
        let ll=location;
        let sk=location;
        return 1;

      
      
    }
    else{
        console.log('page not reloaded');
        return 0;
    }

}


console.log("........outer and inner heights.........")

let o1=outerHeight;
let o2=outerHeight;

console.log(o1,o2);

console.log('......................................');

var flag=0;

if(callStunt())
{
    console.log('good');
    
    
}
else{
    console.log('bad');
    
}


console.log('..................................................');
let strloc=location.toString();
console.log(strloc);

let his=window.history;
console.log(his);

console.log(window.history.toString());



