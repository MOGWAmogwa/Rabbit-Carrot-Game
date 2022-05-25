const button = document.querySelector('button');

let count = 0 ;
let myinterval = setInterval(() => {
    console.log(count);
    count++
}, 1000);

button.addEventListener('click', (e)=>{
    count = 0;
    clearInterval(myinterval);
})