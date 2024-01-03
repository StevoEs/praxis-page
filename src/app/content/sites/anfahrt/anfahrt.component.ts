import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'go-anfahrt',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './anfahrt.component.html',
  styleUrl: './anfahrt.component.scss'
})
export class AnfahrtComponent {

}
