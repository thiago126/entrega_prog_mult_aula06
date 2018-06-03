import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Fila } from '../model/fila';
import { DestinoPage } from '../destino/destino';

/**
 * Generated class for the OpenCalledPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-called',
  templateUrl: 'open-called.html',
})
export class OpenCalledPage {

  public filas: Fila[];
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filas = [];
    var f1 = { nome: 'Network'};
    var f2 = { nome: 'Software'}; 
    var f3 = { nome: 'Cloud'};
    this.filas = [f1,f2,f3]
  }

 irParaDestino(fila:Fila):void{
     this.navCtrl.push(DestinoPage, {filaSelecionada: fila}); 
    } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenCalledPage');
  }

}
