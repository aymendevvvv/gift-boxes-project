import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { SlideshowComponent } from './slideshow/slideshow.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ButtonModule, RippleModule, AnimateOnScrollModule, SlideshowComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
