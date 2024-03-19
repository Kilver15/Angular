import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersEditComponent } from './users-edit.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    UsersEditComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersEditComponent },
    ]),
 ],
})
export class UsersEditModule { }
