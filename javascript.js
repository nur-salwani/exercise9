var people = [
    {name: ['Alyssa', 'P.', 'Hacker'], age: 26},
    {name: ['Ben', 'L.','Bitdiddle'], age: 34},
    {name: ['Eva','Lu', 'Ator'], age: 40},
    {name: ['Lem', 'E.','Tweakit'], age: 45},
    {name: ['Louis','M.','Reasoner'], age: 21},
    {name: ['Shahan','Haig','Krakirian'], age: 26}
];

function fullNamelist() {

  var text = "";
  var i;

  for (i = 0; i < people.length ; i++) {

    text += i+1 + ")" +people[i].name + "<br>";
}

  document.getElementById("solution").innerHTML = text;

}

let btn = document.getElementById("all");
btn.addEventListener("click", fullNamelist);

function getAgeFunction() {

      if (document.getElementById("name-input").value == "Alyssa") {

        document.getElementById("solution1"). innerHTML = 26;
      }

      if (document.getElementById("name-input").value == "Ben") {

        document.getElementById("solution1"). innerHTML = 34;
      }

      if (document.getElementById("name-input").value == "Eva") {

        document.getElementById("solution1"). innerHTML = 40;
      }

      if (document.getElementById("name-input").value == "Lem") {

        document.getElementById("solution1"). innerHTML = 45;
      }

      if (document.getElementById("name-input").value == "Louis") {

        document.getElementById("solution1"). innerHTML = 21;
      }

      if (document.getElementById("name-input").value == "Shahan") {

        document.getElementById("solution1"). innerHTML = 26;
      }
}

let bton = document.getElementById("age-button");
bton.addEventListener("click", getAgeFunction);
