import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombosIndexComponent } from './combos-index.component';
import { RouterModule } from '@angular/router';

@NgModule({
 imports: [
    CombosIndexComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CombosIndexComponent },
    ]),
 ],
})

export class CombosIndexModule { }
