
console.log("tut 47 is running ");


console.log("metachar symbols");


let regex=/^saurabh/;  //check string  has start as 'saurabh'       //symbol ^ is used



let regexy=/tly$/       //check str has end as 'tly'                // symbol $ is used


let rege=/s.urabh/;  //matches any one character  //dot ki jagah kuch bhi ho..match hoga //


let rg=/s*urabh/;   //star ki jagah kuch bhi ho..true return karega




let regop=/sa?urab?h/;  // que mark batata ki uske piche ka char option hain
let str="surah";

///////////////////////////////////////////////////////////////////////////////////////


let s="saurabh is learning js fastly";

let result=regex.exec(s);
console.log("the result from exec is ",result);

///////////////////////////////////////////////////////////////////////////////////////

//  ^

if(regex.test(s))
{
    console.log(`the string ${s} matches with expression  ` + regex.source);
}
else
{
    console.log(`the string ${s} not matches with expression  ` + regex.source);
}

//  $


if(regexy.test(s))
{
    console.log(`the string ${s} matches with expression  ` + regexy.source);
}
else
{
    console.log(`the string ${s} not matches with expression  ` + regexy.source);
}


//  .


if(rege.test(s))
{
    console.log(`the string ${s} matches with expression  ` + rege.source);
}
else
{
    console.log(`the string ${s} not matches with expression  ` + rege.source);
}



//  * 


if(rg.test(s))
{
    console.log(`the string ${s} matches with expression  ` + rg.source);
}
else
{
    console.log(`the string ${s} not matches with expression  ` + rg.source);
}


// ?


if(regop.test(str))
{
    console.log(`the string ${s} matches with expression  ` + regop.source);
}
else
{
    console.log(`the string ${s} not matches with expression  ` + regop.source);
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////
