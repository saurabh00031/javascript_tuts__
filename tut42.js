

////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("tutorial 42 is runnnings")
console.log("........................")
let btn1=document.getElementById('btn1');
let content=document.getElementById('content');


//function to use Fetch API


function gets()
{
    console.log("started get data");

    url="https://api.github.com/users";

    fetch(url).then((response)=>{
        console.log("inside first then");
        return response.json();
    }).then((data)=>{
        console.log("inside second then");
        console.log(data);
    })

}

console.log("before running get data");
gets();
console.log("after running get data");


/////////////////////////////////////////////////////////////////////////////////////////////////////


//function to post data


function posts()
{
    console.log("started post data");

    url="http://dummy.restapiexample.com/api/v1/create";
    data=`{"name":"test34","salary":"123","age":"23"}`;

params={

 method : "post",

 headers:
 {
    "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8'
 },

 body:JSON.stringify(data)

}


    fetch(url,params).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })

}


posts();


/////////////////////////////////////////////////////////////////////////////////////////////////////