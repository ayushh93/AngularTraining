import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {
  formData = {
    fullName: '',
    address1: '',
    phoneNumber: '',
    age: null,
    district: ''
  };

  submitForm() {
    console.log('Form Submitted:', this.formData);
  }
}
