import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenOutletContexts, Router, RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatDrawer, MatDrawerMode, MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ContentComponent } from '../content/startseite/content.component';
import { MatToolbarModule } from '@angular/material/toolbar';

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

export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isMobile: boolean = true;
  isDesktop: boolean = false;
  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  toggle() {
    this.sidenav.toggle();
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private contexts: ChildrenOutletContexts,
    ) {}

    getRouteAnimationData() {
      return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }
  

  ngOnInit(): void {
 
    this.breakpointObserver.observe([
      Breakpoints.XLarge,
      Breakpoints.Large,
      Breakpoints.Medium
    ])
    .pipe()
    .subscribe(result => {
      if (result.matches && this.sidenav) {
        this.isDesktop = true;
        this.isMobile = false;
        this.sidenav.open();
        console.log("sidebar open");
      }
    });

    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ])
    .pipe()
    .subscribe(result => {
      if (result.matches && this.sidenav) {
        this.isMobile = true;
        this.isDesktop = false;
        this.sidenav.close();
        console.log("sidebar close");
      }
    });

        
    this.cdr.detectChanges();
  }

}




