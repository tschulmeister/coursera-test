(function () {
    // array of names which will be referenced several times
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    // convenience function for highlighting output
    var printSeparater = function () {
        console.log("---------------------------");
    };

    // uses the speak() function to print a greeting to the console for the given name
    var printGreeting = function (name) {
        if (name.charAt(0).toLowerCase() === 'j')
            byeSpeaker.speak(name);
        else
            helloSpeaker.speak(name);
    };

    // uses the speakSimple() function to return a greeting for the given name
    var returnGreeting = function (name) {
        if (name.charAt(0).toLowerCase() === 'j')
            return byeSpeaker.speakSimple(name);
        else
            return helloSpeaker.speakSimple(name);
    };

    // begin code execution

    // loop through the names array and print greetings
    for (var i = 0; i < names.length; i++)
        printGreeting(names[i]);

    printSeparater();

    // use map() to loop through the names array and compute a new array with the greetings
    var allGreetings = names.map(returnGreeting);
    for (i in allGreetings)
        console.log(allGreetings[i]);

    printSeparater();

    // use reduce() to loop through the names array and compile two separate arrays for hellos and goodbyes
    var separateGreetings = names.reduce(function (result, name) {
        if (name.charAt(0).toLowerCase() === 'j')
            result.bye.push(byeSpeaker.speakSimple(name));
        else
            result.hello.push(helloSpeaker.speakSimple(name));
        return result;
    }, {hello: [], bye: []});

    for (i in separateGreetings.hello)
        console.log(separateGreetings.hello[i]);
    for (i in separateGreetings.bye)
        console.log(separateGreetings.bye[i]);
})();