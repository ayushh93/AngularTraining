import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../Services/employee.service';
import { Employee } from '../../Models/employee.model';

@Component({
  selector: 'app-employee-detail',
  standalone: false,
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss'
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee | null | undefined = undefined; 

  constructor(
    private route: ActivatedRoute,  // To access route parameters
    private employeeService: EmployeeService  // To fetch employee data from service
  ) {}

  ngOnInit(): void {
    // Get the employee ID from the route parameter
    const id = Number(this.route.snapshot.paramMap.get('id'));  // Convert to number

    // Fetch the employee details using the ID
    this.employeeService.getEmployeeById(id).subscribe((employee) => {
      this.employee = employee;
    });
  }
}
