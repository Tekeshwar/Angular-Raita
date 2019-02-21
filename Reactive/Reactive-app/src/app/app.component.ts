import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fb: FormBuilder) {

  }
  registrationForm = new FormGroup({
    name: new FormControl('Test name'),
    userEmail: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      postalCode: new FormControl()
    })
  });
  //Load data for all 
  loadApiData(){
    this.registrationForm.setValue({
      name:'Ashok',
      userEmail:'Ashok@impetus.co.in',
      password:'123',
      confirmPassword:'123',
      address:{
        city:'Indore',
        postalCode:'410001'
      }
    });

  }
  //Load only requered data
  loadPartialApiData(){
    this.registrationForm.patchValue({
      name:'Ashok',
      userEmail:'Ashok@impetus.co.in',
      password:'123',
      confirmPassword:'123'
    });

  }

}
