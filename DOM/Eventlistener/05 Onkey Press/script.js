//  onkey press event

let inputBox = document.getElementById('input-box')
let display = document.getElementById('display')

// add click event listener to the element 
inputBox.addEventListener("keypress", function(e){
    display.innerText="you have Pressed " + e.key
    document.getElementById("box").style.backgroundColor = "violet";
});