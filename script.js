window.addEventListener('load', function () {
    var scene = document.querySelector('a-scene');
    if (scene) {
        scene.addEventListener('loaded', function () {
            var loadingScreen = document.getElementById('loadingScreen');
            loadingScreen.classList.add('fade-out');
        });
    }
});
