import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondCodeComponent } from './beyond-code.component';

describe('BeyondCodeComponent', () => {
  let component: BeyondCodeComponent;
  let fixture: ComponentFixture<BeyondCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeyondCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeyondCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
