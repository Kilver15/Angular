import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoletosIndexComponent } from './boletos-index.component';
import { RouterModule } from '@angular/router';

@NgModule({
 imports: [
    BoletosIndexComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BoletosIndexComponent },
    ]),
 ],
})

export class BoletosIndexModule { }
