const defaultResult=0;
let currentResult=defaultResult;
currentResult+=10;
//template literals
calculationOutput=`${currentResult}+'2*3/10+0'`;
let errorMessage="An error\n"+
                  "has occured!!"
outputResult(currentResult,errorMessage);