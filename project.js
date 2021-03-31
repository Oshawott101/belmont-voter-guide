var precinct = sessionStorage.getItem("precinct");
var executed = sessionStorage.getItem("executed");
var setPrecinct = function(button_id) {
  if (executed === null) {
    executed = false;
  }
  if (executed !== true) {
    executed = true;
    sessionStorage.removeItem("precinct");
    if (button_id == "precinct1") {
      precinct = 1;
    }
    else if (button_id == "precinct2") {
      precinct = 2;
    }
    else if (button_id == "precinct3") {
      precinct = 3;
    }
    else if (button_id == "precinct4") {
      precinct = 4;
    }
    else if (button_id == "precinct5") {
      precinct = 5;
    }
    else if (button_id == "precinct6") {
      precinct = 6;
    }
    else if (button_id == "precinct7") {
      precinct = 7;
    }
    else if (button_id == "precinct8") {
      precinct = 8;
    }
    else if (button_id == "precinct0") {
      precinct = 0;
      executed = false;
    }
    else {
      alert("That input did not work. Please try again.");
    }
    sessionStorage.setItem("precinct", precinct);
    sessionStorage.setItem("executed", executed);
  }
};
function confirmvalues() {
  document.getElementById("hi").innerHTML = "Precinct: " + precinct + " Executed: " + executed;
}
function hasPrecinct() {
  if(precinct !== null) {
    document.getElementById("home").href = "home.html";
  }
  if(executed !== true && precinct < 1) {
    document.getElementById("precinct0").style.display = "none";
  }
}
/*function precinctQuiz() {
  selected = false;
  while (!selected) {
    precinct = prompt("Which Precinct are you a part of?");
    selected = true;
    if (typeof(precinct) == "string") {
      precinct = precinct.toLowerCase();
    }
    if (precinct == 1 || precinct == "one") {
      precinct = 1;
      document.getElementById("p1-8").style.display = "inline";
      sessionStorage.setItem("selected", true);
    }
    else if (precinct == 2 || precinct == "two") {
      precinct = 2;
      document.getElementById("p1-8").style.display = "inline";
      sessionStorage.setItem("selected", true);
    }
    else if (precinct == 3 || precinct == "three") {
      precinct = 3;
      document.getElementById("p1-8").style.display = "inline";
      sessionStorage.setItem("selected", true);
    }
    else if (precinct == 4 || precinct == "four") {
      precinct = 4;
      document.getElementById("p1-8").style.display = "inline";
      sessionStorage.setItem("selected", true);
    }
    else if (precinct == 5 || precinct == "five") {
      precinct = 5;
      document.getElementById("p1-8").style.display = "inline";
      sessionStorage.setItem("selected", true);
    }
    else if (precinct == 6 || precinct == "six") {
      precinct = 6;
      document.getElementById("p1-8").style.display = "inline";
      sessionStorage.setItem("selected", true);
    }
    else if (precinct == 7 || precinct == "seven") {
      precinct = 7;
      document.getElementById("p1-8").style.display = "inline";
      sessionStorage.setItem("selected", true);
    }
    else if (precinct == 8 || precinct == "eight") {
      precinct = 8;
      document.getElementById("p1-8").style.display = "inline";
      sessionStorage.setItem("selected", true);
    }
    else {
      alert("That input did not work. Please try again.");
      selected = false;
    }
    document.getElementById("p0").style.display = "none";
    sessionStorage.setItem("precinct", precinct);
  }
}*/
function isolatePrecinct() {
  if (precinct == 1) {
    document.getElementById("p1").style.display = "inline";
  }
  else if (precinct == 2) {
    document.getElementById("p2").style.display = "inline";
  }
  else if (precinct == 3) {
    document.getElementById("p3").style.display = "inline";
  }
  else if (precinct == 4) {
    document.getElementById("p4").style.display = "inline";
  }
  else if (precinct == 5) {
    document.getElementById("p5").style.display = "inline";
  }
  else if (precinct == 6) {
    document.getElementById("p6").style.display = "inline";
  }
  else if (precinct == 7) {
    document.getElementById("p7").style.display = "inline";
  }
  else if (precinct == 8) {
    document.getElementById("p8").style.display = "inline";
  }
  if (precinct == 1 || precinct == 2 || precinct == 8) {
    document.getElementById("empty_seat").style.display = "inline";
  }
}
function isolatep0() {
  if (precinct == 0) {
    document.getElementById("p0").style.display = "inline";
    document.getElementById("p1-8").style.display = "none";
  }
  else {
    document.getElementById("p1-8").style.display = "inline";
    document.getElementById("p0").style.display = "none";
  }
}