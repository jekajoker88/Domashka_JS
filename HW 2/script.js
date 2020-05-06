var inputData = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById('lists');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var spans = document.getElementsByTagName('span');
var fioRaz = document.getElementById('fio');
var liVar = document.getElementsByTagName('li');


/* addEventListener - получение типа события и вызов функции */


function deleteTodo() {
    for (let span of spans) {
        span.addEventListener('click', function () {
            span.parentElement.remove();
            event.preventDefault();
        })
    }
};

function loadTodo() {
    if (localStorage.getItem('todoApplication')) {
        ulSpisok.innerHTML = localStorage.getItem('todoApplication');
        deleteTodo();
    }
};


ulSpisok.addEventListener('click', function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("active");
    }
} );



inputData.addEventListener('keypress', function (keyPressed) {
    if (keyPressed.which === 13) {
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        var now = new Date();
        newSpan.innerHTML = 'Delete';

        var newTodo = this.value; //получение валью из инпут
        this.value = ''; //*очистка поля ввода
        if ((newTodo == '') || (newTodo == false)) {
            alert('Введите задачу');
        } else {
            ulSpisok.appendChild(newLi).append(newSpan, ' ' + newTodo, ' дата ввода (' + now + ');');
            deleteTodo();

        };
    };
});

saveBtn.addEventListener('click', function () {
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
});

clearBtn.addEventListener('click', function () {
    ulSpisok.innerHTML = '';
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
});

fioRaz.addEventListener('click', function () {
    alert('Риккер Евгений Александрович, 2020 г.')
});



loadTodo();

fioRaz();