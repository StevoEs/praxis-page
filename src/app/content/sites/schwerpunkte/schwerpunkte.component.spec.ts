import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchwerpunkteComponent } from './schwerpunkte.component';

describe('SchwerpunkteComponent', () => {
  let component: SchwerpunkteComponent;
  let fixture: ComponentFixture<SchwerpunkteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchwerpunkteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchwerpunkteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
