import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './Models/Book';
import * as config from './config.js';

@Injectable()
export class BooksService{
    constructor(private http: HttpClient) { }

    getBooks() {
        return this.http.get(config.default.urls.getAll);
    }
}