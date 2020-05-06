var term = {
    Canada: 10,
    Germany: 13,
    Spain: 22,
    Belarus: 15
};

for (let key in term){
    alert(key + ' - ' + term[key] + ' градусов/градуса');
}

var i=0;
var n=0;
for (let key in term) {
    i += term[key];
    n++;
};

alert('Средняя температура ' + i/n + ' градусов/градуса');

var x = -20;
var country;
for (let kol in term){
    if (x < term[kol]){
        x = term[kol];
        country = kol;
    }
}

alert('Максимальная температура ' + x + ' градусов/градуса. ' + 'Cтрана - ' + country);

var max = document.getElementById('roll');

function maxTerm(term){
    for (let kol in term){
        if (x < term[kol]){
            x = term[kol];
            country = kol;
        }
    }
    
    alert('Максимальная температура ' + x + ' градусов/градуса. ' + 'Cтрана - ' + country);
}