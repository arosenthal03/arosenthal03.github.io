function promptForName()
    {var name = promt("Enter name below:");
    var outputElement = document.getElementById("ouput");
    outputElement.innerHTML = "Welcome, " + name + "to my portforlio!";;}