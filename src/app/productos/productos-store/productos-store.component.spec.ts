import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosStoreComponent } from './productos-store.component';

describe('ProductosStoreComponent', () => {
  let component: ProductosStoreComponent;
  let fixture: ComponentFixture<ProductosStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
