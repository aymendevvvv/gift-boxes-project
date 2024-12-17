import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';



bootstrapApplication(AppComponent, 
  {
    providers: [provideProtractorTestingSupport(), provideRouter(routes), provideAnimations()],
  }
)
  .catch((err) => console.error(err));
