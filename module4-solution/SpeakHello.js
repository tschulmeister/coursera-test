var nsHello = {};
var speakWord = "Hello";
nsHello.speakWord = speakWord;

(function (window) {
    var helloSpeaker = {};
    helloSpeaker.speak = function speak(name) {
        console.log(nsHello.speakWord + " " + name);
    };

    window.helloSpeaker = helloSpeaker;
})(window);