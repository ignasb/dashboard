import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILoginCredentials } from 'src/app/core/models/user';
import { UserApiService } from 'src/app/core/services/user-api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  @Output()
  loggingIn: EventEmitter<ILoginCredentials> = new EventEmitter();

  constructor() {}

  public login(credentials: ILoginCredentials): void {
    if (this.loginForm.valid) {
      this.loggingIn.emit(credentials);
    }
  }
}
