import { Component } from '@angular/core';
import { Alumno } from './alumnos';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  alumnos: Alumno[] = [
    { nombre: 'Juan', edad: 20, promedio: 85 },
    { nombre: 'María', edad: 22, promedio: 92 },
    { nombre: 'Pedro', edad: 21, promedio: 78 },
  ];
}
