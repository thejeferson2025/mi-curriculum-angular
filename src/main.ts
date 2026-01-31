
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//Importamos desde el archivo oficial 'app.component'
import { AppComponent } from './app/app.component';

//  Arrancamos con 'AppComponent'
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));