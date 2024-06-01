var canvas = document.getElementById("myCanvas");
var btn = document.getElementById("btn");
var none = document.getElementById("none");

var canvas02 = document.getElementById("myCanvas02");
var btn02 = document.getElementById("btn02");
var none02 = document.getElementById("none02");
var btn03 = document.getElementById("btn03");
var btn04 = document.getElementById("btn04");
var colorful = document.getElementById("colorful");

// canvas.width = window.innerWidth /2;
// canvas.height = window.innerHeight /2;

var c = canvas.getContext('2d');
var c2 = canvas02.getContext('2d');

var canvas03 = document.getElementById('myCanvas03');

var c3 = canvas03.getContext('2d');

// c3.shadowColor = "red";
// c3.shadowOffsetX = 5;
// c3.shadowOffsetY = 5;
// c3.shadowBlur = 5;
// c3.globalAlpha = 0.7;
// c3.font = "50px Arial";
// c3.fillText('hello world', 20, 90);
// c3.strokeStyle = "";
// c3.lineWidth = 0;
// c3.strokeText('', 20, 90);

// c3.fillStyle = "red";
// c3.fillRect(40,40,50,50);



c3.fillStyle = 'black';
c3.fillRect(0, 0, canvas03.width, canvas03.height);

var text = "Hello world!"
c3.font = "50px Arial";
c3.fillStyle = "#000"
c3.fillText(text, 33, 40);
c3.font = "50px Arial";
c3.fillStyle = "red"
c3.fillText(text, 40, 40);
c3.font = "50px Arial";
c3.fillStyle = "cyan";
c3.fillText(text, 47, 40);





// c.fillStyle = "pink";
// c.fillRect(100, 100, 100, 100);
// c.fillRect(200, 200, 100, 100);
// c.fillRect(300, 300, 100, 100);

// Line
// c.beginPath();

// c.moveTo(0, 0);
// c.lineTo(200, 200);
// c.lineTo(300, 300);
// c.strokeStyle = "red";

// c.stroke();


// Arc Circle
// c.beginPath();
// c.arc(200, 500, 30, 0,Math.PI*2, false);
// c.strokeStyle = "blue";
// c.stroke();


// for loop
// for(var i = 0; i < 3; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0,Math.PI*2, false);
//     c.strokeStyle = "blue";
//     c.stroke();
// }

// c.beginPath();
// c.arc(100, 300, 30, 0,Math.PI*2, false);
// c.strokeStyle = "blue";
// c.stroke();

// function Circle(x, y, r, dx, dy){
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.dx = dx;
//     this.dy = dy;

//     this.draw = function(){
//         c.beginPath();
//         c.arc(this.x, this.y, this.r, 0,Math.PI*2, false);
//         c.strokeStyle = "white";
//         c.fillStyle = "white";
//         c.fill();
//         c.stroke();
//     }

//     this.update = function(){
//         if(this.x + this.r > canvas.width || this.x - this.r < 0){
//             this.dx = -this.dx;
//         }
    
//         if(this.y+this.r > canvas.height || this.y-this.r < 0){
//             this.dy = -this.dy;
//         }
        
//         this.x += this.dx;
//         this.y += this.dy;

//         this.draw();
//     }
// }

// var circleArray = [];

// for(var i = 0; i < 40; i++){
//     var x = Math.random() * canvas.width;
//     var y = Math.random() * canvas.height;
//     var dx = 1;
//     var dy = 1;
//     var r = 5;

//     console.log(i);
//     circleArray.push(new Circle(x, y, r, dx, dy));

// }
// var x = 100;
// var dx = 1;
// var radius = 30;
// var y = 300;
// var dy = 2;

var doAnim = true;
function animate(){

    if (doAnim){
        requestAnimationFrame(animate);
        c.clearRect(0,0, canvas.width, canvas.height);

        for(let i = 0; i<circleArray.length; i++){
            circleArray[i].update();
        }
    }

    if (!doAnim){
        c.clearRect(0,0, canvas.width, canvas.height);
       
        return;
    }
    
}

function start(){
    doAnim = true;
    animate();
}

function remove(){
    doAnim = false;
    animate();
}

// animate();

btn.addEventListener('click', start);
none.addEventListener('click', remove);

const grad=c2.createLinearGradient(0,0,280,0);
grad.addColorStop(0, "lightblue");
grad.addColorStop(1, "darkblue");

// c2.font = "50px Arial";
// c2.fillStyle = grad;
// c2.fillText("Hello world", 20, 100);
// c2.strokeStyle = "white";
// c2.strokeText("Hello world", 20, 100);


// loop animation
var text="keep calm";

var x0 = 20;
var x = 20;
var startText = true;

    // c2.font = "50px Arial";
    // c2.fillStyle = grad;
    // c2.fillText(text, x, 70);

