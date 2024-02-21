function promptForName() 
    {var name = prompt("Please enter your name:");
    var outputElement = document.getElementById("output");
    outputElement.innerHTML = "Welcome, " + name + " to my portfolio!";}

function enlargeImage() 
    {var image = document.getElementById("myImage");
    image.style.width = "200px"; 
    image.style.height = "200px";}

document.addEventListener("DOMContentLoaded", function()
    {var image = documnet.getElementByID("myImage");
    image.addEventListener("click", enlargeImage)});

function resetImageSize() 
    {var image = document.getElementById("myImage");
    image.style.width = "";
    image.style.height = "";}

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