import { Routes } from '@angular/router';
import { CalculatorInputComponent } from './calculator-input/calculator-input.component';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Home route
    { path: 'employee/:id', component: EmployeeDetailComponent }, 
    { path: 'calculator', component: CalculatorInputComponent } // Calculator route
];
