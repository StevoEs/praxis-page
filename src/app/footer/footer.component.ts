import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'go-footer',
  standalone: true,
  imports: [RouterModule, MatMenuModule, MatButtonModule, MatIconModule,],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
