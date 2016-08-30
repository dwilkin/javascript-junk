var correct = 0;
var answer = "";
var Q = [];
Q[1] = "What question is this?";
Q[2] = "What question is this?";
Q[3] = "What question is this?";
Q[4] = "What question is this?";
Q[5] = "What question is this?";

var A = [];
A[1] = "1";
A[2] = "2";
A[3] = "3";
A[4] = "4";
A[5] = "5";

for (i = 1; i < 6; i++) {
var answer = prompt(Q[i]);
if (answer === A[i]) {
  alert("Correct!");
  correct++;
} else {
  alert("Sorry, that's incorrect!");
}
}
  
if (correct === 5) {
  alert("You got a gold medal with 5 right!");
} else if (correct < 5 && correct > 2) {
  alert("You got a silver medal with " + correct + " right!");
} else if (correct === 1 || correct === 2) {
  alert("You got a bronze medal with " + correct + " right!");
} else {
  alert("Sorry, you didn't get any answers right!");
}
