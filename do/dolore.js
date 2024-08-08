// An example function that might create a point object
function point(x) {
    return { x: x }; // Simple point with just an x coordinate
}

// Variables for example purposes
let minX = 0;
let span = 10;
let minSteps = 5;
let prev = [];

// Loop to generate points
for (let i = 0; i <= minSteps; i++) {
    prev.push(point(minX + (i / minSteps) * span));
}

// Output the generated points
console.log(prev);
