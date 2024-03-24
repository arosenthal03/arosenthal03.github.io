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
        function changeFontSize(action) {
            var body = document.querySelector('body');
            if (action === 'increase') {
                body.classList.add('large-font');
            } else if (action === 'decrease') {
                body.classList.remove('large-font');
            }
        }
        function changeColorScheme(scheme) {
            var body = document.querySelector('body');
            if (scheme === 'default') {
                body.classList.remove('high-contrast');
            } else if (scheme === 'high-contrast') {
                body.classList.add('high-contrast');
            }
        }