import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsIndexComponent } from './logs-index.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
     LogsIndexComponent,
     CommonModule,
     RouterModule.forChild([
       { path: '', component: LogsIndexComponent },
     ]),
  ],
 })
export class LogsIndexModule { }
