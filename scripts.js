function toggleOptions(id) {
    const options = document.getElementById(id);

    if (options.style.display === 'none' || options.style.display === '') {
        options.style.display = 'block';
    } else {
        options.style.display = 'none';
    }
}

function goToLink(href, id) {
    const options = document.getElementById(id);
    if (options.style.display === 'block') {
        window.open(href);
    }
}