import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormatNumberPipe } from "../Pipes/format-number.pipe";

@Component({
  selector: 'app-calculator-result',
  standalone : true,
  imports: [CommonModule, FormatNumberPipe],
  templateUrl: './calculator-result.component.html',
  styleUrl: './calculator-result.component.scss'
})
export class CalculatorResultComponent {
  @Input() result: number | null = null;
}
