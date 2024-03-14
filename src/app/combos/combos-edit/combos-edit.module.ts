import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombosEditComponent } from './combos-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
 imports: [
    CombosEditComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CombosEditComponent },
    ]),
 ],
})

export class CombosEditModule { }
