const button = document.querySelector('button')
const stopaudioButton = document.querySelector('#stop')
let audio = new Audio();
audio.src = 'sound/bg.mp3';

button.addEventListener('click', (event)=>{
    audio.play()
})

stopaudioButton.addEventListener('click', (event)=>{
    audio.pause()
})