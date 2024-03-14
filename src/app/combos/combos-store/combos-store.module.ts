import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombosStoreComponent } from './combos-store.component';
import { RouterModule } from '@angular/router';

@NgModule({
 imports: [
    CombosStoreComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CombosStoreComponent },
    ]),
 ],
})

export class CombosStoreModule { }
