import { Routes } from '@angular/router';
import { CalculatorInputComponent } from './calculator-input/calculator-input.component';
import { HomeComponent } from './employees/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/employees', pathMatch: 'full' },
    {
        path: 'calculator',
        loadComponent: () => import('./calculator-input/calculator-input.component').then(m => m.CalculatorInputComponent)
    },
    { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
];
