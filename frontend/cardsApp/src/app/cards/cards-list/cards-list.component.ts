import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardService } from '../services/card.service';
import { CardPipe } from '../pipes/card.pipe';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardPipe],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css'
})
export class CardsListComponent {
  cards;

  constructor(private cardService: CardService) {
    this.cards = this.cardService.cards;
  }

  deleteCard(index: number) {
    this.cardService.deleteCard(index);
  }
}
