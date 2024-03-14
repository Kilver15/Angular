import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinesIndexComponent } from './cines-index.component';

describe('CinesIndexComponent', () => {
  let component: CinesIndexComponent;
  let fixture: ComponentFixture<CinesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinesIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CinesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
