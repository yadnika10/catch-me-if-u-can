const target = document.getElementById("move-div");
target.innerText = "Catch Me"
target.style.color = "white";

function getRandomPosition(){
    const width = window.innerWidth - target.clientWidth;
    const height = window.innerHeight - target.clientHeight;

    const randomX = Math.random() * width;
    const randomY = Math.random() * height;

    return { x: randomX, y: randomY};
}

function moveTarget(){
    const newPosition = getRandomPosition();
    target.style.left = newPosition.x + "px";
    target.style.top = newPosition.y + "px";
}

target.addEventListener('mouseover',moveTarget);
moveTarget();