//   Double click event

const boxElement = document.getElementById("box");

// add click event listener to the element 
boxElement.addEventListener("dblclick", function(){
    alert("it's working properly 🥳👍")
    document.getElementById("box").style.backgroundColor = "green";
})