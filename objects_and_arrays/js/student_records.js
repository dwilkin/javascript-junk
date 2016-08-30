function format(students) {
  var message = "";
  for (var i = 0; i < students.length; i++) {
    for (trait in students[i]) {
      if (trait === "name") {
        message += "<h2>Student: " + students[i].name + "</h2>";
      } else {
        message += "<p class='trait'>" + trait + ": " + students[i][trait] + "</p>";
      }
    }
  }
  return(message);
}

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

print(format(students));
