const startbutton = document.querySelector('button.start');

let count = 10 ;
let myinterval = setInterval(() => {
    console.log(count);
    count--
}, 1000);

startbutton.addEventListener('click', (e)=>{
    clearInterval(myinterval);
})