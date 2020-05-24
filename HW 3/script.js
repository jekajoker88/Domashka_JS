function Book(name, author, isdate, ageIsdate, quantityInstance, id, pages){
    this.name = name;
    this.author = author;
    this.isdate = isdate;
    this.ageIsdate = ageIsdate;
    this.quantityInstance = quantityInstance;
    this.id = id;
    this.pages = pages;
    this.getPages = function(){
        console.log('количество страниц - ' + this.pages);
        return this.pages;
    };
    
};

var book = new Book(1, 2, 3, 4, 5, 6, 355);
book.getPages();



function Journal(yearOfIssue, issueNumber, pages){
    Book.call(this);
    this.yearOfIssue = yearOfIssue;
    this.issueNumber = issueNumber;
    this.pages = pages;
    this.getIsdate = function(){
        return 'издатель ' + this.isdate;
    };
    this.getPages = function(){
        if(this.pages < 32){
            return this.pages;
            
        } else{
            alert('Извините, максимальное количество страниц 32, поэтому будет принято за 0');
            this.pages = '0';
            return this.pages;
        };
    };
};

var journal = new Journal(2, 3, 40);

journal.isdate = 'sasha';
console.log(journal.getIsdate());
console.log(journal.getPages());