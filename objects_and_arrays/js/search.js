var quit = false;
var searchterm = "";

function search(list, term) {
  var message = "";
  for (var i = 0; i < list.length; i++) {
    if (list[i].name === term) {
      for (trait in list[i]) {
        if (trait === "name") {
          message += "<h2>Student: " + list[i].name + "</h2>";
        } else {
          message += "<p class='trait'>" + trait + ": " + list[i][trait] + "</p>";
        }
      }
    }
  }
  return(message);
}

while (searchterm !== 'QUIT') {
  searchterm = prompt("Search student records:");
  document.write(search(students, searchterm));
}
