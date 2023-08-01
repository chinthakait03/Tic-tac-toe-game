let btnRef = document.querySelectorAll(".button-option");

let popupRef = document.querySelector(".popup");

let newgameBtn = document.getElementById("new-game");

let restartBtn = document.getElementById("restart");

let msgRef = document.getElementById("message");

let winnerPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
];

let xturn = true;
let count = 0;

const diabbleButtons = () => {
    btnRef.forEach((element) => {
        element.disabled = true
    })

    popupRef.classList.remove('hide')
}


const enableButton = () => {

    btnRef.forEach(element => {
        element.innerText = ''
        element.disabled = false

    })

    popupRef.classList.add('hide')
}



const winFunction = (letter) => {

    diabbleButtons()
    if (letter == "X") {
        msgRef.innerHTML = "&#x1F389; <br> 'X' Wins"
    } else {

        msgRef.innerHTML = "&#x1F389; <br> 'o' Wins"
    }

}

const drawFunction = () => {

    diabbleButtons()
    msgRef.innerHTML = "&#x1F60E; <br> It is Draw";
}


newgameBtn.addEventListener("click", () => {

    count = 0
    enableButton()
})


restartBtn.addEventListener("click", () => {

    count = 0
    enableButton();
})









const winChecker = () => {

    for (let i of winnerPattern) {
        let [element1, element2, element3] = [

            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText

        ]

        if (element1 != '' && element2 != '' & element3 != '') {

            if (element1 == element2 && element2 == element3) {

                winFunction(element1)
            }
        }
    }
}


btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xturn) {
            xturn = false;
            element.innerText = "X";
            element.disabled = true;

        } else {
            xturn = true;
            element.innerText = "O";
            element.disabled = true;

        }
        count += 1;
        if (count === 9) {
            drawFunction()
        }
        winChecker();


    })
})

window.onload = enableButton

