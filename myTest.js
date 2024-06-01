var canvas = document.getElementById('output');
var myCanvas = document.getElementById('myCanvas');
var ctx = myCanvas.getContext('2d');
var c = canvas.getContext('2d');

var w = canvas.width;
var h = canvas.height;

var fullScreenWidth = window.innerWidth;
var fullScreenHeight = window.innerHeight;

document.getElementById('inputBox').addEventListener('input', updateText);
document.getElementById('fontColor').addEventListener('input', updateText);
document.getElementById('fontSize').addEventListener('input', updateText);

document.getElementById('shadColor').addEventListener('input', updateText);
document.getElementsByClassName('x')[0].addEventListener('input', updateText);
document.getElementsByClassName('y')[0].addEventListener('input', updateText);
document.getElementById('fontBlur').addEventListener('input', updateText);
document.getElementById('shadOpac').addEventListener('input', updateText);

document.getElementById('strColor').addEventListener('input', updateText);
document.getElementById('strWidth').addEventListener('input', updateText);

// var container = document.getElementsByClassName('container')[0];
// var screen = document.getElementsByClassName('Screen')[0];
// var banner = document.getElementsByClassName('buttons')[0];
var fullScreen = document.getElementsByClassName('fullScreen')[0];
var phone = document.getElementsByClassName('phone')[0];


fullScreen.addEventListener('click', ()=>{
    // canvas.style.display = 'none';
    phone.style.display = 'none';
    myCanvas.style.display = 'block';
    enterFullScreen();
  
});

function enterFullScreen(){
    myCanvas.width = fullScreenWidth;
    myCanvas.height = fullScreenHeight;
    ctx.translate(fullScreenWidth, 0);
    ctx.rotate((Math.PI / 180) * 90);
    ctx.scale(2,2);
    updateFullScreenText();
}

// Function to get the mouse position
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }
  
  // Function to check whether a point is inside a rectangle
  function isInside(pos, rect) {
    return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
  }
  
  // The rectangle should have x,y,width,height properties
  var rect = {
    x: 100,
    y: 700,
    width: 200,
    height: 100,
  };
  
  // Binding the click event on the canvas
//   canvas.addEventListener('click', function(evt) {
//         var mousePos = getMousePos(canvas, evt);
    
//         if (isInside(mousePos, rect)) {
//         console.log('clicked inside rect');
//         } else {
//         console.log('clicked outside rect');
//         }
//   }, false);
  
  // Question code
  function Playbutton(rect, lWidth, fillColor, lineColor) {
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    ctx.fillStyle = 'rgba(225,225,225,0.5)';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.closePath();
    ctx.font = '40pt Kremlin Pro Web';
    ctx.fillStyle = '#000000';
    ctx.fillText('Start', rect.x + rect.width / 4, rect.y + 64);
  }

// c.fillStyle = "pink";
// c.fillRect(0, 0, 100, 100);
// c.fillRect(0, 0, 100, 100);
// c.fillRect(0, 0, 100, 100);

// c.font = "50px Faster One";
// c.fillText("hello World",30, 50);

// TEXT FUNCTIONS

var x = w/2;
var tw;

function updateFullScreenText() {
    const fontSize = document.getElementById('fontSize').value;
    const inputBox = document.getElementById('inputBox').value;
    const fontColor = document.getElementById('fontColor').value;
    const color = document.getElementById('shadColor').value;
    const xsh = document.getElementsByClassName('x')[0].value;
    const ysh = document.getElementsByClassName('y')[0].value;
    const blur = document.getElementById('fontBlur').value;
    const opacity = document.getElementById('shadOpac').value;
    let tmp = opacity/100;
    const strColor = document.getElementById('strColor').value;
    const strWidth = document.getElementById('strWidth').value;

    ctx.clearRect(0, 0, w, h);

    ctx.shadowColor = `${color}`;
    ctx.shadowOffsetX = xsh;
    ctx.shadowOffsetY = ysh;
    ctx.shadowBlur = blur;
    ctx.globalAlpha = tmp;
    ctx.font = `${fontSize}px` + " " + `${fontX}`;
    ctx.fillStyle = `${fontColor}`;
    ctx.textAlign = "center";
    ctx.fillText(`${inputBox}`, x, h/2);
    tw = ctx.measureText(`${inputBox}`).width;
    if(strWidth > 0){
        ctx.strokeStyle = `${strColor}`;
        ctx.lineWidth = strWidth;
        ctx.strokeText(`${inputBox}`, x, h/2);
    } else if(strWidth <= 0){
        ctx.strokeText("", x, h/2);
    }
}

