//This keyword
const person={
  firstName :"Vaishnavi",
  lastName :"Shetty",
  fullName :function()
  {
    console.log(this.firstName+this.lastName);//This refers to value of person object
  }
};
//person.fullName();
//bind method
const person1={
  firstName : "Vaishnavi",
  lastName :"Shetty",
  showFullName:function()
  {
    const fullName = this.firstName +this.lastName;
    return fullName;
  }
};
function greetPerson(cat,dog){
  console.log("Hello "+this.showFullName())
console.log(`do you love ${cat} and ${dog}?` )}



const person2 = greetPerson.bind(person1);//The copy of greetPerson is assigned to person2 and this keyword will refer to person1 object
//person2("whity","Blacky");
//call and apply method
greetPerson.call(person1,"whity","blacky");
greetPerson.apply(person1,["whity","blacky"]);//should pass arguments inside array
