import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../../services/trabajador.service';
import { Trabajador } from '../../models/trabajador';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html'
})
export class TrabajadoresComponent implements OnInit {
  trabajadores: Trabajador[] = [];
  nuevo: Trabajador = { nombre: '', activo: true };

  constructor(private servicio: TrabajadorService) {}

  ngOnInit(): void {
    this.cargarTrabajadores();
  }

  cargarTrabajadores() {
    this.servicio.listar().subscribe(data => this.trabajadores = data);
  }

  agregar() {
    if (!this.nuevo.nombre.trim()) return;

    this.servicio.crear(this.nuevo).subscribe(() => {
      this.nuevo = { nombre: '', activo: true };
      this.cargarTrabajadores();
    });
  }
}
