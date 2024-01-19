import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'go-team',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage, FooterComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

}
