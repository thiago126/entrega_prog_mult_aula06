import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Fila } from '../model/fila';
import { DestinoPage } from '../destino/destino';
import { Chamado } from '../model/chamado';

/**
 * Generated class for the ConsultCalledPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consult-called',
  templateUrl: 'consult-called.html',
})
export class ConsultCalledPage {
  public filas: Fila[];
  public chamados: Chamado[];

  public fila : Fila;
  public chamado : Chamado;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fila = this.navParams.get("filaSelecionada");
    this.chamado = this.navParams.get("chamadoSelecionado");


    this.filas = [];
    var f1 = { nome: 'Network'}; 
    var f2 = { nome: 'Software'}; 
    var f3 = { nome: 'Cloud'};
    this.filas = [f1,f2,f3]

    this.chamados = [];
    var c1 = {descricao: "Erro na Rede", fila: f1};
    var c2 = {descricao: "Erro no Software", fila: f2};
    var c3 = {descricao: "Erro na Nuvem", fila: f3};
    this.chamados = [c1,c2,c3]


  }

  listarChamados(fila:Fila, chamado:Chamado):void{
    this.navCtrl.push(ConsultCalledPage, {filaSelecionada: fila}); 
    this.navCtrl.push(ConsultCalledPage, {chamadoSelecionado: chamado})
    if(fila = this.filas[0]){
      this.navCtrl.push(ConsultCalledPage, {chamadoSelecionado: this.chamados[0]})
    } else if(fila = this.filas[1]){
      this.navCtrl.push(ConsultCalledPage, {chamadoSelecionado: this.chamados[1]})
    } else if(fila = this.filas[2]){
      this.navCtrl.push(ConsultCalledPage, {chamadoSelecionado: this.chamados[2]})
    }

  }
  irParaDestinoChamado(chamado:Chamado):void{
    this.navCtrl.push(ConsultCalledPage, {chamadoSelecionado: chamado}); 
   }

   irParaDestino(fila:Fila):void{
     this.navCtrl.push(DestinoPage, {filaSelecionada: fila}); 
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultCalledPage');
  }

}
