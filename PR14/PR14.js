document.addEventListener('DOMContentLoaded', () => {
    let games;
    let currentGame;
    let lights;
    let initialLights; 
    let timerInterval;
    let seconds = 0;
    let victoryAlertShown = false;
    let movesCount = 0;

    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');
    const fieldContainer = document.getElementById('field-container');
    const timer = document.getElementById('timer');
    const target = document.getElementById('target');
    const moves = document.getElementById('moves');

    function generateField() {
        fieldContainer.innerHTML = '';

        if (!lights) return;

        lights.forEach((row, rowIndex) => {
            row.forEach((light, columnIndex) => {
                const lightElement = document.createElement('div');
                lightElement.classList.add('light', light ? 'on' : 'off');
                lightElement.addEventListener('click', () => toggleLights(rowIndex, columnIndex));
                fieldContainer.appendChild(lightElement);
            });
        });
    }

    function toggleLights(row, column) {
        movesCount++;
        moves.textContent = movesCount;

        lights[row][column] = lights[row][column] ? 0 : 1;

        if (column > 0) {
            lights[row][column - 1] = lights[row][column - 1] ? 0 : 1;
        }

        if (column < lights[row].length - 1) {
            lights[row][column + 1] = lights[row][column + 1] ? 0 : 1;
        }

        if (row > 0) {
            lights[row - 1][column] = lights[row - 1][column] ? 0 : 1;
        }

        if (row < lights.length - 1) {
            lights[row + 1][column] = lights[row + 1][column] ? 0 : 1;
        }

        if (lights.every(row => row.every(light => !light)) && !victoryAlertShown) {
            clearInterval(timerInterval);
            victoryAlertShown = true;
            setTimeout(() => {
                alert('Ви перемогли!');
                victoryAlertShown = false;
            }, 1000);
        }

        generateField();
    }

    function startTimer() {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            timer.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

        }, 1000);
    }

    function startGame() {
        fetch('game.json')
            .then(response => response.json())
            .then(data => {
                games = data;
                currentGame = games[Math.floor(Math.random() * games.length)];
                lights = currentGame.initial_state;
                initialLights = JSON.parse(JSON.stringify(lights)); 
                target.textContent = ` ${currentGame.minimum_steps_to_win}`;
                movesCount = 0;
                moves.textContent = movesCount;
                seconds = 0;
                timer.textContent = '00:00';
                generateField();
                startTimer();
            })
            .catch(error => console.error('Помилка:', error));
    }
    
    function restartGame() {
        clearInterval(timerInterval);
        seconds = 0;
        timer.textContent = '00:00';
        movesCount = 0;
        moves.textContent = movesCount;
        lights = JSON.parse(JSON.stringify(initialLights));
        generateField();
        startTimer();
    }
    

    startButton.addEventListener('click', startGame); 

    restartButton.addEventListener('click', restartGame); 
});
