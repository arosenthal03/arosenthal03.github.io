function promptForName() 
    {var name = prompt("Please enter your name:");
    var outputElement = document.getElementById("output");
    outputElement.innerHTML = "Welcome to my portfolio, " + name + "!";}

const myImage = document.getElementById('myImage');
myImage.addEventListener('click', function () {this.classList.toggle('clicked')});

function handleMouseOver(element) 
    {element.style.backgroundColor = "lightblue";}

function handleMouseOut(element) 
    {element.style.backgroundColor = "";}

document.addEventListener("DOMContentLoaded", function() 
    {var navItems = document.getElementsByClassName("nav-item");
    for (var i = 0; i < navItems.length; i++) 
        {navItems[i].addEventListener("mouseover", function() 
        {handleMouseOver(this);});
        navItems[i].addEventListener("mouseout", function() 
        {handleMouseOut(this);});}});
                