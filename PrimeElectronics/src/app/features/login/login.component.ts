import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
  }

  LoginForm = new FormGroup(
    {
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    }
  )

  get email(): FormControl{
    return this.LoginForm.get("email") as FormControl
  }

  get password(): FormControl{
    return this.LoginForm.get("password") as FormControl
  }

  login() {
    console.log(this.LoginForm.value)
    // window.alert(this.LoginForm.value.email)
  }

}
