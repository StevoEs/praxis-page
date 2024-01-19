import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from "../../../footer/footer.component";

@Component({
  selector: 'go-page-not-found',
  standalone: true,
  imports: [RouterModule, FooterComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
