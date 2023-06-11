//  Mouseover event

const boxElement = document.getElementById("box");

// add click event listener to the element 
boxElement.addEventListener("mouseover", function(){
    alert("Mouse over is working Properly 👍🥳");
    document.getElementById("box").style.backgroundColor = "violet";
});