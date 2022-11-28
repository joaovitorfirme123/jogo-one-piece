const luffy = document.querySelector('.luffy');
const trap = document.querySelector('.trap');

const jump = () => {
    luffy.classList.add('jump');

    setTimeout(() =>{
        luffy.classList.remove('jump');
    }, 800);
}

const loop = setInterval(() => {
    console.log('loop')
    const trapposition = trap.offsetLeft;
    const luffyposition = +window.getComputedStyle(luffy).bottom.replace('px', '');
    console.log(luffyposition);
    if (trapposition < 120 &&  luffyposition < 95) {
        
        trap.style.animation = 'none';
        trap.style.left = `${trapposition}px`;
        luffy.style.animation = 'none';
        luffy.style.bottom = `${luffyposition}px`;

        luffy.src = './imagens/game-over.gif';
        luffy.style.width = '100px';
        
        clearInterval(loop);
    }
},10);



document.addEventListener('keydown', jump);