import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoletosEditComponent } from './boletos-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
 imports: [
    BoletosEditComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BoletosEditComponent },
    ]),
 ],
})

export class BoletosEditModule { }
