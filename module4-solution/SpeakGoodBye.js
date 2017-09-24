var nsGoodBye = {};
var speakWord = "Good Bye";
nsGoodBye.speakWord = speakWord;

(function (window) {
    var byeSpeaker = {};
    byeSpeaker.speak = function speak(name) {
        console.log(nsGoodBye.speakWord + " " + name);
    };

    window.byeSpeaker = byeSpeaker;
})(window);