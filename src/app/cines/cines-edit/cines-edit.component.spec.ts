import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinesEditComponent } from './cines-edit.component';

describe('CinesEditComponent', () => {
  let component: CinesEditComponent;
  let fixture: ComponentFixture<CinesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CinesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
