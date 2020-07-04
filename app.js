let x, y;
let xspeed, yspeed;
let dvd;
let r, g, b;
let canvasWidth, canvasHeight;
let imageWidth;

function preload() {
    dvd = loadImage("https://cdn.discordapp.com/emojis/708709525879783443.gif?v=1")
}

function setup() {
    let canvasWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let canvasHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    createCanvas(canvasWidth, canvasHeight);
    // createCanvas(800,600);
    x = random(width);
    y = random(height);
    xspeed = 7;
    yspeed = 7;
    pickColour();
}

function draw() {
    background(0);
    // rect(x, y, 80, 60);
    tint(r, g, b);
    image(dvd, x, y);

    x = x + xspeed;
    y = y + yspeed;

    if (x + dvd.width >= width) {
        xspeed = -xspeed;
        x = width - dvd.width;
        pickColour();
    } else if (x <= 0) {
        xspeed = -xspeed;
        x = 0;
        pickColour();
    }

    if (y + dvd.height >= height) {
        yspeed = -yspeed;
        y = height - dvd.height;
        pickColour();
    } else if (y <= 0) {
        yspeed = -yspeed;
        y = 0;
        pickColour();
    }
}

function pickColour() {
    r = random(100, 255);
    g = random(100, 255);
    b = random(100, 255);
}
