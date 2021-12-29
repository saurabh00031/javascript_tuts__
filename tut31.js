


console.log(".......................................tut 31.........................................")

//Object literals


let carx =
{

    name : "suzuki ",
    speedT : 500,
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
 
    static addstaticFunc(a,b,c)
    {
        return a+b+c ;
    }

}



class vehicle extends Car
{

 

    constructor(namex, speedx,prices)
    {
        super(namex, speedx) ; //super()  is compulsory

        this.namex = namex;
        this.speedx = speedx;
        this.prices=prices;
        console.log(this.namex,this.speedx,this.prices);

    }

   favCar()
   {
       return "ferrari";
   }


   static mulNum(a,b)
   {
       return a*b;
   }

}


//first class obj

const sp=new Car("suzuki",200);
sp.caller(100);
console.log("adding all values : ",Car.addstaticFunc(10,20,30));


//second class obj

const ssp=new vehicle("suzuki",200,1000);
console.log(ssp.favCar());
console.log(vehicle.mulNum(11,11));