import {Component, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../more-devices/more-devices.component";

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

  noOfWords :number = 1;
  multiLineText: string = '';
  getNoOfWords(): number{
    const substrings = this.multiLineText.split(/,|\n/);
    const filteredSubstrings = substrings.filter(substring => substring.trim().length > 0);
    return filteredSubstrings.length; // Return the count of non-empty substrings
  }



  ngOnInit(): void {
  }

}
