document.getElementById("Start").addEventListener("click", function() {
    var selectedColor = document.getElementById("Color").value;
    var selectedLevel = document.getElementById("level").value;
    var playerIcons = document.getElementsByClassName("player-icon");
    var timeLimit;

    function startTimer() {
        clearInterval(timer);
        timer = setInterval(function() {
            updateTime();
        }, 1000);
    }

    function updateTime() {
        timeLimit--;
        document.getElementById("time").textContent = timeLimit;

        if (timeLimit <= 0) {
            clearInterval(timer);
            alert("Час вичерпано!");
            location.reload(); 
        }
    }

    
    function resetTime() {
        timeLimit = initialTimeLimit;
        document.getElementById("time").textContent = timeLimit;
    }

  
    document.getElementById("menu").style.display = "none";

    for (var i = 0; i < playerIcons.length; i++) {
        playerIcons[i].style.display = "none";
    }

    var playerIconToShow = document.querySelector("." + selectedColor);
    if (playerIconToShow) {
        playerIconToShow.style.display = "inline-block";
    }

    switch(selectedLevel) {
        case "Lazy":
            timeLimit = 10; 
            break;
        case "Medium":
            timeLimit = 7; 
            break;
        case "Impossible":
            timeLimit = 5; 
            break;
        default:
            timeLimit = 10; 
            break;
    }

    
    var initialTimeLimit = timeLimit;

    document.getElementById("time").textContent = timeLimit;

    document.getElementById("game").style.display = "block";
    document.getElementById("player").style.display = "block";

    var timer;

    startTimer();

    
    var playerIcons = document.querySelectorAll(".player-icon");
    playerIcons.forEach(function(icon) {
        icon.addEventListener("click", function() {
            var score = parseInt(document.getElementById("score").textContent);
            document.getElementById("score").textContent = score + 1;
            
           
            var randomTop = Math.floor(Math.random() * (window.innerHeight - 100));
            var randomLeft = Math.floor(Math.random() * (window.innerWidth - 100));
            icon.style.position = "absolute"; 
            icon.style.top = randomTop + "px";
            icon.style.left = randomLeft + "px";

          
            resetTime();
        });
    });
});
