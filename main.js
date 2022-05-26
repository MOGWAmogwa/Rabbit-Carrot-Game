const body = document.querySelector('body');
const container = document.querySelector('.container');
const startButton = document.querySelector('.play-start-button');
const stopButton = document.querySelector('.stop-button');
const replayPopUp = document.querySelector('.replay-pop-up');
const replayButton = document.querySelector('.replay-button');
const timerOuter = document.querySelector('.timer-outer');
const gameOverPopUp = document.querySelector('.game-over-pop-up');
const gameClearPopUp = document.querySelector('.game-clear-pop-up');
const carrotCount = document.querySelector('.carrotToBeDeleted');

// Audio

let bg = new Audio;
let alertt = new Audio;
let bugPull = new Audio;
let carrotPull = new Audio;
let gameWin = new Audio;






function bgSound(){
    bg.src = "sound/bg.mp3";
    bg.play()
    return bg
}
function alertSound(){
    alertt.src = "sound/alert.wav";
    alertt.play()
    return alertt
}
function bugPullSound(){
    bugPull.src = "sound/bug_pull.mp3";
    bugPull.play()
    return bugPull
}
function carrotPullSound(){
    
    carrotPull.src = "sound/carrot_pull.mp3";
    carrotPull.play()
    return carrotPull
}
function gameWinSound(){
    gameWin.src = "sound/game_win.mp3";
    gameWin.play()
    return gameWin
}





let harvestCarrotCount=10;


function makeBugCarrot () {
    container.innerHTML = `
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

        <img src="./img/bug.png" class="bug" alt="bug" data-bug="1">
        <img src="./img/bug.png" class="bug" alt="bug" data-bug="2">
        <img src="./img/bug.png" class="bug" alt="bug" data-bug="3">
        <img src="./img/bug.png" class="bug" alt="bug" data-bug="4">
        <img src="./img/bug.png" class="bug" alt="bug" data-bug="5">
        <img src="./img/bug.png" class="bug" alt="bug" data-bug="6">
        <img src="./img/bug.png" class="bug" alt="bug" data-bug="7">
        
        `
        
    }
    
 
                    
let myInterval;
let startSeconds;
function Timer(){
    startSeconds = 10;
    myInterval = setInterval(() => {
            timerOuter.innerHTML = `
                <span> 0:${startSeconds-1} </span>
            `
            startSeconds--
            if(startSeconds<=0){
                clearInterval(myInterval)
                bgSound().pause()
                bugPullSound()
                stopButton.classList.toggle('open');
                gameOverPopUp.classList.toggle('open');
                // timerOuter.classList.toggle('close');
                // carrotCount.classList.toggle('close')
                container.innerHTML=``
                

            }
    }, 1000);
    
    return myInterval;

}

startButton.addEventListener('click', (event)=>{
    gameStart()

})

