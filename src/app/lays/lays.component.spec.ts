import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaysComponent } from './lays.component';

describe('LaysComponent', () => {
  let component: LaysComponent;
  let fixture: ComponentFixture<LaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
