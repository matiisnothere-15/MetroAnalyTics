import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Firebase } from 'src/app.firebase';

@Component({
  selector: 'app-insertar-flujo-pas',
  templateUrl: './insertar-flujo-pas.page.html',
  styleUrls: ['./insertar-flujo-pas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InsertarFlujoPasPage implements OnInit {

  conteo!: number;
  linea: string = '';
  nombreEstacion: string = '';

  private app = new Firebase();

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.app.inicializarFirebase();
  }

  volverFlujoPas() {
    this.navCtrl.navigateForward('/informe');
  }

  async guardarFlujoPas() {
    await this.app.insertarFlujoPas(this.conteo, this.linea, this.nombreEstacion);
    alert('Dato Flujo pasajeros guardado');
  }

}
