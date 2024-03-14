import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinesStoreComponent } from './cines-store.component';
import { RouterModule } from '@angular/router';

@NgModule({
 imports: [
    CinesStoreComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CinesStoreComponent },
    ]),
 ],
})

export class CinesStoreModule { }
