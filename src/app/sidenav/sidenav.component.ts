import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenOutletContexts, Router, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


import { MatDrawer, MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ContentComponent } from '../content/sites/startseite/content.component';
import { MatToolbarModule } from '@angular/material/toolbar';


import { FooterComponent } from "../footer/footer.component";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
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

export class SidenavComponent implements OnInit {
  @ViewChild(MatDrawer) drawer!: MatDrawer;

  //Proberty initalisieren//
  isDrawerOpen: boolean = true
  currentBreakpoint: string = '';
  isMobile: boolean = false;
  drawerMode: MatDrawerMode = 'side';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private contexts: ChildrenOutletContexts,
    ) {}

    getRouteAnimationData() {
      return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }
  
// click events
  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
  closeDrawer() {
    this.isDrawerOpen = false;
  }
  openDrawer() {
    this.isDrawerOpen = true;
  }


  ngOnInit(): void {
 
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




