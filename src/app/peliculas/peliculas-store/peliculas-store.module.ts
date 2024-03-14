import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasStoreComponent } from './peliculas-store.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    PeliculasStoreComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PeliculasStoreComponent },
    ]),
  ]
})
export class PeliculasStoreModule { }
