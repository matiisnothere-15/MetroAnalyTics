import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Firebase } from 'src/app.firebase';

@Component({
  selector: 'app-insertar-tiempo-tras',
  templateUrl: './insertar-tiempo-tras.page.html',
  styleUrls: ['./insertar-tiempo-tras.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InsertarTiempotras implements OnInit {

  tiempo!: number;
  linea: string = '';
  estacionOrigen: string = '';
  estacionDestino: string = '';

  private app = new Firebase();

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.app.inicializarFirebase();
  }

  volverTiempotras() {
    this.navCtrl.navigateForward('/informe-tiempo');
  }

  async guardarTiempotras() {
    await this.app.insertarTiempotras(this.estacionDestino, this.estacionOrigen, '13 de diciembre', this.linea, this.tiempo);
    alert('Dato tiempo traslado guardado');
  }

}
