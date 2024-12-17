import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { MyPreset } from './../assets/themes/mytheme';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({ 
            theme: {
                preset: MyPreset,
                options: {
                    cssLayer: {
                        name: 'primeng',
                        order: 'tailwind-base, primeng, tailwind-utilities'
                    }
                }
            }
        }),
        provideClientHydration(), 
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
    ]
};