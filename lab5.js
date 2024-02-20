function promptForName()
    {var name = promt("Enter name below:");
    var outputElement = document.getElementById("ouput");
    outputElement.innerHTML = "Welcome, " + name + "to my portforlio!";}

function enlargeImage() 
    {var image = document.getElementById("myImage");
    image.style.width = "200px";
    image.style.height = "200xp";}

function resetImageSize()
    {var image = document.getElementById("MyImage");
    image.style.widt = "";
    image.style.height = "";}

function handleMouseOut(element)
    {element.style.backgroumdColor = "";}

 document.addEventListener("DOMContentLoaded", function() 
    {var navItems = document.getElementsByClassName("nav-item");
    for (var i = 0; i < navItems.length; i++) 
        {navItems[i].addEventListener("mouseover", function() 
            {handleMouseOver(this);});
        navItems[i].addEventListener("mouseout", function() 
            {handleMouseOut(this);});}});