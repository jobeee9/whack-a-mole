function myFunction() { //what happens after clicking the start button
    document.body.classList.toggle("start");
    image.classList.toggle("hidden");
    document.getElementById('start').style.display = 'none';
    document.getElementById('video-background').style.display = 'none';
    document.getElementById('Famdiglet').style.display = 'none';
    document.getElementById('Famdiglet1').style.display = 'none';
    document.getElementById('board').style.display = 'flex';
    document.getElementById('lives').style.display = 'flex';
    document.getElementById('score').style.display = 'inline-block';
    }

window.onload = function() {
    startGame();
    setLives();
}

function startGame() {
    for (let i = 0; i < 9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", clickedTile);
        document.getElementById("board").appendChild(tile);
        tile.isClicked = false;
    }
    setInterval(setDiglett, 1500); //1500 miliseconds = 1.5 second
    setInterval(setElectrode, 2000); //2000 miliseconds = 2 seconds
}

function setLives() { //lives container
    for (let a = 0; a < 3; a++){
        let heart = document.createElement("div");
        heart.id = a.toString();
        document.getElementById("lives").appendChild(heart);
    }
}

let diglettTile;

function randomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setDiglett() { //diglett
    if(diglettTile) {
        diglettTile.innerHTML = "";
    }

    let diglett = document.createElement("img")
    diglett.src = "diglett.png";

    let num = randomTile();
    if(electrodeTile && electrodeTile.id == num) {
        return;
    }
    diglettTile = document.getElementById(num);
    diglettTile.appendChild(diglett);
    diglettTile.isClicked = false;
}

let scoreValue = 0;
let lives = 3;

function clickedTile() { //kung a click daw ang title kay:
    if (this == diglettTile && !this.isClicked) {
        scoreValue += 1;
        document.getElementById("scoreValue").innerText = scoreValue.toString();
        this.isClicked = true;

    } else if (this == electrodeTile && !this.isClicked) {
        lives -= 1;

        let livesContainer = document.getElementById('lives');
        let hearts = livesContainer.getElementsByTagName('div');

        if (hearts.length > 0) {
            livesContainer.removeChild(hearts[hearts.length - 1]);
        }

        this.isClicked = true;

        if (lives === 0) {
            gameOver();
        }
    }
}

function gameOver() { //game over text
    document.getElementById('score').innerText = "Game Over!";
}

let electrodeTile;

function setElectrode() { //electrode
    if(electrodeTile) {
        electrodeTile.innerHTML = "";
    }

    let electrode = document.createElement("img");
    electrode.src = "electrode.png";

    let num = randomTile();
    if(diglettTile && diglettTile.id == num) {
        return;
    }
    electrodeTile = document.getElementById(num);
    electrodeTile.appendChild(electrode);
}