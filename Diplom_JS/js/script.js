var butStyle = document.getElementsByTagName('button');



/* 
$(document).ready(function(){
    $("#down").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
});

document.getElementById('burger').onclick = function(){
    addMenu();
}

function addMenu(){
    document.getElementById('menu').classList.toggle('menu1')
} */

const catalogProduct = [
    {
        id: 'id1',
        name: 'Товар № 1',
        img: './images/product1.png',
        price: "700 рублей"
    },
    {
        id: 'id2',
        name: 'Товар № 2',
        img: './images/product2.png',
        price: "850 рублей"
    },
    {
        id: 'id3',
        name: 'Товар № 3',
        img: './images/product3.png',
        price: "730 рублей"
    },
    {
        id: 'id4',
        name: 'Товар № 4',
        img: './images/product4.png',
        price: "890 рублей"
    },
    {
        id: 'id5',
        name: 'Товар № 5',
        img: './images/product5.png',
        price: "650 рублей"
    },
    {
        id: 'id6',
        name: 'Товар № 6',
        img: './images/product6.png',
        price: "450 рублей"
    },
    {
        id: 'id7',
        name: 'man',
        img: './images/product7.png',
        price: "430 рублей"
    },
    {
        id: 'id8',
        name: 'man',
        img: './images/product8.png',
        price: "810 рублей"
    },
    {
        id: 'id9',
        name: 'Товар № 9',
        img: './images/product1.png',
        price: "560 рублей"
    },
    {
        id: 'id10',
        name: 'Товар № 10',
        img: './images/product4.png',
        price: "740 рублей"
    },
    {
        id: 'id11',
        name: 'man',
        img: './images/shop_man1.jpg',
        price: "730 рублей"
    },
    {
        id: 'id12',
        name: 'man',
        img: './images/shop_man2.jpg',
        price: "365 рублей"
    }
]

/* 
function buttonAnimate(){
    if(butStyle.style.backgroundColor === 'yellowgreen'){
        butStyle.style.backgroundColor = 'red';
    }
    else{
        butStyle.style.backgroundColor = 'yellowgreen';

    };
}

setInterval(buttonAnimate(), 500);




 */

var womanProduct = document.getElementById('womans');
var manProduct = document.getElementById('mans');
var kidProduct = document.getElementById('kids');

womanProduct.addEventListener('click', function(){
    document.getElementsByClassName('.item').style.display = 'none';
    
})