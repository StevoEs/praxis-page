import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

import { FooterComponent } from "../../../footer/footer.component";

@Component({
  selector: 'go-gottberg',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage, FooterComponent],
  templateUrl: './gottberg.component.html',
  styleUrl: './gottberg.component.scss'
})
export class GottbergComponent {

}
