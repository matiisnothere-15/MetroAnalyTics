import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular'; // Importa NavController aquí

import 'boxicons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController) { // Inyecta NavController en el constructor
  }

  ngOnInit() {
  }

  redirigirHome() {
    this.navCtrl.navigateForward('/home')
  }

  recuperar() {
    this.navCtrl.navigateForward('/recuperar-cuenta');
  }
  registrar() {
    this.navCtrl.navigateForward("/registro")
  }

}

