import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FortDetailPage } from './fort-detail';

@NgModule({
  declarations: [
    FortDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FortDetailPage),
  ],
})
export class FortDetailPageModule {}
