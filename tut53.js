

////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("tut 53 is running ");
console.log(".......Generators in js.....................");


// Generators in js //


function* gen()
{
    let i=0;

    /*
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    */

    for(let i=1;i<10;i++)
    {
         yield i;
    }
}

const genr=gen();
console.log(genr);

console.log(".....................");


console.log(genr.next().value);
console.log(genr.next());
console.log(genr.next());
console.log(genr.next());
console.log(genr.next());




/////////////////////////////////////////////////////////////////////////////////////////////////////////////