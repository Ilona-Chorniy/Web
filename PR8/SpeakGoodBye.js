(function (context) {
    var speakWord = "Good Bye";
    var speakGoodbye = {};

    speakGoodbye.speak = function (name) {
        console.log(speakWord + " " + name);
    }
    context.speakGoodbye = speakGoodbye;
})(window);