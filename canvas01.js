var myCanvas = document.getElementById('myCanvas');
var ctx = myCanvas.getContext('2d');

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

ctx.fillStyle="black";
ctx.fillRect(0,0,myCanvas.width,myCanvas.height);

function getMetrics(text, font){
    ctx.font = `${font}`;
    // ctx.fillStyle = "white";
    ctx.fillText(`${text}`, 0, 0);
    return ctx.measureText(`${text}`);
}

// console.log("getmetrics: " + getMetrics("hello", "100px Arial").height);

// replace metrics.height with 100px

function neonLightEffect() {
    var text = "distorted heart('"+String.fromCharCode(0x2665)+"')";
    var font = "60px Arial";
    var jitter = 25; // the distance of the maximum jitter
    var offsetX = 30;
    var offsetY = 70;
    var blur = 100;
    // save state
    ctx.save();
    ctx.font = font;

    // calculate width + height of text-block
    var metrics = getMetrics(text, font);

    // create clipping mask around text-effect
    ctx.rect(offsetX - blur/2, offsetY - blur/2,
            offsetX + metrics.width + blur, 100 + blur);
    ctx.clip();

    // create shadow-blur to mask rainbow onto (since shadowColor doesn't accept gradients)
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.shadowColor = "rgba(0,0,0,1)";
    ctx.shadowOffsetX = metrics.width + blur;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = blur;
    ctx.fillText(text, -metrics.width + offsetX - blur, offsetY + 100);
    ctx.restore();

    // create the rainbow linear-gradient
    var gradient = ctx.createLinearGradient(0, 0, metrics.width, 0);
    gradient.addColorStop(0, "rgba(255, 0, 0, 1)");
    gradient.addColorStop(0.15, "rgba(255, 255, 0, 1)");
    gradient.addColorStop(0.3, "rgba(0, 255, 0, 1)");
    gradient.addColorStop(0.5, "rgba(0, 255, 255, 1)");
    gradient.addColorStop(0.65, "rgba(0, 0, 255, 1)");
    gradient.addColorStop(0.8, "rgba(255, 0, 255, 1)");
    gradient.addColorStop(1, "rgba(255, 0, 0, 1)");

    // change composite so source is applied within the shadow-blur
    ctx.globalCompositeOperation = "source-atop";

    // apply gradient to shadow-blur
    ctx.fillStyle = gradient;
    ctx.fillRect(offsetX - jitter/2, offsetY,
                metrics.width + offsetX, 100 + offsetY);

    // change composite to mix as light
    ctx.globalCompositeOperation = "lighter";

    // multiply the layer
    ctx.globalAlpha = 0.7
    ctx.drawImage(ctx.canvas, 0, 0);
    ctx.drawImage(ctx.canvas, 0, 0);
    ctx.globalAlpha = 1;

    // draw white-text ontop of glow
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.fillText(text, offsetX, offsetY + 100);

    // created jittered stroke
    ctx.lineWidth = 0.80;
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    var i = 10; while(i--) { 
        var left = jitter / 2 - Math.random() * jitter;
        var top = jitter / 2 - Math.random() * jitter;
        ctx.strokeText(text, left + offsetX, top + offsetY + 100);
    }    
    ctx.strokeStyle = "rgba(0,0,0,0.20)";
    ctx.strokeText(text, offsetX, offsetY + 100);
    ctx.restore();
    };
    
    neonLightEffect();


    function test(){
        var str  = "hello world";
        var gradient = ctx.createLinearGradient(0, 0, 300, 0);
        gradient.addColorStop(0, "rgba(255, 0, 0, 1)");
        gradient.addColorStop(0.15, "rgba(255, 255, 0, 1)");
        gradient.addColorStop(0.3, "rgba(0, 255, 0, 1)");
        gradient.addColorStop(0.5, "rgba(0, 255, 255, 1)");
        gradient.addColorStop(0.65, "rgba(0, 0, 255, 1)");
        gradient.addColorStop(0.8, "rgba(255, 0, 255, 1)");
        gradient.addColorStop(1, "rgba(255, 0, 0, 1)");

        ctx.fillStyle = gradient;
        ctx.fillRect(50,50,250,200);
    }
    
    // test();