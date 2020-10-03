//Difference bw let and var
let name="manuel";
//let name="mani";
var sName="namya";
var sName ="kavya";//just like Assigning new value
console.log(sName);//kavya
if (name =="manuel"){
    let age=18;
    console.log(age);

}
//let scope only inside {}
//console.log(age);

if (sName =="kavya"){
    var age=18;
    console.log(age);

}
console.log(age);
//so var have scope outside if stmt
//But
function printName()
{
    var roll=3;
    console.log(roll);
}
printName();
//console.log(roll);//error
