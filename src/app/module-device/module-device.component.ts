import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MoreDevicesComponent} from "../Components/Dialogs/more-devices/more-devices.component";

declare var fun: any;

declare var togglePopup:any;

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Out of Service',
    children: [
      {
        name: 'Security',
        children: [{name: 'Secure Channel Lost'}, {name: 'Component Certificate Mismatch'}]
      },
      {
        name: 'OTP Tampered',
        children: [{name: 'SDC Tampered (removal)'}, {name: 'SDC Tampered (destructive)'},
          {name: 'UPC Tampered (removal)'}, {name: 'UPC Tampered (destructive)'}]
      },
      {
        name: 'OTP in Safe Mode',
        children: [{name: 'SDC Safe Mode'}, {name: 'UPC Safe Mode'}, {name: 'APC Safe Mode'}]
      },
      {
        name: 'Component Disconnected',
        children: [{name: 'SDC Disconnected'}, {name: 'UPC Disconnected'}]
      },
      {
        name: 'Site Integration',
        children: [{name: 'POS Disconnected'}, {name: 'POS Error'}]
      }
    ],
  },
];


let mp = new Map();
mp.set('Out of Service','cancel');
mp.set('Security',"no_encryption");
mp.set('OTP Tampered',"pan_tool");
mp.set('OTP in Safe Mode', 'security');
mp.set('Component Disconnected',"power");
mp.set('Site Integration',"swap_calls");

@Component({
  selector: 'app-module-device',
  templateUrl: './module-device.component.html',
  styleUrls: ['./module-device.component.css']
})
export class ModuleDeviceComponent implements OnInit {

  constructor(public dialog: MatDialog) {
    // tree
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
  }


  // below: variable and function for visibility icon
  // (if it is clicked it will turn into blue, otherwise it will be in gray colour)
  isVisibilityClicked = false;
  visibilityClicked() {
    this.isVisibilityClicked = !this.isVisibilityClicked;
    console.log("Visibility Clicked");
  }

  // below: function will open more-device component as a dialog
  openDialogMoreDevices() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: '0', // Position from the top of the page
    };
    const dialogRef = this.dialog.open(MoreDevicesComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed '+ result);
    });
  }


  isMenuOpened: boolean = false
  toggleMenu():void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  clickedOutside() : void{
    this.isMenuOpened = false;
  }


  //tree
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();


  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;



  //Tree Values
  getValue(key:string):string{
    return mp.get(key);
  }
}
