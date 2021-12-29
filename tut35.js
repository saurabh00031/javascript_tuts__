

//AJAX stands for Synchronous Javascript and XML

//AJAX is not programming langauage

//AJAX helps in fetching data asynchronously without interfering with existing page

//AJAX : no page reload

//Modern websites use JSON instead of XML for data transfer







//Why AJAX is imp


//better use experience
//saves network problem
//very interactive
//no page reload /no refresh



//AJAX uses XMLHttpRequest object to achieve all above
//Nowadays uses JSON instead of XML for data transfer
//data can be transformed in any format (not always http necessarily)


////////////////////////////////////////////////////////////////////////////////////////////////////////////

//GET request:-


let bt1=document.getElementById('btn1');

bt1.addEventListener('click',buttonClickHandler);


function buttonClickHandler()
{


/////////////////////////////////////////////////////////////////////////////////////////////



    console.log("you have clicked fetch button");
    const xhr = new XMLHttpRequest();

   

/////////////////////////////////////////////////////////////////////////////////////////////

/*

    //GET request

   //open the projects
   xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);


   

  

///

     xhr.onreadystatechange=function()
     {
         console.log("ready state is ",xhr.readyState);
     }

////


     xhr.onload=function()
     {
         if(this.status===200)
         {
         console.log(this.responseText);
         }
         else
         {
         console.log("sorry some error occuered");  // if txt file not present
         }
     }


     xhr.send();

  console.log("get request done");


  */

///////////////////////////////////////////////////////////////////////////////////////////////


  //POST request

  xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
  xhr.getResponseHeader('Content-type','application/json');

  xhr.onprogress=function()
  {
   console.log("on progress");
   }

  
   xhr.onload=function()
   {
       if(this.status===200)
       {
       console.log(this.responseText);
       }
       else
       {
       console.log("sorry some error occuered");  // if txt file not present
       }
   }



param=`{"name":"tests4","salary":"1236","age":"523"}`;
xhr.send(param);

////////////////////////////////////////////////////////////////////////////////////////////////////


















}



let bt2=document.getElementById('btn2');

bt2.addEventListener('click',popHandler);


function popHandler()
{

    console.log("you have clicked pop button");
    const xhrr = new XMLHttpRequest();

   
    
    xhrr.open('GET','https://gorest.co.in/public/v1/posts',true);
    
    xhrr.onload=function()
    {
        if(this.status===200)
        {
         let obj=JSON.parse(this.responseText);
         console.log(obj);
         
         let lists=document.getElementById('list');

          str="";

         for(let key in obj)
         {
             str+=`<li>${obj[key].body}</li>`;
         }
         lists.innerHTML=str;
        }
        else
        {
        console.log("sorry some error occurred");  // if txt file not present
        }
    }




  xhrr.send();



}