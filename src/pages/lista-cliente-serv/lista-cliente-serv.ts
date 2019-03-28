import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../model/cliente';


@IonicPage()
@Component({
  selector: 'page-lista-cliente-serv',
  templateUrl: 'lista-cliente-serv.html',
})
export class ListaClienteServPage {

  [x: string]: any;
  cliente : Cliente[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ClienteServ: ClienteService) {

  }

  ionViewDidLoad() {
    this.ClienteServ.listaDeCliente().subscribe(response => {
      //console.log(response);
      this.cliente = response;
      //console.log(this.cliente);
    }, error => {
      console.log('Servidor não disponivel');
    })
  }

}
