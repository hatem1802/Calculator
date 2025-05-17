let buttons = document.querySelectorAll("button");
let multiple = document.getElementById("multiple");
let divide = document.getElementById("divide");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let percent = document.getElementById("percent");
let ac = document.getElementById("ac");
let del = document.getElementById("del");
let equal = document.getElementById("equal");
let result = document.querySelector(".result");
let last = document.querySelector(".last");

let currentValue = "0";
let lastValue = "0";

plus.addEventListener("click", PLus);
minus.addEventListener("click", Minus);
multiple.addEventListener("click", Multiple);
divide.addEventListener("click", Divide);
document.addEventListener("click", insertValue);
ac.addEventListener("click", resetResult);
percent.addEventListener("click", Percent);
del.addEventListener("click", delLast);

function delLast() {
    currentValue = currentValue.slice(0, -1);
}
function insertValue(e) {
    if (/[0-9]|dot/.test(e.target.id)) {
        currentValue = currentValue + e.target.textContent;
    }
    result.textContent = +currentValue;
}
function resetResult() {
    currentValue = "0";
    lastValue = "0";
    result.textContent = currentValue;
    last.textContent = lastValue;
}
function PLus() {
    lastValue = +lastValue + +currentValue;
    currentValue = "0"
    last.textContent = lastValue;
    result.textContent = currentValue;
    equal.onclick = () => {
        currentValue = +currentValue + +lastValue;
        result.textContent = currentValue;
        lastValue = "0";
        last.textContent = lastValue;
    }
    return;
}
function Minus() {
    if (lastValue === "0") {
        lastValue = currentValue;
        last.textContent = lastValue;
        currentValue = "0";
    }else {
        lastValue = +lastValue - +currentValue;
        last.textContent = lastValue;
        currentValue = "0";
    }
    equal.onclick = () => {
        currentValue = +lastValue - +currentValue;
        result.textContent = currentValue;
        lastValue = "0";
        last.textContent = lastValue;
    }
}
function Multiple() {
    if (lastValue == 0) {
        lastValue = currentValue;
        last.textContent = lastValue;
        currentValue = "0";
        result.textContent = currentValue;
    } else {
        lastValue = lastValue * currentValue;
        currentValue = "0";
        last.textContent = lastValue;
        result.textContent = currentValue;
    }
    equal.onclick = () => {
        currentValue = currentValue * lastValue;
        lastValue = "0";
        result.textContent = currentValue;
        last.textContent = lastValue;
    }
}
function Divide() {
    if (lastValue == 0) {
        lastValue = currentValue;
        currentValue = "0";
        last.textContent = lastValue;
        result.textContent = currentValue;
    } else {
        lastValue = lastValue / currentValue;
        currentValue = "0";
        last.textContent = lastValue;
        result.textContent = currentValue;
    }
    equal.onclick = () => {
        currentValue = lastValue / currentValue;
        lastValue = "0";
        result.textContent = currentValue;
        last.textContent = lastValue;
    }
}
function Percent() {
    lastValue = +currentValue;
    currentValue = "0";
    last.textContent = lastValue;
    result.textContent = currentValue;
    equal.onclick = () => {
        currentValue = lastValue % currentValue;
        lastValue = "0";
        result.textContent = currentValue;
        last.textContent = lastValue;
    }
}