async function handleRequest() {
    const init = {
        headers: {
            'content-type': 'text/html;charset=UTF-8',
        },
    }
    return new Response(someHTML, init)
}
addEventListener('fetch', event => {
    return event.respondWith(handleRequest())
})
const someHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Meta tags -->
    <meta charset="utf-8">
    <meta property="og:title" content="Poggers Fish"/>
    <meta property="og:description" content="Look at the fish, he is pogging!"/>
    <meta property="og:image" content="https://cdn.discordapp.com/emojis/708709525879783443.gif?v=1"/>
    <!-- Twitter tags -->
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="Poggers Fish"/>
    <meta name="twitter:description" content="Look at the fish, he is pogging!"/>
    <meta name="twitter:image" content="https://cdn.discordapp.com/emojis/708709525879783443.gif?v=1"/>
    <title>POGGERSFISH!</title>
    <link rel="icon" type="image/png" href="https://media.discordapp.net/attachments/662107547972534305/728763624583331840/poggersfish.png"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/addons/p5.sound.min.js"></script>
    <!-- <link rel="stylesheet" type="text/css" href="style.css"> -->
    <style>html, body {
    background-color: black;
    margin: 0;
    padding: 0;
}
canvas {
    display: block;
}</style>
</head>

<body>
    <script>let x, y;
let xspeed, yspeed;
let dvd;
let r, g, b;
let canvasWidth, canvasHeight;
let imageWidth;
let speed;

function preload() {
    dvd = loadImage("https://cdn.discordapp.com/emojis/708709525879783443.gif?v=1")
}

function setup() {
    let canvasWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let canvasHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    createCanvas(canvasWidth, canvasHeight);
    x = random(width);
    y = random(height);
    // x = dvd.height + 72;
    // y = dvd.height + 72;
    speed = 7
    xspeed = -speed;
    yspeed = -speed;
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
        edge(x,y,'x');
    } else if (x <= 0) {
        xspeed = -xspeed;
        x = 0;
        pickColour();
        edge(x,y,'x');
    }

    if (y + dvd.height >= height) {
        yspeed = -yspeed;
        y = height - dvd.height;
        pickColour();
        edge(x,y,'y');
    } else if (y <= 0) {
        yspeed = -yspeed;
        y = 0;
        pickColour();
        edge(x,y,'y');
    }
}

function edge(x, y, ignore) {
    if (ignore == 'y') {
        if (x + dvd.width >= width) {
            x = width - dvd.width;
            alert("IT HIT THE CORNER! POGGERS!!!");
        } else if (x <= 0) {
            x = 0;
            alert("IT HIT THE CORNER! POGGERS!!!");
        }
    }
    if (ignore == 'x') {
        if (y + dvd.height >= height) {
            y = height - dvd.height;
            alert("IT HIT THE CORNER! POGGERS!!!");
        } else if (y <= 0) {
            y = 0;
            alert("IT HIT THE CORNER! POGGERS!!!");
        }
    }
}

function pickColour() {
    r = random(100, 255);
    g = random(100, 255);
    b = random(100, 255);
}
</script>
</body>

</html>`