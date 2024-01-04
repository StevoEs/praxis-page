import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

import { HeaderComponent } from '../app/header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from '../app/footer/footer.component';


@Component({
  selector: 'go-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet, 
            RouterLink,
            RouterLinkActive,
            MatCardModule, 
            SidenavComponent, 
            MatProgressSpinnerModule,
            HeaderComponent, 
            FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})



export class AppComponent  {
  title = 'praxis-page';

}


