import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDrawer } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ContentComponent } from '../content/sites/startseite/content.component';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'go-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    NgOptimizedImage,
    MatIconModule,
    ContentComponent,
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  @ViewChild(MatDrawer) drawer!: MatDrawer;

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
        if (this.drawer) {
          this.drawer.open();
        }

      } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
        this.currentBreakpoint = Breakpoints.Small;
        if (this.drawer) {
          this.drawer.close();
        }
      } else if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
        this.currentBreakpoint = Breakpoints.XSmall;
      }
    }
  }
}
