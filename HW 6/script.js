let numb = document.getElementsByClassName('number');

let oper = document.getElementsByClassName('operation');
let equal = document.getElementById('equally');
let sin = document.getElementById('sinus');
let cosin = document.getElementById('cosinus');
let clear = document.getElementById('clear');
let history = document.getElementById('history');
let tg = document.getElementById('tg');
let ctg = document.getElementById('ctg');
let remains = document.getElementById('remains');//деление с остатком
let display = document.form.monitor;

let chislo = ['','',];


/* let sumCh = function (a, b) {
    return a + b;
};
let minusCh = function (a, b) {
    return a - b;
};
let umnojCh = function (a, b) {
    return a * b;
};
let delenCh = function (a, b) {
    return a / b;
};
let procCh = function (a, b) {
    return a % b;
};
let stepenCh = function (a, b) {
    return a ** b;
} */

let sumCh = (a, b) => a + b;
let minusCh = (a, b) => a - b;
let umnojCh = (a, b) => a * b;
let delenCh = (a, b) => a / b;
let procCh = (a, b) => a % b;
let stepenCh = (a, b) => a ** b;

//функция записи на экран
function input(num){
    display.value += num;   
}

//
/*Очистка поля ввода*/
function clearEkran() {
    display.value = "";
};
clear.addEventListener('click', clearEkran);

//dobavlenie v massiv znacheniy
for (let i = 0; i < oper.length; i++) {
    oper[i].addEventListener('click', function(){
        chislo.push(display.value);
        chislo.push(oper[i].value);
        chislo.shift();
        display.value = '';
    });
};

equal.addEventListener('click', function () {
    chislo.shift();
    chislo.push(display.value);
   
    if(chislo[1] === '+'){
        let sum = sumCh(parseFloat(chislo[0]), parseFloat(chislo[2]));
        display.value = parseFloat(sum.toFixed(9));
    }else if(chislo[1] === '-'){
        let diff = minusCh(parseFloat(chislo[0]), parseFloat(chislo[2]));
        display.value = parseFloat(diff);
    }else if(chislo[1] === '*'){
        let multi = umnojCh(parseFloat(chislo[0]), parseFloat(chislo[2]));
        display.value = parseFloat(multi);
    }else if(chislo[1] === '/'){
        if(chislo[2] != 0){
            let div = delenCh(parseFloat(chislo[0]), parseFloat(chislo[2]));
            display.value = parseFloat(div.toFixed(9));
        }else{
            display.value = 'Error';
        }    
    }else if(chislo[1] === '%'){
        let mod = procCh(parseFloat(chislo[0]), parseFloat(chislo[2]));
        display.value = mod;
    }else if(chislo[1] === '**'){
        let sqr = stepenCh(parseFloat(chislo[0]), parseFloat(chislo[2]));
        display.value = sqr;
    }        
    cleardata();
    writeHistory();
    console.log(chislo);
    setTimeout(clearEkran, 1500);//очистка поля после выполнения операции  

})


//очистка массива для выполнения новой операции
function cleardata() {
    chislo = ['','',];
}

//запись в историю
function writeHistory() {
    let newLine = document.createElement('li');
    newLine.innerHTML = display.value;
    history.append(newLine);
}
//очистка истории
function clearHist() {
    history.innerHTML = '';
}

/*Из радианов в градусы*/
function radInDeg() {
    display.value = parseFloat((display.value * 180) / Math.PI);
}


/*Синус угла введенного в градусах*/
sinus.addEventListener('click', function () {
    let sin = Math.sin(parseFloat((display.value * Math.PI) / 180));
    display.value = parseFloat(sin.toFixed(9));
    writeHistory();
    setTimeout(clearEkran, 1500);

});
/*Косинус угла введенного в градусах*/
cosinus.addEventListener('click', function () {
    let cos = Math.cos(parseFloat((display.value * Math.PI) / 180));
    display.value = parseFloat(cos.toFixed(9));
    writeHistory();
    setTimeout(clearEkran, 1500);
});
/*Тангенс угла введенного в градусах*/
tg.addEventListener('click', function () {
    let tg = Math.tan(parseFloat((display.value * Math.PI) / 180));
    display.value = parseFloat(tg.toFixed(9));
    writeHistory();
    setTimeout(clearEkran, 1500);
});
/*Котангенс угла введенного в градусах*/
ctg.addEventListener('click', function () {
    let ctg = 1 / (Math.tan(parseFloat((display.value * Math.PI) / 180)));
    display.value = parseFloat(ctg.toFixed(9));
    writeHistory();
    setTimeout(clearEkran, 1500);
});