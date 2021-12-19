console.log('tut10:functions');


let s1='saurabh';
let s2='ssp';

console.log(`happy birthday ${s1} and ${s2}`);




function greetingsG(name1)
{
    console.log(`happy birthday ${name1}`);
}

function greet(name2='saurabhs')
{
    return `happy birthday ${name2}`;
}


greetingsG(s1);
greetingsG(s2);

console.log(greet('saurabh patil'));

console.log(greet());


let arx=new Array(1,2,3,4,5,6,9,'saurabh0','ssp0');

arx.forEach(function(element,index,array)
{
console.log(element,index ,array);
}
);

const obja={

    s1:'saurabh',
    s2:'patil',
    s3:'ssp',
    game:function()
    {
        return 'saurabh is back';
    }
}


console.log(obja.game());
console.log(obja.s1);

var s=100;

function playing()
{
     var s=20;
     console.log(s);
     return 'saurabh is learning js';


}


console.log(playing(),s);


console.log('................................');


if(1){
var num1=1;
}

function jumpNum(num1)
{
    num1=-1;
    console.log(num1);

    console.log(`showdata:${num1}`);

}

jumpNum(num1);


const helloWorld = () => 
{
    console.log('Hello World!');
};


helloWorld();









