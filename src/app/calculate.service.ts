import { Injectable } from '@angular/core';
import { CalculatorFormModel } from './calculator-form/calculator-form.model';
import { AnnualData } from './shared/models/annual-data.model';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  calculateInvestmentResults(params: CalculatorFormModel): AnnualData[] {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = params;
    const annualData: AnnualData[] = [];

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return annualData;
  }
}
