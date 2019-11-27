import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: [ './accueil.component.scss' ]
})
export class AccueilComponent implements OnInit {
  animal: string;
  name: string;
  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  hide() {
    $('#crap').hide('slow');
  }
  show() {
    $('#crap').show('slow');
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBewebComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.html',
})
export class DialogBewebComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogBewebComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
