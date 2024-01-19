import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';

import { FooterComponent } from "../../footer/footer.component";

export interface Rehab {
  name: string;
  adresse: string;
  telefon: string;
}


const REHAB_DATA: Rehab[] = [
  {name: 'Klinikum Nord - Krankenhaus Ochsenzoll', adresse: 'Drogenentzugsstationen Hs. 25, 35 A+C Langenhorner Chaussee 560, 22419 Hamburg', telefon: '040 / 5271-2876'},
  {name: 'Heinrich-Sengelmann-Krankenhaus "Bella Vista"', adresse: 'Kayhuder Straße 65, 23863 Bargfeld-Stegen', telefon: '04535 / 505-0 /-251'},
  {name: 'Psychiatrisches Zentrum Ricklingen', adresse: 'Daldorfer Straße 2, 24635 Ricklingen', telefon: '04328 / 18196'},
  {name: 'Klinik Bockholt', adresse: 'Hanredder 30-32, 25335 Bockholt-Hanredder', telefon: '04123 / 90160'},
  {name: 'Krankenhaus Salzhausen', adresse: 'Bahnhoftraße 5, 21376 Salzhausen', telefon: '04172 / 966228'},
  {name: 'Landeskrankenhaus Lüneburg', adresse: 'Am Wienebütteler Weg 1, 21339 Lüneburg', telefon: '04131 / 601570'},
  {name: 'Fachklinik Heiligenhafen', adresse: 'Friedrich-Ebert-Straße 100, 23771 Heiligenhafen', telefon: '04362 / 910457'},
  {name: 'Fachklinik Ruheleben', adresse: '24306 Plön', telefon: '04522 / 9094'},
  {name: 'Ostseezentrum für seelische Gesundheit', adresse: 'Wiesenhof 23730 Neustadt', telefon: '04561 / 611-1'}
];


@Component({
  selector: 'go-entzug',
  standalone: true,
  imports: [RouterModule, MatTableModule, FooterComponent],
  templateUrl: './entzug.component.html',
  styleUrl: './entzug.component.scss'
})



export class EntzugComponent {
  displayedColumns: string[] = ['name', 'adresse', 'telefon'];
  dataSource = new MatTableDataSource(REHAB_DATA);

  constructor() { }
}
