import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {DialogData, MoreDevicesComponent} from "../more-devices/more-devices.component";

@Component({
  selector: 'app-move-to-company',
  templateUrl: './move-to-company.component.html',
  styleUrls: ['./move-to-company.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoveToCompanyComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<MoveToCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  ngOnInit(): void {
  }

  // Close current dialog on clicking cancel text in dialog action
  onNoClick(): void {
    this.dialogRef.close();
  }


  // below: variable(user input from text area in move-to-side dialog)
  // and function is for returning no of words entered by user on condition of commas and new line
  multiLineText: string = '';
  getNoOfWords(): number{
    const substrings = this.multiLineText.split(/,|\n/);
    const filteredSubstrings = substrings.filter(substring => substring.trim().length > 0);
    return filteredSubstrings.length; // Return the count of non-empty substrings
  }


  // below: function will open more-device component as a dialog
  openMoreDevices() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: '0', // Position from the top of the page
    };
    const dialogRef = this.dialog.open(MoreDevicesComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed '+ result);
    });
  }
  // below: function will only open More Device dialog after closing current dialog
  replaceDialogAsMoreDevice() {
    // Open the new dialog
    this.openMoreDevices();
    // Check if the dialog is open and close it
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

}
