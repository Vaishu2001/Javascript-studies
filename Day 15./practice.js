//working with object:-
//creating a person object
let userEnteredValue = 'level';
let person = {
    'first name':"Boxy",
    '?':"question mark",
    name :["manu","max","manuel"],
    age :12,
    color :"white",
    greet :function ()
    {
      alert("Hi there!");
    },
    1.5 :"hello",
    [userEnteredValue] :'smthg',//key is the value inside userEnteredValue
    

};

//person.greet();
person.age = 15;
delete person.age;
//person.age = 10;
person.isAdmin = true;
console.log(person);
//accessing first name 
console.log(person['first name']);
console.log(person['?']);
//accessing style properties
const movieList = document.getElementById('movie-list');
//movieList.style.backgroundColor
movieList.style['background-color']="blue";
movieList.style.display = "block";
//accessing number keys
console.log(person[1.5]);
console.log(person['level']);