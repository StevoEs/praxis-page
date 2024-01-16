import { Component, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ContentComponent } from '../content/sites/startseite/content.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FooterComponent } from "../footer/footer.component";
import { slideInAnimation } from '../animations';



@Component({
    selector: 'go-sidenav',
    standalone: true,
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    imports: [
        CommonModule,
        MatSidenavModule,
        RouterModule,
        MatMenuModule,
        MatButtonModule,
        MatToolbarModule,
        NgOptimizedImage,
        MatIconModule,
        ContentComponent,
        FooterComponent,
    ],
    animations: [
      slideInAnimation
    ]
})

export class SidenavComponent implements AfterViewInit {
@ViewChild(MatDrawer) drawer!: MatDrawer;

  isMobile = false;
  currentBreakpoint: string = '';


  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private router: Router  // Router hinzufügen
  ) { }

  ngAfterViewInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XLarge,
      Breakpoints.Large,
      Breakpoints.Medium
    ])
    .pipe()
    .subscribe(result => {
      if (result.matches && this.drawer) {
        this.isMobile = false;
        this.drawer.open();
        console.log("sidebar open");
      }
    });

    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ])
    .pipe()
    .subscribe(result => {
      if (result.matches && this.drawer) {
        this.isMobile = true;
        this.drawer.close();
        console.log("sidebar close");
      }
    });

        
    this.cdr.detectChanges();
  }
}

