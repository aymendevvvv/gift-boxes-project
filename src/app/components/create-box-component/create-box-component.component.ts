import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'app-create-box-component',
  standalone: true,
  imports: [ButtonModule, StepperModule],
  templateUrl: './create-box-component.component.html',
  styleUrl: './create-box-component.component.scss'
})
export class CreateBoxComponentComponent {

}
