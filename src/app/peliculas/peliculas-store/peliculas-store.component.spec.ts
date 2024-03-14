import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasStoreComponent } from './peliculas-store.component';

describe('PeliculasStoreComponent', () => {
  let component: PeliculasStoreComponent;
  let fixture: ComponentFixture<PeliculasStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
