
console.log("tut 43 is running");




async function  func()
{
    console.log("inside function of func()")
    
    const response=await fetch("https://api.github.com/users"); // isspr last line ka kaam karne ke baad ayega //
    console.log("before response");

    const users=await response.json();
    console.timeLog("users resolved")
    return users;


}

console.log("before calling func ");
let vr=func();
console.log("after calling harry");
console.log(vr);
vr.then(data=>console.log(data));
console.log("last line of js");


//async promise return karta hain//

//console.log()  lagane se flow pata chalta hain so jaruur lagana so ki apko console mein flow pata
//chalega

//