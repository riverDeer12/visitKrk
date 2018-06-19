import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllLocationsPage } from './all-locations';

@NgModule({
  declarations: [
    AllLocationsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllLocationsPage),
  ],
})
export class AllLocationsPageModule {}
