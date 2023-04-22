import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ValidDirective } from '../directives/valid.directive';
import { BlankComponent } from '../components/blank/blank.component';
import { TableComponent } from '../components/table/table.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ValidDirective,
    BlankComponent,
    TableComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ValidDirective,
    BlankComponent,
    TableComponent
  ]
})
export class SharedModule { }
