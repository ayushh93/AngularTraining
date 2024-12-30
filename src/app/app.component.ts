import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorInputComponent } from "./calculator-input/calculator-input.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculatorInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularTraining';
}
