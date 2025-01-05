import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Employee } from '../Models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees : Employee[]= [
    {
      id: 1,
      name: 'John Doe',
      department: 'Engineering',
      status: 'Active',
      address: '123 Main St, Cityville',
      phone: '+1234567890',
      email: 'johndoe@example.com',
      position: 'Software Engineer',
      joiningDate: '2020-01-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'HR',
      status: 'Inactive',
      address: '456 Elm St, Townsville',
      phone: '+9876543210',
      email: 'janesmith@example.com',
      position: 'HR Manager',
      joiningDate: '2019-08-01',
    },
  ];

   getEmployees() {
    return of(this.employees);
  }

  getEmployeeById(id: number) {
    const employee = this.employees.find((emp) => emp.id === id);
    return of(employee);
  }
}
