import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withFetch()) // <-- utilise fetch au lieu de XMLHttpRequest
  ]
}).catch(err => console.error(err));
