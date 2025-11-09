import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-user-card', //nombre del componente en el que estas
  templateUrl: './user-card.html', //plantilla html del componnte
  styleUrl: './user-card.css', //plantilla csss del componente
})
export class UserCard {
  @Input() respuestaPadre = '';
  @Output() notificacion = new EventEmitter<string>();
  mensaje = 'rodo esta bien';
  enviarMensaje() {
    this.notificacion.emit(this.mensaje);
    console.log('se ha emitido el mensaje');
  }

  contador: number = 0;
  counterSignal = signal(100);

  sumar(x: number) {
    this.contador += x;
    this.counterSignal.update((current) => current + x);
  }
  restar(j: number) {
    this.contador -= j;
  }
  reset() {
    this.contador = 0;

    this.counterSignal.set(0);
  }
}
