import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      userName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
    });
  }

  signUp() {
    this.http
      .post<any>('http://localhost:3000/registration', this.signupForm.value)
      .subscribe(
        (res) => {
          alert('registration is done');
          this.signupForm.reset();
          this.router.navigate(['']);
        },
        (err) => {
          console.log(err + 'registration');
        }
      );
  }

  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('lastName');
  }
  get userName() {
    return this.signupForm.get('userName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
}
