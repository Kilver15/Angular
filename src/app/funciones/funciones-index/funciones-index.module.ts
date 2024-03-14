import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionesIndexComponent } from './funciones-index.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FuncionesIndexComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FuncionesIndexComponent },
    ]),
 ],
})
export class FuncionesIndexModule { }
