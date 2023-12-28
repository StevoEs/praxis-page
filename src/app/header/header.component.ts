import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";


@Component({
  selector: 'go-header',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  {

}
