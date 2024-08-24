import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular'; // Importa NavController aquí

import 'boxicons';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistroPage implements OnInit {

  constructor(private navCtrl: NavController) { // Inyecta NavController en el constructor
  }

  ngOnInit() {
  }

  redirigirHome() {
    this.navCtrl.navigateForward('/home')
  }
  volverLogin() {
    this.navCtrl.navigateForward("/login")
  }

}

