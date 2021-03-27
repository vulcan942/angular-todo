import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCheckboxComponent } from './status-checkbox/status-checkbox.component';

@NgModule({
  declarations: [StatusCheckboxComponent],
  imports: [CommonModule],
  exports: [StatusCheckboxComponent],
})
export class SharedModule {}
