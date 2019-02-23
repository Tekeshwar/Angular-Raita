import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get name() {
    return this.registrationForm.get('name');
  }
  constructor(private fb: FormBuilder) { }
  //  FormBuilder service is to create instances of a FormControl,
  //  FormGroup, or FormArray.It reduces the amount of boilerplate needed to build complex forms.
  registrationForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    userEmail: [''],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      postalCode: ['']
    })
  });

  // registrationForm = new FormGroup({
  //   name: new FormControl('Test name'),
  //   userEmail: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     postalCode: new FormControl()
  //   })
  // });

  // Load data for all
  loadApiData() {
    this.registrationForm.setValue({
      name: 'Ashok',
      userEmail: 'Ashok@impetus.co.in',
      password: '123',
      confirmPassword: '123',
      address: {
        city: 'Indore',
        postalCode: '410001'
      }
    });

  }
  // Load only requered data
  loadPartialApiData() {
    this.registrationForm.patchValue({
      name: 'Ashok',
      userEmail: 'Ashok@impetus.co.in',
      password: '123',
      confirmPassword: '123'
    });

  }

}
