document.addEventListener("DOMContentLoaded", function() 
    {var navItems = document.getElementsByClassName("nav-item");
    for (var i = 0; i < navItems.length; i++) 
        {navItems[i].addEventListener("mouseover", function() 
        {handleMouseOver(this);});
        navItems[i].addEventListener("mouseout", function() 
        {handleMouseOut(this);});}});