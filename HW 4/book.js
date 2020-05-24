function Book(title, autor, year, publishing, instance,id, pages){
    this.title = title;
    this.autor = autor;
    this.year = year;
    this.publishing = publishing;
    this.instance = instance;
    this.ide = ide;
    this.pages = pages;
    this.getGlava = function() {
        return Math.ceil(this.pages / 25);
    };
    alert("Количество глав в книги = " + this.getGlava());
};

function Trevelbook(titleTB, publishingTB, instanceTB, pagesTB){
    this.titleTB = titleTB;
    this.publishingTB = publishingTB;
    this.instanceTB = instanceTB;
    this.pagesTB = pagesTB;
    this.getGlava = function() {
        return Math.ceil(this.pagesTB / 5);
    };
    alert("Количество глав в книги = " + this.getGlava());
};