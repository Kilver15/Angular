import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosStoreComponent } from './productos-store.component';
import { RouterModule } from '@angular/router';

@NgModule({
imports: [
    ProductosStoreComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductosStoreComponent } 
    ]),
 ],
})

export class ProductosStoreModule { }
