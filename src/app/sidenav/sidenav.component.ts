import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {CdkMenu, CdkMenuItem} from '@angular/cdk/menu';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'go-sidenav',
  standalone: true,
  imports: [CdkMenu, CdkMenuItem, RouterModule, MatMenuModule, MatButtonModule, MatIconModule ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

}
