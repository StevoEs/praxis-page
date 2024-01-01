import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuchtComponent } from './sucht.component';

describe('SuchtComponent', () => {
  let component: SuchtComponent;
  let fixture: ComponentFixture<SuchtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuchtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuchtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