function updateText() {
        const fontSize = document.getElementById('fontSize').value;
        const inputBox = document.getElementById('inputBox').value;
        const fontColor = document.getElementById('fontColor').value;
        const color = document.getElementById('shadColor').value;
        const xsh = document.getElementsByClassName('x')[0].value;
        const ysh = document.getElementsByClassName('y')[0].value;
        const blur = document.getElementById('fontBlur').value;
        const opacity = document.getElementById('shadOpac').value;
        let tmp = opacity/100;
        const strColor = document.getElementById('strColor').value;
        const strWidth = document.getElementById('strWidth').value;

        c.clearRect(0, 0, w, h);

        c.shadowColor = `${color}`;
        c.shadowOffsetX = xsh;
        c.shadowOffsetY = ysh;
        c.shadowBlur = blur;
        c.globalAlpha = tmp;
        c.font = `${fontSize}px` + " " + `${fontX}`;
        c.fillStyle = `${fontColor}`;
        c.textAlign = "center";
        c.fillText(`${inputBox}`, x, h/2);
        tw = c.measureText(`${inputBox}`).width;
        if(strWidth > 0){
            c.strokeStyle = `${strColor}`;
            c.lineWidth = strWidth;
            c.strokeText(`${inputBox}`, x, h/2);
        } else if(strWidth <= 0){
            c.strokeText("", x, h/2);
        }
}

var fontX;

function setFontStyle(fontFamily, element) {
    // const output = document.getElementById('outputT');
    const fontSize = document.getElementById('fontSize').value;
    const inputBox = document.getElementById('inputBox').value;
    const fontColor = document.getElementById('fontColor').value;
    // output.style.fontFamily = fontFamily;

    fontX = fontFamily;
    updateText();

    const fontOptions = document.querySelectorAll('.fontOption');
    fontOptions.forEach(option => option.classList.remove('selected'));

    element.classList.add('selected');
}

// function setShadow(){
//         // var output = document.getElementById("outputT");

//         const fontSize = document.getElementById('fontSize').value;
//         const inputBox = document.getElementById('inputBox').value;
//         const fontColor = document.getElementById('fontColor').value;
        
//         const color = document.getElementById('shadColor').value;
//         const xsh = document.getElementsByClassName('x')[0].value;
//         const ysh = document.getElementsByClassName('y')[0].value;
//         const blur = document.getElementById('fontBlur').value;
//         const opacity = document.getElementById('shadOpac').value;
//         let tmp = opacity/100;


//         // output.style.textShadow = `${xsh}px ${ysh}px ${blur}px ${color}`;
//         // output.style.opacity = tmp;

//         // console.log("shadow color: " + color);
//         // console.log("x SHADOW:" + xsh);
//         // console.log("Y SHADOW: " + ysh);
//         // console.log("BLUR:" + blur);
//         // console.log("RUNNING SETSHADOW");

// }


// function setOutline(){

//         const fontSize = document.getElementById('fontSize').value;
//         const inputBox = document.getElementById('inputBox').value;
//         const fontColor = document.getElementById('fontColor').value;
        
//         const color = document.getElementById('shadColor').value;
//         const xsh = document.getElementsByClassName('x')[0].value;
//         const ysh = document.getElementsByClassName('y')[0].value;
//         const blur = document.getElementById('fontBlur').value;
//         const opacity = document.getElementById('shadOpac').value;
//         let tmp = opacity/100;

//         const strColor = document.getElementById('strColor').value;
//         const strWidth = document.getElementById('strWidth').value;

        
//         // var output = document.getElementById("outputT");

//         // const strColor = document.getElementById('strColor').value;
//         // const strWidth = document.getElementById('strWidth').value;

//         // output.style.webkitTextStrokeColor = strColor;
//         // output.style.webkitTextStrokeWidth = `${strWidth}px`;
// }


