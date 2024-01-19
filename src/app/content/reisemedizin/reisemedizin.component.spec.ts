import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReisemedizinComponent } from './reisemedizin.component';

describe('ReisemedizinComponent', () => {
  let component: ReisemedizinComponent;
  let fixture: ComponentFixture<ReisemedizinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReisemedizinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReisemedizinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
