import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  titulo = 'USUARIOS';
  usuarios: Usuario[] = [];
  estadoBoton = '';
  estadoPaquete = 'x';
  paquete = '';

  manejadorPaquete() {
    switch (this.estadoPaquete) {
      case 'pendiente':
        this.paquete = 'pendiente';
        break;
      case 'enviado':
        this.paquete = 'enviado';
        break;
      default:
        this.paquete = 'no se encuentra su estado';
        break;
    }
  }

  manejadorClass() {
    return {
      activado: this.estadoBoton === 'on',
      desactivado: this.estadoBoton === 'off',
      error: this.estadoBoton === 'error',
    };
  }
}
