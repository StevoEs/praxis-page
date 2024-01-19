import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from "../../../footer/footer.component";

@Component({
  selector: 'go-datenschutz',
  standalone: true,
  imports: [RouterModule, FooterComponent],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent {

}
