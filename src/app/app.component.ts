import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgOptimizedImage } from '@angular/common';


import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from '../app/header/header.component';
import { FooterComponent } from '../app/footer/footer.component';


@Component({
  selector: 'go-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet, 
            RouterLink,
            RouterLinkActive,
            MatSidenavModule, 
            MatToolbarModule,
            MatMenuModule,
            MatIconModule,
            NgOptimizedImage,
            MatProgressSpinnerModule,
            HeaderComponent, 
            FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})



export class AppComponent  {
  title = 'praxis-page';

}


