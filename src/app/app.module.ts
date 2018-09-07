import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Capitalize } from './Filters/capitalize.filter';
import { NewBookComponent } from './new-book/new-book.component';
import { DeleteDialog } from './Dialogs/delete-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksService } from './books.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {
  MatListModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,

  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NewBookComponent,
    Capitalize,
    DeleteDialog    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    BrowserModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
  
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,  
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule
  ],
  entryComponents: [NewBookComponent, DeleteDialog],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
