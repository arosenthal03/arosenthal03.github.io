function togglePanel() {
    var panel = document.getElementById("sidePanel");
    var mainContent = document.getElementById("mainContent");

    if (panel.style.left === "0px") {
        panel.style.left = "-250px";
        mainContent.style.marginLeft = "0";
    } else {
        panel.style.left = "0px";
        mainContent.style.marginLeft = "250px";
    }
}

function setColorblindMode(mode) {
    // Logic to set colorblind mode
    switch (mode) {
        case 'normal':
            // Reset styles to normal
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            break;
        case 'protanopia':
            // Apply protanopia color scheme
            document.body.style.backgroundColor = '#FFF5F0';
            document.body.style.color = '#000';
            break;
        case 'deuteranopia':
            // Apply deuteranopia color scheme
            document.body.style.backgroundColor = '#FFF7E6';
            document.body.style.color = '#000';
            break;
        case 'tritanopia':
            // Apply tritanopia color scheme
            document.body.style.backgroundColor = '#F0F6FF';
            document.body.style.color = '#000';
            break;
        default:
            break;
    }
}