function animateText(){

    if(startText){
        requestAnimationFrame(animateText);
        c2.clearRect(0,0,canvas02.width, canvas02.height);
    
        c2.font = "50px Arial";
        c2.fillStyle = grad;
        c2.fillText(text, x, 70);
        // c2.strokeStyle = "white";
        // c2.strokeText(text, x, 70);
        var tw = c2.measureText(text).width;
    
        x += -1;
    
        if(x + tw < 0){
            x = canvas02.width;
        }
    }
    if(!startText){
        c2.clearRect(0,0,canvas02.width, canvas02.height);
    
        c2.font = "50px Arial";
        c2.fillStyle = grad;
        c2.fillText(text, x0, 70);
    }
    

}

function aniText(){
    startText = true;
    animateText();
}

function resetText(){
    startText = false;
    animateText();

    // c2.clearRect(0,0,canvas02.width, canvas02.height);
    
    //     c2.font = "50px Arial";
    //     c2.fillStyle = grad;
    //     c2.fillText(text, x0, 70);
}

btn02.addEventListener('click', aniText);
none02.addEventListener('click', resetText);
// animateText();



// blinking animation
var text02 = "blinking";
var blinked = true;

function animateBlink(){
    setInterval(()=>{
        c2.clearRect(0,0,canvas02.width, canvas02.height);
    
        if(blinked){
            c2.font = "50px Arial";
            c2.fillStyle = grad;
            c2.fillText(text02, x0, 70);
        }
    
        blinked = !blinked;
    }, 500);    // adjust speed in ms

}
// animateBlink();
btn03.addEventListener('click', animateBlink);

// slide animaition
var text03 = "slide";
let lw = c2.measureText(text03).width;
let cw = c2.measureText("s").width;

let charArray = text03.split('');

var x = canvas02.width;
let tmp = 0;
let boolArray = [];
for(var p = 0; p<charArray.length; p++){
    boolArray.push(false);
}

function animateSlide(){
    requestAnimationFrame(animateSlide);
    c2.clearRect(0, 0, canvas02.width, canvas02.height);

    if(tmp < charArray.length){

        if(x > canvas02.width/3){
            x -= 1;
            c2.fillText(`${charArray[tmp]}`, x, 70);
        }
    
        
    }

    if(x == canvas02.width/3 + (cw*tmp)){
        boolArray[tmp] = true;
        tmp += 1;
        x = canvas02.width;
        
    }

    // if(boolArray[tmp-1]){
    //     let x1  = canvas02.width/3 + (cw*(tmp-1));
    //     c2.fillText(`${charArray[tmp-1]}`, x1, 70);

    // }

    for(let i = 0; i<boolArray.length; i++){
        if(boolArray[i]){
            let x1  = canvas02.width/3 + (cw*i);
            c2.fillText(`${charArray[i]}`, x1, 70);
        }
    }
    
}

btn04.addEventListener('click', animateSlide);
// animateSlide();
// for(let i = 0;i<charArray.length; i++){
//     console.log(charArray[i] );
// }



// swipe animation


