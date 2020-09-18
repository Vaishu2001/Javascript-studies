const task3Element = document.getElementById('task-3');

function doFirst(){
    alert("Hey there!")
}
function doSecond(name)
{
    alert(`Hello ${name}`);
}
doFirst();
doSecond("Vaishnavi");

//adding event listener
 task3Element.addEventListener("click",doFirst);

 function Concatenate(First,Second,Third)
 {
     const result = First + Second + Third;
     return result;
 }
  alert("This is Your" + Concatenate(" Second "," Day of","Javascript"));