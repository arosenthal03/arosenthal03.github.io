document.addEventListener('DOMContentLoaded', function() {
    const altTextCheckbox = document.getElementById('altTextCheckbox');
    const colorBlindCheckbox = document.getElementById('colorBlindCheckbox');
    const fontSizeRange = document.getElementById('fontSizeRange');
    const content = document.querySelector('.content');

    altTextCheckbox.addEventListener('change', function() {
        if (altTextCheckbox.checked) {
            // Replace images with their alt texts
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.style.display = 'none';
                const altText = document.createElement('p');
                altText.textContent = img.alt;
                img.parentNode.insertBefore(altText, img);
            });
        } else {
            // Restore original images
            const altTexts = document.querySelectorAll('.content p');
            altTexts.forEach(p => {
                p.parentNode.removeChild(p.previousSibling);
                p.style.display = 'block';
            });
        }
    });

    colorBlindCheckbox.addEventListener('change', function() {
        if (colorBlindCheckbox.checked) {
            // Apply color blind mode styles
            content.style.filter = 'grayscale(100%)';
        } else {
            // Remove color blind mode styles
            content.style.filter = 'none';
        }
    });

    fontSizeRange.addEventListener('input', function() {
        content.style.fontSize = `${fontSizeRange.value}px`;
    });
});
