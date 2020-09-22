//My code
const  defaultResult = 0;
let currentResult=defaultResult;
//creating an empty array
let arr=[];
 //to convert int to string use toString() method
 function getUserInput(){
     return  parseInt(userInput.value);
 }
 function getResult(resBefCalculation,input,operator)
 {
    const caldescription = `${resBefCalculation} ${operator} ${input}`;
    outputResult(currentResult ,caldescription);
 }
 function writeToLog(operation,prevResult,newResult,operationValue)
 {
 //creating an object
   const logEntry = {
    operation : operation,
    prevRes  : prevResult,
    outPut   :newResult ,
    number :operationValue,
};
arr.push(logEntry);
console.log(logEntry);

 }
 function calculateResult(calculationType)
 {
    const enteredInput = getUserInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType=="ADD")
    {  
        currentResult += enteredInput;
        mathOperator='+';

    } 
    else if(calculationType=="SUBTRACT"){
        currentResult -= enteredInput;
        mathOperator='-';
    }
    else if(calculationType=="MULTIPLY"){
        currentResult *= enteredInput;
        mathOperator='*';
    }
    else {
        currentResult /= enteredInput;
        mathOperator='/';
    }
    getResult(initialResult,enteredInput,mathOperator);
    writeToLog(calculationType,initialResult,currentResult,enteredInput);

 }
 function add(){
    calculateResult("ADD");
    //alert(++currentResult);
    //console.log(arr);
    
}
function subtract(){
    calculateResult("SUBTRACT");
}
function multiply(){
    calculateResult("MULTIPLY");
}
function divide(){
    calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);