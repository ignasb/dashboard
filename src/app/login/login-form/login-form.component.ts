import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoginCredentials } from 'src/app/core/models/data/user';
import { UserApiService } from 'src/app/core/services/user-api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private readonly apiService: UserApiService) {}

  ngOnInit(): void {}

  public login(credentials: ILoginCredentials): void {
    if (this.loginForm.valid) {
      this.apiService.login$(credentials).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log('error occured' + error);
        },
      });
    }
  }
}
