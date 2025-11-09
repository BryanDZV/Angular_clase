import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  name = signal('Iroman');
  age = signal(45);

  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  });

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
    console.log('cambiando nombre y edad');
  }
  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
  changeAge() {
    this.age.set(60);
  }
}
