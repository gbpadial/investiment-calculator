import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { CalculatorForm } from './calculator-form/calculator-form';
import { Result } from './result/result';
import { AnnualData } from './shared/models/annual-data.model';

@Component({
  selector: 'app-root',
  imports: [Header, CalculatorForm, Result],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  data: AnnualData[] = [];

  onCalculate(calculatedData: AnnualData[]) {
    this.data = calculatedData;
  }
}
