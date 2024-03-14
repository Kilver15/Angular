import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalasIndexComponent } from './salas-index.component';
import { RouterModule } from '@angular/router';

@NgModule({
 imports: [
    SalasIndexComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SalasIndexComponent },
    ]),
 ],
})

export class SalasIndexModule { }
