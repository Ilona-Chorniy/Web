//Варіант 2//
window.onload = function() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var array = [];
    for (var i = 0; i < 20; i++) { //Генерує 20 випадкових чисел//
        array.push(getRandomInt(1, 100)); 
    }

    //Сортує за зростанням//
    array.sort(function(a, b) {
        return a - b;
    });

    var sortedArrayElement = document.getElementById('sortedArray');
    sortedArrayElement.innerHTML = 'Відсортований масив: ' + array.join(', ');
}


function generateDiv() {
    var height = document.getElementById("heightSelect").value;
    var color = "blue";
    var width = "30px";
    var divElement = document.createElement("div");
    divElement.style.backgroundColor = color;
    divElement.style.width = width;
    divElement.style.height = height + "px";
    divElement.style.position = "relative"; 
    document.getElementById("generatedDiv").innerHTML = "";
    document.getElementById("generatedDiv").appendChild(divElement);

    var moveLeftButton = document.createElement("button");
    moveLeftButton.textContent = "Left";
    moveLeftButton.onclick = function() {
        var currentPosition = parseInt(divElement.style.left) || 0;
        divElement.style.left = (currentPosition - 20) + "px";
    };
    document.getElementById("generatedDiv").appendChild(moveLeftButton);

    var moveRightButton = document.createElement("button");
    moveRightButton.textContent = "Right";
    moveRightButton.onclick = function() {
        var currentPosition = parseInt(divElement.style.left) || 0;
        divElement.style.left = (currentPosition + 20) + "px";
    };
    document.getElementById("generatedDiv").appendChild(moveRightButton);

}


