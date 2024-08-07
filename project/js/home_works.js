//move block

// document.addEventListener('DOMContentLoaded', () => {
//
//     const parentBlock=document.querySelector('.parent_block');
//     const childBlock=document.querySelector('.child_block');
//
//     let positionX=0
//     let positionY=0
//
//     const moveBlock=() => {
//         if (positionX < parentBlock.offsetWidth - childBlock.offsetWidth) {
//             positionX++;
//             childBlock.style.left = `${positionX}px`;
//             requestAnimationFrame(moveBlock);
//         }
//     };
//     moveBlock();
// });

//GMAIL VALIDATION
const gmailInput
    =document.querySelector('#gmail_input');
const gmailButton=document.querySelector('#gmail_button');
const gmailSpan=document.querySelector('#gmail_result');

const regExp=/^[a-zA-Z0-9._%+-]{2,}@gmail\.com$/;

gmailButton.onclick= () =>{
    if (regExp.test(gmailInput.value)){
        gmailSpan.innerHTML='OK'
        gmailSpan.style.color='green'
    } else {
        gmailSpan.innerHTML='NOT OK'
        gmailSpan.style.color='red'
    }
};

//COUNTER
document.addEventListener('DOMContentLoaded', () => {
    const startButton= document.querySelector('#start');
    const stopButton=document.querySelector('#stop');
    const resetButton=document.querySelector('#reset');
    const secondDisplay=document.querySelector('#seconds');

    let counter=0;
    let intervalId=null;

    const startCounter = () => {
        if (!intervalId) {
            intervalId = setInterval(() => {
                counter++;
                secondDisplay.textContent = counter;
            }, 1000);
        }
    };

const stopCounter = ()=> {
    if (intervalId){
        clearInterval(intervalId);
        intervalId=null;
    }
};

const resetCounter= ()=> {
    stopCounter();
    counter=0;
    secondDisplay.textContent=counter;
};

startButton.addEventListener('click', startCounter);
stopButton.addEventListener('click', stopCounter);
resetButton.addEventListener('click', resetCounter);
});

//MOVE BLOCK 2
document.addEventListener('DOMContentLoaded', () => {

    const parentBlock=document.querySelector('.parent_block');
    const childBlock=document.querySelector('.child_block');

    let positionX=0
    let positionY=0
    let directionX=1
    let directionY=1


    const moveBlock=() => {
        if (positionX+ directionX > parentBlock.offsetWidth - childBlock.offsetWidth || positionX+directionX<0) {
            directionX=-1
        }
        if (positionY+directionY > parentBlock.offsetHeight - childBlock.offsetHeight || positionY+directionY<0) {
            directionY=-1
        }
        positionX+=directionX;
        positionY+=directionY;


        childBlock.style.left='${positionX}px';
        childBlock.style.top=`${positionY}px`;

        requestAnimationFrame(moveBlock)

    };
    moveBlock();
});
