import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasEditComponent } from './peliculas-edit.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    PeliculasEditComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PeliculasEditComponent },
    ]),
  ]
})
export class PeliculasEditModule { }
