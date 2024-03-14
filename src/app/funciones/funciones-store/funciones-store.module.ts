import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionesStoreComponent } from './funciones-store.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FuncionesStoreComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FuncionesStoreComponent },
    ]),
 ],
})
export class FuncionesStoreModule { }
