import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinesIndexComponent } from './cines-index.component';
import { RouterModule } from '@angular/router';

@NgModule({
 imports: [
    CinesIndexComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CinesIndexComponent },
    ]),
 ],
})

export class CinesIndexModule { }
