import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasIndexComponent } from './salas-index.component';

describe('SalasIndexComponent', () => {
  let component: SalasIndexComponent;
  let fixture: ComponentFixture<SalasIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalasIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalasIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
