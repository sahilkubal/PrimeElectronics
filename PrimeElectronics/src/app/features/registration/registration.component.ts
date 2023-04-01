import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  RegistrationForm = new FormGroup(
    {
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required ]),
      password: new FormControl("",[Validators.required])
    }
  )

  get email(): FormControl{
    return this.RegistrationForm.get('email') as FormControl
  }

  get phone(): FormControl{
    return this.RegistrationForm.get('phone') as FormControl
  }

  get password(): FormControl{
    return this.RegistrationForm.get('password') as FormControl
  }

  register() {
    window.alert(
      this.RegistrationForm.value.email,
      
    )
  }

}
