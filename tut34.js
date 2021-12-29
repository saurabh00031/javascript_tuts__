

//asynchronous can be done by 3 ways//                           (mera program block na ho)


//Async/await
//callbacks
//promises


console.log("tut 34 is running");


setTimeout(()=>
{

    for(let i=1;i<=20000;i++)
    {
        console.log(i);
    }
    

},4000);

console.log("complete");