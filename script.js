//Get The UI Elements
let form = document.querySelector('#book-form');
let bookList = document.querySelector('#book-list');

//Book Class
class Book{
    constructor(title, author, isbn) {
        this.title = title;
        this.author=author;
        this.isbn = isbn;
    }
}

//UI Class
class UI{
    static showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(message))
        let container = document.querySelector('.container');
        let table = document.querySelector('table');
        container.insertBefore(div, table);

        setTimeout(()=>{
            document.querySelector('.alert').remove();
        }, 3000)
    }
    static addToBookList(title, author, isbn) {
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr')
        row.innerHTML = `
        <tr>
<td>${title}</td>
<td>${author}</td>
<td>${isbn}</td>
<td>
<a href="#" class="delete">X</a>
</td>
                </tr>`
    list.appendChild(row)
    }
    static clearFields() {
    document.querySelector('#title').value=''
    document.querySelector('#author').value=''
    document.querySelector('#isbn').value=''
    }
    static deleteFromBook(target) {
        target.parentElement.parentElement.remove()
    }
}
// Add event listener
form.addEventListener('submit', newBook);
bookList.addEventListener('click', removeBook);

//Defining Functions

function removeBook(e) {
    if(e.target.hasAttribute('href'))
    {
        UI.deleteFromBook(e.target);
        UI.showAlert("Book has been deleted successfully", "success")
    }
    e.preventDefault()
}

function newBook(e) {
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let isbn = document.querySelector('#isbn').value


    if (title === '' || author === '' || isbn === '') {
        UI.showAlert("Please fill all the fields", "error");
    } else {
        UI.addToBookList(title, author, isbn)
        UI.clearFields();
        UI.showAlert("Please fill all the fields", "success");
        
    }
    e.preventDefault()
}