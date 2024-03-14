import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosStoreComponent } from './combos-store.component';

describe('CombosStoreComponent', () => {
  let component: CombosStoreComponent;
  let fixture: ComponentFixture<CombosStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombosStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombosStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
