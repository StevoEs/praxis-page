import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntzugComponent } from './entzug.component';

describe('EntzugComponent', () => {
  let component: EntzugComponent;
  let fixture: ComponentFixture<EntzugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntzugComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntzugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
