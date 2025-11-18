import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rickmorty } from '../../services/rickmorty';

@Component({
  selector: 'app-rick-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rick-list.html',
})
export class RickListComponent implements OnInit {
  private rickService = inject(Rickmorty);

  characters = signal<any[]>([]);
  selectedCharacter = signal<any | null>(null);

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.rickService.getCharacters().subscribe((data) => {
      this.characters.set(data.results);
    });
  }

  showDetails(character: any): void {
    this.selectedCharacter.set(character);
  }
}
