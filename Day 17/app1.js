//working with classes
class Person{
    //creating constructor method
    constructor(email,age)
    {
      this.email =email;
      this.age =age;
    }
    login(){
        console.log(this.email+"just logged in");
    }
};
const person1=new Person("xyz@gmail.com","20");
const person2=new Person("abc@gmail.com","30");
console.log(person1);
console.log(person1.email);
person2.login();
//----------------------------
//SETTERS AND GETTERS
const person={
  firstName :"Mosh",
  lastName :"Hamedani",
  get fullName(){
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value)
  {
    const parts=value.split(" ");
    this.firstName =parts[0];
    this.lastName=parts[1];

  }

  };

person.fullName= "Vaishu shetty";//can use method as a property n can set different values
console.log(person)
