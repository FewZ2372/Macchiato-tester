// ar-animation.js
// Get a reference to your 3D object
const model = document.querySelector('#decaf'); // Replace with the ID of your 3D object

// Listen for the markerFound event
document.querySelector('a-marker').addEventListener('markerFound', () => {
  // Play the animation when the marker is found
  model.emit('animation__trigger', 'begin');
});