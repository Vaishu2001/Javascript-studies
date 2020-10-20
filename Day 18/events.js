const button =document.querySelector('button');
document.addEventListener('click',(event)=>{
    event.target.disabled = true;
    console.log(event.target);

});