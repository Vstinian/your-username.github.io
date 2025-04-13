// script.js
function loadNavbar() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'navbar.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById('navbar-container').innerHTML = xhr.responseText;
            } else {
                console.error('Failed to load navbar:', xhr.status);
            }
        }
    };
    xhr.send();
}