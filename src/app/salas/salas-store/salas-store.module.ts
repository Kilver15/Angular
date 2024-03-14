import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalasStoreComponent } from './salas-store.component';
import { RouterModule } from '@angular/router';
@NgModule({
 imports: [
    SalasStoreComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SalasStoreComponent },
    ]),
 ],
})

export class SalasStoreModule { }
