const openbtn = document.querySelector("#open-btn");
const modalbox = document.querySelector("#modalbox");
const darkmode = document.querySelector(".dark-mode");
openbtn.addEventListener('click' , openfunction);

function openfunction(){
    modalbox.style.display = "block"
    darkmode.style.opacity = "0.2"
}
const mainbtn = document.querySelector("#yes-btn");
mainbtn.addEventListener('click', closefunction);
function closefunction(){
    modalbox.style.display = "none"
    darkmode.style.opacity = "1"

}
const mainbtn_no = document.querySelector("#no-btn");
mainbtn_no.addEventListener('click', closefunction);
function closefunction(){
    modalbox.style.display = "none"
    darkmode.style.opacity = "1"

}