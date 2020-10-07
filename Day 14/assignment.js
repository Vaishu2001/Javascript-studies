const arr = [1,2,3,4,5,6];
const arrFilter = arr.filter((number,index,arr)=>{
    return number>5;
    
});
console.log(arrFilter);
const max =Math.max(1,2,3,4,5,6);
console.log(max);
//mapping
const arrMap = arr.map(val =>({num:val}));
console.log(arrMap);
 //reduce method
 const product =arr.reduce((preValue,curValue,curIndex,arr)=>{
    return preValue*curValue;
 },1);//starts with prevalue as 1
 console.log(product); 
 //findmax
 function findsmthg(...numbers)
 {
     let curMax =0;
     let curMin = 0;
     for(const number of numbers)
     {
     if(number>curMax)
     {
         curMax =number; 
     }
     else if(curMin >number)
     {
         curMin =number; 
     }
    }
    console.log(curMin,curMax);
 }
 findsmthg(1,2,3,4,5,6);

