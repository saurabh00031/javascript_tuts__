
console.log("tut 48 is running ");
console.log("..character sets.............");


console.log(".......................................................................................");

const regex1=/s[a-z]urabh/;     // a to z konsa bhi ho jaye //
const str="saurabh is here";

const regex2=/s[ry]urabh/;    //r ya y ho  //

const regex3=/s[^zyu]urabh/;    //matlab ki z bhio nahi t bhi nahi u bhi nahi hain


console.log(".......................................................................................")



if(regex1.test(str))
{
    console.log(`the string ${str} matches with expression  ` + regex1.source);
}
else
{
    console.log(`the string ${str} not matches with expression  ` + regex1.source);
}

console.log(".......................................................................................")


if(regex2.test(str))
{
    console.log(`the string ${str} matches with expression  ` + regex2.source);
}
else
{
    console.log(`the string ${str} not matches with expression  ` + regex2.source);
}


console.log(".......................................................................................")

if(regex3.test(str))
{
    console.log(`the string ${str} matches with expression  ` + regex3.source);
}
else
{
    console.log(`the string ${str} not matches with expression  ` + regex3.source);
}


console.log(".......................................................................................")















