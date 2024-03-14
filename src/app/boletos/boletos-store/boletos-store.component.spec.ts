import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletosStoreComponent } from './boletos-store.component';

describe('BoletosStoreComponent', () => {
  let component: BoletosStoreComponent;
  let fixture: ComponentFixture<BoletosStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoletosStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoletosStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
