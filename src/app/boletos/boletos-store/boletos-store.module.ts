import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoletosStoreComponent } from './boletos-store.component';
import { RouterModule } from '@angular/router';

@NgModule({
 imports: [
    BoletosStoreComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BoletosStoreComponent },
    ]),
 ],
})

export class BoletosStoreModule { }
