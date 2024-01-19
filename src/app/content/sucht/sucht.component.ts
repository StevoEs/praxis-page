import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';

import { FooterComponent } from "../../footer/footer.component";

export interface Suchtberatung {
  name: string;
  adresse: string;
  telefon: string;
}


const SUCHTBERATUNGT_DATA: Suchtberatung[] = [
  {name: 'Drob Inn', adresse: 'Kurt-Schumacheralle 42', telefon: '24 46 07/08'},
  {name: 'Drogenberatung Eimsbüttel', adresse: 'Kaiser-Friedrich-Ufer 28a', telefon: '422 90 86'},
  {name: 'Die Brücke', adresse: 'Walddörferstraße 337', telefon: '66 61 33'},
  {name: 'Seehaus', adresse: 'Hasselbrookstraße 94 a', telefon: '20 00 10 10/11'},
  {name: 'Kodrobs Altona', adresse: 'Hohenesch 13-17', telefon: '390 86 41/40'},
  {name: 'Kodrobs Bergedorf', adresse: 'Lohbrügger Landstraße 6', telefon: '721 60 38/39'},
  {name: 'VIVA Wandsbek', adresse: 'Tonndorfer Hauptstraße 60', telefon: '668 20 88'},
  {name: 'Stay Alive', adresse: 'Davidstraße 30', telefon: '317 87 20'},
  {name: 'Palette 1', adresse: 'Bartelsstraße 12', telefon: '430 25 90'},
  {name: 'Palette 2', adresse: 'Paulinenallee 32', telefon: '439 90 71'},
  {name: 'Palette 3', adresse: 'Schillerstraße 44', telefon: '380 53 89'},
  {name: 'MAEX', adresse: 'Hammer Landstraße 56', telefon: '25 17 617'},
  {name: 'MAT West', adresse: 'Elbgaustraße 83', telefon: '571 931 31'}
];

@Component({
  selector: 'go-sucht',
  standalone: true,
  imports: [RouterModule, MatTableModule, FooterComponent],
  templateUrl: './sucht.component.html',
  styleUrl: './sucht.component.scss'
})
export class SuchtComponent {
  displayedColumns: string[] = ['name', 'adresse', 'telefon'];
  dataSource = new MatTableDataSource(SUCHTBERATUNGT_DATA);

  constructor() { }
}
