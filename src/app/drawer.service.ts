import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  private isDrawerOpenSubject = new BehaviorSubject<boolean>(false);
  isDrawerOpen$ = this.isDrawerOpenSubject.asObservable();

  toggleDrawer(): void {
    this.isDrawerOpenSubject.next(!this.isDrawerOpenSubject.value);
  }
}
