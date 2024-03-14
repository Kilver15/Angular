import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesIndexComponent } from './funciones-index.component';

describe('FuncionesIndexComponent', () => {
  let component: FuncionesIndexComponent;
  let fixture: ComponentFixture<FuncionesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionesIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncionesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
