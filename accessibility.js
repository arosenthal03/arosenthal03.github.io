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
