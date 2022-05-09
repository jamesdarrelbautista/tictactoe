

const gameBoard = (() => {
    let gameBoard = [];
    let boardDisplay = () => {
        let grid = document.querySelector('.grid');
        for (let index = 0; index < 3; index++) {
            for (let jIndex = 0; jIndex < 3; jIndex++) {
                let div = document.createElement('div');
                div.classList.add('boxes');
                grid.appendChild(div);
            }
        }
    }
    


    return { boardDisplay }
})();


gameBoard.boardDisplay();

const players = () => {

}

const displayController = () => {

}



