import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-eliminar-flujo-pas',
  templateUrl: './eliminar-flujo-pas.page.html',
  styleUrls: ['./eliminar-flujo-pas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EliminarFlujoPasPage implements OnInit {

  constructor(private ctrNav: NavController) { }

  ngOnInit() {
  }

  irInforme() {
    this.ctrNav.navigateForward('/informe')
  }

  

}
