
console.log(" tutorial 51 is running ");
console.log("........iterators in js.........................");



function company(values)
{

    let index=0;

    //returning object

    return {
        next : function()
        {
          if(index < values.length)
           {
              return {
                value: values[index++],
                done :false
               }
              
           }
           else{
                return{
               done:true
                }
           }
        }
    }
}




const arr=['google','microsoft','flipkart','amazon'];
//company(arr);


//using iterators in js  //


let it=company(arr);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


it=company(arr);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


it=company(arr);
console.log(it.next().done);
console.log(it.next().done);
console.log(it.next().done);
console.log(it.next().done);
console.log(it.next().done);

