import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinesEditComponent } from './cines-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
imports: [
    CinesEditComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CinesEditComponent },
    ]),
 ],
})

export class CinesEditModule { }
