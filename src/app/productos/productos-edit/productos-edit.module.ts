import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosEditComponent } from '../productos-edit/productos-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
imports: [
    ProductosEditComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductosEditComponent } 
    ]),
 ],
})

export class ProductosEditModule { }
