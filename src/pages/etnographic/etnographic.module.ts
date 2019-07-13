import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EtnographicPage } from './etnographic';

@NgModule({
  declarations: [
    EtnographicPage,
  ],
  imports: [
    IonicPageModule.forChild(EtnographicPage),
  ],
})
export class EtnographicPageModule {}
