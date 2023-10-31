import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {MoveToSiteComponent} from "../move-to-site/move-to-site.component";
import {MoveToCompanyComponent} from "../move-to-company/move-to-company.component";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-more-devices',
  templateUrl: './more-devices.component.html',
  styleUrls: ['./more-devices.component.css']
})
export class MoreDevicesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MoreDevicesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // below: function will open move-to-sited dialog
  openMoveToSite() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: '0', // Position from the top of the page
    };
    dialogConfig.height = '316.2px';
    const dialogRef = this.dialog.open(MoveToSiteComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openMoveToCompany() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: '0'
    };

    dialogConfig.height = '316.2px';
    const dialogRef = this.dialog.open(MoveToCompanyComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  replaceDialogAsMoveToSite() {
    // Open the new dialog
    this.openMoveToSite();
    // Check if the dialog is open and close it
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
  // below: function will only open move-to-company dialog after closing current dialog
  replaceDialogAsMoveToCompany() {
    // Open the new dialog
    this.openMoveToCompany();

    // Check if the dialog is open and close it
    if (this.dialogRef) {
      this.dialogRef.close();
    }

  }
}
