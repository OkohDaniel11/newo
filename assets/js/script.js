// Hide the loader after 2 seconds
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
    var loader = document.getElementById('gta6Loader');
    if(loader) loader.style.display = 'none';
    }, 4000);
});