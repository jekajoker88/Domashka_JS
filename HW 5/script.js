var startKal = document.getElementById('start');
var newLap = document.getElementById('lap');
var pausaBut = document.getElementById('pausa');
var ulTime = document.getElementById('list');
var base = 60;
var clocktimer, dateObj, dh, dm, ds, ms;
var readout = '';
var h = 1,
    m = 1,
    tm = 1,
    s = 0,
    ts = 0,
    ms = 0,
    init = 0;
var currentCount = 1;
var paus = true;
var timeLap = '';
var firstRay = [];

//функция для очистки поля
function ClearСlock() {
    clearTimeout(clocktimer);
    h = 1;
    m = 1;
    tm = 1;
    s = 0;
    ts = 0;
    ms = 0;
    init = 0;
    readout = '00:00:00:00';
    document.MyForm.stopwatch.value = readout;
}

//функция для старта секундомера
function StartTIME() {
    var cdateObj = new Date();
    var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
    if (paus == true){    
        if (t > 999) {
            s++;
        }
        if (s >= (m * base)) {
            ts = 0;
            m++;
        } else {
            ts = parseInt((ms / 100) + s);
            if (ts >= base) {
                ts = ts - ((m - 1) * base);
            }
        }
        if (m > (h * base)) {
            tm = 1;
            h++;
        } else {
            tm = parseInt((ms / 100) + m);
            if (tm >= base) {
                tm = tm - ((h - 1) * base);
            }
        }
        ms = Math.round(t / 10);
        if (ms > 99) {
            ms = 0;
        }
        if (ms == 0) {
            ms = '00';
        }
        if (ms > 0 && ms <= 9) {
            ms = '0' + ms;
        }
        if (ts > 0) {
            ds = ts;
            if (ts < 10) {
                ds = '0' + ts;
            }
        } else {
            ds = '00';
        }
        dm = tm - 1;
        if (dm > 0) {
            if (dm < 10) {
                dm = '0' + dm;
            }
        } else {
            dm = '00';
        }
        dh = h - 1;
        if (dh > 0) {
            if (dh < 10) {
                dh = '0' + dh;
            }
        } else {
            dh = '00';
        }
    }
    readout = dh + ' ' + dm + ' ' + ds + ' ' + ms;
    document.MyForm.stopwatch.value = readout;
    clocktimer = setTimeout("StartTIME()", 1);
}



//функция паузы
function PausaBut(){
    if (pausaBut.textContent == 'Pausa'){
        pausaBut.textContent = 'Play';        
        paus = false;
    } else {
        paus = true;
        pausaBut.textContent = 'Pausa';
    };
}

//Функция запуска и остановки
function StartStop() {
    if (init == 0) {
        ClearСlock();
        dateObj = new Date();
        StartTIME();
        init = 1;
        startKal.textContent = 'Stop'; 
        
    } else {
        clearTimeout(clocktimer);
        init = 0;
        startKal.textContent = 'Start'; 
    }
};


function TimeL() {
    if (paus == true) {
        timeLap = document.MyForm.stopwatch.value;
        /* clearTimeout(clocktimer); */
        
        StartTIME();
        return timeLap;
    } 
};



//функция добавления круга
newLap.addEventListener('click', function(keyPressed){
    var lol = TimeL();
    var newLi = document.createElement('li');
    var newSpan = document.createElement('span');
    var tag = document.createElement('span');
    
    tag.innerText = lol;
    tag.className = 'lips';
    


    function makeCounter() {
        return currentCount++;
    };

    var counter = makeCounter();
    
    newSpan.innerHTML = 'Круг № ' + counter + ', общее время круга - ' + tag;
    ulTime.appendChild(newLi).append(newSpan, ' ' , ', время круга - ' + lol);
    console.log(document.querySelectorAll('.lips'));
    firstRay.push(...rest=document.MyForm.stopwatch.value.split(' '));
    console.log(firstRay);
});

