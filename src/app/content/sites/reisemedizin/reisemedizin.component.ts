import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';

import { FooterComponent } from "../../../footer/footer.component";


export interface Reisemedizin {
  webadresse: string;
  beschreibung: string;
}

const REISEMEDIZIN_DATA: Reisemedizin[] = [
  {webadresse: 'CRM - Centrum für Reisemedizin', beschreibung: 'Informationen für die medizinische Vorbereitung Ihrer Reise.Themen: Reiseländer, Krankheiten, Impfungen, Beratungsstellen, Aktuelle Meldungen.'},
  {webadresse: 'Die Reisemedizin', beschreibung: 'Reisemedizinische Informationen zu vielen Ländern werden hier durch den gewerblichen Dienstleister B·A·D Gesundheitsvorsorge und Sicherheitstechnik GmbH angeboten.'},
  {webadresse: 'STIKO', beschreibung: 'Homepage des Robert-Koch-Institutes und der ständigen Impfkommission (STIKO) mit Informationen über Infektionserkrankungen und Impfungen.'},
  {webadresse: 'Deutsches grünes Kreuz', beschreibung: 'Das Deutsche Grüne Kreuz (DGK) ist die älteste gemeinnützige Vereinigung (e. V.) zur Förderung der gesundheitlichen Vorsorge und Kommunikation in Deutschland. Auf diesen Seiten finden Sie ebenfalls Informationen über Infektionserkrankungen und Schutzimpfungen.'}
];

@Component({
  selector: 'go-reisemedizin',
  standalone: true,
  imports: [RouterModule, MatTableModule, FooterComponent],
  templateUrl: './reisemedizin.component.html',
  styleUrl: './reisemedizin.component.scss'
})



export class ReisemedizinComponent {
title = 'Reisemedizin';

displayedColumns: string[] = ['webadresse', 'beschreibung'];
dataSource = new MatTableDataSource(REISEMEDIZIN_DATA);
}