function gameStart(){
    bgSound()

    Timer()
    timerOuter.innerHTML = `
        <span> 0:${startSeconds} </span>
    `

    startButton.classList.toggle('close')
    stopButton.classList.toggle('open');

    makeBugCarrot() 

    const carrots = document.querySelectorAll('.carrot');

    carrots.forEach((carrot)=>{
        
        let randomNumberX =  Math.floor(Math.random()*(1500-0+1))+0;
        let randomNumberY =  Math.floor(Math.random()*(350-0+1))+0;
        // carrot.style.transform = `translate(${randomNumberX}px, ${randomNumberY}px`
        carrot.style.top = `${randomNumberY}px`;
        carrot.style.left = `${randomNumberX}px`;
    

        carrot.addEventListener('click', (event)=>{

            carrot.remove()
            carrotPullSound()
            harvestCarrotCount--
            carrotCount.innerHTML = `
                <span> ${harvestCarrotCount} </span>
            `
            if(harvestCarrotCount==0){
                clearInterval(myInterval);
                gameWinSound()
                bgSound().pause()
                container.innerHTML=``
                stopButton.classList.toggle('open');
                // timerOuter.classList.toggle('close');
                // carrotCount.classList.toggle('close');
                carrotCount.innerHTML=`
                    <span> ${harvestCarrotCount} </span>
                `
                gameClearPopUp.classList.toggle('open');
                
              
            }

          
        })
    })

    const bugs = document.querySelectorAll('.bug');

    bugs.forEach((bug)=>{
        
        let randomNumberX =  Math.floor(Math.random()*(1500-150+1))+150; // 인터넷에 있는거 ctrl+c ctrl+v 👍
        let randomNumberY =  Math.floor(Math.random()*(350-100+1))+100;
        // bug.style.transform = `translate(${randomNumberX}px, ${randomNumberY}px`
        bug.style.top = `${randomNumberY}px`;
        bug.style.left = `${randomNumberX}px`;
        bug.addEventListener('click', (event)=>{
            clearInterval(myInterval);
            bugPullSound()
            bgSound().pause()
            container.innerHTML=``
            stopButton.classList.toggle('open');
            // timerOuter.classList.toggle('close');
            // carrotCount.classList.toggle('close')
            gameOverPopUp.classList.toggle('open');

        })


    })

}

const GAMEOVERreplayButton = document.querySelector('.game-over-pop-up .replay-button')
GAMEOVERreplayButton.addEventListener('click', (event)=>{
    gameStart()
            timerOuter.classList.toggle('close');
            carrotCount.classList.toggle('close')
    startButton.classList.toggle('close');
    // timerOuter.innerHTML = `
    // <span> 0:0</span>
    // `
    timerOuter.innerHTML = `
    <span> 0:${startSeconds} </span>
`
    carrotCount.innerHTML = `
    <span> 10 </span>
    `
    timerOuter.classList.toggle('close')
    gameOverPopUp.classList.toggle('open');
    carrotCount.classList.toggle('close')
    startSeconds=10;      
    harvestCarrotCount=10;              

    
})

