//creating arrays in different ways!
const firstArray = [1,2,4];
//const secArray = new Array(1,2,3);
const secArray = Array(1,2,3);//if we pass single element then it is treated as length of array!
console.log(secArray);
const thirdArray = Array.from("hi!");
console.log(thirdArray);
const fourthArray = [30,'max',{abc:"cd"}];
console.log(fourthArray);
console.log("hello thre",firstArray);
//array methods
const fifthArray = ["apple","orange","banana"];
console.log(fifthArray);
fifthArray.push("strawberry");
console.log(fifthArray);
fifthArray.unshift("cherry");//adding at the beginning of array
console.log(fifthArray);
fifthArray.pop();
console.log(fifthArray);
fifthArray.shift();//removing at the beginning of array
console.log(fifthArray);
//splice method 
//3 parameters  :- indexposition,no of elements to del from indexpos(optional),value(optional)
fifthArray.splice(1,0,"mango");
console.log(fifthArray);
fifthArray.splice(1,2);
console.log(fifthArray);
//slice method
//makes the copy of original array
const sixthArray = [1,2,3,4,5,6];
console.log(sixthArray);
let copyArray = sixthArray;
copyArray = copyArray.slice(0,3);// [1, 2, 3]
console.log(copyArray);
//concat method
const sevArray = sixthArray.concat([7,8,9]);
console.log(sevArray);// [1, 2, 3, 4, 5, 6, 7, 8, 9]
//indexof mthd
const index = sevArray.indexOf(3);
console.log(index);
//includes method
console.log(sevArray.includes(5));
//forEach method
const prices =[10.9, 5.99,3.99,6.67];
const tax =0.19;
const taxAdjustedPrices = [];
prices.forEach((price,idx,prices)=>{
    const priceObj  = {index:idx,taxAdjustedPrices :price*(1+tax)};
    taxAdjustedPrices.push(priceObj);
});
console.log(taxAdjustedPrices);//can use forloop also
//reduce method
const sum=prices.reduce((preValue,curValue,curIndex,prices)=>{
    return preValue+curValue;
},0);//single number from the array
console.log(sum);
//string methods
//split and join
const names= 'Max;manuel;mickel';
const splitNames = names.split(";");
console.log(splitNames);
const joinNames = splitNames.join("/");
console.log(joinNames);
