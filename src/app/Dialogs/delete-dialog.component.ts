import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'delete-dialog',
    templateUrl: 'delete.html',
    styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialog {  
  constructor(
    public dialogRef: MatDialogRef<DeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onYesClick(): void {
    this.dialogRef.close('ok');
  }

  onNoClick(): void {
    this.dialogRef.close('cancel');
  }  
}