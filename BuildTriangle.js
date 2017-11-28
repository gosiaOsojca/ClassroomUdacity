/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(height) {
    var triangle = "";
    for (var h = 1; h <= height; h++) {
        triangle += (makeLine(h));
    }
    return triangle;
}
buildTriangle(10);
console.log (buildTriangle(10));
