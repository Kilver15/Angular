import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesStoreComponent } from './funciones-store.component';

describe('FuncionesStoreComponent', () => {
  let component: FuncionesStoreComponent;
  let fixture: ComponentFixture<FuncionesStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionesStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncionesStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
