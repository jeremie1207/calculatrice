"use strict";

// input number

const one = document.querySelector(".one");
let ouput = document.querySelector("input");
ouput.value = "";

one.addEventListener("click", function (event) {
  ouput.value = ouput.value + "1";
});

const two = document.querySelector(".two");

two.addEventListener("click", function (event) {
  ouput.value = ouput.value + "2";
});

const three = document.querySelector(".three");

three.addEventListener("click", function (event) {
  ouput.value = ouput.value + "3";
});

const four = document.querySelector(".four");

four.addEventListener("click", function (event) {
  ouput.value = ouput.value + "4";
});

const five = document.querySelector(".five");

five.addEventListener("click", function (event) {
  ouput.value = ouput.value + "5";
});

const six = document.querySelector(".six");

six.addEventListener("click", function (event) {
  ouput.value = ouput.value + "6";
});
const seven = document.querySelector(".seven");

seven.addEventListener("click", function (event) {
  ouput.value = ouput.value + "7";
});
const eight = document.querySelector(".eight");

eight.addEventListener("click", function (event) {
  ouput.value = ouput.value + "8";
});
const nine = document.querySelector(".nine");

nine.addEventListener("click", function (event) {
  ouput.value = ouput.value + "9";
});

const zero = document.querySelector(".zero");

zero.addEventListener("click", function (event) {
  ouput.value = ouput.value + "0";
});

const point = document.querySelector(".point");

point.addEventListener("click", function (event) {
  if (!ouput.value.includes(".") && ouput.value.length != 0) {
    ouput.value = ouput.value + ".";
  } else {
    ouput.value = ouput.value;
  }
});

document.addEventListener("keypress", (event) => {
  if (event.key == 1) {
    ouput.value += "1";
  } else if (event.key == 2) {
    ouput.value += "2";
  } else if (event.key == 3) {
    ouput.value += "3";
  } else if (event.key == 4) {
    ouput.value += "4";
  } else if (event.key == 5) {
    ouput.value += "5";
  } else if (event.key == 6) {
    ouput.value += "6";
  } else if (event.key == 7) {
    ouput.value += "7";
  } else if (event.key == 8) {
    ouput.value += "8";
  } else if (event.key == 9) {
    ouput.value += "9";
  } else if (event.key == 0) {
    ouput.value += "0";
  } else if (event.key == ".") {
    if (!ouput.value.includes(".") && ouput.value.length != 0) {
      ouput.value = ouput.value + ".";
    } else {
      ouput.value = ouput.value;
    }
  } else if (event.key == "+") {
    ouput.value += "+";
  } else if (event.key == "-") {
    ouput.value += "-";
  } else if (event.key == "/") {
    ouput.value += "/";
  } else if (event.key == "*") {
    ouput.value += "*";
  } else if (event.key == "Enter") {
    if (ouput.value[0] == 0) {
      const Zero = ouput.value.replace("0", "");
      ouput.value = Zero;
    }
    if (ouput.value.length == 0) {
      alert("Veuillez entrer les données à calculer");
    } else {
      const answer = eval(ouput.value);

      ouput.value = String(answer);
    }
  }
});

// clear

const clearButton = document.querySelector(".AC");

clearButton.addEventListener("click", (event) => {
  ouput.value = "";
});

// operation

const addButton = document.querySelector(".add");

addButton.addEventListener("click", () => {
  ouput.value += "+";
});

document.querySelector(".soust").addEventListener("click", () => {
  ouput.value += "-";
});

document.querySelector(".mulp").addEventListener("click", () => {
  ouput.value += "*";
});

document.querySelector(".divide").addEventListener("click", () => {
  ouput.value += "/";
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", (event) => {
  if (ouput.value[0] == 0) {
    const Zero = ouput.value.replace("0", "");
    ouput.value = Zero;
  }
  if (ouput.value.length == 0) {
    alert("Veuillez entrer les données à calculer");
  } else {
    const answer = eval(ouput.value);

    ouput.value = String(answer);
  }
});
