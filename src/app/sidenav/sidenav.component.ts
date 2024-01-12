import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ContentComponent } from '../content/sites/startseite/content.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { FooterComponent } from "../footer/footer.component";



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
    ]
})

export class SidenavComponent implements OnInit {
  @ViewChild(MatDrawer) drawer!: MatDrawer;

  isMobile = false;
  currentBreakpoint: string = '';

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XLarge,
      Breakpoints.Large,
      Breakpoints.Medium
    ])
    .pipe()
    .subscribe(result => {
      if (result.matches && this.drawer) { // Überprüfe, ob this.drawer definiert ist
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
      if (result.matches && this.drawer) { // Überprüfe, ob this.drawer definiert ist
        this.isMobile = true;
        this.drawer.close();
        console.log("sidebar close");
      }
    });
  }

  private breakpointChanged(result: any) {
    if (result.matches) {
      if (this.breakpointObserver.isMatched(Breakpoints.XLarge)) {
        this.currentBreakpoint = Breakpoints.XLarge;
      } else if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
        this.currentBreakpoint = Breakpoints.Large;
      } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
        this.currentBreakpoint = Breakpoints.Medium;
      } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
        this.currentBreakpoint = Breakpoints.Small;
      } else if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
        this.currentBreakpoint = Breakpoints.XSmall;
      }
    }
  }
/*
  private breakpointChanged(result: any) {
    if (result.matches) {
      if (this.breakpointObserver.isMatched(Breakpoints.XLarge)) {
        this.currentBreakpoint = Breakpoints.XLarge;
        if (this.drawer) {
          this.isMobile = false;
          this.drawer.open();
          console.log("sidebar open");
        }
      } else if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
        this.currentBreakpoint = Breakpoints.Large;
        if (this.drawer) {
          this.isMobile = false;
          this.drawer.open();
          console.log("sidebar open");
        }
      } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
        this.currentBreakpoint = Breakpoints.Medium;
        if (this.drawer) {
          this.isMobile = false;
          this.drawer.open();
          console.log("sidebar open");
        }

      } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
        this.currentBreakpoint = Breakpoints.Small;
        if (this.drawer) {
          this.isMobile = true;
          this.drawer.close();
          console.log("sidebar close");
        }
      } else if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
        this.currentBreakpoint = Breakpoints.XSmall;
        if (this.drawer) {
          this.isMobile = true;
          this.drawer.close();
          console.log("sidebar close");
        }
      }
    }
  }
*/
}
