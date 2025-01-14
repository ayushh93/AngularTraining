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

  submitForm(form: any) {
    if (form.valid) {
      console.log('Form submitted successfully:', this.formData);
    } else {
      console.log('Form is invalid');
    }
}
}
