function filterImages(category) {
    let images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        if (category === 'all') {
            img.classList.add('show');
        } else {
            img.classList.remove('show');
            if (img.classList.contains(category)) {
                img.classList.add('show');
            }
        }
    });
}