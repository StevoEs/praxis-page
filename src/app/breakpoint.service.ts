// breakpoint.service.ts
import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  private isSmallScreen = new BehaviorSubject<boolean>(false);
  private isXSmallScreen = new BehaviorSubject<boolean>(false);
  private isMediumScreen = new BehaviorSubject<boolean>(false);
  private isLargeScreen = new BehaviorSubject<boolean>(false);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.initializeBreakpoints();
  }

  private initializeBreakpoints() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe()
      .subscribe((result) => {
        this.isSmallScreen.next(result.matches);
      });

    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe((result) => {
      this.isXSmallScreen.next(result.matches);
    });

    this.breakpointObserver.observe(Breakpoints.Medium).subscribe((result) => {
      this.isMediumScreen.next(result.matches);
    });

    this.breakpointObserver.observe(Breakpoints.Large).subscribe((result) => {
      this.isLargeScreen.next(result.matches);
    });
  }

  get isSmallScreen$() {
    return this.isSmallScreen.asObservable();
  }

  get isXSmallScreen$() {
    return this.isXSmallScreen.asObservable();
  }

  get isMediumScreen$() {
    return this.isMediumScreen.asObservable();
  }

  get isLargeScreen$() {
    return this.isLargeScreen.asObservable();
  }
}
