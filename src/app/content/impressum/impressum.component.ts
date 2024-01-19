import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'go-impressum',
  standalone: true,
  imports: [RouterModule, FooterComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

}
