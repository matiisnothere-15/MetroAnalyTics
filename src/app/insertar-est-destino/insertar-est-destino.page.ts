import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Firebase } from 'src/app.firebase';

@Component({
  selector: 'app-insertar-est-destino',
  templateUrl: './insertar-est-destino.page.html',
  styleUrls: ['./insertar-est-destino.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InsertarEstdestino implements OnInit {

  conteo!: number;
  bus: string = '';

  private app = new Firebase();

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.app.inicializarFirebase();
  }

  volverEstorigen() {
    this.navCtrl.navigateForward('/informe-destino');
  }

  async guardarEstdestino() {
    await this.app.insertarRecorridoBuses(this.conteo, this.bus, "bus");
    alert('Recorrido guardado');
  }

}
