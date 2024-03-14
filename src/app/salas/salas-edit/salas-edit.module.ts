import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalasEditComponent } from './salas-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
 imports: [
    SalasEditComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SalasEditComponent },
    ]),
 ],
})

export class SalasEditModule { }
