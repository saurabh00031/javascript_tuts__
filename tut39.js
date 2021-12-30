//Promise

//Resolve
//reject
//pending


/*

function func1()
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(() => {
            const error=true;

            if(!error)
            {
            console.log("your promise has been resolved");
            resolve();
            }
            else
            {
            console.log("your promise has not been resolved");
            reject("sorry not fulfilled case ");
            }

        }, 2000)
        
    })
}


func1().then(function()
{
    console.log("thanks for resolving");
}).catch(function(error)
{
    console.log("very bad bro:reason-> "+error);
})

*/




///////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("tutorial 37 is running")

//Pretend that this response is coming from the server

const students=[

    {name:"sp",sub:"js"},
    {name:"ssp",sub:"cpp"},
]



function enrolls(student)
{
  return new Promise(function(resolve,reject)
  {
    setTimeout(function()
    {
        students.push(student);
        const error=false;
        console.log("student is enrolled");
        if(!error)
        {
            resolve();
        }
        else{
            reject("error");
        }
       

    },5000);

     
});

}





function gets()
{
    setTimeout(function()
    {
        let str="";
        students.forEach(function(student)
        {
            str+=`<li>${student.name}</li>`
            document.getElementById('students').innerHTML=str;
        });
     
    },1000)
     
 

}


let student={name:"saurabh00031",sub:"python"};


enrolls(student).then(function()
{
    gets();
}).catch(function(error)
{
    console.log("issue"+error);
});

























//////////////////////////////////////////////////////////////////////////////////////////////////////////////