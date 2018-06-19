import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClosestLocationPage } from './closest-location';

@NgModule({
  declarations: [
    ClosestLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(ClosestLocationPage),
  ],
})
export class ClosestLocationPageModule {}
