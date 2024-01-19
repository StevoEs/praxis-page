import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GottbergComponent } from './gottberg.component';

describe('GottbergComponent', () => {
  let component: GottbergComponent;
  let fixture: ComponentFixture<GottbergComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GottbergComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GottbergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
