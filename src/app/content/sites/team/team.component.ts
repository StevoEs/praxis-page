import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'go-team',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

}
