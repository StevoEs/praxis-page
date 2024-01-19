import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { FooterComponent } from '../app/footer/footer.component';
import { SidenavComponent } from "./sidenav/sidenav.component";
import { slideInAnimation } from './animations';


@Component({
    selector: 'go-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        MatSidenavModule,
        MatMenuModule,
        MatIconModule,
        NgOptimizedImage,
        MatProgressSpinnerModule,
        FooterComponent,
        SidenavComponent
      ],
        animations: [
          slideInAnimation
        ]
})



export class AppComponent  {
  title = 'praxis-page';

}


