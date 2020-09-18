const defaultResult = 0;
let currentResult = defaultResult;
let name=2;
function add()
{ 
    //shadowed variable
    //let name=10;
    currentResult += currentResult + userInput.value;
    outputResult(currentResult, "");
}
 addBtn.addEventListener("click" , add);
 