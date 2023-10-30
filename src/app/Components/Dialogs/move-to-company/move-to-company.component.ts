import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../more-devices/more-devices.component";

@Component({
  selector: 'app-move-to-company',
  templateUrl: './move-to-company.component.html',
  styleUrls: ['./move-to-company.component.css']
})
export class MoveToCompanyComponent implements OnInit {

  constructor(

    public dialogRef: MatDialogRef<MoveToCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
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
