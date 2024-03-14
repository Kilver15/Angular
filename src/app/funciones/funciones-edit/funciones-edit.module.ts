import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionesEditComponent } from './funciones-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FuncionesEditComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FuncionesEditComponent },
    ]),
 ],
})
export class FuncionesEditModule { }
