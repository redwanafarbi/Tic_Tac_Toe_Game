let boxs = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let winningMsg = document.querySelector('#msg');
let newGame = document.querySelector('#new-game');
let msgContainer = document.querySelector('.msg-container');

let turn0 = true;

let winningPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let iswinner = false;
let count = 0;


const disabledBoxs = () => {
    boxs.forEach((box) => {
        box.disabled = true;
        box.style.backgroundColor = '#EEE4B1';
    })
}

const enableBoxs = () => {
    turn0 = true;
    count = 0
    boxs.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = '#EFEFEF';
    })
}

boxs.forEach((box) => {
    box.addEventListener('click', () => {

        if (turn0 == true) {
            box.innerText = "O";
            turn0 = false;
            console.log("Box has been clicked: O");
        } else {
            box.innerText = 'X';
            turn0 = true;
            console.log("Box has been clicked: X");
        }

        box.disabled = true;
        box.style.backgroundColor = '#EEE4B1';

        checkWinner();

        count++;

        if (count === 9 && !iswinner) {
            drawMatch();
        }
    })

})


const drawMatch = () => {
    winningMsg.innerText = `Game was draw. Please start again.`
    msgContainer.classList.remove("hide");
}

const showWinner = (winPlayer) => {
    winningMsg.innerText = `Congratulations! Player "${winPlayer}" win.`;
    msgContainer.classList.remove("hide");
    disabledBoxs();
}

const checkWinner = () => {
    for (let patterns of winningPatterns) {
        let pos1Val = boxs[patterns[0]].innerText;
        let pos2Val = boxs[patterns[1]].innerText;
        let pos3Val = boxs[patterns[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner");
                winner = true;
                showWinner(pos1Val);
            }
        }
    }
}

resetBtn.addEventListener('click', () => {
    enableBoxs();
})

newGame.addEventListener('click', () => {
    enableBoxs();
    msgContainer.classList.add("hide");
})