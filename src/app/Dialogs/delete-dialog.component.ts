import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'delete-dialog',
    templateUrl: 'delete.html',
    styleUrls: ['./delete-dialog.component.css']
  })
  export class DeleteDialog {  
    constructor(
      public dialogRef: MatDialogRef<DeleteDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}
  
    onNoClick(): void {
      this.dialogRef.close('Cancel');
    }  
  }