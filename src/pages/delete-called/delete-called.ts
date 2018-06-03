import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Fila } from '../model/fila';

/**
 * Generated class for the DeleteCalledPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete-called',
  templateUrl: 'delete-called.html',
})
export class DeleteCalledPage {
  
  public filas: Fila[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filas = [];
    var f1 = { nome: 'Network'};
    var f2 = { nome: 'Software'}; 
    var f3 = { nome: 'Cloud'};
    this.filas = [f1,f2,f3]
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleteCalledPage');
  }

}
