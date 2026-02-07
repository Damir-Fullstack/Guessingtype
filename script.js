const f = document.getElementById("fTyDi");
const s = document.getElementById("sTyDi");
const t = document.getElementById("tTyDi");
const fin = document.getElementById("gt");
/*auto div*/
f.innerHTML = "1st type";
s.innerHTML = "2nd type";
t.innerHTML = "3rd type";
fin.innerHTML = "No Result";
function error() {
  fin.innerHTML = "Error, please wait a second and check all types";
  setTimeout(() => {
    fin.innerHTML = "No Result";
  }, 1000);
};
/*other*/
let a = "";
let b = "";
let c = "";
let workCode = "000";
let parts = workCode.split("");
let et = "1st type is q 2nd type is q And 3rd type is q";
function isBoolean(arg) {
  return (arg === true)||(arg === false);
};
function isString(arg) {
  return String(arg) === arg;
};
function isNoType(arg) {
  return arg === "";
};
function isNumber(arg) {
  return (isBoolean(arg) === false)&&(isString(arg) === false)&&(isNoType(arg) === false);
};
function type(arg) {
  if(isBoolean(arg)) {
    arg = "It's Boolean";
  } else if(isString(arg)) {
    arg = "It's String";
  } else if(isNumber(arg)){
    arg = "It's Number";
  } else if(isNoType(arg) === true) {
    arg = "";
  }
  return arg;
};
function changeFTy() {
  if(a === "String") {
    a = 2;
    f.innerHTML = "Number";
  } else if(a === 2) {
    a = true;
    f.innerHTML = "Boolean";
  } else if((a === true)||(a === "")) {
    a = "String";
    f.innerHTML = a;
  }
};
function changeSTy() {
  if(b === "String") {
    b = 2;
    s.innerHTML = "Number";
  } else if(b === 2) {
    b = true;
    s.innerHTML = "Boolean";
  } else if((b === true)||(b === "")) {
    b = "String";
    s.innerHTML = b;
  }
};
function changeTTy() {
  if(c === "String") {
    c = 2;
    t.innerHTML = "Number";
  } else if(c === 2) {
    c = true;
    t.innerHTML = "Boolean";
  } else if((c === true)||(c === "")) {
    c = "String";
    t.innerHTML = c;
  }
};
function work() {
  const workVerA = type(a);
  const workVerB = type(b);
  const workVerC = type(c);
  if(isNoType(workVerA)) {
    parts[0] = "0";
  } else if(isBoolean(workVerA)) {
    parts[0] = "b";
  } else if(isString(workVerA)) {
    parts[0] = "s";
  } else if(isNumber(workVerA)) {
    parts[0] = "n";
  }
  if(isNoType(workVerB)) {
    parts[1] = "0";
  } else if(isBoolean(workVerB)) {
    parts[1] = "b";
  } else if(isString(workVerB)) {
    parts[1] = "s";
  } else if(isNumber(workVerB)) {
    parts[1] = "n";
  }
  if(isNoType(workVerC)) {
    parts[2] = "0";
  } else if(isBoolean(workVerC)) {
    parts[2] = "b";
  } else if(isString(workVerC)) {
    parts[2] = "s";
  } else if(isNumber(workVerC) {
    parts[2] = "n";
  }
  workCode = parts[0] + parts[1] + parts[2];
}
function guess() {
  if(workCode.includes("0")) {
    error()
  }
  let pg = et.split("q");
  if(parts[0] === "b") {
    pg[0] = pg[0] + "Boolean."
  } else if(parts[0] === "s") {
    pg[0] = pg[0] + "String."
  } else if(parts[0] === "n") {
    pg[0] = pg[0] + "Number";
  }
  if(parts[1] === "b") {
    pg[1] = pg[1] + "Boolean."
  } else if(parts[1] === "s") {
    pg[1] = pg[1] + "String."
  } else if(parts[1] === "n") {
    pg[1] = pg[1] + "Number";
  }
  if(parts[2] === "b") {
    pg[2] = pg[2] + "Boolean."
  } else if(parts[2] === "s") {
    pg[2] = pg[2] + "String."
  } else if(parts[2] === "n") {
    pg[2] = pg[2] + "Number";
  }
  et = pg[0] + pg[1] + pg[2];
  fin.innerHTML = et;
};
