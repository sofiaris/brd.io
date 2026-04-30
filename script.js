const music = document.getElementById('bg-music');

function playMusic() {
    music.play();
    document.querySelector('.music-icon').classList.add('playing');
}

// كود تساقط الورد
setInterval(() => {
    const container = document.getElementById('petals-container');
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 10 + 8 + 'px';
    petal.style.width = size;
    petal.style.height = size;
    const duration = Math.random() * 5 + 5;
    petal.style.animationDuration = duration + 's';
    container.appendChild(petal);
    setTimeout(() => { petal.remove(); }, duration * 1000);
}, 300);