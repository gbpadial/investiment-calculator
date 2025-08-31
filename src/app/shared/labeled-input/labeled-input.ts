import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-labeled-input',
  imports: [],
  templateUrl: './labeled-input.html',
  styleUrl: './labeled-input.css',
})
export class LabeledInput {
  label = input.required<string>();
  value: string = '0';
  error: string = '';

  inputValue = output<number>();

  onChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    const numericValue = parseFloat(inputElement.value);
    if (isNaN(numericValue) || numericValue < 0) {
      this.error = 'Please enter a valid non-negative number.';
    } else {
      this.error = '';
    }
    this.inputValue.emit(numericValue);
  }
}
