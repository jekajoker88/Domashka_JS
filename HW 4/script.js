document.querySelector('#books').addEventListener('submit', function(event){
    var title = document.querySelector('#title').value;
    var autor = document.querySelector('#autor').value;
    var year = document.querySelector('#year').value;
    var publishing = document.querySelector('#publishing').value;
    var instance = document.querySelector('#instance').value;
    var ide = document.querySelector('#ide').value;
    var pages = document.querySelector('#pages').value;

    var book = new Book(title, autor, year, publishing, instance, ide, pages);
    var viewBook = new ViewBook();

    if(title === '' || autor === '' || year === '' || publishing === '' || instance === '' || ide === '' || pages === '' ){
        viewBook.getMessage('Введены не все данные!', 'bad');
    } else{
        viewBook.addBook(book);
        viewBook.getMessage('Книга успешно добавлена', 'good');
        viewBook.clear();
    };

    event.preventDefault();
});

document.querySelector('#travel-books').addEventListener('submit', function(event){
    var titleTB = document.querySelector('#titleTB').value;
    var publishingTB = document.querySelector('#publishingTB').value;
    var instanceTB = document.querySelector('#instanceTB').value;
    var pagesTB = document.querySelector('#pagesTB').value;
    var trevelbook = new Trevelbook(titleTB, publishingTB, instanceTB, pagesTB);
    var viewBooks = new ViewBook();

    if(titleTB === '' || publishingTB === '' || instanceTB === '' || pagesTB === '' ){
        viewBooks.getMessage('Введены не все данные!', 'bad');
    } else{
        viewBooks.addTravelbook(trevelbook);
        viewBooks.getMessage('Книга успешно добавлена', 'good');
        viewBooks.clearTwo();
    };

    event.preventDefault();
});
