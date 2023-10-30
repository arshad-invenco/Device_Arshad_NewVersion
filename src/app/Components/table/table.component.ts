import {Component, Input, OnInit} from '@angular/core';
import {TableDataService} from "../../Service/table-data.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data : {status:string, location:string, deviceType:string, restore:string}[];

  // below: variable for ngxPagination,
  // this will keep track of the page number which we are at currently present
  p:any;

  constructor(public tableDataService: TableDataService) {
    this.data = tableDataService.getData()
  }

  ngOnInit(): void {
  }

}
