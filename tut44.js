
console.log("tut 44 is running");


//peretend data of a is from server//


let a=undefined;

if(a!=undefined)
{
    throw new Error('this is not undefined');

   
}
else
{
    console.log("this is undefined");
   
}


try{
   
    console.log("we r inside try block")

}catch (error)
{
    console.log("are this okay",error.message);
}

