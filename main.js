const body = document.querySelector('body');
const container = document.querySelector('.container');
const startButton = document.querySelector('.play-start-button');
const stopButton = document.querySelector('.stop-button');
const messageOuter = document.querySelector('.message-outer');
const messageOuterOpen = document.querySelector('.message-outer.open');
const replayButton = document.querySelector('.replay-button');
const images = document.querySelector('img')



function makeBugCarrot () {
    container.innerHTML = `
        <img src="./img/bug.png" class="bug" alt="bug" data-bug="1">
        <img src="./img/bug.png" class="bug" alt="bug" data-bug="2">
        <img src="./img/bug.png" class="bug" alt="bug" data-bug="3">
        <img src="./img/bug.png" class="bug" alt="bug" data-bug="4">
        <img src="./img/bug.png" class="bug" alt="bug" data-bug="5">
        <img src="./img/bug.png" class="bug" alt="bug" data-bug="6">
        <img src="./img/bug.png" class="bug" alt="bug" data-bug="7">
    
        <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="1">
        <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="2">
        <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="3">
        <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="4">
        <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="5">
        <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="6">
        <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="7">
        <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="8">
        <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="9">
        <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="10">
        `
        
    }
    
    
    startButton.addEventListener('click', (event)=>{


        startButton.classList.toggle('close')
        startButton.nextElementSibling.classList.toggle('open');
    
        makeBugCarrot()
    
        const carrots = document.querySelectorAll('.carrot');
    
        carrots.forEach((carrot)=>{
            
            let randomNumberX =  Math.floor(Math.random()*(1500-0+1))+0;
            let randomNumberY =  Math.floor(Math.random()*(350-0+1))+0;
            carrot.style.transform = `translate(${randomNumberX}px, ${randomNumberY}px`
        
    
            carrot.addEventListener('click', (event)=>{
                carrot.remove()
              
            })
        })
    
        const bugs = document.querySelectorAll('.bug');
    
        bugs.forEach((bug)=>{
            
            let randomNumberX =  Math.floor(Math.random()*(1500-150+1))+150;
            let randomNumberY =  Math.floor(Math.random()*(350-100+1))+100;
            bug.style.transform = `translate(${randomNumberX}px, ${randomNumberY}px`
    
    
        })
    
    })
    
    stopButton.addEventListener('click', (event)=>{

        stopButton.classList.remove('open');
        messageOuter.classList.add('open')

    })

    replayButton.addEventListener('click', (event)=>{
        // replayButton.classList.remove('open');
        // messageOuter.classList.remove('open')
        // messageOuter.innerHTML=``
        startButton.classList.remove('close');
        container.innerHTML=``
        messageOuter.classList.toggle('open')

    })




















    // window.addEventListener('click', (e)=>{
    //     console.log(e.target);
    // })
    






// button.addEventListener('click', (event)=>{

//     makeCarrot()

//     const carrots = document.querySelectorAll('.carrot');

//     carrots.forEach((carrot)=>{
        
//         let randomNumberX =  Math.floor(Math.random()*(800-0+1))+10;
//         let randomNumberY =  Math.floor(Math.random()*(300-0+1))+10;
//         carrot.style.transform = `translate(${randomNumberX}px, ${randomNumberY}px`

//     })


// })



//x : 24~947 y : 256~497 

/**
 * 
 *      let randomNumberX =  Math.floor(Math.random()*(947-24+1))+24;
        let randomNumberY =  Math.floor(Math.random()*(497-256))+256;
        bug.style.transform = `translate(${randomNumberX}px, ${randomNumberY}px)`
 */



        // function makeBug(){
//     container.innerHTML = `
//         <img src="./img/bug.png" class="bug" alt="bug" data-bug="1">
//         <img src="./img/bug.png" class="bug" alt="bug" data-bug="2">
//         <img src="./img/bug.png" class="bug" alt="bug" data-bug="3">
//         <img src="./img/bug.png" class="bug" alt="bug" data-bug="4">
//         <img src="./img/bug.png" class="bug" alt="bug" data-bug="5">
//         <img src="./img/bug.png" class="bug" alt="bug" data-bug="6">
//         <img src="./img/bug.png" class="bug" alt="bug" data-bug="7">
//     `


// }

// function makeCarrot(){
//     container.innerHTML = `
//     <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="1">
//     <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="2">
//     <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="3">
//     <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="4">
//     <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="5">
//     <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="6">
//     <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="7">
//     <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="8">
//     <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="9">
//     <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="10">
// `

// }


        // if(messageOuter.innerHTML==``){
        //     messageOuter.classList.add('open')
        //     messageOuter.innerHTML = `
        //          <div class="replay-button">
        //              <i class="fa-solid fa-reply"></i>
        //          </div>
        //          <p> Do you want to replay ? </p>
        //     `
        //  }



        // function makePopUpReplay(){
//     const replayPopup = document.createElement('div');
//     replayPopup.setAttribute('class', 'message-outer open');
//     replayPopup.innerHTML = `
//         <div class="replay-button">
//             <i class="fa-solid fa-reply"></i>
//         </div>
//         <p> Do you want to replay ? </p>
//     `
//     return replayPopup
    
// }
