import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatronComponent } from './components/patron/patron.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PatronComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[PatronComponent]
})
export class PruebaModule { }
