import { DialogData } from "../new-book/new-book.component";

export class Book implements DialogData  {
    _id: string;
    AuthorName: string;
    PublishedDate: string;
    BookTitle: string;

    constructor(id: string, autorName: string, bookTitle: string, publishDate: string) {
        this._id = id;
        this.AuthorName = autorName;
        this.BookTitle = bookTitle;
        this.PublishedDate = publishDate;
    }
}