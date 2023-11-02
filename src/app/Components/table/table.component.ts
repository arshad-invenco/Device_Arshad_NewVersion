import {Component, Input, OnInit} from '@angular/core';
import {TableDataService} from "../../Service/table-data.service";
import {MatTableDataSource} from "@angular/material/table";

export interface tableElements {
  status: string;
  location: string;
  deviceType: string;
  restore: string;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // below: variable for ngxPagination,
  // this will keep track of the page number which we are at currently present
  p:any;

  tableData : any[] = [
 {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
     {status:'inactive', location:'21 Kawana Street, Northcote, Auckland 0627, New Zealand aHDYBDBED JQEWKDNHNDE QEDEHDBJHEDEDHBHYD HDUHD', deviceType:'G6-300', restore:'2.8.99'},
     {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'},
    {status:'inactive', location:'New Zealand', deviceType:'G6-300', restore:'2.8.99'}
  ];




  constructor(private tableDataService: TableDataService) {
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['Device & Serial Number', 'status', 'location', 'Device Type', 'restore', 'Others' ];

  dataSource = this.tableDataService.getData();

}
