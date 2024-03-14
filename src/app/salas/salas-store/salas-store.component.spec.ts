import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasStoreComponent } from './salas-store.component';

describe('SalasStoreComponent', () => {
  let component: SalasStoreComponent;
  let fixture: ComponentFixture<SalasStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalasStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalasStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
