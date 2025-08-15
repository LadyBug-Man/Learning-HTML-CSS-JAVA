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




/*           ------ Older messier code ------
---------------------------------------------------------------------
const btn = document.getElementById('soundBtn');
const btn2 = document.getElementById('soundBtn2');
const clickSound = document.getElementById('clickSound');

btn.addEventListener('click', () => {
    clickSound.currentTime = 0; // rewind in case it was just played
    clickSound.play();
});


btn2.addEventListener('click', () => {
    clickSound.currentTime = 0; // rewind in case it was just played
    clickSound.play();
}); */