import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastasPage } from './pastas.page';

const routes: Routes = [
  {
    path: '',
    component: PastasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastasPageRoutingModule {}
