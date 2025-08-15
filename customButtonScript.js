// Listen for clicks on any button with a data-sound attribute

// Create a cache for audio objects
const audioCache = {};

// Add click listeners to all buttons with a data-sound attribute
document.querySelectorAll('[data-sound]').forEach(button => {
    button.addEventListener('click', () => {
        const soundSrc = button.getAttribute('data-sound');

        // If we haven't created an Audio object for this sound yet, do it now
        if (!audioCache[soundSrc]) {
            audioCache[soundSrc] = new Audio(soundSrc);
            audioCache[soundSrc].preload = 'auto';
        }

        // Rewind and play the sound
        audioCache[soundSrc].currentTime = 0;
        audioCache[soundSrc].play();
    });
});


/*
// Draggable Retro Window (PNG Top Bar as Handle)

function makeDraggableFromTopBar(element, topBarHeight) {
    let offsetX = 0, offsetY = 0, isDragging = false;

    element.addEventListener('mousedown', (e) => {
        // Only start dragging if mouse is in top bar area
        if (e.offsetY <= topBarHeight) {
            isDragging = true;
            offsetX = e.clientX - element.offsetLeft;
            offsetY = e.clientY - element.offsetTop;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            element.style.left = (e.clientX - offsetX) + 'px';
            element.style.top = (e.clientY - offsetY) + 'px';
        }
    });
}

// Run setup after page loads
document.addEventListener('DOMContentLoaded', () => {
    const retroWindow = document.getElementById('retroWindow');

    if (retroWindow) {
        // Adjust topBarHeight to match the pixel height of your PNG's title bar
        makeDraggableFromTopBar(retroWindow, 40);
    }
});
*/ 