import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string | null = null;
  loading: boolean = false
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {

  }

  onSubmit(): void {
    this.loading = true;
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.login(email, password).subscribe((res) => {
      const token = res.access_token;
      this.authService.setToken(token);
      this.router.navigate(['/users']);
    },
      (err) => {
        console.error('login Failed', err);
        this.errorMessage = "Email or Password are incorrect try again!";
        setTimeout(() => {
          this.errorMessage = "";
        }, 2000);
      },

    )
    this.loading = false
  }

}
