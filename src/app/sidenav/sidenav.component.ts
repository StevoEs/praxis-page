import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {MatSidenavModule} from '@angular/material/sidenav';
import {CdkMenu, CdkMenuItem} from '@angular/cdk/menu';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common'
import {MatIconModule} from '@angular/material/icon';
import { ContentComponent } from '../content/sites/startseite/content.component';
import { GottbergComponent } from '../content/sites/gottberg/gottberg.component';

@Component({
  selector: 'go-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    CdkMenu, 
    CdkMenuItem,
    RouterModule, 
    MatMenuModule,
    MatButtonModule, 
    NgOptimizedImage,
    MatIconModule,
    ContentComponent,
    GottbergComponent,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})


export class SidenavComponent {

}
