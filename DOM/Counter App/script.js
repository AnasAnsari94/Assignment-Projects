// getting the html element

const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue")


// For decrement button click
decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value > 0) {
        displayValue.innerText = value -1;
    }else {
        alert("Negative value Not Allowed");
    }
});


// For Increment button Clicl 
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText)
    if(value >=10) {
        alert("10+ values are not Allowed")
    }else {
        displayValue.innerText = value + 1;
    }
});

// For reset button click

resetBtn.addEventListener("click", ()=> {
    displayValue.innerText = 0;
})