var container = document.getElementById('wrapper');
var textA = document.querySelectorAll('a');

function editColor(){
    console.log(textA);

    if(container.style.backgroundColor === 'green'){
        container.style.backgroundColor = 'gray';
        container.style.flexDirection = 'row';
        for(var n = 0; n < textA.length; n++) {
            textA[n].style.color = 'white';
            textA[n].style.fontSize = '20px';
        }
    }
    else{
        container.style.backgroundColor = 'green';
        container.style.flexDirection = 'column';
        for(var n = 0; n < textA.length; n++) {
            textA[n].style.color = 'black';
            textA[n].style.fontSize = '30px';
        }
    }
}
console.log(textA);


function goGoogle(){
    document.location.href = "https://www.google.ru";
} 

function flexMaket(){
    document.body.innerHTML = '<div class="mama"><div class="children"></div><div class="children"></div><div class="children"></div></div>';
}



/* var container = document.getElementById('wrapper');
var textA = document.querySelectorAll('a');

function editColor(){
    if(container.style.backgroundColor === 'green'){
        container.style.backgroundColor = 'gray';
        container.style.flexDirection = 'row';
        /* for(var n = 0; n < textA.length; n++) {
            textA[n].style.color = 'white';
            textA[n].style.fontSize = '20px'; */
 /*            textA.style.color = 'white';
        }
    }
    else{
        container.style.backgroundColor = 'green';
        container.style.flexDirection = 'column';
        /* for(var n = 0; n < textA.length; n++) {
            textA[n].style.color = 'black';
            textA[n].style.fontSize = '30px'; */
/*             textA.style.color = 'black';
        }
    }
}

function goGoogle(){
    document.location.href = "https://www.google.ru";
} 

function flexMaket(){
    document.body.innerHTML = '<div class="mama"><div class="children"></div><div class="children"></div><div class="children"></div></div>';
} */