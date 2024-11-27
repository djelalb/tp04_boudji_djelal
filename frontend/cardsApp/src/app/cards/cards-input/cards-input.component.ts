import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-cards-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cards-input.component.html',
  styleUrls: ['./cards-input.component.css']
})
export class CardsInputComponent {
  cardsForm;

  constructor(private fb: FormBuilder, private cardService: CardService) {
    this.cardsForm = this.fb.group({
      nom: ['', Validators.required],
      codePan: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      ccv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      mois: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])$/)]],
      annee: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
    });
  }

  onSubmit() {
    if (this.cardsForm.valid) {
      this.cardService.addCard(this.cardsForm.value as {
        nom: string;
        codePan: string;
        ccv: string;
        mois: string;
        annee: string;
      });
      this.cardsForm.reset();
    }
  }
  
}
