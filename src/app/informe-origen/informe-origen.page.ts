import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
import Chart from 'chart.js/auto';
import { Firebase } from 'src/app.firebase';
import { DocumentData } from 'firebase/firestore';

@Component({
  selector: 'app-informe-origen',
  templateUrl: './informe-origen.page.html',
  styleUrls: ['./informe-origen.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InformeOrigenPage implements OnInit {
  @ViewChild('chartEstacionesOrigenL1', { static: true }) chartEstacionesOrigenL1!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartEstacionesOrigenL2', { static: true }) chartEstacionesOrigenL2!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartEstacionesOrigenL3', { static: true }) chartEstacionesOrigenL3!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartEstacionesOrigenL4', { static: true }) chartEstacionesOrigenL4!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartEstacionesOrigenL4A', { static: true }) chartEstacionesOrigenL4A!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartEstacionesOrigenL5', { static: true }) chartEstacionesOrigenL5!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartEstacionesOrigenL6', { static: true }) chartEstacionesOrigenL6!: ElementRef<HTMLCanvasElement>;

  chartGraficoEstacionesOrigenL1: any;
  chartGraficoEstacionesOrigenL2: any;
  chartGraficoEstacionesOrigenL3: any;
  chartGraficoEstacionesOrigenL4: any;
  chartGraficoEstacionesOrigenL4A: any;
  chartGraficoEstacionesOrigenL5: any;
  chartGraficoEstacionesOrigenL6: any;

  app = new Firebase();

  constructor(private navCtrl: NavController) { }

  async ngOnInit() {
    this.app.inicializarFirebase();

    let estacionesL1: DocumentData = await this.app.obtenerDatosEstacionesOrigen('L1');

    this.chartGraficoEstacionesOrigenL1 = new Chart(this.chartEstacionesOrigenL1.nativeElement, {
      type: 'bar',
      data: {
        labels: [estacionesL1[0].nombre_estacion, estacionesL1[1].nombre_estacion, estacionesL1[2].nombre_estacion, estacionesL1[3].nombre_estacion],
        datasets: [{
          label: 'Cantidad de pasajeros',
          data: [estacionesL1[0].conteo, estacionesL1[1].conteo, estacionesL1[2].conteo, estacionesL1[3].conteo],
          borderWidth: 1,
          backgroundColor: '#ec1d25'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    let estacionesL2: DocumentData = await this.app.obtenerDatosEstacionesOrigen('L2');

    this.chartGraficoEstacionesOrigenL2 = new Chart(this.chartEstacionesOrigenL2.nativeElement, {
      type: 'bar',
      data: {
        labels: [estacionesL2[0].nombre_estacion, estacionesL2[1].nombre_estacion, estacionesL2[2].nombre_estacion, estacionesL2[3].nombre_estacion],
        datasets: [{
          label: 'Cantidad de pasajeros',
          data: [estacionesL2[0].conteo, estacionesL2[1].conteo, estacionesL2[2].conteo, estacionesL2[3].conteo],
          borderWidth: 1,
          backgroundColor: '#ec1d25'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    let estacionesL3: DocumentData = await this.app.obtenerDatosEstacionesOrigen('L3');

    this.chartGraficoEstacionesOrigenL3 = new Chart(this.chartEstacionesOrigenL3.nativeElement, {
      type: 'bar',
      data: {
        labels: [estacionesL3[0].nombre_estacion, estacionesL3[1].nombre_estacion, estacionesL3[2].nombre_estacion, estacionesL3[3].nombre_estacion],
        datasets: [{
          label: 'Cantidad de pasajeros',
          data: [estacionesL3[0].conteo, estacionesL3[1].conteo, estacionesL3[2].conteo, estacionesL3[3].conteo],
          borderWidth: 1,
          backgroundColor: '#ec1d25'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    let estacionesL4: DocumentData = await this.app.obtenerDatosEstacionesOrigen('L4');

    this.chartGraficoEstacionesOrigenL4 = new Chart(this.chartEstacionesOrigenL4.nativeElement, {
      type: 'bar',
      data: {
        labels: [estacionesL4[0].nombre_estacion, estacionesL4[1].nombre_estacion, estacionesL4[2].nombre_estacion, estacionesL4[3].nombre_estacion],
        datasets: [{
          label: 'Cantidad de pasajeros',
          data: [estacionesL4[0].conteo, estacionesL4[1].conteo, estacionesL4[2].conteo, estacionesL4[3].conteo],
          borderWidth: 1,
          backgroundColor: '#ec1d25'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    let estacionesL4A: DocumentData = await this.app.obtenerDatosEstacionesOrigen('L4A');

    this.chartGraficoEstacionesOrigenL4A = new Chart(this.chartEstacionesOrigenL4A.nativeElement, {
      type: 'bar',
      data: {
        labels: [estacionesL4A[0].nombre_estacion, estacionesL4A[1].nombre_estacion, estacionesL4A[2].nombre_estacion, estacionesL4A[3].nombre_estacion],
        datasets: [{
          label: 'Cantidad de pasajeros',
          data: [estacionesL4A[0].conteo, estacionesL4A[1].conteo, estacionesL4A[2].conteo, estacionesL4A[3].conteo],
          borderWidth: 1,
          backgroundColor: '#ec1d25'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    let estacionesL5: DocumentData = await this.app.obtenerDatosEstacionesOrigen('L5');

    this.chartGraficoEstacionesOrigenL5 = new Chart(this.chartEstacionesOrigenL5.nativeElement, {
      type: 'bar',
      data: {
        labels: [estacionesL5[0].nombre_estacion, estacionesL5[1].nombre_estacion, estacionesL5[2].nombre_estacion, estacionesL5[3].nombre_estacion],
        datasets: [{
          label: 'Cantidad de pasajeros',
          data: [estacionesL5[0].conteo, estacionesL5[1].conteo, estacionesL5[2].conteo, estacionesL5[3].conteo],
          borderWidth: 1,
          backgroundColor: '#ec1d25'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    let estacionesL6: DocumentData = await this.app.obtenerDatosEstacionesOrigen('L6');

    this.chartGraficoEstacionesOrigenL6 = new Chart(this.chartEstacionesOrigenL6.nativeElement, {
      type: 'bar',
      data: {
        labels: [estacionesL6[0].nombre_estacion, estacionesL6[1].nombre_estacion, estacionesL6[2].nombre_estacion, estacionesL6[3].nombre_estacion],
        datasets: [{
          label: 'Cantidad de pasajeros',
          data: [estacionesL6[0].conteo, estacionesL6[1].conteo, estacionesL6[2].conteo, estacionesL6[3].conteo],
          borderWidth: 1,
          backgroundColor: '#ec1d25'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });


  }
  irInsertarEstorigen() {
    this.navCtrl.navigateForward('/insertar-est-origen');
  }

  //======================================Generacion de informe PDF por lineas===========================================
  generarInformeEstacionesOrigenL1() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    var dd = {
      content: [
        {
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAoCAYAAAC1tctzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4wIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzZDQjc4MjVEQTYxMUVDOEU2NEZCMzVGNDRBMzM0NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzZDQjc4MzVEQTYxMUVDOEU2NEZCMzVGNDRBMzM0NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzNkNCNzgwNURBNjExRUM4RTY0RkIzNUY0NEEzMzQ0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzNkNCNzgxNURBNjExRUM4RTY0RkIzNUY0NEEzMzQ0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rlL9RwAADrZJREFUeNrsXGl0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',
        },
        {
          text: `\n\nFecha de generación: ${hoy.toLocaleDateString()}`,
          fontSize: 10
        },
        {
          text: `\n\n\nFlujo de pasajeros de las estaciones de origen del metro linea 1\n\n\n`,
          fontSize: 15,
          bold: true,
        },
        {
          image: this.chartEstacionesOrigenL1.nativeElement.toDataURL(),
          width: 500
        },
      ],

      
    }

    const documentDefinition = dd;
    pdfMake.createPdf(documentDefinition).download('Estaciones de origen.pdf');
  }

  generarInformeEstacionesOrigenL2() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    var dd = {
      content: [
        {
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAoCAYAAAC1tctzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4wIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzZDQjc4MjVEQTYxMUVDOEU2NEZCMzVGNDRBMzM0NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzZDQjc4MzVEQTYxMUVDOEU2NEZCMzVGNDRBMzM0NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzNkNCNzgwNURBNjExRUM4RTY0RkIzNUY0NEEzMzQ0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzNkNCNzgxNURBNjExRUM4RTY0RkIzNUY0NEEzMzQ0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rlL9RwAADrZJREFUeNrsXGl0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',
        },
        {
          text: `\n\nFecha de generación: ${hoy.toLocaleDateString()}`,
          fontSize: 10
        },
        {
          text: `\n\n\nFlujo de pasajeros de las estaciones de origen del metro linea 2\n\n\n`,
          fontSize: 15,
          bold: true,
        },
        {
          image: this.chartEstacionesOrigenL2.nativeElement.toDataURL(),
          width: 500
        },
      ],

      
    }

    const documentDefinition = dd;
    pdfMake.createPdf(documentDefinition).download('Estaciones de origen.pdf');
  }

  generarInformeEstacionesOrigenL3() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    var dd = {
      content: [
        {
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAoCAYAAAC1tctzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4wIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzZDQjc4MjVEQTYxMUVDOEU2NEZCMzVGNDRBMzM0NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzZDQjc4MzVEQTYxMUVDOEU2NEZCMzVGNDRBMzM0NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzNkNCNzgwNURBNjExRUM4RTY0RkIzNUY0NEEzMzQ0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzNkNCNzgxNURBNjExRUM4RTY0RkIzNUY0NEEzMzQ0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rlL9RwAADrZJREFUeNrsXGl0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',
        },
        {
          text: `\n\nFecha de generación: ${hoy.toLocaleDateString()}`,
          fontSize: 10
        },
        {
          text: `\n\n\nFlujo de pasajeros de las estaciones de origen del metro linea 3\n\n\n`,
          fontSize: 15,
          bold: true,
        },
        {
          image: this.chartEstacionesOrigenL3.nativeElement.toDataURL(),
          width: 500
        },
      ],

      
    }

    const documentDefinition = dd;
    pdfMake.createPdf(documentDefinition).download('Estaciones de origen.pdf');
  }

  generarInformeEstacionesOrigenL4() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    var dd = {
      content: [
        {
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAoCAYAAAC1tctzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4wIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzZDQjc4MjVEQTYxMUVDOEU2NEZCMzVGNDRBMzM0NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzZDQjc4MzVEQTYxMUVDOEU2NEZCMzVGNDRBMzM0NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzNkNCNzgwNURBNjExRUM4RTY0RkIzNUY0NEEzMzQ0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzNkNCNzgxNURBNjExRUM4RTY0RkIzNUY0NEEzMzQ0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rlL9RwAADrZJREFUeNrsXGl0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',
        },
        {
          text: `\n\nFecha de generación: ${hoy.toLocaleDateString()}`,
          fontSize: 10
        },
        {
          text: `\n\n\nFlujo de pasajeros de las estaciones de origen del metro linea 4\n\n\n`,
          fontSize: 15,
          bold: true,
        },
        {
          image: this.chartEstacionesOrigenL4.nativeElement.toDataURL(),
          width: 500
        },
      ],

      
    }

    const documentDefinition = dd;
    pdfMake.createPdf(documentDefinition).download('Estaciones de origen.pdf');
  }

  generarInformeEstacionesOrigenL4A() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    var dd = {
      content: [
        {
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAoCAYAAAC1tctzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4wIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzZDQjc4MjVEQTYxMUVDOEU2NEZCMzVGNDRBMzM0NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzZDQjc4MzVEQTYxMUVDOEU2NEZCMzVGNDRBMzM0NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzNkNCNzgwNURBNjExRUM4RTY0RkIzNUY0NEEzMzQ0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzNkNCNzgxNURBNjExRUM4RTY0RkIzNUY0NEEzMzQ0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rlL9RwAADrZJREFUeNrsXGl0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',
        },
        {
          text: `\n\nFecha de generación: ${hoy.toLocaleDateString()}`,
          fontSize: 10
        },
        {
          text: `\n\n\nFlujo de pasajeros de las estaciones de origen del metro linea 4A\n\n\n`,
          fontSize: 15,
          bold: true,
        },
        {
          image: this.chartEstacionesOrigenL4A.nativeElement.toDataURL(),
          width: 500
        },
      ],

      
    }

    const documentDefinition = dd;
    pdfMake.createPdf(documentDefinition).download('Estaciones de origen.pdf');
  }

  generarInformeEstacionesOrigenL5() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    var dd = {
      content: [
        {
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAoCAYAAAC1tctzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4wIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzZDQjc4MjVEQTYxMUVDOEU2NEZCMzVGNDRBMzM0NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzZDQjc4MzVEQTYxMUVDOEU2NEZCMzVGNDRBMzM0NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzNkNCNzgwNURBNjExRUM4RTY0RkIzNUY0NEEzMzQ0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzNkNCNzgxNURBNjExRUM4RTY0RkIzNUY0NEEzMzQ0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rlL9RwAADrZJREFUeNrsXGl0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',
        },
        {
          text: `\n\nFecha de generación: ${hoy.toLocaleDateString()}`,
          fontSize: 10
        },
        {
          text: `\n\n\nFlujo de pasajeros de las estaciones de origen del metro linea 5\n\n\n`,
          fontSize: 15,
          bold: true,
        },
        {
          image: this.chartEstacionesOrigenL5.nativeElement.toDataURL(),
          width: 500
        },
      ],

      
    }

    const documentDefinition = dd;
    pdfMake.createPdf(documentDefinition).download('Estaciones de origen.pdf');
  }

  generarInformeEstacionesOrigenL6() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    var dd = {
      content: [
        {
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAoCAYAAAC1tctzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4wIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzZDQjc4MjVEQTYxMUVDOEU2NEZCMzVGNDRBMzM0NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzZDQjc4MzVEQTYxMUVDOEU2NEZCMzVGNDRBMzM0NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzNkNCNzgwNURBNjExRUM4RTY0RkIzNUY0NEEzMzQ0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzNkNCNzgxNURBNjExRUM4RTY0RkIzNUY0NEEzMzQ0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rlL9RwAADrZJREFUeNrsXGl0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',
        },
        {
          text: `\n\nFecha de generación: ${hoy.toLocaleDateString()}`,
          fontSize: 10
        },
        {
          text: `\n\n\nFlujo de pasajeros de las estaciones de origen del metro linea 6\n\n\n`,
          fontSize: 15,
          bold: true,
        },
        {
          image: this.chartEstacionesOrigenL6.nativeElement.toDataURL(),
          width: 500
        },
      ],

      
    }

    const documentDefinition = dd;
    pdfMake.createPdf(documentDefinition).download('Estaciones de origen.pdf');
  }

  volverAtras() {
    this.navCtrl.navigateRoot('/home');
  }

}
