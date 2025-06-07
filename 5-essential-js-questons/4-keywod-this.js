// 4 the "this" keyword

const person = {
  name: "Brian",
  sayName: function () {
    console.log(this.name);
  },
};

person.sayName();
// the "this" keyword takes on the meaning of whoever is calling your function
// the this keyword looks at who is calling the function
// with person.sayNam() the this keyword becomes the person
// when using the local variable, then it is as if the global context is the one calling the function, and the name variable does not exist in the global context
const localSayName = person.sayName;
localSayName();
// this specifically tells JavaScript that I want you to bind to the person object and not the global object
const boundSayName = person.sayName.bind(person);
boundSayName();
// with arrow functions you do not need to use the bind method
const boundSayNameArrow = () => person.sayName();
boundSayNameArrow();
