"use strict";
const gridContainer = document.querySelector(".lite-bright-container");
const bodySelector = document.querySelector("body");
const headerButtons = document.querySelector("header");
let buttonColor = "black";
const gridLayout = () => {
    for (let i = 0; i < 100; i++) {
        const newCell = document.createElement("div");
        newCell.classList.add("cell")
        newCell.style.backgroundColor = "black";
        gridContainer.append(newCell);
    
    }
};

gridLayout();


bodySelector.addEventListener("click", (e) => {
    if (e.target.classList.contains("red")) {
        buttonColor = "red"
        
    } else if (e.target.classList.contains("green")) {
        buttonColor = "green"
        
    }  else if (e.target.classList.contains("blue")) {
        buttonColor = "blue"
        
    } else if (e.target.classList.contains("cell")) {
        e.target.style.backgroundColor = buttonColor;
    }
});




