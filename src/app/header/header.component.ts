import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'go-header',
  standalone: true,
  imports: [
            RouterModule,
            MatToolbarModule, 
            MatButtonModule, 
            MatIconModule, 
            MatSidenavModule, 
            MatListModule,
          ],
          templateUrl: './header.component.html',
          styleUrl: './header.component.scss'
})
export class HeaderComponent  {


}
