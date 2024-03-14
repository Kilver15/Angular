import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletosEditComponent } from './boletos-edit.component';

describe('BoletosEditComponent', () => {
  let component: BoletosEditComponent;
  let fixture: ComponentFixture<BoletosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoletosEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoletosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
