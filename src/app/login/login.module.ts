import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginShellComponent } from './login-shell/login-shell.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginShellComponent, LoginFormComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule],
})
export class LoginModule {}
