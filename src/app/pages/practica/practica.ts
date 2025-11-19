import { Component } from '@angular/core';

@Component({
  selector: 'app-practica',
  imports: [],
  templateUrl: './practica.html',
  styleUrl: './practica.css',
})
export class Practica {
  titulo = 'Lista de productos';
  contador = 0;

  producto = { nombre: 'Teclado', precio: 25 };

  productos = [
    { nombre: 'Teclado', precio: 25 },
    { nombre: 'Ratón', precio: 15 },
    { nombre: 'Monitor', precio: 150 },
  ];
}
