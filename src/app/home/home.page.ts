import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  goInformeFlujoPas() {
    this.navCtrl.navigateRoot('/informe')
  }

  goInformeTiempo() {
    this.navCtrl.navigateRoot('/informe-tiempo')
  }

  goInformeDestino() {
    this.navCtrl.navigateRoot('/informe-destino')
  }

  goInformeEstacionOrigen() {
    this.navCtrl.navigateRoot('/informe-origen')
  }

}
