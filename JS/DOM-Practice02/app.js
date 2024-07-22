//Clase Libro: representa un libro

class Book{
    constructor(title, author,isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}

//UI Class: maneja las tareas UI
class UI {
    static displayBooks(){
       
        const books = Almacenamiento.getBooks();


        books.forEach((book)=> UI.addBookToList(book));

    }

    static addBookToList(book){
      
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    
        list.appendChild(row);

    }


    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        //desaparecer despues de 3 segundos
        setTimeout(()=>document.querySelector('.alert').remove(),
            3000);
    }
    

    static clearFields(){
        document.querySelector('#title').value= '';
        document.querySelector('#author').value= '';
        document.querySelector('#isbn').value= '';
    }


    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
}


//Clase de almacenamiento

class Almacenamiento {
    static getBooks(){
        let books;
        if (localStorage.getItem('books') == null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }


    static addBook(book){
        const books = Almacenamiento.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Almacenamiento.getBooks();
        books.forEach((book, index)  =>{
             
        if (books.isbn == isbn) {
            books.splice(index, 1);
        }

        });
       
        localStorage.setItem('books',JSON.stringify(books));
        
    }



}

//Event: muestra los libros
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//Event. añade un libro

document.querySelector('#book-form').addEventListener('submit', 
(e)=>{
    //Prevenir el submit
    e.preventDefault();
    
    //Obtener los valores 
    const title = document.querySelector('#title').value;   
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Validar los datos
    if(author === '' ||  title === '' || isbn === '') {
        UI.showAlert('Porfavor completa todos los campos', 'danger');
    } else {
        
    //Inicializar un libro
    const book = new Book(title, author, isbn);


    UI.addBookToList(book);

    Almacenamiento.addBook(book);
    
    //Limpiar campos
    UI.clearFields();

    UI.showAlert('Libro añadido', 'success');
    }

}   
);

//Event: remueve un libro
document.querySelector('#book-list').addEventListener('click',
     (e)=> {
    
    //remueve el libro del UI
    UI.deleteBook(e.target)
    //remueve el libro del almacenamiento
    console.log(e.target.parentElement.parentElement.textContent);
    Almacenamiento.removeBook(e.target.parentElement.parentElement.textContent.isbn);

    
    //muestra mensaje de alerta
    UI.showAlert('Libro eliminado', 'success');
});