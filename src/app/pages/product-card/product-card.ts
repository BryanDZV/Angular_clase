import { Component, Input } from '@angular/core';
import { UserCard } from '../user-card/user-card';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [UserCard],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  respuestaHijo = 'estoy bien';
  recepcion = 'aun no he recibido nada';
  manejadorEvento(mensaje: string) {
    this.recepcion = mensaje;
    console.log('mensaje recibido en el padre', mensaje);
  }
}
