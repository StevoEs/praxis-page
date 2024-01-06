import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';




@Component({
  selector: 'go-header',
  standalone: true,
  imports: [
            RouterModule,
            CommonModule,
            MatButtonModule, 
            MatIconModule, 
          ],
          templateUrl: './header.component.html',
          styleUrl: './header.component.scss'
})
export class HeaderComponent  {

}

