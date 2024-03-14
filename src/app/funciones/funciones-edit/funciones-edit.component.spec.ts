import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesEditComponent } from './funciones-edit.component';

describe('FuncionesEditComponent', () => {
  let component: FuncionesEditComponent;
  let fixture: ComponentFixture<FuncionesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuncionesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
