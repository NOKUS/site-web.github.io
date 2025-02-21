let myImage = document.querySelector("img");

myImage.addEventListener("click", function(){
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/football.svg"){
        myImage.setAttribute("src", "images/ecusson.png");
    }else {
        myImage.setAttribute("src","images/football.svg");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("Please enter your name");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome to Foot Cergy Ass " + myName + "!";
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome to Foot Cergy Ass " + storedName + "!";
}

myButton.addEventListener("click", function (){
    setUserName();
});