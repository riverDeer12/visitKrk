import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonasteryDetailPage } from './monastery-detail';

@NgModule({
  declarations: [
    MonasteryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MonasteryDetailPage),
  ],
})
export class MonasteryDetailPageModule {}
