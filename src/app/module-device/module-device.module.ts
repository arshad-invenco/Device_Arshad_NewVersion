import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleDeviceRoutingModule } from './module-device-routing.module';
import { ModuleDeviceComponent } from './module-device.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {TableComponent} from "../Components/table/table.component";
import {DeviceSerialComponent} from "../Components/table/device-serial/device-serial.component";
import {InactiveComponent} from "../Components/table/table-col-components-folder/inactive/inactive.component";
import {OperationalComponent} from "../Components/table/table-col-components-folder/operational/operational.component";
import {OutOfServiceComponent} from "../Components/table/table-col-components-folder/out-of-service/out-of-service.component";
import {UnknownComponent} from "../Components/table/table-col-components-folder/unknown/unknown.component";
import {NgxPaginationModule} from "ngx-pagination";
import {MatTreeModule} from "@angular/material/tree";
import {ClickOutsideDirective} from "../Directives/click-outside.directive";
import {MoreDevicesComponent} from "../Components/Dialogs/more-devices/more-devices.component";
import { MatDialogModule} from "@angular/material/dialog";
import {MoveToSiteComponent} from "../Components/Dialogs/move-to-site/move-to-site.component";
import {MoveToCompanyComponent} from "../Components/Dialogs/move-to-company/move-to-company.component";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AutoGrowDirective} from "../Directives/auto-grow.directive";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    ModuleDeviceComponent,
    TableComponent,
    DeviceSerialComponent,
    InactiveComponent,
    OperationalComponent,
    OutOfServiceComponent,
    UnknownComponent,
    ClickOutsideDirective,
    MoreDevicesComponent,
    MoveToSiteComponent,
    MoveToCompanyComponent,
    AutoGrowDirective
  ],
  imports: [
    CommonModule,
    ModuleDeviceRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatDividerModule,
    NgxPaginationModule,
    MatTreeModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule
  ]
})
export class ModuleDeviceModule { }
