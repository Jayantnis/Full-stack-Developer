const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("", inputs => {
    // console.log(inputs);
    var ch = inputs;
    e = '';
    for (let x = ch.charCodeAt(ch.charAt(0)); x <= ch.charCodeAt(ch.length - 1); x++) {
        e += String.fromCharCode(x);
    }
    console.log(e + " ");

    readline.close();
});