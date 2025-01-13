import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { HomeComponent } from './home/home.component';
import { employeeGuardGuard } from '../guards/employee-guard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: EmployeeDetailComponent,canActivate: [employeeGuardGuard] }
];

@NgModule({
  declarations: [HomeComponent,EmployeeDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeesModule { }
