import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasIndexComponent } from './peliculas-index.component';

describe('PeliculasIndexComponent', () => {
  let component: PeliculasIndexComponent;
  let fixture: ComponentFixture<PeliculasIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
