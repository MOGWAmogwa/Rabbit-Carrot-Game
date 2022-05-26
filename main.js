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
                    stopButton.classList.toggle('open');
                    timerOuter.classList.toggle('close');
                    gameOverPopUp.classList.toggle('open');
                    carrotCount.classList.toggle('close')
                    const replayButton = document.querySelector('.game-over-pop-up .replay-button')
                    replayButton.addEventListener('click', (event)=>{

                        startButton.classList.toggle('close');
                        container.innerHTML=``
                        timerOuter.innerHTML = `
                        <span> 0:0</span>
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

                }
        }, 1000);
     
        return myInterval;

    }
    

    startButton.addEventListener('click', (event)=>{
        
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
            carrot.style.transform = `translate(${randomNumberX}px, ${randomNumberY}px`
        

            carrot.addEventListener('click', (event)=>{
                carrot.remove()
                harvestCarrotCount--
                carrotCount.innerHTML = `
                    <span> ${harvestCarrotCount} </span>
                `
                if(harvestCarrotCount==0){
                    clearInterval(myInterval);
                    stopButton.classList.toggle('open');
                    timerOuter.classList.toggle('close');
                    carrotCount.classList.toggle('close')
                    gameClearPopUp.classList.toggle('open');
                    const replayButton = document.querySelector('.game-clear-pop-up .replay-button')
                    replayButton.addEventListener('click', (event)=>{

                        startButton.classList.toggle('close');
                        container.innerHTML=``
                        timerOuter.innerHTML = `
                        <span> 0:0</span>
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
                }

              
            })
        })
    
        const bugs = document.querySelectorAll('.bug');
    
        bugs.forEach((bug)=>{
            
            let randomNumberX =  Math.floor(Math.random()*(1500-150+1))+150; // 인터넷에 있는거 ctrl+c ctrl+v 👍
            let randomNumberY =  Math.floor(Math.random()*(350-100+1))+100;
            bug.style.transform = `translate(${randomNumberX}px, ${randomNumberY}px`
    
    
        })
    
    })
    
    stopButton.addEventListener('click', (event)=>{

        stopButton.classList.toggle('open');
        replayPopUp.classList.toggle('open');
        clearInterval(myInterval)
        timerOuter.classList.toggle('close');
        carrotCount.classList.toggle('close');
        


    })



    replayButton.addEventListener('click', (event)=>{
 
        startButton.classList.toggle('close');
        container.innerHTML=``
        replayPopUp.classList.toggle('open')
        timerOuter.innerHTML = `
                    <span> 0:0</span>
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
