import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { Book } from '../Models/Book';

export interface DialogData {
  _id: string;
  BookTitle: string;
  AuthorName: string;
  PublishedDate: string;
}

@Component({
  selector: 'app-new-product',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  form: FormGroup;
  book: Book;
  constructor(
    public dialogRef: MatDialogRef<NewBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.book = data;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'authorName': new FormControl(this.book.AuthorName, [Validators.required]),
      'bookTitle': new FormControl(this.book.BookTitle, [Validators.required]),
      'publishedDate': new FormControl(this.book.PublishedDate, [Validators.required]),
      '_id': new FormControl(this.book._id, [])
    });
  }
  
  get bookTitle() {
    return this.form.get('bookTitle');
  }

  get authorName() {
    return this.form.get('authorName');
  }

  get publishedDate() {
    return this.form.get('publishedDate');
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  onNoClick(): void {
    this.dialogRef.close('Cancel');
  }
}
