import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';

export interface Notdienst {
  name: string;
  adresse: string;
  telefon: string;
}

const NOTDIENST_DATA: Notdienst[] = [
  {name: 'Ärztlicher Notdienst der KV Hamburg, Hausbesuche von 19-7 Uhr, Mi 13-7 Uhr Sa., So & Feiertage ganztägig', adresse: '', telefon: '228022'},
  {name: 'Notfallpraxis Altona Öffnungszeiten: Mo., Di., Do und Fr. 19-24 Uhr, Mi 13-24 Uhr, Sa., So & Feiertage 7-24 Uhr', adresse: 'Stresemannstraße 54', telefon: ''},
  {name: 'Diensthabende Apotheken im Bezirk Altona', adresse: '', telefon: '228022'},
  {name: 'Diensthabende Apotheken im Bezirk Mitte', adresse: '', telefon: '228022'},
  {name: 'Vergiftungs-Informationszentrale', adresse: '', telefon: '0761 - 19240'},
  {name: 'Corona-Test-Hotline', adresse: '', telefon: '116117'}
];

@Component({
  selector: 'go-notfall',
  standalone: true,
  imports: [RouterModule,
            MatTableModule,
          ],
  templateUrl: './notfall.component.html',
  styleUrl: './notfall.component.scss'
})
export class NotfallComponent {
  displayedColumns: string[] = ['name', 'adresse', 'telefon'];
  dataSource = new MatTableDataSource(NOTDIENST_DATA);

  constructor() { }
}
