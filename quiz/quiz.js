var questions = [
  ["What is the first letter in the alphabet?", "A"],
  ["What is the capital of Oklahoma?", "OKLAHOMA CITY"],
  ["Jimmy cracked corn.  Do you care?", "NO"],
  ["How much chuck would a wood chuck chuck?", "BANANA"]
];
var answer = "";
var right = "<h2>You got these questions correct:</h2><ol>";
var wrong = "</ol><h2>You got these questions incorrect:</h2><ol>";
var message = "";
var correct = 0;
var tally = [];

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i++) {
  answer = prompt(questions[i][0]);
  if (answer.toUpperCase() === questions[i][1]){
    correct++;
    tally.push(0);
  } else {
    tally.push(1);
  }
}

for (var i = 0; i < questions.length; i++) {
  if (tally[i] === 0) {
    right += "<li>" + questions[i][0] + "</li>";
  } else {
    wrong += "<li>" + questions[i][0] + "</li>";
  }
}

message = "<p>You got " + correct + " question(s) right.</p>" + right + wrong + "</ol>";

print(message);
