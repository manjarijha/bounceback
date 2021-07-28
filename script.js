// let canva = document.getElementById("canvasdraw")
// let obj = canva.getContext("2d")
// obj.font='30px sans-serif';
// obj.strokeText("MJ IS IS A GREAT DANCER", 12 , 200);

// function myimage ()
// {
// let canva = document.getElementById("canvasdraw")
// let obj = canva.getContext("2d")
// let img = document.getElementById("image")
// obj.drawImage(img, -10, -10);
// }

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// // fillRect ()
// ctx.fillStyle='red';
// ctx.fillRect(20,20,100,200)
// ctx.fillStyle = 'blue';
// ctx.fillRect(150,20,100,200)

// //strokeRect
// ctx.lineWidth=5;
// ctx.strokeStyle='violet';
// ctx.strokeRect(300, 100, 150, 100);

// //filltext
// ctx.font='60px sans-serif';
// ctx.fillStyle = 'blue';
// ctx.fillText('hello mj', 200, 300);



// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(250, 50);
// ctx.lineTo(150,200);
// ctx.closePath();
// ctx.fill();
// ctx.fillStyle='blue';
// ctx.stroke();



// ctx.beginPath();
// ctx.moveTo(400,50)
// ctx.lineTo(250,200)
// ctx.lineTo(400,200)
// ctx.closePath();
// ctx.stroke();

//smiley face drawing starts

// ctx.beginPath();
// const centerX = canvas.width/2;
// const centerY = canvas.height/2;
// ctx.arc(canvas.width/2, canvas.height/2, 200,0, Math.PI*2 );


// //move to mouth 
// ctx.moveTo(centerX + 100, centerY);
// //draw mouth 
// ctx.arc(centerX, centerY,100,0, Math.PI, false)

// //move to left eye
// ctx.moveTo(centerX -60 , centerY-80);
// //draw left eye 
// ctx.arc(centerX -80, centerY- 80 ,20,0, Math.PI *2 )

// //move to right eye
// ctx.moveTo(centerX + 100 , centerY-80);
// //draw right eye 
// ctx.arc(centerX +80, centerY- 80 ,20,0, Math.PI *2 )

// ctx.stroke();

// //face drawing ends 

const circle =
{
    x : Math.floor(Math.random() *100),
    y :  Math.floor(Math.random() *200),
    size : 25,
    dx : 12,
    dy : 5
}
function drawCircle() 
{
    ctx.beginPath();
    ctx.arc(circle.x, circle.y,circle.size , 0, Math.PI *2);
    ctx.fillStyle = 'black';
    ctx.fill();
}
function update()
{

ctx.clearRect(0, 0, canvas.width, canvas.height);
drawCircle();

//change position 
circle.x += -circle.dx;
circle.y += circle.dy;

//detect side walls 
if (circle.x + circle.size > canvas.width || circle.x - circle.size <0)
{
circle.dx *= -1;
}

//detect top and bottom heights
if (circle.y + circle.size > canvas.height || circle.y - circle.size <0)
{
circle.dy *= -1;
}

requestAnimationFrame(update);

}
update();