class Course  {
constructor(title,len,price){
  this.title =title;
  this.length =len;
  this.price = price;

}
get priceDetalis()
{
    return `$ ${this.price}`
}
set priceDetalis(value)
{
    if(value<=0){
        throw 'invalid price is choosed';
    }
    this.price = value;//method name and property should not be same 
}

LengthOrPrice()
{
    console.log("I get ",this.length,"for the ",this.price,"Rs");
}
displayCourseList()
{
    console.log("Welcome to "+this.title+"  course");
}

};

class PracticalCourse extends Course{
numOfExercises = 20;

};
class TheoreticalCourse extends Course{
    constructor(title,length,price,duration)
    {
        super(title,length,price);//not creating the properties but just assigning the values
        this.duaration = "3 mon"
    }
publish(){
    console.log("Hey there.Welcome to",this.title,this.length,"of",this.duaration);
} 


};
const course1 = new Course("Javascript",10,500);
//course1.priceDetalis = -300;
const course2 = new Course("Python",6,600);
console.log(course1);
console.log(course2);
course1.LengthOrPrice();
course1.displayCourseList();
course2.LengthOrPrice();
course2.displayCourseList();
const course3 = new TheoreticalCourse("html",4,300);
course3.publish();
course3.LengthOrPrice();
console.log(course3);
//course3.priceDetalis=-34;