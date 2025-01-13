import { Routes } from '@angular/router';
import { CalculatorInputComponent } from './calculator-input/calculator-input.component';
import { HomeComponent } from './employees/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/employees', pathMatch: 'full' },
    // { path: 'employee/:id', component: EmployeeDetailComponent }, 
    { path: 'calculator', component: CalculatorInputComponent } ,// Calculator route
    { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
];
