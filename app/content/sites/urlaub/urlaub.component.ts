import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {ContentComponent} from "../startseite/content.component";

@Component({
  selector: 'go-urlaub',
  standalone: true,
  imports: [RouterModule, ContentComponent],
  templateUrl: './urlaub.component.html',
  styleUrl: './urlaub.component.scss'
})
export class UrlaubComponent {

}
