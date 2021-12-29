
console.log("tut17 is on");

//javascript makes interaction possible 




document.getElementById('h1di').addEventListener("click",function(e)
                                                           {
                                                               console.log('you have clicked on ssp1');
                                                               console.log(e);
                                                               console.log(e.target.id);
                                                               console.log(e.target)
                                                           });


document.getElementById('pdi').addEventListener('click',

function ()
{
    console.log("going on link");
    location.href="//google.com";

}) ;                                                       


console.log('..................................target..............................................')

let ex=document.getElementById('pdi2');
document.getElementById('pdi2').addEventListener('click',

function (e)
{
    console.log('..........hiiii....................')
   let vari=e.target;
  // let varix=e.target.value;
  console.log(e);
   let variclass=e.target.className;
   let variId=e.target.id ;
   let variList=e.target.classList;
   console.log(vari);
  // console.log(varix);
   console.log(variclass);
   console.log(variId);
   ex.style.backgroundColor="yellow";
   ex.style.color="red";
   console.log(variList);

   //////////////////////////////////////
   let cx=e.offsetX;
   let cy=e.offsetY;  
   //element ke respect mein kitni door clickk kiya

   //////////////////////////////////////////////


   console.log(cx,cy);
}) ;                                                       


document.getElementById('sp1').addEventListener("mouseover",function(e)
                                                           {
                                                               console.log('you have mouseovered over on sp1 span');
                                                               console.log(e);
                                                               console.log(e.target.id)
                                                           });




console.log('....................................................................');


let x=document.getElementById('sp1');
console.log(x.value);
console.log(x.id);


console.log('....................................................................');