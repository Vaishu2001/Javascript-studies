const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
console.log(randomNumber);
if(randomNumber>0.7)
{
    
    alert("random number exceeding 0.7 ");
}
let arr=[1,2,3,4,5,6];
for(let i=arr.length;i>0;i--)
{
    console.log(arr[i]);
}

for(const ele of arr)
{
    console.log(ele);
}
const anotherNumber = Math.random();
if(randomNumber && anotherNumber >0.7 || randomNumber<0.2||anotherNumber<0.2)
{
    console.log(randomNumber);
    console.log(anotherNumber)
    alert("success!!!");
}
