import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerdurasPageRoutingModule } from './verduras-routing.module';

import { VerdurasPage } from './verduras.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerdurasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VerdurasPage]
})
export class VerdurasPageModule {}
