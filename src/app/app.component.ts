import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from './components/header/header.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent, AnimateOnScrollModule, HomepageComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(private primengConfig: PrimeNGConfig) {}

  title = 'gift-boxes-project';

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
