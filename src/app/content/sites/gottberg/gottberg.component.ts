import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'go-gottberg',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './gottberg.component.html',
  styleUrl: './gottberg.component.scss'
})
export class GottbergComponent {

}
