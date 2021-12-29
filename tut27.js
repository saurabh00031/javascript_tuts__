
console.log(".......................................tut 27.........................................")

//Object literals


let carx =
{

    name : "suzuki ",
    speedT : 300,
    run : function()
    {
    console.log(" lets drive car")
    }
}


//constructors


class Car 
{
    constructor(namex, speedx) 
    {

        this.namex = namex;
        this.speedx = speedx;
        console.log(this.namex,this.speedx);

    }

     caller(x)
    {
        this.y=x;
        console.log(this.y);
    }


}

const sp=new Car("suzuki",200);

sp.caller(100);