// Style Button Click
    document.addEventListener("DOMContentLoaded", () => {
        let shadowBtn = document.getElementById("shadowBtn");
        let outlineBtn = document.getElementById("outlineBtn");

        let shadowContent = document.getElementById("shadowContent");
        let outlineContent = document.getElementById("outlineContent");

        let focus = "";

        shadowBtn.onclick = () => {
            handleBtnClick(shadowBtn, shadowContent);
        }

        outlineBtn.onclick = () => {
            handleBtnClick(outlineBtn, outlineContent);
        }


        function handleBtnClick(button, content) {
            resetBtnColor();
            hideAllContent();
            // if (focus === button.id) {
            //     focus = "";
            //     return;
            // }
            // focus = button.id;
            button.style.backgroundColor = "#FC5A94";
            button.style.color = "white";
            content.hidden = false;
        }

        function hideAllContent() {
            shadowContent.hidden = true;
            outlineContent.hidden = true;
        }

        function resetBtnColor() {
            shadowBtn.style.backgroundColor = "white";
            shadowBtn.style.color = "black";
            outlineBtn.style.color = "black";
            shadowBtn.style.border = "1px solid #FCC5D9"
            outlineBtn.style.backgroundColor = "white";
        }

    });



    // Animation button click
    document.addEventListener("DOMContentLoaded", ()=>{
        let aniBtn = document.getElementById("aniBtn");
        let effBtn = document.getElementById("effBtn");
        let aniCon = document.getElementById("aniContent");
        let effCon = document.getElementById("effContent");

        aniBtn.onclick = ()=>{
            handleBtnClick(aniBtn, aniCon);
        }

        effBtn.onclick = ()=>{
            handleBtnClick(effBtn, effCon);
        }

        function handleBtnClick(button, content){
            hideAllContent();
            resetBtnColor();

            button.style.backgroundColor = "#FC5A94";
            button.style.color = "white";
            content.hidden = false;

        }

        function hideAllContent(){
            aniCon.hidden = true;
            effCon.hidden = true; 
        }

        function resetBtnColor(){
            aniBtn.style.color = "black";
            aniBtn.style.backgroundColor = "white";
            effBtn.style.color = "black";
            effBtn.style.backgroundColor = "white";
            aniBtn.style.border = "1px solid #FCC5D9"
        }

        // let op = document.getElementsByClassName("op00")[2];
        // op.addEventListener("click", ()=>{
        //     setAnimation("blink");
        //     op.style.color = "white";
        //     op.style.backgroundColor = "#FC5A94";

        // })
    });

    var startAni = true;
    var myLoop;
    function animateLoop(){
        myLoop = requestAnimationFrame(animateLoop);
        updateText();
        x -= 1;

        if(x + tw < 0){
            x = w + (tw/2);
        }
            
    }

    function stopLoop(){
        cancelAnimationFrame(myLoop);
    }

    var blinked = true;
    var blinking;
    function animateBlink(){
        blinking = setInterval(()=>{
            c.clearRect(0, 0, w, h);
            if(blinked){
                updateText();
            }
    
        blinked = !blinked;
        }, 500);    // adjust speed in ms
        
    }

    function stopBlink(){
        clearInterval(blinking);
    }



    var charWidth;

    function updateTextSlide(char, slideX, slideY) {
    
            const fontSize = document.getElementById('fontSize').value;
            const fontColor = document.getElementById('fontColor').value;
            const color = document.getElementById('shadColor').value;
            const xsh = document.getElementsByClassName('x')[0].value;
            const ysh = document.getElementsByClassName('y')[0].value;
            const blur = document.getElementById('fontBlur').value;
            const opacity = document.getElementById('shadOpac').value;
            let tmp = opacity/100;
            const strColor = document.getElementById('strColor').value;
            const strWidth = document.getElementById('strWidth').value;

            c.shadowColor = `${color}`;
            c.shadowOffsetX = xsh;
            c.shadowOffsetY = ysh;
            c.shadowBlur = blur;
            c.globalAlpha = tmp;
            c.font = `${fontSize}px` + " " + `${fontX}`;
            c.fillStyle = `${fontColor}`;
            c.textAlign = "center";
            c.fillText(`${char}`, slideX, slideY);
            charWidth = c.measureText(`${char}`).width;
    
            if(strWidth > 0){
                c.strokeStyle = `${strColor}`;
                c.lineWidth = strWidth;
                c.strokeText(`${char}`, slideX, slideY);
            } else if(strWidth <= 0){
                c.strokeText("", slideX, slideY);
            }
    }
    
    var currChar = 0;
    var slideX = w;
    var charArray = [];
    var boolArray = [];
  
    var startX;
    var startX0;
    var addX0 = 0;
    var alignCoordinates = [];

    function getAlignCoordinates(){
        startX = (w-tw)/2;
        startX0 = (w-tw)/2;
        alignCoordinates.push(startX0);
    }

    function preSlide(){
        
        var string = document.getElementById('inputBox').value;
        charArray = string.split('');
        for (let i = 0; i<charArray.length; i++){
            boolArray.push(false);
        }

        for(let i = 0; i<charArray.length; i++){
            updateTextSlide(charArray[i], w+10, h/2);
            startX0 += charWidth;
            alignCoordinates.push(startX0);
        }

        // for(let i = 0; i<alignCoordinates.length; i++){
        //     console.log("<br>" + i + ": " + alignCoordinates[i]);
        // }    
    }

    var mySlide;

    function animateSlide(){
        mySlide = requestAnimationFrame(animateSlide);
        c.clearRect(0, 0, w, h);

        if(currChar < charArray.length){
            if(slideX > startX){
                slideX -= 1;
                updateTextSlide(charArray[currChar], slideX, h/2);
            }
            
            if(slideX <= startX){
                boolArray[currChar] = true;
                currChar += 1;
                slideX = w;
                startX += charWidth;
            }
        } 
    
        for(let i = 0; i<boolArray.length; i++){
            if(boolArray[i]){
                updateTextSlide(charArray[i], alignCoordinates[i], h/2);
            }
        }     
    }

    function stopSlide(){
        cancelAnimationFrame(mySlide);
        currChar = 0;
        boolArray = [];
        charArray = [];
        slideX = w;
    }
    

    function resetAnimation(){
        stopLoop();
        stopBlink();
        stopSlide();
        x = w/2;
        updateText();
    }

    function updateTextFade(opac) {
        const fontSize = document.getElementById('fontSize').value;
        const inputBox = document.getElementById('inputBox').value;
        const fontColor = document.getElementById('fontColor').value;
        
        const color = document.getElementById('shadColor').value;
        const xsh = document.getElementsByClassName('x')[0].value;
        const ysh = document.getElementsByClassName('y')[0].value;
        const blur = document.getElementById('fontBlur').value;
        

        const strColor = document.getElementById('strColor').value;
        const strWidth = document.getElementById('strWidth').value;

        // c.clearRect(0, 0, w, h);

        c.shadowColor = `${color}`;
        c.shadowOffsetX = xsh;
        c.shadowOffsetY = ysh;
        c.shadowBlur = blur;
        c.globalAlpha = opac;
        c.font = `${fontSize}px` + " " + `${fontX}`;
        c.fillStyle = `${fontColor}`;
        c.textAlign = "center";
        c.fillText(`${inputBox}`, x, h/2);
        tw = c.measureText(`${inputBox}`).width;

        if(strWidth > 0){
            c.strokeStyle = `${strColor}`;
            c.lineWidth = strWidth;
            c.strokeText(`${inputBox}`, x, h/2);
        } else if(strWidth <= 0){
            c.strokeText("", x, h/2);
        }
}

    var startFade;
    var setOpacity;
    var currentOpacity;
    var fadeIn = false;
    var fadeOut = false;
    function preFade(){
        const opacity = document.getElementById('shadOpac').value;
        setOpacity = opacity/100;
        currentOpacity = setOpacity;
    }
    function animateFade(){
        startFade = requestAnimationFrame(animateFade);
        c.clearRect(0, 0, w, h);
        if(currentOpacity == setOpacity){
            fadeOut = true;
        }
        if(currentOpacity <= 0){
            fadeIn = true;
        }
        if(fadeOut){
            currentOpacity -= 0.1;
            updateTextFade(currentOpacity);
        }
        if(fadeIn){
            currentOpacity = currentOpacity + 0.1;
            updateTextFade(currentOpacity);
        }
        
    }

    let noAnimation = document.getElementsByClassName('op00')[0];
    let loopText = document.getElementsByClassName('op00')[1];
    let blinkText = document.getElementsByClassName('op00')[2];
    let slideText = document.getElementsByClassName('op00')[3];
    let fadeText = document.getElementsByClassName('op00')[4];

    
    noAnimation.addEventListener('click', resetAnimation);
    loopText.addEventListener('click', ()=>{
        resetAnimation();
        animateLoop();
    });
    blinkText.addEventListener('click', ()=>{
        resetAnimation();
        animateBlink();
    });

    slideText.addEventListener('click', ()=>{
        resetAnimation();

        getAlignCoordinates();
        preSlide();
        animateSlide();
    });
    fadeText.addEventListener('click', ()=>{
        resetAnimation();
        preFade();
        animateFade();
    })




