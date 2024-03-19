import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersIndexComponent } from './users-index.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    UsersIndexComponent,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersIndexComponent },
    ]),
 ],
})
export class UsersIndexModule { }
