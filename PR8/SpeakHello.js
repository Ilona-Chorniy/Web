(function (context) {
    var speakHello = {};
    var speakWord = "Hello";

    speakHello.speak = function (name) {
        console.log(speakWord + " " + name);
    }
    
    context.speakHello = speakHello;
})(window);