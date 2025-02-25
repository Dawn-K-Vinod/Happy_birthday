function playMusic() {
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Replace with a Happy Birthday song URL
    audio.play();
    startCrackers();
}

function startCrackers() {
    const crackers = document.getElementById('crackers');
    for (let i = 0; i < 50; i++) {
        const cracker = document.createElement('div');
        cracker.className = 'cracker';
        cracker.style.left = Math.random() * 100 + 'vw';
        cracker.style.top = Math.random() * 100 + 'vh';
        cracker.style.animationDelay = Math.random() * 2 + 's';
        crackers.appendChild(cracker);
    }
}

setInterval(() => {
    document.querySelectorAll('.cracker').forEach(cracker => {
        cracker.remove();
    });
    startCrackers();
}, 5000);
