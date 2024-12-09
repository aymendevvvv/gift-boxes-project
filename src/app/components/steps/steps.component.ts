import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { ChooseBoxComponent } from './choose-box/choose-box.component';
import { ChooseCardComponent } from './choose-card/choose-card.component';
import { ChooseItemsComponent } from './choose-items/choose-items.component';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [ButtonModule, StepperModule, ChooseBoxComponent, ChooseCardComponent, ChooseItemsComponent, ReviewComponent],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent {

}