// colorful effect
        // let canvas, ctx, w, h, circles;
        let w, h;
        let circles = [];
            let colors = [[255, 192, 203, 1], [0, 128, 0, 1], [255, 0, 0, 1], [128, 0, 128, 1], [184, 255, 128, 1]];

            function init(){
                // canvas = document.querySelector("#canvas");
                // ctx = canvas.getContext("2d");
                resizeReset();
                animationLoop();
                
            }

            function resizeReset(){
                w = canvas02.width;
                h = canvas02.height;
                // circles = [];
                createObject();
            }

            function createObject(){
                for(let i=0; i<50; i++){
                    circles.push(new Circle(i));
                }
            }

            function animationLoop(){
                requestAnimationFrame(animationLoop);
                c2.clearRect(0, 0, w, h);
                c2.globalCompositeOperation = "lighter";
                
                updateCircles();
                drawScene();

                updateText();
                
                
            }

            function updateText(){
                c2.font = " 40px Arial";
                c2.fillStyle = "black";
                c2.fillText("hello world", 60, 90);
            }

            function updateCircles() {
                circles.forEach(circle => {
                    circle.update();
                });
            }

            function drawScene(){
                circles.forEach((circle)=>{
                    circle.draw();
                });
            }

            class Circle{
                constructor(i){
                    this.x = Math.random()*w;
                    this.y = Math.random()*h;
                    this.radius = 5;
                    this.color = colors[i % colors.length];
                    this.alpha = 1;
                    this.velX = (Math.random() * 2 - 1);
                    this.velY = (Math.random() * 2 - 1);
                }
                update() {
                    this.x += this.velX;
                    this.y += this.velY;

                    // Reverse direction when hitting the edges
                    if (this.x - this.radius < 0 || this.x + this.radius > w) {
                        this.velX *= -1;
                    }
                    if (this.y - this.radius < 0 || this.y + this.radius > h) {
                        this.velY *= -1;
                    }
                }
                draw(){
                    c2.beginPath();
                    c2.arc(this.x, this.y, this.radius, 0, Math.PI *2);
                    c2.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.color[3]})`;
                    c2.closePath();
                    c2.fill();
                }
            }

            colorful.addEventListener('click', init);




// NEwFIRE EFFECT

             // Get the canvas element
    // var canvas = document.getElementById("myCanvas");
    // var ctx = canvas.getContext("2d");

    // Set the canvas dimensions to the full screen size
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    // Define the LED dimensions
    var ledSize = 10;
    var ledGap = 10;

    // Define the LED colors
    var onColor = "#ffff00";
    var offColor = "#333333";

    // Define the animation speed
    var animationSpeed = 500; // milliseconds per frame

    // Animation loop
    function animate() {
      setTimeout(function() {
        requestAnimationFrame(animate);

        // Clear the canvas
        c2.clearRect(0, 0, canvas02.width, canvas02.height);

        // Draw the LEDs
        drawLEDs();
      }, animationSpeed);
    }

    // Draw the LEDs
    function drawLEDs() {
      for (var x = 0; x < canvas02.width; x += ledSize + ledGap) {
        for (var y = 0; y < canvas02.height; y += ledSize + ledGap) {
          // Randomly turn the LED on or off
          var isOn = Math.random() < 0.5;

          // Draw the LED
          c2.beginPath();
          c2.arc(x + ledSize / 2, y + ledSize / 2, ledSize / 2, 0, 2 * Math.PI);
          c2.fillStyle = isOn ? onColor : offColor;
          c2.fill();
        }
      }
    }

    // Start the animation
    // animate();
    let newfire = document.getElementById("newfire");
    newfire.addEventListener('click', animate);





// SNOW EFFECT
// const c = document.getElementById('snowCanvas');
//         const ctx = c.getContext('2d');

        let totalSnow = 100;
        let listSnow = [];
        let cw02 = canvas02.width;
        let ch02 = canvas02.height;

        const Snow = function () {
            this.x = Math.random()*cw02;
            this.y = Math.random()*ch02;
            this.radius = Math.random()*2;
            this.speedX = random(-1, 1);
            this.speedY = random(-1, 1);

            this.draw = function() {
                c2.beginPath();
                c2.arc(this.x, this.y, this.radius, Math.PI*2, false);
                c2.fillStyle = 'white';
                c2.fill();
                c2.closePath();

                // update
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.y > ch02) {
                    this.y = -10;
                    this.x = Math.random() * cw02 * 1.5;
                }
            }
        }

        const random = (min, max) => {
            return min + Math.random() * (max - min + 1);
        }

        const initSnow = () => {
            // resizeCanvas();
            // window.addEventListener('resize', resizeCanvas);
            createSnow();
        }

        const resizeCanvas = () => {
            c.width = window.innerWidth;
            c.height = window.innerHeight;
        }

        const createSnow = () => {
            for(let i = 0; i < totalSnow; i++ ) {
                listSnow.push(new Snow);
            }
        }

        const loop = () => {
            c2.fillStyle = 'black';
            c2.fillRect(0, 0, cw02, ch02);
            
            listSnow.forEach((snow) => {
                snow.draw();
            });

            requestAnimationFrame(loop);
        }

        // main logic
        // (() => {
        //     initSnow();
        //     loop();
        // })();

        let snow = document.getElementById('snow');
        snow.addEventListener('click', () => {
            initSnow();
            loop();
        });
        


// RAIN EFFECT

    let raindrops = [];
    const numRaindrops = 200;

    class Raindrop {
      constructor() {
        this.x = Math.random() * cw02;
        this.y = Math.random() * -ch02;
        this.length = Math.random() * 20 + 10;
        this.width = Math.random() * 2;
        this.speed = Math.random() ;
      }

      draw() {
        c2.beginPath();
        c2.moveTo(this.x, this.y);
        c2.lineTo(this.x, this.y + this.length);
        c2.lineWidth = this.width;
        c2.strokeStyle = 'white';
        c2.stroke();
      }

      update() {
        this.y += this.speed;

        if (this.y > canvas.height) {
          this.x = Math.random() * cw02;
          this.y = Math.random() * -ch02;
        }
      }
    }

    function initRaindrops() {
      for (let i = 0; i < numRaindrops; i++) {
        raindrops.push(new Raindrop());
      }
    }

    function animate() {
        c2.clearRect(0, 0, cw02, ch02);

      for (let i = 0; i < raindrops.length; i++) {
        raindrops[i].draw();
        raindrops[i].update();
      }

      requestAnimationFrame(animate);
    }

    let rain = document.getElementById('rain');
    rain.addEventListener('click', ()=>{
        initRaindrops();
        animate();
    })
    






