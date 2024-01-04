import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDrawer } from '@angular/material/sidenav';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CdkMenu, CdkMenuItem} from '@angular/cdk/menu';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common'
import {MatIconModule} from '@angular/material/icon';
import { ContentComponent } from '../content/sites/startseite/content.component';

//import { HeaderComponent } from "../header/header.component";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs/operators';
//import { GottbergComponent } from '../content/sites/gottberg/gottberg.component'; test-delete

@Component({
  selector: 'go-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
  //  HeaderComponent,
    CdkMenu, 
    CdkMenuItem,
    RouterModule, 
    MatMenuModule,
    MatButtonModule, 
    NgOptimizedImage,
    MatIconModule,
    ContentComponent,
   // GottbergComponent, test-delete
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})


export class SidenavComponent implements OnInit {
  @ViewChild(MatDrawer) drawer!: MatDrawer;
  
  Breakpoints = Breakpoints;
  currentBreakpoint:string = '';

  readonly breakpoint$ = this.breakpointObserver
  .observe([Breakpoints.XLarge, Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
  .pipe(
    tap(value => console.log(value)),
    distinctUntilChanged()
  );

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
      this.openDrawer();

    } else if(this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.currentBreakpoint = Breakpoints.Small;
      this.closeDrawer();


    } else if(this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      this.currentBreakpoint = Breakpoints.XSmall;
    }
  }

  private closeDrawer() {
    // Überprüfe, ob die Drawer-Instanz existiert, um Fehler zu vermeiden
    if (this.drawer) {
      this.drawer.close();
    }
  }

  private openDrawer() {
    // Überprüfe, ob die Drawer-Instanz existiert, um Fehler zu vermeiden
    if (this.drawer) {
      this.drawer.open();
    }
  }


}
