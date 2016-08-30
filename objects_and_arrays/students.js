var students = [ 
  { 
    name: 'Dave',
    track: 'Front End Development',
    achievements: 158,
    points: 14730
  },
  {
    name: 'Jody',
    track: 'iOS Development with Swift',
    achievements: '175',
    points: '16375'
  },
  {
    name: 'Jordan',
    track: 'PHP Development',
    achievements: '55',
    points: '2025'
  },
  {
    name: 'John',
    track: 'Learn WordPress',
    achievements: '40',
    points: '1950'
  },
  {
    name: 'Trish',
    track: 'Rails Development',
    achievements: '5',
    points: '350'
  }
];

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
