let x = 650;
let y = 570;
let r = 20;
let color = "blue";
let vx = 2;
let vy = -2;
function clearCricle() {
    let c = document.getElementById("myCavans");
    let pen = c.getContext("2d");
    pen.clearRect(0,0,1300,600)
}
function penCricle() {
    let c = document.getElementById("myCavans");
    let pen = c.getContext("2d");
    clearCricle();
    pen.beginPath();
    pen.arc(x, y, r, 0, 2 * Math.PI);
    pen.fillStyle = color;
    pen.fill();
    pen.stroke();
    if ( x + vx > 1300 - r||x + vx < r ){
        vx = -vx;
    } else
         if (y + vy > 600 - r|| y + vy < r){
        vy = -vy;
    }
    x += vx;
    y += vy;
}
setInterval(penCricle,10);