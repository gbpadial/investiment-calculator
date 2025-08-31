import { Component, computed, input } from '@angular/core';
import { AnnualData } from '../shared/models/annual-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  templateUrl: './result.html',
  imports: [CommonModule],
  styleUrl: './result.css',
})
export class Result {
  data = input.required<AnnualData[]>();

  hasData = computed(() => this.data().length > 0);
}
