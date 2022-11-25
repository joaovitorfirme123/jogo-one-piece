const luffy = document.querySelector('.luffy');

const jump = () => {
    luffy.classList.add('jump');

    setTimeout(() =>{
        luffy.classList.remove('jump');
    }, 900);
}




document.addEventListener('keydown', jump);