import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosIndexComponent } from '../productos-index/productos-index.component';
import { RouterModule } from '@angular/router';



@NgModule({
imports: [
    ProductosIndexComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductosIndexComponent } 
    ]),
 ],
})

export class ProductosIndexModule { }