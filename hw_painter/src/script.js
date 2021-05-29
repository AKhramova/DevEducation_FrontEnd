var helpers = {
    drawLine(ctx, x, y) {
        ctx.beginPath();
        ctx.moveTo(x, y);    
    },
    colorChange(ctx, tempColor) {
        ctx.strokeStyle = tempColor;
    },
    sizeChange(ctx, tempThickness) {
        ctx.lineWidth = tempThickness;
    },
    onPaint(ctx, x, y) {
        ctx.lineTo(x, y);
        ctx.stroke();
    },
    clearCanvas(ctx, canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#F1F2EB';
    },
    saveFileImg(canvas, body) {
        var img = document.createElement('a');
        body.appendChild(img);
        img.href = canvas.toDataURL();
        img.download = 'img.png';
        img.click();
        body.removeChild(img);
    },
    saveFileJson(canvas, body) {
        var json = document.createElement('a');
        body.appendChild(json);
        json.href = canvas.toDataURL();
        json.download = 'img.json';
        json.click();
        body.removeChild(json);
    }
}



var paint = function(){
    var canvas = document.getElementById('canvas');
    var color = document.getElementById('color');
    var size = document.getElementById('size');
    var clearBtn = document.getElementById('clear-btn');
    var saveBtnImg = document.getElementById('save-btn-picture');
    var saveBtnJSON = document.getElementById('save-btn-json');
    var ctx = canvas.getContext('2d');
    var paintStyle = getComputedStyle(canvas);
    var brush = { x: 0, y: 0 };
    canvas.width = parseInt(paintStyle.getPropertyValue('width'));
    canvas.height = parseInt(paintStyle.getPropertyValue('height'));
    ctx.fillStyle = '#F1F2EB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas.addEventListener('mousemove', function(e) {
        brush.x = e.pageX - this.offsetLeft;
        brush.y = e.pageY - this.offsetLeft + 300;
    });

    function paintHandler(){
        helpers.onPaint(ctx, brush.x, brush.y);
    }

    canvas.addEventListener("mousedown", () => {
        helpers.drawLine(ctx, brush.x, brush.y)
        canvas.addEventListener('mousemove', paintHandler, false);
    })
    canvas.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove', paintHandler, false);
    })
    color.addEventListener("change", () => {
        helpers.colorChange(ctx, color.value);
    })
    size.addEventListener("change", () => {
        helpers.sizeChange(ctx, size.value);
    })
    clearBtn.addEventListener("click", () => {
        helpers.clearCanvas(ctx, canvas);
    })
    saveBtnImg.addEventListener("click", () => {
        helpers.saveFileImg(canvas, document.body);
    })
    saveBtnJSON.addEventListener("click", () => {
        helpers.saveFileJson(canvas, document.body);
    })
    
}

window.addEventListener('DOMContentLoaded', () => {
    paint();
})

module.exports = {
    helpers,
    paint
}