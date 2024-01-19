import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakpointService } from '../../breakpoint.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'go-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [ MatToolbarModule, MatIconModule, CommonModule ]
})
export class HeaderComponent implements OnInit {

  isDrawerOpen: boolean = false;
  currentBreakpoint: string = '';
  isMobile: boolean = false;
  
  constructor(public breakpointService: BreakpointService) {}

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  ngOnInit(): void {


  }

  }


