import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { recentPage } from './recent';

@NgModule({
  declarations: [
    recentPage,
  ],
  imports: [
    IonicPageModule.forChild(recentPage),
  ],
})
export class RecipePageModule {}
