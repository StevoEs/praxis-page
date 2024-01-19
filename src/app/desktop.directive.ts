import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[side-drawer]',
  standalone: true
})
export class DesktopDirective {
  @HostBinding() get class() {
    return 'opened';
  }
  constructor() { }

}
