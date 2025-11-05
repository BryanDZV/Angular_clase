import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponentHtmlComponent {
  name = signal<string>('Ironman');

  age = signal<number>(45);
  getHeroDescription() {
    return `${this.name} - ${this.age}`;
  }
  changeHero() {
    this.name.update((current) => 'Spiderman');
    this.age.update((current) => 45);
  }
  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.update((current) => current + 15);
  }
}
