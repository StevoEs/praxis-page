import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';

export interface Hepatitis {
  adresse: string;
  anbieter: string;
}


const HEPATITIS_DATA: Hepatitis[] = [
  {adresse: 'http://www.bzga.de', anbieter: 'Bundeszentrale für gesundheitliche Aufklärung'},
  {adresse: 'http://www.uke-uni-hamburg.de', anbieter: 'Uniklinik Hamburg-Eppendorf, Institut für Infektionsmedizin'},
  {adresse: 'http://www.kompetenznetz-hepatitis.de', anbieter: 'Medizinische Hochschule Hannover'},
  {adresse: 'http://www.leberhilfe.org', anbieter: 'Deutsche Leberhilfe e.V.'},
  {adresse: 'http://www.hepatitis-c.de', anbieter: 'Deutsches Hepatitis-C-Forum e.V.'}
];
@Component({
  selector: 'go-hepatitis',
  standalone: true,
  imports: [RouterModule, MatTableModule],
  templateUrl: './hepatitis.component.html',
  styleUrl: './hepatitis.component.scss'
})
export class HepatitisComponent {
  displayedColumns: string[] = ['adresse', 'anbieter'];
  dataSource = new MatTableDataSource(HEPATITIS_DATA);

  constructor() { }
}
