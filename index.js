function makeCanvas(x, y) {
    const canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
    canvas.setAttribute('width', x);
    canvas.setAttribute('height', y);
    return { canvas, ctx };
};

function getRandomInt(min=0, max=36) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
};

function generate_str(len=6) {
    let result = '';
    for (let i=0; i < len; ++i){
        result += getRandomInt().toString(36);
    };
    return result;
}

function draw_captcha() {
    const captcha_str = generate_str();
    const {canvas, ctx} = makeCanvas(100, 50);
    document.body.appendChild(canvas);
    ctx.strokeStyle = `rgb(${getRandomInt(0, 200)}, ${getRandomInt(0, 200)}, ${getRandomInt(0, 200)})`;
    ctx.textAlign = 'center';
    ctx.font = '30px Verdana'; 
    ctx.strokeText(captcha_str, canvas.width/2, canvas.height/2)
    // Adding lines
    ctx.strokeStyle = `rgb(${getRandomInt(0, 200)}, ${getRandomInt(0, 200)}, ${getRandomInt(0, 200)})`;
    ctx.moveTo(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height))
    ctx.lineTo(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height))
    ctx.strokeStyle = `rgb(${getRandomInt(0, 200)}, ${getRandomInt(0, 200)}, ${getRandomInt(0, 200)})`;
    ctx.moveTo(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height))
    ctx.lineTo(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height))
    ctx.stroke();
    // Adding rectangles
    ctx.strokeStyle = `rgb(${getRandomInt(0, 200)}, ${getRandomInt(0, 200)}, ${getRandomInt(0, 200)})`;
    ctx.strokeRect(getRandomInt(0, canvas.width/2), getRandomInt(0, canvas.height/2), 
    getRandomInt(0, canvas.width/2), getRandomInt(0, canvas.height/2));
    ctx.strokeStyle = `rgb(${getRandomInt(0, 200)}, ${getRandomInt(0, 200)}, ${getRandomInt(0, 200)})`;
    ctx.strokeRect(getRandomInt(0, canvas.width/2), getRandomInt(0, canvas.height/2), 
    getRandomInt(0, canvas.width/2), getRandomInt(0, canvas.height/2));
    return captcha_str;
};


const captcha = draw_captcha();
const inpt = document.querySelector('input');
inpt.maxLength = captcha.length;
const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    if (inpt.value === captcha) {
        alert('Значения совпадают!')
    }
    else {
        alert('Значения не совпадают!')
    }
});

