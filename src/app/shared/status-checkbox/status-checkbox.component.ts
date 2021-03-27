import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-status-checkbox',
  templateUrl: './status-checkbox.component.html',
  styleUrls: ['./status-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: StatusCheckboxComponent,
      multi: true,
    },
  ],
})
export class StatusCheckboxComponent implements ControlValueAccessor {
  value = false;
  disabled: boolean = false;
  onChange: any = (value: boolean) => {};
  onTouched: any = () => {};
  constructor() {}

  writeValue(value: boolean) {
    this.value = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  toggleStatus() {
    this.value = !this.value;
    this.onChange(this.value);
  }
}
