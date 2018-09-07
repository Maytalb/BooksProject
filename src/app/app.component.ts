import { Component, OnInit } from '@angular/core';
import { NewBookComponent } from './new-book/new-book.component';
import { MatDialog } from "@angular/material";
import { BooksService } from './books.service';
import { v4 as uuid } from 'uuid';
import { Book } from './Models/Book';
import { DeleteDialog } from './Dialogs/delete-dialog.component';
import { MatSnackBar } from '@angular/material';
import { BookNameTransformerService } from './book-name-transformer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books: Array<Book>;
  loading: boolean = false;
  selectedId: string;

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: BooksService,
    private bookNameTransformer: BookNameTransformerService) { }

  ngOnInit(): void {
    this.loading = true;
    this.books = new Array<Book>();
    this.service.getBooks().subscribe(
      (data: any) => {
        var allBooksData = data.items;
        allBooksData.forEach(book => {
          if (book.volumeInfo.publishedDate.length > 4){
            var newBook = new Book(book.id, book.volumeInfo.authors[0], book.volumeInfo.title, book.volumeInfo.publishedDate);
            this.books.push(newBook);
          }
        });      
      }, 
      error => console.log(error),
      () => this.loading = false
    );
  }

  remove(id: string): void {
    this.loading = true;
    let idToRemove = this.books.findIndex(book => book._id == id);
    this.books.splice(idToRemove, 1);
    this.loading = false;
    this.selectedId = '';
  }

  openDeleteDialog(id: string): void {
    this.selectedId = id;
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '500px',
      data: id,
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result === 'ok') {
        this.remove(this.selectedId);
      } else {
        this.selectedId = '';
      }
    });
  }

  openDialog(product: Book): void {
    if (typeof product === 'undefined') {
      product = new Book('', '', '','');
    }

    const dialogRef = this.dialog.open(NewBookComponent, {
      width: '500px',
      data: product,
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result !== 'Cancel') {
          let errors = '';
          this.loading = true;
          errors = this.checkFields(result);
  
          if (errors == '') {
            const resultBookTitle = this.bookNameTransformer.transform(result.bookTitle);

            const res = this.books.findIndex((x) => {
              const newBookTitle = this.bookNameTransformer.transform(x.BookTitle);
              return newBookTitle == resultBookTitle && x._id !== result._id;
            });

            if (res >= 0) {
              this.openSnackBar('Error: book already exists');
            } else {
              if (result._id == '') {
                const newBook = new Book(uuid(), result.authorName, result.bookTitle, result.publishedDate);
                this.books.push(newBook);
              } else {
                const idToUpdate = this.books.findIndex(book => book._id == result._id);
                this.books[idToUpdate].BookTitle = result.bookTitle;
                this.books[idToUpdate].AuthorName = result.authorName;
                this.books[idToUpdate].PublishedDate = result.publishedDate;
              }
            }
          } else {
            this.openSnackBar(errors);
          }
  
          this.loading = false;
        }
      }
    });
  }

  openSnackBar(message: string, action: string = 'OK'): void {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

  checkFields(result: any): string {
    let errors = [];
    if (this.isEmpty(result.authorName)) {
      errors.push('Author name must not be empty');
    }

    if (this.isEmpty(result.bookTitle)) {
      errors.push('Book title must not be empty');
    }

    if (this.isEmpty(result.publishedDate)) {
      errors.push('Published date must not be empty');
    }

    return errors.join(', ');
  }

  isEmpty(value: string): boolean {
    return value == '';
  }
}