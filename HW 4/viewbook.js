function ViewBook(){

};

ViewBook.prototype.clear = function(){
    document.querySelector('#title').value ='';
    document.querySelector('#autor').value ='';
    document.querySelector('#year').value ='';
    document.querySelector('#publishing').value ='';
    document.querySelector('#instance').value ='';
    document.querySelector('#ide').value ='';
    document.querySelector('#pages').value ='';
};

ViewBook.prototype.clearTwo = function(){
    document.querySelector('#titleTB').value ='';
    document.querySelector('#publishingTB').value ='';
    document.querySelector('#instanceTB').value ='';
    document.querySelector('#pagesTB').value ='';
};


ViewBook.prototype.addBook = function(book){
    var listhome = document.querySelector('#list-books');
    var ulList = document.createElement('ul');

    ulList.innerHTML = '<li>' + book.title + '</li>' +
    '<li>' + book.autor + '</li>' +
    '<li>' + book.year + '</li>' +
    '<li>' + book.publishing + '</li>' +
    '<li>' + book.instance + '</li>' +
    '<li>' + book.ide + '</li>' +
    '<li>' + book.pages + '</li>' +
    '<li><button id="delete">Удалить книгу</button></li>';

    listhome.appendChild(ulList);

    ulList.onclick = function (ev) {
        var del = ev.target.closest('#delete');
        if (!del) {
            return;
        }
        listhome.removeChild(ulList);
    };
};


ViewBook.prototype.addTravelbook = function(book){
    var listhome = document.querySelector('#list-books');
    var ulList = document.createElement('ul');

    ulList.innerHTML = '<li>' + book.titleTB + '</li>' +
    '<li>' + '-' + '</li>' + '<li>' + '-' + '</li>' +
    '<li>'+ book.publishingTB + '</li>' + '<li>' + '-' + '</li>' +
    '<li>'+ book.instanceTB + '</li>' +
    '<li>'+ book.pagesTB + '</li>' +
    '<li><button id="delete">Удалить книгу</button></li>';

    listhome.appendChild(ulList);

    ulList.onclick = function (ev) {
        var del = ev.target.closest('#delete');
        if (!del) {
            return;
        }
        listhome.removeChild(ulList);
    };
};


ViewBook.prototype.getMessage = function(message, name){
    var block = document.createElement('div');
    block.className = name;
    block.innerHTML = message;

    var container = document.querySelector('body');
    var form = document.querySelector('.list');

    container.insertBefore(block, form); //добавление div перед тегом form
};








