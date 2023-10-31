import {Component, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {DialogData, MoreDevicesComponent} from "../more-devices/more-devices.component";

@Component({
  selector: 'app-move-to-site',
  templateUrl: './move-to-site.component.html',
  styleUrls: ['./move-to-site.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MoveToSiteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MoveToSiteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog
  ) {
    this.filterControl.valueChanges.subscribe(value => {
      this.filterOptions(value);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  filterControl = new FormControl();
  options: string[] = ['Option 1', 'Option 2',  'Option 3'];
  filteredOptions: string[] = this.options;

  filterOptions(value: string) {
    this.filteredOptions = this.options.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(`Selected: ${event.option.value}`);
  }

  // below: variable(user input from text area in move-to-side dialog)
  // and function is for returning no of words entered by user on condition of commas and new line
  multiLineText: string = '';
  getNoOfWords(): number{
    const substrings = this.multiLineText.split(/,|\n/);
    const filteredSubstrings = substrings.filter(substring => substring.trim().length > 0);
    return filteredSubstrings.length; // Return the count of non-empty substrings
  }



  ngOnInit(): void {
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
