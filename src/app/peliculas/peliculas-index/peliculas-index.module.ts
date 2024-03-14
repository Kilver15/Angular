import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasIndexComponent } from './peliculas-index.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    PeliculasIndexComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PeliculasIndexComponent },
    ]),
  ]
})
export class PeliculasIndexModule { }
