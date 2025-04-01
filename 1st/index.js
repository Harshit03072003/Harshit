function delayedMessage() {
    const userName = prompt('What is your name?');
    setTimeout(function () {
        console.log(`Hello, ${userName}`);
    }, 0);
}