// EFFECTS FUNCTIONS

// COLORFUL EFFECT

    let circles = [];
    let colors = [[255, 192, 203, 1], [0, 128, 0, 1], [255, 0, 0, 1], [128, 0, 128, 1], [184, 255, 128, 1]];

    function init(){
        createObject();
        animationLoop();
    }

    // function resizeReset(){
    //     createObject();
    // }

    function createObject(){
        for(let i=0; i<50; i++){
            circles.push(new Circle(i));
        }
    }

    var myColorLoop;

    function animationLoop(){
        myColorLoop = requestAnimationFrame(animationLoop);
        c.clearRect(0, 0, w, h);
        c.globalCompositeOperation = "lighter";
        
        updateCircles();
        drawScene();
        updateTextSnow();
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
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI *2);
            c.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.color[3]})`;
            c.closePath();
            c.fill();
        }
    }

    function stopColor(){
        cancelAnimationFrame(myColorLoop);
        circles = [];
    }

    

// NEWFIRE EFFECT


    // Define the LED dimensions
    var ledSize = 10;
    var ledGap = 10;
    var LEDeffect;

    // Define the LED colors
    var onColor = "#ffff00";
    var offColor = "#333333";

    // Define the animation speed
    var animationSpeed = 500; // milliseconds per frame

    // Animation loop
    var myTimeout;
    function animateLED() {
      myTimeout = setTimeout(function() {
        LEDeffect = requestAnimationFrame(animateLED);

        // Clear the canvas
        c.clearRect(0, 0, w, h);

        // Draw the LEDs
        
        drawLEDs();
        updateTextSnow();
        
      }, animationSpeed);
      
    }

    

    function stopLED(){
        clearTimeout(myTimeout);
    }

    // Draw the LEDs
    function drawLEDs() {
      for (var x = 0; x < w; x += ledSize + ledGap) {
        for (var y = 0; y < h; y += ledSize + ledGap) {
          // Randomly turn the LED on or off
          var isOn = Math.random() < 0.5;

          // Draw the LED
          c.beginPath();
          c.arc(x + ledSize / 2, y + ledSize / 2, ledSize / 2, 0, 2 * Math.PI);
          c.fillStyle = isOn ? onColor : offColor;
          c.fill();
        }
      }
    }
    


// SNOW EFFECT
    // const c = document.getElementById('snowCanvas');
    // const ctx = c.getContext('2d');
    function updateTextSnow() {
            const fontSize = document.getElementById('fontSize').value;
            const inputBox = document.getElementById('inputBox').value;
            const fontColor = document.getElementById('fontColor').value;
            
            const color = document.getElementById('shadColor').value;
            const xsh = document.getElementsByClassName('x')[0].value;
            const ysh = document.getElementsByClassName('y')[0].value;
            const blur = document.getElementById('fontBlur').value;
            const opacity = document.getElementById('shadOpac').value;
            let tmp = opacity/100;
    
            const strColor = document.getElementById('strColor').value;
            const strWidth = document.getElementById('strWidth').value;
    
            // c.clearRect(0, 0, w, h);

            c.shadowColor = `${color}`;
            c.shadowOffsetX = xsh;
            c.shadowOffsetY = ysh;
            c.shadowBlur = blur;
            c.globalAlpha = tmp;
            c.font = `${fontSize}px` + " " + `${fontX}`;
            c.fillStyle = `${fontColor}`;
            c.textAlign = "center";
            c.fillText(`${inputBox}`, x, h/2);
            tw = c.measureText(`${inputBox}`).width;
    
            if(strWidth > 0){
                c.strokeStyle = `${strColor}`;
                c.lineWidth = strWidth;
                c.strokeText(`${inputBox}`, x, h/2);
            } else if(strWidth <= 0){
                c.strokeText("", x, h/2);
            }
    }




    var totalSnow = 100;
    var listSnow = [];

    const Snow = function () {
        this.x = Math.random()*w;
        this.y = Math.random()*h;
        this.radius = Math.random()*2;
        this.speedX = random(-1, 1);
        this.speedY = random(-1, 1);

        this.draw = function() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, Math.PI*2, false);
            c.fillStyle = 'white';
            c.fill();
            c.closePath();

            // update
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.y > h) {
                this.y = -10;
                this.x = Math.random() * w * 1.5;
            }
        }
    }

    const random = (min, max) => {
        return min + Math.random() * (max - min + 1);
    }

    function initSnow(){
        // resizeCanvas();
        // window.addEventListener('resize', resizeCanvas);
        createSnow();
    }

    // const resizeCanvas = () => {
    //     c.width = window.innerWidth;
    //     c.height = window.innerHeight;
    // }

    function createSnow(){
        for(let i = 0; i < totalSnow; i++ ) {
            listSnow.push(new Snow);
        }
    }

    var mySnow;

    function loop(){
        mySnow = requestAnimationFrame(loop);
        c.clearRect(0, 0, w, h);
        
        c.fillStyle = 'black';
        c.fillRect(0, 0, w, h);
        updateTextSnow();
        
        
        
        listSnow.forEach((snow) => {
            snow.draw();
        });
        
        
    }

    function stopSnow(){
        cancelAnimationFrame(mySnow);
        listSnow = [];
    }

// RAIN EFFECT

    let raindrops = [];
    const numRaindrops = 200;

    class Raindrop {
    constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * -h;
        this.length = Math.random() * 20 + 10;
        this.width = Math.random() * 2;
        this.speed = Math.random() ;
    }

    draw() {
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x, this.y + this.length);
        c.lineWidth = this.width;
        c.strokeStyle = 'white';
        c.stroke();
    }

    update() {
        this.y += this.speed;

        if (this.y > h) {
        this.x = Math.random() * w;
        this.y = Math.random() * -h;
        }
    }
    }

    function initRaindrops() {
    for (let i = 0; i < numRaindrops; i++) {
        raindrops.push(new Raindrop());
    }
    }

    var myRain;
    function animateRain() {
        myRain = requestAnimationFrame(animateRain);
        c.clearRect(0, 0, w, h);
        c.fillStyle = "blue";
        c.fillRect(0, 0, w, h);
        updateTextSnow();

        for (let i = 0; i < raindrops.length; i++) {
            raindrops[i].draw();
            raindrops[i].update();
        }
    }

    
    function stopRain(){
        cancelAnimationFrame(myRain);
        raindrops = [];
    }

    function resetEffects(){
        stopColor();
        stopLED();
        stopSnow();
        stopRain();
        c.clearRect(0, 0, w, h);
    }

// EFFECTS BUTTONS
let colorful = document.getElementById('colorful');
let newfire = document.getElementById("newfire");
let snow = document.getElementById('snow');
let rain = document.getElementById('rain');

    colorful.addEventListener('click', ()=>{
        resetEffects();
        init();
    });

    newfire.addEventListener('click', ()=>{
        resetEffects();
        animateLED();
    });

    snow.addEventListener('click', () => {
        resetEffects();
        initSnow();
        loop();
    });

    rain.addEventListener('click', ()=>{
        resetEffects();
        initRaindrops();
        animateRain();
    });


// NO EFFECTS
    let noEffects = document.getElementById('noEffects');
    noEffects.addEventListener('click', ()=>{
        // window.cancelAnimationFrame(LEDeffect);
        stopLED();
        stopColor();
        stopSnow();
        stopRain();
        c.clearRect(0, 0, w, h);
        updateText();
    });

   

//Button click

    function showContent(contentId) {
        const sections = document.querySelectorAll('.contentSection');
        sections.forEach(section => {
            if (section.id === contentId) {
                section.style.display = 'flex';
            } else {
                section.style.display = 'none';
            }
        });
    }


