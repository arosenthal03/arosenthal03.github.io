function changeFontSize(action) {
    var body = document.querySelector('body');
    if (action === 'increase') {
        body.classList.add('large-font');
    } else if (action === 'decrease') {
        body.classList.remove('large-font');
    }
}
