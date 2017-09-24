var nsGoodBye = {};
var speakWord = "Good Bye";
nsGoodBye.speakWord = speakWord;

(function (window) {
    var byeSpeaker = {};
    byeSpeaker.speak = function speak(name) {
        console.log(nsGoodBye.speakWord + " " + name);
    };

    byeSpeaker.speakSimple = function speakSimple(name) {
        return nsGoodBye.speakWord + " " + name;
    };

    window.byeSpeaker = byeSpeaker;
})(window);