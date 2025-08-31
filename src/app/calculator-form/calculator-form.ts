import { Component, output, signal } from '@angular/core';
import { Card } from '../shared/card/card';
import { LabeledInput } from '../shared/labeled-input/labeled-input';
import { FormsModule } from '@angular/forms';
import { CalculatorFormModel } from './calculator-form.model';
import { CalculateService } from '../calculate.service';
import { AnnualData } from '../shared/models/annual-data.model';

@Component({
  selector: 'app-calculator-form',
  imports: [Card, LabeledInput, FormsModule],
  templateUrl: './calculator-form.html',
  styleUrl: './calculator-form.css',
})
export class CalculatorForm {
  initialInvestment = signal<number>(0);
  annualInvestment = signal<number>(0);
  expectedReturn = signal<number>(0);
  duration = signal<number>(0);

  calculatedData = output<AnnualData[]>();

  constructor(private calculateSerice: CalculateService) {}

  private validateFields(): boolean {
    return (
      this.initialInvestment() >= 0 &&
      this.annualInvestment() >= 0 &&
      this.expectedReturn() > 0 &&
      this.duration() > 0
    );
  }

  onSubmit() {
    if (!this.validateFields()) {
      this.calculatedData.emit([]);
      alert('Please enter valid values in all fields.');
      return;
    }

    const formData: CalculatorFormModel = {
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    };

    var result = this.calculateSerice.calculateInvestmentResults(formData);

    console.log('Submitted');
    this.calculatedData.emit(result);
  }
}
