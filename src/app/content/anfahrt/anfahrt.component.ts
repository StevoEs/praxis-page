import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgOptimizedImage } from '@angular/common'
import { GoogleMapsModule } from '@angular/google-maps'

import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'go-anfahrt',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage, GoogleMapsModule, FooterComponent],
  templateUrl: './anfahrt.component.html',
  styleUrl: './anfahrt.component.scss'
})
export class AnfahrtComponent  {

}
