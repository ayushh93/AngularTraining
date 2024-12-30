import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../Services/calculator.service';
import { CalculatorResultComponent } from '../calculator-result/calculator-result.component';
import { HasRoleDirective } from '../Directives/has-role.directive';

@Component({
  selector: 'app-calculator-input',
  standalone : true,
  imports: [FormsModule,CalculatorResultComponent,HasRoleDirective],
  templateUrl: './calculator-input.component.html',
  styleUrl: './calculator-input.component.scss'
})
export class CalculatorInputComponent {
number1 : number | null = null;
number2 : number | null = null;
result : number | null = null;
operation : string = "";
role: string = 'admin'; 
constructor(private calculatorService : CalculatorService){}

calculate() : void
{
    if(this.number1 === null || this.number2 === null)
    {
      alert("Enter valid numbers!");
      return;
    }
    switch(this.operation)
    {
      case 'add':
        this.result = this.calculatorService.add(this.number1, this.number2);
        break;
      case 'subtract':
        this.result = this.calculatorService.subtract(this.number1, this.number2);
        break;
      case 'multiply':
        this.result = this.calculatorService.multiply(this.number1, this.number2);
        break;
      case 'divide':
          this.result = this.calculatorService.divide(this.number1, this.number2);
        break;
      default:
        alert('Please select an operation.');
    }
}
}
