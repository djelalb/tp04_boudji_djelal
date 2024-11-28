import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsInputComponent } from './cards/cards-input/cards-input.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsInputComponent, CardsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cardsApp';

  @ViewChild(CardsInputComponent) cardsInputComponent!: CardsInputComponent;

  handleEditRequest(event: { index: number; card: { nom: string; codePan: string; ccv: string; mois: string; annee: string } }) {
    this.cardsInputComponent.editCard(event.index, event.card);
  }
}