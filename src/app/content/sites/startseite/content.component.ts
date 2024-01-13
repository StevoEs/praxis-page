import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {MatSidenavModule} from '@angular/material/sidenav';
import {CdkMenu, CdkMenuItem} from '@angular/cdk/menu';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common'
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


export interface PeriodicElement {
  montag?: string;
  dienstag?: string;
  mittwoch?: string;
  donnerstag?: string;
  freitag?: string;
  samstag?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {montag: '07.30 - 12.00',
   dienstag: '07.30 - 12.00', 
   mittwoch: '07.30 - 12.00', 
   donnerstag: '07.30 - 12.00', 
   freitag: 'Geschlossen', 
   samstag: '07.30 - 10.45'},

];


@Component({
  selector: 'go-content',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    CdkMenu, 
    CdkMenuItem,
    RouterModule, 
    MatMenuModule,
    MatButtonModule, 
    NgOptimizedImage,
    MatTableModule, 
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})

export class ContentComponent {
  displayedColumns: string[] = ['montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag'];
  dataSource = ELEMENT_DATA;

}
