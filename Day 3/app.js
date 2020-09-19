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
 function add(){
    const enteredInput = getUserInput();
    
    const initialResult = currentResult;
    currentResult += enteredInput;
    //alert(++currentResult);
    //creating an object
    const logEntry = {
        operation : "ADD",
        prevRes  : initialResult,
        outPut   :currentResult ,
        number :enteredInput,
    };
    arr.push(logEntry);
    console.log(logEntry.number);
    console.log(arr);
    getResult(initialResult,enteredInput,'+');
}
function subtract(){
    const enteredInput = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredInput;
    getResult(initialResult,enteredInput,'-');
}
function multiply(){
    const enteredInput = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredInput;
    getResult(initialResult,enteredInput,'*');
}
function divide(){
    const enteredInput = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredInput;
    getResult(initialResult,enteredInput,'/');
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);