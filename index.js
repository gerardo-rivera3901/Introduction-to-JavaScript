/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18
console.log(votingAge >= 18)

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let fruit1 = "Apple";
let isTasty = "Yum";

if(isTasty === "Yuk"){
  fruit1 = "Delicious";
}else {
  fruit1 = "Gross";
}

console.log(fruit1);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let a = parseInt("1999")
console.log(a)

//Task d: Write a function to multiply a*b 

const multiplyArrow = (a, b) => {
    return a * b;
  }
console.log(multiplyArrow(4, 5))

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

const dogCalc = (myAge, dogYears) => {
    return myAge * dogYears;
  }
  console.log(dogCalc(19, 7))

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function hungryDog(weight, age){
    if(age >= 1 && weight <= 5){
        return weight * 0.05
    } else if(age >= 1 && weight >= 6 && weight <= 10){
    return weight * 0.04
    } else if(age >= 1 && weight >= 11 && weight <= 15){
        return weight * 0.03
    } else if(age >= 1 && weight > 15){
        return weight * 0.02
    } else if(age >= 0.166667 && age <= 0.333333){
        return weight * 0.10
    } else if(age >= 0.333333 && age <= 0.583333){
        return weight * 0.05
    } else if(age >= 0.583333 && age <= 1){
        return weight * 0.04
    }
}

console.log(hungryDog(15, 1));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

var myChoice=prompt("Choose rock, paper, or scissors");
var cpu=Math.random();
if(cpu < 0.34) {
  cpu = "rock";
} else if(cpu <= 0.67){
  cpu = "paper";
} else {
  cpu = "scissors";
}

var compare = function(choice1, choice2){
  if(choice1 === choice2){
  return "It's a tie!"
  }
  if(choice1 === "rock"){
    if(choice2 === "scissors") {
        return "You win! CPU chose Scissors."
    } else {
        return "You lose! CPU chose Paper."
    }
  }
  if(choice1 === "paper"){
    if(choice2 === "rock"){
        return "You win! CPU chose Rock."
    } else {
        if(choice2 === "scissors"){
            return "You lose! CPU chose Scissors."
        }
    }
  }
  if (choice1 === "scissors"){
      if(choice2 === "paper"){
          return "You win! CPU chose paper."
      }
      if(choice2 === "rock"){
          return "You lose! CPU chose rock."
      }
  }
}
compare(myChoice, cpu)
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function km2m(kilometers){
    return kilometers * 0.62137
}
km2m(2)



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function ft2cm(feet){
    return feet / 0.032808
}
ft2cm(2)



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  

var newnum = -1;
function annoyingSong(bottles) {
  for(let i = 99; i >= 1; i--) {
    console.log(i + " bottles of soda on the wall, " + i + " bottles of soda, take one down pass it around. " + (i+newnum) + " bottles of soda on the wall")
  } 
}
annoyingSong(99)



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be As
//80s should be Bs 
//70s should be Cs 
//60s should be Ds
//and anything below 60 should be Fs
  
function grades(number) {
    if(number >= 90  && number <= 100){
        return "A"
    } else if(number >= 80 && number < 90){
        return "B"
    } else if(number >= 70 && number < 80){
        return "C"
    } else if(number >= 60 && number < 70){
        return "D"
    } else if(number < 60){
        return "F"
    } else {
        return "Please use a number between 0 and 100"
    }
}
  
console.log(grades(100));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





