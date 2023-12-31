import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'go-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatCardModule, SidenavComponent, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'praxis-page';

}
