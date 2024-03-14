import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosIndexComponent } from './combos-index.component';

describe('CombosIndexComponent', () => {
  let component: CombosIndexComponent;
  let fixture: ComponentFixture<CombosIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombosIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