const GAMECLEARreplayButton = document.querySelector('.game-clear-pop-up .replay-button')

                GAMECLEARreplayButton.addEventListener('click', (event)=>{
                    gameStart()
                    timerOuter.classList.toggle('close');
                carrotCount.classList.toggle('close');
                    
                    startButton.classList.toggle('close');
                    
                    // timerOuter.innerHTML = `
                    // <span> 0:0</span>
                    // `
                    timerOuter.innerHTML = `
                    <span> 0:${startSeconds} </span>
                `
                    carrotCount.innerHTML = `
                    <span> 10 </span>
                    `
                    timerOuter.classList.toggle('close')
                    gameClearPopUp.classList.toggle('open');
                    carrotCount.classList.toggle('close')
                    startSeconds=10;      
                    harvestCarrotCount=10;         
                    
                        
                })


    stopButton.addEventListener('click', (event)=>{
        alertSound()
        bgSound().pause()
        container.innerHTML=``
        stopButton.classList.toggle('open');
        replayPopUp.classList.toggle('open');
        clearInterval(myInterval)
        timerOuter.classList.toggle('close');
        carrotCount.classList.toggle('close');
        startSeconds=10;
        harvestCarrotCount=10;



    })



    replayButton.addEventListener('click', (event)=>{
            
        
        gameStart()
 
        startButton.classList.toggle('close');
        replayPopUp.classList.toggle('open')
        // timerOuter.innerHTML = `
        //             <span> 0:0</span>
        //         `

        timerOuter.innerHTML = `
        <span> 0:${startSeconds} </span>
    `

        timerOuter.classList.toggle('close')
        carrotCount.innerHTML = `
        <span> 10 </span>
        `
        carrotCount.classList.toggle('close')
        startSeconds=10;
        harvestCarrotCount=10;

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


        // if(replayOuter.innerHTML==``){
        //     replayOuter.classList.add('open')
        //     replayOuter.innerHTML = `
        //          <div class="replay-button">
        //              <i class="fa-solid fa-reply"></i>
        //          </div>
        //          <p> Do you want to replay ? </p>
        //     `
        //  }



        // function makePopUpReplay(){
//     const replayPopup = document.createElement('div');
//     replayPopup.setAttribute('class', 'replay-outer open');
//     replayPopup.innerHTML = `
//         <div class="replay-button">
//             <i class="fa-solid fa-reply"></i>
//         </div>
//         <p> Do you want to replay ? </p>
//     `
//     return replayPopup
    
// }












//🐁 이거 나중에 복사해서 써

// const body = document.querySelector('body');
// const container = document.querySelector('.container');
// const startButton = document.querySelector('.play-start-button');
// const stopButton = document.querySelector('.stop-button');
// const replayPopUp = document.querySelector('.replay-pop-up');
// const replayButton = document.querySelector('.replay-button');
// const timerOuter = document.querySelector('.timer-outer');
// const gameOverPopUp = document.querySelector('.game-over-pop-up');
// const gameClearPopUp = document.querySelector('.game-clear-pop-up');
// const carrotCount = document.querySelector('.carrotToBeDeleted');


// let harvestCarrotCount=10;




// function makeBugCarrot () {
//     container.innerHTML = `
//         <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="1">
//         <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="2">
//         <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="3">
//         <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="4">
//         <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="5">
//         <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="6">
//         <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="7">
//         <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="8">
//         <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="9">
//         <img src="./img/carrot.png" class="carrot" alt="carrot" data-carrot="10">

//         <img src="./img/bug.png" class="bug" alt="bug" data-bug="1">
//         <img src="./img/bug.png" class="bug" alt="bug" data-bug="2">
//         <img src="./img/bug.png" class="bug" alt="bug" data-bug="3">
//         <img src="./img/bug.png" class="bug" alt="bug" data-bug="4">
//         <img src="./img/bug.png" class="bug" alt="bug" data-bug="5">
//         <img src="./img/bug.png" class="bug" alt="bug" data-bug="6">
//         <img src="./img/bug.png" class="bug" alt="bug" data-bug="7">
    
//         `
        
//     }

//     let myInterval;
//     let startSeconds;
//     function Timer(){
//         startSeconds = 10;
//         myInterval = setInterval(() => {
//                 timerOuter.innerHTML = `
//                     <span> 0:${startSeconds-1} </span>
//                 `
//                 startSeconds--
//                 if(startSeconds<=0){
//                     clearInterval(myInterval)
//                     stopButton.classList.toggle('open');
//                     timerOuter.classList.toggle('close');
//                     gameOverPopUp.classList.toggle('open');
//                     carrotCount.classList.toggle('close')
//                     container.innerHTML=``
                    

//                 }
//         }, 1000);
     
//         return myInterval;

//     }

//     const GAMEOVERreplayButton = document.querySelector('.game-over-pop-up .replay-button')
//                     GAMEOVERreplayButton.addEventListener('click', (event)=>{

//                         startButton.classList.toggle('close');
//                         container.innerHTML=``
//                         timerOuter.innerHTML = `
//                         <span> 0:0</span>
//                         `
//                         carrotCount.innerHTML = `
//                         <span> 10 </span>
//                         `
//                         timerOuter.classList.toggle('close')
//                         gameOverPopUp.classList.toggle('open');
//                         carrotCount.classList.toggle('close')
//                         startSeconds=10;      
//                         harvestCarrotCount=10;              

                        
//                     })
    

//     startButton.addEventListener('click', (event)=>{
        
//         Timer()
//         timerOuter.innerHTML = `
//         <span> 0:${startSeconds} </span>
//     `
   
//         startButton.classList.toggle('close')
//         stopButton.classList.toggle('open');
    
//         makeBugCarrot() // 헷갈려
    
//         const carrots = document.querySelectorAll('.carrot');
    
//         carrots.forEach((carrot)=>{
            
//             let randomNumberX =  Math.floor(Math.random()*(1500-0+1))+0;
//             let randomNumberY =  Math.floor(Math.random()*(350-0+1))+0;
//             carrot.style.transform = `translate(${randomNumberX}px, ${randomNumberY}px`
        

//             carrot.addEventListener('click', (event)=>{
//                 carrot.remove()
//                 harvestCarrotCount--
//                 carrotCount.innerHTML = `
//                     <span> ${harvestCarrotCount} </span>
//                 `
//                 if(harvestCarrotCount==0){
//                     clearInterval(myInterval);
//                     container.innerHTML=``
//                     stopButton.classList.toggle('open');
//                     timerOuter.classList.toggle('close');
//                     carrotCount.classList.toggle('close')
//                     gameClearPopUp.classList.toggle('open');
                    
                  
//                 }

              
//             })
//         })
    
//         const bugs = document.querySelectorAll('.bug');
    
//         bugs.forEach((bug)=>{
            
//             let randomNumberX =  Math.floor(Math.random()*(1500-150+1))+150; // 인터넷에 있는거 ctrl+c ctrl+v 👍
//             let randomNumberY =  Math.floor(Math.random()*(350-100+1))+100;
//             bug.style.transform = `translate(${randomNumberX}px, ${randomNumberY}px`

//             bug.addEventListener('click', (event)=>{
//                 clearInterval(myInterval);
//                 container.innerHTML=``
//                 stopButton.classList.toggle('open');
//                 timerOuter.classList.toggle('close');
//                 carrotCount.classList.toggle('close')
//                 gameOverPopUp.classList.toggle('open');

//             })
    
    
//         })
    
//     })
    

//     const GAMECLEARreplayButton = document.querySelector('.game-clear-pop-up .replay-button')

//                     GAMECLEARreplayButton.addEventListener('click', (event)=>{

//                         startButton.classList.toggle('close');
                        
//                         timerOuter.innerHTML = `
//                         <span> 0:0</span>
//                         `
//                         carrotCount.innerHTML = `
//                         <span> 10 </span>
//                         `
//                         timerOuter.classList.toggle('close')
//                         gameClearPopUp.classList.toggle('open');
//                         carrotCount.classList.toggle('close')
//                         startSeconds=10;      
//                         harvestCarrotCount=10;         
                        
                           
//                     })


//     stopButton.addEventListener('click', (event)=>{

//         stopButton.classList.toggle('open');
//         replayPopUp.classList.toggle('open');
//         clearInterval(myInterval)
//         timerOuter.classList.toggle('close');
//         carrotCount.classList.toggle('close');
        


//     })



//     replayButton.addEventListener('click', (event)=>{

        
        
 
//         startButton.classList.toggle('close');
//         container.innerHTML=``
//         replayPopUp.classList.toggle('open')
//         timerOuter.innerHTML = `
//                     <span> 0:0</span>
//                 `

//         timerOuter.classList.toggle('close')
//         carrotCount.innerHTML = `
//         <span> 10 </span>
//         `
//         carrotCount.classList.toggle('close')
//         startSeconds=10;
//         harvestCarrotCount=10;

//     })




















//🐁 얘넨 걍 남겨놓은거




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


        // if(replayOuter.innerHTML==``){
        //     replayOuter.classList.add('open')
        //     replayOuter.innerHTML = `
        //          <div class="replay-button">
        //              <i class="fa-solid fa-reply"></i>
        //          </div>
        //          <p> Do you want to replay ? </p>
        //     `
        //  }



        // function makePopUpReplay(){
//     const replayPopup = document.createElement('div');
//     replayPopup.setAttribute('class', 'replay-outer open');
//     replayPopup.innerHTML = `
//         <div class="replay-button">
//             <i class="fa-solid fa-reply"></i>
//         </div>
//         <p> Do you want to replay ? </p>
//     `
//     return replayPopup
    
// }
