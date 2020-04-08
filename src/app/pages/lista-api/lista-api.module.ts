import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAPIPageRoutingModule } from './lista-api-routing.module';

import { ListaAPIPage } from './lista-api.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAPIPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaAPIPage]
})
export class ListaAPIPageModule {}
