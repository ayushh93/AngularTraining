import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../Models/employee.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  employees : Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  // Method to navigate to the detail page
  viewDetails(id: number): void {
    this.router.navigate(['/employee', id]);
  }
}
