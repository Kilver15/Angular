import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletosIndexComponent } from './boletos-index.component';

describe('BoletosIndexComponent', () => {
  let component: BoletosIndexComponent;
  let fixture: ComponentFixture<BoletosIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoletosIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoletosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
