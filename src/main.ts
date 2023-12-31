import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
