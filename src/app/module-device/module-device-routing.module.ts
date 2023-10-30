import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleDeviceComponent } from './module-device.component';

const routes: Routes = [{ path: '', component: ModuleDeviceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleDeviceRoutingModule { }
