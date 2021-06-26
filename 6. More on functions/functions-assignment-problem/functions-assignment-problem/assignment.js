// This is a format for functions wiht only one argument where no parantheses are required
const sayHello = (name = "Matt") => console.log("Hi " + name);
const sayHello2 = (greetings, name) => console.log(`${greetings} ${name}`);
const sayHello3 = () => console.log("Hi " + "Rishabh");
const sayHello4 = (name) => "Hi " + name;

const checkInput = (...args) =>
  args.length === 0 ? callBack() : "Nice arguments put!";

const callBack = () => "No args passed";

sayHello("Rishabh");
sayHello2("Hi", "Rishabh");
sayHello3();
console.log(sayHello4("Rishabh"));
sayHello();
console.log(checkInput(23));
