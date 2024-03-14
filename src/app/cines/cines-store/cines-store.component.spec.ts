import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinesStoreComponent } from './cines-store.component';

describe('CinesStoreComponent', () => {
  let component: CinesStoreComponent;
  let fixture: ComponentFixture<CinesStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CinesStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CinesStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
