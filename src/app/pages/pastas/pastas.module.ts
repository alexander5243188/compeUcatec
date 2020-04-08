import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastasPageRoutingModule } from './pastas-routing.module';

import { PastasPage } from './pastas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PastasPage]
})
export class PastasPageModule {}
