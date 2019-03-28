import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmesService } from '../../services/filme.service';
import { Filme } from '../../model/filme';


@IonicPage()
@Component({
  selector: 'page-lista-filmes-serv',
  templateUrl: 'lista-filmes-serv.html',
})
export class ListaFilmesServPage {

  filmes : Filme[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public FilmeServ: FilmesService) {

  }

  ionViewDidLoad() {
    this.FilmeServ.listaDeFilmes().subscribe(response => {
      //console.log(response);
      this.filmes = response;
      //console.log(this.filmes);
    }, error => {
      console.log('Servidor não disponivel');
    })
  }

}
