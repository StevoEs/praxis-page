import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfallComponent } from './notfall.component';

describe('NotfallComponent', () => {
  let component: NotfallComponent;
  let fixture: ComponentFixture<NotfallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotfallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
