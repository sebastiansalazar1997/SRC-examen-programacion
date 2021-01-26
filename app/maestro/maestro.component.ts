import { MaestroService } from './../services/maestro.service';
import { Detalle } from './../interfaces/detalle';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
})
export class MaestroComponent implements OnInit {


  botonMaestro:boolean | null = null;
  detalles: Detalle[] | null = null;

  detalleSeleccionado: Detalle | null = null;
  constructor(private maestroService: MaestroService) {
   }

  ngOnInit(): void {
    this.botonMaestro = false;
    this.getDetalles();
  }
  obtenerDetalles(){

  }
  switchInformacion(){
    this.botonMaestro=true;
  }
  onSelect(detalle: Detalle): void {
    this.detalleSeleccionado = detalle;
  }
  getDetalles(): void {
    this.detalles = this.maestroService.getDetalles();
  }

}
