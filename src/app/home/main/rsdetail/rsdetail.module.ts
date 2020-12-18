import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RsdetailPageRoutingModule } from './rsdetail-routing.module';

import { RsdetailPage } from './rsdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RsdetailPageRoutingModule
  ],
  declarations: [RsdetailPage]
})
export class RsdetailPageModule {}
