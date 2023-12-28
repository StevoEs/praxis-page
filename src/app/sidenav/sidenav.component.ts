import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {MatSidenavModule} from '@angular/material/sidenav';
import {CdkMenu, CdkMenuItem} from '@angular/cdk/menu';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common'
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

export interface PeriodicElement {
  day: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {day: "Montag", time: "07:30 - 12:00"},
  {day: "Dienstag", time: "07:30 - 12:00"},
  {day: "Mittwoch", time: "07:30 - 12:00"},
  {day: "Donnerstag", time: "07:30 - 12:00"},
  {day: "Freitag", time: "Geschlossen"},
  {day: "Samstag", time: "07:30 - 10:45"},
  {day: "Sonntag", time: "Geschlossen"},
];


@Component({
  selector: 'go-sidenav',
  standalone: true,
  imports: [MatSidenavModule,
     CdkMenu, CdkMenuItem,
      RouterModule, MatMenuModule,
       MatButtonModule, NgOptimizedImage,
        MatTableModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})


export class SidenavComponent {
  displayedColumns: string[] = ['day', 'day', 'day', 'day', 'day', 'day'];
  dataSource = ELEMENT_DATA;
}
