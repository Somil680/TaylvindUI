const slider = document.querySelector('#input-range');
const output = document.querySelector(".slider-value")


function rangevalue(){
var sliders = slider.value;
console.log(sliders);
output.innerHTML = sliders
}



const myslides = document.querySelector(".myslides");
const rigthbtn = document.querySelector(".next")
const leftbtn = document.querySelector(".prev")

let index = 1;
