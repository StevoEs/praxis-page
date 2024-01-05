import { Component, OnInit, ViewChild} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {MatListModule} from '@angular/material/list';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { tap, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'go-header',
  standalone: true,
  imports: [
            RouterModule,
            CommonModule,
            MatToolbarModule, 
            MatButtonModule, 
            MatIconModule, 
            MatSidenavModule, 
            MatListModule,
            MatMenuModule,
          ],
          templateUrl: './header.component.html',
          styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit  {
  @ViewChild('topnav') topnav: any;
  
  Breakpoints = Breakpoints;
  currentBreakpoint:string = '';


  readonly breakpoint$ = this.breakpointObserver
  .observe([Breakpoints.XLarge, Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall,])
  .pipe(
    tap(value => console.log(value)),
    distinctUntilChanged()
  );
  
  shouldShowMenuButton(): boolean {
    // Überprüfe, ob die Bildschirmgröße größer als Medium ist
    return !this.breakpointObserver.isMatched(Breakpoints.Medium);
  }

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged() 
    );
  }

  private breakpointChanged() {
    if(this.breakpointObserver.isMatched(Breakpoints.XLarge)) {
      this.currentBreakpoint = Breakpoints.XLarge;

    } else if(this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.currentBreakpoint = Breakpoints.Large;

    } else if(this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium;

    } else if(this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.currentBreakpoint = Breakpoints.Small;


    } else if(this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      this.currentBreakpoint = Breakpoints.XSmall;
      

    }
  }

}

