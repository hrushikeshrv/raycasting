let wall1;
const boundaries = [];

function setup() {
    const canvasW = window.innerWidth*0.95;
    const canvasH = window.innerHeight*0.9;
    createCanvas(canvasW, canvasH);
    //Show the canvas width and height on the screen
    document.querySelector('#canvas-info').textContent = `Width: ${canvasW}, Height: ${canvasH}`;
    wall1 = new Boundary(500, 200, 700, 500);
    
    boundaries.push(wall1);
    for (boundary of boundaries) {
        boundary.draw();
    }
}

function draw() {
    
}