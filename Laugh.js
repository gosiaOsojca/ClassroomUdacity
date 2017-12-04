/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(y) {
    var message = "";
    for (var i = 0; i < y; i++) {
        message += "ha";
    }
    return message + "!";
}

console.log(laugh(10));
