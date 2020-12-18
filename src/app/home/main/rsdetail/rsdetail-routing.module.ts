import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RsdetailPage } from './rsdetail.page';

const routes: Routes = [
  {
    path: '',
    component: RsdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RsdetailPageRoutingModule {}
