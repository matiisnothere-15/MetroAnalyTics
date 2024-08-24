import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Firebase } from 'src/app.firebase';

@Component({
  selector: 'app-insertar-est-origen',
  templateUrl: './insertar-est-origen.page.html',
  styleUrls: ['./insertar-est-origen.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InsertarEstorigen implements OnInit {

  conteo!: number;
  linea: string = '';
  nombreEstacion: string = '';

  private app = new Firebase();

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.app.inicializarFirebase();
  }

  volverEstorigen() {
    this.navCtrl.navigateForward('/informe-origen');
  }

  async guardarEstorigen() {
    await this.app.insertarEstorigen(this.conteo, this.linea, this.nombreEstacion);
    alert('Dato Estación origen guardado');
  }

}
