function light_dark() {
    const root = document.documentElement;
    const mode = document.getElementById('mode');

    if (localStorage.getItem('theme') === 'light') {
        root.classList.remove('darkmode');
        mode.innerHTML = "Dark Mode";
        localStorage.setItem('theme', 'dark');
    } else {
        root.classList.add('darkmode');
        mode.innerHTML = "Light Mode";
        localStorage.setItem('theme', 'light');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.add('darkmode');
        document.getElementById('mode').innerHTML = "Light Mode";
    } else {
        document.getElementById('mode').innerHTML = "Dark Mode";
    }
});