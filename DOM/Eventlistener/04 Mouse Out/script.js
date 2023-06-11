//  Mouseout event

const boxElement = document.getElementById("box");

// add mouse out event listener to the element 
boxElement.addEventListener("mouseout", function(){
    alert("Mouse out is working Properly 👍🥳");
    document.getElementById("box").style.backgroundColor = "violet";
    document.getElementById("box").style.width = "35rem";
    
});