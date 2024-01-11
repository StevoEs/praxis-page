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


  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.XLarge, Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpoint$.subscribe(result => {
      this.breakpointChanged(result);
      this.breakpointObserver.observe([
        Breakpoints.XLarge,
        Breakpoints.Large,
        Breakpoints.Medium,
        Breakpoints.Small,
        Breakpoints.XSmall,
      ]).subscribe(result => {
        this.applyStyles(result);
      });
    });
  }

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

  private applyStyles(result: any) {
    if (result.matches) {
      if (this.breakpointObserver.isMatched(Breakpoints.XLarge)) {
        // Ändere hier die CSS-Stile für extra large Bildschirmgröße
      } else if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
        // Ändere hier die CSS-Stile für large Bildschirmgröße
      } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
        // Ändere hier die CSS-Stile für medium Bildschirmgröße
      } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
        // Ändere hier die CSS-Stile für small Bildschirmgröße
      } else if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
        // Ändere hier die CSS-Stile für extra small Bildschirmgröße
      }
    }
  }
}
