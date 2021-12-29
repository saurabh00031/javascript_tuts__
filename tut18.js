
console.log("this is tut 18..continuing the tut 18 with events only in js ");
console.log("tut-18");


let evb=document.getElementById('btn');


//single click firing

//various mouse events r there

evb.addEventListener("click",func);
evb.addEventListener("dblclick",func2);
evb.addEventListener("mouseup",func3);
evb.addEventListener("mousedown",func4);
evb.addEventListener("mouseenter",func5);


function cfc()
{

let x=document.getElementById('lname');
console.log(x.value);


}

function func(e)
{
    console.log("thanks",e.target.value);

}



//double click firing

function func2(e)
{
    console.log("thanks,here i did a double click",e);

}

function func3(e)
{
    console.log("thanks,here i did mouse up",e);

}

function func4(e)
{
    console.log("thanks,here i did mouse down",e);

}

function func5(e)
{
    console.log("thanks,here i did mouse enter",e);

}

