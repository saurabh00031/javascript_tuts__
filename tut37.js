

///////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("tutorial 37 is running")

//Pretend that this response is coming from the server

const students=[

    {name:"sp",sub:"js"},
    {name:"ssp",sub:"cpp"},
]



function enrolls(student,callback)
{
  
    setTimeout(function()
    {
        students.push(student);
        console.log("student is enrolled");
        callback();

    },3000)
     
 


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
enrolls(student,gets);

//ets();


























//////////////////////////////////////////////////////////////////////////////////////////////////////////////