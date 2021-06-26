const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
console.log("randomNumber: ", randomNumber)
if (randomNumber > 0.7) {
  alert("The number is greater than 0.7");  
}

let array = [1,2,3,4,5]

for(let i=4; i>=0; i--)
console.log("Method 1: ", array[i]);

for(const el of array)
console.log("Method 2: ", el);

const randomNumber2 = Math.random();
console.log("randomNumber2: ", randomNumber2)
if(randomNumber>0.7 && randomNumber2>0.7 || randomNumber<=0.2 || randomNumber2<=0.2)
alert("Another Alert, lol");