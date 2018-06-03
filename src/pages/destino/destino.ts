import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Fila } from '../model/fila';
import { Chamado } from '../model/chamado';

/**
 * Generated class for the DestinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-destino',
  templateUrl: 'destino.html',
})
export class DestinoPage {
  public fila : Fila;
  public chamado : Chamado;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fila = this.navParams.get("filaSelecionada");
    this.chamado = this.navParams.get("chamadoSelecionado");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinoPage');
  }

}
