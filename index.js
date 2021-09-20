var score = 0;
var readlineSync = require('readline-sync'); //import readline to ask question

var score = 0;
var question = "What's your name? "
var userName = readlineSync.question(question);
var welcomeMessage = "Welcome " + userName + " to DO YOU KNOW ABOUT Savita?" 

console.log(welcomeMessage);
console.log("\nLet's start!!")
console.log("\n-----------------------")


function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer){
    console.log("Right!!!");
    score+=1;

  } else{
    console.log("Wrong :(");
  }

  console.log("Current score: " + score);
  console.log("----------------------------------\n")

}

var questions = [{
  question: "What is my favourite cartoon character? ",
  answer: "nobita"
}, {
  question: "What's my hometown? ",
  answer: "pilani"
}, {
  question: "Do I like to play either indoor games or outdoor? ",
  answer: "outdoor"
}, {
  question: "Do I like beetroot? ",
  answer: "no"
}, {
  question: "Am I fully vaccinated? ",
  answer: "no"
}]

for (var i = 0; i < questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("YAY! You SCORED: " + score)
