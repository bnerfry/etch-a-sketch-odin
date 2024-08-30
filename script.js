const container = document.querySelector('.container');
const resetButton = document.getElementById('resetButton');

function createGrid(squaresPerSide) {
    container.innerHTML = '';

    const squareSize = 960 / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            const randomPastelColor = `rgb(${randomPastelValue()}, ${randomPastelValue()}, ${randomPastelValue()})`;
            square.style.backgroundColor = randomPastelColor;
        });

        container.appendChild(square);
    }
}

function randomPastelValue() {
    return Math.floor(Math.random() * 128) + 127;
}

resetButton.addEventListener('click', () => {
    let squaresPerSide = prompt('Enter the number of squares per side (maximum 100):');

    squaresPerSide = parseInt(squaresPerSide);
    if (squaresPerSide && squaresPerSide > 0 && squaresPerSide <= 100) {
        createGrid(squaresPerSide);
    } else {
        alert('Please enter a number between 1 and 100.');
    }
});

createGrid(16);
