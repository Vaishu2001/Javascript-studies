//My code
const defaultResult = 0;
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
 function add(){
    const enteredInput = getUserInput();
    
    const initialResult = currentResult;
    currentResult += enteredInput;
    //alert(++currentResult);
    //console.log(arr);
    getResult(initialResult,enteredInput,'+');
    writeToLog("ADD",initialResult,currentResult,enteredInput);
}
function subtract(){
    const enteredInput = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredInput;
    getResult(initialResult,enteredInput,'-');
    writeToLog("SUBTRACT",initialResult,currentResult,enteredInput);
}
function multiply(){
    const enteredInput = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredInput;
    getResult(initialResult,enteredInput,'*');
    writeToLog("MULTIPLY",initialResult,currentResult,enteredInput);
}
function divide(){
    const enteredInput = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredInput;
    getResult(initialResult,enteredInput,'/');
    writeToLog("DIVIDE",initialResult,currentResult,enteredInput);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);