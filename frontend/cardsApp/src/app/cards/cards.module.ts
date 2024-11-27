import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsInputComponent } from './cards-input/cards-input.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardService } from './services/card.service';
import { CardPipe } from './pipes/card.pipe';

@NgModule({
  declarations: [
    CardsInputComponent,
    CardsListComponent,
    CardPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [CardService],
  exports: [CardsInputComponent, CardsListComponent]
})
export class CardsModule { }
