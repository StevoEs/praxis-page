import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

export interface Tile {
  cols: number;
  rows: number;
  class: string;
}

@Component({
  selector: 'go-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatGridListModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'praxis-page';
 
    tiles: Tile[] = [
      {class: 'header', cols: 4, rows: 1},
      {class: 'sidenav', cols: 1, rows: 6},
      {class: 'content', cols: 3, rows: 6},
      {class: 'footer', cols: 4, rows: 1},
    ];

}
