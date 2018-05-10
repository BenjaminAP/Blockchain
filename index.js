
function init() {
    this.header = document.getElementById('header');
    this.changeText("Some value");
}

function changeText(val) {
    this.header.innerHTML = val.test;
    console.log("page loaded");
}

const temp = require('body-parser');

console.log(temp);