import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaClienteServPage } from './lista-cliente-serv';

@NgModule({
  declarations: [
    ListaClienteServPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaClienteServPage),
  ],
})
export class ListaClienteServPageModule {}
