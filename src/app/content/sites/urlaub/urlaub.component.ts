import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {ContentComponent} from "../startseite/content.component"; // kann eventuel weg
import { FooterComponent } from "../../../footer/footer.component";

@Component({
  selector: 'go-urlaub',
  standalone: true,
  imports: [RouterModule, ContentComponent, FooterComponent],
  templateUrl: './urlaub.component.html',
  styleUrl: './urlaub.component.scss'
})
export class UrlaubComponent {

}
