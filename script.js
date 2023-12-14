window.addEventListener('load', function () {
    setTimeout(function () {
        var loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.classList.add('fade-out');
    }, 3000); // Change 3000 to the number of milliseconds you want the loading screen to appear
});